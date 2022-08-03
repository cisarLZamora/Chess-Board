let squares = document.getElementsByClassName("square");
let row = document.getElementsByClassName("row");
/**
 * Imprime el evento
 *
 * @param {PointerEvent} ev
 */
function handdlerClick(ev){
    console.log(ev.target);
}

let entrada=true;


let letters= ["A","B","C","D","E","F","G","H"];
let contSqueares = 63;
let coordinates = document.getElementById("coordinates");
let coordinatesNumbers = document.getElementById("containerCoordinates");
if (entrada) {
    for (let i = 1; i <= 8; i++) {
        for (let j = 7; j >= 0; j--) {
            squares[contSqueares].dataset.y= i;
            squares[contSqueares].dataset.x= letters[j];
            
            if (squares[contSqueares].dataset.y=="2") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-peon-w.svg.png">'
            } 
            if (squares[contSqueares].dataset.y=="7") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-peon-b.svg.png">'
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-torre-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-torre-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
                squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
                squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="D") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="D") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="E") { 
                squares[contSqueares].innerHTML = '<img src="src/img/p-rey-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="E") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-rey-b.svg.png">';
            }
            contSqueares--;
        }
    }    
} else{
    coordinates.style.flexDirection="row-reverse";
    const p = coordinates.firstElementChild;
    p.style.display="none";
    coordinates.innerHTML='<p>A</p> <p>B</p> <p>C</p> <p>D</p> <p>E</p> <p>F</p> <p>G</p> <p>H</p>';
    coordinatesNumbers.style.flexDirection="column-reverse";
    for (let i = 8; i >= 1; i--) {
        for (let j = 0; j <= 7; j++) {
            squares[contSqueares].dataset.y= i;
            squares[contSqueares].dataset.x= letters[j];
    
            if (squares[contSqueares].dataset.y=="2") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-peon-w.svg.png">'
            } 
            if (squares[contSqueares].dataset.y=="7") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-peon-b.svg.png">'
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-torre-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-torre-b.svg.png">';
            }
            
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
                squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
                squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
                squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-w.svg.png">';
                
            }
            if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="D") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-w.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="D") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-b.svg.png">';
            }
            if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="E") { 
                squares[contSqueares].innerHTML = '<img src="src/img/p-rey-w.svg.png">';
            }
    
            if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="E") {
                squares[contSqueares].innerHTML = '<img src="src/img/p-rey-b.svg.png">';
            }
            contSqueares--;
        }
    }    
}


for (const square of squares) {
    square.addEventListener('click', handdlerClick);
}


//2da format
// 
// for (let i = 8; i > 1; i--) {
//     for (let j = 0; j <= 7; j++) {
//         squares[contSqueares].dataset.y= i;
//         squares[contSqueares].dataset.x= letters[j];

//         if (squares[contSqueares].dataset.y=="2") {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-peon-w.svg.png">'
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-peon-b.svg.png">'
//             }       
//         } 
//         if (squares[contSqueares].dataset.y=="7") {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-peon-b.svg.png">'
//             }else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-peon-w.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-torre-w.svg.png">';
//             } else {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-torre-b.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="A" || squares[contSqueares].dataset.x=="H")) {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-torre-b.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-torre-w.svg.png">';
//             }
//         }
        
//         if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
//             // Si está en esa coordenada se agrega la pieza del caballo
//             if (entrada) {
//                 // si es la entrada de las blancas
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-b.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-w.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="8" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-b.svg.png">';
//             } else {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-w.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="B" || squares[contSqueares].dataset.x=="G")) {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-w.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-caballo-b.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="1" && (squares[contSqueares].dataset.x=="C" || squares[contSqueares].dataset.x=="F")) {   
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-w.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-alfil-b.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="D") {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-w.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-rey-b.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="D") {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-b.svg.png">';
//             } else {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-rey-w.svg.png">';
//             }
//         }
//         if (squares[contSqueares].dataset.y=="1" && squares[contSqueares].dataset.x=="E") { 
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-rey-w.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-b.svg.png">';
//             }
//         }

//         if (squares[contSqueares].dataset.y=="8" && squares[contSqueares].dataset.x=="E") {
//             if (entrada) {
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-rey-b.svg.png">';
//             } else{
//                 squares[contSqueares].innerHTML = '<img src="src/img/p-reyna-w.svg.png">';
//             }
           
//         }
//         contSqueares--;
//     }
// }