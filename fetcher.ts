import fetch from 'cross-fetch';
import merge from 'deepmerge';

const has = Object.prototype.hasOwnProperty;
let undef;

function fullUrl(base, url, params) {
  if (base === '') {
    return url;
  }
  if (base.endsWith('/')) {
    return base + url;
  }
  return `${base}/${url}${querystringify(params, '?')}`;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix = '') {
  const pairs = [];
  let value;
  let key;

  //
  // Optionally prefix with a '?' if needed
  //
  if (typeof prefix !== 'string') prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(`${key}=${value}`);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

export const fetcher = {
  optionsDefault: {
    url: '',
    method: 'GET',
    baseUrl: '',
    transformRequest: (data) => data,
    transformResponse: (data) => data,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    params: {},
    body: {},
    timeout: 0,
    responseType: 'json',
    debug: false,
  },

  request: (opt) => {
    opt.fullUrl = fullUrl(opt.baseUrl, opt.url, opt.params);
    if (opt.debug) {
      console.log(opt);
    }
    return fetch(opt.fullUrl, opt).then((response) => response.json());
  },

  get: (url, opt) => {
    opt.method = 'GET';
    opt.url = url;
    const options = merge(fetcher.optionsDefault, opt);

    delete options.body;
    return fetcher.request(options);
  },

  post: (url, body, opt) => {
    opt.method = 'POST';
    opt.url = url;
    opt.body = body;
    const options = merge(fetcher.optionsDefault, opt);
    options.body = JSON.stringify(options.body);
    return fetcher.request(options);
  },
};
