//TIPO DE DATOS PRIMITIVOS: INMUTABLES
let numero=23;
numero=numero + 45;
console.log(numero);

let esVerdadero=true;
esVerdadero=false;
console.log(esVerdadero);


//TIPO DE DATOS COMPLEJOS: Mutables
let usuario={ nombre: 'Pepito',edad: 15};
usuario.edad=20;
console.log(usuario);

let frutas=['pera','manzana','uva'];
frutas[0]='Melon';
console.log(frutas);

function cambiarNombre(objeto){
    objeto.nombre='Nuevo Nombre'
};

let persona={nombre: 'Aby'};
console.log(persona);
cambiarNombre(persona);
console.log(persona);

