// Función para realizar la operación de suma
function sumar(n1, n2) {
    var resultado = n1 + n2; // Realiza la suma de n1 y n2
    var res = document.getElementById("resultado"); // Obtiene el elemento con id "resultado" del HTML

    if (n1 != 0 && n2 != 0) {
        // Si ambos números son distintos de cero, muestra el resultado y cambia el estilo a verde
        respuesta.style.display = "block";
        res.innerHTML = `${resultado}`;
        res.style.color = "green";
    } else {
        // Si alguno de los números es cero, muestra un mensaje de error y cambia el estilo a rojo
        respuesta.style.display = "block";
        res.innerHTML = "No se pueden sumar cero";
        res.style.color = "red";
    }
}

// Función para realizar la operación de resta
function restar(n1, n2) {
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = "No se pueden restar cero";
        res.style.color = "red";
    }
}

// Función para realizar la operación de multiplicación
function multiplicar(n1, n2) {
    var resultado = n1 * n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = "No se pueden multiplicar cero";
        res.style.color = "red";
    }
}

// Función para realizar la operación de división
function dividir(n1, n2) {
    var resultado = n1 / n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = "No se pueden dividir cero";
        res.style.color = "red";
    }
}

// Función para realizar la operación de potencia
function potencia(n1, n2) {
    var resultado = n1 ** n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = "No se pueden potencia cero";
        res.style.color = "red";
    }
}

// Función para realizar la operación seleccionada y mostrar el resultado
function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Utilizamos un switch para determinar la operación seleccionada
    switch (opc) {
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            dividir(n1, n2);
            break;
        case 5:
            potencia(n1, n2);
            break;
        default:
            alert("No se encontró la operación solicitada"); // Mensaje en caso de opción no válida por si las moscas
    }
}
