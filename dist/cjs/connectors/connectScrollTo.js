"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _createConnector = _interopRequireDefault(require("../core/createConnector"));
var _indexUtils = require("../core/indexUtils");
var _utils = require("../core/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * connectScrollTo connector provides the logic to build a widget that will
 * let the page scroll to a certain point.
 * @name connectScrollTo
 * @kind connector
 * @propType {string} [scrollOn="page"] - Widget searchState key on which to listen for changes, default to the pagination widget.
 * @providedPropType {any} value - the current refinement applied to the widget listened by scrollTo
 * @providedPropType {boolean} hasNotChanged - indicates whether the refinement came from the scrollOn argument (for instance page by default)
 */
var _default = (0, _createConnector.default)({
  displayName: 'AlgoliaScrollTo',
  $$type: 'ais.scrollTo',
  propTypes: {
    scrollOn: _propTypes.default.string
  },
  defaultProps: {
    scrollOn: 'page'
  },
  getProvidedProps: function getProvidedProps(props, searchState) {
    var id = props.scrollOn;
    var value = (0, _indexUtils.getCurrentRefinementValue)(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }, id, null);
    if (!this._prevSearchState) {
      this._prevSearchState = {};
    }

    // Get the subpart of the state that interest us
    if ((0, _indexUtils.hasMultipleIndices)({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    })) {
      searchState = searchState.indices ? searchState.indices[(0, _indexUtils.getIndexId)({
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
    var cleanedSearchState = (0, _utils.omit)(searchState, ['configure', id]);
    var hasNotChanged = (0, _utils.shallowEqual)(this._prevSearchState, cleanedSearchState);
    this._prevSearchState = cleanedSearchState;
    return {
      value: value,
      hasNotChanged: hasNotChanged
    };
  }
});
exports.default = _default;