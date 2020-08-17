const config = require("../../luz-eterna/client/src/config");
const fetcher = require("./fetcher");

export const clientApi = async (query, variables) => {
  const rsp = await fetcher({
    method: "post",
    url: config.url,
    data: { query, variables },
  });
  return rsp;
};

export const gql = (strings, ...values) =>
  String.raw(strings, ...values)
    .replace(/\n\s+/g, " ")
    .trim();

module.exports = { clientApi, gql };

window.clientApi = clientApi;
