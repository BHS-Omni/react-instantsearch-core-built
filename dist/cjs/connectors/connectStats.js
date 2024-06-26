"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createConnector = _interopRequireDefault(require("../core/createConnector"));
var _indexUtils = require("../core/indexUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore
/**
 * connectStats connector provides the logic to build a widget that will
 *  displays algolia search statistics (hits number and processing time).
 * @name connectStats
 * @kind connector
 * @providedPropType {number} nbHits - number of hits returned by Algolia.
 * @providedPropType {number} nbSortedHits - number of sorted hits returned by Algolia.
 * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
 */
var _default = (0, _createConnector.default)({
  displayName: 'AlgoliaStats',
  $$type: 'ais.stats',
  getProvidedProps: function getProvidedProps(props, _searchState, searchResults) {
    var results = (0, _indexUtils.getResults)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (!results) {
      return null;
    }
    return {
      areHitsSorted: results.appliedRelevancyStrictness !== undefined && results.appliedRelevancyStrictness > 0 && results.nbHits !== results.nbSortedHits,
      nbHits: results.nbHits,
      nbSortedHits: results.nbSortedHits,
      processingTimeMS: results.processingTimeMS
    };
  }
});
exports.default = _default;