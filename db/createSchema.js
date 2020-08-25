const schema = require('@nexus/schema');

module.exports = ({ name, description, dao, fields }) => {
  const idField = fields.find((field) => field.type === 'ID');
  const createdAt = fields.find((field) => field.name === 'createdAt');
  const updatedAt = fields.find((field) => field.name === 'updatedAt');

  const now = () => new Date().toISOString();

  return {
    Object: schema.objectType({
      name,
      description,
      definition: (t) => {
        fields.forEach((field) => {
          t.field(field.name, {
            type: field.type,
            nullable: true,
            description: field.description,
          });
        });
      },
    }),

    ObjectFilter: schema.inputObjectType({
      name: `${name}Filter`,
      definition(t) {
        fields.forEach((field) => {
          t.field(field.name, { type: `Filter${field.type}` });
        });
      },
    }),

    ObjectInput: schema.inputObjectType({
      name: `${name}Input`,
      definition(t) {
        fields.forEach((field) => {
          if (!field.autonumber) {
            t.field(field.name, { type: field.type, nullable: true });
          }
        });
      },
    }),

    ObjectOrder: schema.inputObjectType({
      name: `${name}Order`,
      definition(t) {
        t.field('field', { type: `${name}OrderFields` });
        t.field('order', { type: 'Order' });
      },
    }),

    ObjectOrderFields: schema.enumType({
      name: `${name}OrderFields`,
      members: fields.map((field) => field.name),
    }),

    Query: schema.extendType({
      type: 'Query',
      definition: (t) => {
        t.field(`read${name}`, {
          type: name,
          args: {
            [idField.name]: schema.arg({
              required: true,
              type: idField.type,
            }),
          },
          nullable: true,
          resolve: (root, args) => dao.read(args[idField.name]),
        });
        t.field(`list${name}`, {
          type: name,
          list: true,
          args: {
            filter: schema.arg({ type: `${name}Filter` }),
            orderBy: schema.arg({ type: `${name}Order`, list: true }),
          },
          nullable: true,
          resolve: (root, args) => dao.list(args.filter, args.orderBy),
        });
        t.field(`count${name}`, {
          type: 'Int',
          args: {
            filter: schema.arg({ list: true, type: `${name}Filter` }),
          },
          nullable: true,
          resolve: (root, args) => dao.count(args.filter),
        });
      },
    }),

    Mutation: schema.extendType({
      type: 'Mutation',
      definition: (t) => {
        t.field(`upsert${name}`, {
          type: name,
          nullable: true,
          args: {
            input: schema.arg({ type: `${name}Input` }),
          },
          resolve: async (root, args) => {
            const key = args.input[idField.name];
            const rec = await dao.read(key);
            if (rec) {
              if (updatedAt) {
                args.input.updatedAt = now();
              }
              if (createdAt) {
                delete args.input.createdAt;
              }
              await dao.update(args.input[idField.name], args.input);
            } else {
              if (createdAt) {
                args.input.createdAt = now();
              }
              if (updatedAt) {
                args.input.updatedAt = now();
              }
              await dao.create(args.input);
            }
            return dao.read(key);
          },
        });

        t.field(`create${name}`, {
          type: name,
          nullable: true,
          args: {
            input: schema.arg({ type: `${name}Input` }),
          },
          resolve: (root, args) => {
            if (createdAt) {
              args.input.createdAt = now();
            }
            if (updatedAt) {
              args.input.updatedAt = now();
            }
            return dao.create(args.input);
          },
        });

        t.field(`update${name}`, {
          type: name,
          nullable: true,
          args: {
            [idField.name]: schema.arg({ type: idField.type, required: true }),
            input: schema.arg({ type: `${name}Input` }),
          },
          resolve: (root, args) => {
            if (updatedAt) {
              args.input.updatedAt = now();
            }
            if (createdAt) {
              delete args.input.createdAt;
            }
            return dao.update(args[idField.name], args.input);
          },
        });

        t.field(`del${name}`, {
          nullable: true,
          type: 'Int',
          args: {
            [idField.name]: schema.arg({ type: idField.type, required: true }),
          },
          resolve: (root, args) => dao.del(args[idField.name]),
        });
      },
    }),
  };
};
