function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import algoliasearchHelper from 'algoliasearch-helper';
import createConnector from "../core/createConnector.js";
import { refineValue, getIndexId, hasMultipleIndices
// @ts-ignore
} from "../core/indexUtils.js";
import { omit, getObjectType, getPropertyByPath, removeEmptyKey, removeEmptyArraysFromObject } from "../core/utils.js";
function createOptionalFilter(_ref) {
  var attributeName = _ref.attributeName,
    attributeValue = _ref.attributeValue,
    attributeScore = _ref.attributeScore;
  return "".concat(attributeName, ":").concat(attributeValue, "<score=").concat(attributeScore || 1, ">");
}
var defaultProps = {
  transformSearchParameters: function transformSearchParameters(x) {
    return _objectSpread({}, x);
  }
};
function getId() {
  // We store the search state of this widget in `configure`.
  return 'configure';
}
function getSearchParametersFromProps(props) {
  var optionalFilters = Object.keys(props.matchingPatterns).reduce(function (acc, attributeName) {
    var attributePattern = props.matchingPatterns[attributeName];
    var attributeValue = getPropertyByPath(props.hit, attributeName);
    var attributeScore = attributePattern.score;
    if (Array.isArray(attributeValue)) {
      return [].concat(_toConsumableArray(acc), [attributeValue.map(function (attributeSubValue) {
        return createOptionalFilter({
          attributeName: attributeName,
          attributeValue: attributeSubValue,
          attributeScore: attributeScore
        });
      })]);
    }
    if (typeof attributeValue === 'string') {
      return [].concat(_toConsumableArray(acc), [createOptionalFilter({
        attributeName: attributeName,
        attributeValue: attributeValue,
        attributeScore: attributeScore
      })]);
    }
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn("The `matchingPatterns` option returned a value of type ".concat(getObjectType(attributeValue), " for the \"").concat(attributeName, "\" key. This value was not sent to Algolia because `optionalFilters` only supports strings and array of strings.\n\nYou can remove the \"").concat(attributeName, "\" key from the `matchingPatterns` option.\n\nSee https://www.algolia.com/doc/api-reference/api-parameters/optionalFilters/"));
    }
    return acc;
  }, []);
  return props.transformSearchParameters(new algoliasearchHelper.SearchParameters({
    // @ts-ignore @TODO algoliasearch-helper@3.0.1 will contain the type
    // `sumOrFiltersScores`.
    // See https://github.com/algolia/algoliasearch-helper-js/pull/753
    sumOrFiltersScores: true,
    facetFilters: ["objectID:-".concat(props.hit.objectID)],
    optionalFilters: optionalFilters
  }));
}
export default createConnector({
  displayName: 'AlgoliaConfigureRelatedItems',
  $$type: 'ais.configureRelatedItems',
  defaultProps: defaultProps,
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    return searchParameters.setQueryParameters(getSearchParametersFromProps(props));
  },
  transitionState: function transitionState(props, _prevSearchState, nextSearchState) {
    var id = getId();
    // We need to transform the exhaustive search parameters back to clean
    // search parameters without the empty default keys so we don't pollute the
    // `configure` search state.
    var searchParameters = removeEmptyArraysFromObject(removeEmptyKey(getSearchParametersFromProps(props)));
    var searchParametersKeys = Object.keys(searchParameters);
    var nonPresentKeys = this._searchParameters ? Object.keys(this._searchParameters).filter(function (prop) {
      return searchParametersKeys.indexOf(prop) === -1;
    }) : [];
    this._searchParameters = searchParameters;
    var nextValue = _defineProperty({}, id, _objectSpread(_objectSpread({}, omit(nextSearchState[id], nonPresentKeys)), searchParameters));
    return refineValue(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    var _this = this;
    var id = getId();
    var indexId = getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var subState = hasMultipleIndices({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[indexId] : searchState;
    var configureKeys = subState && subState[id] ? Object.keys(subState[id]) : [];
    var configureState = configureKeys.reduce(function (acc, item) {
      if (!_this._searchParameters[item]) {
        acc[item] = subState[id][item];
      }
      return acc;
    }, {});
    var nextValue = _defineProperty({}, id, configureState);
    return refineValue(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
});