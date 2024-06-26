function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import PropTypes from 'prop-types';
import createConnector from "../core/createConnector.js";
import { cleanUpValue, getIndexId, refineValue, getCurrentRefinementValue, getResults } from "../core/indexUtils.js";

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

function getId(props) {
  return props.attribute;
}
var namespace = 'range';
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
function getCurrentRefinement(props, searchState, currentRange, context) {
  var _getCurrentRefinement = getCurrentRefinementValue(props, searchState, context, "".concat(namespace, ".").concat(getId(props)), {}),
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
function _refine(props, searchState, nextRefinement, currentRange, context) {
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
  var id = getId(props);
  var resetPage = true;
  var nextValue = _defineProperty({}, id, {
    min: nextValueForRefinement(props.min !== undefined, isMinReset, currentMinRange, nextMinAsNumber),
    max: nextValueForRefinement(props.max !== undefined, isMaxReset, currentMaxRange, nextMaxAsNumber)
  });
  return refineValue(searchState, nextValue, context, resetPage, namespace);
}
function _cleanUp(props, searchState, context) {
  return cleanUpValue(searchState, context, "".concat(namespace, ".").concat(getId(props)));
}
export default createConnector({
  displayName: 'AlgoliaRange',
  $$type: 'ais.range',
  propTypes: {
    id: PropTypes.string,
    attribute: PropTypes.string.isRequired,
    defaultRefinement: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    }),
    min: PropTypes.number,
    max: PropTypes.number,
    precision: PropTypes.number,
    header: PropTypes.node,
    footer: PropTypes.node
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
    var currentRefinement = getCurrentRefinement(props, searchState, this._currentRange, {
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
    return _refine(props, searchState, nextRefinement, this._currentRange, {
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
  getSearchParameters: function getSearchParameters(params, props, searchState) {
    var attribute = props.attribute;
    var _getCurrentRefinement2 = getCurrentRefinement(props, searchState, this._currentRange, {
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
    var _getCurrentRefinement3 = getCurrentRefinement(props, searchState, this._currentRange, {
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
          return _refine(props, nextState, {}, _this._currentRange, {
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
      id: getId(props),
      index: getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: items
    };
  }
});