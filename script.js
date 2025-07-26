document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.style.color = '#2575fc';
    // Simulación de envío exitoso
    setTimeout(() => {
      formMessage.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
      form.reset();
    }, 800);
  });
}); 