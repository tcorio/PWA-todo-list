import page from 'page';
import network from './network';

const outlet = document.querySelector('#app .outlet');
page('/', async () => {
  const todoElements = await fetch('http://localhost:3000/todos').then(res => res.json());
  console.log(todoElements);
})

page();
