import PropTypes from 'prop-types';
import createConnector from "../core/createConnector.js";
// @ts-ignore
import { getResults } from "../core/indexUtils.js";
var MAX_WILDCARD_FACETS = 20;
export default createConnector({
  displayName: 'AlgoliaDynamicWidgets',
  $$type: 'ais.dynamicWidgets',
  defaultProps: {
    transformItems: function transformItems(items) {
      return items;
    },
    maxValuesPerFacet: 20
  },
  propTypes: {
    transformItems: PropTypes.func,
    facets: PropTypes.arrayOf(PropTypes.string),
    maxValuesPerFacet: PropTypes.number
  },
  getProvidedProps: function getProvidedProps(props, _searchState, searchResults) {
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (props.facets && !(Array.isArray(props.facets) && props.facets.length <= 1 && (props.facets[0] === '*' || props.facets[0] === undefined))) {
      throw new Error("The `facets` prop only accepts [] or [\"*\"], you passed ".concat(JSON.stringify(props.facets)));
    }
    if (!results) {
      return {
        attributesToRender: []
      };
    }
    var facetOrder = results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.facets && results.renderingContent.facetOrdering.facets.order || [];
    var attributesToRender = props.transformItems(facetOrder, {
      results: results
    });
    if (attributesToRender.length > MAX_WILDCARD_FACETS && !props.facets) {
      // eslint-disable-next-line no-console
      console.warn("More than ".concat(MAX_WILDCARD_FACETS, " facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set \"facets\" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning."));
    }
    if (props.maxValuesPerFacet < results._state.maxValuesPerFacet) {
      // eslint-disable-next-line no-console
      console.warn("The maxValuesPerFacet set by dynamic widgets (".concat(props.maxValuesPerFacet, ") is smaller than one of the limits set by a widget (").concat(results._state.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted."));
    }
    return {
      attributesToRender: attributesToRender
    };
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    return (props.facets || ['*']).reduce(function (acc, curr) {
      return acc.addFacet(curr);
    }, searchParameters.setQueryParameters({
      maxValuesPerFacet: Math.max(props.maxValuesPerFacet || 0, searchParameters.maxValuesPerFacet || 0)
    }));
  }
});