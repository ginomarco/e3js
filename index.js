const pizzas = [
    {
      id: 1,
      nombre: "Muzzarella",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas."],
      imagen: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "Cebolla",
      precio: 1750,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla."],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "4 Quesos",
      precio: 2000,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort.",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "Especial de la Casa",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón."],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "Ananá",
      precio: 2200,
      ingredientes: ["Muzzarella", "Tomate", "Ananá."],
      imagen: "./img/anana.png",
    },
  ];
  
  const form = document.getElementById("form")
  const container = document.getElementById("container")
  const inputNumber = document.getElementById("inputnumber") 
  const error = document.getElementById("error")
  
  
  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    buscarPizza();
  });
  
  document.getElementById("buscarPizza").addEventListener("click", function(e) {
    e.preventDefault();
    buscarPizza();
  });
  
  function buscarPizza() {
    const pizzaId = parseInt(document.getElementById("inputnumber").value);
    const containerDiv = document.getElementById("container");
  
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  
    if (pizzaEncontrada) {
        containerDiv.innerHTML = `
            <h2>${pizzaEncontrada.nombre}</h2>
            <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
            <p>Ingredientes: ${pizzaEncontrada.ingredientes.join(", ")}</p>
            <p>Precio: $${pizzaEncontrada.precio}</p>
        `;
    } else {
        containerDiv.innerHTML = "Pizza no encontrada.";
    }
  }
  
  
  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    buscarPizza();
  });
  
  document.getElementById("search").addEventListener("click", function(e) {
    e.preventDefault(); 
    buscarPizza();
  });
  
  function buscarPizza() {
    const pizzaId = parseInt(document.getElementById("inputnumber").value);
    const containerDiv = document.getElementById("container");
  
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  
    if (pizzaEncontrada) {
        containerDiv.innerHTML = `
            <div class="card">
                <h2>${pizzaEncontrada.nombre}</h2>
                <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
                <p>Precio: $${pizzaEncontrada.precio}</p>
            </div>
        `;
    } else {
        containerDiv.innerHTML = "Pizza no encontrada.";
    }
  }
  
  function buscarPizza() {
    const pizzaId = parseInt(document.getElementById("inputnumber").value);
    const containerDiv = document.getElementById("container");
  
  
    if (isNaN(pizzaId)) {
        containerDiv.innerHTML = `
            <div class="error">
                <p>Busca el número de tu pizza!</p>
            </div>
        `;
        return; 
    }
  
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  
    if (pizzaEncontrada) {
        containerDiv.innerHTML = `
            <div class="card">
                <!-- ... (contenido de la card) ... -->
            </div>
        `;
    } else {
        containerDiv.innerHTML = `
            <div class="error">
            <p>Busca el número de tu pizza!</p>
            </div>
        `;
    }
  }
  
  function buscarPizza() {
    const pizzaId = parseInt(document.getElementById("inputnumber").value);
    const containerDiv = document.getElementById("container");
  
   
    if (isNaN(pizzaId)) {
        containerDiv.innerHTML = `
            <div class="error">
            <p>Busca el número de tu pizza!</p>
            </div>
        `;
        return; 
    }
  
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  
    if (pizzaEncontrada) {
        containerDiv.innerHTML = `
            <div class="card">
                <h2>${pizzaEncontrada.nombre}</h2>
                <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
                <p>Ingredientes: ${pizzaEncontrada.ingredientes.join(", ")}</p>
                <p>Precio: $${pizzaEncontrada.precio}</p>
            </div>
        `;
    } else {
        containerDiv.innerHTML = `
            <div class="error">
             <p> Pizza no encontrada!</p>
            </div>
        `;
    }
  }
  
  function buscarPizza() {
    const pizzaId = parseInt(document.getElementById("inputnumber").value);
    const containerDiv = document.getElementById("container");
  
   
    if (isNaN(pizzaId)) {
        containerDiv.innerHTML = `
            <div class="error">
            <p>Busca el número de tu pizza!</p>
            </div>
        `;
        return; 
    }
  
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);
  
    if (pizzaEncontrada) {
        
        localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
  
        containerDiv.innerHTML = `
            <div class="card">
                <h2>${pizzaEncontrada.nombre}</h2>
                <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
                <p>Ingredientes: ${pizzaEncontrada.ingredientes.join(", ")}</p>
                <p>Precio: $${pizzaEncontrada.precio}</p>
            </div>
        `;
    } else {
        containerDiv.innerHTML = `
            <div class="error">
            <p>Pizza no encontrada! </p>
            </div>
        `;
    }
  }
  
  
  window.addEventListener("load", function() {
    const ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizza"));
  
    if (ultimaPizza) {
        const containerDiv = document.getElementById("container");
        containerDiv.innerHTML = `
            <div class="card">
                <h2>${ultimaPizza.nombre}</h2>
                <img src="${ultimaPizza.imagen}" alt="${ultimaPizza.nombre}">
                <p>Ingredientes: ${ultimaPizza.ingredientes.join(", ")}</p>
                <p>Precio: $${ultimaPizza.precio}</p>
            </div>
        `;
    }
  });