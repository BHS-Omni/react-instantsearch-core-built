import createConnector from "../core/createConnector.js";
import { HIGHLIGHT_TAGS, parseAlgoliaHit } from "../core/highlight.js";
var highlight = function highlight(_ref) {
  var attribute = _ref.attribute,
    hit = _ref.hit,
    highlightProperty = _ref.highlightProperty,
    _ref$preTag = _ref.preTag,
    preTag = _ref$preTag === void 0 ? HIGHLIGHT_TAGS.highlightPreTag : _ref$preTag,
    _ref$postTag = _ref.postTag,
    postTag = _ref$postTag === void 0 ? HIGHLIGHT_TAGS.highlightPostTag : _ref$postTag;
  return parseAlgoliaHit({
    attribute: attribute,
    highlightProperty: highlightProperty,
    hit: hit,
    preTag: preTag,
    postTag: postTag
  });
};

/**
 * connectHighlight connector provides the logic to create an highlighter
 * component that will retrieve, parse and render an highlighted attribute
 * from an Algolia hit.
 * @name connectHighlight
 * @kind connector
 * @category connector
 * @providedPropType {function} highlight - function to retrieve and parse an attribute from a hit. It takes a configuration object with 3 attributes: `highlightProperty` which is the property that contains the highlight structure from the records, `attribute` which is the name of the attribute (it can be either a string or an array of strings) to look for and `hit` which is the hit from Algolia. It returns an array of objects `{value: string, isHighlighted: boolean}`. If the element that corresponds to the attribute is an array of strings, it will return a nested array of objects.
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits, connectHighlight } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const CustomHighlight = connectHighlight(
 *   ({ highlight, attribute, hit, highlightProperty }) => {
 *     const highlights = highlight({
 *       highlightProperty: '_highlightResult',
 *       attribute,
 *       hit
 *     });
 *
 *     return highlights.map(part => part.isHighlighted ? (
 *       <mark>{part.value}</mark>
 *     ) : (
 *       <span>{part.value}</span>
 *     ));
 *   }
 * );
 *
 * const Hit = ({ hit }) => (
 *   <p>
 *     <CustomHighlight attribute="name" hit={hit} />
 *   </p>
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox defaultRefinement="pho" />
 *     <Hits hitComponent={Hit} />
 *   </InstantSearch>
 * );
 */
export default createConnector({
  displayName: 'AlgoliaHighlighter',
  $$type: 'ais.highlighter',
  propTypes: {},
  getProvidedProps: function getProvidedProps() {
    return {
      highlight: highlight
    };
  }
});