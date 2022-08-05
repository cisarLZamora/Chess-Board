/*
funcion que tarde 5 segundos en dar una respuesta de cualquier tipo
*/
function calcular(num1, num2, callback,tiempo){
    setTimeout(()=>{
        callback(num1 + num2);
    }, tiempo);
}

function imprimir(num){
    console.log(num)
}
calcular(3,2,imprimir,5000);
/*
funcion que tarde 10 segundos en dar una respuesta de cualquier tipo
*/
calcular(5,5, imprimir,10000);
/*
funcion que tarde 15 segundos en dar una respuesta de cualquier tipo
*/
calcular(10,5, imprimir,15000);

console.log("lo que sea");