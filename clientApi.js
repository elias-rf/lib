import fetcher from './fetcher'
import config from '../../luz-eterna/client/src/config'

export const clientApi = async (query, variables) => {
  const rsp = await fetcher({
    method: 'post',
    url: config.url,
    data: { query, variables },
  })
  return rsp
}

export const gql = (strings, ...values) =>
  String.raw(strings, ...values)
    .replace(/\n\s+/g, ' ')
    .trim()

export default clientApi

window.clientApi = clientApi
