let nombre = prompt ("Por favor ingrese su nombre para ser atendido");{
        alert (`Hola, ${nombre}! Bienvenido, selecciona el producto al que quieras calcular el IVA en el siguiente paso`);
    }
// Función para el cálculo del IVA
function calcularIVA(precioSinIVA, porcentajeIVA) {
    return precioSinIVA * (porcentajeIVA / 100);
  }
  
  // Función 2
  function calcularIVAProductos() {
    const productos = [
      { nombre: "Nevera", porcentajeIVA: 1.2 },
      { nombre: "Refrigerador", porcentajeIVA: 1.2 },
      { nombre: "Congelador", porcentajeIVA: 1.2 }
    ];
  
    let continuar = true;
  
    while (continuar) {
      // Mostrar productos
      let opciones = "Seleccione un producto:\n";
      for (let i = 0; i < productos.length; i++) {
        opciones += `${i + 1}. ${productos[i].nombre}\n`;
      }
  
      const seleccion = parseInt(prompt(opciones));
  
      if (isNaN(seleccion) || seleccion < 1 || seleccion > productos.length) {
        alert("Selección no válida. Por favor, elija un número entre 1 y 3.");
        continue;
      }
  
      const productoSeleccionado = productos[seleccion - 1];
      let precioSinIVA = parseFloat(prompt(`Ingrese el precio del ${productoSeleccionado.nombre} sin IVA:`));
  
      if (isNaN(precioSinIVA) || precioSinIVA <= 0) {
        alert("Precio sin IVA no válido. Por favor, ingrese un monto mayor que cero.");
        continue;
      }
  
      const iva = calcularIVA(precioSinIVA, productoSeleccionado.porcentajeIVA);
  
      // Mostrar resultados
      alert(`Resumen del ${productoSeleccionado.nombre}:\n\nPrecio sin IVA: $${precioSinIVA.toFixed(2)}\nIVA (${productoSeleccionado.porcentajeIVA}%): $${iva.toFixed(2)}\nPrecio con IVA: $${(precioSinIVA + iva).toFixed(2)}`);
  
      // Preguntar al usuario si desea realizar otro cálculo
      continuar = confirm("¿Desea calcular el IVA de otro producto?");
    }
  }
  
  // call
  calcularIVAProductos();
  