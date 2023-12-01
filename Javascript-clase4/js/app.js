// Obtener referencias a elementos HTML por su ID
const contadorElemento = document.getElementById('contar');
const botonIncrementar = document.getElementById('incr');
const botonDecrementar = document.getElementById('decr');
const botonResetear = document.getElementById('reset');

// Variable para almacenar el contador
let count = 0;

// Evento que se activa al hacer clic en el botón de incrementar
botonIncrementar.addEventListener('click', () => {
    // Incrementa el contador en uno
    count++;
    // Muestra el nuevo valor del contador en el elemento HTML correspondiente
    contadorElemento.innerHTML = count;
});

// Evento que se activa al hacer clic en el botón de decrementar
botonDecrementar.addEventListener('click', () => {
    // Verifica si el contador es mayor que cero antes de restar
    if (count > 0) {
        // Decrementa el contador en uno
        count--;
        // Muestra el nuevo valor del contador en el elemento HTML correspondiente
        contadorElemento.innerHTML = count;
    } else {
        // Si el contador ya está en cero, no realiza ninguna acción adicional
    }
});

// Evento que se activa al hacer clic en el botón de resetear
botonResetear.addEventListener('click', () => {
    // Establece el contador en cero
    count = 0;
    // Muestra el valor reseteado del contador en el elemento HTML correspondiente
    contadorElemento.innerHTML = count;
});
