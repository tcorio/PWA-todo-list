import TodoElement from '../components/todoElement';

export default function Todolist(outlet, data) {
  outlet.innerHTML = '';
  const constructor = document.createElement('div');
  constructor.innerHTML = `
    <section class="h-full" name="todolist">
      <h1>Todolist: ${data.todolist.name}</h1>
      <ul name="todolistElements"></ul>
    </section>
  `;
  for(const element of data.todolist.elements) {
    const elementOutlet = constructor.querySelector('[name=todolistElements]');
    TodoElement(elementOutlet, element);
  }
  outlet.appendChild(constructor);
  return constructor;
}
