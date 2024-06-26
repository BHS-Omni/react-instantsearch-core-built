/*! React InstantSearchCore UNRELEASED | © Algolia, inc. | https://github.com/algolia/instantsearch.js */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.ReactInstantSearchCore = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

  var hasElementType = typeof Element !== 'undefined';
  var hasMap = typeof Map === 'function';
  var hasSet = typeof Set === 'function';
  var hasArrayBuffer = typeof ArrayBuffer === 'function';

  // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

  function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.1
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }

      // START: Modifications:
      // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
      //    to co-exist with es5.
      // 2. Replace `for of` with es5 compliant iteration using `for`.
      //    Basically, take:
      //
      //    ```js
      //    for (i of a.entries())
      //      if (!b.has(i[0])) return false;
      //    ```
      //
      //    ... and convert to:
      //
      //    ```js
      //    it = a.entries();
      //    while (!(i = it.next()).done)
      //      if (!b.has(i.value[0])) return false;
      //    ```
      //
      //    **Note**: `i` access switches to `i.value`.
      var it;
      if (hasMap && (a instanceof Map) && (b instanceof Map)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0]))) return false;
        return true;
      }

      if (hasSet && (a instanceof Set) && (b instanceof Set)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        return true;
      }
      // END: Modifications

      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (a[i] !== b[i]) return false;
        return true;
      }

      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      // END: fast-deep-equal

      // START: react-fast-compare
      // custom handling for DOM elements
      if (hasElementType && a instanceof Element) return false;

      // custom handling for React
      for (i = length; i-- !== 0;) {
        if (keys[i] === '_owner' && a.$$typeof) {
          // React-specific: avoid traversing React elements' _owner.
          //  _owner contains circular references
          // and is not needed when comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of a react element
          continue;
        }

        // all other properties should be traversed as usual
        if (!equal(a[keys[i]], b[keys[i]])) return false;
      }
      // END: react-fast-compare

      // START: fast-deep-equal
      return true;
    }

    return a !== a && b !== b;
  }
  // end fast-deep-equal

  var reactFastCompare = function isEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (((error.message || '').match(/stack|recursion/i))) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('react-fast-compare cannot handle circular refs');
        return false;
      }
      // some other error. we should definitely know about these
      throw error;
    }
  };

  var instantSearchContext = /*#__PURE__*/React.createContext({
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
  var InstantSearchConsumer = instantSearchContext.Consumer,
    InstantSearchProvider = instantSearchContext.Provider;
  var _createContext = /*#__PURE__*/React.createContext(undefined),
    IndexConsumer = _createContext.Consumer,
    IndexProvider = _createContext.Provider;

  // eslint-disable-next-line @typescript-eslint/unbound-method
  var hasOwn = Object.prototype.hasOwnProperty;

  // From https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js
  var shallowEqual = function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
    return true;
  };
  var getDisplayName = function getDisplayName(Component) {
    return Component.displayName || Component.name || 'UnknownComponent';
  };
  var resolved = Promise.resolve();
  var defer = function defer(f) {
    resolved.then(f);
  };
  var isPlainObject = function isPlainObject(value) {
    return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
  };
  var removeEmptyKey = function removeEmptyKey(obj) {
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];
      if (!isPlainObject(value)) {
        return;
      }
      if (!objectHasKeys(value)) {
        delete obj[key];
      } else {
        removeEmptyKey(value);
      }
    });
    return obj;
  };
  var removeEmptyArraysFromObject = function removeEmptyArraysFromObject(obj) {
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];
      if (Array.isArray(value) && value.length === 0) {
        delete obj[key];
      }
    });
    return obj;
  };
  function addAbsolutePositions(hits, hitsPerPage, page) {
    return hits.map(function (hit, index) {
      return _objectSpread2(_objectSpread2({}, hit), {}, {
        __position: hitsPerPage * page + index + 1
      });
    });
  }
  function addQueryID(hits, queryID) {
    if (!queryID) {
      return hits;
    }
    return hits.map(function (hit) {
      return _objectSpread2(_objectSpread2({}, hit), {}, {
        __queryID: queryID
      });
    });
  }
  function find(array, comparator) {
    if (!Array.isArray(array)) {
      return undefined;
    }
    for (var i = 0; i < array.length; i++) {
      if (comparator(array[i])) {
        return array[i];
      }
    }
    return undefined;
  }
  function objectHasKeys(object) {
    return object && Object.keys(object).length > 0;
  }

  // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
  function omit(source, excluded) {
    if (source === null || source === undefined) {
      return {};
    }
    var target = {};
    var sourceKeys = Object.keys(source);
    for (var i = 0; i < sourceKeys.length; i++) {
      var key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) {
        // eslint-disable-next-line no-continue
        continue;
      }
      target[key] = source[key];
    }
    return target;
  }

  /**
   * Retrieve the value at a path of the object:
   *
   * @example
   * getPropertyByPath(
   *   { test: { this: { function: [{ now: { everyone: true } }] } } },
   *   'test.this.function[0].now.everyone'
   * ); // true
   *
   * getPropertyByPath(
   *   { test: { this: { function: [{ now: { everyone: true } }] } } },
   *   ['test', 'this', 'function', 0, 'now', 'everyone']
   * ); // true
   *
   * @param object Source object to query
   * @param path either an array of properties, or a string form of the properties, separated by .
   */
  var getPropertyByPath = function getPropertyByPath(object, path) {
    return (Array.isArray(path) ? path : path.replace(/\[(\d+)]/g, '.$1').split('.')).reduce(function (current, key) {
      return current ? current[key] : undefined;
    }, object);
  };
  function unescapeFacetValue(value) {
    return value.replace(/^\\-/, '-');
  }

  var _excluded = ["contextValue"];
  /**
   * Connectors are the HOC used to transform React components
   * into InstantSearch widgets.
   * In order to simplify the construction of such connectors
   * `createConnector` takes a description and transform it into
   * a connector.
   * @param {ConnectorDescription} connectorDesc the description of the connector
   * @return {Connector} a function that wraps a component into
   * an instantsearch connected one.
   */
  function createConnectorWithoutContext(connectorDesc) {
    if (!connectorDesc.displayName) {
      throw new Error('`createConnector` requires you to provide a `displayName` property.');
    }
    var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
    return function (Composed) {
      var additionalWidgetProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var Connector = /*#__PURE__*/function (_Component) {
        _inherits(Connector, _Component);
        var _super = _createSuper(Connector);
        function Connector(props) {
          var _this;
          _classCallCheck(this, Connector);
          _this = _super.call(this, props);
          _defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);
          _defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);
          _defineProperty(_assertThisInitialized(_this), "cleanupTimerRef", null);
          _defineProperty(_assertThisInitialized(_this), "isUnmounting", false);
          _defineProperty(_assertThisInitialized(_this), "state", {
            providedProps: _this.getProvidedProps(_this.props)
          });
          _defineProperty(_assertThisInitialized(_this), "refine", function () {
            var _ref;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this.props.contextValue.onInternalStateUpdate(
            // refine will always be defined here because the prop is only given conditionally
            (_ref = connectorDesc.refine).call.apply(_ref, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });
          _defineProperty(_assertThisInitialized(_this), "createURL", function () {
            var _ref2;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return _this.props.contextValue.createHrefForState(
            // refine will always be defined here because the prop is only given conditionally
            (_ref2 = connectorDesc.refine).call.apply(_ref2, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });
          _defineProperty(_assertThisInitialized(_this), "searchForFacetValues", function () {
            var _ref3;
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            _this.props.contextValue.onSearchForFacetValues(
            // searchForFacetValues will always be defined here because the prop is only given conditionally
            (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });
          if (connectorDesc.getSearchParameters) {
            _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(_assertThisInitialized(_this)), {
              ais: _this.props.contextValue,
              multiIndexContext: _this.props.indexContextValue
            }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(_assertThisInitialized(_this)), connectorDesc.displayName);
          }
          return _this;
        }
        _createClass(Connector, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;
            if (this.cleanupTimerRef) {
              clearTimeout(this.cleanupTimerRef);
              this.cleanupTimerRef = null;
            }
            this.unsubscribe = this.props.contextValue.store.subscribe(function () {
              if (!_this2.isUnmounting) {
                _this2.setState({
                  providedProps: _this2.getProvidedProps(_this2.props)
                });
              }
            });
            if (isWidget) {
              this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
            }
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            if (typeof connectorDesc.shouldComponentUpdate === 'function') {
              return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
            }
            var propsEqual = shallowEqual(this.props, nextProps);
            if (this.state.providedProps === null || nextState.providedProps === null) {
              if (this.state.providedProps === nextState.providedProps) {
                return !propsEqual;
              }
              return true;
            }
            return !propsEqual || !shallowEqual(this.state.providedProps, nextState.providedProps);
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (!reactFastCompare(prevProps, this.props)) {
              this.setState({
                providedProps: this.getProvidedProps(this.props)
              });
              if (isWidget) {
                this.props.contextValue.widgetsManager.update();
                if (typeof connectorDesc.transitionState === 'function') {
                  this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
                }
              }
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var _this3 = this;
            this.cleanupTimerRef = setTimeout(function () {
              _this3.isUnmounting = true;
              if (_this3.unsubscribe) {
                _this3.unsubscribe();
              }
              if (_this3.unregisterWidget) {
                _this3.unregisterWidget();
                if (typeof connectorDesc.cleanUp === 'function') {
                  var nextState = connectorDesc.cleanUp.call(_this3, _this3.props, _this3.props.contextValue.store.getState().widgets);
                  _this3.props.contextValue.store.setState(_objectSpread2(_objectSpread2({}, _this3.props.contextValue.store.getState()), {}, {
                    widgets: nextState
                  }));
                  _this3.props.contextValue.onSearchStateChange(removeEmptyKey(nextState));
                }
              }
            });
          }
        }, {
          key: "getProvidedProps",
          value: function getProvidedProps(props) {
            var _this$props$contextVa = this.props.contextValue.store.getState(),
              widgets = _this$props$contextVa.widgets,
              results = _this$props$contextVa.results,
              resultsFacetValues = _this$props$contextVa.resultsFacetValues,
              searching = _this$props$contextVa.searching,
              searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
              isSearchStalled = _this$props$contextVa.isSearchStalled,
              metadata = _this$props$contextVa.metadata,
              error = _this$props$contextVa.error;
            var searchResults = {
              results: results,
              searching: searching,
              searchingForFacetValues: searchingForFacetValues,
              isSearchStalled: isSearchStalled,
              error: error
            };
            return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata,
            // @MAJOR: move this attribute on the `searchResults` it doesn't
            // makes sense to have it into a separate argument. The search
            // flags are on the object why not the results?
            resultsFacetValues);
          }
        }, {
          key: "getSearchParameters",
          value: function getSearchParameters(searchParameters) {
            if (typeof connectorDesc.getSearchParameters === 'function') {
              return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
            }
            return null;
          }
        }, {
          key: "getMetadata",
          value: function getMetadata(nextWidgetsState) {
            if (typeof connectorDesc.getMetadata === 'function') {
              return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
            }
            return {};
          }
        }, {
          key: "transitionState",
          value: function transitionState(prevWidgetsState, nextWidgetsState) {
            if (typeof connectorDesc.transitionState === 'function') {
              return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
            }
            return nextWidgetsState;
          }
        }, {
          key: "render",
          value: function render() {
            var _this$props = this.props,
              contextValue = _this$props.contextValue,
              props = _objectWithoutProperties(_this$props, _excluded);
            var providedProps = this.state.providedProps;
            if (providedProps === null) {
              return null;
            }
            var refineProps = typeof connectorDesc.refine === 'function' ? {
              refine: this.refine,
              createURL: this.createURL
            } : {};
            var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
              searchForItems: this.searchForFacetValues
            } : {};
            return /*#__PURE__*/React__default.createElement(Composed, _extends({}, props, providedProps, refineProps, searchForFacetValuesProps));
          }
        }]);
        return Connector;
      }(React.Component);
      _defineProperty(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat(getDisplayName(Composed), ")"));
      _defineProperty(Connector, "$$type", connectorDesc.$$type);
      _defineProperty(Connector, "$$widgetType", additionalWidgetProperties.$$widgetType);
      _defineProperty(Connector, "defaultProps", connectorDesc.defaultProps);
      _defineProperty(Connector, "_connectorDesc", connectorDesc);
      return Connector;
    };
  }
  var createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
    return function (Composed, additionalWidgetProperties) {
      var Connector = createConnectorWithoutContext(connectorDesc)(Composed, additionalWidgetProperties);
      var ConnectorWrapper = function ConnectorWrapper(props) {
        return /*#__PURE__*/React__default.createElement(InstantSearchConsumer, null, function (contextValue) {
          return /*#__PURE__*/React__default.createElement(IndexConsumer, null, function (indexContextValue) {
            return /*#__PURE__*/React__default.createElement(Connector, _extends({
              contextValue: contextValue,
              indexContextValue: indexContextValue
            }, props));
          });
        });
      };
      return ConnectorWrapper;
    };
  };

  var HIGHLIGHT_TAGS = {
    highlightPreTag: "<ais-highlight-0000000000>",
    highlightPostTag: "</ais-highlight-0000000000>"
  };

  /**
   * Parses an highlighted attribute into an array of objects with the string value, and
   * a boolean that indicated if this part is highlighted.
   *
   * @param {string} preTag - string used to identify the start of an highlighted value
   * @param {string} postTag - string used to identify the end of an highlighted value
   * @param {string} highlightedValue - highlighted attribute as returned by Algolia highlight feature
   * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
   */
  function parseHighlightedAttribute(_ref) {
    var preTag = _ref.preTag,
      postTag = _ref.postTag,
      _ref$highlightedValue = _ref.highlightedValue,
      highlightedValue = _ref$highlightedValue === void 0 ? '' : _ref$highlightedValue;
    var splitByPreTag = highlightedValue.split(preTag);
    var firstValue = splitByPreTag.shift();
    var elements = firstValue === '' ? [] : [{
      value: firstValue,
      isHighlighted: false
    }];
    if (postTag === preTag) {
      var isHighlighted = true;
      splitByPreTag.forEach(function (split) {
        elements.push({
          value: split,
          isHighlighted: isHighlighted
        });
        isHighlighted = !isHighlighted;
      });
    } else {
      splitByPreTag.forEach(function (split) {
        var splitByPostTag = split.split(postTag);
        elements.push({
          value: splitByPostTag[0],
          isHighlighted: true
        });
        if (splitByPostTag[1] !== '') {
          elements.push({
            value: splitByPostTag[1],
            isHighlighted: false
          });
        }
      });
    }
    return elements;
  }

  /**
   * Find an highlighted attribute given an `attribute` and an `highlightProperty`, parses it,
   * and provided an array of objects with the string value and a boolean if this
   * value is highlighted.
   *
   * In order to use this feature, highlight must be activated in the configuration of
   * the index. The `preTag` and `postTag` attributes are respectively highlightPreTag and
   * highlightPostTag in Algolia configuration.
   *
   * @param {string} preTag - string used to identify the start of an highlighted value
   * @param {string} postTag - string used to identify the end of an highlighted value
   * @param {string} highlightProperty - the property that contains the highlight structure in the results
   * @param {string} attribute - the highlighted attribute to look for
   * @param {object} hit - the actual hit returned by Algolia.
   * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
   */
  function parseAlgoliaHit(_ref2) {
    var _ref2$preTag = _ref2.preTag,
      preTag = _ref2$preTag === void 0 ? '<em>' : _ref2$preTag,
      _ref2$postTag = _ref2.postTag,
      postTag = _ref2$postTag === void 0 ? '</em>' : _ref2$postTag,
      highlightProperty = _ref2.highlightProperty,
      attribute = _ref2.attribute,
      hit = _ref2.hit;
    if (!hit) throw new Error('`hit`, the matching record, must be provided');
    var highlightObject = getPropertyByPath(hit[highlightProperty], attribute) || {};
    if (Array.isArray(highlightObject)) {
      return highlightObject.map(function (item) {
        return parseHighlightedAttribute({
          preTag: preTag,
          postTag: postTag,
          highlightedValue: item.value
        });
      });
    }
    return parseHighlightedAttribute({
      preTag: preTag,
      postTag: postTag,
      highlightedValue: highlightObject.value
    });
  }

  var version = '6.40.4';

  function translatable(defaultTranslations) {
    return function (Composed) {
      var Translatable = /*#__PURE__*/function (_Component) {
        _inherits(Translatable, _Component);
        var _super = _createSuper(Translatable);
        function Translatable() {
          var _this;
          _classCallCheck(this, Translatable);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _defineProperty(_assertThisInitialized(_this), "translate", function (key) {
            var translations = _this.props.translations;
            var translation = translations && translations.hasOwnProperty(key) ? translations[key] : defaultTranslations[key];
            if (typeof translation === 'function') {
              for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                params[_key2 - 1] = arguments[_key2];
              }
              return translation.apply(void 0, params);
            }
            return translation;
          });
          return _this;
        }
        _createClass(Translatable, [{
          key: "render",
          value: function render() {
            return /*#__PURE__*/React__default.createElement(Composed, _extends({
              translate: this.translate
            }, this.props));
          }
        }]);
        return Translatable;
      }(React.Component);
      var name = Composed.displayName || Composed.name || 'UnknownComponent';
      Translatable.displayName = "Translatable(".concat(name, ")");
      return Translatable;
    };
  }

  function getIndexId(context) {
    return hasMultipleIndices(context) ? context.multiIndexContext.targetedIndex : context.ais.mainTargetedIndex;
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * @returns {import('algoliasearch-helper').SearchResults} results
   */
  function getResults(searchResults, context) {
    if (searchResults.results) {
      if (searchResults.results.hits) {
        return searchResults.results;
      }
      var indexId = getIndexId(context);
      if (searchResults.results[indexId]) {
        return searchResults.results[indexId];
      }
    }
    return null;
  }
  function hasMultipleIndices(context) {
    return context && context.multiIndexContext;
  }
  function refineValue(searchState, nextRefinement, context, resetPage, namespace) {
    if (hasMultipleIndices(context)) {
      var indexId = getIndexId(context);
      return namespace ? refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) : refineMultiIndex(searchState, nextRefinement, indexId, resetPage);
    } else {
      // When we have a multi index page with shared widgets we should also
      // reset their page to 1 if the resetPage is provided. Otherwise the
      // indices will always be reset
      // see: https://github.com/algolia/react-instantsearch/issues/310
      // see: https://github.com/algolia/react-instantsearch/issues/637
      if (searchState.indices && resetPage) {
        Object.keys(searchState.indices).forEach(function (targetedIndex) {
          searchState = refineValue(searchState, {
            page: 1
          }, {
            multiIndexContext: {
              targetedIndex: targetedIndex
            }
          }, true, namespace);
        });
      }
      return namespace ? refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) : refineSingleIndex(searchState, nextRefinement, resetPage);
    }
  }
  function refineMultiIndex(searchState, nextRefinement, indexId, resetPage) {
    var page = resetPage ? {
      page: 1
    } : undefined;
    var state = searchState.indices && searchState.indices[indexId] ? _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread2(_objectSpread2(_objectSpread2({}, searchState.indices[indexId]), nextRefinement), page))) : _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread2(_objectSpread2({}, nextRefinement), page)));
    return _objectSpread2(_objectSpread2({}, searchState), {}, {
      indices: state
    });
  }
  function refineSingleIndex(searchState, nextRefinement, resetPage) {
    var page = resetPage ? {
      page: 1
    } : undefined;
    return _objectSpread2(_objectSpread2(_objectSpread2({}, searchState), nextRefinement), page);
  }
  function refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) {
    var _objectSpread4;
    var page = resetPage ? {
      page: 1
    } : undefined;
    var state = searchState.indices && searchState.indices[indexId] ? _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread2(_objectSpread2({}, searchState.indices[indexId]), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, namespace, _objectSpread2(_objectSpread2({}, searchState.indices[indexId][namespace]), nextRefinement)), _defineProperty(_objectSpread4, "page", 1), _objectSpread4)))) : _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread2(_defineProperty({}, namespace, nextRefinement), page)));
    return _objectSpread2(_objectSpread2({}, searchState), {}, {
      indices: state
    });
  }
  function refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) {
    var page = resetPage ? {
      page: 1
    } : undefined;
    return _objectSpread2(_objectSpread2({}, searchState), {}, _defineProperty({}, namespace, _objectSpread2(_objectSpread2({}, searchState[namespace]), nextRefinement)), page);
  }
  function getNamespaceAndAttributeName(id) {
    var parts = id.match(/^([^.]*)\.(.*)/);
    var namespace = parts && parts[1];
    var attributeName = parts && parts[2];
    return {
      namespace: namespace,
      attributeName: attributeName
    };
  }
  function hasRefinements(_ref) {
    var multiIndex = _ref.multiIndex,
      indexId = _ref.indexId,
      namespace = _ref.namespace,
      attributeName = _ref.attributeName,
      id = _ref.id,
      searchState = _ref.searchState;
    if (multiIndex && namespace) {
      return searchState.indices && searchState.indices[indexId] && searchState.indices[indexId][namespace] && Object.hasOwnProperty.call(searchState.indices[indexId][namespace], attributeName);
    }
    if (multiIndex) {
      return searchState.indices && searchState.indices[indexId] && Object.hasOwnProperty.call(searchState.indices[indexId], id);
    }
    if (namespace) {
      return searchState[namespace] && Object.hasOwnProperty.call(searchState[namespace], attributeName);
    }
    return Object.hasOwnProperty.call(searchState, id);
  }
  function getRefinements(_ref2) {
    var multiIndex = _ref2.multiIndex,
      indexId = _ref2.indexId,
      namespace = _ref2.namespace,
      attributeName = _ref2.attributeName,
      id = _ref2.id,
      searchState = _ref2.searchState;
    if (multiIndex && namespace) {
      return searchState.indices[indexId][namespace][attributeName];
    }
    if (multiIndex) {
      return searchState.indices[indexId][id];
    }
    if (namespace) {
      return searchState[namespace][attributeName];
    }
    return searchState[id];
  }
  function getCurrentRefinementValue(props, searchState, context, id, defaultValue) {
    var indexId = getIndexId(context);
    var _getNamespaceAndAttri = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri.namespace,
      attributeName = _getNamespaceAndAttri.attributeName;
    var multiIndex = hasMultipleIndices(context);
    var args = {
      multiIndex: multiIndex,
      indexId: indexId,
      namespace: namespace,
      attributeName: attributeName,
      id: id,
      searchState: searchState
    };
    var hasRefinementsValue = hasRefinements(args);
    if (hasRefinementsValue) {
      return getRefinements(args);
    }
    if (props.defaultRefinement) {
      return props.defaultRefinement;
    }
    return defaultValue;
  }
  function cleanUpValue(searchState, context, id) {
    var indexId = getIndexId(context);
    var _getNamespaceAndAttri2 = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri2.namespace,
      attributeName = _getNamespaceAndAttri2.attributeName;
    if (hasMultipleIndices(context) && Boolean(searchState.indices)) {
      return cleanUpValueWithMultiIndex({
        attribute: attributeName,
        searchState: searchState,
        indexId: indexId,
        id: id,
        namespace: namespace
      });
    }
    return cleanUpValueWithSingleIndex({
      attribute: attributeName,
      searchState: searchState,
      id: id,
      namespace: namespace
    });
  }
  function cleanUpValueWithSingleIndex(_ref3) {
    var searchState = _ref3.searchState,
      id = _ref3.id,
      namespace = _ref3.namespace,
      attribute = _ref3.attribute;
    if (namespace) {
      return _objectSpread2(_objectSpread2({}, searchState), {}, _defineProperty({}, namespace, omit(searchState[namespace], [attribute])));
    }
    return omit(searchState, [id]);
  }
  function cleanUpValueWithMultiIndex(_ref4) {
    var searchState = _ref4.searchState,
      indexId = _ref4.indexId,
      id = _ref4.id,
      namespace = _ref4.namespace,
      attribute = _ref4.attribute;
    var indexSearchState = searchState.indices[indexId];
    if (namespace && indexSearchState) {
      return _objectSpread2(_objectSpread2({}, searchState), {}, {
        indices: _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, _objectSpread2(_objectSpread2({}, indexSearchState), {}, _defineProperty({}, namespace, omit(indexSearchState[namespace], [attribute])))))
      });
    }
    if (indexSearchState) {
      return _objectSpread2(_objectSpread2({}, searchState), {}, {
        indices: _objectSpread2(_objectSpread2({}, searchState.indices), {}, _defineProperty({}, indexId, omit(indexSearchState, [id])))
      });
    }
    return searchState;
  }

  var _excluded$1 = ["children", "contextValue", "indexContextValue"],
    _excluded2 = ["children", "contextValue", "indexContextValue"];
  function getId() {
    return 'configure';
  }
  var connectConfigure = createConnectorWithContext({
    displayName: 'AlgoliaConfigure',
    $$type: 'ais.configure',
    getProvidedProps: function getProvidedProps() {
      return {};
    },
    getSearchParameters: function getSearchParameters(searchParameters, props) {
      var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = _objectWithoutProperties(props, _excluded$1);
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
      var nextValue = _defineProperty({}, id, _objectSpread2(_objectSpread2({}, omit(nextSearchState[id], nonPresentKeys)), items));
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

  var Configure = connectConfigure(function Configure() {
    return null;
  }, {
    $$widgetType: 'ais.configure'
  });

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element$1,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  var events = EventEmitter;

  // Backwards-compat with node 0.10.x
  // EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;

    if (!this._events)
      this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error ||
          (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
      }
    }

    handler = this._events[type];

    if (isUndefined(handler))
      return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter.prototype.addListener = function(type, listener) {
    var m;

    if (!isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events)
      this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener)
      this.emit('newListener', type,
                isFunction(listener.listener) ?
                listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);
    else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;

    if (!isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events || !this._events[type])
      return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener ||
        (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);

    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener ||
            (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }

      if (position < 0)
        return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;

    if (!this._events)
      return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };

  EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
  }

  var inherits_1 = inherits;

  /**
   * A DerivedHelper is a way to create sub requests to
   * Algolia from a main helper.
   * @class
   * @classdesc The DerivedHelper provides an event based interface for search callbacks:
   *  - search: when a search is triggered using the `search()` method.
   *  - result: when the response is retrieved from Algolia and is processed.
   *    This event contains a {@link SearchResults} object and the
   *    {@link SearchParameters} corresponding to this answer.
   * @param {AlgoliaSearchHelper} mainHelper the main helper
   * @param {function} fn the function to create the derived state
   */
  function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
  }

  inherits_1(DerivedHelper, events);

  /**
   * Detach this helper from the main helper
   * @return {undefined}
   * @throws Error if the derived helper is already detached
   */
  DerivedHelper.prototype.detach = function () {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
  };

  DerivedHelper.prototype.getModifiedState = function (parameters) {
    return this.fn(parameters);
  };

  var DerivedHelper_1 = DerivedHelper;

  /**
   * Replaces a leading - with \-
   * @private
   * @param {any} value the facet value to replace
   * @returns {any} the escaped facet value or the value if it was not a string
   */
  function escapeFacetValue(value) {
    if (typeof value !== 'string') return value;

    return String(value).replace(/^-/, '\\-');
  }

  /**
   * Replaces a leading \- with -
   * @private
   * @param {any} value the escaped facet value
   * @returns {any} the unescaped facet value or the value if it was not a string
   */
  function unescapeFacetValue$1(value) {
    if (typeof value !== 'string') return value;

    return value.replace(/^\\-/, '-');
  }

  var escapeFacetValue_1 = {
    escapeFacetValue: escapeFacetValue,
    unescapeFacetValue: unescapeFacetValue$1,
  };

  function clone(value) {
    if (typeof value === 'object' && value !== null) {
      return _merge(Array.isArray(value) ? [] : {}, value);
    }
    return value;
  }

  function isObjectOrArrayOrFunction(value) {
    return (
      typeof value === 'function' ||
      Array.isArray(value) ||
      Object.prototype.toString.call(value) === '[object Object]'
    );
  }

  function _merge(target, source) {
    if (target === source) {
      return target;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (var key in source) {
      if (
        !Object.prototype.hasOwnProperty.call(source, key) ||
        key === '__proto__' ||
        key === 'constructor'
      ) {
        // eslint-disable-next-line no-continue
        continue;
      }

      var sourceVal = source[key];
      var targetVal = target[key];

      if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (
        isObjectOrArrayOrFunction(targetVal) &&
        isObjectOrArrayOrFunction(sourceVal)
      ) {
        target[key] = _merge(targetVal, sourceVal);
      } else {
        target[key] = clone(sourceVal);
      }
    }
    return target;
  }

  /**
   * This method is like Object.assign, but recursively merges own and inherited
   * enumerable keyed properties of source objects into the destination object.
   *
   * NOTE: this behaves like lodash/merge, but:
   * - does mutate functions if they are a source
   * - treats non-plain objects as plain
   * - does not work for circular objects
   * - treats sparse arrays as sparse
   * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
   *
   * @param {Object} target The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   */
  function merge(target) {
    if (!isObjectOrArrayOrFunction(target)) {
      target = {};
    }

    for (var i = 1, l = arguments.length; i < l; i++) {
      var source = arguments[i];

      if (isObjectOrArrayOrFunction(source)) {
        _merge(target, source);
      }
    }
    return target;
  }

  var merge_1 = merge;

  function objectHasKeys$1(obj) {
    return obj && Object.keys(obj).length > 0;
  }

  var objectHasKeys_1 = objectHasKeys$1;

  // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source === null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key;
    var i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      // eslint-disable-next-line no-continue
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  var omit$1 = _objectWithoutPropertiesLoose$1;

  function sortObject(obj) {
    return Object.keys(obj)
      .sort()
      .reduce(function (acc, curr) {
        acc[curr] = obj[curr];
        return acc;
      }, {});
  }

  var requestBuilder = {
    /**
     * Get all the queries to send to the client, those queries can used directly
     * with the Algolia client.
     * @private
     * @param  {string} index The name of the index
     * @param  {SearchParameters} state The state from which to get the queries
     * @return {object[]} The queries
     */
    _getQueries: function getQueries(index, state) {
      var queries = [];

      // One query for the hits
      queries.push({
        indexName: index,
        params: requestBuilder._getHitsSearchParams(state),
      });

      // One for each disjunctive facets
      state.getRefinedDisjunctiveFacets().forEach(function (refinedFacet) {
        queries.push({
          indexName: index,
          params: requestBuilder._getDisjunctiveFacetSearchParams(
            state,
            refinedFacet
          ),
        });
      });

      // More to get the parent levels of the hierarchical facets when refined
      state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

        // If we are deeper than level 0 (starting from `beer > IPA`)
        // we want to get all parent values
        if (
          currentRefinement.length > 0 &&
          currentRefinement[0].split(separator).length > 1
        ) {
          // We generate a map of the filters we will use for our facet values queries
          var filtersMap = currentRefinement[0]
            .split(separator)
            .slice(0, -1)
            .reduce(function createFiltersMap(map, segment, level) {
              return map.concat({
                attribute: hierarchicalFacet.attributes[level],
                value:
                  level === 0
                    ? segment
                    : [map[map.length - 1].value, segment].join(separator),
              });
            }, []);

          filtersMap.forEach(function (filter, level) {
            var params = requestBuilder._getDisjunctiveFacetSearchParams(
              state,
              filter.attribute,
              level === 0
            );

            // Keep facet filters unrelated to current hierarchical attributes
            function hasHierarchicalFacetFilter(value) {
              return hierarchicalFacet.attributes.some(function (attribute) {
                return attribute === value.split(':')[0];
              });
            }

            var filteredFacetFilters = (params.facetFilters || []).reduce(
              function (acc, facetFilter) {
                if (Array.isArray(facetFilter)) {
                  var filtered = facetFilter.filter(function (filterValue) {
                    return !hasHierarchicalFacetFilter(filterValue);
                  });

                  if (filtered.length > 0) {
                    acc.push(filtered);
                  }
                }

                if (
                  typeof facetFilter === 'string' &&
                  !hasHierarchicalFacetFilter(facetFilter)
                ) {
                  acc.push(facetFilter);
                }

                return acc;
              },
              []
            );

            var parent = filtersMap[level - 1];
            if (level > 0) {
              params.facetFilters = filteredFacetFilters.concat(
                parent.attribute + ':' + parent.value
              );
            } else {
              params.facetFilters =
                filteredFacetFilters.length > 0
                  ? filteredFacetFilters
                  : undefined;
            }

            queries.push({ indexName: index, params: params });
          });
        }
      });

      return queries;
    },

    /**
     * Build search parameters used to fetch hits
     * @private
     * @param  {SearchParameters} state The state from which to get the queries
     * @return {object.<string, any>} The search parameters for hits
     */
    _getHitsSearchParams: function (state) {
      var facets = state.facets
        .concat(state.disjunctiveFacets)
        .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state))
        .sort();

      var facetFilters = requestBuilder._getFacetFilters(state);
      var numericFilters = requestBuilder._getNumericFilters(state);
      var tagFilters = requestBuilder._getTagFilters(state);
      var additionalParams = {
        facets: facets.indexOf('*') > -1 ? ['*'] : facets,
        tagFilters: tagFilters,
      };

      if (facetFilters.length > 0) {
        additionalParams.facetFilters = facetFilters;
      }

      if (numericFilters.length > 0) {
        additionalParams.numericFilters = numericFilters;
      }

      return sortObject(merge_1({}, state.getQueryParams(), additionalParams));
    },

    /**
     * Build search parameters used to fetch a disjunctive facet
     * @private
     * @param  {SearchParameters} state The state from which to get the queries
     * @param  {string} facet the associated facet name
     * @param  {boolean} hierarchicalRootLevel ?? FIXME
     * @return {object} The search parameters for a disjunctive facet
     */
    _getDisjunctiveFacetSearchParams: function (
      state,
      facet,
      hierarchicalRootLevel
    ) {
      var facetFilters = requestBuilder._getFacetFilters(
        state,
        facet,
        hierarchicalRootLevel
      );
      var numericFilters = requestBuilder._getNumericFilters(state, facet);
      var tagFilters = requestBuilder._getTagFilters(state);
      var additionalParams = {
        hitsPerPage: 0,
        page: 0,
        analytics: false,
        clickAnalytics: false,
      };

      if (tagFilters.length > 0) {
        additionalParams.tagFilters = tagFilters;
      }

      var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

      if (hierarchicalFacet) {
        additionalParams.facets =
          requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
            state,
            hierarchicalFacet,
            hierarchicalRootLevel
          );
      } else {
        additionalParams.facets = facet;
      }

      if (numericFilters.length > 0) {
        additionalParams.numericFilters = numericFilters;
      }

      if (facetFilters.length > 0) {
        additionalParams.facetFilters = facetFilters;
      }

      return sortObject(merge_1({}, state.getQueryParams(), additionalParams));
    },

    /**
     * Return the numeric filters in an algolia request fashion
     * @private
     * @param {SearchParameters} state the state from which to get the filters
     * @param {string} [facetName] the name of the attribute for which the filters should be excluded
     * @return {string[]} the numeric filters in the algolia format
     */
    _getNumericFilters: function (state, facetName) {
      if (state.numericFilters) {
        return state.numericFilters;
      }

      var numericFilters = [];

      Object.keys(state.numericRefinements).forEach(function (attribute) {
        var operators = state.numericRefinements[attribute] || {};
        Object.keys(operators).forEach(function (operator) {
          var values = operators[operator] || [];
          if (facetName !== attribute) {
            values.forEach(function (value) {
              if (Array.isArray(value)) {
                var vs = value.map(function (v) {
                  return attribute + operator + v;
                });
                numericFilters.push(vs);
              } else {
                numericFilters.push(attribute + operator + value);
              }
            });
          }
        });
      });

      return numericFilters;
    },

    /**
     * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
     * @private
     * @param {SearchParameters} state the state from which to get the filters
     * @return {string} Tag filters in a single string
     */
    _getTagFilters: function (state) {
      if (state.tagFilters) {
        return state.tagFilters;
      }

      return state.tagRefinements.join(',');
    },

    /**
     * Build facetFilters parameter based on current refinements. The array returned
     * contains strings representing the facet filters in the algolia format.
     * @private
     * @param  {SearchParameters} state The state from which to get the queries
     * @param  {string} [facet] if set, the current disjunctive facet
     * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
     * @return {array.<string>} The facet filters in the algolia format
     */
    _getFacetFilters: function (state, facet, hierarchicalRootLevel) {
      var facetFilters = [];

      var facetsRefinements = state.facetsRefinements || {};
      Object.keys(facetsRefinements)
        .sort()
        .forEach(function (facetName) {
          var facetValues = facetsRefinements[facetName] || [];
          facetValues.sort().forEach(function (facetValue) {
            facetFilters.push(facetName + ':' + facetValue);
          });
        });

      var facetsExcludes = state.facetsExcludes || {};
      Object.keys(facetsExcludes)
        .sort()
        .forEach(function (facetName) {
          var facetValues = facetsExcludes[facetName] || [];
          facetValues.sort().forEach(function (facetValue) {
            facetFilters.push(facetName + ':-' + facetValue);
          });
        });

      var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
      Object.keys(disjunctiveFacetsRefinements)
        .sort()
        .forEach(function (facetName) {
          var facetValues = disjunctiveFacetsRefinements[facetName] || [];
          if (facetName === facet || !facetValues || facetValues.length === 0) {
            return;
          }
          var orFilters = [];

          facetValues.sort().forEach(function (facetValue) {
            orFilters.push(facetName + ':' + facetValue);
          });

          facetFilters.push(orFilters);
        });

      var hierarchicalFacetsRefinements =
        state.hierarchicalFacetsRefinements || {};
      Object.keys(hierarchicalFacetsRefinements)
        .sort()
        .forEach(function (facetName) {
          var facetValues = hierarchicalFacetsRefinements[facetName] || [];
          var facetValue = facetValues[0];

          if (facetValue === undefined) {
            return;
          }

          var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
          var attributeToRefine;
          var attributesIndex;

          // we ask for parent facet values only when the `facet` is the current hierarchical facet
          if (facet === facetName) {
            // if we are at the root level already, no need to ask for facet values, we get them from
            // the hits query
            if (
              facetValue.indexOf(separator) === -1 ||
              (!rootPath && hierarchicalRootLevel === true) ||
              (rootPath &&
                rootPath.split(separator).length ===
                  facetValue.split(separator).length)
            ) {
              return;
            }

            if (!rootPath) {
              attributesIndex = facetValue.split(separator).length - 2;
              facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
            } else {
              attributesIndex = rootPath.split(separator).length - 1;
              facetValue = rootPath;
            }

            attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
          } else {
            attributesIndex = facetValue.split(separator).length - 1;

            attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
          }

          if (attributeToRefine) {
            facetFilters.push([attributeToRefine + ':' + facetValue]);
          }
        });

      return facetFilters;
    },

    _getHitsHierarchicalFacetsAttributes: function (state) {
      var out = [];

      return state.hierarchicalFacets.reduce(
        // ask for as much levels as there's hierarchical refinements
        function getHitsAttributesForHierarchicalFacet(
          allAttributes,
          hierarchicalFacet
        ) {
          var hierarchicalRefinement = state.getHierarchicalRefinement(
            hierarchicalFacet.name
          )[0];

          // if no refinement, ask for root level
          if (!hierarchicalRefinement) {
            allAttributes.push(hierarchicalFacet.attributes[0]);
            return allAttributes;
          }

          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          var level = hierarchicalRefinement.split(separator).length;
          var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

          return allAttributes.concat(newAttributes);
        },
        out
      );
    },

    _getDisjunctiveHierarchicalFacetAttribute: function (
      state,
      hierarchicalFacet,
      rootLevel
    ) {
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      if (rootLevel === true) {
        var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var attributeIndex = 0;

        if (rootPath) {
          attributeIndex = rootPath.split(separator).length;
        }
        return [hierarchicalFacet.attributes[attributeIndex]];
      }

      var hierarchicalRefinement =
        state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
      // if refinement is 'beers > IPA > Flying dog',
      // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

      var parentLevel = hierarchicalRefinement.split(separator).length - 1;
      return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },

    getSearchForFacetQuery: function (facetName, query, maxFacetHits, state) {
      var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName)
        ? state.clearRefinements(facetName)
        : state;
      var searchForFacetSearchParameters = {
        facetQuery: query,
        facetName: facetName,
      };
      if (typeof maxFacetHits === 'number') {
        searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
      }
      return sortObject(
        merge_1(
          {},
          requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
          searchForFacetSearchParameters
        )
      );
    },
  };

  var requestBuilder_1 = requestBuilder;

  // NOTE: this behaves like lodash/defaults, but doesn't mutate the target
  // it also preserve keys order
  var defaultsPure = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);

    return sources.reduceRight(function (acc, source) {
      Object.keys(Object(source)).forEach(function (key) {
        if (source[key] === undefined) {
          return;
        }
        if (acc[key] !== undefined) {
          // remove if already added, so that we can add it in correct order
          delete acc[key];
        }
        acc[key] = source[key];
      });
      return acc;
    }, {});
  };

  // @MAJOR can be replaced by native Array#find when we change support
  var find$1 = function find(array, comparator) {
    if (!Array.isArray(array)) {
      return undefined;
    }

    for (var i = 0; i < array.length; i++) {
      if (comparator(array[i])) {
        return array[i];
      }
    }

    return undefined;
  };

  function intersection(arr1, arr2) {
    return arr1.filter(function (value, index) {
      return (
        arr2.indexOf(value) > -1 &&
        arr1.indexOf(value) === index /* skips duplicates */
      );
    });
  }

  var intersection_1 = intersection;

  function valToNumber(v) {
    if (typeof v === 'number') {
      return v;
    } else if (typeof v === 'string') {
      return parseFloat(v);
    } else if (Array.isArray(v)) {
      return v.map(valToNumber);
    }

    throw new Error(
      'The value should be a number, a parsable string or an array of those.'
    );
  }

  var valToNumber_1 = valToNumber;

  var isValidUserToken = function isValidUserToken(userToken) {
    if (userToken === null) {
      return false;
    }
    return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
  };

  /**
   * Functions to manipulate refinement lists
   *
   * The RefinementList is not formally defined through a prototype but is based
   * on a specific structure.
   *
   * @module SearchParameters.refinementList
   *
   * @typedef {string[]} SearchParameters.refinementList.Refinements
   * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
   */





  var lib = {
    /**
     * Adds a refinement to a RefinementList
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} value the value of the refinement, if the value is not a string it will be converted
     * @return {RefinementList} a new and updated refinement list
     */
    addRefinement: function addRefinement(refinementList, attribute, value) {
      if (lib.isRefined(refinementList, attribute, value)) {
        return refinementList;
      }

      var valueAsString = '' + value;

      var facetRefinement = !refinementList[attribute]
        ? [valueAsString]
        : refinementList[attribute].concat(valueAsString);

      var mod = {};

      mod[attribute] = facetRefinement;

      return defaultsPure({}, mod, refinementList);
    },
    /**
     * Removes refinement(s) for an attribute:
     *  - if the value is specified removes the refinement for the value on the attribute
     *  - if no value is specified removes all the refinements for this attribute
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} [value] the value of the refinement
     * @return {RefinementList} a new and updated refinement lst
     */
    removeRefinement: function removeRefinement(
      refinementList,
      attribute,
      value
    ) {
      if (value === undefined) {
        // we use the "filter" form of clearRefinement, since it leaves empty values as-is
        // the form with a string will remove the attribute completely
        return lib.clearRefinement(refinementList, function (v, f) {
          return attribute === f;
        });
      }

      var valueAsString = '' + value;

      return lib.clearRefinement(refinementList, function (v, f) {
        return attribute === f && valueAsString === v;
      });
    },
    /**
     * Toggles the refinement value for an attribute.
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} value the value of the refinement
     * @return {RefinementList} a new and updated list
     */
    toggleRefinement: function toggleRefinement(
      refinementList,
      attribute,
      value
    ) {
      if (value === undefined)
        throw new Error('toggleRefinement should be used with a value');

      if (lib.isRefined(refinementList, attribute, value)) {
        return lib.removeRefinement(refinementList, attribute, value);
      }

      return lib.addRefinement(refinementList, attribute, value);
    },
    /**
     * Clear all or parts of a RefinementList. Depending on the arguments, three
     * kinds of behavior can happen:
     *  - if no attribute is provided: clears the whole list
     *  - if an attribute is provided as a string: clears the list for the specific attribute
     *  - if an attribute is provided as a function: discards the elements for which the function returns true
     * @param {RefinementList} refinementList the initial list
     * @param {string} [attribute] the attribute or function to discard
     * @param {string} [refinementType] optional parameter to give more context to the attribute function
     * @return {RefinementList} a new and updated refinement list
     */
    clearRefinement: function clearRefinement(
      refinementList,
      attribute,
      refinementType
    ) {
      if (attribute === undefined) {
        // return the same object if the list is already empty
        // this is mainly for tests, as it doesn't have much impact on performance
        if (!objectHasKeys_1(refinementList)) {
          return refinementList;
        }
        return {};
      } else if (typeof attribute === 'string') {
        return omit$1(refinementList, [attribute]);
      } else if (typeof attribute === 'function') {
        var hasChanged = false;

        var newRefinementList = Object.keys(refinementList).reduce(function (
          memo,
          key
        ) {
          var values = refinementList[key] || [];
          var facetList = values.filter(function (value) {
            return !attribute(value, key, refinementType);
          });

          if (facetList.length !== values.length) {
            hasChanged = true;
          }

          memo[key] = facetList;

          return memo;
        },
        {});

        if (hasChanged) return newRefinementList;
        return refinementList;
      }

      // We return nothing if the attribute is not undefined, a string or a function,
      // as it is not a valid value for a refinement
      return undefined;
    },
    /**
     * Test if the refinement value is used for the attribute. If no refinement value
     * is provided, test if the refinementList contains any refinement for the
     * given attribute.
     * @param {RefinementList} refinementList the list of refinement
     * @param {string} attribute name of the attribute
     * @param {string} [refinementValue] value of the filter/refinement
     * @return {boolean} true if the attribute is refined, false otherwise
     */
    isRefined: function isRefined(refinementList, attribute, refinementValue) {
      var containsRefinements =
        Boolean(refinementList[attribute]) &&
        refinementList[attribute].length > 0;

      if (refinementValue === undefined || !containsRefinements) {
        return containsRefinements;
      }

      var refinementValueAsString = '' + refinementValue;

      return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    },
  };

  var RefinementList = lib;

  /**
   * isEqual, but only for numeric refinement values, possible values:
   * - 5
   * - [5]
   * - [[5]]
   * - [[5,5],[4]]
   * @param {any} a numeric refinement value
   * @param {any} b numeric refinement value
   * @return {boolean} true if the values are equal
   */
  function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return (
        a.length === b.length &&
        a.every(function (el, i) {
          return isEqualNumericRefinement(b[i], el);
        })
      );
    }
    return a === b;
  }

  /**
   * like _.find but using deep equality to be able to use it
   * to find arrays.
   * @private
   * @param {any[]} array array to search into (elements are base or array of base)
   * @param {any} searchedValue the value we're looking for (base or array of base)
   * @return {any} the searched value or undefined
   */
  function findArray(array, searchedValue) {
    return find$1(array, function (currentValue) {
      return isEqualNumericRefinement(currentValue, searchedValue);
    });
  }

  /**
   * The facet list is the structure used to store the list of values used to
   * filter a single attribute.
   * @typedef {string[]} SearchParameters.FacetList
   */

  /**
   * Structure to store numeric filters with the operator as the key. The supported operators
   * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
   * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
   */

  /**
   * SearchParameters is the data structure that contains all the information
   * usable for making a search to Algolia API. It doesn't do the search itself,
   * nor does it contains logic about the parameters.
   * It is an immutable object, therefore it has been created in a way that each
   * changes does not change the object itself but returns a copy with the
   * modification.
   * This object should probably not be instantiated outside of the helper. It will
   * be provided when needed. This object is documented for reference as you'll
   * get it from events generated by the {@link AlgoliaSearchHelper}.
   * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
   * @constructor
   * @classdesc contains all the parameters of a search
   * @param {object|SearchParameters} newParameters existing parameters or partial object
   * for the properties of a new SearchParameters
   * @see SearchParameters.make
   * @example <caption>SearchParameters of the first query in
   *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
  {
     "query": "",
     "disjunctiveFacets": [
        "customerReviewCount",
        "category",
        "salePrice_range",
        "manufacturer"
    ],
     "maxValuesPerFacet": 30,
     "page": 0,
     "hitsPerPage": 10,
     "facets": [
        "type",
        "shipping"
    ]
  }
   */
  function SearchParameters(newParameters) {
    var params = newParameters
      ? SearchParameters._parseNumbers(newParameters)
      : {};

    if (params.userToken !== undefined && !isValidUserToken(params.userToken)) {
      // eslint-disable-next-line no-console
      console.warn(
        '[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}'
      );
    }
    /**
     * This attribute contains the list of all the conjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */
    this.facets = params.facets || [];
    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */
    this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     * @member {string[]|object[]}
     */
    this.hierarchicalFacets = params.hierarchicalFacets || [];

    // Refinements
    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    this.facetsRefinements = params.facetsRefinements || {};
    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    this.facetsExcludes = params.facetsExcludes || {};
    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     * @member {Object.<string, SearchParameters.OperatorList>}
     */
    this.numericRefinements = params.numericRefinements || {};
    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     * @member {string[]}
     */
    this.tagRefinements = params.tagRefinements || [];
    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */
    this.hierarchicalFacetsRefinements =
      params.hierarchicalFacetsRefinements || {};

    // eslint-disable-next-line consistent-this
    var self = this;
    Object.keys(params).forEach(function (paramName) {
      var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
      var isValueDefined = params[paramName] !== undefined;

      if (!isKeyKnown && isValueDefined) {
        self[paramName] = params[paramName];
      }
    });
  }

  /**
   * List all the properties in SearchParameters and therefore all the known Algolia properties
   * This doesn't contain any beta/hidden features.
   * @private
   */
  SearchParameters.PARAMETERS = Object.keys(new SearchParameters());

  /**
   * @private
   * @param {object} partialState full or part of a state
   * @return {object} a new object with the number keys as number
   */
  SearchParameters._parseNumbers = function (partialState) {
    // Do not parse numbers again in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;

    var numbers = {};

    var numberKeys = [
      'aroundPrecision',
      'aroundRadius',
      'getRankingInfo',
      'minWordSizefor2Typos',
      'minWordSizefor1Typo',
      'page',
      'maxValuesPerFacet',
      'distinct',
      'minimumAroundRadius',
      'hitsPerPage',
      'minProximity',
    ];

    numberKeys.forEach(function (k) {
      var value = partialState[k];
      if (typeof value === 'string') {
        var parsedValue = parseFloat(value);
        // global isNaN is ok to use here, value is only number or NaN
        numbers[k] = isNaN(parsedValue) ? value : parsedValue;
      }
    });

    // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles
    if (Array.isArray(partialState.insideBoundingBox)) {
      numbers.insideBoundingBox = partialState.insideBoundingBox.map(function (
        geoRect
      ) {
        if (Array.isArray(geoRect)) {
          return geoRect.map(function (value) {
            return parseFloat(value);
          });
        }
        return geoRect;
      });
    }

    if (partialState.numericRefinements) {
      var numericRefinements = {};
      Object.keys(partialState.numericRefinements).forEach(function (attribute) {
        var operators = partialState.numericRefinements[attribute] || {};
        numericRefinements[attribute] = {};
        Object.keys(operators).forEach(function (operator) {
          var values = operators[operator];
          var parsedValues = values.map(function (v) {
            if (Array.isArray(v)) {
              return v.map(function (vPrime) {
                if (typeof vPrime === 'string') {
                  return parseFloat(vPrime);
                }
                return vPrime;
              });
            } else if (typeof v === 'string') {
              return parseFloat(v);
            }
            return v;
          });
          numericRefinements[attribute][operator] = parsedValues;
        });
      });
      numbers.numericRefinements = numericRefinements;
    }

    return merge_1({}, partialState, numbers);
  };

  /**
   * Factory for SearchParameters
   * @param {object|SearchParameters} newParameters existing parameters or partial
   * object for the properties of a new SearchParameters
   * @return {SearchParameters} frozen instance of SearchParameters
   */
  SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);

    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function (facet) {
      if (facet.rootPath) {
        var currentRefinement = instance.getHierarchicalRefinement(facet.name);

        if (
          currentRefinement.length > 0 &&
          currentRefinement[0].indexOf(facet.rootPath) !== 0
        ) {
          instance = instance.clearRefinements(facet.name);
        }

        // get it again in case it has been cleared
        currentRefinement = instance.getHierarchicalRefinement(facet.name);
        if (currentRefinement.length === 0) {
          instance = instance.toggleHierarchicalFacetRefinement(
            facet.name,
            facet.rootPath
          );
        }
      }
    });

    return instance;
  };

  /**
   * Validates the new parameters based on the previous state
   * @param {SearchParameters} currentState the current state
   * @param {object|SearchParameters} parameters the new parameters to set
   * @return {Error|null} Error if the modification is invalid, null otherwise
   */
  SearchParameters.validate = function (currentState, parameters) {
    var params = parameters || {};

    if (
      currentState.tagFilters &&
      params.tagRefinements &&
      params.tagRefinements.length > 0
    ) {
      return new Error(
        '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' +
          'an error, if it is really what you want, you should first clear the tags with clearTags method.'
      );
    }

    if (currentState.tagRefinements.length > 0 && params.tagFilters) {
      return new Error(
        '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' +
          'an error, if it is not, you should first clear the tags with clearTags method.'
      );
    }

    if (
      currentState.numericFilters &&
      params.numericRefinements &&
      objectHasKeys_1(params.numericRefinements)
    ) {
      return new Error(
        "[Numeric filters] Can't switch from the advanced to the managed API. It" +
          ' is probably an error, if this is really what you want, you have to first' +
          ' clear the numeric filters.'
      );
    }

    if (objectHasKeys_1(currentState.numericRefinements) && params.numericFilters) {
      return new Error(
        "[Numeric filters] Can't switch from the managed API to the advanced. It" +
          ' is probably an error, if this is really what you want, you have to first' +
          ' clear the numeric filters.'
      );
    }

    return null;
  };

  SearchParameters.prototype = {
    constructor: SearchParameters,

    /**
     * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
     * @method
     * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
     * - If not given, means to clear all the filters.
     * - If `string`, means to clear all refinements for the `attribute` named filter.
     * - If `function`, means to clear all the refinements that return truthy values.
     * @return {SearchParameters} new instance with filters cleared
     */
    clearRefinements: function clearRefinements(attribute) {
      var patch = {
        numericRefinements: this._clearNumericRefinements(attribute),
        facetsRefinements: RefinementList.clearRefinement(
          this.facetsRefinements,
          attribute,
          'conjunctiveFacet'
        ),
        facetsExcludes: RefinementList.clearRefinement(
          this.facetsExcludes,
          attribute,
          'exclude'
        ),
        disjunctiveFacetsRefinements: RefinementList.clearRefinement(
          this.disjunctiveFacetsRefinements,
          attribute,
          'disjunctiveFacet'
        ),
        hierarchicalFacetsRefinements: RefinementList.clearRefinement(
          this.hierarchicalFacetsRefinements,
          attribute,
          'hierarchicalFacet'
        ),
      };
      if (
        patch.numericRefinements === this.numericRefinements &&
        patch.facetsRefinements === this.facetsRefinements &&
        patch.facetsExcludes === this.facetsExcludes &&
        patch.disjunctiveFacetsRefinements ===
          this.disjunctiveFacetsRefinements &&
        patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
      ) {
        return this;
      }
      return this.setQueryParameters(patch);
    },
    /**
     * Remove all the refined tags from the SearchParameters
     * @method
     * @return {SearchParameters} new instance with tags cleared
     */
    clearTags: function clearTags() {
      if (this.tagFilters === undefined && this.tagRefinements.length === 0)
        return this;

      return this.setQueryParameters({
        tagFilters: undefined,
        tagRefinements: [],
      });
    },
    /**
     * Set the index.
     * @method
     * @param {string} index the index name
     * @return {SearchParameters} new instance
     */
    setIndex: function setIndex(index) {
      if (index === this.index) return this;

      return this.setQueryParameters({
        index: index,
      });
    },
    /**
     * Query setter
     * @method
     * @param {string} newQuery value for the new query
     * @return {SearchParameters} new instance
     */
    setQuery: function setQuery(newQuery) {
      if (newQuery === this.query) return this;

      return this.setQueryParameters({
        query: newQuery,
      });
    },
    /**
     * Page setter
     * @method
     * @param {number} newPage new page number
     * @return {SearchParameters} new instance
     */
    setPage: function setPage(newPage) {
      if (newPage === this.page) return this;

      return this.setQueryParameters({
        page: newPage,
      });
    },
    /**
     * Facets setter
     * The facets are the simple facets, used for conjunctive (and) faceting.
     * @method
     * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
     * @return {SearchParameters} new instance
     */
    setFacets: function setFacets(facets) {
      return this.setQueryParameters({
        facets: facets,
      });
    },
    /**
     * Disjunctive facets setter
     * Change the list of disjunctive (or) facets the helper chan handle.
     * @method
     * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
     * @return {SearchParameters} new instance
     */
    setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
      return this.setQueryParameters({
        disjunctiveFacets: facets,
      });
    },
    /**
     * HitsPerPage setter
     * Hits per page represents the number of hits retrieved for this query
     * @method
     * @param {number} n number of hits retrieved per page of results
     * @return {SearchParameters} new instance
     */
    setHitsPerPage: function setHitsPerPage(n) {
      if (this.hitsPerPage === n) return this;

      return this.setQueryParameters({
        hitsPerPage: n,
      });
    },
    /**
     * typoTolerance setter
     * Set the value of typoTolerance
     * @method
     * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
     * @return {SearchParameters} new instance
     */
    setTypoTolerance: function setTypoTolerance(typoTolerance) {
      if (this.typoTolerance === typoTolerance) return this;

      return this.setQueryParameters({
        typoTolerance: typoTolerance,
      });
    },
    /**
     * Add a numeric filter for a given attribute
     * When value is an array, they are combined with OR
     * When value is a single value, it will combined with AND
     * @method
     * @param {string} attribute attribute to set the filter on
     * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
     * @param {number | number[]} value value of the filter
     * @return {SearchParameters} new instance
     * @example
     * // for price = 50 or 40
     * state.addNumericRefinement('price', '=', [50, 40]);
     * @example
     * // for size = 38 and 40
     * state.addNumericRefinement('size', '=', 38);
     * state.addNumericRefinement('size', '=', 40);
     */
    addNumericRefinement: function (attribute, operator, value) {
      var val = valToNumber_1(value);

      if (this.isNumericRefined(attribute, operator, val)) return this;

      var mod = merge_1({}, this.numericRefinements);

      mod[attribute] = merge_1({}, mod[attribute]);

      if (mod[attribute][operator]) {
        // Array copy
        mod[attribute][operator] = mod[attribute][operator].slice();
        // Add the element. Concat can't be used here because value can be an array.
        mod[attribute][operator].push(val);
      } else {
        mod[attribute][operator] = [val];
      }

      return this.setQueryParameters({
        numericRefinements: mod,
      });
    },
    /**
     * Get the list of conjunctive refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getConjunctiveRefinements: function (facetName) {
      if (!this.isConjunctiveFacet(facetName)) {
        return [];
      }
      return this.facetsRefinements[facetName] || [];
    },
    /**
     * Get the list of disjunctive refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getDisjunctiveRefinements: function (facetName) {
      if (!this.isDisjunctiveFacet(facetName)) {
        return [];
      }
      return this.disjunctiveFacetsRefinements[facetName] || [];
    },
    /**
     * Get the list of hierarchical refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getHierarchicalRefinement: function (facetName) {
      // we send an array but we currently do not support multiple
      // hierarchicalRefinements for a hierarchicalFacet
      return this.hierarchicalFacetsRefinements[facetName] || [];
    },
    /**
     * Get the list of exclude refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getExcludeRefinements: function (facetName) {
      if (!this.isConjunctiveFacet(facetName)) {
        return [];
      }
      return this.facetsExcludes[facetName] || [];
    },

    /**
     * Remove all the numeric filter for a given (attribute, operator)
     * @method
     * @param {string} attribute attribute to set the filter on
     * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
     * @param {number} [number] the value to be removed
     * @return {SearchParameters} new instance
     */
    removeNumericRefinement: function (attribute, operator, number) {
      var paramValue = number;
      if (paramValue !== undefined) {
        if (!this.isNumericRefined(attribute, operator, paramValue)) {
          return this;
        }
        return this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (
            value,
            key
          ) {
            return (
              key === attribute &&
              value.op === operator &&
              isEqualNumericRefinement(value.val, valToNumber_1(paramValue))
            );
          }),
        });
      } else if (operator !== undefined) {
        if (!this.isNumericRefined(attribute, operator)) return this;
        return this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (
            value,
            key
          ) {
            return key === attribute && value.op === operator;
          }),
        });
      }

      if (!this.isNumericRefined(attribute)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute;
        }),
      });
    },
    /**
     * Get the list of numeric refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {SearchParameters.OperatorList} list of refinements
     */
    getNumericRefinements: function (facetName) {
      return this.numericRefinements[facetName] || {};
    },
    /**
     * Return the current refinement for the (attribute, operator)
     * @param {string} attribute attribute in the record
     * @param {string} operator operator applied on the refined values
     * @return {Array.<number|number[]>} refined values
     */
    getNumericRefinement: function (attribute, operator) {
      return (
        this.numericRefinements[attribute] &&
        this.numericRefinements[attribute][operator]
      );
    },
    /**
     * Clear numeric filters.
     * @method
     * @private
     * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
     * - If not given, means to clear all the filters.
     * - If `string`, means to clear all refinements for the `attribute` named filter.
     * - If `function`, means to clear all the refinements that return truthy values.
     * @return {Object.<string, OperatorList>} new numeric refinements
     */
    _clearNumericRefinements: function _clearNumericRefinements(attribute) {
      if (attribute === undefined) {
        if (!objectHasKeys_1(this.numericRefinements)) {
          return this.numericRefinements;
        }
        return {};
      } else if (typeof attribute === 'string') {
        return omit$1(this.numericRefinements, [attribute]);
      } else if (typeof attribute === 'function') {
        var hasChanged = false;
        var numericRefinements = this.numericRefinements;
        var newNumericRefinements = Object.keys(numericRefinements).reduce(
          function (memo, key) {
            var operators = numericRefinements[key];
            var operatorList = {};

            operators = operators || {};
            Object.keys(operators).forEach(function (operator) {
              var values = operators[operator] || [];
              var outValues = [];
              values.forEach(function (value) {
                var predicateResult = attribute(
                  { val: value, op: operator },
                  key,
                  'numeric'
                );
                if (!predicateResult) outValues.push(value);
              });
              if (outValues.length !== values.length) {
                hasChanged = true;
              }
              operatorList[operator] = outValues;
            });

            memo[key] = operatorList;

            return memo;
          },
          {}
        );

        if (hasChanged) return newNumericRefinements;
        return this.numericRefinements;
      }

      // We return nothing if the attribute is not undefined, a string or a function,
      // as it is not a valid value for a refinement
      return undefined;
    },
    /**
     * Add a facet to the facets attribute of the helper configuration, if it
     * isn't already present.
     * @method
     * @param {string} facet facet name to add
     * @return {SearchParameters} new instance
     */
    addFacet: function addFacet(facet) {
      if (this.isConjunctiveFacet(facet)) {
        return this;
      }

      return this.setQueryParameters({
        facets: this.facets.concat([facet]),
      });
    },
    /**
     * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
     * configuration, if it isn't already present.
     * @method
     * @param {string} facet disjunctive facet name to add
     * @return {SearchParameters} new instance
     */
    addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
      if (this.isDisjunctiveFacet(facet)) {
        return this;
      }

      return this.setQueryParameters({
        disjunctiveFacets: this.disjunctiveFacets.concat([facet]),
      });
    },
    /**
     * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
     * configuration.
     * @method
     * @param {object} hierarchicalFacet hierarchical facet to add
     * @return {SearchParameters} new instance
     * @throws will throw an error if a hierarchical facet with the same name was already declared
     */
    addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
      if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
        throw new Error(
          'Cannot declare two hierarchical facets with the same name: `' +
            hierarchicalFacet.name +
            '`'
        );
      }

      return this.setQueryParameters({
        hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet]),
      });
    },
    /**
     * Add a refinement on a "normal" facet
     * @method
     * @param {string} facet attribute to apply the faceting on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters} new instance
     */
    addFacetRefinement: function addFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }
      if (RefinementList.isRefined(this.facetsRefinements, facet, value))
        return this;

      return this.setQueryParameters({
        facetsRefinements: RefinementList.addRefinement(
          this.facetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * Exclude a value from a "normal" facet
     * @method
     * @param {string} facet attribute to apply the exclusion on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters} new instance
     */
    addExcludeRefinement: function addExcludeRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }
      if (RefinementList.isRefined(this.facetsExcludes, facet, value))
        return this;

      return this.setQueryParameters({
        facetsExcludes: RefinementList.addRefinement(
          this.facetsExcludes,
          facet,
          value
        ),
      });
    },
    /**
     * Adds a refinement on a disjunctive facet.
     * @method
     * @param {string} facet attribute to apply the faceting on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters} new instance
     */
    addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(
      facet,
      value
    ) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
        );
      }

      if (
        RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)
      )
        return this;

      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.addRefinement(
          this.disjunctiveFacetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * addTagRefinement adds a tag to the list used to filter the results
     * @param {string} tag tag to be added
     * @return {SearchParameters} new instance
     */
    addTagRefinement: function addTagRefinement(tag) {
      if (this.isTagRefined(tag)) return this;

      var modification = {
        tagRefinements: this.tagRefinements.concat(tag),
      };

      return this.setQueryParameters(modification);
    },
    /**
     * Remove a facet from the facets attribute of the helper configuration, if it
     * is present.
     * @method
     * @param {string} facet facet name to remove
     * @return {SearchParameters} new instance
     */
    removeFacet: function removeFacet(facet) {
      if (!this.isConjunctiveFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        facets: this.facets.filter(function (f) {
          return f !== facet;
        }),
      });
    },
    /**
     * Remove a disjunctive facet from the disjunctiveFacets attribute of the
     * helper configuration, if it is present.
     * @method
     * @param {string} facet disjunctive facet name to remove
     * @return {SearchParameters} new instance
     */
    removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
      if (!this.isDisjunctiveFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        disjunctiveFacets: this.disjunctiveFacets.filter(function (f) {
          return f !== facet;
        }),
      });
    },
    /**
     * Remove a hierarchical facet from the hierarchicalFacets attribute of the
     * helper configuration, if it is present.
     * @method
     * @param {string} facet hierarchical facet name to remove
     * @return {SearchParameters} new instance
     */
    removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
      if (!this.isHierarchicalFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        hierarchicalFacets: this.hierarchicalFacets.filter(function (f) {
          return f.name !== facet;
        }),
      });
    },
    /**
     * Remove a refinement set on facet. If a value is provided, it will clear the
     * refinement for the given value, otherwise it will clear all the refinement
     * values for the faceted attribute.
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} [value] value used to filter
     * @return {SearchParameters} new instance
     */
    removeFacetRefinement: function removeFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }
      if (!RefinementList.isRefined(this.facetsRefinements, facet, value))
        return this;

      return this.setQueryParameters({
        facetsRefinements: RefinementList.removeRefinement(
          this.facetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * Remove a negative refinement on a facet
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} value value used to filter
     * @return {SearchParameters} new instance
     */
    removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }
      if (!RefinementList.isRefined(this.facetsExcludes, facet, value))
        return this;

      return this.setQueryParameters({
        facetsExcludes: RefinementList.removeRefinement(
          this.facetsExcludes,
          facet,
          value
        ),
      });
    },
    /**
     * Remove a refinement on a disjunctive facet
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} value value used to filter
     * @return {SearchParameters} new instance
     */
    removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(
      facet,
      value
    ) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
        );
      }
      if (
        !RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)
      )
        return this;

      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.removeRefinement(
          this.disjunctiveFacetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * Remove a tag from the list of tag refinements
     * @method
     * @param {string} tag the tag to remove
     * @return {SearchParameters} new instance
     */
    removeTagRefinement: function removeTagRefinement(tag) {
      if (!this.isTagRefined(tag)) return this;

      var modification = {
        tagRefinements: this.tagRefinements.filter(function (t) {
          return t !== tag;
        }),
      };

      return this.setQueryParameters(modification);
    },
    /**
     * Generic toggle refinement method to use with facet, disjunctive facets
     * and hierarchical facets
     * @param  {string} facet the facet to refine
     * @param  {string} value the associated value
     * @return {SearchParameters} new instance
     * @throws will throw an error if the facet is not declared in the settings of the helper
     * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
     */
    toggleRefinement: function toggleRefinement(facet, value) {
      return this.toggleFacetRefinement(facet, value);
    },
    /**
     * Generic toggle refinement method to use with facet, disjunctive facets
     * and hierarchical facets
     * @param  {string} facet the facet to refine
     * @param  {string} value the associated value
     * @return {SearchParameters} new instance
     * @throws will throw an error if the facet is not declared in the settings of the helper
     */
    toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
      if (this.isHierarchicalFacet(facet)) {
        return this.toggleHierarchicalFacetRefinement(facet, value);
      } else if (this.isConjunctiveFacet(facet)) {
        return this.toggleConjunctiveFacetRefinement(facet, value);
      } else if (this.isDisjunctiveFacet(facet)) {
        return this.toggleDisjunctiveFacetRefinement(facet, value);
      }

      throw new Error(
        'Cannot refine the undeclared facet ' +
          facet +
          '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets'
      );
    },
    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters} new instance
     */
    toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(
      facet,
      value
    ) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }

      return this.setQueryParameters({
        facetsRefinements: RefinementList.toggleRefinement(
          this.facetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters} new instance
     */
    toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(
      facet,
      value
    ) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the facets attribute of the helper configuration'
        );
      }

      return this.setQueryParameters({
        facetsExcludes: RefinementList.toggleRefinement(
          this.facetsExcludes,
          facet,
          value
        ),
      });
    },
    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters} new instance
     */
    toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(
      facet,
      value
    ) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the disjunctiveFacets attribute of the helper configuration'
        );
      }

      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.toggleRefinement(
          this.disjunctiveFacetsRefinements,
          facet,
          value
        ),
      });
    },
    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters} new instance
     */
    toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(
      facet,
      value
    ) {
      if (!this.isHierarchicalFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the hierarchicalFacets attribute of the helper configuration'
        );
      }

      var separator = this._getHierarchicalFacetSeparator(
        this.getHierarchicalFacetByName(facet)
      );

      var mod = {};

      var upOneOrMultipleLevel =
        this.hierarchicalFacetsRefinements[facet] !== undefined &&
        this.hierarchicalFacetsRefinements[facet].length > 0 &&
        // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value ||
          // remove a parent refinement of the current refinement:
          //  - refinement was 'beer > IPA > Flying dog'
          //  - call is toggleRefine('beer > IPA')
          //  - refinement should be `beer`
          this.hierarchicalFacetsRefinements[facet][0].indexOf(
            value + separator
          ) === 0);

      if (upOneOrMultipleLevel) {
        if (value.indexOf(separator) === -1) {
          // go back to root level
          mod[facet] = [];
        } else {
          mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
        }
      } else {
        mod[facet] = [value];
      }

      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure(
          {},
          mod,
          this.hierarchicalFacetsRefinements
        ),
      });
    },

    /**
     * Adds a refinement on a hierarchical facet.
     * @param {string} facet the facet name
     * @param {string} path the hierarchical facet path
     * @return {SearchParameter} the new state
     * @throws Error if the facet is not defined or if the facet is refined
     */
    addHierarchicalFacetRefinement: function (facet, path) {
      if (this.isHierarchicalFacetRefined(facet)) {
        throw new Error(facet + ' is already refined.');
      }
      if (!this.isHierarchicalFacet(facet)) {
        throw new Error(
          facet +
            ' is not defined in the hierarchicalFacets attribute of the helper configuration.'
        );
      }
      var mod = {};
      mod[facet] = [path];
      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure(
          {},
          mod,
          this.hierarchicalFacetsRefinements
        ),
      });
    },

    /**
     * Removes the refinement set on a hierarchical facet.
     * @param {string} facet the facet name
     * @return {SearchParameter} the new state
     * @throws Error if the facet is not defined or if the facet is not refined
     */
    removeHierarchicalFacetRefinement: function (facet) {
      if (!this.isHierarchicalFacetRefined(facet)) {
        return this;
      }
      var mod = {};
      mod[facet] = [];
      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure(
          {},
          mod,
          this.hierarchicalFacetsRefinements
        ),
      });
    },
    /**
     * Switch the tag refinement
     * @method
     * @param {string} tag the tag to remove or add
     * @return {SearchParameters} new instance
     */
    toggleTagRefinement: function toggleTagRefinement(tag) {
      if (this.isTagRefined(tag)) {
        return this.removeTagRefinement(tag);
      }

      return this.addTagRefinement(tag);
    },
    /**
     * Test if the facet name is from one of the disjunctive facets
     * @method
     * @param {string} facet facet name to test
     * @return {boolean} true if facet is a disjunctive facet
     */
    isDisjunctiveFacet: function (facet) {
      return this.disjunctiveFacets.indexOf(facet) > -1;
    },
    /**
     * Test if the facet name is from one of the hierarchical facets
     * @method
     * @param {string} facetName facet name to test
     * @return {boolean} true if facetName is a hierarchical facet
     */
    isHierarchicalFacet: function (facetName) {
      return this.getHierarchicalFacetByName(facetName) !== undefined;
    },
    /**
     * Test if the facet name is from one of the conjunctive/normal facets
     * @method
     * @param {string} facet facet name to test
     * @return {boolean} true if facet is a conjunctive facet
     */
    isConjunctiveFacet: function (facet) {
      return this.facets.indexOf(facet) > -1;
    },
    /**
     * Returns true if the facet is refined, either for a specific value or in
     * general.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value, optional value. If passed will test that this value
     * is filtering the given facet.
     * @return {boolean} returns true if refined
     */
    isFacetRefined: function isFacetRefined(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        return false;
      }
      return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },
    /**
     * Returns true if the facet contains exclusions or if a specific value is
     * excluded.
     *
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} [value] optional value. If passed will test that this value
     * is filtering the given facet.
     * @return {boolean} returns true if refined
     */
    isExcludeRefined: function isExcludeRefined(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        return false;
      }
      return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },
    /**
     * Returns true if the facet contains a refinement, or if a value passed is a
     * refinement for the facet.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value optional, will test if the value is used for refinement
     * if there is one, otherwise will test if the facet contains any refinement
     * @return {boolean} true if the facet is refined
     */
    isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
      if (!this.isDisjunctiveFacet(facet)) {
        return false;
      }
      return RefinementList.isRefined(
        this.disjunctiveFacetsRefinements,
        facet,
        value
      );
    },
    /**
     * Returns true if the facet contains a refinement, or if a value passed is a
     * refinement for the facet.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value optional, will test if the value is used for refinement
     * if there is one, otherwise will test if the facet contains any refinement
     * @return {boolean} true if the facet is refined
     */
    isHierarchicalFacetRefined: function isHierarchicalFacetRefined(
      facet,
      value
    ) {
      if (!this.isHierarchicalFacet(facet)) {
        return false;
      }

      var refinements = this.getHierarchicalRefinement(facet);

      if (!value) {
        return refinements.length > 0;
      }

      return refinements.indexOf(value) !== -1;
    },
    /**
     * Test if the triple (attribute, operator, value) is already refined.
     * If only the attribute and the operator are provided, it tests if the
     * contains any refinement value.
     * @method
     * @param {string} attribute attribute for which the refinement is applied
     * @param {string} [operator] operator of the refinement
     * @param {string} [value] value of the refinement
     * @return {boolean} true if it is refined
     */
    isNumericRefined: function isNumericRefined(attribute, operator, value) {
      if (value === undefined && operator === undefined) {
        return Boolean(this.numericRefinements[attribute]);
      }

      var isOperatorDefined =
        this.numericRefinements[attribute] &&
        this.numericRefinements[attribute][operator] !== undefined;

      if (value === undefined || !isOperatorDefined) {
        return isOperatorDefined;
      }

      var parsedValue = valToNumber_1(value);
      var isAttributeValueDefined =
        findArray(this.numericRefinements[attribute][operator], parsedValue) !==
        undefined;

      return isOperatorDefined && isAttributeValueDefined;
    },
    /**
     * Returns true if the tag refined, false otherwise
     * @method
     * @param {string} tag the tag to check
     * @return {boolean} true if tag is refined
     */
    isTagRefined: function isTagRefined(tag) {
      return this.tagRefinements.indexOf(tag) !== -1;
    },
    /**
     * Returns the list of all disjunctive facets refined
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {string[]} returns the list of refinements
     */
    getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
      // eslint-disable-next-line consistent-this
      var self = this;

      // attributes used for numeric filter can also be disjunctive
      var disjunctiveNumericRefinedFacets = intersection_1(
        Object.keys(this.numericRefinements).filter(function (facet) {
          return Object.keys(self.numericRefinements[facet]).length > 0;
        }),
        this.disjunctiveFacets
      );

      return Object.keys(this.disjunctiveFacetsRefinements)
        .filter(function (facet) {
          return self.disjunctiveFacetsRefinements[facet].length > 0;
        })
        .concat(disjunctiveNumericRefinedFacets)
        .concat(this.getRefinedHierarchicalFacets())
        .sort();
    },
    /**
     * Returns the list of all disjunctive facets refined
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {string[]} returns the list of refinements
     */
    getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
      // eslint-disable-next-line consistent-this
      var self = this;
      return intersection_1(
        // enforce the order between the two arrays,
        // so that refinement name index === hierarchical facet index
        this.hierarchicalFacets.map(function (facet) {
          return facet.name;
        }),
        Object.keys(this.hierarchicalFacetsRefinements).filter(function (facet) {
          return self.hierarchicalFacetsRefinements[facet].length > 0;
        })
      ).sort();
    },
    /**
     * Returned the list of all disjunctive facets not refined
     * @method
     * @return {string[]} returns the list of facets that are not refined
     */
    getUnrefinedDisjunctiveFacets: function () {
      var refinedFacets = this.getRefinedDisjunctiveFacets();

      return this.disjunctiveFacets.filter(function (f) {
        return refinedFacets.indexOf(f) === -1;
      });
    },

    managedParameters: [
      'index',

      'facets',
      'disjunctiveFacets',
      'facetsRefinements',
      'hierarchicalFacets',
      'facetsExcludes',

      'disjunctiveFacetsRefinements',
      'numericRefinements',
      'tagRefinements',
      'hierarchicalFacetsRefinements',
    ],

    getQueryParams: function getQueryParams() {
      var managedParameters = this.managedParameters;

      var queryParams = {};

      // eslint-disable-next-line consistent-this
      var self = this;
      Object.keys(this).forEach(function (paramName) {
        var paramValue = self[paramName];
        if (
          managedParameters.indexOf(paramName) === -1 &&
          paramValue !== undefined
        ) {
          queryParams[paramName] = paramValue;
        }
      });

      return queryParams;
    },
    /**
     * Let the user set a specific value for a given parameter. Will return the
     * same instance if the parameter is invalid or if the value is the same as the
     * previous one.
     * @method
     * @param {string} parameter the parameter name
     * @param {any} value the value to be set, must be compliant with the definition
     * of the attribute on the object
     * @return {SearchParameters} the updated state
     */
    setQueryParameter: function setParameter(parameter, value) {
      if (this[parameter] === value) return this;

      var modification = {};

      modification[parameter] = value;

      return this.setQueryParameters(modification);
    },
    /**
     * Let the user set any of the parameters with a plain object.
     * @method
     * @param {object} params all the keys and the values to be updated
     * @return {SearchParameters} a new updated instance
     */
    setQueryParameters: function setQueryParameters(params) {
      if (!params) return this;

      var error = SearchParameters.validate(this, params);

      if (error) {
        throw error;
      }

      // eslint-disable-next-line consistent-this
      var self = this;
      var nextWithNumbers = SearchParameters._parseNumbers(params);
      var previousPlainObject = Object.keys(this).reduce(function (acc, key) {
        acc[key] = self[key];
        return acc;
      }, {});

      var nextPlainObject = Object.keys(nextWithNumbers).reduce(function (
        previous,
        key
      ) {
        var isPreviousValueDefined = previous[key] !== undefined;
        var isNextValueDefined = nextWithNumbers[key] !== undefined;

        if (isPreviousValueDefined && !isNextValueDefined) {
          return omit$1(previous, [key]);
        }

        if (isNextValueDefined) {
          previous[key] = nextWithNumbers[key];
        }

        return previous;
      },
      previousPlainObject);

      return new this.constructor(nextPlainObject);
    },

    /**
     * Returns a new instance with the page reset. Two scenarios possible:
     * the page is omitted -> return the given instance
     * the page is set -> return a new instance with a page of 0
     * @return {SearchParameters} a new updated instance
     */
    resetPage: function () {
      if (this.page === undefined) {
        return this;
      }

      return this.setPage(0);
    },

    /**
     * Helper function to get the hierarchicalFacet separator or the default one (`>`)
     * @param  {object} hierarchicalFacet the hierarchicalFacet object
     * @return {string} returns the hierarchicalFacet.separator or `>` as default
     */
    _getHierarchicalFacetSortBy: function (hierarchicalFacet) {
      return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
    },

    /**
     * Helper function to get the hierarchicalFacet separator or the default one (`>`)
     * @private
     * @param  {object} hierarchicalFacet the hierarchicalFacet object
     * @return {string} returns the hierarchicalFacet.separator or `>` as default
     */
    _getHierarchicalFacetSeparator: function (hierarchicalFacet) {
      return hierarchicalFacet.separator || ' > ';
    },

    /**
     * Helper function to get the hierarchicalFacet prefix path or null
     * @private
     * @param  {object} hierarchicalFacet the hierarchicalFacet object
     * @return {string} returns the hierarchicalFacet.rootPath or null as default
     */
    _getHierarchicalRootPath: function (hierarchicalFacet) {
      return hierarchicalFacet.rootPath || null;
    },

    /**
     * Helper function to check if we show the parent level of the hierarchicalFacet
     * @private
     * @param  {object} hierarchicalFacet the hierarchicalFacet object
     * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
     */
    _getHierarchicalShowParentLevel: function (hierarchicalFacet) {
      if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
        return hierarchicalFacet.showParentLevel;
      }
      return true;
    },

    /**
     * Helper function to get the hierarchicalFacet by it's name
     * @param  {string} hierarchicalFacetName the hierarchicalFacet name
     * @return {object} a hierarchicalFacet
     */
    getHierarchicalFacetByName: function (hierarchicalFacetName) {
      return find$1(this.hierarchicalFacets, function (f) {
        return f.name === hierarchicalFacetName;
      });
    },

    /**
     * Get the current breadcrumb for a hierarchical facet, as an array
     * @param  {string} facetName Hierarchical facet name
     * @return {array.<string>} the path as an array of string
     */
    getHierarchicalFacetBreadcrumb: function (facetName) {
      if (!this.isHierarchicalFacet(facetName)) {
        return [];
      }

      var refinement = this.getHierarchicalRefinement(facetName)[0];
      if (!refinement) return [];

      var separator = this._getHierarchicalFacetSeparator(
        this.getHierarchicalFacetByName(facetName)
      );
      var path = refinement.split(separator);
      return path.map(function (part) {
        return part.trim();
      });
    },

    toString: function () {
      return JSON.stringify(this, null, 2);
    },
  };

  /**
   * Callback used for clearRefinement method
   * @callback SearchParameters.clearCallback
   * @param {OperatorList|FacetList} value the value of the filter
   * @param {string} key the current attribute name
   * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
   * depending on the type of facet
   * @return {boolean} `true` if the element should be removed. `false` otherwise.
   */
  var SearchParameters_1 = SearchParameters;

  var compact = function compact(array) {
    if (!Array.isArray(array)) {
      return [];
    }

    return array.filter(Boolean);
  };

  // @MAJOR can be replaced by native Array#findIndex when we change support
  var findIndex = function find(array, comparator) {
    if (!Array.isArray(array)) {
      return -1;
    }

    for (var i = 0; i < array.length; i++) {
      if (comparator(array[i])) {
        return i;
      }
    }
    return -1;
  };

  /**
   * Transform sort format from user friendly notation to lodash format
   * @param {string[]} sortBy array of predicate of the form "attribute:order"
   * @param {string[]} [defaults] array of predicate of the form "attribute:order"
   * @return {array.<string[]>} array containing 2 elements : attributes, orders
   */
  var formatSort = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function (sort) {
      return sort.split(':');
    });

    return sortBy.reduce(
      function preparePredicate(out, sort) {
        var sortInstruction = sort.split(':');

        var matchingDefault = find$1(
          defaultInstructions,
          function (defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
          }
        );

        if (sortInstruction.length > 1 || !matchingDefault) {
          out[0].push(sortInstruction[0]);
          out[1].push(sortInstruction[1]);
          return out;
        }

        out[0].push(matchingDefault[0]);
        out[1].push(matchingDefault[1]);
        return out;
      },
      [[], []]
    );
  };

  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined;
      var valIsNull = value === null;

      var othIsDefined = other !== undefined;
      var othIsNull = other === null;

      if (
        (!othIsNull && value > other) ||
        (valIsNull && othIsDefined) ||
        !valIsDefined
      ) {
        return 1;
      }
      if (
        (!valIsNull && value < other) ||
        (othIsNull && valIsDefined) ||
        !othIsDefined
      ) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * @param {Array<object>} collection object with keys in attributes
   * @param {Array<string>} iteratees attributes
   * @param {Array<string>} orders asc | desc
   * @return {Array<object>} sorted collection
   */
  function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) {
      return [];
    }

    if (!Array.isArray(orders)) {
      orders = [];
    }

    var result = collection.map(function (value, index) {
      return {
        criteria: iteratees.map(function (iteratee) {
          return value[iteratee];
        }),
        index: index,
        value: value,
      };
    });

    result.sort(function comparer(object, other) {
      var index = -1;

      while (++index < object.criteria.length) {
        var res = compareAscending(object.criteria[index], other.criteria[index]);
        if (res) {
          if (index >= orders.length) {
            return res;
          }
          if (orders[index] === 'desc') {
            return -res;
          }
          return res;
        }
      }

      // This ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    });

    return result.map(function (res) {
      return res.value;
    });
  }

  var orderBy_1 = orderBy;

  var generateHierarchicalTree_1 = generateTrees;





  var escapeFacetValue$1 = escapeFacetValue_1.escapeFacetValue;
  var unescapeFacetValue$2 = escapeFacetValue_1.unescapeFacetValue;

  function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
      var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
      var hierarchicalFacetRefinement =
        (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&
          state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||
        '';
      var hierarchicalSeparator =
        state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var hierarchicalRootPath =
        state._getHierarchicalRootPath(hierarchicalFacet);
      var hierarchicalShowParentLevel =
        state._getHierarchicalShowParentLevel(hierarchicalFacet);
      var sortBy = formatSort(
        state._getHierarchicalFacetSortBy(hierarchicalFacet)
      );

      var rootExhaustive = hierarchicalFacetResult.every(function (facetResult) {
        return facetResult.exhaustive;
      });

      var generateTreeFn = generateHierarchicalTree(
        sortBy,
        hierarchicalSeparator,
        hierarchicalRootPath,
        hierarchicalShowParentLevel,
        hierarchicalFacetRefinement
      );

      var results = hierarchicalFacetResult;

      if (hierarchicalRootPath) {
        results = hierarchicalFacetResult.slice(
          hierarchicalRootPath.split(hierarchicalSeparator).length
        );
      }

      return results.reduce(generateTreeFn, {
        name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
        count: null, // root level, no count
        isRefined: true, // root level, always refined
        path: null, // root level, no path
        escapedValue: null,
        exhaustive: rootExhaustive,
        data: null,
      });
    };
  }

  function generateHierarchicalTree(
    sortBy,
    hierarchicalSeparator,
    hierarchicalRootPath,
    hierarchicalShowParentLevel,
    currentRefinement
  ) {
    return function generateTree(
      hierarchicalTree,
      hierarchicalFacetResult,
      currentHierarchicalLevel
    ) {
      var parent = hierarchicalTree;

      if (currentHierarchicalLevel > 0) {
        var level = 0;

        parent = hierarchicalTree;

        while (level < currentHierarchicalLevel) {
          /**
           * @type {object[]]} hierarchical data
           */
          var data = parent && Array.isArray(parent.data) ? parent.data : [];
          parent = find$1(data, function (subtree) {
            return subtree.isRefined;
          });
          level++;
        }
      }

      // we found a refined parent, let's add current level data under it
      if (parent) {
        // filter values in case an object has multiple categories:
        //   {
        //     categories: {
        //       level0: ['beers', 'bières'],
        //       level1: ['beers > IPA', 'bières > Belges']
        //     }
        //   }
        //
        // If parent refinement is `beers`, then we do not want to have `bières > Belges`
        // showing up

        var picked = Object.keys(hierarchicalFacetResult.data)
          .map(function (facetValue) {
            return [facetValue, hierarchicalFacetResult.data[facetValue]];
          })
          .filter(function (tuple) {
            var facetValue = tuple[0];
            return onlyMatchingTree(
              facetValue,
              parent.path || hierarchicalRootPath,
              currentRefinement,
              hierarchicalSeparator,
              hierarchicalRootPath,
              hierarchicalShowParentLevel
            );
          });

        parent.data = orderBy_1(
          picked.map(function (tuple) {
            var facetValue = tuple[0];
            var facetCount = tuple[1];

            return format(
              facetCount,
              facetValue,
              hierarchicalSeparator,
              unescapeFacetValue$2(currentRefinement),
              hierarchicalFacetResult.exhaustive
            );
          }),
          sortBy[0],
          sortBy[1]
        );
      }

      return hierarchicalTree;
    };
  }

  // eslint-disable-next-line max-params
  function onlyMatchingTree(
    facetValue,
    parentPath,
    currentRefinement,
    hierarchicalSeparator,
    hierarchicalRootPath,
    hierarchicalShowParentLevel
  ) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (
      hierarchicalRootPath &&
      (facetValue.indexOf(hierarchicalRootPath) !== 0 ||
        hierarchicalRootPath === facetValue)
    ) {
      return false;
    }

    // we always want root levels (only when there is no prefix path)
    return (
      (!hierarchicalRootPath &&
        facetValue.indexOf(hierarchicalSeparator) === -1) ||
      // if there is a rootPath, being root level mean 1 level under rootPath
      (hierarchicalRootPath &&
        facetValue.split(hierarchicalSeparator).length -
          hierarchicalRootPath.split(hierarchicalSeparator).length ===
          1) ||
      // if current refinement is a root level and current facetValue is a root level,
      // keep the facetValue
      (facetValue.indexOf(hierarchicalSeparator) === -1 &&
        currentRefinement.indexOf(hierarchicalSeparator) === -1) ||
      // currentRefinement is a child of the facet value
      currentRefinement.indexOf(facetValue) === 0 ||
      // facetValue is a child of the current parent, add it
      (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&
        (hierarchicalShowParentLevel ||
          facetValue.indexOf(currentRefinement) === 0))
    );
  }

  function format(
    facetCount,
    facetValue,
    hierarchicalSeparator,
    currentRefinement,
    exhaustive
  ) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
      name: parts[parts.length - 1].trim(),
      path: facetValue,
      escapedValue: escapeFacetValue$1(facetValue),
      count: facetCount,
      isRefined:
        currentRefinement === facetValue ||
        currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
      exhaustive: exhaustive,
      data: null,
    };
  }

  var escapeFacetValue$2 = escapeFacetValue_1.escapeFacetValue;
  var unescapeFacetValue$3 = escapeFacetValue_1.unescapeFacetValue;



  /**
   * @typedef SearchResults.Facet
   * @type {object}
   * @property {string} name name of the attribute in the record
   * @property {object} data the faceting data: value, number of entries
   * @property {object} stats undefined unless facet_stats is retrieved from algolia
   */

  /**
   * @typedef SearchResults.HierarchicalFacet
   * @type {object}
   * @property {string} name name of the current value given the hierarchical level, trimmed.
   * If root node, you get the facet name
   * @property {number} count number of objects matching this hierarchical value
   * @property {string} path the current hierarchical value full path
   * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
   * @property {HierarchicalFacet[]} data sub values for the current level
   */

  /**
   * @typedef SearchResults.FacetValue
   * @type {object}
   * @property {string} name the facet value itself
   * @property {number} count times this facet appears in the results
   * @property {boolean} isRefined is the facet currently selected
   * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
   */

  /**
   * @typedef Refinement
   * @type {object}
   * @property {string} type the type of filter used:
   * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
   * @property {string} attributeName name of the attribute used for filtering
   * @property {string} name the value of the filter
   * @property {number} numericValue the value as a number. Only for numeric filters.
   * @property {string} operator the operator used. Only for numeric filters.
   * @property {number} count the number of computed hits for this filter. Only on facets.
   * @property {boolean} exhaustive if the count is exhaustive
   */

  /**
   * Turn an array of attributes in an object of attributes with their position in the array as value
   * @param {string[]} attributes the list of attributes in the record
   * @return {object} the list of attributes indexed by attribute name
   */
  function getIndices(attributes) {
    var indices = {};

    attributes.forEach(function (val, idx) {
      indices[val] = idx;
    });

    return indices;
  }

  function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) {
      dest.stats = facetStats[key];
    }
  }

  /**
   * @typedef {Object} HierarchicalFacet
   * @property {string} name
   * @property {string[]} attributes
   */

  /**
   * @param {HierarchicalFacet[]} hierarchicalFacets All hierarchical facets
   * @param {string} hierarchicalAttributeName The name of the hierarchical attribute
   * @return {HierarchicalFacet} The hierarchical facet matching the attribute name
   */
  function findMatchingHierarchicalFacetFromAttributeName(
    hierarchicalFacets,
    hierarchicalAttributeName
  ) {
    return find$1(
      hierarchicalFacets,
      function facetKeyMatchesAttribute(hierarchicalFacet) {
        var facetNames = hierarchicalFacet.attributes || [];
        return facetNames.indexOf(hierarchicalAttributeName) > -1;
      }
    );
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * Constructor for SearchResults
   * @class
   * @classdesc SearchResults contains the results of a query to Algolia using the
   * {@link AlgoliaSearchHelper}.
   * @param {SearchParameters} state state that led to the response
   * @param {array.<object>} results the results from algolia client
   * @example <caption>SearchResults of the first query in
   * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
  {
     "hitsPerPage": 10,
     "processingTimeMS": 2,
     "facets": [
        {
           "name": "type",
           "data": {
              "HardGood": 6627,
              "BlackTie": 550,
              "Music": 665,
              "Software": 131,
              "Game": 456,
              "Movie": 1571
           },
           "exhaustive": false
        },
        {
           "exhaustive": false,
           "data": {
              "Free shipping": 5507
           },
           "name": "shipping"
        }
    ],
     "hits": [
        {
           "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
           "_highlightResult": {
              "shortDescription": {
                 "matchLevel": "none",
                 "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
                 "matchedWords": []
              },
              "category": {
                 "matchLevel": "none",
                 "value": "Computer Security Software",
                 "matchedWords": []
              },
              "manufacturer": {
                 "matchedWords": [],
                 "value": "Webroot",
                 "matchLevel": "none"
              },
              "name": {
                 "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
                 "matchedWords": [],
                 "matchLevel": "none"
              }
           },
           "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
           "shipping": "Free shipping",
           "bestSellingRank": 4,
           "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
           "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
           "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
           "category": "Computer Security Software",
           "salePrice_range": "1 - 50",
           "objectID": "1688832",
           "type": "Software",
           "customerReviewCount": 5980,
           "salePrice": 49.99,
           "manufacturer": "Webroot"
        },
        ....
    ],
     "nbHits": 10000,
     "disjunctiveFacets": [
        {
           "exhaustive": false,
           "data": {
              "5": 183,
              "12": 112,
              "7": 149,
              ...
           },
           "name": "customerReviewCount",
           "stats": {
              "max": 7461,
              "avg": 157.939,
              "min": 1
           }
        },
        {
           "data": {
              "Printer Ink": 142,
              "Wireless Speakers": 60,
              "Point & Shoot Cameras": 48,
              ...
           },
           "name": "category",
           "exhaustive": false
        },
        {
           "exhaustive": false,
           "data": {
              "> 5000": 2,
              "1 - 50": 6524,
              "501 - 2000": 566,
              "201 - 500": 1501,
              "101 - 200": 1360,
              "2001 - 5000": 47
           },
           "name": "salePrice_range"
        },
        {
           "data": {
              "Dynex™": 202,
              "Insignia™": 230,
              "PNY": 72,
              ...
           },
           "name": "manufacturer",
           "exhaustive": false
        }
    ],
     "query": "",
     "nbPages": 100,
     "page": 0,
     "index": "bestbuy"
  }
   **/
  function SearchResults(state, results, options) {
    var mainSubResponse = results[0];

    this._rawResults = results;

    // eslint-disable-next-line consistent-this
    var self = this;

    // https://www.algolia.com/doc/api-reference/api-methods/search/#response
    Object.keys(mainSubResponse).forEach(function (key) {
      self[key] = mainSubResponse[key];
    });

    // Make every key of the result options reachable from the instance
    Object.keys(options || {}).forEach(function (key) {
      self[key] = options[key];
    });

    /**
     * query used to generate the results
     * @name query
     * @member {string}
     * @memberof SearchResults
     * @instance
     */
    /**
     * The query as parsed by the engine given all the rules.
     * @name parsedQuery
     * @member {string}
     * @memberof SearchResults
     * @instance
     */
    /**
     * all the records that match the search parameters. Each record is
     * augmented with a new attribute `_highlightResult`
     * which is an object keyed by attribute and with the following properties:
     * - `value` : the value of the facet highlighted (html)
     * - `matchLevel`: `full`, `partial` or `none`, depending on how the query terms match
     * @name hits
     * @member {object[]}
     * @memberof SearchResults
     * @instance
     */
    /**
     * index where the results come from
     * @name index
     * @member {string}
     * @memberof SearchResults
     * @instance
     */
    /**
     * number of hits per page requested
     * @name hitsPerPage
     * @member {number}
     * @memberof SearchResults
     * @instance
     */
    /**
     * total number of hits of this query on the index
     * @name nbHits
     * @member {number}
     * @memberof SearchResults
     * @instance
     */
    /**
     * total number of pages with respect to the number of hits per page and the total number of hits
     * @name nbPages
     * @member {number}
     * @memberof SearchResults
     * @instance
     */
    /**
     * current page
     * @name page
     * @member {number}
     * @memberof SearchResults
     * @instance
     */
    /**
     * The position if the position was guessed by IP.
     * @name aroundLatLng
     * @member {string}
     * @memberof SearchResults
     * @instance
     * @example "48.8637,2.3615",
     */
    /**
     * The radius computed by Algolia.
     * @name automaticRadius
     * @member {string}
     * @memberof SearchResults
     * @instance
     * @example "126792922",
     */
    /**
     * String identifying the server used to serve this request.
     *
     * getRankingInfo needs to be set to `true` for this to be returned
     *
     * @name serverUsed
     * @member {string}
     * @memberof SearchResults
     * @instance
     * @example "c7-use-2.algolia.net",
     */
    /**
     * Boolean that indicates if the computation of the counts did time out.
     * @deprecated
     * @name timeoutCounts
     * @member {boolean}
     * @memberof SearchResults
     * @instance
     */
    /**
     * Boolean that indicates if the computation of the hits did time out.
     * @deprecated
     * @name timeoutHits
     * @member {boolean}
     * @memberof SearchResults
     * @instance
     */
    /**
     * True if the counts of the facets is exhaustive
     * @name exhaustiveFacetsCount
     * @member {boolean}
     * @memberof SearchResults
     * @instance
     */
    /**
     * True if the number of hits is exhaustive
     * @name exhaustiveNbHits
     * @member {boolean}
     * @memberof SearchResults
     * @instance
     */
    /**
     * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
     * @name userData
     * @member {object[]}
     * @memberof SearchResults
     * @instance
     */
    /**
     * queryID is the unique identifier of the query used to generate the current search results.
     * This value is only available if the `clickAnalytics` search parameter is set to `true`.
     * @name queryID
     * @member {string}
     * @memberof SearchResults
     * @instance
     */

    /**
     * sum of the processing time of all the queries
     * @name processingTimeMS
     * @member {number}
     * @memberof SearchResults
     * @instance
     */
    this.processingTimeMS = results.reduce(function (sum, result) {
      return result.processingTimeMS === undefined
        ? sum
        : sum + result.processingTimeMS;
    }, 0);

    /**
     * disjunctive facets results
     * @member {SearchResults.Facet[]}
     */
    this.disjunctiveFacets = [];
    /**
     * disjunctive facets results
     * @member {SearchResults.HierarchicalFacet[]}
     */
    this.hierarchicalFacets = state.hierarchicalFacets.map(
      function initFutureTree() {
        return [];
      }
    );
    /**
     * other facets results
     * @member {SearchResults.Facet[]}
     */
    this.facets = [];

    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();

    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;

    // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.

    var mainFacets = mainSubResponse.facets || {};

    Object.keys(mainFacets).forEach(function (facetKey) {
      var facetValueObject = mainFacets[facetKey];

      var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(
        state.hierarchicalFacets,
        facetKey
      );

      if (hierarchicalFacet) {
        // Place the hierarchicalFacet data at the correct index depending on
        // the attributes order that was defined at the helper initialization
        var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
        var idxAttributeName = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        self.hierarchicalFacets[idxAttributeName][facetIndex] = {
          attribute: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount,
        };
      } else {
        var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
        var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
        var position;

        if (isFacetDisjunctive) {
          position = disjunctiveFacetsIndices[facetKey];
          self.disjunctiveFacets[position] = {
            name: facetKey,
            data: facetValueObject,
            exhaustive: mainSubResponse.exhaustiveFacetsCount,
          };
          assignFacetStats(
            self.disjunctiveFacets[position],
            mainSubResponse.facets_stats,
            facetKey
          );
        }
        if (isFacetConjunctive) {
          position = facetsIndices[facetKey];
          self.facets[position] = {
            name: facetKey,
            data: facetValueObject,
            exhaustive: mainSubResponse.exhaustiveFacetsCount,
          };
          assignFacetStats(
            self.facets[position],
            mainSubResponse.facets_stats,
            facetKey
          );
        }
      }
    });

    // Make sure we do not keep holes within the hierarchical facets
    this.hierarchicalFacets = compact(this.hierarchicalFacets);

    // aggregate the refined disjunctive facets
    disjunctiveFacets.forEach(function (disjunctiveFacet) {
      var result = results[nextDisjunctiveResult];
      var facets = result && result.facets ? result.facets : {};
      var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);

      // There should be only item in facets.
      Object.keys(facets).forEach(function (dfacet) {
        var facetResults = facets[dfacet];

        var position;

        if (hierarchicalFacet) {
          position = findIndex(state.hierarchicalFacets, function (f) {
            return f.name === hierarchicalFacet.name;
          });
          var attributeIndex = findIndex(
            self.hierarchicalFacets[position],
            function (f) {
              return f.attribute === dfacet;
            }
          );

          // previous refinements and no results so not able to find it
          if (attributeIndex === -1) {
            return;
          }

          self.hierarchicalFacets[position][attributeIndex].data = merge_1(
            {},
            self.hierarchicalFacets[position][attributeIndex].data,
            facetResults
          );
        } else {
          position = disjunctiveFacetsIndices[dfacet];

          var dataFromMainRequest =
            (mainSubResponse.facets && mainSubResponse.facets[dfacet]) || {};

          self.disjunctiveFacets[position] = {
            name: dfacet,
            data: defaultsPure({}, facetResults, dataFromMainRequest),
            exhaustive: result.exhaustiveFacetsCount,
          };
          assignFacetStats(
            self.disjunctiveFacets[position],
            result.facets_stats,
            dfacet
          );

          if (state.disjunctiveFacetsRefinements[dfacet]) {
            state.disjunctiveFacetsRefinements[dfacet].forEach(function (
              refinementValue
            ) {
              // add the disjunctive refinements if it is no more retrieved
              if (
                !self.disjunctiveFacets[position].data[refinementValue] &&
                state.disjunctiveFacetsRefinements[dfacet].indexOf(
                  unescapeFacetValue$3(refinementValue)
                ) > -1
              ) {
                self.disjunctiveFacets[position].data[refinementValue] = 0;
              }
            });
          }
        }
      });
      nextDisjunctiveResult++;
    });

    // if we have some parent level values for hierarchical facets, merge them
    state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      // if we are already at a root refinement (or no refinement at all), there is no
      // root level values request
      if (
        currentRefinement.length === 0 ||
        currentRefinement[0].split(separator).length < 2
      ) {
        return;
      }

      results.slice(nextDisjunctiveResult).forEach(function (result) {
        var facets = result && result.facets ? result.facets : {};

        Object.keys(facets).forEach(function (dfacet) {
          var facetResults = facets[dfacet];
          var position = findIndex(state.hierarchicalFacets, function (f) {
            return f.name === hierarchicalFacet.name;
          });
          var attributeIndex = findIndex(
            self.hierarchicalFacets[position],
            function (f) {
              return f.attribute === dfacet;
            }
          );

          // previous refinements and no results so not able to find it
          if (attributeIndex === -1) {
            return;
          }

          // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
          // then the disjunctive values will be `beers` (count: 100),
          // but we do not want to display
          //   | beers (100)
          //     > IPA (5)
          // We want
          //   | beers (5)
          //     > IPA (5)
          var defaultData = {};

          if (currentRefinement.length > 0) {
            var root = currentRefinement[0].split(separator)[0];
            defaultData[root] =
              self.hierarchicalFacets[position][attributeIndex].data[root];
          }

          self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(
            defaultData,
            facetResults,
            self.hierarchicalFacets[position][attributeIndex].data
          );
        });

        nextDisjunctiveResult++;
      });
    });

    // add the excludes
    Object.keys(state.facetsExcludes).forEach(function (facetName) {
      var excludes = state.facetsExcludes[facetName];
      var position = facetsIndices[facetName];

      self.facets[position] = {
        name: facetName,
        data: mainFacets[facetName],
        exhaustive: mainSubResponse.exhaustiveFacetsCount,
      };
      excludes.forEach(function (facetValue) {
        self.facets[position] = self.facets[position] || { name: facetName };
        self.facets[position].data = self.facets[position].data || {};
        self.facets[position].data[facetValue] = 0;
      });
    });

    /**
     * @type {Array}
     */
    this.hierarchicalFacets = this.hierarchicalFacets.map(
      generateHierarchicalTree_1(state)
    );

    /**
     * @type {Array}
     */
    this.facets = compact(this.facets);
    /**
     * @type {Array}
     */
    this.disjunctiveFacets = compact(this.disjunctiveFacets);

    this._state = state;
  }

  /**
   * Get a facet object with its name
   * @deprecated
   * @param {string} name name of the faceted attribute
   * @return {SearchResults.Facet} the facet object
   */
  SearchResults.prototype.getFacetByName = function (name) {
    function predicate(facet) {
      return facet.name === name;
    }

    return (
      find$1(this.facets, predicate) ||
      find$1(this.disjunctiveFacets, predicate) ||
      find$1(this.hierarchicalFacets, predicate)
    );
  };

  /**
   * Get the facet values of a specified attribute from a SearchResults object.
   * @private
   * @param {SearchResults} results the search results to search in
   * @param {string} attribute name of the faceted attribute to search for
   * @return {array|object} facet values. For the hierarchical facets it is an object.
   */
  function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
      return facet.name === attribute;
    }

    if (results._state.isConjunctiveFacet(attribute)) {
      var facet = find$1(results.facets, predicate);
      if (!facet) return [];

      return Object.keys(facet.data).map(function (name) {
        var value = escapeFacetValue$2(name);
        return {
          name: name,
          escapedValue: value,
          count: facet.data[name],
          isRefined: results._state.isFacetRefined(attribute, value),
          isExcluded: results._state.isExcludeRefined(attribute, name),
        };
      });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
      var disjunctiveFacet = find$1(results.disjunctiveFacets, predicate);
      if (!disjunctiveFacet) return [];

      return Object.keys(disjunctiveFacet.data).map(function (name) {
        var value = escapeFacetValue$2(name);
        return {
          name: name,
          escapedValue: value,
          count: disjunctiveFacet.data[name],
          isRefined: results._state.isDisjunctiveFacetRefined(attribute, value),
        };
      });
    } else if (results._state.isHierarchicalFacet(attribute)) {
      var hierarchicalFacetValues = find$1(results.hierarchicalFacets, predicate);
      if (!hierarchicalFacetValues) return hierarchicalFacetValues;

      var hierarchicalFacet =
        results._state.getHierarchicalFacetByName(attribute);
      var separator =
        results._state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var currentRefinement = unescapeFacetValue$3(
        results._state.getHierarchicalRefinement(attribute)[0] || ''
      );

      if (currentRefinement.indexOf(hierarchicalFacet.rootPath) === 0) {
        currentRefinement = currentRefinement.replace(
          hierarchicalFacet.rootPath + separator,
          ''
        );
      }

      var currentRefinementSplit = currentRefinement.split(separator);
      currentRefinementSplit.unshift(attribute);

      setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);

      return hierarchicalFacetValues;
    }

    return undefined;
  }

  /**
   * Set the isRefined of a hierarchical facet result based on the current state.
   * @param {SearchResults.HierarchicalFacet} item Hierarchical facet to fix
   * @param {string[]} currentRefinement array of parts of the current hierarchical refinement
   * @param {number} depth recursion depth in the currentRefinement
   * @return {undefined} function mutates the item
   */
  function setIsRefined(item, currentRefinement, depth) {
    item.isRefined = item.name === currentRefinement[depth];
    if (item.data) {
      item.data.forEach(function (child) {
        setIsRefined(child, currentRefinement, depth + 1);
      });
    }
  }

  /**
   * Sort nodes of a hierarchical or disjunctive facet results
   * @private
   * @param {function} sortFn sort function to apply
   * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
   * @param {string[]} names attribute names
   * @param {number} [level=0] current index in the names array
   * @return {HierarchicalFacet|Array} sorted node
   */
  function recSort(sortFn, node, names, level) {
    level = level || 0;

    if (Array.isArray(node)) {
      return sortFn(node, names[level]);
    }

    if (!node.data || node.data.length === 0) {
      return node;
    }

    var children = node.data.map(function (childNode) {
      return recSort(sortFn, childNode, names, level + 1);
    });
    var sortedChildren = sortFn(children, names[level]);
    var newNode = defaultsPure({ data: sortedChildren }, node);
    return newNode;
  }

  SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

  function vanillaSortFn(order, data) {
    return data.sort(order);
  }

  /**
   * @typedef FacetOrdering
   * @type {Object}
   * @property {string[]} [order]
   * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
   */

  /**
   * Sorts facet arrays via their facet ordering
   * @param {Array} facetValues the values
   * @param {FacetOrdering} facetOrdering the ordering
   * @returns {Array} the sorted facet values
   */
  function sortViaFacetOrdering(facetValues, facetOrdering) {
    var orderedFacets = [];
    var remainingFacets = [];

    var order = facetOrdering.order || [];
    /**
     * an object with the keys being the values in order, the values their index:
     * ['one', 'two'] -> { one: 0, two: 1 }
     */
    var reverseOrder = order.reduce(function (acc, name, i) {
      acc[name] = i;
      return acc;
    }, {});

    facetValues.forEach(function (item) {
      // hierarchical facets get sorted using their raw name
      var name = item.path || item.name;
      if (reverseOrder[name] !== undefined) {
        orderedFacets[reverseOrder[name]] = item;
      } else {
        remainingFacets.push(item);
      }
    });

    orderedFacets = orderedFacets.filter(function (facet) {
      return facet;
    });

    var sortRemainingBy = facetOrdering.sortRemainingBy;
    var ordering;
    if (sortRemainingBy === 'hidden') {
      return orderedFacets;
    } else if (sortRemainingBy === 'alpha') {
      ordering = [
        ['path', 'name'],
        ['asc', 'asc'],
      ];
    } else {
      ordering = [['count'], ['desc']];
    }

    return orderedFacets.concat(
      orderBy_1(remainingFacets, ordering[0], ordering[1])
    );
  }

  /**
   * @param {SearchResults} results the search results class
   * @param {string} attribute the attribute to retrieve ordering of
   * @returns {FacetOrdering | undefined} the facet ordering
   */
  function getFacetOrdering(results, attribute) {
    return (
      results.renderingContent &&
      results.renderingContent.facetOrdering &&
      results.renderingContent.facetOrdering.values &&
      results.renderingContent.facetOrdering.values[attribute]
    );
  }

  /**
   * Get a the list of values for a given facet attribute. Those values are sorted
   * refinement first, descending count (bigger value on top), and name ascending
   * (alphabetical order). The sort formula can overridden using either string based
   * predicates or a function.
   *
   * This method will return all the values returned by the Algolia engine plus all
   * the values already refined. This means that it can happen that the
   * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
   * might not be respected if you have facet values that are already refined.
   * @param {string} attribute attribute name
   * @param {object} opts configuration options.
   * @param {boolean} [opts.facetOrdering]
   * Force the use of facetOrdering from the result if a sortBy is present. If
   * sortBy isn't present, facetOrdering will be used automatically.
   * @param {Array.<string> | function} opts.sortBy
   * When using strings, it consists of
   * the name of the [FacetValue](#SearchResults.FacetValue) or the
   * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
   * order (`asc` or `desc`). For example to order the value by count, the
   * argument would be `['count:asc']`.
   *
   * If only the attribute name is specified, the ordering defaults to the one
   * specified in the default value for this attribute.
   *
   * When not specified, the order is
   * ascending.  This parameter can also be a function which takes two facet
   * values and should return a number, 0 if equal, 1 if the first argument is
   * bigger or -1 otherwise.
   *
   * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
   * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
   * the attribute requested (hierarchical, disjunctive or conjunctive)
   * @example
   * helper.on('result', function(event){
   *   //get values ordered only by name ascending using the string predicate
   *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
   *   //get values  ordered only by count ascending using a function
   *   event.results.getFacetValues('city', {
   *     // this is equivalent to ['count:asc']
   *     sortBy: function(a, b) {
   *       if (a.count === b.count) return 0;
   *       if (a.count > b.count)   return 1;
   *       if (b.count > a.count)   return -1;
   *     }
   *   });
   * });
   */
  SearchResults.prototype.getFacetValues = function (attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) {
      return undefined;
    }

    var options = defaultsPure({}, opts, {
      sortBy: SearchResults.DEFAULT_SORT,
      // if no sortBy is given, attempt to sort based on facetOrdering
      // if it is given, we still allow to sort via facet ordering first
      facetOrdering: !(opts && opts.sortBy),
    });

    // eslint-disable-next-line consistent-this
    var results = this;
    var attributes;
    if (Array.isArray(facetValues)) {
      attributes = [attribute];
    } else {
      var config = results._state.getHierarchicalFacetByName(facetValues.name);
      attributes = config.attributes;
    }

    return recSort(
      function (data, facetName) {
        if (options.facetOrdering) {
          var facetOrdering = getFacetOrdering(results, facetName);
          if (facetOrdering) {
            return sortViaFacetOrdering(data, facetOrdering);
          }
        }

        if (Array.isArray(options.sortBy)) {
          var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
          return orderBy_1(data, order[0], order[1]);
        } else if (typeof options.sortBy === 'function') {
          return vanillaSortFn(options.sortBy, data);
        }
        throw new Error(
          'options.sortBy is optional but if defined it must be ' +
            'either an array of string (predicates) or a sorting function'
        );
      },
      facetValues,
      attributes
    );
  };

  /**
   * Returns the facet stats if attribute is defined and the facet contains some.
   * Otherwise returns undefined.
   * @param {string} attribute name of the faceted attribute
   * @return {object} The stats of the facet
   */
  SearchResults.prototype.getFacetStats = function (attribute) {
    if (this._state.isConjunctiveFacet(attribute)) {
      return getFacetStatsIfAvailable(this.facets, attribute);
    } else if (this._state.isDisjunctiveFacet(attribute)) {
      return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    }

    return undefined;
  };

  /**
   * @typedef {Object} FacetListItem
   * @property {string} name
   */

  /**
   * @param {FacetListItem[]} facetList (has more items, but enough for here)
   * @param {string} facetName The attribute to look for
   * @return {object|undefined} The stats of the facet
   */
  function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find$1(facetList, function (facet) {
      return facet.name === facetName;
    });
    return data && data.stats;
  }

  /**
   * Returns all refinements for all filters + tags. It also provides
   * additional information: count and exhaustiveness for each filter.
   *
   * See the [refinement type](#Refinement) for an exhaustive view of the available
   * data.
   *
   * Note that for a numeric refinement, results are grouped per operator, this
   * means that it will return responses for operators which are empty.
   *
   * @return {Array.<Refinement>} all the refinements
   */
  SearchResults.prototype.getRefinements = function () {
    var state = this._state;
    // eslint-disable-next-line consistent-this
    var results = this;
    var res = [];

    Object.keys(state.facetsRefinements).forEach(function (attributeName) {
      state.facetsRefinements[attributeName].forEach(function (name) {
        res.push(
          getRefinement(state, 'facet', attributeName, name, results.facets)
        );
      });
    });

    Object.keys(state.facetsExcludes).forEach(function (attributeName) {
      state.facetsExcludes[attributeName].forEach(function (name) {
        res.push(
          getRefinement(state, 'exclude', attributeName, name, results.facets)
        );
      });
    });

    Object.keys(state.disjunctiveFacetsRefinements).forEach(function (
      attributeName
    ) {
      state.disjunctiveFacetsRefinements[attributeName].forEach(function (name) {
        res.push(
          getRefinement(
            state,
            'disjunctive',
            attributeName,
            name,
            results.disjunctiveFacets
          )
        );
      });
    });

    Object.keys(state.hierarchicalFacetsRefinements).forEach(function (
      attributeName
    ) {
      state.hierarchicalFacetsRefinements[attributeName].forEach(function (name) {
        res.push(
          getHierarchicalRefinement(
            state,
            attributeName,
            name,
            results.hierarchicalFacets
          )
        );
      });
    });

    Object.keys(state.numericRefinements).forEach(function (attributeName) {
      var operators = state.numericRefinements[attributeName];
      Object.keys(operators).forEach(function (operator) {
        operators[operator].forEach(function (value) {
          res.push({
            type: 'numeric',
            attributeName: attributeName,
            name: value,
            numericValue: value,
            operator: operator,
          });
        });
      });
    });

    state.tagRefinements.forEach(function (name) {
      res.push({ type: 'tag', attributeName: '_tags', name: name });
    });

    return res;
  };

  /**
   * @typedef {Object} Facet
   * @property {string} name
   * @property {Object} data
   * @property {boolean} exhaustive
   */

  /**
   * @param {SearchParameters} state the current state
   * @param {string} type the type of the refinement
   * @param {string} attributeName The attribute of the facet
   * @param {*} name The name of the facet
   * @param {Facet[]} resultsFacets facets from the results
   * @return {Refinement} the refinement
   */
  function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find$1(resultsFacets, function (f) {
      return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = (facet && facet.exhaustive) || false;

    return {
      type: type,
      attributeName: attributeName,
      name: name,
      count: count,
      exhaustive: exhaustive,
    };
  }

  /**
   * @param {SearchParameters} state the current state
   * @param {string} attributeName the attribute of the hierarchical facet
   * @param {string} name the name of the facet
   * @param {Facet[]} resultsFacets facets from the results
   * @return {HierarchicalFacet} the hierarchical facet
   */
  function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
    var split = name.split(separator);
    var rootFacet = find$1(resultsFacets, function (facet) {
      return facet.name === attributeName;
    });

    var facet = split.reduce(function (intermediateFacet, part) {
      var newFacet =
        intermediateFacet &&
        find$1(intermediateFacet.data, function (f) {
          return f.name === part;
        });
      return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);

    var count = (facet && facet.count) || 0;
    var exhaustive = (facet && facet.exhaustive) || false;
    var path = (facet && facet.path) || '';

    return {
      type: 'hierarchical',
      attributeName: attributeName,
      name: path,
      count: count,
      exhaustive: exhaustive,
    };
  }

  var SearchResults_1 = SearchResults;

  var version$1 = '3.14.0';

  var escapeFacetValue$3 = escapeFacetValue_1.escapeFacetValue;









  /**
   * Event triggered when a parameter is set or updated
   * @event AlgoliaSearchHelper#event:change
   * @property {object} event
   * @property {SearchParameters} event.state the current parameters with the latest changes applied
   * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
   * @example
   * helper.on('change', function(event) {
   *   console.log('The parameters have changed');
   * });
   */

  /**
   * Event triggered when a main search is sent to Algolia
   * @event AlgoliaSearchHelper#event:search
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search
   * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
   * @example
   * helper.on('search', function(event) {
   *   console.log('Search sent');
   * });
   */

  /**
   * Event triggered when a search using `searchForFacetValues` is sent to Algolia
   * @event AlgoliaSearchHelper#event:searchForFacetValues
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search it is the first search.
   * @property {string} event.facet the facet searched into
   * @property {string} event.query the query used to search in the facets
   * @example
   * helper.on('searchForFacetValues', function(event) {
   *   console.log('searchForFacetValues sent');
   * });
   */

  /**
   * Event triggered when a search using `searchOnce` is sent to Algolia
   * @event AlgoliaSearchHelper#event:searchOnce
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search it is the first search.
   * @example
   * helper.on('searchOnce', function(event) {
   *   console.log('searchOnce sent');
   * });
   */

  /**
   * Event triggered when the results are retrieved from Algolia
   * @event AlgoliaSearchHelper#event:result
   * @property {object} event
   * @property {SearchResults} event.results the results received from Algolia
   * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
   * @example
   * helper.on('result', function(event) {
   *   console.log('Search results received');
   * });
   */

  /**
   * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
   * used, the error can be caught using this event.
   * @event AlgoliaSearchHelper#event:error
   * @property {object} event
   * @property {Error} event.error the error returned by the Algolia.
   * @example
   * helper.on('error', function(event) {
   *   console.log('Houston we got a problem.');
   * });
   */

  /**
   * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
   * @event AlgoliaSearchHelper#event:searchQueueEmpty
   * @example
   * helper.on('searchQueueEmpty', function() {
   *   console.log('No more search pending');
   *   // This is received before the result event if we're not expecting new results
   * });
   *
   * helper.search();
   */

  /**
   * Initialize a new AlgoliaSearchHelper
   * @class
   * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
   * search. It provides an event based interface for search callbacks:
   *  - change: when the internal search state is changed.
   *    This event contains a {@link SearchParameters} object and the
   *    {@link SearchResults} of the last result if any.
   *  - search: when a search is triggered using the `search()` method.
   *  - result: when the response is retrieved from Algolia and is processed.
   *    This event contains a {@link SearchResults} object and the
   *    {@link SearchParameters} corresponding to this answer.
   *  - error: when the response is an error. This event contains the error returned by the server.
   * @param  {AlgoliaSearch} client an AlgoliaSearch client
   * @param  {string} index the index name to query
   * @param  {SearchParameters | object} options an object defining the initial
   * config of the search. It doesn't have to be a {SearchParameters},
   * just an object containing the properties you need from it.
   */
  function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === 'function') {
      client.addAlgoliaAgent('JS Helper (' + version$1 + ')');
    }

    this.setClient(client);
    var opts = options || {};
    opts.index = index;
    this.state = SearchParameters_1.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
  }

  inherits_1(AlgoliaSearchHelper, events);

  /**
   * Start the search with the parameters set in the state. When the
   * method is called, it triggers a `search` event. The results will
   * be available through the `result` event. If an error occurs, an
   * `error` will be fired instead.
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires search
   * @fires result
   * @fires error
   * @chainable
   */
  AlgoliaSearchHelper.prototype.search = function () {
    this._search({ onlyWithDerivedHelpers: false });
    return this;
  };

  AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function () {
    this._search({ onlyWithDerivedHelpers: true });
    return this;
  };

  /**
   * Gets the search query parameters that would be sent to the Algolia Client
   * for the hits
   * @return {object} Query Parameters
   */
  AlgoliaSearchHelper.prototype.getQuery = function () {
    var state = this.state;
    return requestBuilder_1._getHitsSearchParams(state);
  };

  /**
   * Start a search using a modified version of the current state. This method does
   * not trigger the helper lifecycle and does not modify the state kept internally
   * by the helper. This second aspect means that the next search call will be the
   * same as a search call before calling searchOnce.
   * @param {object} options can contain all the parameters that can be set to SearchParameters
   * plus the index
   * @param {function} [cb] optional callback executed when the response from the
   * server is back.
   * @return {promise|undefined} if a callback is passed the method returns undefined
   * otherwise it returns a promise containing an object with two keys :
   *  - content with a SearchResults
   *  - state with the state used for the query as a SearchParameters
   * @example
   * // Changing the number of records returned per page to 1
   * // This example uses the callback API
   * var state = helper.searchOnce({hitsPerPage: 1},
   *   function(error, content, state) {
   *     // if an error occurred it will be passed in error, otherwise its value is null
   *     // content contains the results formatted as a SearchResults
   *     // state is the instance of SearchParameters used for this search
   *   });
   * @example
   * // Changing the number of records returned per page to 1
   * // This example uses the promise API
   * var state1 = helper.searchOnce({hitsPerPage: 1})
   *                 .then(promiseHandler);
   *
   * function promiseHandler(res) {
   *   // res contains
   *   // {
   *   //   content : SearchResults
   *   //   state   : SearchParameters (the one used for this specific search)
   *   // }
   * }
   */
  AlgoliaSearchHelper.prototype.searchOnce = function (options, cb) {
    var tempState = !options
      ? this.state
      : this.state.setQueryParameters(options);
    var queries = requestBuilder_1._getQueries(tempState.index, tempState);
    // eslint-disable-next-line consistent-this
    var self = this;

    this._currentNbQueries++;

    this.emit('searchOnce', {
      state: tempState,
    });

    if (cb) {
      this.client
        .search(queries)
        .then(function (content) {
          self._currentNbQueries--;
          if (self._currentNbQueries === 0) {
            self.emit('searchQueueEmpty');
          }

          cb(null, new SearchResults_1(tempState, content.results), tempState);
        })
        .catch(function (err) {
          self._currentNbQueries--;
          if (self._currentNbQueries === 0) {
            self.emit('searchQueueEmpty');
          }

          cb(err, null, tempState);
        });

      return undefined;
    }

    return this.client.search(queries).then(
      function (content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        return {
          content: new SearchResults_1(tempState, content.results),
          state: tempState,
          _originalResponse: content,
        };
      },
      function (e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
      }
    );
  };

  /**
   * Start the search for answers with the parameters set in the state.
   * This method returns a promise.
   * @param {Object} options - the options for answers API call
   * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
   * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
   * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
   *
   * @return {promise} the answer results
   * @deprecated answers is deprecated and will be replaced with new initiatives
   */
  AlgoliaSearchHelper.prototype.findAnswers = function (options) {
    // eslint-disable-next-line no-console
    console.warn('[algoliasearch-helper] answers is no longer supported');
    var state = this.state;
    var derivedHelper = this.derivedHelpers[0];
    if (!derivedHelper) {
      return Promise.resolve([]);
    }
    var derivedState = derivedHelper.getModifiedState(state);
    var data = merge_1(
      {
        attributesForPrediction: options.attributesForPrediction,
        nbHits: options.nbHits,
      },
      {
        params: omit$1(requestBuilder_1._getHitsSearchParams(derivedState), [
          'attributesToSnippet',
          'hitsPerPage',
          'restrictSearchableAttributes',
          'snippetEllipsisText',
        ]),
      }
    );

    var errorMessage =
      'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
    if (typeof this.client.initIndex !== 'function') {
      throw new Error(errorMessage);
    }
    var index = this.client.initIndex(derivedState.index);
    if (typeof index.findAnswers !== 'function') {
      throw new Error(errorMessage);
    }
    return index.findAnswers(derivedState.query, options.queryLanguages, data);
  };

  /**
   * Structure of each result when using
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   * @typedef FacetSearchHit
   * @type {object}
   * @property {string} value the facet value
   * @property {string} highlighted the facet value highlighted with the query string
   * @property {number} count number of occurrence of this facet value
   * @property {boolean} isRefined true if the value is already refined
   */

  /**
   * Structure of the data resolved by the
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   * promise.
   * @typedef FacetSearchResult
   * @type {object}
   * @property {FacetSearchHit} facetHits the results for this search for facet values
   * @property {number} processingTimeMS time taken by the query inside the engine
   */

  /**
   * Search for facet values based on an query and the name of a faceted attribute. This
   * triggers a search and will return a promise. On top of using the query, it also sends
   * the parameters from the state so that the search is narrowed down to only the possible values.
   *
   * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
   * @param {string} facet the name of the faceted attribute
   * @param {string} query the string query for the search
   * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
   * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
   * it in the generated query.
   * @return {promise.<FacetSearchResult>} the results of the search
   */
  AlgoliaSearchHelper.prototype.searchForFacetValues = function (
    facet,
    query,
    maxFacetHits,
    userState
  ) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
    var clientHasInitIndex = typeof this.client.initIndex === 'function';
    if (
      !clientHasSFFV &&
      !clientHasInitIndex &&
      typeof this.client.search !== 'function'
    ) {
      throw new Error(
        'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
      );
    }

    var state = this.state.setQueryParameters(userState || {});
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder_1.getSearchForFacetQuery(
      facet,
      query,
      maxFacetHits,
      state
    );

    this._currentNbQueries++;
    // eslint-disable-next-line consistent-this
    var self = this;
    var searchForFacetValuesPromise;
    // newer algoliasearch ^3.27.1 - ~4.0.0
    if (clientHasSFFV) {
      searchForFacetValuesPromise = this.client.searchForFacetValues([
        { indexName: state.index, params: algoliaQuery },
      ]);
      // algoliasearch < 3.27.1
    } else if (clientHasInitIndex) {
      searchForFacetValuesPromise = this.client
        .initIndex(state.index)
        .searchForFacetValues(algoliaQuery);
      // algoliasearch ~5.0.0
    } else {
      // @MAJOR only use client.search
      delete algoliaQuery.facetName;
      searchForFacetValuesPromise = this.client
        .search([
          {
            type: 'facet',
            facet: facet,
            indexName: state.index,
            params: algoliaQuery,
          },
        ])
        .then(function processResponse(response) {
          return response.results[0];
        });
    }

    this.emit('searchForFacetValues', {
      state: state,
      facet: facet,
      query: query,
    });

    return searchForFacetValuesPromise.then(
      function addIsRefined(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

        content = Array.isArray(content) ? content[0] : content;

        content.facetHits.forEach(function (f) {
          f.escapedValue = escapeFacetValue$3(f.value);
          f.isRefined = isDisjunctive
            ? state.isDisjunctiveFacetRefined(facet, f.escapedValue)
            : state.isFacetRefined(facet, f.escapedValue);
        });

        return content;
      },
      function (e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
        throw e;
      }
    );
  };

  /**
   * Sets the text query used for the search.
   *
   * This method resets the current page to 0.
   * @param  {string} q the user query
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.setQuery = function (q) {
    this._change({
      state: this.state.resetPage().setQuery(q),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Remove all the types of refinements except tags. A string can be provided to remove
   * only the refinements of a specific attribute. For more advanced use case, you can
   * provide a function instead. This function should follow the
   * [clearCallback definition](#SearchParameters.clearCallback).
   *
   * This method resets the current page to 0.
   * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   * @example
   * // Removing all the refinements
   * helper.clearRefinements().search();
   * @example
   * // Removing all the filters on a the category attribute.
   * helper.clearRefinements('category').search();
   * @example
   * // Removing only the exclude filters on the category facet.
   * helper.clearRefinements(function(value, attribute, type) {
   *   return type === 'exclude' && attribute === 'category';
   * }).search();
   */
  AlgoliaSearchHelper.prototype.clearRefinements = function (name) {
    this._change({
      state: this.state.resetPage().clearRefinements(name),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Remove all the tag filters.
   *
   * This method resets the current page to 0.
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.clearTags = function () {
    this._change({
      state: this.state.resetPage().clearTags(),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function (
    facet,
    value
  ) {
    this._change({
      state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function () {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
  };

  /**
   * Adds a refinement on a hierarchical facet. It will throw
   * an exception if the facet is not defined or if the facet
   * is already refined.
   *
   * This method resets the current page to 0.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @throws Error if the facet is not defined or if the facet is refined
   * @chainable
   * @fires change
   */
  AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function (
    facet,
    path
  ) {
    this._change({
      state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} attribute the attribute on which the numeric filter applies
   * @param  {string} operator the operator of the filter
   * @param  {number} value the value of the filter
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.addNumericRefinement = function (
    attribute,
    operator,
    value
  ) {
    this._change({
      state: this.state
        .resetPage()
        .addNumericRefinement(attribute, operator, value),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Adds a filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.addFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().addFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.addRefine = function () {
    return this.addFacetRefinement.apply(this, arguments);
  };

  /**
   * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.addFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().addExcludeRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
   */
  AlgoliaSearchHelper.prototype.addExclude = function () {
    return this.addFacetExclusion.apply(this, arguments);
  };

  /**
   * Adds a tag filter with the `tag` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param {string} tag the tag to add to the filter
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.addTag = function (tag) {
    this._change({
      state: this.state.resetPage().addTagRefinement(tag),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * Some parameters are optional, triggering different behavior:
   *  - if the value is not provided, then all the numeric value will be removed for the
   *  specified attribute/operator couple.
   *  - if the operator is not provided either, then all the numeric filter on this attribute
   *  will be removed.
   *
   * This method resets the current page to 0.
   * @param  {string} attribute the attribute on which the numeric filter applies
   * @param  {string} [operator] the operator of the filter
   * @param  {number} [value] the value of the filter
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeNumericRefinement = function (
    attribute,
    operator,
    value
  ) {
    this._change({
      state: this.state
        .resetPage()
        .removeNumericRefinement(attribute, operator, value),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function (
    facet,
    value
  ) {
    this._change({
      state: this.state
        .resetPage()
        .removeDisjunctiveFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function () {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
  };

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @throws Error if the facet is not defined or if the facet is not refined
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function (
    facet
  ) {
    this._change({
      state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Removes a filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().removeFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.removeRefine = function () {
    return this.removeFacetRefinement.apply(this, arguments);
  };

  /**
   * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().removeExcludeRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
   */
  AlgoliaSearchHelper.prototype.removeExclude = function () {
    return this.removeFacetExclusion.apply(this, arguments);
  };

  /**
   * Removes a tag filter with the `tag` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param {string} tag tag to remove from the filter
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.removeTag = function (tag) {
    this._change({
      state: this.state.resetPage().removeTagRefinement(tag),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.toggleFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
   */
  AlgoliaSearchHelper.prototype.toggleExclude = function () {
    return this.toggleFacetExclusion.apply(this, arguments);
  };

  /**
   * Adds or removes a filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method can be used for conjunctive, disjunctive and hierarchical filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @throws Error will throw an error if the facet is not declared in the settings of the helper
   * @fires change
   * @chainable
   * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.toggleRefinement = function (facet, value) {
    return this.toggleFacetRefinement(facet, value);
  };

  /**
   * Adds or removes a filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method can be used for conjunctive, disjunctive and hierarchical filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @throws Error will throw an error if the facet is not declared in the settings of the helper
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.toggleFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().toggleFacetRefinement(facet, value),
      isPageReset: true,
    });

    return this;
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
   */
  AlgoliaSearchHelper.prototype.toggleRefine = function () {
    return this.toggleFacetRefinement.apply(this, arguments);
  };

  /**
   * Adds or removes a tag filter with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method resets the current page to 0.
   * @param {string} tag tag to remove or add
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.toggleTag = function (tag) {
    this._change({
      state: this.state.resetPage().toggleTagRefinement(tag),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Increments the page number by one.
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   * @example
   * helper.setPage(0).nextPage().getPage();
   * // returns 1
   */
  AlgoliaSearchHelper.prototype.nextPage = function () {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
  };

  /**
   * Decrements the page number by one.
   * @fires change
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @chainable
   * @example
   * helper.setPage(1).previousPage().getPage();
   * // returns 0
   */
  AlgoliaSearchHelper.prototype.previousPage = function () {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
  };

  /**
   * @private
   * @param {number} page The page number
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @chainable
   * @fires change
   */
  function setCurrentPage(page) {
    if (page < 0) throw new Error('Page requested below 0.');

    this._change({
      state: this.state.setPage(page),
      isPageReset: false,
    });

    return this;
  }

  /**
   * Change the current page
   * @deprecated
   * @param  {number} page The page number
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

  /**
   * Updates the current page.
   * @function
   * @param  {number} page The page number
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

  /**
   * Updates the name of the index that will be targeted by the query.
   *
   * This method resets the current page to 0.
   * @param {string} name the index name
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.setIndex = function (name) {
    this._change({
      state: this.state.resetPage().setIndex(name),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Update a parameter of the search. This method reset the page
   *
   * The complete list of parameters is available on the
   * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
   * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
   * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
   *
   * This method resets the current page to 0.
   * @param {string} parameter name of the parameter to update
   * @param {any} value new value of the parameter
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   * @example
   * helper.setQueryParameter('hitsPerPage', 20).search();
   */
  AlgoliaSearchHelper.prototype.setQueryParameter = function (parameter, value) {
    this._change({
      state: this.state.resetPage().setQueryParameter(parameter, value),
      isPageReset: true,
    });

    return this;
  };

  /**
   * Set the whole state (warning: will erase previous state)
   * @param {SearchParameters} newState the whole new state
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @fires change
   * @chainable
   */
  AlgoliaSearchHelper.prototype.setState = function (newState) {
    this._change({
      state: SearchParameters_1.make(newState),
      isPageReset: false,
    });

    return this;
  };

  /**
   * Override the current state without triggering a change event.
   * Do not use this method unless you know what you are doing. (see the example
   * for a legit use case)
   * @param {SearchParameters} newState the whole new state
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   * @example
   *  helper.on('change', function(state){
   *    // In this function you might want to find a way to store the state in the url/history
   *    updateYourURL(state)
   *  })
   *  window.onpopstate = function(event){
   *    // This is naive though as you should check if the state is really defined etc.
   *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
   *  }
   * @chainable
   */
  AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent =
    function (newState) {
      this.state = new SearchParameters_1(newState);
      return this;
    };

  /**
   * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
   * @param {string} attribute the name of the attribute
   * @return {boolean} true if the attribute is filtered by at least one value
   * @example
   * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
   * helper.hasRefinements('price'); // false
   * helper.addNumericRefinement('price', '>', 100);
   * helper.hasRefinements('price'); // true
   *
   * helper.hasRefinements('color'); // false
   * helper.addFacetRefinement('color', 'blue');
   * helper.hasRefinements('color'); // true
   *
   * helper.hasRefinements('material'); // false
   * helper.addDisjunctiveFacetRefinement('material', 'plastic');
   * helper.hasRefinements('material'); // true
   *
   * helper.hasRefinements('categories'); // false
   * helper.toggleFacetRefinement('categories', 'kitchen > knife');
   * helper.hasRefinements('categories'); // true
   *
   */
  AlgoliaSearchHelper.prototype.hasRefinements = function (attribute) {
    if (objectHasKeys_1(this.state.getNumericRefinements(attribute))) {
      return true;
    } else if (this.state.isConjunctiveFacet(attribute)) {
      return this.state.isFacetRefined(attribute);
    } else if (this.state.isDisjunctiveFacet(attribute)) {
      return this.state.isDisjunctiveFacetRefined(attribute);
    } else if (this.state.isHierarchicalFacet(attribute)) {
      return this.state.isHierarchicalFacetRefined(attribute);
    }

    // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement
    return false;
  };

  /**
   * Check if a value is excluded for a specific faceted attribute. If the value
   * is omitted then the function checks if there is any excluding refinements.
   *
   * @param  {string}  facet name of the attribute for used for faceting
   * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} true if refined
   * @example
   * helper.isExcludeRefined('color'); // false
   * helper.isExcludeRefined('color', 'blue') // false
   * helper.isExcludeRefined('color', 'red') // false
   *
   * helper.addFacetExclusion('color', 'red');
   *
   * helper.isExcludeRefined('color'); // true
   * helper.isExcludeRefined('color', 'blue') // false
   * helper.isExcludeRefined('color', 'red') // true
   */
  AlgoliaSearchHelper.prototype.isExcluded = function (facet, value) {
    return this.state.isExcludeRefined(facet, value);
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
   */
  AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function (facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
  };

  /**
   * Check if the string is a currently filtering tag.
   * @param {string} tag tag to check
   * @return {boolean} true if the tag is currently refined
   */
  AlgoliaSearchHelper.prototype.hasTag = function (tag) {
    return this.state.isTagRefined(tag);
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
   */
  AlgoliaSearchHelper.prototype.isTagRefined = function () {
    return this.hasTagRefinements.apply(this, arguments);
  };

  /**
   * Get the name of the currently used index.
   * @return {string} name of the index
   * @example
   * helper.setIndex('highestPrice_products').getIndex();
   * // returns 'highestPrice_products'
   */
  AlgoliaSearchHelper.prototype.getIndex = function () {
    return this.state.index;
  };

  function getCurrentPage() {
    return this.state.page;
  }

  /**
   * Get the currently selected page
   * @deprecated
   * @return {number} the current page
   */
  AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
  /**
   * Get the currently selected page
   * @function
   * @return {number} the current page
   */
  AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

  /**
   * Get all the tags currently set to filters the results.
   *
   * @return {string[]} The list of tags currently set.
   */
  AlgoliaSearchHelper.prototype.getTags = function () {
    return this.state.tagRefinements;
  };

  /**
   * Get the list of refinements for a given attribute. This method works with
   * conjunctive, disjunctive, excluding and numerical filters.
   *
   * See also SearchResults#getRefinements
   *
   * @param {string} facetName attribute name used for faceting
   * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
   * a type. Numeric also contains an operator.
   * @example
   * helper.addNumericRefinement('price', '>', 100);
   * helper.getRefinements('price');
   * // [
   * //   {
   * //     "value": [
   * //       100
   * //     ],
   * //     "operator": ">",
   * //     "type": "numeric"
   * //   }
   * // ]
   * @example
   * helper.addFacetRefinement('color', 'blue');
   * helper.addFacetExclusion('color', 'red');
   * helper.getRefinements('color');
   * // [
   * //   {
   * //     "value": "blue",
   * //     "type": "conjunctive"
   * //   },
   * //   {
   * //     "value": "red",
   * //     "type": "exclude"
   * //   }
   * // ]
   * @example
   * helper.addDisjunctiveFacetRefinement('material', 'plastic');
   * // [
   * //   {
   * //     "value": "plastic",
   * //     "type": "disjunctive"
   * //   }
   * // ]
   */
  AlgoliaSearchHelper.prototype.getRefinements = function (facetName) {
    var refinements = [];

    if (this.state.isConjunctiveFacet(facetName)) {
      var conjRefinements = this.state.getConjunctiveRefinements(facetName);

      conjRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'conjunctive',
        });
      });

      var excludeRefinements = this.state.getExcludeRefinements(facetName);

      excludeRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'exclude',
        });
      });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
      var disjunctiveRefinements =
        this.state.getDisjunctiveRefinements(facetName);

      disjunctiveRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'disjunctive',
        });
      });
    }

    var numericRefinements = this.state.getNumericRefinements(facetName);

    Object.keys(numericRefinements).forEach(function (operator) {
      var value = numericRefinements[operator];

      refinements.push({
        value: value,
        operator: operator,
        type: 'numeric',
      });
    });

    return refinements;
  };

  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  AlgoliaSearchHelper.prototype.getNumericRefinement = function (
    attribute,
    operator
  ) {
    return this.state.getNumericRefinement(attribute, operator);
  };

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function (
    facetName
  ) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
  };

  // /////////// PRIVATE

  /**
   * Perform the underlying queries
   * @private
   * @param {object} options options for the query
   * @param {boolean} [options.onlyWithDerivedHelpers=false] if true, only the derived helpers will be queried
   * @return {undefined} does not return anything
   * @fires search
   * @fires result
   * @fires error
   */
  AlgoliaSearchHelper.prototype._search = function (options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];

    if (!options.onlyWithDerivedHelpers) {
      mainQueries = requestBuilder_1._getQueries(state.index, state);

      states.push({
        state: state,
        queriesCount: mainQueries.length,
        helper: this,
      });

      this.emit('search', {
        state: state,
        results: this.lastResults,
      });
    }

    var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
      var derivedState = derivedHelper.getModifiedState(state);
      var derivedStateQueries = derivedState.index
        ? requestBuilder_1._getQueries(derivedState.index, derivedState)
        : [];

      states.push({
        state: derivedState,
        queriesCount: derivedStateQueries.length,
        helper: derivedHelper,
      });

      derivedHelper.emit('search', {
        state: derivedState,
        results: derivedHelper.lastResults,
      });

      return derivedStateQueries;
    });

    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);

    var queryId = this._queryId++;
    this._currentNbQueries++;

    if (!queries.length) {
      return Promise.resolve({ results: [] }).then(
        this._dispatchAlgoliaResponse.bind(this, states, queryId)
      );
    }

    try {
      this.client
        .search(queries)
        .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
        .catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
      // If we reach this part, we're in an internal error state
      this.emit('error', {
        error: error,
      });
    }

    return undefined;
  };

  /**
   * Transform the responses as sent by the server and transform them into a user
   * usable object that merge the results of all the batch requests. It will dispatch
   * over the different helper + derived helpers (when there are some).
   * @private
   * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>} states state used to generate the request
   * @param {number} queryId id of the current request
   * @param {object} content content of the response
   * @return {undefined}
   */
  AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function (
    states,
    queryId,
    content
  ) {
    // @TODO remove the number of outdated queries discarded instead of just one

    if (queryId < this._lastQueryIdReceived) {
      // Outdated answer
      return;
    }

    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;

    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

    var results = content.results.slice();

    states.forEach(function (s) {
      var state = s.state;
      var queriesCount = s.queriesCount;
      var helper = s.helper;
      var specificResults = results.splice(0, queriesCount);

      if (!state.index) {
        helper.emit('result', {
          results: null,
          state: state,
        });
        return;
      }

      helper.lastResults = new SearchResults_1(state, specificResults);

      helper.emit('result', {
        results: helper.lastResults,
        state: state,
      });
    });
  };

  AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function (
    queryId,
    error
  ) {
    if (queryId < this._lastQueryIdReceived) {
      // Outdated answer
      return;
    }

    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;

    this.emit('error', {
      error: error,
    });

    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
  };

  AlgoliaSearchHelper.prototype.containsRefinement = function (
    query,
    facetFilters,
    numericFilters,
    tagFilters
  ) {
    return (
      query ||
      facetFilters.length !== 0 ||
      numericFilters.length !== 0 ||
      tagFilters.length !== 0
    );
  };

  /**
   * Test if there are some disjunctive refinements on the facet
   * @private
   * @param {string} facet the attribute to test
   * @return {boolean} true if there are refinements on this attribute
   */
  AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function (facet) {
    return (
      this.state.disjunctiveRefinements[facet] &&
      this.state.disjunctiveRefinements[facet].length > 0
    );
  };

  AlgoliaSearchHelper.prototype._change = function (event) {
    var state = event.state;
    var isPageReset = event.isPageReset;

    if (state !== this.state) {
      this.state = state;

      this.emit('change', {
        state: this.state,
        results: this.lastResults,
        isPageReset: isPageReset,
      });
    }
  };

  /**
   * Clears the cache of the underlying Algolia client.
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   */
  AlgoliaSearchHelper.prototype.clearCache = function () {
    if (this.client.clearCache) this.client.clearCache();
    return this;
  };

  /**
   * Updates the internal client instance. If the reference of the clients
   * are equal then no update is actually done.
   * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
   * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
   */
  AlgoliaSearchHelper.prototype.setClient = function (newClient) {
    if (this.client === newClient) return this;

    if (typeof newClient.addAlgoliaAgent === 'function') {
      newClient.addAlgoliaAgent('JS Helper (' + version$1 + ')');
    }
    this.client = newClient;

    return this;
  };

  /**
   * Gets the instance of the currently used client.
   * @return {AlgoliaSearch} the currently used client
   */
  AlgoliaSearchHelper.prototype.getClient = function () {
    return this.client;
  };

  /**
   * Creates an derived instance of the Helper. A derived helper
   * is a way to request other indices synchronised with the lifecycle
   * of the main Helper. This mechanism uses the multiqueries feature
   * of Algolia to aggregate all the requests in a single network call.
   *
   * This method takes a function that is used to create a new SearchParameter
   * that will be used to create requests to Algolia. Those new requests
   * are created just before the `search` event. The signature of the function
   * is `SearchParameters -> SearchParameters`.
   *
   * This method returns a new DerivedHelper which is an EventEmitter
   * that fires the same `search`, `result` and `error` events. Those
   * events, however, will receive data specific to this DerivedHelper
   * and the SearchParameters that is returned by the call of the
   * parameter function.
   * @param {function} fn SearchParameters -> SearchParameters
   * @return {DerivedHelper} a new DerivedHelper
   */
  AlgoliaSearchHelper.prototype.derive = function (fn) {
    var derivedHelper = new DerivedHelper_1(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
  };

  /**
   * This method detaches a derived Helper from the main one. Prefer using the one from the
   * derived helper itself, to remove the event listeners too.
   * @private
   * @param  {DerivedHelper} derivedHelper the derived helper to detach
   * @return {undefined} nothing is returned
   * @throws Error
   */
  AlgoliaSearchHelper.prototype.detachDerivedHelper = function (derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error('Derived helper already detached');
    this.derivedHelpers.splice(pos, 1);
  };

  /**
   * This method returns true if there is currently at least one on-going search.
   * @return {boolean} true if there is a search pending
   */
  AlgoliaSearchHelper.prototype.hasPendingRequests = function () {
    return this._currentNbQueries > 0;
  };

  /**
   * @typedef AlgoliaSearchHelper.NumericRefinement
   * @type {object}
   * @property {number[]} value the numbers that are used for filtering this attribute with
   * the operator specified.
   * @property {string} operator the faceting data: value, number of entries
   * @property {string} type will be 'numeric'
   */

  /**
   * @typedef AlgoliaSearchHelper.FacetRefinement
   * @type {object}
   * @property {string} value the string use to filter the attribute
   * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
   */

  var algoliasearch_helper = AlgoliaSearchHelper;

  /**
   * The algoliasearchHelper module is the function that will let its
   * contains everything needed to use the Algoliasearch
   * Helper. It is a also a function that instanciate the helper.
   * To use the helper, you also need the Algolia JS client v3.
   * @example
   * //using the UMD build
   * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
   * var helper = algoliasearchHelper(client, 'bestbuy', {
   *   facets: ['shipping'],
   *   disjunctiveFacets: ['category']
   * });
   * helper.on('result', function(event) {
   *   console.log(event.results);
   * });
   * helper
   *   .toggleFacetRefinement('category', 'Movies & TV Shows')
   *   .toggleFacetRefinement('shipping', 'Free shipping')
   *   .search();
   * @example
   * // The helper is an event emitter using the node API
   * helper.on('result', updateTheResults);
   * helper.once('result', updateTheResults);
   * helper.removeListener('result', updateTheResults);
   * helper.removeAllListeners('result');
   * @module algoliasearchHelper
   * @param  {AlgoliaSearch} client an AlgoliaSearch client
   * @param  {string} index the name of the index to query
   * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
   * @return {AlgoliaSearchHelper} The helper instance
   */
  function algoliasearchHelper(client, index, opts) {
    return new algoliasearch_helper(client, index, opts);
  }

  /**
   * The version currently used
   * @member module:algoliasearchHelper.version
   * @type {number}
   */
  algoliasearchHelper.version = version$1;

  /**
   * Constructor for the Helper.
   * @member module:algoliasearchHelper.AlgoliaSearchHelper
   * @type {AlgoliaSearchHelper}
   */
  algoliasearchHelper.AlgoliaSearchHelper = algoliasearch_helper;

  /**
   * Constructor for the object containing all the parameters of the search.
   * @member module:algoliasearchHelper.SearchParameters
   * @type {SearchParameters}
   */
  algoliasearchHelper.SearchParameters = SearchParameters_1;

  /**
   * Constructor for the object containing the results of the search.
   * @member module:algoliasearchHelper.SearchResults
   * @type {SearchResults}
   */
  algoliasearchHelper.SearchResults = SearchResults_1;

  var algoliasearchHelper_1 = algoliasearchHelper;

  function createOptionalFilter(_ref) {
    var attributeName = _ref.attributeName,
      attributeValue = _ref.attributeValue,
      attributeScore = _ref.attributeScore;
    return "".concat(attributeName, ":").concat(attributeValue, "<score=").concat(attributeScore || 1, ">");
  }
  var defaultProps = {
    transformSearchParameters: function transformSearchParameters(x) {
      return _objectSpread2({}, x);
    }
  };
  function getId$1() {
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
      return acc;
    }, []);
    return props.transformSearchParameters(new algoliasearchHelper_1.SearchParameters({
      // @ts-ignore @TODO algoliasearch-helper@3.0.1 will contain the type
      // `sumOrFiltersScores`.
      // See https://github.com/algolia/algoliasearch-helper-js/pull/753
      sumOrFiltersScores: true,
      facetFilters: ["objectID:-".concat(props.hit.objectID)],
      optionalFilters: optionalFilters
    }));
  }
  var connectConfigureRelatedItems = createConnectorWithContext({
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
      var id = getId$1();
      // We need to transform the exhaustive search parameters back to clean
      // search parameters without the empty default keys so we don't pollute the
      // `configure` search state.
      var searchParameters = removeEmptyArraysFromObject(removeEmptyKey(getSearchParametersFromProps(props)));
      var searchParametersKeys = Object.keys(searchParameters);
      var nonPresentKeys = this._searchParameters ? Object.keys(this._searchParameters).filter(function (prop) {
        return searchParametersKeys.indexOf(prop) === -1;
      }) : [];
      this._searchParameters = searchParameters;
      var nextValue = _defineProperty({}, id, _objectSpread2(_objectSpread2({}, omit(nextSearchState[id], nonPresentKeys)), searchParameters));
      return refineValue(nextSearchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      var _this = this;
      var id = getId$1();
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

  function ConfigureRelatedItems() {
    return null;
  }
  ConfigureRelatedItems.propTypes = {
    hit: propTypes.object.isRequired,
    matchingPatterns: propTypes.object.isRequired,
    transformSearchParameters: propTypes.func
  };
  var ConfigureRelatedItems$1 = connectConfigureRelatedItems(ConfigureRelatedItems, {
    $$widgetType: 'ais.configureRelatedItems'
  });

  var MAX_WILDCARD_FACETS = 20;
  var connectDynamicWidgets = createConnectorWithContext({
    displayName: 'AlgoliaDynamicWidgets',
    $$type: 'ais.dynamicWidgets',
    defaultProps: {
      transformItems: function transformItems(items) {
        return items;
      },
      maxValuesPerFacet: 20
    },
    propTypes: {
      transformItems: propTypes.func,
      facets: propTypes.arrayOf(propTypes.string),
      maxValuesPerFacet: propTypes.number
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

  function isReactElement(element) {
    return _typeof(element) === 'object' && element.props;
  }
  function getAttribute(element) {
    if (!isReactElement(element)) {
      return undefined;
    }
    if (element.props.attribute) {
      return element.props.attribute;
    }
    if (Array.isArray(element.props.attributes)) {
      return element.props.attributes[0];
    }
    if (element.props.children) {
      return getAttribute(React__default.Children.only(element.props.children));
    }
    return undefined;
  }
  function DynamicWidgets(_ref) {
    var children = _ref.children,
      attributesToRender = _ref.attributesToRender,
      _ref$fallbackComponen = _ref.fallbackComponent,
      Fallback = _ref$fallbackComponen === void 0 ? function () {
        return null;
      } : _ref$fallbackComponen;
    var widgets = new Map();
    React__default.Children.forEach(children, function (child) {
      var attribute = getAttribute(child);
      if (!attribute) {
        throw new Error("Could not find \"attribute\" prop for ".concat(getDisplayName(child), "."));
      }
      widgets.set(attribute, child);
    });

    // on initial render this will be empty, but React InstantSearch keeps
    // search state for unmounted components in place, so routing works.
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, attributesToRender.map(function (attribute) {
      return /*#__PURE__*/React__default.createElement(React.Fragment, {
        key: attribute
      }, widgets.get(attribute) || /*#__PURE__*/React__default.createElement(Fallback, {
        attribute: attribute
      }));
    }));
  }
  var DynamicWidgets$1 = connectDynamicWidgets(DynamicWidgets, {
    $$widgetType: 'ais.dynamicWidgets'
  });

  // A context rule must consist only of alphanumeric characters, hyphens, and underscores.
  // See https://www.algolia.com/doc/guides/managing-results/refine-results/merchandising-and-promoting/in-depth/implementing-query-rules/#context
  function escapeRuleContext(ruleName) {
    return ruleName.replace(/[^a-z0-9-_]+/gi, '_');
  }
  function getWidgetRefinements(attribute, widgetKey, searchState) {
    var widgetState = searchState[widgetKey];
    switch (widgetKey) {
      case 'range':
        return Object.keys(widgetState[attribute]).map(function (rangeKey) {
          return widgetState[attribute][rangeKey];
        });
      case 'refinementList':
        return widgetState[attribute];
      case 'hierarchicalMenu':
        return [widgetState[attribute]];
      case 'menu':
        return [widgetState[attribute]];
      case 'multiRange':
        return widgetState[attribute].split(':');
      case 'toggle':
        return [widgetState[attribute]];
      default:
        return [];
    }
  }
  function getRefinements$1(attribute) {
    var searchState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var refinements = Object.keys(searchState).filter(function (widgetKey) {
      return searchState[widgetKey] !== undefined && searchState[widgetKey][attribute] !== undefined;
    }).map(function (widgetKey) {
      return getWidgetRefinements(attribute, widgetKey, searchState);
    }).reduce(function (acc, current) {
      return acc.concat(current);
    }, []); // flatten the refinements

    return refinements;
  }
  function getRuleContextsFromTrackedFilters(_ref) {
    var searchState = _ref.searchState,
      trackedFilters = _ref.trackedFilters;
    var ruleContexts = Object.keys(trackedFilters).reduce(function (facets, facetName) {
      var facetRefinements = getRefinements$1(facetName, searchState);
      var getTrackedFacetValues = trackedFilters[facetName];
      var trackedFacetValues = getTrackedFacetValues(facetRefinements);
      return [].concat(_toConsumableArray(facets), _toConsumableArray(facetRefinements.filter(function (facetRefinement) {
        return trackedFacetValues.includes(facetRefinement);
      }).map(function (facetValue) {
        return escapeRuleContext("ais-".concat(facetName, "-").concat(facetValue));
      })));
    }, []);
    return ruleContexts;
  }
  var defaultProps$1 = {
    transformItems: function transformItems(items) {
      return items;
    },
    transformRuleContexts: function transformRuleContexts(ruleContexts) {
      return ruleContexts;
    },
    trackedFilters: {}
  };
  var connectQueryRules = createConnectorWithContext({
    displayName: 'AlgoliaQueryRules',
    $$type: 'ais.queryRules',
    defaultProps: defaultProps$1,
    getProvidedProps: function getProvidedProps(props, _1, searchResults) {
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (results === null) {
        return {
          items: [],
          canRefine: false
        };
      }
      var _results$userData = results.userData,
        userData = _results$userData === void 0 ? [] : _results$userData;
      var transformItems = props.transformItems;
      var transformedItems = transformItems(userData);
      return {
        items: transformedItems,
        canRefine: transformedItems.length > 0
      };
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      if (Object.keys(props.trackedFilters).length === 0) {
        return searchParameters;
      }
      var indexSearchState = hasMultipleIndices({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }) && searchState.indices ? searchState.indices[getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      })] : searchState;
      var newRuleContexts = getRuleContextsFromTrackedFilters({
        searchState: indexSearchState,
        trackedFilters: props.trackedFilters
      });
      var initialRuleContexts = searchParameters.ruleContexts || [];
      var nextRuleContexts = [].concat(_toConsumableArray(initialRuleContexts), _toConsumableArray(newRuleContexts));
      var ruleContexts = props.transformRuleContexts(nextRuleContexts).slice(0, 10);
      return searchParameters.setQueryParameter('ruleContexts', ruleContexts);
    }
  });

  var QueryRuleContext = connectQueryRules(function QueryRuleContext() {
    return null;
  }, {
    $$widgetType: 'ais.queryRuleContext'
  });

  function getIndexContext(props) {
    return {
      targetedIndex: props.indexId
    };
  }
  /**
   * The component that allows you to apply widgets to a dedicated index. It's
   * useful if you want to build an interface that targets multiple indices.
   *
   * @example
   * import React from 'react';
   * import algoliasearch from 'algoliasearch/lite';
   * import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
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
   *     <SearchBox />
   *     <Index indexName="instant_search">
   *       <Hits />
   *     </Index>
   *     <Index indexName="bestbuy">
   *       <Hits />
   *     </Index>
   *   </InstantSearch>
   * );
   */
  var Index = /*#__PURE__*/function (_Component) {
    _inherits(Index, _Component);
    var _super = _createSuper(Index);
    function Index(props) {
      var _this;
      _classCallCheck(this, Index);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "state", {
        indexContext: getIndexContext(_this.props)
      });
      _defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);
      _this.props.contextValue.onSearchParameters(_this.getSearchParameters.bind(_assertThisInitialized(_this)), {
        ais: _this.props.contextValue,
        multiIndexContext: _this.state.indexContext
      }, _this.props, undefined, Index.displayName);
      return _this;
    }
    _createClass(Index, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.indexName !== prevProps.indexName) {
          this.props.contextValue.widgetsManager.update();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (typeof this.unregisterWidget === 'function') {
          this.unregisterWidget();
        }
      }
    }, {
      key: "getSearchParameters",
      value: function getSearchParameters(searchParameters, props) {
        return searchParameters.setIndex(this.props ? this.props.indexName : props.indexName);
      }
    }, {
      key: "render",
      value: function render() {
        var childrenCount = React.Children.count(this.props.children);
        if (childrenCount === 0) {
          return null;
        }
        return /*#__PURE__*/React__default.createElement(IndexProvider, {
          value: this.state.indexContext
        }, this.props.children);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props) {
        return {
          indexContext: getIndexContext(props)
        };
      }
    }]);
    return Index;
  }(React.Component);
  _defineProperty(Index, "displayName", 'AlgoliaIndex');
  _defineProperty(Index, "$$type", 'ais.index');
  _defineProperty(Index, "$$widgetType", 'ais.index');
  var IndexWrapper = function IndexWrapper(props) {
    var inferredIndexId = props.indexName;
    return /*#__PURE__*/React__default.createElement(InstantSearchConsumer, null, function (contextValue) {
      return /*#__PURE__*/React__default.createElement(Index, _extends({
        contextValue: contextValue,
        indexId: inferredIndexId
      }, props));
    });
  };

  function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    return {
      getState: function getState() {
        return state;
      },
      setState: function setState(nextState) {
        state = nextState;
        listeners.forEach(function (listener) {
          return listener();
        });
      },
      subscribe: function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
          listeners.splice(listeners.indexOf(listener), 1);
        };
      }
    };
  }

  function createWidgetsManager(onWidgetsUpdate) {
    var widgets = [];
    // Is an update scheduled?
    var scheduled = false;

    // The state manager's updates need to be batched since more than one
    // component can register or unregister widgets during the same tick.
    function scheduleUpdate() {
      if (scheduled) {
        return;
      }
      scheduled = true;
      defer(function () {
        scheduled = false;
        onWidgetsUpdate();
      });
    }
    return {
      registerWidget: function registerWidget(widget) {
        widgets.push(widget);
        scheduleUpdate();
        return function unregisterWidget() {
          widgets.splice(widgets.indexOf(widget), 1);
          scheduleUpdate();
        };
      },
      update: scheduleUpdate,
      getWidgets: function getWidgets() {
        return widgets;
      }
    };
  }

  var _excluded$2 = ["resultsFacetValues"],
    _excluded2$1 = ["resultsFacetValues"],
    _excluded3 = ["resultsFacetValues"];
  function addAlgoliaAgents(searchClient) {
    if (typeof searchClient.addAlgoliaAgent === 'function') {
      searchClient.addAlgoliaAgent("react (".concat(React.version, ")"));
      searchClient.addAlgoliaAgent("react-instantsearch (".concat(version, ")"));
    }
  }
  var isMultiIndexContext = function isMultiIndexContext(widget) {
    return hasMultipleIndices({
      ais: widget.props.contextValue,
      multiIndexContext: widget.props.indexContextValue
    });
  };
  var isTargetedIndexEqualIndex = function isTargetedIndexEqualIndex(widget, indexId) {
    return widget.props.indexContextValue.targetedIndex === indexId;
  };

  // Relying on the `indexId` is a bit brittle to detect the `Index` widget.
  // Since it's a class we could rely on `instanceof` or similar. We never
  // had an issue though. Works for now.
  var isIndexWidget = function isIndexWidget(widget) {
    return Boolean(widget.props.indexId);
  };
  var isIndexWidgetEqualIndex = function isIndexWidgetEqualIndex(widget, indexId) {
    return widget.props.indexId === indexId;
  };
  var sortIndexWidgetsFirst = function sortIndexWidgetsFirst(firstWidget, secondWidget) {
    var isFirstWidgetIndex = isIndexWidget(firstWidget);
    var isSecondWidgetIndex = isIndexWidget(secondWidget);
    if (isFirstWidgetIndex && !isSecondWidgetIndex) {
      return -1;
    }
    if (!isFirstWidgetIndex && isSecondWidgetIndex) {
      return 1;
    }
    return 0;
  };

  // This function is copied from the algoliasearch v4 API Client. If modified,
  // consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.
  function serializeQueryParameters(parameters) {
    var isObjectOrArray = function isObjectOrArray(value) {
      return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
    };
    var encode = function encode(format) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var i = 0;
      return format.replace(/%s/g, function () {
        return encodeURIComponent(args[i++]);
      });
    };
    return Object.keys(parameters).map(function (key) {
      return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
    }).join('&');
  }

  /**
   * Creates a new instance of the InstantSearchManager which controls the widgets and
   * trigger the search when the widgets are updated.
   * @param {string} indexName - the main index name
   * @param {object} initialState - initial widget state
   * @param {object} SearchParameters - optional additional parameters to send to the algolia API
   * @param {number} stalledSearchDelay - time (in ms) after the search is stalled
   * @return {InstantSearchManager} a new instance of InstantSearchManager
   */
  function createInstantSearchManager(_ref) {
    var indexName = _ref.indexName,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      searchClient = _ref.searchClient,
      resultsState = _ref.resultsState,
      stalledSearchDelay = _ref.stalledSearchDelay;
    var helper = algoliasearchHelper_1(searchClient, indexName, _objectSpread2({}, HIGHLIGHT_TAGS));
    addAlgoliaAgents(searchClient);
    helper.on('search', handleNewSearch).on('result', handleSearchSuccess({
      indexId: indexName
    })).on('error', handleSearchError);
    var skip = false;
    var stalledSearchTimer = null;
    var initialSearchParameters = helper.state;
    var searchCounter;
    var widgetsManager = createWidgetsManager(onWidgetsUpdate);
    hydrateSearchClient(searchClient, resultsState);
    var store = createStore({
      widgets: initialState,
      metadata: hydrateMetadata(resultsState),
      results: hydrateResultsState(resultsState),
      error: null,
      searching: false,
      isSearchStalled: true,
      searchingForFacetValues: false
    });
    function skipSearch() {
      skip = true;
    }
    function updateClient(client) {
      addAlgoliaAgents(client);
      helper.setClient(client);
      search();
    }
    function clearCache() {
      helper.clearCache();
      search();
    }
    function getMetadata(state) {
      return widgetsManager.getWidgets().filter(function (widget) {
        return Boolean(widget.getMetadata);
      }).map(function (widget) {
        return widget.getMetadata(state);
      });
    }
    function getSearchParameters() {
      var sharedParameters = widgetsManager.getWidgets().filter(function (widget) {
        return Boolean(widget.getSearchParameters);
      }).filter(function (widget) {
        return !isMultiIndexContext(widget) && !isIndexWidget(widget);
      }).reduce(function (res, widget) {
        return widget.getSearchParameters(res);
      }, initialSearchParameters);
      var mainParameters = widgetsManager.getWidgets().filter(function (widget) {
        return Boolean(widget.getSearchParameters);
      }).filter(function (widget) {
        var targetedIndexEqualMainIndex = isMultiIndexContext(widget) && isTargetedIndexEqualIndex(widget, indexName);
        var subIndexEqualMainIndex = isIndexWidget(widget) && isIndexWidgetEqualIndex(widget, indexName);
        return targetedIndexEqualMainIndex || subIndexEqualMainIndex;
      })
      // We have to sort the `Index` widgets first so the `index` parameter
      // is correctly set in the `reduce` function for the following widgets
      .sort(sortIndexWidgetsFirst).reduce(function (res, widget) {
        return widget.getSearchParameters(res);
      }, sharedParameters);
      var derivedIndices = widgetsManager.getWidgets().filter(function (widget) {
        return Boolean(widget.getSearchParameters);
      }).filter(function (widget) {
        var targetedIndexNotEqualMainIndex = isMultiIndexContext(widget) && !isTargetedIndexEqualIndex(widget, indexName);
        var subIndexNotEqualMainIndex = isIndexWidget(widget) && !isIndexWidgetEqualIndex(widget, indexName);
        return targetedIndexNotEqualMainIndex || subIndexNotEqualMainIndex;
      })
      // We have to sort the `Index` widgets first so the `index` parameter
      // is correctly set in the `reduce` function for the following widgets
      .sort(sortIndexWidgetsFirst).reduce(function (indices, widget) {
        var indexId = isMultiIndexContext(widget) ? widget.props.indexContextValue.targetedIndex : widget.props.indexId;
        var widgets = indices[indexId] || [];
        return _objectSpread2(_objectSpread2({}, indices), {}, _defineProperty({}, indexId, widgets.concat(widget)));
      }, {});
      var derivedParameters = Object.keys(derivedIndices).map(function (indexId) {
        return {
          parameters: derivedIndices[indexId].reduce(function (res, widget) {
            return widget.getSearchParameters(res);
          }, sharedParameters),
          indexId: indexId
        };
      });
      return {
        mainParameters: mainParameters,
        derivedParameters: derivedParameters
      };
    }
    function search() {
      if (!skip) {
        var _getSearchParameters = getSearchParameters(),
          mainParameters = _getSearchParameters.mainParameters,
          derivedParameters = _getSearchParameters.derivedParameters;
        searchCounter = derivedParameters.length + 1;

        // We have to call `slice` because the method `detach` on the derived
        // helpers mutates the value `derivedHelpers`. The `forEach` loop does
        // not iterate on each value and we're not able to correctly clear the
        // previous derived helpers (memory leak + useless requests).
        helper.derivedHelpers.slice().forEach(function (derivedHelper) {
          // Since we detach the derived helpers on **every** new search they
          // won't receive intermediate results in case of a stalled search.
          // Only the last result is dispatched by the derived helper because
          // they are not detached yet:
          //
          // - a -> main helper receives results
          // - ap -> main helper receives results
          // - app -> main helper + derived helpers receive results
          //
          // The quick fix is to avoid to detach them on search but only once they
          // received the results. But it means that in case of a stalled search
          // all the derived helpers not detached yet register a new search inside
          // the helper. The number grows fast in case of a bad network and it's
          // not deterministic.
          derivedHelper.detach();
        });
        derivedParameters.forEach(function (_ref2) {
          var indexId = _ref2.indexId,
            parameters = _ref2.parameters;
          var derivedHelper = helper.derive(function () {
            return parameters;
          });
          derivedHelper.on('result', handleSearchSuccess({
            indexId: indexId
          })).on('error', handleSearchError);
        });
        helper.setState(mainParameters);
        helper.search();
      }
    }
    function handleSearchSuccess(_ref3) {
      var indexId = _ref3.indexId;
      return function (event) {
        searchCounter--;
        var state = store.getState();
        var isDerivedHelpersEmpty = !helper.derivedHelpers.length;
        var results = state.results ? state.results : {};

        // Switching from mono index to multi index and vice versa must reset the
        // results to an empty object, otherwise we keep reference of stalled and
        // unused results.
        results = !isDerivedHelpersEmpty && results.getFacetByName ? {} : results;
        if (!isDerivedHelpersEmpty) {
          results = _objectSpread2(_objectSpread2({}, results), {}, _defineProperty({}, indexId, event.results));
        } else {
          results = event.results;
        }
        var currentState = store.getState();
        var nextIsSearchStalled = currentState.isSearchStalled;
        if (!helper.hasPendingRequests()) {
          clearTimeout(stalledSearchTimer);
          stalledSearchTimer = null;
          nextIsSearchStalled = false;
        }
        var resultsFacetValues = currentState.resultsFacetValues,
          partialState = _objectWithoutProperties(currentState, _excluded$2);
        store.setState(_objectSpread2(_objectSpread2({}, partialState), {}, {
          results: results,
          isSearchStalled: nextIsSearchStalled,
          searching: searchCounter > 0,
          error: null
        }));
      };
    }
    function handleSearchError(_ref4) {
      var error = _ref4.error;
      var currentState = store.getState();
      var nextIsSearchStalled = currentState.isSearchStalled;
      if (!helper.hasPendingRequests()) {
        clearTimeout(stalledSearchTimer);
        nextIsSearchStalled = false;
      }
      var resultsFacetValues = currentState.resultsFacetValues,
        partialState = _objectWithoutProperties(currentState, _excluded2$1);
      store.setState(_objectSpread2(_objectSpread2({}, partialState), {}, {
        isSearchStalled: nextIsSearchStalled,
        error: error,
        searching: false
      }));
    }
    function handleNewSearch() {
      if (!stalledSearchTimer) {
        stalledSearchTimer = setTimeout(function () {
          var _store$getState = store.getState(),
            resultsFacetValues = _store$getState.resultsFacetValues,
            partialState = _objectWithoutProperties(_store$getState, _excluded3);
          store.setState(_objectSpread2(_objectSpread2({}, partialState), {}, {
            isSearchStalled: true
          }));
        }, stalledSearchDelay);
      }
    }
    function hydrateSearchClient(client, results) {
      if (!results) {
        return;
      }

      // Disable cache hydration on:
      // - Algoliasearch API Client < v4 with cache disabled
      // - Third party clients (detected by the `addAlgoliaAgent` function missing)

      if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
        return;
      }

      // Algoliasearch API Client >= v4
      // To hydrate the client we need to populate the cache with the data from
      // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
      // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
      // for us to compute the key the same way as `algoliasearch-client` we need
      // to populate it on a custom key and override the `search` method to
      // search on it first.
      if (client.transporter && !client._cacheHydrated) {
        client._cacheHydrated = true;
        var baseMethod = client.search;
        client.search = function (requests) {
          for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            methodArgs[_key2 - 1] = arguments[_key2];
          }
          var requestsWithSerializedParams = requests.map(function (request) {
            return _objectSpread2(_objectSpread2({}, request), {}, {
              params: serializeQueryParameters(request.params)
            });
          });
          return client.transporter.responsesCache.get({
            method: 'search',
            args: [requestsWithSerializedParams].concat(methodArgs)
          }, function () {
            return baseMethod.apply(void 0, [requests].concat(methodArgs));
          });
        };
      }
      if (Array.isArray(results.results)) {
        hydrateSearchClientWithMultiIndexRequest(client, results.results);
        return;
      }
      hydrateSearchClientWithSingleIndexRequest(client, results);
    }
    function hydrateSearchClientWithMultiIndexRequest(client, results) {
      // Algoliasearch API Client >= v4
      // Populate the cache with the data from the server
      if (client.transporter) {
        client.transporter.responsesCache.set({
          method: 'search',
          args: [results.reduce(function (acc, result) {
            return acc.concat(result.rawResults.map(function (request) {
              return {
                indexName: request.index,
                params: request.params
              };
            }));
          }, [])]
        }, {
          results: results.reduce(function (acc, result) {
            return acc.concat(result.rawResults);
          }, [])
        });
        return;
      }

      // Algoliasearch API Client < v4
      // Prior to client v4 we didn't have a proper API to hydrate the client
      // cache from the outside. The following code populates the cache with
      // a single-index result. You can find more information about the
      // computation of the key inside the client (see link below).
      // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
      var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
        requests: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          }));
        }, [])
      }));
      client.cache = _objectSpread2(_objectSpread2({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
        results: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults);
        }, [])
      })));
    }
    function hydrateSearchClientWithSingleIndexRequest(client, results) {
      // Algoliasearch API Client >= v4
      // Populate the cache with the data from the server
      if (client.transporter) {
        client.transporter.responsesCache.set({
          method: 'search',
          args: [results.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          })]
        }, {
          results: results.rawResults
        });
        return;
      }
      // Algoliasearch API Client < v4
      // Prior to client v4 we didn't have a proper API to hydrate the client
      // cache from the outside. The following code populates the cache with
      // a single-index result. You can find more information about the
      // computation of the key inside the client (see link below).
      // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
      var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
        requests: results.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        })
      }));
      client.cache = _objectSpread2(_objectSpread2({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
        results: results.rawResults
      })));
    }
    function hydrateResultsState(results) {
      if (!results) {
        return null;
      }
      if (Array.isArray(results.results)) {
        return results.results.reduce(function (acc, result) {
          return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, result._internalIndexId, new algoliasearchHelper_1.SearchResults(new algoliasearchHelper_1.SearchParameters(result.state), result.rawResults)));
        }, {});
      }
      return new algoliasearchHelper_1.SearchResults(new algoliasearchHelper_1.SearchParameters(results.state), results.rawResults);
    }

    // Called whenever a widget has been rendered with new props.
    function onWidgetsUpdate() {
      var metadata = getMetadata(store.getState().widgets);
      store.setState(_objectSpread2(_objectSpread2({}, store.getState()), {}, {
        metadata: metadata,
        searching: true
      }));

      // Since the `getSearchParameters` method of widgets also depends on props,
      // the result search parameters might have changed.
      search();
    }
    function transitionState(nextSearchState) {
      var searchState = store.getState().widgets;
      return widgetsManager.getWidgets().filter(function (widget) {
        return Boolean(widget.transitionState);
      }).reduce(function (res, widget) {
        return widget.transitionState(searchState, res);
      }, nextSearchState);
    }
    function onExternalStateUpdate(nextSearchState) {
      var metadata = getMetadata(nextSearchState);
      store.setState(_objectSpread2(_objectSpread2({}, store.getState()), {}, {
        widgets: nextSearchState,
        metadata: metadata,
        searching: true
      }));
      search();
    }
    function onSearchForFacetValues(_ref5) {
      var facetName = _ref5.facetName,
        query = _ref5.query,
        _ref5$maxFacetHits = _ref5.maxFacetHits,
        maxFacetHits = _ref5$maxFacetHits === void 0 ? 10 : _ref5$maxFacetHits;
      // The values 1, 100 are the min / max values that the engine accepts.
      // see: https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits
      var maxFacetHitsWithinRange = Math.max(1, Math.min(maxFacetHits, 100));
      store.setState(_objectSpread2(_objectSpread2({}, store.getState()), {}, {
        searchingForFacetValues: true
      }));
      helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
        var _objectSpread7;
        store.setState(_objectSpread2(_objectSpread2({}, store.getState()), {}, {
          error: null,
          searchingForFacetValues: false,
          resultsFacetValues: _objectSpread2(_objectSpread2({}, store.getState().resultsFacetValues), {}, (_objectSpread7 = {}, _defineProperty(_objectSpread7, facetName, content.facetHits), _defineProperty(_objectSpread7, "query", query), _objectSpread7))
        }));
      }, function (error) {
        store.setState(_objectSpread2(_objectSpread2({}, store.getState()), {}, {
          searchingForFacetValues: false,
          error: error
        }));
      }).catch(function (error) {
        // Since setState is synchronous, any error that occurs in the render of a
        // component will be swallowed by this promise.
        // This is a trick to make the error show up correctly in the console.
        // See http://stackoverflow.com/a/30741722/969302
        setTimeout(function () {
          throw error;
        });
      });
    }
    function updateIndex(newIndex) {
      initialSearchParameters = initialSearchParameters.setIndex(newIndex);
      // No need to trigger a new search here as the widgets will also update and trigger it if needed.
    }

    function getWidgetsIds() {
      return store.getState().metadata.reduce(function (res, meta) {
        return typeof meta.id !== 'undefined' ? res.concat(meta.id) : res;
      }, []);
    }
    return {
      store: store,
      widgetsManager: widgetsManager,
      getWidgetsIds: getWidgetsIds,
      getSearchParameters: getSearchParameters,
      onSearchForFacetValues: onSearchForFacetValues,
      onExternalStateUpdate: onExternalStateUpdate,
      transitionState: transitionState,
      updateClient: updateClient,
      updateIndex: updateIndex,
      clearCache: clearCache,
      skipSearch: skipSearch
    };
  }
  function hydrateMetadata(resultsState) {
    if (!resultsState) {
      return [];
    }

    // add a value noop, which gets replaced once the widgets are mounted
    return resultsState.metadata.map(function (datum) {
      return _objectSpread2(_objectSpread2({
        value: function value() {
          return {};
        }
      }, datum), {}, {
        items: datum.items && datum.items.map(function (item) {
          return _objectSpread2(_objectSpread2({
            value: function value() {
              return {};
            }
          }, item), {}, {
            items: item.items && item.items.map(function (nestedItem) {
              return _objectSpread2({
                value: function value() {
                  return {};
                }
              }, nestedItem);
            })
          });
        })
      });
    });
  }

  function isMetadataEnabled() {
    return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && _typeof(window.navigator) === 'object' && typeof window.navigator.userAgent === 'string' && window.navigator.userAgent.includes('Algolia Crawler') && _typeof(window.document) === 'object';
  }
  function getMetadataPayload(widgets, searchClient) {
    var internalProps = ['contextValue', 'indexContextValue'];
    var widgetsPayload = widgets.map(function (_ref) {
      var props = _ref.props,
        constructor = _ref.constructor;
      var _ref2 = constructor._connectorDesc || {},
        _ref2$defaultProps = _ref2.defaultProps,
        defaultProps = _ref2$defaultProps === void 0 ? {} : _ref2$defaultProps,
        _ref2$displayName = _ref2.displayName,
        displayName = _ref2$displayName === void 0 ? constructor.displayName : _ref2$displayName;
      return {
        displayName: displayName,
        $$type: constructor.$$type,
        $$widgetType: constructor.$$widgetType,
        params: Object.keys(props).filter(function (prop) {
          return !internalProps.includes(prop) && defaultProps[prop] !== props[prop] && props[prop] !== undefined;
        })
      };
    });
    var client = searchClient;
    var ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
    return {
      ua: ua,
      widgets: widgetsPayload
    };
  }
  function injectMetadata(widgets, searchClient) {
    var payloadContainer = document.createElement('meta');
    var refNode = document.querySelector('head');
    payloadContainer.name = 'algolia:metadata';
    var payload = getMetadataPayload(widgets, searchClient);
    payloadContainer.content = JSON.stringify(payload);
    refNode.appendChild(payloadContainer);
  }

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
      var instantSearchManager = createInstantSearchManager({
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
        if (isMetadataEnabled()) {
          injectMetadata(this.state.instantSearchManager.widgetsManager.getWidgets(), this.props.searchClient);
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
        if (React.Children.count(this.props.children) === 0) {
          return null;
        }
        return /*#__PURE__*/React__default.createElement(InstantSearchProvider, {
          value: this.state.contextValue
        }, this.props.children);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var nextIsControlled = isControlled(nextProps);
        var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
        var nextSearchState = nextProps.searchState;
        if (nextIsControlled && !reactFastCompare(previousSearchState, nextSearchState)) {
          prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
        }
        return {
          isControlled: nextIsControlled,
          contextValue: _objectSpread2(_objectSpread2({}, prevState.contextValue), {}, {
            mainTargetedIndex: nextProps.indexName
          })
        };
      }
    }]);
    return InstantSearch;
  }(React.Component);
  _defineProperty(InstantSearch, "defaultProps", {
    stalledSearchDelay: 200,
    refresh: false
  });

  var getId$2 = function getId() {
    return 'query';
  };
  function getCurrentRefinement(props, searchState, context) {
    var id = getId$2();
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');
    if (currentRefinement) {
      return currentRefinement;
    }
    return '';
  }
  function getHits(searchResults) {
    if (searchResults.results) {
      if (searchResults.results.hits && Array.isArray(searchResults.results.hits)) {
        return addAbsolutePositions(addQueryID(searchResults.results.hits, searchResults.results.queryID), searchResults.results.hitsPerPage, searchResults.results.page);
      } else {
        return Object.keys(searchResults.results).reduce(function (hits, index) {
          return [].concat(_toConsumableArray(hits), [{
            index: index,
            hits: addAbsolutePositions(addQueryID(searchResults.results[index].hits, searchResults.results[index].queryID), searchResults.results[index].hitsPerPage, searchResults.results[index].page)
          }]);
        }, []);
      }
    } else {
      return [];
    }
  }
  function _refine(props, searchState, nextRefinement, context) {
    var id = getId$2();
    var nextValue = _defineProperty({}, id, nextRefinement);
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage);
  }
  function _cleanUp(props, searchState, context) {
    return cleanUpValue(searchState, context, getId$2());
  }

  /**
   * connectAutoComplete connector provides the logic to create connected
   * components that will render the results retrieved from
   * Algolia.
   *
   * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
   * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
   * prop to a [Configure](guide/Search_parameters.html) widget.
   * @name connectAutoComplete
   * @kind connector
   * @propType {string} [defaultRefinement] - Provide a default value for the query
   * @providedPropType {array.<object>} hits - the records that matched the search state
   * @providedPropType {function} refine - a function to change the query
   * @providedPropType {string} currentRefinement - the query to search for
   */
  var connectAutoComplete = createConnectorWithContext({
    displayName: 'AlgoliaAutoComplete',
    $$type: 'ais.autoComplete',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      return {
        hits: getHits(searchResults),
        currentRefinement: getCurrentRefinement(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        })
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
      return searchParameters.setQuery(getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }));
    }
  });

  var getId$3 = function getId(props) {
    return props.attributes[0];
  };
  var namespace = 'hierarchicalMenu';
  function _refine$1(props, searchState, nextRefinement, context) {
    var id = getId$3(props);
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
          acc = acc.concat(transformValue(item.data));
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

  var connectBreadcrumb = createConnectorWithContext({
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
      transformItems: propTypes.func
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var id = getId$3(props);
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
      return _refine$1(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    }
  });

  /**
   * connectCurrentRefinements connector provides the logic to build a widget that will
   * give the user the ability to remove all or some of the filters that were
   * set.
   * @name connectCurrentRefinements
   * @kind connector
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @propType {function} [clearsQuery=false] - Pass true to also clear the search query
   * @providedPropType {function} refine - a function to remove a single filter
   * @providedPropType {array.<{label: string, attribute: string, currentRefinement: string || object, items: array, value: function}>} items - all the filters, the `value` is to pass to the `refine` function for removing all currentrefinements, `label` is for the display. When existing several refinements for the same atribute name, then you get a nested `items` object that contains a `label` and a `value` function to use to remove a single filter. `attribute` and `currentRefinement` are metadata containing row values.
   * @providedPropType {string} query - the search query
   */
  var connectCurrentRefinements = createConnectorWithContext({
    displayName: 'AlgoliaCurrentRefinements',
    $$type: 'ais.currentRefinements',
    propTypes: {
      transformItems: propTypes.func
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults, metadata) {
      var items = metadata.reduce(function (res, meta) {
        if (typeof meta.items !== 'undefined') {
          if (!props.clearsQuery && meta.id === 'query') {
            return res;
          } else {
            if (props.clearsQuery && meta.id === 'query' && meta.items[0].currentRefinement === '') {
              return res;
            }
            return res.concat(meta.items.map(function (item) {
              return _objectSpread2(_objectSpread2({}, item), {}, {
                id: meta.id,
                index: meta.index
              });
            }));
          }
        }
        return res;
      }, []);
      var transformedItems = props.transformItems ? props.transformItems(items) : items;
      return {
        items: transformedItems,
        canRefine: transformedItems.length > 0
      };
    },
    refine: function refine(props, searchState, items) {
      // `value` corresponds to our internal clear function computed in each connector metadata.
      var refinementsToClear = items instanceof Array ? items.map(function (item) {
        return item.value;
      }) : [items];
      return refinementsToClear.reduce(function (res, clear) {
        return clear(res);
      }, searchState);
    }
  });

  var _excluded$3 = ["defaultRefinement"];

  /**
   * The GeoSearch connector provides the logic to build a widget that will display the results on a map.
   * It also provides a way to search for results based on their position. The connector provides function to manage the search experience (search on map interaction).
   * @name connectGeoSearch
   * @kind connector
   * @requirements Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia.
   * Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function. Currently, the feature is not compatible with multiple values in the `_geoloc` attribute
   * (e.g. a restaurant with multiple locations). In that case you can duplicate your records and use the [distinct](https://www.algolia.com/doc/guides/ranking/distinct) feature of Algolia to only retrieve unique results.
   * @propType {{ northEast: { lat: number, lng: number }, southWest: { lat: number, lng: number } }} [defaultRefinement] - Default search state of the widget containing the bounds for the map
   * @providedPropType {function({ northEast: { lat: number, lng: number }, southWest: { lat: number, lng: number } })} refine - a function to toggle the refinement
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {array.<object>} hits - the records that matched the search
   * @providedPropType {boolean} isRefinedWithMap - true if the current refinement is set with the map bounds
   * @providedPropType {{ northEast: { lat: number, lng: number }, southWest: { lat: number, lng: number } }} [currentRefinement] - the refinement currently applied
   * @providedPropType {{ lat: number, lng: number }} [position] - the position of the search
   */

  // To control the map with an external widget the other widget
  // **must** write the value in the attribute `aroundLatLng`
  var getBoundingBoxId = function getBoundingBoxId() {
    return 'boundingBox';
  };
  var getAroundLatLngId = function getAroundLatLngId() {
    return 'aroundLatLng';
  };
  var getConfigureAroundLatLngId = function getConfigureAroundLatLngId() {
    return 'configure.aroundLatLng';
  };
  var currentRefinementToString = function currentRefinementToString(currentRefinement) {
    return [currentRefinement.northEast.lat, currentRefinement.northEast.lng, currentRefinement.southWest.lat, currentRefinement.southWest.lng].join();
  };
  var stringToCurrentRefinement = function stringToCurrentRefinement(value) {
    var values = value.split(',');
    return {
      northEast: {
        lat: parseFloat(values[0]),
        lng: parseFloat(values[1])
      },
      southWest: {
        lat: parseFloat(values[2]),
        lng: parseFloat(values[3])
      }
    };
  };
  var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
  var stringToPosition = function stringToPosition(value) {
    var pattern = value.match(latLngRegExp);
    return {
      lat: parseFloat(pattern[1]),
      lng: parseFloat(pattern[2])
    };
  };
  var getCurrentRefinement$1 = function getCurrentRefinement(props, searchState, context) {
    var refinement = getCurrentRefinementValue(props, searchState, context, getBoundingBoxId(), {});
    if (!objectHasKeys(refinement)) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return {
      northEast: {
        lat: parseFloat(refinement.northEast.lat),
        lng: parseFloat(refinement.northEast.lng)
      },
      southWest: {
        lat: parseFloat(refinement.southWest.lat),
        lng: parseFloat(refinement.southWest.lng)
      }
    };
  };
  var getCurrentPosition = function getCurrentPosition(props, searchState, context) {
    var defaultRefinement = props.defaultRefinement,
      propsWithoutDefaultRefinement = _objectWithoutProperties(props, _excluded$3);
    var aroundLatLng = getCurrentRefinementValue(propsWithoutDefaultRefinement, searchState, context, getAroundLatLngId());
    if (!aroundLatLng) {
      // Fallback on `configure.aroundLatLng`
      var configureAroundLatLng = getCurrentRefinementValue(propsWithoutDefaultRefinement, searchState, context, getConfigureAroundLatLngId());
      return configureAroundLatLng && stringToPosition(configureAroundLatLng);
    }
    return aroundLatLng;
  };
  var _refine$2 = function refine(searchState, nextValue, context) {
    var resetPage = true;
    var nextRefinement = _defineProperty({}, getBoundingBoxId(), nextValue);
    return refineValue(searchState, nextRefinement, context, resetPage);
  };
  var connectGeoSearch = createConnectorWithContext({
    displayName: 'AlgoliaGeoSearch',
    $$type: 'ais.geoSearch',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var context = {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      };
      var results = getResults(searchResults, context);

      // We read it from both because the SearchParameters & the searchState are not always
      // in sync. When we set the refinement the searchState is used but when we clear the refinement
      // the SearchParameters is used. In the first case when we render, the results are not there
      // so we can't find the value from the results. The most up to date value is the searchState.
      // But when we clear the refinement the searchState is immediately cleared even when the items
      // retrieved are still the one from the previous query with the bounding box. It leads to some
      // issue with the position of the map. We should rely on 1 source of truth or at least always
      // be sync.

      var currentRefinementFromSearchState = getCurrentRefinement$1(props, searchState, context);
      var currentRefinementFromSearchParameters = results && results._state.insideBoundingBox && stringToCurrentRefinement(results._state.insideBoundingBox) || undefined;
      var currentPositionFromSearchState = getCurrentPosition(props, searchState, context);
      var currentPositionFromSearchParameters = results && results._state.aroundLatLng && stringToPosition(results._state.aroundLatLng) || undefined;
      var currentRefinement = currentRefinementFromSearchState || currentRefinementFromSearchParameters;
      var position = currentPositionFromSearchState || currentPositionFromSearchParameters;
      return {
        hits: !results ? [] : results.hits.filter(function (_) {
          return Boolean(_._geoloc);
        }),
        isRefinedWithMap: Boolean(currentRefinement),
        currentRefinement: currentRefinement,
        position: position
      };
    },
    refine: function refine(props, searchState, nextValue) {
      return _refine$2(searchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var currentRefinement = getCurrentRefinement$1(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (!currentRefinement) {
        return searchParameters;
      }
      return searchParameters.setQueryParameter('insideBoundingBox', currentRefinementToString(currentRefinement));
    },
    cleanUp: function cleanUp(props, searchState) {
      return cleanUpValue(searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, getBoundingBoxId());
    },
    getMetadata: function getMetadata(props, searchState) {
      var items = [];
      var id = getBoundingBoxId();
      var context = {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      };
      var index = getIndexId(context);
      var nextRefinement = {};
      var currentRefinement = getCurrentRefinement$1(props, searchState, context);
      if (currentRefinement) {
        items.push({
          label: "".concat(id, ": ").concat(currentRefinementToString(currentRefinement)),
          value: function value(nextState) {
            return _refine$2(nextState, nextRefinement, context);
          },
          currentRefinement: currentRefinement
        });
      }
      return {
        id: id,
        index: index,
        items: items
      };
    },
    shouldComponentUpdate: function shouldComponentUpdate() {
      return true;
    }
  });

  var getId$4 = function getId(props) {
    return props.attributes[0];
  };
  var namespace$1 = 'hierarchicalMenu';
  function getCurrentRefinement$2(props, searchState, context) {
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace$1, ".").concat(getId$4(props)), null);
    if (currentRefinement === '') {
      return null;
    }
    return currentRefinement;
  }
  function getValue(value, props, searchState, context) {
    var id = props.id,
      attributes = props.attributes,
      separator = props.separator,
      rootPath = props.rootPath,
      showParentLevel = props.showParentLevel;
    var currentRefinement = getCurrentRefinement$2(props, searchState, context);
    var nextRefinement;
    if (currentRefinement === null) {
      nextRefinement = value;
    } else {
      var tmpSearchParameters = new algoliasearchHelper_1.SearchParameters({
        hierarchicalFacets: [{
          name: id,
          attributes: attributes,
          separator: separator,
          rootPath: rootPath,
          showParentLevel: showParentLevel
        }]
      });
      nextRefinement = tmpSearchParameters.toggleHierarchicalFacetRefinement(id, currentRefinement).toggleHierarchicalFacetRefinement(id, value).getHierarchicalRefinement(id)[0];
    }
    return nextRefinement;
  }
  function transformValue$1(value, props, searchState, context) {
    return value.map(function (v) {
      return {
        label: v.name,
        value: getValue(v.escapedValue, props, searchState, context),
        count: v.count,
        isRefined: v.isRefined,
        items: v.data && transformValue$1(v.data, props, searchState, context)
      };
    });
  }
  var truncate = function truncate() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return items.slice(0, limit).map(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Array.isArray(item.items) ? _objectSpread2(_objectSpread2({}, item), {}, {
        items: truncate(item.items, limit)
      }) : item;
    });
  };
  function _refine$3(props, searchState, nextRefinement, context) {
    var id = getId$4(props);
    var nextValue = _defineProperty({}, id, nextRefinement || '');
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage, namespace$1);
  }
  function _cleanUp$1(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$1, ".").concat(getId$4(props)));
  }
  var sortBy = ['name:asc'];

  /**
   * connectHierarchicalMenu connector provides the logic to build a widget that will
   * give the user the ability to explore a tree-like structure.
   * This is commonly used for multi-level categorization of products on e-commerce
   * websites. From a UX point of view, we suggest not displaying more than two levels deep.
   * @name connectHierarchicalMenu
   * @requirements To use this widget, your attributes must be formatted in a specific way.
   * If you want for example to have a hierarchical menu of categories, objects in your index
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
   * @propType {string} [defaultRefinement] - the item value selected by default
   * @propType {boolean} [showMore=false] - Flag to activate the show more button, for toggling the number of items between limit and showMoreLimit.
   * @propType {number} [limit=10] -  The maximum number of items displayed.
   * @propType {number} [showMoreLimit=20] -  The maximum number of items displayed when the user triggers the show more. Not considered if `showMore` is false.
   * @propType {string} [separator='>'] -  Specifies the level separator used in the data.
   * @propType {string} [rootPath=null] - The path to use if the first level is not the root level.
   * @propType {boolean} [showParentLevel=true] - Flag to set if the parent level should be displayed.
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @providedPropType {function} refine - a function to toggle a refinement
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string} currentRefinement - the refinement currently applied
   * @providedPropType {array.<{items: object, count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the HierarchicalMenu can display. items has the same shape as parent items.
   */
  var connectHierarchicalMenu = createConnectorWithContext({
    displayName: 'AlgoliaHierarchicalMenu',
    $$type: 'ais.hierarchicalMenu',
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
      separator: propTypes.string,
      rootPath: propTypes.string,
      showParentLevel: propTypes.bool,
      defaultRefinement: propTypes.string,
      showMore: propTypes.bool,
      limit: propTypes.number,
      showMoreLimit: propTypes.number,
      transformItems: propTypes.func,
      facetOrdering: propTypes.bool
    },
    defaultProps: {
      showMore: false,
      limit: 10,
      showMoreLimit: 20,
      separator: ' > ',
      rootPath: null,
      showParentLevel: true,
      facetOrdering: true
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var showMore = props.showMore,
        limit = props.limit,
        showMoreLimit = props.showMoreLimit,
        facetOrdering = props.facetOrdering;
      var id = getId$4(props);
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var isFacetPresent = Boolean(results) && Boolean(results.getFacetByName(id));
      if (!isFacetPresent) {
        return {
          items: [],
          currentRefinement: getCurrentRefinement$2(props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          canRefine: false
        };
      }
      var itemsLimit = showMore ? showMoreLimit : limit;
      var value = results.getFacetValues(id, {
        sortBy: sortBy,
        facetOrdering: facetOrdering
      });
      var items = value.data ? transformValue$1(value.data, props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }) : [];
      var transformedItems = props.transformItems ? props.transformItems(items) : items;
      return {
        items: truncate(transformedItems, itemsLimit),
        currentRefinement: getCurrentRefinement$2(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        canRefine: transformedItems.length > 0
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$3(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$1(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var attributes = props.attributes,
        separator = props.separator,
        rootPath = props.rootPath,
        showParentLevel = props.showParentLevel,
        showMore = props.showMore,
        limit = props.limit,
        showMoreLimit = props.showMoreLimit,
        contextValue = props.contextValue;
      var id = getId$4(props);
      var itemsLimit = showMore ? showMoreLimit : limit;
      searchParameters = searchParameters.addHierarchicalFacet({
        name: id,
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        showParentLevel: showParentLevel
      }).setQueryParameters({
        maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, itemsLimit)
      });
      var currentRefinement = getCurrentRefinement$2(props, searchState, {
        ais: contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (currentRefinement !== null) {
        searchParameters = searchParameters.toggleHierarchicalFacetRefinement(id, currentRefinement);
      }
      return searchParameters;
    },
    getMetadata: function getMetadata(props, searchState) {
      var rootAttribute = props.attributes[0];
      var id = getId$4(props);
      var currentRefinement = getCurrentRefinement$2(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = !currentRefinement ? [] : [{
        label: "".concat(rootAttribute, ": ").concat(unescapeFacetValue(currentRefinement)),
        attribute: rootAttribute,
        value: function value(nextState) {
          return _refine$3(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }];
      return {
        id: id,
        index: getIndexId({
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        items: items
      };
    }
  });

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
  var connectHighlight = createConnectorWithContext({
    displayName: 'AlgoliaHighlighter',
    $$type: 'ais.highlighter',
    propTypes: {},
    getProvidedProps: function getProvidedProps() {
      return {
        highlight: highlight
      };
    }
  });

  /**
   * connectHits connector provides the logic to create connected
   * components that will render the results retrieved from
   * Algolia.
   *
   * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
   * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
   * prop to a [Configure](guide/Search_parameters.html) widget.
   *
   * **Warning:** you will need to use the **objectID** property available on every hit as a key
   * when iterating over them. This will ensure you have the best possible UI experience
   * especially on slow networks.
   * @name connectHits
   * @kind connector
   * @providedPropType {array.<object>} hits - the records that matched the search state
   * @example
   * import React from 'react';
   * import algoliasearch from 'algoliasearch/lite';
   * import { InstantSearch, Highlight, connectHits } from 'react-instantsearch-dom';
   *
   * const searchClient = algoliasearch(
   *   'latency',
   *   '6be0576ff61c053d5f9a3225e2a90f76'
   * );
   * const CustomHits = connectHits(({ hits }) => (
   *   <div>
   *     {hits.map(hit =>
   *       <p key={hit.objectID}>
   *         <Highlight attribute="name" hit={hit} />
   *       </p>
   *     )}
   *   </div>
   * ));
   *
   * const App = () => (
   *   <InstantSearch
   *     searchClient={searchClient}
   *     indexName="instant_search"
   *   >
   *     <CustomHits />
   *   </InstantSearch>
   * );
   */
  var connectHits = createConnectorWithContext({
    displayName: 'AlgoliaHits',
    $$type: 'ais.hits',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (!results) {
        return {
          hits: []
        };
      }
      var hitsWithPositions = addAbsolutePositions(results.hits, results.hitsPerPage, results.page);
      var hitsWithPositionsAndQueryID = addQueryID(hitsWithPositions, results.queryID);
      return {
        hits: hitsWithPositionsAndQueryID
      };
    },
    /*
     * Hits needs to be considered as a widget to trigger a search,
     * even if no other widgets are used.
     *
     * To be considered as a widget you need either:
     * - getSearchParameters
     * - getMetadata
     * - transitionState
     *
     * See: createConnector.tsx
     */
    getSearchParameters: function getSearchParameters(searchParameters) {
      return searchParameters;
    }
  });

  function getId$5() {
    return 'hitsPerPage';
  }
  function getCurrentRefinement$3(props, searchState, context) {
    var id = getId$5();
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, null);
    if (typeof currentRefinement === 'string') {
      return parseInt(currentRefinement, 10);
    }
    return currentRefinement;
  }

  /**
   * connectHitsPerPage connector provides the logic to create connected
   * components that will allow a user to choose to display more or less results from Algolia.
   * @name connectHitsPerPage
   * @kind connector
   * @propType {number} defaultRefinement - The number of items selected by default
   * @propType {{value: number, label: string}[]} items - List of hits per page options.
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @providedPropType {function} refine - a function to remove a single filter
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string} currentRefinement - the refinement currently applied
   * @providedPropType {array.<{isRefined: boolean, label?: string, value: number}>} items - the list of items the HitsPerPage can display. If no label provided, the value will be displayed.
   */
  var connectHitsPerPage = createConnectorWithContext({
    displayName: 'AlgoliaHitsPerPage',
    $$type: 'ais.hitsPerPage',
    propTypes: {
      defaultRefinement: propTypes.number.isRequired,
      items: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string,
        value: propTypes.number.isRequired
      })).isRequired,
      transformItems: propTypes.func
    },
    getProvidedProps: function getProvidedProps(props, searchState) {
      var currentRefinement = getCurrentRefinement$3(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = props.items.map(function (item) {
        return item.value === currentRefinement ? _objectSpread2(_objectSpread2({}, item), {}, {
          isRefined: true
        }) : _objectSpread2(_objectSpread2({}, item), {}, {
          isRefined: false
        });
      });
      return {
        items: props.transformItems ? props.transformItems(items) : items,
        currentRefinement: currentRefinement
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      var id = getId$5();
      var nextValue = _defineProperty({}, id, nextRefinement);
      var resetPage = true;
      return refineValue(searchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, resetPage);
    },
    cleanUp: function cleanUp(props, searchState) {
      return cleanUpValue(searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, getId$5());
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      return searchParameters.setHitsPerPage(getCurrentRefinement$3(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }));
    },
    getMetadata: function getMetadata() {
      return {
        id: getId$5()
      };
    }
  });

  var _excluded$4 = ["page"];
  function getId$6() {
    return 'page';
  }
  function getCurrentRefinement$4(props, searchState, context) {
    var id = getId$6();
    var page = 1;
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, page);
    if (typeof currentRefinement === 'string') {
      return parseInt(currentRefinement, 10);
    }
    return currentRefinement;
  }
  function getStateWithoutPage(state) {
    var _ref = state || {},
      page = _ref.page,
      rest = _objectWithoutProperties(_ref, _excluded$4);
    return rest;
  }
  function getInMemoryCache() {
    var cachedHits = undefined;
    var cachedState = undefined;
    return {
      read: function read(_ref2) {
        var state = _ref2.state;
        return reactFastCompare(cachedState, getStateWithoutPage(state)) ? cachedHits : null;
      },
      write: function write(_ref3) {
        var state = _ref3.state,
          hits = _ref3.hits;
        cachedState = getStateWithoutPage(state);
        cachedHits = hits;
      }
    };
  }
  function extractHitsFromCachedHits(cachedHits) {
    return Object.keys(cachedHits).map(Number).sort(function (a, b) {
      return a - b;
    }).reduce(function (acc, page) {
      return acc.concat(cachedHits[page]);
    }, []);
  }

  /**
   * InfiniteHits connector provides the logic to create connected
   * components that will render an continuous list of results retrieved from
   * Algolia. This connector provides a function to load more results.
   * @name connectInfiniteHits
   * @kind connector
   * @providedPropType {array.<object>} hits - the records that matched the search state
   * @providedPropType {boolean} hasMore - indicates if there are more pages to load
   * @providedPropType {function} refine - call to load more results
   */
  var connectInfiniteHits = createConnectorWithContext({
    displayName: 'AlgoliaInfiniteHits',
    $$type: 'ais.infiniteHits',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var _this = this;
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (!results) {
        return {
          hits: [],
          hasPrevious: false,
          hasMore: false,
          refine: function refine() {},
          refinePrevious: function refinePrevious() {},
          refineNext: function refineNext() {}
        };
      }
      var page = results.page,
        hits = results.hits,
        hitsPerPage = results.hitsPerPage,
        nbPages = results.nbPages,
        state = results._state;
      this._cache = props.cache ? props.cache : this._cache || getInMemoryCache();
      var cachedHits = this._cache.read({
        state: state
      }) || {};
      var hitsWithPositions = addAbsolutePositions(hits, hitsPerPage, page);
      var hitsWithPositionsAndQueryID = addQueryID(hitsWithPositions, results.queryID);
      cachedHits[page] = hitsWithPositionsAndQueryID;
      this._cache.write({
        state: state,
        hits: cachedHits
      });

      /*
        Math.min() and Math.max() returns Infinity or -Infinity when no argument is given.
        But there is always something in this point because of `cachedHits[page]`.
      */
      var firstReceivedPage = Math.min.apply(Math, _toConsumableArray(Object.keys(cachedHits).map(Number)));
      var lastReceivedPage = Math.max.apply(Math, _toConsumableArray(Object.keys(cachedHits).map(Number)));
      var hasPrevious = firstReceivedPage > 0;
      var lastPageIndex = nbPages - 1;
      var hasMore = lastReceivedPage < lastPageIndex;
      var refinePrevious = function refinePrevious(event) {
        return _this.refine(event, firstReceivedPage - 1);
      };
      var refineNext = function refineNext(event) {
        return _this.refine(event, lastReceivedPage + 1);
      };
      return {
        hits: extractHitsFromCachedHits(cachedHits),
        hasPrevious: hasPrevious,
        hasMore: hasMore,
        refinePrevious: refinePrevious,
        refineNext: refineNext
      };
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      return searchParameters.setQueryParameters({
        page: getCurrentRefinement$4(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }) - 1
      });
    },
    refine: function refine(props, searchState, event, index) {
      var id = getId$6();
      var nextValue = _defineProperty({}, id, index + 1);
      var resetPage = false;
      return refineValue(searchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, resetPage);
    }
  });

  var namespace$2 = 'menu';
  function getId$7(props) {
    return props.attribute;
  }
  function getCurrentRefinement$5(props, searchState, context) {
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace$2, ".").concat(getId$7(props)), null);
    if (currentRefinement === '') {
      return null;
    }
    return currentRefinement;
  }
  function getValue$1(value, props, searchState, context) {
    var currentRefinement = getCurrentRefinement$5(props, searchState, context);
    return value === currentRefinement ? '' : value;
  }
  function getLimit(_ref) {
    var showMore = _ref.showMore,
      limit = _ref.limit,
      showMoreLimit = _ref.showMoreLimit;
    return showMore ? showMoreLimit : limit;
  }
  function _refine$4(props, searchState, nextRefinement, context) {
    var id = getId$7(props);
    var nextValue = _defineProperty({}, id, nextRefinement ? nextRefinement : '');
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage, namespace$2);
  }
  function _cleanUp$2(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$2, ".").concat(getId$7(props)));
  }
  var defaultSortBy = ['count:desc', 'name:asc'];

  /**
   * connectMenu connector provides the logic to build a widget that will
   * give the user the ability to choose a single value for a specific facet.
   * @name connectMenu
   * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
   * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
   * @kind connector
   * @propType {string} attribute - the name of the attribute in the record
   * @propType {boolean} [showMore=false] - true if the component should display a button that will expand the number of items
   * @propType {number} [limit=10] - the minimum number of diplayed items
   * @propType {number} [showMoreLimit=20] - the maximun number of displayed items. Only used when showMore is set to `true`
   * @propType {string} [defaultRefinement] - the value of the item selected by default
   * @propType {boolean} [searchable=false] - allow search inside values
   * @providedPropType {function} refine - a function to toggle a refinement
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string} currentRefinement - the refinement currently applied
   * @providedPropType {array.<{count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the Menu can display.
   * @providedPropType {function} searchForItems - a function to toggle a search inside items values
   * @providedPropType {boolean} isFromSearch - a boolean that says if the `items` props contains facet values from the global search or from the search inside items.
   */
  var connectMenu = createConnectorWithContext({
    displayName: 'AlgoliaMenu',
    $$type: 'ais.menu',
    propTypes: {
      attribute: propTypes.string.isRequired,
      showMore: propTypes.bool,
      limit: propTypes.number,
      showMoreLimit: propTypes.number,
      defaultRefinement: propTypes.string,
      transformItems: propTypes.func,
      searchable: propTypes.bool,
      facetOrdering: propTypes.bool
    },
    defaultProps: {
      showMore: false,
      limit: 10,
      showMoreLimit: 20,
      facetOrdering: true
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults, meta, searchForFacetValuesResults) {
      var attribute = props.attribute,
        searchable = props.searchable,
        indexContextValue = props.indexContextValue,
        facetOrdering = props.facetOrdering;
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var canRefine = Boolean(results) && Boolean(results.getFacetByName(attribute));
      var isFromSearch = Boolean(searchForFacetValuesResults && searchForFacetValuesResults[attribute] && searchForFacetValuesResults.query !== '');

      // Search For Facet Values is not available with derived helper (used for multi index search)
      if (searchable && indexContextValue) {
        throw new Error('react-instantsearch: searching in *List is not available when used inside a' + ' multi index context');
      }
      if (!canRefine) {
        return {
          items: [],
          currentRefinement: getCurrentRefinement$5(props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          isFromSearch: isFromSearch,
          searchable: searchable,
          canRefine: canRefine
        };
      }
      var items;
      if (isFromSearch) {
        items = searchForFacetValuesResults[attribute].map(function (v) {
          return {
            label: v.value,
            value: getValue$1(v.escapedValue, props, searchState, {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            }),
            _highlightResult: {
              label: {
                value: v.highlighted
              }
            },
            count: v.count,
            isRefined: v.isRefined
          };
        });
      } else {
        items = results.getFacetValues(attribute, {
          sortBy: searchable ? undefined : defaultSortBy,
          facetOrdering: facetOrdering
        }).map(function (v) {
          return {
            label: v.name,
            value: getValue$1(v.escapedValue, props, searchState, {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            }),
            count: v.count,
            isRefined: v.isRefined
          };
        });
      }
      var transformedItems = props.transformItems ? props.transformItems(items) : items;
      return {
        items: transformedItems.slice(0, getLimit(props)),
        currentRefinement: getCurrentRefinement$5(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        isFromSearch: isFromSearch,
        searchable: searchable,
        canRefine: transformedItems.length > 0
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$4(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    searchForFacetValues: function searchForFacetValues(props, searchState, nextRefinement) {
      return {
        facetName: props.attribute,
        query: nextRefinement,
        maxFacetHits: getLimit(props)
      };
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$2(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var attribute = props.attribute;
      searchParameters = searchParameters.setQueryParameters({
        maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, getLimit(props))
      });
      searchParameters = searchParameters.addDisjunctiveFacet(attribute);
      var currentRefinement = getCurrentRefinement$5(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (currentRefinement !== null) {
        searchParameters = searchParameters.addDisjunctiveFacetRefinement(attribute, currentRefinement);
      }
      return searchParameters;
    },
    getMetadata: function getMetadata(props, searchState) {
      var id = getId$7(props);
      var currentRefinement = getCurrentRefinement$5(props, searchState, {
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
          label: "".concat(props.attribute, ": ").concat(unescapeFacetValue(currentRefinement)),
          attribute: props.attribute,
          value: function value(nextState) {
            return _refine$4(props, nextState, '', {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          },
          currentRefinement: currentRefinement
        }]
      };
    }
  });

  function stringifyItem(item) {
    if (typeof item.start === 'undefined' && typeof item.end === 'undefined') {
      return '';
    }
    var start = typeof item.start !== 'undefined' ? item.start : '';
    var end = typeof item.end !== 'undefined' ? item.end : '';
    return "".concat(start, ":").concat(end);
  }
  function parseItem(value) {
    if (value.length === 0) {
      return {
        start: null,
        end: null
      };
    }
    var _value$split = value.split(':'),
      _value$split2 = _slicedToArray(_value$split, 2),
      startStr = _value$split2[0],
      endStr = _value$split2[1];
    return {
      start: startStr.length > 0 ? parseFloat(startStr) : null,
      end: endStr.length > 0 ? parseFloat(endStr) : null
    };
  }
  var namespace$3 = 'multiRange';
  function getId$8(props) {
    return props.attribute;
  }
  function getCurrentRefinement$6(props, searchState, context) {
    return getCurrentRefinementValue(props, searchState, context, "".concat(namespace$3, ".").concat(getId$8(props)), '');
  }
  function isRefinementsRangeIncludesInsideItemRange(stats, start, end) {
    return stats.min >= start && stats.min <= end || stats.max >= start && stats.max <= end;
  }
  function isItemRangeIncludedInsideRefinementsRange(stats, start, end) {
    return start >= stats.min && start <= stats.max || end >= stats.min && end <= stats.max;
  }
  function itemHasRefinement(attribute, results, value) {
    var stats = results.getFacetByName(attribute) ? results.getFacetStats(attribute) : null;
    var range = value.split(':');
    var start = Number(range[0]) === 0 || value === '' ? Number.NEGATIVE_INFINITY : Number(range[0]);
    var end = Number(range[1]) === 0 || value === '' ? Number.POSITIVE_INFINITY : Number(range[1]);
    return !(Boolean(stats) && (isRefinementsRangeIncludesInsideItemRange(stats, start, end) || isItemRangeIncludedInsideRefinementsRange(stats, start, end)));
  }
  function _refine$5(props, searchState, nextRefinement, context) {
    var nextValue = _defineProperty({}, getId$8(props), nextRefinement);
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage, namespace$3);
  }
  function _cleanUp$3(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$3, ".").concat(getId$8(props)));
  }

  /**
   * connectNumericMenu connector provides the logic to build a widget that will
   * give the user the ability to select a range value for a numeric attribute.
   * Ranges are defined statically.
   * @name connectNumericMenu
   * @requirements The attribute passed to the `attribute` prop must be holding numerical values.
   * @kind connector
   * @propType {string} attribute - the name of the attribute in the records
   * @propType {{label: string, start: number, end: number}[]} items - List of options. With a text label, and upper and lower bounds.
   * @propType {string} [defaultRefinement] - the value of the item selected by default, follow the shape of a `string` with a pattern of `'{start}:{end}'`.
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @providedPropType {function} refine - a function to select a range.
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string} currentRefinement - the refinement currently applied.  follow the shape of a `string` with a pattern of `'{start}:{end}'` which corresponds to the current selected item. For instance, when the selected item is `{start: 10, end: 20}`, the searchState of the widget is `'10:20'`. When `start` isn't defined, the searchState of the widget is `':{end}'`, and the same way around when `end` isn't defined. However, when neither `start` nor `end` are defined, the searchState is an empty string.
   * @providedPropType {array.<{isRefined: boolean, label: string, value: string, isRefined: boolean, noRefinement: boolean}>} items - the list of ranges the NumericMenu can display.
   */
  var connectNumericMenu = createConnectorWithContext({
    displayName: 'AlgoliaNumericMenu',
    $$type: 'ais.numericMenu',
    propTypes: {
      id: propTypes.string,
      attribute: propTypes.string.isRequired,
      items: propTypes.arrayOf(propTypes.shape({
        label: propTypes.node,
        start: propTypes.number,
        end: propTypes.number
      })).isRequired,
      transformItems: propTypes.func
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var attribute = props.attribute;
      var currentRefinement = getCurrentRefinement$6(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = props.items.map(function (item) {
        var value = stringifyItem(item);
        return {
          label: item.label,
          value: value,
          isRefined: value === currentRefinement,
          noRefinement: results ? itemHasRefinement(getId$8(props), results, value) : false
        };
      });
      var stats = results && results.getFacetByName(attribute) ? results.getFacetStats(attribute) : null;
      var refinedItem = find(items, function (item) {
        return item.isRefined === true;
      });
      if (!items.some(function (item) {
        return item.value === '';
      })) {
        items.push({
          value: '',
          isRefined: refinedItem === undefined,
          noRefinement: !stats,
          label: 'All'
        });
      }
      var transformedItems = props.transformItems ? props.transformItems(items) : items;
      return {
        items: transformedItems,
        currentRefinement: currentRefinement,
        canRefine: transformedItems.length > 0 && transformedItems.some(function (item) {
          return item.noRefinement === false;
        })
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$5(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$3(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var attribute = props.attribute;
      var _parseItem = parseItem(getCurrentRefinement$6(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        })),
        start = _parseItem.start,
        end = _parseItem.end;
      searchParameters = searchParameters.addDisjunctiveFacet(attribute);
      if (typeof start === 'number') {
        searchParameters = searchParameters.addNumericRefinement(attribute, '>=', start);
      }
      if (typeof end === 'number') {
        searchParameters = searchParameters.addNumericRefinement(attribute, '<=', end);
      }
      return searchParameters;
    },
    getMetadata: function getMetadata(props, searchState) {
      var id = getId$8(props);
      var value = getCurrentRefinement$6(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = [];
      var index = getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (value !== '') {
        var _find = find(props.items, function (item) {
            return stringifyItem(item) === value;
          }),
          label = _find.label;
        items.push({
          label: "".concat(props.attribute, ": ").concat(label),
          attribute: props.attribute,
          currentRefinement: label,
          value: function value(nextState) {
            return _refine$5(props, nextState, '', {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          }
        });
      }
      return {
        id: id,
        index: index,
        items: items
      };
    }
  });

  function getId$9() {
    return 'page';
  }
  function getCurrentRefinement$7(props, searchState, context) {
    var id = getId$9();
    var page = 1;
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, page);
    if (typeof currentRefinement === 'string') {
      return parseInt(currentRefinement, 10);
    }
    return currentRefinement;
  }
  function _refine$6(props, searchState, nextPage, context) {
    var id = getId$9();
    var nextValue = _defineProperty({}, id, nextPage);
    var resetPage = false;
    return refineValue(searchState, nextValue, context, resetPage);
  }

  /**
   * connectPagination connector provides the logic to build a widget that will
   * let the user displays hits corresponding to a certain page.
   * @name connectPagination
   * @kind connector
   * @propType {boolean} [showFirst=true] - Display the first page link.
   * @propType {boolean} [showLast=false] - Display the last page link.
   * @propType {boolean} [showPrevious=true] - Display the previous page link.
   * @propType {boolean} [showNext=true] - Display the next page link.
   * @propType {number} [padding=3] - How many page links to display around the current page.
   * @propType {number} [totalPages=Infinity] - Maximum number of pages to display.
   * @providedPropType {function} refine - a function to remove a single filter
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {number} nbPages - the total of existing pages
   * @providedPropType {number} currentRefinement - the page refinement currently applied
   */
  var connectPagination = createConnectorWithContext({
    displayName: 'AlgoliaPagination',
    $$type: 'ais.pagination',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (!results) {
        return null;
      }
      var nbPages = results.nbPages;
      return {
        nbPages: nbPages,
        currentRefinement: getCurrentRefinement$7(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        canRefine: nbPages > 1
      };
    },
    refine: function refine(props, searchState, nextPage) {
      return _refine$6(props, searchState, nextPage, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return cleanUpValue(searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, getId$9());
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      return searchParameters.setPage(getCurrentRefinement$7(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }) - 1);
    },
    getMetadata: function getMetadata() {
      return {
        id: getId$9()
      };
    }
  });

  /**
   * connectPoweredBy connector provides the logic to build a widget that
   * will display a link to algolia.
   * @name connectPoweredBy
   * @kind connector
   * @providedPropType {string} url - the url to redirect to algolia
   */
  var connectPoweredBy = createConnectorWithContext({
    displayName: 'AlgoliaPoweredBy',
    $$type: 'ais.poweredBy',
    getProvidedProps: function getProvidedProps() {
      var hostname = typeof window === 'undefined' || typeof window.location === 'undefined' ? '' : window.location.hostname;
      var url = 'https://www.algolia.com/?' + 'utm_source=react-instantsearch&' + 'utm_medium=website&' + "utm_content=".concat(hostname, "&") + 'utm_campaign=poweredby';
      return {
        url: url
      };
    }
  });

  /**
   * connectRange connector provides the logic to create connected
   * components that will give the ability for a user to refine results using
   * a numeric range.
   * @name connectRange
   * @kind connector
   * @requirements The attribute passed to the `attribute` prop must be present in “attributes for faceting”
   * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
   * The values inside the attribute must be JavaScript numbers (not strings).
   * @propType {string} attribute - Name of the attribute for faceting
   * @propType {{min?: number, max?: number}} [defaultRefinement] - Default searchState of the widget containing the start and the end of the range.
   * @propType {number} [min] - Minimum value. When this isn't set, the minimum value will be automatically computed by Algolia using the data in the index.
   * @propType {number} [max] - Maximum value. When this isn't set, the maximum value will be automatically computed by Algolia using the data in the index.
   * @propType {number} [precision=0] - Number of digits after decimal point to use.
   * @providedPropType {function} refine - a function to select a range.
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string} currentRefinement - the refinement currently applied
   * @providedPropType {number} min - the minimum value available.
   * @providedPropType {number} max - the maximum value available.
   * @providedPropType {number} precision - Number of digits after decimal point to use.
   */

  function getId$a(props) {
    return props.attribute;
  }
  var namespace$4 = 'range';
  function getCurrentRange(boundaries, stats, precision) {
    var pow = Math.pow(10, precision);
    var min;
    if (typeof boundaries.min === 'number' && isFinite(boundaries.min)) {
      min = boundaries.min;
    } else if (typeof stats.min === 'number' && isFinite(stats.min)) {
      min = stats.min;
    } else {
      min = undefined;
    }
    var max;
    if (typeof boundaries.max === 'number' && isFinite(boundaries.max)) {
      max = boundaries.max;
    } else if (typeof stats.max === 'number' && isFinite(stats.max)) {
      max = stats.max;
    } else {
      max = undefined;
    }
    return {
      min: min !== undefined ? Math.floor(min * pow) / pow : min,
      max: max !== undefined ? Math.ceil(max * pow) / pow : max
    };
  }
  function getCurrentRefinement$8(props, searchState, currentRange, context) {
    var _getCurrentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace$4, ".").concat(getId$a(props)), {}),
      min = _getCurrentRefinement.min,
      max = _getCurrentRefinement.max;
    var isFloatPrecision = Boolean(props.precision);
    var nextMin = min;
    if (typeof nextMin === 'string') {
      nextMin = isFloatPrecision ? parseFloat(nextMin) : parseInt(nextMin, 10);
    }
    var nextMax = max;
    if (typeof nextMax === 'string') {
      nextMax = isFloatPrecision ? parseFloat(nextMax) : parseInt(nextMax, 10);
    }
    var refinement = {
      min: nextMin,
      max: nextMax
    };
    var hasMinBound = props.min !== undefined;
    var hasMaxBound = props.max !== undefined;
    var hasMinRefinment = refinement.min !== undefined;
    var hasMaxRefinment = refinement.max !== undefined;
    if (hasMinBound && hasMinRefinment && refinement.min < currentRange.min) {
      throw Error("You can't provide min value lower than range.");
    }
    if (hasMaxBound && hasMaxRefinment && refinement.max > currentRange.max) {
      throw Error("You can't provide max value greater than range.");
    }
    if (hasMinBound && !hasMinRefinment) {
      refinement.min = currentRange.min;
    }
    if (hasMaxBound && !hasMaxRefinment) {
      refinement.max = currentRange.max;
    }
    return refinement;
  }
  function getCurrentRefinementWithRange(refinement, range) {
    return {
      min: refinement.min !== undefined ? refinement.min : range.min,
      max: refinement.max !== undefined ? refinement.max : range.max
    };
  }
  function nextValueForRefinement(hasBound, isReset, range, value) {
    var next;
    if (!hasBound && range === value) {
      next = undefined;
    } else if (hasBound && isReset) {
      next = range;
    } else {
      next = value;
    }
    return next;
  }
  function _refine$7(props, searchState, nextRefinement, currentRange, context) {
    var nextMin = nextRefinement.min,
      nextMax = nextRefinement.max;
    var currentMinRange = currentRange.min,
      currentMaxRange = currentRange.max;
    var isMinReset = nextMin === undefined || nextMin === '';
    var isMaxReset = nextMax === undefined || nextMax === '';
    var nextMinAsNumber = !isMinReset ? parseFloat(nextMin) : undefined;
    var nextMaxAsNumber = !isMaxReset ? parseFloat(nextMax) : undefined;
    var isNextMinValid = isMinReset || isFinite(nextMinAsNumber);
    var isNextMaxValid = isMaxReset || isFinite(nextMaxAsNumber);
    if (!isNextMinValid || !isNextMaxValid) {
      throw Error("You can't provide non finite values to the range connector.");
    }
    if (nextMinAsNumber < currentMinRange) {
      throw Error("You can't provide min value lower than range.");
    }
    if (nextMaxAsNumber > currentMaxRange) {
      throw Error("You can't provide max value greater than range.");
    }
    var id = getId$a(props);
    var resetPage = true;
    var nextValue = _defineProperty({}, id, {
      min: nextValueForRefinement(props.min !== undefined, isMinReset, currentMinRange, nextMinAsNumber),
      max: nextValueForRefinement(props.max !== undefined, isMaxReset, currentMaxRange, nextMaxAsNumber)
    });
    return refineValue(searchState, nextValue, context, resetPage, namespace$4);
  }
  function _cleanUp$4(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$4, ".").concat(getId$a(props)));
  }
  var connectRange = createConnectorWithContext({
    displayName: 'AlgoliaRange',
    $$type: 'ais.range',
    propTypes: {
      id: propTypes.string,
      attribute: propTypes.string.isRequired,
      defaultRefinement: propTypes.shape({
        min: propTypes.number,
        max: propTypes.number
      }),
      min: propTypes.number,
      max: propTypes.number,
      precision: propTypes.number,
      header: propTypes.node,
      footer: propTypes.node
    },
    defaultProps: {
      precision: 0
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var attribute = props.attribute,
        precision = props.precision,
        minBound = props.min,
        maxBound = props.max;
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var hasFacet = results && results.getFacetByName(attribute);
      var stats = hasFacet ? results.getFacetStats(attribute) || {} : {};
      var facetValues = hasFacet ? results.getFacetValues(attribute) : [];
      var count = facetValues.map(function (v) {
        return {
          value: v.name,
          count: v.count
        };
      });
      var _getCurrentRange = getCurrentRange({
          min: minBound,
          max: maxBound
        }, stats, precision),
        rangeMin = _getCurrentRange.min,
        rangeMax = _getCurrentRange.max;

      // The searchState is not always in sync with the helper state. For example
      // when we set boundaries on the first render the searchState don't have
      // the correct refinement. If this behavior change in the upcoming version
      // we could store the range inside the searchState instead of rely on `this`.
      this._currentRange = {
        min: rangeMin,
        max: rangeMax
      };
      var currentRefinement = getCurrentRefinement$8(props, searchState, this._currentRange, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      return {
        min: rangeMin,
        max: rangeMax,
        canRefine: count.length > 0,
        currentRefinement: getCurrentRefinementWithRange(currentRefinement, this._currentRange),
        count: count,
        precision: precision
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$7(props, searchState, nextRefinement, this._currentRange, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$4(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(params, props, searchState) {
      var attribute = props.attribute;
      var _getCurrentRefinement2 = getCurrentRefinement$8(props, searchState, this._currentRange, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        min = _getCurrentRefinement2.min,
        max = _getCurrentRefinement2.max;
      params = params.addDisjunctiveFacet(attribute);
      if (min !== undefined) {
        params = params.addNumericRefinement(attribute, '>=', min);
      }
      if (max !== undefined) {
        params = params.addNumericRefinement(attribute, '<=', max);
      }
      return params;
    },
    getMetadata: function getMetadata(props, searchState) {
      var _this = this;
      var _this$_currentRange = this._currentRange,
        minRange = _this$_currentRange.min,
        maxRange = _this$_currentRange.max;
      var _getCurrentRefinement3 = getCurrentRefinement$8(props, searchState, this._currentRange, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        minValue = _getCurrentRefinement3.min,
        maxValue = _getCurrentRefinement3.max;
      var items = [];
      var hasMin = minValue !== undefined;
      var hasMax = maxValue !== undefined;
      var shouldDisplayMinLabel = hasMin && minValue !== minRange;
      var shouldDisplayMaxLabel = hasMax && maxValue !== maxRange;
      if (shouldDisplayMinLabel || shouldDisplayMaxLabel) {
        var fragments = [hasMin ? "".concat(minValue, " <= ") : '', props.attribute, hasMax ? " <= ".concat(maxValue) : ''];
        items.push({
          label: fragments.join(''),
          attribute: props.attribute,
          value: function value(nextState) {
            return _refine$7(props, nextState, {}, _this._currentRange, {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          },
          currentRefinement: getCurrentRefinementWithRange({
            min: minValue,
            max: maxValue
          }, {
            min: minRange,
            max: maxRange
          })
        });
      }
      return {
        id: getId$a(props),
        index: getIndexId({
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        items: items
      };
    }
  });

  var namespace$5 = 'refinementList';
  function getId$b(props) {
    return props.attribute;
  }
  function getCurrentRefinement$9(props, searchState, context) {
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace$5, ".").concat(getId$b(props)), []);
    if (typeof currentRefinement !== 'string') {
      return currentRefinement;
    }
    if (currentRefinement) {
      return [currentRefinement];
    }
    return [];
  }
  function getValue$2(value, props, searchState, context) {
    var currentRefinement = getCurrentRefinement$9(props, searchState, context);
    var isAnewValue = currentRefinement.indexOf(value) === -1;
    var nextRefinement = isAnewValue ? currentRefinement.concat([value]) // cannot use .push(), it mutates
    : currentRefinement.filter(function (selectedValue) {
      return selectedValue !== value;
    }); // cannot use .splice(), it mutates
    return nextRefinement;
  }
  function getLimit$1(_ref) {
    var showMore = _ref.showMore,
      limit = _ref.limit,
      showMoreLimit = _ref.showMoreLimit;
    return showMore ? showMoreLimit : limit;
  }
  function _refine$8(props, searchState, nextRefinement, context) {
    var id = getId$b(props);
    // Setting the value to an empty string ensures that it is persisted in
    // the URL as an empty value.
    // This is necessary in the case where `defaultRefinement` contains one
    // item and we try to deselect it. `nextSelected` would be an empty array,
    // which would not be persisted to the URL.
    // {foo: ['bar']} => "foo[0]=bar"
    // {foo: []} => ""
    var nextValue = _defineProperty({}, id, nextRefinement.length > 0 ? nextRefinement : '');
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage, namespace$5);
  }
  function _cleanUp$5(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$5, ".").concat(getId$b(props)));
  }
  /**
   * connectRefinementList connector provides the logic to build a widget that will
   * give the user the ability to choose multiple values for a specific facet.
   * @name connectRefinementList
   * @kind connector
   * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
   * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
   * @propType {string} attribute - the name of the attribute in the record
   * @propType {boolean} [searchable=false] - allow search inside values
   * @propType {string} [operator=or] - How to apply the refinements. Possible values: 'or' or 'and'.
   * @propType {boolean} [showMore=false] - true if the component should display a button that will expand the number of items
   * @propType {number} [limit=10] - the minimum number of displayed items
   * @propType {number} [showMoreLimit=20] - the maximun number of displayed items. Only used when showMore is set to `true`
   * @propType {string[]} defaultRefinement - the values of the items selected by default. The searchState of this widget takes the form of a list of `string`s, which correspond to the values of all selected refinements. However, when there are no refinements selected, the value of the searchState is an empty string.
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @providedPropType {function} refine - a function to toggle a refinement
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string[]} currentRefinement - the refinement currently applied
   * @providedPropType {array.<{count: number, isRefined: boolean, label: string, value: string}>} items - the list of items the RefinementList can display.
   * @providedPropType {function} searchForItems - a function to toggle a search inside items values
   * @providedPropType {boolean} isFromSearch - a boolean that says if the `items` props contains facet values from the global search or from the search inside items.
   * @providedPropType {boolean} canRefine - a boolean that says whether you can refine
   */

  var sortBy$1 = ['isRefined', 'count:desc', 'name:asc'];
  var connectRefinementList = createConnectorWithContext({
    displayName: 'AlgoliaRefinementList',
    $$type: 'ais.refinementList',
    propTypes: {
      id: propTypes.string,
      attribute: propTypes.string.isRequired,
      operator: propTypes.oneOf(['and', 'or']),
      showMore: propTypes.bool,
      limit: propTypes.number,
      showMoreLimit: propTypes.number,
      defaultRefinement: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number])),
      searchable: propTypes.bool,
      transformItems: propTypes.func,
      facetOrdering: propTypes.bool
    },
    defaultProps: {
      operator: 'or',
      showMore: false,
      limit: 10,
      showMoreLimit: 20,
      facetOrdering: true
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults, metadata, searchForFacetValuesResults) {
      var attribute = props.attribute,
        searchable = props.searchable,
        indexContextValue = props.indexContextValue,
        facetOrdering = props.facetOrdering;
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var canRefine = Boolean(results) && Boolean(results.getFacetByName(attribute));
      var isFromSearch = Boolean(searchForFacetValuesResults && searchForFacetValuesResults[attribute] && searchForFacetValuesResults.query !== '');

      // Search For Facet Values is not available with derived helper (used for multi index search)
      if (searchable && indexContextValue) {
        throw new Error('react-instantsearch: searching in *List is not available when used inside a' + ' multi index context');
      }
      if (!canRefine) {
        return {
          items: [],
          currentRefinement: getCurrentRefinement$9(props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          canRefine: canRefine,
          isFromSearch: isFromSearch,
          searchable: searchable
        };
      }
      var items = isFromSearch ? searchForFacetValuesResults[attribute].map(function (v) {
        return {
          label: v.value,
          value: getValue$2(v.escapedValue, props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          _highlightResult: {
            label: {
              value: v.highlighted
            }
          },
          count: v.count,
          isRefined: v.isRefined
        };
      }) : results.getFacetValues(attribute, {
        sortBy: sortBy$1,
        facetOrdering: facetOrdering
      }).map(function (v) {
        return {
          label: v.name,
          value: getValue$2(v.escapedValue, props, searchState, {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          }),
          count: v.count,
          isRefined: v.isRefined
        };
      });
      var transformedItems = props.transformItems ? props.transformItems(items) : items;
      return {
        items: transformedItems.slice(0, getLimit$1(props)),
        currentRefinement: getCurrentRefinement$9(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        isFromSearch: isFromSearch,
        searchable: searchable,
        canRefine: transformedItems.length > 0
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$8(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    searchForFacetValues: function searchForFacetValues(props, searchState, nextRefinement) {
      return {
        facetName: props.attribute,
        query: nextRefinement,
        maxFacetHits: getLimit$1(props)
      };
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$5(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var attribute = props.attribute,
        operator = props.operator;
      var addKey = operator === 'and' ? 'addFacet' : 'addDisjunctiveFacet';
      var addRefinementKey = "".concat(addKey, "Refinement");
      searchParameters = searchParameters.setQueryParameters({
        maxValuesPerFacet: Math.max(searchParameters.maxValuesPerFacet || 0, getLimit$1(props))
      });
      searchParameters = searchParameters[addKey](attribute);
      return getCurrentRefinement$9(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }).reduce(function (res, val) {
        return res[addRefinementKey](attribute, val);
      }, searchParameters);
    },
    getMetadata: function getMetadata(props, searchState) {
      var id = getId$b(props);
      var context = {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      };
      return {
        id: id,
        index: getIndexId(context),
        items: getCurrentRefinement$9(props, searchState, context).length > 0 ? [{
          attribute: props.attribute,
          label: "".concat(props.attribute, ": "),
          currentRefinement: getCurrentRefinement$9(props, searchState, context),
          value: function value(nextState) {
            return _refine$8(props, nextState, [], context);
          },
          items: getCurrentRefinement$9(props, searchState, context).map(function (item) {
            return {
              label: unescapeFacetValue("".concat(item)),
              value: function value(nextState) {
                var nextSelectedItems = getCurrentRefinement$9(props, nextState, context).filter(function (other) {
                  return other !== item;
                });
                return _refine$8(props, searchState, nextSelectedItems, context);
              }
            };
          })
        }] : []
      };
    }
  });

  /**
   * connectScrollTo connector provides the logic to build a widget that will
   * let the page scroll to a certain point.
   * @name connectScrollTo
   * @kind connector
   * @propType {string} [scrollOn="page"] - Widget searchState key on which to listen for changes, default to the pagination widget.
   * @providedPropType {any} value - the current refinement applied to the widget listened by scrollTo
   * @providedPropType {boolean} hasNotChanged - indicates whether the refinement came from the scrollOn argument (for instance page by default)
   */
  var connectScrollTo = createConnectorWithContext({
    displayName: 'AlgoliaScrollTo',
    $$type: 'ais.scrollTo',
    propTypes: {
      scrollOn: propTypes.string
    },
    defaultProps: {
      scrollOn: 'page'
    },
    getProvidedProps: function getProvidedProps(props, searchState) {
      var id = props.scrollOn;
      var value = getCurrentRefinementValue(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, id, null);
      if (!this._prevSearchState) {
        this._prevSearchState = {};
      }

      // Get the subpart of the state that interest us
      if (hasMultipleIndices({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      })) {
        searchState = searchState.indices ? searchState.indices[getIndexId({
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        })] : {};
      }

      // if there is a change in the app that has been triggered by another element
      // than "props.scrollOn (id) or the Configure widget, we need to keep track of
      // the search state to know if there's a change in the app that was not triggered
      // by the props.scrollOn (id) or the Configure widget. This is useful when
      // using ScrollTo in combination of Pagination. As pagination can be change
      // by every widget, we want to scroll only if it cames from the pagination
      // widget itself. We also remove the configure key from the search state to
      // do this comparison because for now configure values are not present in the
      // search state before a first refinement has been made and will false the results.
      // See: https://github.com/algolia/react-instantsearch/issues/164
      var cleanedSearchState = omit(searchState, ['configure', id]);
      var hasNotChanged = shallowEqual(this._prevSearchState, cleanedSearchState);
      this._prevSearchState = cleanedSearchState;
      return {
        value: value,
        hasNotChanged: hasNotChanged
      };
    }
  });

  function getId$c() {
    return 'query';
  }
  function getCurrentRefinement$a(props, searchState, context) {
    var id = getId$c();
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');
    if (currentRefinement) {
      return currentRefinement;
    }
    return '';
  }
  function _refine$9(props, searchState, nextRefinement, context) {
    var id = getId$c();
    var nextValue = _defineProperty({}, id, nextRefinement);
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage);
  }
  function _cleanUp$6(props, searchState, context) {
    return cleanUpValue(searchState, context, getId$c());
  }

  /**
   * connectSearchBox connector provides the logic to build a widget that will
   * let the user search for a query
   * @name connectSearchBox
   * @kind connector
   * @propType {string} [defaultRefinement] - Provide a default value for the query
   * @providedPropType {function} refine - a function to change the current query
   * @providedPropType {string} currentRefinement - the current query used
   * @providedPropType {boolean} isSearchStalled - a flag that indicates if InstantSearch has detected that searches are stalled
   */
  var connectSearchBox = createConnectorWithContext({
    displayName: 'AlgoliaSearchBox',
    $$type: 'ais.searchBox',
    propTypes: {
      defaultRefinement: propTypes.string
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      return {
        currentRefinement: getCurrentRefinement$a(props, searchState, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        }),
        isSearchStalled: searchResults.isSearchStalled
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$9(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$6(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      return searchParameters.setQuery(getCurrentRefinement$a(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }));
    },
    getMetadata: function getMetadata(props, searchState) {
      var id = getId$c();
      var currentRefinement = getCurrentRefinement$a(props, searchState, {
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
            return _refine$9(props, nextState, '', {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          },
          currentRefinement: currentRefinement
        }]
      };
    }
  });

  function getId$d() {
    return 'relevancyStrictness';
  }
  function getCurrentRefinement$b(props, searchState, context) {
    var id = getId$d();
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id);
    return currentRefinement;
  }
  var connectRelevantSort = createConnectorWithContext({
    displayName: 'AlgoliaRelevantSort',
    $$type: 'ais.relevantSort',
    getProvidedProps: function getProvidedProps(props, _searchState, searchResults) {
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (!results) {
        return {
          isVirtualReplica: false,
          isRelevantSorted: false
        };
      }
      return {
        isVirtualReplica: results.appliedRelevancyStrictness !== undefined,
        isRelevantSorted: results.appliedRelevancyStrictness !== undefined && results.appliedRelevancyStrictness > 0
      };
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      return searchParameters.setQueryParameter('relevancyStrictness', getCurrentRefinement$b(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }));
    },
    refine: function refine(props, searchState, nextRefinement) {
      var nextValue = _defineProperty({}, getId$d(), nextRefinement);
      var resetPage = true;
      return refineValue(searchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, resetPage);
    }
  });

  function getId$e() {
    return 'sortBy';
  }
  function getCurrentRefinement$c(props, searchState, context) {
    var id = getId$e();
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, null);
    if (currentRefinement) {
      return currentRefinement;
    }
    return null;
  }

  /**
   * The connectSortBy connector provides the logic to build a widget that will
   *  display a list of indices. This allows a user to change how the hits are being sorted.
   * @name connectSortBy
   * @requirements Algolia handles sorting by creating replica indices. [Read more about sorting](https://www.algolia.com/doc/guides/relevance/sorting/) on
   * the Algolia website.
   * @kind connector
   * @propType {string} defaultRefinement - The default selected index.
   * @propType {{value: string, label: string}[]} items - The list of indexes to search in.
   * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
   * @providedPropType {function} refine - a function to remove a single filter
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   * @providedPropType {string[]} currentRefinement - the refinement currently applied
   * @providedPropType {array.<{isRefined: boolean, label?: string, value: string}>} items - the list of items the HitsPerPage can display.  If no label provided, the value will be displayed.
   */
  var connectSortBy = createConnectorWithContext({
    displayName: 'AlgoliaSortBy',
    $$type: 'ais.sortBy',
    propTypes: {
      defaultRefinement: propTypes.string,
      items: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string,
        value: propTypes.string.isRequired
      })).isRequired,
      transformItems: propTypes.func
    },
    getProvidedProps: function getProvidedProps(props, searchState) {
      var currentRefinement = getCurrentRefinement$c(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = props.items.map(function (item) {
        return item.value === currentRefinement ? _objectSpread2(_objectSpread2({}, item), {}, {
          isRefined: true
        }) : _objectSpread2(_objectSpread2({}, item), {}, {
          isRefined: false
        });
      });
      return {
        items: props.transformItems ? props.transformItems(items) : items,
        currentRefinement: currentRefinement
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      var id = getId$e();
      var nextValue = _defineProperty({}, id, nextRefinement);
      var resetPage = true;
      return refineValue(searchState, nextValue, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, resetPage);
    },
    cleanUp: function cleanUp(props, searchState) {
      return cleanUpValue(searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }, getId$e());
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var selectedIndex = getCurrentRefinement$c(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      return searchParameters.setIndex(selectedIndex);
    },
    getMetadata: function getMetadata() {
      return {
        id: getId$e()
      };
    }
  });

  /**
   * The `connectStateResults` connector provides a way to access the `searchState` and the `searchResults`
   * of InstantSearch.
   * For instance this connector allows you to create results/noResults or query/noQuery pages.
   * @name connectStateResults
   * @kind connector
   * @providedPropType {object} searchState - The search state of the instant search component. <br/><br/> See: [Search state structure](https://community.algolia.com/react-instantsearch/guide/Search_state.html)
   * @providedPropType {object} searchResults - The search results. <br/><br/> In case of multiple indices: if used under `<Index>`, results will be those of the corresponding index otherwise it'll be those of the root index  See: [Search results structure](https://community.algolia.com/algoliasearch-helper-js/reference.html#searchresults)
   * @providedPropType {object} allSearchResults - In case of multiple indices you can retrieve all the results
   * @providedPropType {string} error - If the search failed, the error will be logged here.
   * @providedPropType {boolean} searching - If there is a search in progress.
   * @providedPropType {boolean} isSearchStalled - Flag that indicates if React InstantSearch has detected that searches are stalled.
   * @providedPropType {boolean} searchingForFacetValues - If there is a search in a list in progress.
   * @providedPropType {object} props - component props.
   * @example
   * import React from 'react';
   * import algoliasearch from 'algoliasearch/lite';
   * import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
   *
   * const searchClient = algoliasearch(
   *   'latency',
   *   '6be0576ff61c053d5f9a3225e2a90f76'
   * );
   *
   * const Content = connectStateResults(({ searchState, searchResults }) => {
   *   const hasResults = searchResults && searchResults.nbHits !== 0;
   *
   *    return (
   *      <div>
   *        <div hidden={!hasResults}>
   *          <Hits />
   *        </div>
   *        <div hidden={hasResults}>
   *          <div>No results has been found for {searchState.query}</div>
   *        </div>
   *      </div>
   *    );
   * });
   *
   * const App = () => (
   *   <InstantSearch
   *      searchClient={searchClient}
   *      indexName="instant_search"
   *    >
   *      <SearchBox />
   *      <Content />
   *    </InstantSearch>
   * );
   */
  var connectStateResults = createConnectorWithContext({
    displayName: 'AlgoliaStateResults',
    $$type: 'ais.stateResults',
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      return {
        searchState: searchState,
        searchResults: results,
        allSearchResults: searchResults.results,
        searching: searchResults.searching,
        isSearchStalled: searchResults.isSearchStalled,
        error: searchResults.error,
        searchingForFacetValues: searchResults.searchingForFacetValues,
        props: props
      };
    }
  });

  /**
   * connectStats connector provides the logic to build a widget that will
   *  displays algolia search statistics (hits number and processing time).
   * @name connectStats
   * @kind connector
   * @providedPropType {number} nbHits - number of hits returned by Algolia.
   * @providedPropType {number} nbSortedHits - number of sorted hits returned by Algolia.
   * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
   */
  var connectStats = createConnectorWithContext({
    displayName: 'AlgoliaStats',
    $$type: 'ais.stats',
    getProvidedProps: function getProvidedProps(props, _searchState, searchResults) {
      var results = getResults(searchResults, {
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

  function getId$f(props) {
    return props.attribute;
  }
  var namespace$6 = 'toggle';
  var falsyStrings = ['0', 'false', 'null', 'undefined'];
  function getCurrentRefinement$d(props, searchState, context) {
    var currentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace$6, ".").concat(getId$f(props)), false);
    if (falsyStrings.indexOf(currentRefinement) !== -1) {
      return false;
    }
    return Boolean(currentRefinement);
  }
  function _refine$a(props, searchState, nextRefinement, context) {
    var id = getId$f(props);
    var nextValue = _defineProperty({}, id, nextRefinement ? nextRefinement : false);
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage, namespace$6);
  }
  function _cleanUp$7(props, searchState, context) {
    return cleanUpValue(searchState, context, "".concat(namespace$6, ".").concat(getId$f(props)));
  }

  /**
   * connectToggleRefinement connector provides the logic to build a widget that will
   * provides an on/off filtering feature based on an attribute value.
   * @name connectToggleRefinement
   * @kind connector
   * @requirements To use this widget, you'll need an attribute to toggle on.
   *
   * You can't toggle on null or not-null values. If you want to address this particular use-case you'll need to compute an
   * extra boolean attribute saying if the value exists or not. See this [thread](https://discourse.algolia.com/t/how-to-create-a-toggle-for-the-absence-of-a-string-attribute/2460) for more details.
   *
   * @propType {string} attribute - Name of the attribute on which to apply the `value` refinement. Required when `value` is present.
   * @propType {string} label - Label for the toggle.
   * @propType {string} value - Value of the refinement to apply on `attribute`.
   * @propType {boolean} [defaultRefinement=false] - Default searchState of the widget. Should the toggle be checked by default?
   * @providedPropType {boolean} currentRefinement - `true` when the refinement is applied, `false` otherwise
   * @providedPropType {object} count - an object that contains the count for `checked` and `unchecked` state
   * @providedPropType {function} refine - a function to toggle a refinement
   * @providedPropType {function} createURL - a function to generate a URL for the corresponding search state
   */
  var connectToggleRefinement = createConnectorWithContext({
    displayName: 'AlgoliaToggle',
    $$type: 'ais.toggle',
    propTypes: {
      label: propTypes.string.isRequired,
      attribute: propTypes.string.isRequired,
      value: propTypes.any.isRequired,
      filter: propTypes.func,
      defaultRefinement: propTypes.bool
    },
    getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
      var attribute = props.attribute,
        value = props.value;
      var results = getResults(searchResults, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var currentRefinement = getCurrentRefinement$d(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var allFacetValues = results && results.getFacetByName(attribute) ? results.getFacetValues(attribute) : null;
      var facetValue =
      // Use null to always be consistent with type of the value
      // count: number | null
      allFacetValues && allFacetValues.length ? find(allFacetValues, function (item) {
        return item.name === value.toString();
      }) : null;
      var facetValueCount = facetValue && facetValue.count;
      var allFacetValuesCount =
      // Use null to always be consistent with type of the value
      // count: number | null
      allFacetValues && allFacetValues.length ? allFacetValues.reduce(function (acc, item) {
        return acc + item.count;
      }, 0) : null;
      var canRefine = currentRefinement ? allFacetValuesCount !== null && allFacetValuesCount > 0 : facetValueCount !== null && facetValueCount > 0;
      var count = {
        checked: allFacetValuesCount,
        unchecked: facetValueCount
      };
      return {
        currentRefinement: currentRefinement,
        canRefine: canRefine,
        count: count
      };
    },
    refine: function refine(props, searchState, nextRefinement) {
      return _refine$a(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$7(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
      var attribute = props.attribute,
        value = props.value,
        filter = props.filter;
      var checked = getCurrentRefinement$d(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var nextSearchParameters = searchParameters.addDisjunctiveFacet(attribute);
      if (checked) {
        nextSearchParameters = nextSearchParameters.addDisjunctiveFacetRefinement(attribute, value);
        if (filter) {
          nextSearchParameters = filter(nextSearchParameters);
        }
      }
      return nextSearchParameters;
    },
    getMetadata: function getMetadata(props, searchState) {
      var id = getId$f(props);
      var checked = getCurrentRefinement$d(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      var items = [];
      var index = getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
      if (checked) {
        items.push({
          label: props.label,
          currentRefinement: checked,
          attribute: props.attribute,
          value: function value(nextState) {
            return _refine$a(props, nextState, false, {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          }
        });
      }
      return {
        id: id,
        index: index,
        items: items
      };
    }
  });

  function inferPayload(_ref) {
    var method = _ref.method,
      results = _ref.results,
      currentHit = _ref.currentHit;
    var index = results.index;
    var queryID = currentHit.__queryID;
    var objectIDs = [currentHit.objectID];
    if (!queryID) {
      throw new Error("Could not infer `queryID`. Ensure `clickAnalytics: true` was added with the Configure widget.\nSee: https://alg.li/VpPpLt");
    }
    switch (method) {
      case 'clickedObjectIDsAfterSearch':
        {
          var positions = [currentHit.__position];
          return {
            index: index,
            queryID: queryID,
            objectIDs: objectIDs,
            positions: positions
          };
        }
      case 'convertedObjectIDsAfterSearch':
        return {
          index: index,
          queryID: queryID,
          objectIDs: objectIDs
        };
      default:
        throw new Error("Unsupported method \"".concat(method, "\" passed to the insights function. The supported methods are: \"clickedObjectIDsAfterSearch\", \"convertedObjectIDsAfterSearch\"."));
    }
  }
  var wrapInsightsClient = function wrapInsightsClient(aa, results, currentHit) {
    return function (method, payload) {
      if (typeof aa !== 'function') {
        throw new TypeError("Expected insightsClient to be a Function");
      }
      var inferredPayload = inferPayload({
        method: method,
        results: results,
        currentHit: currentHit
      });
      aa(method, _objectSpread2(_objectSpread2({}, inferredPayload), payload));
    };
  };
  var connectHitInsights = (function (insightsClient) {
    return createConnectorWithContext({
      displayName: 'AlgoliaInsights',
      $$type: 'ais.insights',
      getProvidedProps: function getProvidedProps(props, _, searchResults) {
        var results = getResults(searchResults, {
          ais: props.contextValue,
          multiIndexContext: props.indexContextValue
        });
        var insights = wrapInsightsClient(insightsClient, results, props.hit);
        return {
          insights: insights
        };
      }
    });
  });

  function getId$g() {
    return 'query';
  }
  function getAdditionalId() {
    return 'additionalVoiceParameters';
  }
  function getCurrentRefinementQuery(props, searchState, context) {
    var id = getId$g();
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
  function _refine$b(props, searchState, nextRefinement, context) {
    var _nextValue;
    var id = getId$g();
    var voiceParams = getAdditionalId();
    var queryLanguages = props.language ? {
      queryLanguages: [props.language.split('-')[0]]
    } : {};
    var additionalQueryParameters = typeof props.additionalQueryParameters === 'function' ? _objectSpread2({
      ignorePlurals: true,
      removeStopWords: true,
      optionalWords: nextRefinement
    }, props.additionalQueryParameters({
      query: nextRefinement
    })) : {};
    var nextValue = (_nextValue = {}, _defineProperty(_nextValue, id, nextRefinement), _defineProperty(_nextValue, voiceParams, _objectSpread2(_objectSpread2({}, queryLanguages), additionalQueryParameters)), _nextValue);
    var resetPage = true;
    return refineValue(searchState, nextValue, context, resetPage);
  }
  function _cleanUp$8(props, searchState, context) {
    var interimState = cleanUpValue(searchState, context, getId$g());
    return cleanUpValue(interimState, context, getAdditionalId());
  }
  var connectVoiceSearch = createConnectorWithContext({
    displayName: 'AlgoliaVoiceSearch',
    $$type: 'ais.voiceSearch',
    propTypes: {
      defaultRefinement: propTypes.string
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
      return _refine$b(props, searchState, nextRefinement, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      });
    },
    cleanUp: function cleanUp(props, searchState) {
      return _cleanUp$8(props, searchState, {
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
      var id = getId$g();
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
            return _refine$b(props, nextState, '', {
              ais: props.contextValue,
              multiIndexContext: props.indexContextValue
            });
          },
          currentRefinement: currentRefinement
        }]
      };
    }
  });

  // Core
  /** @deprecated use DynamicWidgets */
  var ExperimentalDynamicWidgets = DynamicWidgets$1;

  /** @deprecated use connectDynamicWidgets */
  var EXPERIMENTAL_connectDynamicWidgets = connectDynamicWidgets;

  exports.Configure = Configure;
  exports.DynamicWidgets = DynamicWidgets$1;
  exports.EXPERIMENTAL_connectConfigureRelatedItems = connectConfigureRelatedItems;
  exports.EXPERIMENTAL_connectDynamicWidgets = EXPERIMENTAL_connectDynamicWidgets;
  exports.ExperimentalConfigureRelatedItems = ConfigureRelatedItems$1;
  exports.ExperimentalDynamicWidgets = ExperimentalDynamicWidgets;
  exports.HIGHLIGHT_TAGS = HIGHLIGHT_TAGS;
  exports.Index = IndexWrapper;
  exports.InstantSearch = InstantSearch;
  exports.InstantSearchConsumer = InstantSearchConsumer;
  exports.InstantSearchProvider = InstantSearchProvider;
  exports.QueryRuleContext = QueryRuleContext;
  exports.connectAutoComplete = connectAutoComplete;
  exports.connectBreadcrumb = connectBreadcrumb;
  exports.connectConfigure = connectConfigure;
  exports.connectCurrentRefinements = connectCurrentRefinements;
  exports.connectDynamicWidgets = connectDynamicWidgets;
  exports.connectGeoSearch = connectGeoSearch;
  exports.connectHierarchicalMenu = connectHierarchicalMenu;
  exports.connectHighlight = connectHighlight;
  exports.connectHitInsights = connectHitInsights;
  exports.connectHits = connectHits;
  exports.connectHitsPerPage = connectHitsPerPage;
  exports.connectInfiniteHits = connectInfiniteHits;
  exports.connectMenu = connectMenu;
  exports.connectNumericMenu = connectNumericMenu;
  exports.connectPagination = connectPagination;
  exports.connectPoweredBy = connectPoweredBy;
  exports.connectQueryRules = connectQueryRules;
  exports.connectRange = connectRange;
  exports.connectRefinementList = connectRefinementList;
  exports.connectRelevantSort = connectRelevantSort;
  exports.connectScrollTo = connectScrollTo;
  exports.connectSearchBox = connectSearchBox;
  exports.connectSortBy = connectSortBy;
  exports.connectStateResults = connectStateResults;
  exports.connectStats = connectStats;
  exports.connectToggleRefinement = connectToggleRefinement;
  exports.connectVoiceSearch = connectVoiceSearch;
  exports.createConnector = createConnectorWithContext;
  exports.instantSearchContext = instantSearchContext;
  exports.translatable = translatable;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ReactInstantSearchCore.js.map
