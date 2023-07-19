const listaProductos = document.querySelector("#lista-productos");

fetch("./js/productos.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      const li = document.createElement("li");
      li.innerText = producto.nombre + " - $" + producto.precio;
      listaProductos.append(li);
    });
  })
