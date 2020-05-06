import TodoElement from '../components/todoElement';

export default function Todolist(outlet, data) {
  outlet.innerHTML = '';
  const constructor = document.createElement('div');
  constructor.innerHTML = `
    <section class="h-full">
      <h1 class="text-2xl font-semibold m-4 text-center">${data.todolist.name}</h1>
      <ul name="todolistElements"></ul>
      <form name="addTodo" class="w-full flex hover:shadow transition-all duration-200 ease-out">
        <input type="text" name="todoContent" class="w-full rounded outline-none p-2 rounded-br-none rounded-tr-none">
        <button class="bg-blue-300 outline-none rounded px-3 text-xl text-white rounded-tl-none rounded-bl-none">+</button>
      </form>
    </section>
  `;
  for(const element of data.todolist.elements) {
    const elementOutlet = constructor.querySelector('[name=todolistElements]');
    TodoElement(elementOutlet, element);
  }
  outlet.appendChild(constructor);
  return constructor;
}
