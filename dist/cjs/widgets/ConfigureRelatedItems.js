"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _connectConfigureRelatedItems = _interopRequireDefault(require("../connectors/connectConfigureRelatedItems"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ConfigureRelatedItems() {
  return null;
}
ConfigureRelatedItems.propTypes = {
  hit: _propTypes.default.object.isRequired,
  matchingPatterns: _propTypes.default.object.isRequired,
  transformSearchParameters: _propTypes.default.func
};
var _default = (0, _connectConfigureRelatedItems.default)(ConfigureRelatedItems, {
  $$widgetType: 'ais.configureRelatedItems'
});
exports.default = _default;