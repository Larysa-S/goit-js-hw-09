let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Ініціалізація: зчитуємо дані зі сховища при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  // Оновлюємо об'єкт formData
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  // Заповнюємо поля форми значеннями з об'єкта
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = formData.email.trim();
  const messageValue = formData.message.trim();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
