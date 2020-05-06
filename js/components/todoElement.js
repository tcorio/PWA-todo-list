export default function TodoElement(outlet, data) {
  outlet.innerHTML = '';
  const constructor = document.createElement('li');
  constructor.innerHTML = `
    <span>${data.content}</span>
    <input type="checkbox" value="${data.done}">
  `
  outlet.appendChild(constructor);
  return constructor;
}
