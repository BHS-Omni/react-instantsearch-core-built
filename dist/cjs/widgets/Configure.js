"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _connectConfigure = _interopRequireDefault(require("../connectors/connectConfigure"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 *
 * Read more in the [Search parameters](guide/Search_parameters.html) guide.
 * @name Configure
 * @kind widget
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <Hits />
 *   </InstantSearch>
 * );
 */
var _default = (0, _connectConfigure.default)(function Configure() {
  return null;
}, {
  $$widgetType: 'ais.configure'
});
exports.default = _default;