// DESAFIO NRO 1 //
/* let nombre = prompt ('Ingrese su nombre');
alert(nombre);

let edad = prompt('Ingrese su edad');
let pasarValor = parseInt(edad);
let numero = 50;

let resultado = edad + numero;

alert('Hola' + ' ' + nombre + ' ' + 'tu edad en 50 años será');
alert(pasarValor + numero) */



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


/* DESAFIO NRO 3 */
/* let entrada = prompt ("Ingresa un nombre");

while (entrada != "esc") {
    switch (entrada) {
        case "Ana":
            alert ("Hola Ana");
            break;
        case "Juan":
            alert ("Hola Juan");
            break;
        default:
            alert ("Quién sos?");
            break;
    }
    entrada = prompt ("Ingresa un nombre");
    console.log(entrada);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }

    console.log(i);
} */