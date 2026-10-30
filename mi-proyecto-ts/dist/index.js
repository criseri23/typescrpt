"use strict";
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
const usuario = "Estudiante";
console.log(saludar(usuario));
let edad = 25;
let nombre = "Ana";
let activo = true;
let numeros = [1, 2, 3];
let nombres = ["Juan", "Pedro", "María"];
const estudiante = {
    nombre: "Luis",
    edad: 22
};
console.log(edad);
console.log(nombre);
console.log(activo);
console.log(numeros);
console.log(nombres);
console.log(estudiante);
function calcularPrecio(producto, cantidad) {
    return producto.precio * cantidad;
}
console.log(calcularPrecio({ precio: 10 }, 2));
