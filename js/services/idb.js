import { openDB } from 'idb';

export default class idbService {
  db = null;

  async initDb() {
    this.db = await openDB('todolist', 1, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore('todos', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        });
        // Create an index on the 'date' property of the objects.
        store.createIndex('synced', 'synced');
        store.createIndex('updated', 'updated');
        store.createIndex('done', 'done');
        store.createIndex('date', 'date');
      },
    });
  }

  async setTodos(todos) {
    if(!this.db) { await this.initDb() }
    const tx = this.db.transaction('todos', 'readwrite');
    for (const todo of todos) {
      tx.store.put(todo)
    }
    await tx.done;
  }

  async getTodos() {
    if(!this.db) { await this.initDb() }
    return await this.db.getAll('todos')
  }
}
