"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getId = exports.default = void 0;
var _algoliasearchHelper = _interopRequireDefault(require("algoliasearch-helper"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _createConnector = _interopRequireDefault(require("../core/createConnector"));
var _indexUtils = require("../core/indexUtils");
var _utils = require("../core/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getId = function getId(props) {
  return props.attributes[0];
};
exports.getId = getId;
var namespace = 'hierarchicalMenu';
function getCurrentRefinement(props, searchState, context) {
  var currentRefinement = (0, _indexUtils.getCurrentRefinementValue)(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), null);
  if (currentRefinement === '') {
    return null;
  }
  return currentRefinement;
}
function getValue(value, props, searchState, context) {
  var id = props.id,
    attributes = props.attributes,
    separator = props.separator,
    rootPath = props.rootPath,
    showParentLevel = props.showParentLevel;
  var currentRefinement = getCurrentRefinement(props, searchState, context);
  var nextRefinement;
  if (currentRefinement === null) {
    nextRefinement = value;
  } else {
    var tmpSearchParameters = new _algoliasearchHelper.default.SearchParameters({
      hierarchicalFacets: [{
        name: id,
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        showParentLevel: showParentLevel
      }]
    });
    nextRefinement = tmpSearchParameters.toggleHierarchicalFacetRefinement(id, currentRefinement).toggleHierarchicalFacetRefinement(id, value).getHierarchicalRefinement(id)[0];
  }
  return nextRefinement;
}
function transformValue(value, props, searchState, context) {
  return value.map(function (v) {
    return {
      label: v.name,
      value: getValue(v.escapedValue, props, searchState, context),
      count: v.count,
      isRefined: v.isRefined,
      items: v.data && transformValue(v.data, props, searchState, context)
    };
  });
}
var truncate = function truncate() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return items.slice(0, limit).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Array.isArray(item.items) ? _objectSpread(_objectSpread({}, item), {}, {
      items: truncate(item.items, limit)
    }) : item;
  });
};
function _refine(props, searchState, nextRefinement, context) {
  var id = getId(props);
  var nextValue = _defineProperty({}, id, nextRefinement || '');
  var resetPage = true;
  return (0, _indexUtils.refineValue)(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return (0, _indexUtils.cleanUpValue)(searchState, context, "".concat(namespace, ".").concat(getId(props)));
}
var sortBy = ['name:asc'];

/**
 * connectHierarchicalMenu connector provides the logic to build a widget that will
 * give the user the ability to explore a tree-like structure.
 * This is commonly used for multi-level categorization of products on e-commerce
 * websites. From a UX point of view, we suggest not displaying more than two levels deep.
 * @name connectHierarchicalMenu
 * @requirements To use this widget, your attributes must be formatted in a specific way.
 * If you want for example to have a hierarchical menu of categories, objects in your index
 * should be formatted this way:
 *
 * ```json
 * {
 *   "categories.lvl0": "products",
 *   "categories.lvl1": "products > fruits",
 *   "categories.lvl2": "products > fruits > citrus"
 * }
 * ```
 *
 * It's also possible to provide more than one path for each level:
 *
 * ```json
 * {
 *   "categories.lvl0": ["products", "goods"],
 *   "categories.lvl1": ["products > fruits", "goods > to eat"]
 * }
 * ```
 *
 * All attributes passed to the `attributes` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 *
 * @kind connector
 * @propType {array.<string>} attributes - List of attributes to use to generate the hierarchy of the menu. See the example for the convention to follow.
 * @propType {string} [defaultRefinement] - the item value selected by default
 * @propType {boolean} [showMore=false] - Flag to activate the show more button, for toggling the number of items between limit and showMoreLimit.
 * @propType {number} [limit=10] -  The maximum number of items displayed.
 * @propType {number} [showMoreLimit=20] -  The maximum number of items displayed when the user triggers the show more. Not considered if `showMore` is false.
 * @propType {string} [separator='>'] -  Specifies the level separator used in the data.
 * @propType {string} [rootPath=null] - The path to use if the first level is not the root level.
 * @propType {boolean} [showParentLevel=true] - Flag to set if the parent level should be displayed.
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @providedPropType {function} refine - a function to toggle a refinement
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 * @providedPropType {string} currentRefinement - the refinement currently applied
 * @providedPropType {array.<{items: object, count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the HierarchicalMenu can display. items has the same shape as parent items.
 */
var _default = (0, _createConnector.default)({
  displayName: 'AlgoliaHierarchicalMenu',
  $$type: 'ais.hierarchicalMenu',
  propTypes: {
    attributes: function attributes(props, propName, componentName) {
      var isNotString = function isNotString(val) {
        return typeof val !== 'string';
      };
      if (!Array.isArray(props[propName]) || props[propName].some(isNotString) || props[propName].length < 1) {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Expected an Array of Strings"));
      }
      return undefined;
    },
    separator: _propTypes.default.string,
    rootPath: _propTypes.default.string,
    showParentLevel: _propTypes.default.bool,
    defaultRefinement: _propTypes.default.string,
    showMore: _propTypes.default.bool,
    limit: _propTypes.default.number,
    showMoreLimit: _propTypes.default.number,
    transformItems: _propTypes.default.func,
    facetOrdering: _propTypes.default.bool
  },
  defaultProps: {
    showMore: false,
    limit: 10,
    showMoreLimit: 20,
    separator: ' > ',
    rootPath: null,
    showParentLevel: true,
    facetOrdering: true
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var showMore = props.showMore,
      limit = props.limit,
      showMoreLimit = props.showMoreLimit,
      facetOrdering = props.facetOrdering;
    var id = getId(props);
    var results = (0, _indexUtils.getResults)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var isFacetPresent = Boolean(results) && Boolean(results.getFacetByName(id));
    if (!isFacetPresent) {
      return {
        items: [],
        currentRefinement: getCurrentRefinement(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        canRefine: false
      };
    }
    var itemsLimit = showMore ? showMoreLimit : limit;
    var value = results.getFacetValues(id, {
      sortBy: sortBy,
      facetOrdering: facetOrdering
    });
    var items = value.data ? transformValue(value.data, props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) : [];
    var transformedItems = props.transformItems ? props.transformItems(items) : items;
    return {
      items: truncate(transformedItems, itemsLimit),
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      canRefine: transformedItems.length > 0
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    var attributes = props.attributes,
      separator = props.separator,
      rootPath = props.rootPath,
      showParentLevel = props.showParentLevel,
      showMore = props.showMore,
      limit = props.limit,
      showMoreLimit = props.showMoreLimit,
      contextValue = props.contextValue;
    var id = getId(props);
    var itemsLimit = showMore ? showMoreLimit : limit;
    searchParameters = searchParameters.addHierarchicalFacet({
      name: id,
      attributes: attributes,
      separator: separator,
      rootPath: rootPath,
      showParentLevel: showParentLevel
    }).setQueryParameters({
      maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, itemsLimit)
    });
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (currentRefinement !== null) {
      searchParameters = searchParameters.toggleHierarchicalFacetRefinement(id, currentRefinement);
    }
    return searchParameters;
  },
  getMetadata: function getMetadata(props, searchState) {
    var rootAttribute = props.attributes[0];
    var id = getId(props);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var items = !currentRefinement ? [] : [{
      label: "".concat(rootAttribute, ": ").concat((0, _utils.unescapeFacetValue)(currentRefinement)),
      attribute: rootAttribute,
      value: function value(nextState) {
        return _refine(props, nextState, '', {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        });
      },
      currentRefinement: currentRefinement
    }];
    return {
      id: id,
      index: (0, _indexUtils.getIndexId)({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: items
    };
  }
});
exports.default = _default;