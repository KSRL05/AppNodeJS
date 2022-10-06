/*const num1=6,num2=10;
let suma = num1 + num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/
//Funcion Suma
const sumar=(num1,num2)=>{
    
let suma = num1 + num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
}
//Funcion Resta
function restar(num1,num2){
    let resta=num1-num2;
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);

}

//Funcion multiplicacion
function multiplicar(num1,num2){
    let multiplicacion=num1*num2;
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multiplicacion}`);

}
//Funcion division
function division(num1,num2){
    let division=num1/num2;
    console.log(`La division entre ${num1} y ${num2} es ${division}`);

}
//Funcion potencia
function potencia(num1,num2){
    let potencia=num1**num2;
    console.log(`el numero ${num1} elevado a ${num2} es ${potencia}`);

}
//Funcion radicacion
function radicar(num1){
    const radicacion=Math.sqrt(num1);
    console.log(`La Raiz de ${num1} es ${radicacion}`);

}
//exports.suma=sumar;
//exports.resta=restar;
//exports.multiplicacion=multiplicar;
//exports.division=division;
//exports.potencia=potencia;
//exports.radicacion=radicar;

const operaciones={}
operaciones.suma=sumar;
operaciones.resta=restar;
operaciones.multiplicacion=multiplicar;
operaciones.division=division;
operaciones.potencia=potencia;
operaciones.radicacion=radicar;


module.exports=operaciones