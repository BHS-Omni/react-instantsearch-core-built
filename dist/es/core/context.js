import { createContext } from 'react';
export var instantSearchContext = /*#__PURE__*/createContext({
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
export { InstantSearchConsumer, InstantSearchProvider };
var _createContext = /*#__PURE__*/createContext(undefined),
  IndexConsumer = _createContext.Consumer,
  IndexProvider = _createContext.Provider;
export { IndexConsumer, IndexProvider };