let numero1 = 8;
let numero2 = 34;
const PI = 3.14159;

/* declaracion de la funciones */
function sumar( a, b ) {
    let c = a + b;
    return c;
}
function calcular( a, b, c, d ) {
    if( a == b ) {
        c = (a * b) + d;
    }
    else if ( a < b ) {
        c = (d - a) * b;
    }
    return c * PI;
}

function saludar() {
    alert("Hello Programmers");
}

