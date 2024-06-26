"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _createConnector = _interopRequireDefault(require("../core/createConnector"));
var _indexUtils = require("../core/indexUtils");
var _utils = require("../core/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var namespace = 'menu';
function getId(props) {
  return props.attribute;
}
function getCurrentRefinement(props, searchState, context) {
  var currentRefinement = (0, _indexUtils.getCurrentRefinementValue)(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), null);
  if (currentRefinement === '') {
    return null;
  }
  return currentRefinement;
}
function getValue(value, props, searchState, context) {
  var currentRefinement = getCurrentRefinement(props, searchState, context);
  return value === currentRefinement ? '' : value;
}
function getLimit(_ref) {
  var showMore = _ref.showMore,
    limit = _ref.limit,
    showMoreLimit = _ref.showMoreLimit;
  return showMore ? showMoreLimit : limit;
}
function _refine(props, searchState, nextRefinement, context) {
  var id = getId(props);
  var nextValue = _defineProperty({}, id, nextRefinement ? nextRefinement : '');
  var resetPage = true;
  return (0, _indexUtils.refineValue)(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return (0, _indexUtils.cleanUpValue)(searchState, context, "".concat(namespace, ".").concat(getId(props)));
}
var defaultSortBy = ['count:desc', 'name:asc'];

/**
 * connectMenu connector provides the logic to build a widget that will
 * give the user the ability to choose a single value for a specific facet.
 * @name connectMenu
 * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 * @kind connector
 * @propType {string} attribute - the name of the attribute in the record
 * @propType {boolean} [showMore=false] - true if the component should display a button that will expand the number of items
 * @propType {number} [limit=10] - the minimum number of diplayed items
 * @propType {number} [showMoreLimit=20] - the maximun number of displayed items. Only used when showMore is set to `true`
 * @propType {string} [defaultRefinement] - the value of the item selected by default
 * @propType {boolean} [searchable=false] - allow search inside values
 * @providedPropType {function} refine - a function to toggle a refinement
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 * @providedPropType {string} currentRefinement - the refinement currently applied
 * @providedPropType {array.<{count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the Menu can display.
 * @providedPropType {function} searchForItems - a function to toggle a search inside items values
 * @providedPropType {boolean} isFromSearch - a boolean that says if the `items` props contains facet values from the global search or from the search inside items.
 */
var _default = (0, _createConnector.default)({
  displayName: 'AlgoliaMenu',
  $$type: 'ais.menu',
  propTypes: {
    attribute: _propTypes.default.string.isRequired,
    showMore: _propTypes.default.bool,
    limit: _propTypes.default.number,
    showMoreLimit: _propTypes.default.number,
    defaultRefinement: _propTypes.default.string,
    transformItems: _propTypes.default.func,
    searchable: _propTypes.default.bool,
    facetOrdering: _propTypes.default.bool
  },
  defaultProps: {
    showMore: false,
    limit: 10,
    showMoreLimit: 20,
    facetOrdering: true
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults, meta, searchForFacetValuesResults) {
    var attribute = props.attribute,
      searchable = props.searchable,
      indexContextValue = props.indexContextValue,
      facetOrdering = props.facetOrdering;
    var results = (0, _indexUtils.getResults)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var canRefine = Boolean(results) && Boolean(results.getFacetByName(attribute));
    var isFromSearch = Boolean(searchForFacetValuesResults && searchForFacetValuesResults[attribute] && searchForFacetValuesResults.query !== '');

    // Search For Facet Values is not available with derived helper (used for multi index search)
    if (searchable && indexContextValue) {
      throw new Error('react-instantsearch: searching in *List is not available when used inside a' + ' multi index context');
    }
    if (!canRefine) {
      return {
        items: [],
        currentRefinement: getCurrentRefinement(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        isFromSearch: isFromSearch,
        searchable: searchable,
        canRefine: canRefine
      };
    }
    var items;
    if (isFromSearch) {
      items = searchForFacetValuesResults[attribute].map(function (v) {
        return {
          label: v.value,
          value: getValue(v.escapedValue, props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          _highlightResult: {
            label: {
              value: v.highlighted
            }
          },
          count: v.count,
          isRefined: v.isRefined
        };
      });
    } else {
      items = results.getFacetValues(attribute, {
        sortBy: searchable ? undefined : defaultSortBy,
        facetOrdering: facetOrdering
      }).map(function (v) {
        return {
          label: v.name,
          value: getValue(v.escapedValue, props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          count: v.count,
          isRefined: v.isRefined
        };
      });
    }
    var transformedItems = props.transformItems ? props.transformItems(items) : items;
    return {
      items: transformedItems.slice(0, getLimit(props)),
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isFromSearch: isFromSearch,
      searchable: searchable,
      canRefine: transformedItems.length > 0
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  searchForFacetValues: function searchForFacetValues(props, searchState, nextRefinement) {
    return {
      facetName: props.attribute,
      query: nextRefinement,
      maxFacetHits: getLimit(props)
    };
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    var attribute = props.attribute;
    searchParameters = searchParameters.setQueryParameters({
      maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, getLimit(props))
    });
    searchParameters = searchParameters.addDisjunctiveFacet(attribute);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (currentRefinement !== null) {
      searchParameters = searchParameters.addDisjunctiveFacetRefinement(attribute, currentRefinement);
    }
    return searchParameters;
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId(props);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: (0, _indexUtils.getIndexId)({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(props.attribute, ": ").concat((0, _utils.unescapeFacetValue)(currentRefinement)),
        attribute: props.attribute,
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
});
exports.default = _default;