//PASO POR VALOR
let x=1;
let y='Hola';
let z=null;


console.log(x);
console.log(y);
console.log(z);

let a=x;
let b=y;
let c=z;

console.log(x,y,z,a,b,c);

a=12;
b='platzi';
c=undefined;

console.log(x,y,z,a,b,c);

//PASO POR REFERENCIA

let frutas=['manzana'];
console.log(frutas);

frutas.push('pera');
console.log(frutas);

let panes=['🥐'];
let copiaDePanes=panes;
console.log(panes);
console.log(copiaDePanes);
copiaDePanes.push('🍞');
console.log(panes,copiaDePanes);

