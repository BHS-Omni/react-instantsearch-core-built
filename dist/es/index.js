// Core
export { default as createConnector } from "./core/createConnector.js";
export { instantSearchContext, InstantSearchConsumer, InstantSearchProvider } from "./core/context.js";

// Utils
// @ts-ignore not yet typed
export { HIGHLIGHT_TAGS } from "./core/highlight.js";
// @ts-ignore not yet typed
export { default as version } from "./core/version.js";
// @ts-ignore not yet typed
export { default as translatable } from "./core/translatable.js";

// Widgets
// @ts-ignore not yet typed
export { default as Configure } from "./widgets/Configure.js";
export { default as ExperimentalConfigureRelatedItems } from "./widgets/ConfigureRelatedItems.js";
import { default as connectDynamicWidgets } from "./connectors/connectDynamicWidgets.js";
import { default as DynamicWidgets } from "./widgets/DynamicWidgets.js";
/** @deprecated use DynamicWidgets */
var ExperimentalDynamicWidgets = DynamicWidgets;
export { ExperimentalDynamicWidgets, DynamicWidgets };
export { default as QueryRuleContext } from "./widgets/QueryRuleContext.js";
export { default as Index } from "./widgets/Index.js";
export { default as InstantSearch } from "./widgets/InstantSearch.js";

// Connectors
// @ts-ignore not yet typed
export { default as connectAutoComplete } from "./connectors/connectAutoComplete.js";
// @ts-ignore not yet typed
export { default as connectBreadcrumb } from "./connectors/connectBreadcrumb.js";
// @ts-ignore not yet typed
export { default as connectConfigure } from "./connectors/connectConfigure.js";
export { default as EXPERIMENTAL_connectConfigureRelatedItems } from "./connectors/connectConfigureRelatedItems.js";
// @ts-ignore not yet typed
export { default as connectCurrentRefinements } from "./connectors/connectCurrentRefinements.js";

/** @deprecated use connectDynamicWidgets */
var EXPERIMENTAL_connectDynamicWidgets = connectDynamicWidgets;
export { connectDynamicWidgets, EXPERIMENTAL_connectDynamicWidgets };

// @ts-ignore not yet typed
export { default as connectGeoSearch } from "./connectors/connectGeoSearch.js";
// @ts-ignore not yet typed
export { default as connectHierarchicalMenu } from "./connectors/connectHierarchicalMenu.js";
// @ts-ignore not yet typed
export { default as connectHighlight } from "./connectors/connectHighlight.js";
// @ts-ignore not yet typed
export { default as connectHits } from "./connectors/connectHits.js";
// @ts-ignore not yet typed
export { default as connectHitsPerPage } from "./connectors/connectHitsPerPage.js";
// @ts-ignore not yet typed
export { default as connectInfiniteHits } from "./connectors/connectInfiniteHits.js";
// @ts-ignore not yet typed
export { default as connectMenu } from "./connectors/connectMenu.js";
// @ts-ignore not yet typed
export { default as connectNumericMenu } from "./connectors/connectNumericMenu.js";
// @ts-ignore not yet typed
export { default as connectPagination } from "./connectors/connectPagination.js";
// @ts-ignore not yet typed
export { default as connectPoweredBy } from "./connectors/connectPoweredBy.js";
// @ts-ignore not yet typed
export { default as connectQueryRules } from "./connectors/connectQueryRules.js";
// @ts-ignore not yet typed
export { default as connectRange } from "./connectors/connectRange.js";
// @ts-ignore not yet typed
export { default as connectRefinementList } from "./connectors/connectRefinementList.js";
// @ts-ignore not yet typed
export { default as connectScrollTo } from "./connectors/connectScrollTo.js";
// @ts-ignore not yet typed
export { default as connectSearchBox } from "./connectors/connectSearchBox.js";
// @ts-ignore not yet typed
export { default as connectRelevantSort } from "./connectors/connectRelevantSort.js";
// @ts-ignore not yet typed
export { default as connectSortBy } from "./connectors/connectSortBy.js";
// @ts-ignore not yet typed
export { default as connectStateResults } from "./connectors/connectStateResults.js";
// @ts-ignore not yet typed
export { default as connectStats } from "./connectors/connectStats.js";
// @ts-ignore not yet typed
export { default as connectToggleRefinement } from "./connectors/connectToggleRefinement.js";
// @ts-ignore not yet typed
export { default as connectHitInsights } from "./connectors/connectHitInsights.js";
// @ts-ignore not yet typed
export { default as connectVoiceSearch } from "./connectors/connectVoiceSearch.js";

// Types
export * from "./types/index.js";