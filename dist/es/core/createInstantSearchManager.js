var _excluded = ["resultsFacetValues"],
  _excluded2 = ["resultsFacetValues"],
  _excluded3 = ["resultsFacetValues"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import algoliasearchHelper from 'algoliasearch-helper';
import { version as ReactVersion } from 'react';
import createStore from "./createStore.js";
import createWidgetsManager from "./createWidgetsManager.js";
import { HIGHLIGHT_TAGS } from "./highlight.js";
import { hasMultipleIndices } from "./indexUtils.js";
import version from "./version.js";
function addAlgoliaAgents(searchClient) {
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    searchClient.addAlgoliaAgent("react (".concat(ReactVersion, ")"));
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
export default function createInstantSearchManager(_ref) {
  var indexName = _ref.indexName,
    _ref$initialState = _ref.initialState,
    initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
    searchClient = _ref.searchClient,
    resultsState = _ref.resultsState,
    stalledSearchDelay = _ref.stalledSearchDelay;
  var helper = algoliasearchHelper(searchClient, indexName, _objectSpread({}, HIGHLIGHT_TAGS));
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
      return _objectSpread(_objectSpread({}, indices), {}, _defineProperty({}, indexId, widgets.concat(widget)));
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
      var _getSearchParameters = getSearchParameters(helper.state),
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
        results = _objectSpread(_objectSpread({}, results), {}, _defineProperty({}, indexId, event.results));
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
        partialState = _objectWithoutProperties(currentState, _excluded);
      store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
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
      partialState = _objectWithoutProperties(currentState, _excluded2);
    store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
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
        store.setState(_objectSpread(_objectSpread({}, partialState), {}, {
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
          return _objectSpread(_objectSpread({}, request), {}, {
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
    client.cache = _objectSpread(_objectSpread({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
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
    client.cache = _objectSpread(_objectSpread({}, client.cache), {}, _defineProperty({}, key, JSON.stringify({
      results: results.rawResults
    })));
  }
  function hydrateResultsState(results) {
    if (!results) {
      return null;
    }
    if (Array.isArray(results.results)) {
      return results.results.reduce(function (acc, result) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, result._internalIndexId, new algoliasearchHelper.SearchResults(new algoliasearchHelper.SearchParameters(result.state), result.rawResults)));
      }, {});
    }
    return new algoliasearchHelper.SearchResults(new algoliasearchHelper.SearchParameters(results.state), results.rawResults);
  }

  // Called whenever a widget has been rendered with new props.
  function onWidgetsUpdate() {
    var metadata = getMetadata(store.getState().widgets);
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
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
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
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
    store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
      searchingForFacetValues: true
    }));
    helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
      var _objectSpread7;
      store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
        error: null,
        searchingForFacetValues: false,
        resultsFacetValues: _objectSpread(_objectSpread({}, store.getState().resultsFacetValues), {}, (_objectSpread7 = {}, _defineProperty(_objectSpread7, facetName, content.facetHits), _defineProperty(_objectSpread7, "query", query), _objectSpread7))
      }));
    }, function (error) {
      store.setState(_objectSpread(_objectSpread({}, store.getState()), {}, {
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
    return _objectSpread(_objectSpread({
      value: function value() {
        return {};
      }
    }, datum), {}, {
      items: datum.items && datum.items.map(function (item) {
        return _objectSpread(_objectSpread({
          value: function value() {
            return {};
          }
        }, item), {}, {
          items: item.items && item.items.map(function (nestedItem) {
            return _objectSpread({
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