import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost'
import config from '../../luz-eterna/client/src/config'

const clientGraph = new ApolloClient({
  uri: config.url,
  link: new HttpLink(),
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      operation.setContext({
        headers: { Authorization: `Bearer ${token}` },
      })
    }
  },
})

export default clientGraph
