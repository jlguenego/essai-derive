const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="container">
    <h1>👋 Hello World!</h1>
    <p>Bienvenue sur essai-dérivé</p>
    <button id="counter-btn">Clique-moi !</button>
    <span id="count">0</span>
  </div>
`;

let count = 0;
const btn = document.querySelector<HTMLButtonElement>('#counter-btn')!;
const countEl = document.querySelector<HTMLSpanElement>('#count')!;

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = String(count);
});
