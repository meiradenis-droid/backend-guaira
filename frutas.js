//Lista ordenada de valores

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
// Ìndice:        0         1       2       3

//console.log(frutas)
console.log(frutas[3]);

frutas[0] = "Abacaxi";
console.log(frutas);

frutas[2] = "Cerejá";
console.log(frutas);

frutas[3] = "Dendê";
console.log(frutas);
console.log(frutas.length)
frutas.push("Goiaba")

const removido = frutas.pop();
console.log(frutas);
console.log(removido);
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("Cerejá") );
console.log(frutas.indexOf("Pêra") );