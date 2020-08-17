import { clientApi, gql } from './clientApi';

async function getSchema(tableName) {
  const query = gql`
    query($tableName: String!) {
      __type(name: $tableName) {
        name
        kind
        description
        fields {
          name
          description
          type {
            name
            kind
            description
            ofType {
              name
              description
            }
          }
        }
      }
    }
  `;

  const rsp = await clientApi(query, { tableName });
  const res = {
    name: rsp.data.__type.name,
    description: rsp.data.__type.description,
    fields: rsp.data.__type.fields.map((field) => ({
      name: field.name,
      title: field.description || field.name,
      type: field.type.name || field.type.ofType.name,
    })),
  };
  return res;
}

export default getSchema;

// ($tableName: String)
// (name: $tablename)
// 2389642
