const productos = [
    {
        descripcion: "Auriculares",
        precio: 49000
    },
    {
        descripcion: "Smartphone",
        precio: 120000 
    },
    {
        descripcion: "Laptop",
        precio: 80000
      },
      {
        descripcion: "Teclado Mecánico",
        precio: 15000
      },
      {
        descripcion: "Monitor",
        precio: 35000
      }
    ];
    console.log("---------------------4-----------------------------");
    productos.sort((a, b) => a.precio - b.precio);
    console.log(productos);

    console.log("----------------------1----------------------------");
    
    productos.forEach((producto) => {
    console.log(`Descripción: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
    console.log("-----------------------2---------------------------");
    let mayorA20 = productos.filter(producto => producto.precio >= 20000);

    console.log(mayorA20);
  
    console.log("-----------------------3---------------------------");

    let productoConIVA = productos.map(producto => {
    producto.precio = producto.precio * 1.21;
    return producto;
    });
    console.log(productoConIVA);

  console.log("-------------------------5------------------------");

  let nuevoProducto = {
    descripcion: "Parlante Bluetooth",
    precio: 59000.90
  }

  productos.push(nuevoProducto);
  console.log(productos);

  console.log("-------------------------6-------------------------");
  //primero ordenamos el array por precio
  productos.sort((a, b) => a.precio - b.precio);
  //luego al tener el producto con el precio más bajo en la posición 0, lo eliminamos
  productos.splice(0, 1);
  console.log(productos);

  