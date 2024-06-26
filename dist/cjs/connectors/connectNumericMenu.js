"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _createConnector = _interopRequireDefault(require("../core/createConnector"));
var _indexUtils = require("../core/indexUtils");
var _utils = require("../core/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var namespace = 'multiRange';
function getId(props) {
  return props.attribute;
}
function getCurrentRefinement(props, searchState, context) {
  return (0, _indexUtils.getCurrentRefinementValue)(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), '', function (currentRefinement) {
    if (currentRefinement === '') {
      return '';
    }
    return currentRefinement;
  });
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
function _refine(props, searchState, nextRefinement, context) {
  var nextValue = _defineProperty({}, getId(props, searchState), nextRefinement);
  var resetPage = true;
  return (0, _indexUtils.refineValue)(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return (0, _indexUtils.cleanUpValue)(searchState, context, "".concat(namespace, ".").concat(getId(props)));
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
var _default = (0, _createConnector.default)({
  displayName: 'AlgoliaNumericMenu',
  $$type: 'ais.numericMenu',
  propTypes: {
    id: _propTypes.default.string,
    attribute: _propTypes.default.string.isRequired,
    items: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.node,
      start: _propTypes.default.number,
      end: _propTypes.default.number
    })).isRequired,
    transformItems: _propTypes.default.func
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var attribute = props.attribute;
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var results = (0, _indexUtils.getResults)(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var items = props.items.map(function (item) {
      var value = stringifyItem(item);
      return {
        label: item.label,
        value: value,
        isRefined: value === currentRefinement,
        noRefinement: results ? itemHasRefinement(getId(props), results, value) : false
      };
    });
    var stats = results && results.getFacetByName(attribute) ? results.getFacetStats(attribute) : null;
    var refinedItem = (0, _utils.find)(items, function (item) {
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
    var attribute = props.attribute;
    var _parseItem = parseItem(getCurrentRefinement(props, searchState, {
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
    var id = getId(props);
    var value = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var items = [];
    var index = (0, _indexUtils.getIndexId)({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    if (value !== '') {
      var _find = (0, _utils.find)(props.items, function (item) {
          return stringifyItem(item) === value;
        }),
        label = _find.label;
      items.push({
        label: "".concat(props.attribute, ": ").concat(label),
        attribute: props.attribute,
        currentRefinement: label,
        value: function value(nextState) {
          return _refine(props, nextState, '', {
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
exports.default = _default;