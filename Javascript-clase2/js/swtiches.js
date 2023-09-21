function mostrar() {
    var numero = parseInt(prompt("Ingrese el número 1, 2 o 3"));

    switch (numero) {
        case 1:
            var b = parseInt(prompt("Dame la base del triangulo: "));
            var a = parseInt(prompt("Ahora la altura del triangulo: ")); 
            var resultado = (b * a) / 2; 
            document.write("Tu resultado es: " + resultado);
            break;
        case 2:
            var lado = parseInt(prompt("Dame el lado del cuadrado: "));
            var resultado = lado * lado;
            document.write("El área del cuadrado es: " + resultado);
            break;
        case 3:
            var b = parseInt(prompt("Dame la base del rectangulo: "));
            var a = parseInt(prompt("Dame la altura del rectangulo: "));
            var resultado = b * a;
            document.write("el resultado es: " + resultado);
            break;
        default:
            document.write("Número no válido");
    }
}

mostrar();
