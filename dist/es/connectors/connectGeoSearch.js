function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["defaultRefinement"];
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import createConnector from "../core/createConnector.js";
import { getResults, getCurrentRefinementValue, getIndexId, refineValue, cleanUpValue } from "../core/indexUtils.js";
import { objectHasKeys } from "../core/utils.js";

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
var getCurrentRefinement = function getCurrentRefinement(props, searchState, context) {
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
    propsWithoutDefaultRefinement = _objectWithoutProperties(props, _excluded);
  var aroundLatLng = getCurrentRefinementValue(propsWithoutDefaultRefinement, searchState, context, getAroundLatLngId());
  if (!aroundLatLng) {
    // Fallback on `configure.aroundLatLng`
    var configureAroundLatLng = getCurrentRefinementValue(propsWithoutDefaultRefinement, searchState, context, getConfigureAroundLatLngId());
    return configureAroundLatLng && stringToPosition(configureAroundLatLng);
  }
  return aroundLatLng;
};
var _refine = function refine(searchState, nextValue, context) {
  var resetPage = true;
  var nextRefinement = _defineProperty({}, getBoundingBoxId(), nextValue);
  return refineValue(searchState, nextRefinement, context, resetPage);
};
export default createConnector({
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

    var currentRefinementFromSearchState = getCurrentRefinement(props, searchState, context);
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
    return _refine(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    var currentRefinement = getCurrentRefinement(props, searchState, {
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
    var currentRefinement = getCurrentRefinement(props, searchState, context);
    if (currentRefinement) {
      items.push({
        label: "".concat(id, ": ").concat(currentRefinementToString(currentRefinement)),
        value: function value(nextState) {
          return _refine(nextState, nextRefinement, context);
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