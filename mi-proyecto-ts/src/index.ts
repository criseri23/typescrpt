
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

const usuario = "Estudiante";
console.log(saludar(usuario));

let edad: number = 25;
let nombre: string = "Ana";
let activo: boolean = true;

let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Juan", "Pedro", "María"];

interface Persona {
    nombre: string;
    edad: number;
}

const estudiante: Persona = {
    nombre: "Luis",
    edad: 22
};

console.log(edad);
console.log(nombre);
console.log(activo);
console.log(numeros);
console.log(nombres);
console.log(estudiante);

interface Producto {
    precio: number;
}

function calcularPrecio(producto: Producto, cantidad: number): number {
    return producto.precio * cantidad;
}

console.log(calcularPrecio({precio: 10}, 2));
