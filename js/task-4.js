function sendForm(event) {
  event.preventDefault(); 
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();  
  if (email && password) {

  } else {
    alert('All form fields must be filled in');
  }
}




document.querySelector('.login-form').addEventListener('submit', sendForm);


