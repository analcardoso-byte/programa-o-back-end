console.log("Olá! Aqui é o back-end da Livraria.");

const nomeDaLivraria = "Livraria SENAI";
const livro = {
titulo: "Clean Code",
autor: "Robert C. Martin",
preco: 89.9,
estoque: 12
};
console.log(`=== ${nomeDaLivraria} ===`);
console.log(`Livro: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Preço: R$ ${livro.preco.toFixed(2)}`);
console.log(`Em estoque: ${livro.estoque} unidades`);