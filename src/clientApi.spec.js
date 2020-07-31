import { gql } from './clientApi';

describe('ClientApi', () => {
  it('gql deve retornar string', () => {
    expect(gql`
      query {
        listPhonebook {
          id
          name
          department
        }
      }
    `).toBe('query { listPhonebook { id name department } }');
  });
});
