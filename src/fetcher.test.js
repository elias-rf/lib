import fetcher from './fetcher'

describe('fetcher', () => {
  it('deve fazer get', async () => {
    const rsp = await fetcher({
      method: 'get',
      url: 'https://postman-echo.com/get?a=1',
    })

    expect(rsp).toMatchObject({
      args: { a: '1' },
      headers: {
        'x-forwarded-proto': 'https',
        'x-forwarded-port': '443',
        host: 'postman-echo.com',
        accept: 'application/json, text/plain, */*',
        'user-agent': 'axios/0.19.2',
      },
      url: 'https://postman-echo.com/get?a=1',
    })
  })

  it('deve fazer post', async () => {
    const rsp = await fetcher({
      method: 'post',
      url: 'https://postman-echo.com/post',
      data: { a: 'teste' },
      headers: { x: 'h' },
    })

    expect(rsp).toMatchObject({
      args: {},
      data: { a: 'teste' },
      headers: {
        'x-forwarded-proto': 'https',
        'x-forwarded-port': '443',
        host: 'postman-echo.com',
        'content-length': '13',
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=utf-8',
        x: 'h',
        'user-agent': 'axios/0.19.2',
      },
      url: 'https://postman-echo.com/post',
    })
  })

  it('deve receber 404', async () => {
    const rsp = await fetcher({
      method: 'get',
      url: 'https://postman-echo.com/status/404',
    })

    expect(rsp).toMatchObject({
      status: 404,
    })
  })

  it('deve receber error servidor não encontrado', async () => {
    const rsp = await fetcher({
      method: 'GET',
      url: 'https://postman-echo.org',
    })

    expect(rsp).toEqual({
      error: 'getaddrinfo ENOTFOUND postman-echo.org',
    })
  })

  it('deve acessar graphql', async () => {
    const rsp = await fetcher({
      method: 'post',
      url: 'https://graphql-pokemon.now.sh',
      data: { query: '{pokemons(first: 2) {id name}}' },
    })

    expect(rsp).toEqual({
      data: {
        pokemons: [
          {
            id: 'UG9rZW1vbjowMDE=',
            name: 'Bulbasaur',
          },
          {
            id: 'UG9rZW1vbjowMDI=',
            name: 'Ivysaur',
          },
        ],
      },
    })
  })

  it('deve acessar graphql com erro', async () => {
    const rsp = await fetcher({
      method: 'post',
      url: 'https://graphql-pokemon.now.sh',
      data: { query: '{pokemons(first: 2) {id_ name}}' },
    })

    expect(rsp).toEqual({
      errors: [
        {
          message: 'Cannot query field "id_" on type "Pokemon". Did you mean "id"?',
          locations: [
            {
              line: 1,
              column: 22,
            },
          ],
          stack:
            'GraphQLError: Cannot query field "id_" on type "Pokemon". Did you mean "id"?\n    at Object.Field (/home/nowuser/src/node_modules/graphql/validation/rules/FieldsOnCorrectType.js:66:31)\n    at Object.enter (/home/nowuser/src/node_modules/graphql/language/visitor.js:296:29)\n    at Object.enter (/home/nowuser/src/node_modules/graphql/language/visitor.js:338:25)\n    at visit (/home/nowuser/src/node_modules/graphql/language/visitor.js:228:26)\n    at visitUsingRules (/home/nowuser/src/node_modules/graphql/validation/validate.js:75:22)\n    at validate (/home/nowuser/src/node_modules/graphql/validation/validate.js:60:10)\n    at /home/nowuser/src/node_modules/koa-graphql/dist/index.js:161:60\n    at new Promise (<anonymous>)\n    at Object.middleware$ (/home/nowuser/src/node_modules/koa-graphql/dist/index.js:138:20)\n    at tryCatch (/home/nowuser/src/node_modules/koa-graphql/node_modules/regenerator-runtime/runtime.js:65:40)',
        },
      ],
    })
  })
})
