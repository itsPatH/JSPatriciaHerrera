
  const products = [
    { name: "The American Burger", price: 6990 },
    { name: "The Fixed Burger", price: 6990 },
    { name: "The Code Burger", price: 7990 },
    { name: "Blonde Beer", price: 1250 },
    { name: "Red Beer", price: 1250 },
    { name: "Dark Beer", price: 1250 },
  ];
  
  let shoppingCart = [];
  
  let selection = prompt(
    "Bienvenido a The Code Bar, ¿Desea continuar? si/no"
  );
  while (selection !== "si" && selection !== "no") {
    alert("Por favor ingresar Si o No");
    selection = prompt("¿Desea continuar?");
  }
  
  if (selection === "si") {
    alert("Seleccione sus productos a continuación");
    let showProducts = products.map(
      (product) => product.name + " " + "$" + product.price
    );
    alert(showProducts.join(" / "));
  } else if (selection === "no") {
    alert("Gracias por visitarnos, esperamos verte de nuevo por acá");
  }
  
  while (selection !== "no") {
    let product = prompt("Realiza tu pedido");
    let price = 0;
    if (
      product === "The American Burger" ||
      product === "The Fixed Burger" ||
      product === "The Code Burger" ||
      product === "Blonde Beer" ||
      product === "Red Beer" ||
      product === "Dark Beer"
    ) {
      switch (product) {
        case "The American Burger":
        case "The Fixed Burger":
          price = 6990;
          break;
        case "The Code Burger":
          price = 7990;
          break;
        case "Blonde Beer":
        case "Red Beer":
        case "Dark Beer":
          price = 1250;
          break;
        default:
          break;
      }
      let quantity = parseInt(
        prompt("Ingrese la cantidad que desea llevar de estos productos")
      );
  
      shoppingCart.push({ product, quantity, price });
      console.log(shoppingCart);
    } else {
      alert("Opción inválida");
    }
  }
