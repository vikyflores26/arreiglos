let colores = ["rojo","verde","rosa","azul","violeta"];
console.log("el tamaño del arreiglo es" + colores.length);

let primero = colores[0];
let ultimo = colores[colores.length -1];
console.log(ultimo);
console.log (primero);

colores.push("naranja")
console.log(colores[colores.length -1]);

colores.unshift("blanco")
console.log(colores[0])

colores.pop()
console.log(colores)

colores.shift()
console.log(colores)

colores[1] = "marron"
console.log(colores)