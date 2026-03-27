const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
