// es js hay varios tipos de datos 
/* tipos primitivos: son valores inmutables (no se pueden cambiar directamente)*/

let nombre = "juan"

console.log(typeof nombre); //string 

//number 
let edad = 25; 
let precio = 19.99;
console.log(typeof edad);

//boolean 
let esMayorDeEdad = true;
console.log(typeof esMayorDeEdad); //Es boolean 

//null 
let direccion = null; 
console.log(typeof direccion);

//undefined 
let telefono; 
console.log(typeof telefono)

//symbol 
let id = Symbol("id"); 
console.log(typeof id);

//Object
let persona = {nombre: "ana", edad: 30 }
console.log(typeof persona)

// operadores aritmecticos

let a = 10; 
let b = 5;
console.log(a+b); //suma 
console.log(a % b); // 0 (modulo)
console.log (a > b); // 10000 (exponienciacion)

//operadores de comparacion
console.log (a == 10); //true (igualdad )
console.log(a == "10"); // false (igualdad estricta)
console.log(a > b); //true (es mayor)

//operadores logicos
let esMayor = a > b; 
let esPar = a%2 === 0; 
console.log(esMayor && esPar)// true (and)
console.log(!esMayor); //false (NOT)

//operadores de asignacion 
let c = 20; 
c += 10; // c + c + 10 
console.log(c); //30 