function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import React, { Fragment } from 'react';
import connectDynamicWidgets from "../connectors/connectDynamicWidgets.js";
import { getDisplayName } from "../core/utils.js";
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
    return getAttribute(React.Children.only(element.props.children));
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
  React.Children.forEach(children, function (child) {
    var attribute = getAttribute(child);
    if (!attribute) {
      throw new Error("Could not find \"attribute\" prop for ".concat(getDisplayName(child), "."));
    }
    widgets.set(attribute, child);
  });

  // on initial render this will be empty, but React InstantSearch keeps
  // search state for unmounted components in place, so routing works.
  return /*#__PURE__*/React.createElement(React.Fragment, null, attributesToRender.map(function (attribute) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: attribute
    }, widgets.get(attribute) || /*#__PURE__*/React.createElement(Fallback, {
      attribute: attribute
    }));
  }));
}
export default connectDynamicWidgets(DynamicWidgets, {
  $$widgetType: 'ais.dynamicWidgets'
});