function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import createConnector from "../core/createConnector.js";
// @ts-ignore
import { getResults, getIndexId, hasMultipleIndices } from "../core/indexUtils.js";
// A context rule must consist only of alphanumeric characters, hyphens, and underscores.
// See https://www.algolia.com/doc/guides/managing-results/refine-results/merchandising-and-promoting/in-depth/implementing-query-rules/#context
function escapeRuleContext(ruleName) {
  return ruleName.replace(/[^a-z0-9-_]+/gi, '_');
}
function getWidgetRefinements(attribute, widgetKey, searchState) {
  var widgetState = searchState[widgetKey];
  switch (widgetKey) {
    case 'range':
      return Object.keys(widgetState[attribute]).map(function (rangeKey) {
        return widgetState[attribute][rangeKey];
      });
    case 'refinementList':
      return widgetState[attribute];
    case 'hierarchicalMenu':
      return [widgetState[attribute]];
    case 'menu':
      return [widgetState[attribute]];
    case 'multiRange':
      return widgetState[attribute].split(':');
    case 'toggle':
      return [widgetState[attribute]];
    default:
      return [];
  }
}
function getRefinements(attribute) {
  var searchState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var refinements = Object.keys(searchState).filter(function (widgetKey) {
    return searchState[widgetKey] !== undefined && searchState[widgetKey][attribute] !== undefined;
  }).map(function (widgetKey) {
    return getWidgetRefinements(attribute, widgetKey, searchState);
  }).reduce(function (acc, current) {
    return acc.concat(current);
  }, []); // flatten the refinements

  return refinements;
}
function getRuleContextsFromTrackedFilters(_ref) {
  var searchState = _ref.searchState,
    trackedFilters = _ref.trackedFilters;
  var ruleContexts = Object.keys(trackedFilters).reduce(function (facets, facetName) {
    var facetRefinements = getRefinements(facetName, searchState);
    var getTrackedFacetValues = trackedFilters[facetName];
    var trackedFacetValues = getTrackedFacetValues(facetRefinements);
    return [].concat(_toConsumableArray(facets), _toConsumableArray(facetRefinements.filter(function (facetRefinement) {
      return trackedFacetValues.includes(facetRefinement);
    }).map(function (facetValue) {
      return escapeRuleContext("ais-".concat(facetName, "-").concat(facetValue));
    })));
  }, []);
  return ruleContexts;
}
var defaultProps = {
  transformItems: function transformItems(items) {
    return items;
  },
  transformRuleContexts: function transformRuleContexts(ruleContexts) {
    return ruleContexts;
  },
  trackedFilters: {}
};
export default createConnector({
  displayName: 'AlgoliaQueryRules',
  $$type: 'ais.queryRules',
  defaultProps: defaultProps,
  getProvidedProps: function getProvidedProps(props, _1, searchResults) {
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (results === null) {
      return {
        items: [],
        canRefine: false
      };
    }
    var _results$userData = results.userData,
      userData = _results$userData === void 0 ? [] : _results$userData;
    var transformItems = props.transformItems;
    var transformedItems = transformItems(userData);
    return {
      items: transformedItems,
      canRefine: transformedItems.length > 0
    };
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    if (Object.keys(props.trackedFilters).length === 0) {
      return searchParameters;
    }
    var indexSearchState = hasMultipleIndices({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    })] : searchState;
    var newRuleContexts = getRuleContextsFromTrackedFilters({
      searchState: indexSearchState,
      trackedFilters: props.trackedFilters
    });
    var initialRuleContexts = searchParameters.ruleContexts || [];
    var nextRuleContexts = [].concat(_toConsumableArray(initialRuleContexts), _toConsumableArray(newRuleContexts));
    if (process.env.NODE_ENV === 'development') {
      if (nextRuleContexts.length > 10) {
        // eslint-disable-next-line no-console
        console.warn("The maximum number of `ruleContexts` is 10. They have been sliced to that limit.\nConsider using `transformRuleContexts` to minimize the number of rules sent to Algolia.");
      }
    }
    var ruleContexts = props.transformRuleContexts(nextRuleContexts).slice(0, 10);
    return searchParameters.setQueryParameter('ruleContexts', ruleContexts);
  }
});