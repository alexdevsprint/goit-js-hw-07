function validateForm(form) {  
  for (let element of form.elements) {
    if (element.name && element.value.trim() === '') {
      
      return false;
    }
    
  }
  return true;
}

function getFormData(form) {
  const formData = {};
  for (let element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value.trim();
    }
  }
  return formData;
}

function sendForm(event) {
  event.preventDefault();
  const form = document.querySelector('.login-form');

  if (validateForm(form)) {
    console.log(getFormData(form));
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
}

document.querySelector('.login-form').addEventListener('submit', sendForm);
