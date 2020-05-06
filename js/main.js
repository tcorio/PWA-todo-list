import page from 'page';

const outlet = document.querySelector('#app .outlet');
page('/', async () => {
  const module = await import('./views/Todolist.js');
  const Todolist = module.default;

  const todoElements = await fetch('http://localhost:3000/todos').then(res => res.json());
  Todolist(outlet, {
    todolist: {
      name: 'Shopping list',
      elements: todoElements
    }
  })
})

page();
