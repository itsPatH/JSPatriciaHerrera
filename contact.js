   
   document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('#enviar');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita la presentación de formularios predeterminada

      // Obtén los datos del formulario
      const formData = new FormData(form);

      // Deshabilita el botón de envío durante la solicitud
      submitButton.setAttribute('disabled', true);

      // Realiza una solicitud POST utilizando la API Fetch
      fetch('submeter-formulario.php', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          // Maneja los datos de la respuesta según sea necesario
          console.log(data);
          // Puedes agregar aquí lógica adicional, como mostrar un mensaje de éxito
        })
        .catch(error => {
          // Maneja los errores
          console.error('Error:', error);
          // Puedes mostrar un mensaje de error al usuario
        })
        .finally(() => {
          // Habilita nuevamente el botón de envío después de la solicitud, independientemente del resultado
          submitButton.removeAttribute('disabled');
        });
    });
  });

