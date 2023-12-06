//Paso opr referencia: Tipo de datos complejo

let frutas={
    naranja:'🍊',
};

let vegetales=frutas;

console.log(frutas,vegetales);

vegetales.naranja='🥕';

console.log(frutas,vegetales);

let ropa={
    blusa:'👚'
}

console.log(ropa);

ropa.pantalon='👖';

console.log(ropa);