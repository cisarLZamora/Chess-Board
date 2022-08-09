/*
funcion que tarde 5 segundos en dar una respuesta de cualquier tipo
*/
function calcular(num1, num2, callback,tiempo){
    setTimeout(()=>{
        callback(num1 + num2);
    }, tiempo);
}

// function imprimir(num){
//     console.log(num)
// }
// calcular(3,2,imprimir,5000);
// /*
// funcion que tarde 10 segundos en dar una respuesta de cualquier tipo
// */
// calcular(5,5, imprimir,10000);
// /*
// funcion que tarde 15 segundos en dar una respuesta de cualquier tipo
// */
// calcular(10,5, imprimir,15000);



/*
INVESTIFGAR FUNCIÓN FOREACH EN ARRAYS 
investigar parametros (cuantos necesita)
qué son cada parametro
hacer un ejemplo con una funcion anonima
y un ejemplo con una funcion declarada pasandolo como referencia
*/

/*
Sintaxis
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);

Parametros:
callback (Función a ejecutar por cada elemento, que recibe tres argumentos:

-el valor del elemento

-el índice del elemento

-el array que está siendo recorrido
*/
let array = [1,2,3,4,5,6];
let vacio = [];

let objects = [
    {
        id:"1",
        nombre:"Chucky",
        edad: 25,
        fk_id_puesto: 1
    }, 
    {
        id:"2",
        nombre:"Noel",
        edad: 23,
        fk_id_puesto: 2
    },
    {
        id:"3",
        nombre:"Cisa",
        "edad": 20,
        fk_id_puesto: 3
    }, 
    {
        id:"4",
        nombre:"Tovar",
        edad: 24,
        fk_id_puesto: 4
    },
    {
        id:"5",
        nombre:"Martin",
        edad:28,
        fk_id_puesto: 4
    }
];

let Puestos = [
    {
        id_puesto:1,
        nombre:"FrontEnd Dev",
    }, 
    {
        id_puesto:2,
        nombre:"Mobile dev"
    },
    {
        id_puesto:3,
        nombre:"Tester"
    },
    {
        id_puesto:4,
        nombre:"Backend"
    }
]
// let nombres = [];
// array.forEach((value, index, array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });


// function funcionDeclarada(element, index, array) {
    //     console.log(element);
    //     console.log(index);
    //     console.log(array);
    // }
    
// array.forEach(funcionDeclarada);

// array.forEach((value, index, array)=>{
//     vacio.push(value*2);
// });

// vacio = array.map((val, ind, array)=>{
//     return val*2;
// });

// const nombres = objects.map((val)=>{
//     let obj = 
//         {
//             nombre: val.nombre, 
//             Puesto: val["Puesto de trabajo"],
//         };
    
//     return obj;
// });

//console.log(nombres);

// const changeName = objects.map((val, ind)=>{
//     let newVal;
//     if (ind == 0) {
//         newVal ={
//             nombre: "Luis",
//             edad: val.edad,
//             puesto: val["Puesto de trabajo"]
//         }
//     }
//         return newVal;
//     } else{
//         return val
//     }
// })
// console.log(changeName);

//console.log(objects.filter(value => value.edad>25))
function where(clave, condicion, valor, array) {
    let arrayNe = array.filter((elemento)=>{
        if (condicion == "==") {
            return elemento[clave] == valor
        } 
        if (condicion == ">") {
            return elemento[clave] > valor;
        }
        if (condicion == "<") {
            return elemento[clave] < valor
        }
        if (condicion == ">=") {
            return elemento[clave] >= valor
        }
        if (condicion == "<=") {
            return elemento[clave] <= valor
        }
        if (condicion == "&&") {
            return elemento[clave] && valor
        }
        if (condicion == "||") {
            return elemento[clave] || valor
        }
        if (condicion == "like") {
            return elemento[clave].includes(valor);
        }
    });
    return arrayNe;
}
//console.log(where("Puesto de trabajo", "like", "Back", objects));

/*
hacer una funcion que reciba como parametros un array, clave, valor que
va a retonar un array de objetos, con las claves del objeto a y b
*/

/*
SELECT FROM OBJECTS AS O INNER JOIN Puestos AS P
    ON O.fk_id_puesto = P.id_puesto
*/

function JOIN(array1, array2, clave1, clave2) {
    let newVal;
    let Val= array1.map((value)=>{ // n
        array2.forEach((element) => { // n^2
            if (value[clave1] == element[clave2]) {
                newVal = {
                    id: value.id,
                    nombre: value.nombre,
                    edad: value.edad,
                    fk_id_puesto: value.fk_id_puesto,
                    id_puesto: element.id_puesto,
                    nombre_puesto: element.nombre
                }
            }
        });
        return newVal;
    });
    
    return Val;
}

function JOIN_N(array1, array2, clave1, clave2) { // n
    const keys = {}
    array2.forEach(element => keys[element[clave2]] = element)
    return array1.map((element) => ({
        id: element.id,
        nombre: element.nombre,
        edad: element.edad,
        fk_id_puesto: element.fk_id_puesto,
        id_puesto: keys[element[clave1]].id_puesto,
        nombre_puesto:  keys[element[clave1]].nombre
    }))
}

console.log(JOIN(objects, Puestos, "fk_id_puesto", "id_puesto"));
console.log(JOIN_N(objects, Puestos, "fk_id_puesto", "id_puesto"));

/*
 {
        id:"1",
        nombre:"Chucky",
        edad: 25,
        fk_id_puesto: 1,
        id_puesto:"1",
        nombre_puesto:"FrontEnd Dev",
    }
*/
// const changeName = objects.map((val, ind)=>{
//     let newVal;
//     if (ind == 0) {
//         newVal ={
//             nombre: "Luis",
//             edad: val.edad,
//             puesto: val["Puesto de trabajo"]
//         }
//         return newVal;
//     } else{
//         return val
//     }
// })

let pieza=[
    {
        id: "",
        color: "white",
        x:"",
        y:""
    },
    {
        id: "",
        color: "black",
        x:"",
        y:""
    }
]

let board = {

    A:{
        1:{

        },
        2:{

        },
        3:{

        },
        4:{

        },
        5:{

        },
        6:{

        }
    },
    y:"",
}