/* Dynamic year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Smooth scroll for same-page anchors */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

/* Form confirmation */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    alert('Thank you! Your message has been sent. I will reply within 24 hours.');
  });
}