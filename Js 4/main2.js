/* DESAFIO NRO 3 */
let entrada = prompt ("Ingresa un nombre");

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
}




// DESAFIO 4 //

/* let resultado = 0;

function sumar (primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;

}

function mostrar (mensaje) {
    console.log (mensaje);

}

sumar (21, 6);
mostrar (resultado); */

/* const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = (x) => x * 0.21;
let precioProducto = 500;
let precioDescuento = 50;

let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)),precioDescuento);

console.log(nuevoPrecio); */