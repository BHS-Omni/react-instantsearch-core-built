function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "contextValue", "indexContextValue"],
  _excluded2 = ["children", "contextValue", "indexContextValue"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import createConnector from "../core/createConnector.js";
import { refineValue, getIndexId, hasMultipleIndices } from "../core/indexUtils.js";
import { omit } from "../core/utils.js";
function getId() {
  return 'configure';
}
export default createConnector({
  displayName: 'AlgoliaConfigure',
  $$type: 'ais.configure',
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    var children = props.children,
      contextValue = props.contextValue,
      indexContextValue = props.indexContextValue,
      items = _objectWithoutProperties(props, _excluded);
    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId();
    var children = props.children,
      contextValue = props.contextValue,
      indexContextValue = props.indexContextValue,
      items = _objectWithoutProperties(props, _excluded2);
    var propKeys = Object.keys(props);
    var nonPresentKeys = this._props ? Object.keys(this._props).filter(function (prop) {
      return propKeys.indexOf(prop) === -1;
    }) : [];
    this._props = props;
    var nextValue = _defineProperty({}, id, _objectSpread(_objectSpread({}, omit(nextSearchState[id], nonPresentKeys)), items));
    return refineValue(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
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
      if (!props[item]) {
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