export default function TodoElement(outlet, data) {
  outlet.innerHTML = '';
  const constructor = document.createElement('li');
  constructor.classList = "max-w-sm w-full lg:max-w-full lg:flex rounded bg-white mb-4 hover:shadow transition-all duration-200 ease-out"
  constructor.innerHTML = `
    <div class="p-4 border-r border-solid border-gray-300">
      <input type="checkbox" value="${data.done}">
    </div>
    <div class="p-4 flex flex-col justify-center">
      <span>${data.content}</span>
    </div>
  `
  outlet.appendChild(constructor);
  return constructor;
}
