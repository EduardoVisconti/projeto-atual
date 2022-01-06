console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array ( //Lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){ //Se o comprador tem 18 anos ou mais, removemos o item 1 (SP).
//     console.log("Comprador é maior de idade");
//     listaDeDestinos.splice(1,1); //Removendo item

// } else if(estaAcompanhado == true){ //Se estiver acompanhado.
//     console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); //Removendo item

// } else { //Menor de idade e não está acompanhado, não pode comprar.
//     console.log("Comprador não é maior de idade e não pode comprar");
// }

if (idadeComprador >= 18 || estaAcompanhado == true) { // || = ou, alguma das duas tem que ser verdadeira.
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2,1);

} else {
    console.log("Comprador não é maior de idade e não pode comprar");
}

console.log("Embarque: \n\n"); //Pulando linha
if (idadeComprador >= 18 && temPassagemComprada) { // && = e, as duas tem que ser verdadeira.
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18); Maior que
// console.log(idadeComprador >= 18); Maior ou igual que
// console.log(idadeComprador < 18); Menor que
// console.log(idadeComprador <= 18); Menor ou igual que
// console.log(idadeComprador == 18); Igual