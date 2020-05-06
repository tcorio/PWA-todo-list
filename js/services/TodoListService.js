import IdbService from './idb';
export default class TodoListService {
  idbService = null;
  constructor() {
    this.idbService = new IdbService();
  }
  async getTodos() {
    if (navigator.onLine) {
      const todos =  await fetch('http://localhost:3000/todos').then(res => res.json());
      this.idbService.setTodos(todos)
      return todos;
    }
    return this.idbService.getTodos();
  }
}
