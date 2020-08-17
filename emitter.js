export class Emitter {
  constructor() {
    this.getNextUniqueId = this.getIdGenerator();
    this.subscriptions = {};
  }

  on(eventType, callback) {
    const id = this.getNextUniqueId();

    if (!this.subscriptions[eventType]) this.subscriptions[eventType] = {};

    this.subscriptions[eventType][id] = callback;

    return () => {
      delete this.subscriptions[eventType][id];
      if (Object.keys(this.subscriptions[eventType]).length === 0)
        delete this.subscriptions[eventType];
    };
  }

  once(eventType, callback) {
    const id = -this.getNextUniqueId();

    if (!this.subscriptions[eventType]) this.subscriptions[eventType] = {};

    this.subscriptions[eventType][id] = callback;

    return () => {
      delete this.subscriptions[eventType][id];
      if (Object.keys(this.subscriptions[eventType]).length === 0)
        delete this.subscriptions[eventType];
    };
  }

  emit(eventType, ...arg) {
    if (this.subscriptions['*']) {
      Object.keys(this.subscriptions['*']).forEach((key) =>
        this.subscriptions['*'][key](eventType, ...arg)
      );
    }
    if (!this.subscriptions[eventType]) {
      // console.error('Não há ouvinte para:', eventType)
      return;
    }

    Object.keys(this.subscriptions[eventType]).forEach((key) => {
      this.subscriptions[eventType][key](...arg);
      if (key < 0) {
        delete this.subscriptions[eventType][key];
        if (Object.keys(this.subscriptions[eventType]).length === 0)
          delete this.subscriptions[eventType];
      }
    });
  }

  getIdGenerator() {
    let lastId = 0;
    return function getNextUniqueId() {
      lastId += 1;
      return lastId;
    };
  }

  keys() {
    return Object.keys(this.subscriptions);
  }

  clear(eventType) {
    delete this.subscriptions[eventType];
  }

  count(eventType) {
    if (!this.subscriptions[eventType]) return 0;
    return Object.keys(this.subscriptions[eventType]).length;
  }

  has(eventType) {
    return Object.keys(this.subscriptions[eventType]).length > 0;
  }
}

export const emitter = new Emitter();

if (process.env.NODE_ENV === 'development') {
  emitter.on('*', (eventType, ...args) => {
    console.log('EVENT:', eventType, args);
  });
}

window.emitter = emitter;
