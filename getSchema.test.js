import getSchema from './getSchema';

describe('getSchema', () => {
  it('Seller', async () => {
    const rsp = await getSchema('Seller');
    console.log('rsp', rsp);

    expect(rsp).toEqual({
      name: 'Seller',
      description: 'Cadastro de vendedores',
      fields: [
        { name: 'CdVendedor', title: 'Código', type: 'ID' },
        { name: 'NmVendedor', title: 'Vendedor', type: 'String' },
        { name: 'UF', title: 'UF', type: 'String' },
      ],
    });
  });

  it('Authorization', async () => {
    const rsp = await getSchema('Authorization');
    console.log('rsp', rsp);

    expect(rsp).toEqual({
      name: 'Authorization',
      description: 'Permissões de acesso',
      fields: [
        { name: 'id', title: 'Código', type: 'ID' },
        { name: 'idUser', title: 'Cód. Usuário', type: 'Int' },
        { name: 'idSubject', title: 'Cód Objetivo', type: 'Int' },
        { name: 'actions', title: 'Ações', type: 'String' },
        { name: 'user', title: 'Usuário', type: 'User' },
        { name: 'subject', title: 'Objetivo', type: 'Subject' },
      ],
    });
  });
});
