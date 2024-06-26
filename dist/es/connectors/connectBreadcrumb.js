function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import PropTypes from 'prop-types';
import createConnector from "../core/createConnector.js";
import { refineValue, getResults } from "../core/indexUtils.js";
export var getId = function getId(props) {
  return props.attributes[0];
};
var namespace = 'hierarchicalMenu';
function _refine(props, searchState, nextRefinement, context) {
  var id = getId(props);
  var nextValue = _defineProperty({}, id, nextRefinement || '');
  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage, namespace);
}
function transformValue(values) {
  return values.reduce(function (acc, item) {
    if (item.isRefined) {
      acc.push({
        label: item.name,
        // If dealing with a nested "items", "value" is equal to the previous value concatenated with the current value
        // If dealing with the first level, "value" is equal to the current value
        value: item.escapedValue
      });
      // Create a variable in order to keep the same acc for the recursion, otherwise "reduce" returns a new one
      if (item.data) {
        acc = acc.concat(transformValue(item.data, acc));
      }
    }
    return acc;
  }, []);
}

/**
 * The breadcrumb component is s a type of secondary navigation scheme that
 * reveals the user’s location in a website or web application.
 *
 * @name connectBreadcrumb
 * @requirements To use this widget, your attributes must be formatted in a specific way.
 * If you want for example to have a Breadcrumb of categories, objects in your index
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
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @providedPropType {function} refine - a function to toggle a refinement
 * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
 * @providedPropType {array.<{items: object, count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the Breadcrumb can display.
 */

export default createConnector({
  displayName: 'AlgoliaBreadcrumb',
  $$type: 'ais.breadcrumb',
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
    transformItems: PropTypes.func
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var id = getId(props);
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var isFacetPresent = Boolean(results) && Boolean(results.getFacetByName(id));
    if (!isFacetPresent) {
      return {
        items: [],
        canRefine: false
      };
    }
    var values = results.getFacetValues(id);
    var items = values.data ? transformValue(values.data) : [];
    var transformedItems = props.transformItems ? props.transformItems(items) : items;
    return {
      canRefine: transformedItems.length > 0,
      items: transformedItems
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
});