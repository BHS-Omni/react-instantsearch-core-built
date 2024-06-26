"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
var _context = require("../core/context");
var _createInstantSearchManager = _interopRequireDefault(require("../core/createInstantSearchManager"));
var _metadata = require("../core/metadata");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function isControlled(props) {
  return Boolean(props.searchState);
}

/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
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
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */
var InstantSearch = /*#__PURE__*/function (_Component) {
  _inherits(InstantSearch, _Component);
  var _super = _createSuper(InstantSearch);
  function InstantSearch(props) {
    var _this;
    _classCallCheck(this, InstantSearch);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "cleanupTimerRef", null);
    _defineProperty(_assertThisInitialized(_this), "isUnmounting", false);
    var instantSearchManager = (0, _createInstantSearchManager.default)({
      indexName: _this.props.indexName,
      searchClient: _this.props.searchClient,
      initialState: _this.props.searchState || {},
      resultsState: _this.props.resultsState,
      stalledSearchDelay: _this.props.stalledSearchDelay
    });
    var contextValue = {
      store: instantSearchManager.store,
      widgetsManager: instantSearchManager.widgetsManager,
      mainTargetedIndex: _this.props.indexName,
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }
  _createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = isControlled(prevProps);
      if (prevIsControlled && !this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
      }
      if (!prevIsControlled && this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
      }
      if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
        this.state.instantSearchManager.clearCache();
      }
      if (prevProps.indexName !== this.props.indexName) {
        this.state.instantSearchManager.updateIndex(this.props.indexName);
      }
      if (prevProps.searchClient !== this.props.searchClient) {
        this.state.instantSearchManager.updateClient(this.props.searchClient);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.cleanupTimerRef) {
        clearTimeout(this.cleanupTimerRef);
        this.cleanupTimerRef = null;
      }
      if ((0, _metadata.isMetadataEnabled)()) {
        (0, _metadata.injectMetadata)(this.state.instantSearchManager.widgetsManager.getWidgets(), this.props.searchClient);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;
      this.cleanupTimerRef = setTimeout(function () {
        _this2.isUnmounting = true;
        _this2.state.instantSearchManager.skipSearch();
      });
    }
  }, {
    key: "createHrefForState",
    value: function createHrefForState(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      return this.state.isControlled && this.props.createURL ? this.props.createURL(searchState, this.getKnownKeys()) : '#';
    }
  }, {
    key: "onWidgetsInternalStateUpdate",
    value: function onWidgetsInternalStateUpdate(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      this.onSearchStateChange(searchState);
      if (!this.state.isControlled) {
        this.state.instantSearchManager.onExternalStateUpdate(searchState);
      }
    }
  }, {
    key: "onSearchStateChange",
    value: function onSearchStateChange(searchState) {
      if (this.props.onSearchStateChange && !this.isUnmounting) {
        this.props.onSearchStateChange(searchState);
      }
    }
  }, {
    key: "onSearchParameters",
    value: function onSearchParameters(getSearchParameters, context, props, getMetadata, displayName) {
      if (this.props.onSearchParameters) {
        var _searchState = this.props.searchState ? this.props.searchState : {};
        this.props.onSearchParameters(getSearchParameters, context, props, _searchState);
      }
      if (this.props.widgetsCollector) {
        var _searchState2 = this.props.searchState ? this.props.searchState : {};
        this.props.widgetsCollector({
          getSearchParameters: getSearchParameters,
          getMetadata: getMetadata,
          context: context,
          props: props,
          searchState: _searchState2,
          displayName: displayName
        });
      }
    }
  }, {
    key: "onSearchForFacetValues",
    value: function onSearchForFacetValues(searchState) {
      this.state.instantSearchManager.onSearchForFacetValues(searchState);
    }
  }, {
    key: "getKnownKeys",
    value: function getKnownKeys() {
      return this.state.instantSearchManager.getWidgetsIds();
    }
  }, {
    key: "render",
    value: function render() {
      if (_react.Children.count(this.props.children) === 0) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement(_context.InstantSearchProvider, {
        value: this.state.contextValue
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = isControlled(nextProps);
      var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
      var nextSearchState = nextProps.searchState;
      if (nextIsControlled && !(0, _reactFastCompare.default)(previousSearchState, nextSearchState)) {
        prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
      }
      return {
        isControlled: nextIsControlled,
        contextValue: _objectSpread(_objectSpread({}, prevState.contextValue), {}, {
          mainTargetedIndex: nextProps.indexName
        })
      };
    }
  }]);
  return InstantSearch;
}(_react.Component);
_defineProperty(InstantSearch, "defaultProps", {
  stalledSearchDelay: 200,
  refresh: false
});
_defineProperty(InstantSearch, "propTypes", {
  // @TODO: These props are currently constant.
  indexName: _propTypes.default.string.isRequired,
  searchClient: _propTypes.default.shape({
    search: _propTypes.default.func.isRequired,
    searchForFacetValues: _propTypes.default.func,
    addAlgoliaAgent: _propTypes.default.func,
    clearCache: _propTypes.default.func
  }).isRequired,
  createURL: _propTypes.default.func,
  refresh: _propTypes.default.bool,
  searchState: _propTypes.default.object,
  onSearchStateChange: _propTypes.default.func,
  onSearchParameters: _propTypes.default.func,
  widgetsCollector: _propTypes.default.func,
  resultsState: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  children: _propTypes.default.node,
  stalledSearchDelay: _propTypes.default.number
});
var _default = InstantSearch;
exports.default = _default;