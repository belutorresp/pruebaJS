// DESAFIO NRO 1 //

let nombre = prompt ('Ingrese su nombre');
alert(nombre);

let edad = parseInt (prompt('Ingrese su edad'));
let numero = 50;

let resultado = edad + numero;

alert('Hola' + ' ' + nombre + ' ' + 'tu edad en 50 años será');
alert(edad + numero)



/* DESAFIO NRO 2 */

let precio = 100;

if (precio < 20) {
    console.log ("Es barato")
}
else if (precio < 60) {
    console.log ("Precio normal")
}
else {
    console.log ("Es caro")
}

let edad = 18;
let edadIngresada = prompt("Ingresa tu edad");
let edadIngresadaParseada = parseInt (edadIngresada);


if (edad === edadIngresadaParseada) {
    alert("Es igual")
}
else {
    alert("No es igual")
}

let nombreIngresado = prompt("Ingresar nombre")

if ((nombreIngresado != " " && nombreIngresado == "Nataniel") || nombreIngresado == "Thomy") {
    alert("Hola Nataniel");
}
else {
    alert("Error");
} 



/* let inicio = prompt ("Ingresa un numero");

for (inicio; inicio <= 20; inicio++) {
    console.log(inicio);
} */

/* let entrada = prompt ("Ingresa un dato");

while (entrada != "ESC") {
    alert ("El usuario ingresó" + entrada);
    entrada = prompt ("Ingresa otro dato");
} */

/* let entrada = prompt ("Ingresa un dato");

do {
    console.log("Primera vez");
}
while (entrada != "ESC");
 */


