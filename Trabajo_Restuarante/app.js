// aca creamos una constante llamado platos... donde ponemos los platos, sus nombres y precios
const platos = {
    1: {
      nombre: "Espaguetis",
      precio: 1000,
    },
    2: {
      nombre: "Pizza",
      precio: 1500,
    },
    3: {
      nombre: "Hamburguesa",
      precio: 2000,
    },
    4: {
      nombre: "Ensalada",
      precio: 1200,
    },
    5: {
      nombre: "Sandwich",
      precio: 1800,
    },
  };

// lo mismo que los platos 
  const bebidas = {
    1: {
      nombre: "Agua",
      precio: 500,
    },
    2: {
      nombre: "Jugo",
      precio: 800,
    },
    3: {
      nombre: "Refresco",
      precio: 1000,
    },
    4: {
      nombre: "Café",
      precio: 1200,
    },
    5: {
      nombre: "Té",
      precio: 1000,
    },
  };

  // aca creamos la funcion calcular total... donde creamos las constantes y lo
  //conectamos al html por id y son valores
  function calcularTotal() {
    const platoSeleccionado = document.getElementById("platoSeleccionado").value;
    const bebidaSeleccionada = document.getElementById("bebidaSeleccionada").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
  
    if (platoSeleccionado === "0" && bebidaSeleccionada === "0" && cantidad === 0) {
      alert("Seleccione su plato o bebida");
      return;
    }
  
// creamos las constante plato y bebida donde se le "conecta" con las constantes que estan conectados con el html (no se explicar :C)
    const plato = platos[platoSeleccionado];
    const bebida = bebidas[bebidaSeleccionada];
  
// si no hay plato ni bebida... le sale una alerta
    if (!plato && !bebida) {
      alert("Error: Plato o bebida no encontrada.");
      return;
    }

// creamos las constantes de los precios de las bebidas y platos y se suman sus precios y se multiplican por la cantidad
    const precioPlato = plato.precio;
    const precioBebida = bebida.precio;
  
    const precioTotal = (precioPlato + precioBebida) * cantidad;
  
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Total: ${precioTotal}`;
    resultado.style.color = "green";
  }
  
 // aca llamamos la funcion mostrar y traemos el calcular total 
  function mostrar() {
    calcularTotal();
  
    const respuesta = document.getElementById("respuesta");
    respuesta.style.display = "block";
  }
  