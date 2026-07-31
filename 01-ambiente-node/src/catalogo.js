const livro1 = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
};
const livro2 = {
  titulo: "Eloquent JavaScript",
  autor: "Marijn Haverbeke",
  preco: 75.0,
  estoque: 20,
};
module.exports = { livro1, livro2 };

const catalogo = require("./catalogo");
console.log("=== CATÁLOGO DA LIVRARIA ===");
console.log("");
console.log("Titulo: " + catalogo.livro1.titulo);
console.log("Autor: " + catalogo.livro1.autor);
console.log("Preco: R$ " + catalogo.livro1.preco);
console.log("");
console.log("Titulo: " + catalogo.livro2.titulo);
console.log("Autor: " + catalogo.livro2.autor);
console.log("Preco: R$ " + catalogo.livro2.preco);
