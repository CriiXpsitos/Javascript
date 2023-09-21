function mostrar() {
    var numero = parseInt(prompt("Ingrese para \n 1. sumar \n 2. resta \n 3.multiplicar \n 4. dividir \n 5. encontrar el mayor y igual"));

    switch (numero) {
        case 1:
            var numero1 = parseInt(prompt("Ingresa el numero 1: "));
            var numero2 = parseInt(prompt("Ingresa el numero 2: ")); 
            var resultado = numero1 + numero2; 
            document.write("Tu resultado es: " + resultado);
            break;
        case 2:
            var numero1 = parseInt(prompt("Ingresa el numero 1: "));
            var numero2 = parseInt(prompt("Ingresa el numero 2: ")); 
            var resultado = numero1 - numero2;
            document.write("el resultado: " + resultado);
            break;
        case 3:
            var numero1 = parseInt(prompt("Ingresa el numero 1: "));
            var numero2 = parseInt(prompt("Ingresa el numero 2: ")); 
            var resultado = numero1 * numero2;
            document.write("el resultado es: " + resultado);
            break;
        case 4: 
            var numero1 = parseInt(prompt("Ingresa el numero 1: "));
            var numero2 = parseInt(prompt("Ingresa el numero 2: ")); 
            var resultado = numero1 / numero2;
                if(numero1 != 0 && numero2 !=0) {
                document.write("el resultado es: " + resultado);
                }
                else {
                    document.write("El numero no puede ser divido por 0 ")
                }
            break;

        case 5: 
        var numero1 = parseInt(prompt("Ingresa el numero 1: "));
        var numero2 = parseInt(prompt("Ingresa el numero 2: ")); 
        if (numero1 > numero2) {
            document.write("el numero mayor " + numero1);
        }

        else if(numero2>numero1) {
            document.write("el mayor es " + numero2);
        }
        else {
            document.write("son iguales");
        }
        break;

        default:
            document.write("Número no válido");
    }


} 

mostrar();
