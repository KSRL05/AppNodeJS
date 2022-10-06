/*const op=require('./ejercicio1.js')
const operacion=process.openStdin();
operacion.addListener("data",(dato)=>{
    console.log(`La opcion escogida es ${dato.toString()}`);

    const num1=process.openStdin();
    const num2=process.openStdin();
    console.log(`num1 ${num1} y num2 ${num2}`)

switch(operacion){
case 1:
    op.suma(6,12);
    break;
case 2:
    op.resta(6,12);
break;
case 3:
    op.multiplicacion(6,12);
break;
case 4:
    op.division(6,12);
break;
case 5:
    op.potencia(10,10);
break;
case 6:
    op.radicacion(5);
break;
}

})
console.log(op)*/
// 1. Requerir módulo http
const http=require('http')
//Funcion callback para manejar el servidor
function handleServer(req,res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>Esta es la respuesta del servidor OK</h1>')
    res.end()
}
// 2. Crear el server
const server=http.createServer(handleServer).listen(5000)




