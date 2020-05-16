// Manejo de array
arreglo = new Array(11);

arreglo[0] = true;
arreglo[1] = "carlos";
arreglo[2] = 2.35;
arreglo[3] = () => console.log("Hello Lambda");
arreglo[4] = function () { console.log("Hello tradicional") };
arreglo[5] = class Perro { constructor(nombre) { this.nombre = nombre} };

for (let i = 6; i < 10; i++) {
    arreglo[i] = i * 2;
}

arreglo[10] = new Array(5); // Matrices
arreglo[10][0] = 3; // matrices

for (let i = 0; i < 11; i++) {
    console.log( arreglo[i] );
}


arreglo[3]();
arreglo[4]();

