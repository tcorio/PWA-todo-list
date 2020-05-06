import page from 'page';

const app = document.querySelector('#app .outlet');

page('/', async () => {
  const module = await import('./views/Home.js');
  const Home = module.default;

  Home(app);

  const result = await fetch('http://localhost:3000/todos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await result.json();
});

page();