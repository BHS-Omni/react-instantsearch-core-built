"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadataPayload = getMetadataPayload;
exports.injectMetadata = injectMetadata;
exports.isMetadataEnabled = isMetadataEnabled;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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