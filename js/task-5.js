function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const color = document.querySelector('.color')
const changeColor = document.querySelector('.change-color')

changeColor.addEventListener('click', function() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  color.textContent =  currentColor;
})