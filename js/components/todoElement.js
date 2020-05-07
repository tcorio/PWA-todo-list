import TodolistService from '../services/TodoListService';

export default function TodoElement(outlet, data) {
  const constructor = document.createElement('li');
  constructor.classList = "max-w-sm w-full max-w-full flex rounded bg-white mb-4 hover:shadow transition-all duration-200 ease-out"
  constructor.innerHTML = `
    <div class="p-4 border-r border-solid border-gray-300">
      <input type="checkbox" ${data.done ? 'checked' : ''}>
    </div>
    <div class="p-4 flex flex-col justify-center">
      <span>${data.content}</span>
    </div>
  `
  const checkbox = constructor.querySelector('input[type=checkbox]');
  checkbox.addEventListener('change', async(e) => {
    const state = e.target.checked;
    await TodolistService.changeDoneState(data, state)
  })

  outlet.appendChild(constructor);
  return constructor;
}
