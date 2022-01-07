console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
let temPassagemComprada = false; //Usamos o let para que conseguimos mudar o valor.
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;

while(contador < 3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}