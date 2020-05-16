let edad = 15;

/* if */
if ( edad >= 18 ) {
    console.log("Es mayor de edad");
}
else {
    if (edad < 12)
        console.log("Es un niño");
    else
        console.log("es un adolescente");
}

let dia = 2;
let diaTexto = "";
/* Switch */
switch(dia) {
    case 1: diaTexto = "LUNES"; break;
    case 2: diaTexto = "MARTES"; break;
    case 3: diaTexto = "MIERCOLES"; break;
    case 4: diaTexto = "JUEVES"; break;
    case 5: diaTexto = "VIERNES"; break;
    case 6: diaTexto = "SABADO"; break;
    case 7: diaTexto = "DOMINGO"; break;
}
console.log(diaTexto);

/* for */
for(let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + "<br>")
}
