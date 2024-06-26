import createConnector from "../core/createConnector.js";

/**
 * connectPoweredBy connector provides the logic to build a widget that
 * will display a link to algolia.
 * @name connectPoweredBy
 * @kind connector
 * @providedPropType {string} url - the url to redirect to algolia
 */
export default createConnector({
  displayName: 'AlgoliaPoweredBy',
  $$type: 'ais.poweredBy',
  getProvidedProps: function getProvidedProps() {
    var hostname = typeof window === 'undefined' || typeof window.location === 'undefined' ? '' : window.location.hostname;
    var url = 'https://www.algolia.com/?' + 'utm_source=react-instantsearch&' + 'utm_medium=website&' + "utm_content=".concat(hostname, "&") + 'utm_campaign=poweredby';
    return {
      url: url
    };
  }
});