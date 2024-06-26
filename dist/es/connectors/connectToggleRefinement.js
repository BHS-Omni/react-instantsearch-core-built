function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import PropTypes from 'prop-types';
import createConnector from "../core/createConnector.js";
import { cleanUpValue, getIndexId, getResults, refineValue, getCurrentRefinementValue } from "../core/indexUtils.js";
import { find } from "../core/utils.js";
function getId(props) {
  return props.attribute;
}
var namespace = 'toggle';
var falsyStrings = ['0', 'false', 'null', 'undefined'];
function getCurrentRefinement(props, searchState, context) {
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), false);
  if (falsyStrings.indexOf(currentRefinement) !== -1) {
    return false;
  }
  return Boolean(currentRefinement);
}
function _refine(props, searchState, nextRefinement, context) {
  var id = getId(props);
  var nextValue = _defineProperty({}, id, nextRefinement ? nextRefinement : false);
  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return cleanUpValue(searchState, context, "".concat(namespace, ".").concat(getId(props)));
}

/**
 * connectToggleRefinement connector provides the logic to build a widget that will
 * provides an on/off filtering feature based on an attribute value.
 * @name connectToggleRefinement
 * @kind connector
 * @requirements To use this widget, you'll need an attribute to toggle on.
 *
 * You can't toggle on null or not-null values. If you want to address this particular use-case you'll need to compute an
 * extra boolean attribute saying if the value exists or not. See this [thread](https://discourse.algolia.com/t/how-to-create-a-toggle-for-the-absence-of-a-string-attribute/2460) for more details.
 *
 * @propType {string} attribute - Name of the attribute on which to apply the `value` refinement. Required when `value` is present.
 * @propType {string} label - Label for the toggle.
 * @propType {string} value - Value of the refinement to apply on `attribute`.
 * @propType {boolean} [defaultRefinement=false] - Default searchState of the widget. Should the toggle be checked by default?
 * @providedPropType {boolean} currentRefinement - `true` when the refinement is applied, `false` otherwise
 * @providedPropType {object} count - an object that contains the count for `checked` and `unchecked` state
 * @providedPropType {function} refine - a function to toggle a refinement
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 */
export default createConnector({
  displayName: 'AlgoliaToggle',
  $$type: 'ais.toggle',
  propTypes: {
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    filter: PropTypes.func,
    defaultRefinement: PropTypes.bool
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var attribute = props.attribute,
      value = props.value;
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var allFacetValues = results && results.getFacetByName(attribute) ? results.getFacetValues(attribute) : null;
    var facetValue =
    // Use null to always be consistent with type of the value
    // count: number | null
    allFacetValues && allFacetValues.length ? find(allFacetValues, function (item) {
      return item.name === value.toString();
    }) : null;
    var facetValueCount = facetValue && facetValue.count;
    var allFacetValuesCount =
    // Use null to always be consistent with type of the value
    // count: number | null
    allFacetValues && allFacetValues.length ? allFacetValues.reduce(function (acc, item) {
      return acc + item.count;
    }, 0) : null;
    var canRefine = currentRefinement ? allFacetValuesCount !== null && allFacetValuesCount > 0 : facetValueCount !== null && facetValueCount > 0;
    var count = {
      checked: allFacetValuesCount,
      unchecked: facetValueCount
    };
    return {
      currentRefinement: currentRefinement,
      canRefine: canRefine,
      count: count
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
    var attribute = props.attribute,
      value = props.value,
      filter = props.filter;
    var checked = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var nextSearchParameters = searchParameters.addDisjunctiveFacet(attribute);
    if (checked) {
      nextSearchParameters = nextSearchParameters.addDisjunctiveFacetRefinement(attribute, value);
      if (filter) {
        nextSearchParameters = filter(nextSearchParameters);
      }
    }
    return nextSearchParameters;
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId(props);
    var checked = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var items = [];
    var index = getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (checked) {
      items.push({
        label: props.label,
        currentRefinement: checked,
        attribute: props.attribute,
        value: function value(nextState) {
          return _refine(props, nextState, false, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        }
      });
    }
    return {
      id: id,
      index: index,
      items: items
    };
  }
});