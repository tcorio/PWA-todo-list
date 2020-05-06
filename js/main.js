fetch('http://localhost:3000/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    content: 'This is the first todo',
    done: true,
    isSync: false
  })
}).then(console.log)
