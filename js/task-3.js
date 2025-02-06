function inputText(event) {
  event.currentTarget.value = event.currentTarget.value.trim();
  if (event.currentTarget.value) {
    document.querySelector('#name-output').textContent  =
      event.currentTarget.value;
  } else {
    document.querySelector('#name-output').textContent  = 'Anonymous';
  }
}
document.querySelector('#name-input').addEventListener('input', inputText);
