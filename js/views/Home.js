export default function Home(page, data) {
    page.innerHTML = '';
    const constructor = document.createElement('div');
    constructor.innerHTML = `
      <section name="Home">
        <h1>My awesome todo :</h1>
        <section class="todolist">
          <ul></ul>
        </section>
      </section>
    `;
  
    const view = constructor
      .querySelector('[name="Home"]')
      .cloneNode(true);
  
    page.appendChild(view);
  }
  