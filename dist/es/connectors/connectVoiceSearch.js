function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import PropTypes from 'prop-types';
import createConnector from "../core/createConnector.js";
import { cleanUpValue, refineValue, getCurrentRefinementValue, getIndexId } from "../core/indexUtils.js";
function getId() {
  return 'query';
}
function getAdditionalId() {
  return 'additionalVoiceParameters';
}
function getCurrentRefinementQuery(props, searchState, context) {
  var id = getId();
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');
  if (currentRefinement) {
    return currentRefinement;
  }
  return '';
}
function getCurrentRefinementAdditional(props, searchState, context) {
  var id = getAdditionalId();
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');
  if (currentRefinement) {
    return currentRefinement;
  }
  return {};
}
function _refine(props, searchState, nextRefinement, context) {
  var _nextValue;
  var id = getId();
  var voiceParams = getAdditionalId();
  var queryLanguages = props.language ? {
    queryLanguages: [props.language.split('-')[0]]
  } : {};
  var additionalQueryParameters = typeof props.additionalQueryParameters === 'function' ? _objectSpread({
    ignorePlurals: true,
    removeStopWords: true,
    optionalWords: nextRefinement
  }, props.additionalQueryParameters({
    query: nextRefinement
  })) : {};
  var nextValue = (_nextValue = {}, _defineProperty(_nextValue, id, nextRefinement), _defineProperty(_nextValue, voiceParams, _objectSpread(_objectSpread({}, queryLanguages), additionalQueryParameters)), _nextValue);
  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage);
}
function _cleanUp(props, searchState, context) {
  var interimState = cleanUpValue(searchState, context, getId());
  return cleanUpValue(interimState, context, getAdditionalId());
}
export default createConnector({
  displayName: 'AlgoliaVoiceSearch',
  $$type: 'ais.voiceSearch',
  propTypes: {
    defaultRefinement: PropTypes.string
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    return {
      currentRefinement: getCurrentRefinementQuery(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isSearchStalled: searchResults.isSearchStalled
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
    var query = getCurrentRefinementQuery(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var additionalParams = getCurrentRefinementAdditional(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return searchParameters.setQuery(query).setQueryParameters(additionalParams);
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId();
    var currentRefinement = getCurrentRefinementQuery(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(id, ": ").concat(currentRefinement),
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
});