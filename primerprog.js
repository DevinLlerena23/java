//Primeros ejercicios con programacion funcional

console.log("Bienvenidos...");

const numeros=[10,20,23,1,5,7,9,11,17,19,18,33];
const nums=[10,15,96,58,43,3,9,18,45,78,19,85,33];

//Usando programacion estructurada imprima los elementos del array
console.log("Programacion estructurada");
for(var k=0;k<numeros.length;k++)
{
    console.log(numeros[k]);
}
//imprimir el vector usando programacion funcional
console.log("Programacion funcional");
numeros.forEach(
    item=>{ console.log(item);
    })


console.log("Forma v2");
numeros.forEach(function(x){console.log(x)})

//imprimir los elementos pares del vector
console.log("Elementos pares del vector")
for(k=0;k<numeros.length;k++)
{
    if(numeros[k]%2==0)
    console.log(numeros[k])
}

console.log("Elementos pares del vector v2")
const pares=numeros.filter(item=>{ return item%2==0})
console.log(pares)

const paresv3=numeros.filter(item=> item%2==0)
console.log("pares version simplificada",paresv3)

//imrprima los elementos impares del vector
console.log("Elementos impares del vector v2")
const impares=numeros.filter(item=>{ return item%2==1})
console.log(impares)

//Diseñe la funcion que reciba un vector de enteros y devuelva solo los multiplos de 3

const multiplosdeTres= function(arrayNumeros)
{
  return arrayNumeros.filter(item=> {return item%3==0})
}

//llamo a la funcion 
console.log("Multiplos de 3:",multiplosdeTres(nums))

//Declare un vector de nombres de personas .A continuacion , imprimialos en la pantalla
console.log("Nombres impresos")
const nombres=["Juan","Pedro","PePe","Andrew","Angel"]
nombres.forEach(data=>console.log(data))
console.log("\n Salto de linea \n Salto")
//Se tiene un conjunto de palabras , y cada palabra esta separada por un espacio en blanco.
//Se pide , utilizando la funcion split, imprimir cada palabra por separado.Por ejemplo:
//Binvenidos a la PUCE sede Esmeraldas
//resultado esperado:
//Bienvenido
//a
//la 
//PUCE
//sede
//Esmeraldas

const palabras="Bienvenidos a la PUCE sede Esmeraldas"

const pa=palabras.split(" ")
pa.forEach(data=>console.log(data))
console.log("\n  \n ")
palabras.split(" ").forEach(data=>console.log(data))