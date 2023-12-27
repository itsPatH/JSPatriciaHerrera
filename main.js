const products = [
  { name: "The American Burger", price: 6990 },
  { name: "The Fixed Burger", price: 6990 },
  { name: "The Code Burger", price: 7990 },
  { name: "Blonde Beer", price: 1250 },
  { name: "Red Beer", price: 1250 },
  { name: "Dark Beer", price: 1250 },
];

let shoppingCart = [];

let selection = prompt("Bienvenido a The Code Bar, ¿Desea continuar? si/no");

while (selection.toLowerCase() !== "si" && selection.toLowerCase() !== "no") {
  alert("Por favor ingrese Si o No");
  selection = prompt("¿Desea continuar?");
}

if (selection.toLowerCase() === "si") {
  alert("Seleccione sus productos a continuación");
  let showProducts = products.map(
    (product) => `${product.name} $${product.price}`
  );
  alert(showProducts.join(" / "));
} else if (selection.toLowerCase() === "no") {
  alert("Gracias por visitarnos, esperamos verte de nuevo por acá");
}

while (selection.toLowerCase() !== "no") {
  let product = prompt("Realiza tu pedido").toLowerCase();
  let selectedProduct = products.find(
    (p) => p.name.toLowerCase() === product
  );

  if (selectedProduct) {
    let quantity = parseInt(
      prompt(`Ingrese la cantidad que desea llevar de ${selectedProduct.name}`)
    );

    shoppingCart.push({
      product: selectedProduct.name,
      quantity,
      price: selectedProduct.price,
    });
  } else {
    alert("Opción inválida");
  }

  selection = prompt("¿Quiere agregar más productos?");
}

if (shoppingCart.length > 0) {
  alert("A continuación el monto a pagar");
  shoppingCart.forEach((finalShoppingCart) => {
    const totalProducto =
      finalShoppingCart.quantity * finalShoppingCart.price;
    console.log(
      `Producto: ${finalShoppingCart.product}, Cantidad: ${finalShoppingCart.quantity}, 
      Total: $${totalProducto}`
    );
  });

  const amountToPay = shoppingCart.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );
  alert(`Total a pagar: $${amountToPay}. Gracias por tu compra.`);
} else {
  alert("No has realizado ninguna compra. Gracias por visitarnos.");
}
