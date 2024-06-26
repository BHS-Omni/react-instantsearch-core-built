"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _connectDynamicWidgets = _interopRequireDefault(require("../connectors/connectDynamicWidgets"));
var _utils = require("../core/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
    return getAttribute(_react.default.Children.only(element.props.children));
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
  _react.default.Children.forEach(children, function (child) {
    var attribute = getAttribute(child);
    if (!attribute) {
      throw new Error("Could not find \"attribute\" prop for ".concat((0, _utils.getDisplayName)(child), "."));
    }
    widgets.set(attribute, child);
  });

  // on initial render this will be empty, but React InstantSearch keeps
  // search state for unmounted components in place, so routing works.
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, attributesToRender.map(function (attribute) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: attribute
    }, widgets.get(attribute) || /*#__PURE__*/_react.default.createElement(Fallback, {
      attribute: attribute
    }));
  }));
}
var _default = (0, _connectDynamicWidgets.default)(DynamicWidgets, {
  $$widgetType: 'ais.dynamicWidgets'
});
exports.default = _default;