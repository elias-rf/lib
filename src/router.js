import page from 'page';
import store from '../store';

function router() {
  page('*', (ctx) => {
    const aux = { ...ctx };
    delete aux.page;
    store.set('router', aux);
  });

  page();
}

export default router;
