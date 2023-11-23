// se crea una variable para inserta el nombre
var nombres= prompt("Ingresa Nombre");
// var edad = parseInt(prompt("ingresa su edad: "));

//creamos una variable para poner el nacimiento donde solo va a recibir numeris
var nacimiento = parseInt(prompt("ingresa su fecha de nacimiento: "));
//se manda la consola que tipo es de nacimiento
console.log(typeof(nacimiento));

//creamos una consate fecha donde hace una promesa que es de funcion para saber la fecha
const fecha = new Date();
//creamos otra constante acerca de la fecha actual donde usamos el metodo getfulllyear
const fechaActual = fecha.getFullYear();
// creamos una variable llamada edad donde va a hacer nuestro año de nacimiento con la fecha actual
let edad= fechaActual - nacimiento;  

//aca vamos a crear conficionales para saber si uno es señor si es igual 18 años

if (edad === 18) {
    document.write(`Bienvenido señor(a) ${nombres}, usted tiene ${edad} años de edad.`);
    //joven
} else if (edad >= 8) {
    document.write(`Bienvenido joven ${nombres}, usted tiene ${edad} años de edad.`);
    //o niño
} else {
    document.write(`Bienvenido niño(a) ${nombres}, usted tiene ${edad} años de edad.`);
}
