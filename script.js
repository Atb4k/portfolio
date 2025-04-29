// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// AJAX form submission + popup
const form = document.getElementById('contact-form');
const alertBox = document.getElementById('form-alert');

function showAlert(message) {
  alertBox.textContent = message;
  alertBox.classList.add('show');
  setTimeout(() => alertBox.classList.remove('show'), 3000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      showAlert('Message sent successfully!');
      form.reset();
    } else {
      showAlert('Oops! Something went wrong.');
    }
  } catch (err) {
    showAlert('Oops! Something went wrong.');
  }
});
