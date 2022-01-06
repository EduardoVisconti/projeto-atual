console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array ( //Lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //Adicionando um item na lista

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

// A ordem da lista sempre começa com o 0.
listaDeDestinos.splice(1,1); //Removendo da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //Mostrando apenas o Rio de Janeiro (Fica na posição 1 porque removemos SP) e Salvador posição 0.