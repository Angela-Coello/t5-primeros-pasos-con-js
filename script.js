

// VARIABLES
let numero = 33;
console.log(numero);
document.write(numero + "<br>");

let cadena = "hola, mundo";
console.log(cadena);
document.write(cadena + "<br>");

let booleano = true;
console.log(booleano);
document.write(booleano +"<br>");


// operaciones matematicas
let suma = numero + 5;
console.log(suma);
document.write(suma + "<br>");

let resta = numero -3;
console.log(resta);
document.write(resta + "<br>");

let multiplicacion= numero * 2;
console.log(multiplicacion);
document.write(multiplicacion + "<br>");

let division = numero / 2;
console.log(division);
document.write(division + "<br>");

// concatenar

let resultado = cadena + 'genial' ;
console.log(resultado);
document.write(resultado + "<br>")


// funciones

function saludar(nombre) {
    let mensaje = "Hola, " + nombre;
    console.log(mensaje);
    document.write("hola" + nombre+ "<br>");
}
saludar("Angela");
 



 // objetos

 var coche = {
   marca:"infiniti",
   modelo:"200TDI",
   puertas:"6",
   color: {
      puertas: "rojo",
      techo: "verde",
   }

 } 
 
   console.log(coche);
  


  