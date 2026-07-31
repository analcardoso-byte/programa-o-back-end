const estante = require("./estante");
console.log("===================================");
console.log       (" MINHA ESTANTE");
console.log("===================================");
console.log("");


const estante = require("./estante");

console.log("===================================");
console.log(" MINHA ESTANTE");
console.log("===================================");
console.log("");

// ===== LIVRO 1 =====
console.log("Titulo: " + estante.livro1.titulo);
console.log("Autor: " + estante.livro1.autor);
console.log("Preco: R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");

// Desafio A — Linha separadora
console.log("-----------------------------------");

// ===== LIVRO 2 =====
console.log("Titulo: " + estante.livro2.titulo);
console.log("Autor: " + estante.livro2.autor);
console.log("Preco: R$ " + estante.livro2.preco);
console.log("Estoque: " + estante.livro2.estoque + " unidades");

// Desafio A — Linha separadora
console.log("-----------------------------------");

// ===== LIVRO 3 (Desafio B) =====
console.log("Titulo: " + estante.livro3.titulo);
console.log("Autor: " + estante.livro3.autor);
console.log("Preco: R$ " + estante.livro3.preco);
console.log("Estoque: " + estante.livro3.estoque + " unidades");

console.log("");

// Desafio C — Total de unidades (somando os 3 livros)
console.log(
  "Total de unidades: " +
    (estante.livro1.estoque + estante.livro2.estoque + estante.livro3.estoque)
);

// Desafio D — Valor do estoque do livro 1
console.log(
  "Valor em estoque do livro 1: R$ " +
    estante.livro1.preco * estante.livro1.estoque
);

console.log("");
console.log("===================================");