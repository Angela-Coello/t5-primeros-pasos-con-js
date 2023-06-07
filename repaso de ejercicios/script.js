// crea una array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

// crea una funcion que imprima todos los nº del array

for ( let array = 1; array <= 10; array ++);
console.log(array);

//crea una funcion que devuelva en nº mayor de una array

function encontrarNumeroMayor() {
    return Math.max(...array);

}
let numeroMayor = encontrarNumeroMayor();
console.log(numeroMayor);

//crea una funcion que devuelva en nº menor de una array

function encontrarNumeroMenor() {
    return Math.min(...array);
}
let numeroMenor = encontrarNumeroMenor();
console.log(numeroMenor);




// crea un array que combierta las letras de un texto en minusculas

function pasarAMinusculas(texto) {
return texto.toLowerCase()
}
let textoOriginal = "EL PERRO DE SAN ROQUE NO TIENE RABO";
let textoEnMinusculas = pasarAMinusculas(textoOriginal);

console.log(textoEnMinusculas);


//crea un array que combierta las letras de un texto en Mayusculas

function pasaAMayusculas(texto){
 return texto.toUpperCase();

}

let textoEnMayusculas = pasaAMayusculas(textoEnMinusculas);
console.log(textoEnMayusculas);


//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en minuscula

let nombres = ["jumelis", "rosi", "angelita"];
 
function primeraMayuscula(nombres){
    let nombresMayuscula = [];
    for (var i = 0; i < nombres.length; i++){
        var nombre = nombres
    }
}