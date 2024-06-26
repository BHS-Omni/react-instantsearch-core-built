"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instantSearchContext = exports.InstantSearchProvider = exports.InstantSearchConsumer = exports.IndexProvider = exports.IndexConsumer = void 0;
var _react = require("react");
var instantSearchContext = /*#__PURE__*/(0, _react.createContext)({
  onInternalStateUpdate: function onInternalStateUpdate() {
    return undefined;
  },
  createHrefForState: function createHrefForState() {
    return '#';
  },
  onSearchForFacetValues: function onSearchForFacetValues() {
    return undefined;
  },
  onSearchStateChange: function onSearchStateChange() {
    return undefined;
  },
  onSearchParameters: function onSearchParameters() {
    return undefined;
  },
  store: {},
  widgetsManager: {},
  mainTargetedIndex: ''
});
exports.instantSearchContext = instantSearchContext;
var InstantSearchConsumer = instantSearchContext.Consumer,
  InstantSearchProvider = instantSearchContext.Provider;
exports.InstantSearchProvider = InstantSearchProvider;
exports.InstantSearchConsumer = InstantSearchConsumer;
var _createContext = /*#__PURE__*/(0, _react.createContext)(undefined),
  IndexConsumer = _createContext.Consumer,
  IndexProvider = _createContext.Provider;
exports.IndexProvider = IndexProvider;
exports.IndexConsumer = IndexConsumer;