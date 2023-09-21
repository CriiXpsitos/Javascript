var nombres= prompt("Ingresa Nombre");
// var edad = parseInt(prompt("ingresa su edad: "));
var nacimiento = parseInt(prompt("ingresa su fecha de nacimiento: "));
console.log(typeof(nacimiento));

const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad= fechaActual - nacimiento;  

if (edad === 18) {
    document.write(`Bienvenido señor(a) ${nombres}, usted tiene ${edad} años de edad.`);
} else if (edad >= 8) {
    document.write(`Bienvenido joven ${nombres}, usted tiene ${edad} años de edad.`);
} else {
    document.write(`Bienvenido niño(a) ${nombres}, usted tiene ${edad} años de edad.`);
}
