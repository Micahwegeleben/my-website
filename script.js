const container = document.getElementById('container');

function createEffect(x, y) {
  const effect = document.createElement('div');
  effect.classList.add('effect');
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;
  container.appendChild(effect);
}

container.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  createEffect(x, y);
});
