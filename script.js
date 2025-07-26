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

  // Función para manejar los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-comprar');
  
  botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obtener el nombre del producto del h3 dentro del mismo venta-card
      const ventaCard = boton.closest('.venta-card');
      const nombreProducto = ventaCard.querySelector('h3').textContent;
      
      // Crear el mensaje personalizado
      const mensaje = `Hola, Deseo comprar este perfume (${nombreProducto})`;
      
      // Codificar el mensaje para la URL
      const mensajeCodificado = encodeURIComponent(mensaje);
      
      // Crear la URL del DM de Instagram con el mensaje
      const urlInstagram = `https://www.instagram.com/direct/t/essentiel_uy?text=${mensajeCodificado}`;
      
      // Intentar abrir la aplicación de Instagram primero, si no está disponible, abrir en navegador
      const urlApp = `instagram://direct?username=essentiel_uy&text=${mensajeCodificado}`;
      
      // Intentar abrir la app, si falla, abrir en navegador
      window.location.href = urlApp;
      
      // Fallback: si la app no se abre, abrir en navegador después de un breve delay
      setTimeout(() => {
        window.open(urlInstagram, '_blank');
      }, 1000);
    });
  });
}); 