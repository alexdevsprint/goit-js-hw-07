const create = document.querySelector('#controls  button[data-create]');
const destroy = document.querySelector('#controls  button[data-destroy]');

create.addEventListener('click', addBoxes);
destroy.addEventListener('click', destroyBoxes);

function addBoxes() {
  const inputAmount = document.querySelector('#controls input');
  if (validateInput(inputAmount)) {
    createBoxes(inputAmount.value);
  }
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  const fragment = document.createDocumentFragment();
  let size = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

function validateInput(inputAmount) {
  if (inputAmount.value >= 1 && inputAmount.value <= 100) {
    return true;
  } else {
    return false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
