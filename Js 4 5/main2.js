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


/* CLASE 5 - OBJETOS */

/* ESTA ES LA FUNCION CONSTRUCTORA */
/* function crearCoders (alumno1, alumno2, alumno3) {
    this.alumno1 = alumno1;
    this.alumno2 = alumno2;
    this.almuno3 = alumno3;
}

/* ESTOS SON LOS OBJETOS */

/* const coders = new crearCoders("Maximiliano", "Santiago", "Matias");
const codersSegundaCamada = new crearCoders ("Brayhan", "Maylen", "Facundo");
console.log(coders);
console.log(codersSegundaCamada);

/* ITERA LAS PROPIEDADES DENTRO DE CODERS/DEL OBJETO */

/* for ( let propiedad in coders) {
    console.log(propiedad);
}  */

/* CLASES Y METODOS */

/* DESAFIO  5 */
class crearUnaBelu {
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
        this.level = 1;
        this.numero = 8;
        this.zome = "Palermo";
    }
    hablar() {
        console.log("Hola soy la Coder " + this.nombre);
    }
}

const coderBelen = new crearUnaBelu ('Belen', 26, 'Avenida Oro')

coderBelen.hablar();

console.log(coderBelen);






/* SANTORINI */

/* class Producto {
    constructor(nombre, producto) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true
    }
}

const producto1 = new Producto ("Riñonera Elyssa", )
const producto2 = new Producto ("Mochila Grecia", ) */
