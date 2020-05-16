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
function enfocado() {
    console.log("Se enfoco el objeto")
}
function cambio() {
    console.log("El valor cambio");
}
function cerrar() {
    window.close();
}
function confirmar() {
    let respuesta;
    respuesta = confirm("¿Estas seguro que deseas hacerlo?");

    if(respuesta == true)
        console.log("Se elimino el registro");
    else
        console.log("Se cancelo el proceso");

}
function solicitaData() {
    let nombre = prompt("Ingresa tu nombre");
    console.log(nombre);
}

function calcularSuma() {
    let num1cad, num2cad;
    num1cad = Number(document.frmSuma.txtnum1.value);
    num2cad = Number(document.frmSuma.txtnum2.value);

    document.frmSuma.txtresultado.value = String(num1cad + num2cad);

    console.log(num1cad);
    console.log(num2cad);
    console.log(num1cad + num2cad);
}













