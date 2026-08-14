const Categoria = require("./Categoria");
const Livro = require("./Livro");
const catTec = new Categoria("Tecnologia", "livros sobre programacao");

const l1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12, catTec);
l1.descrever();

console.log("Descricao da categoria: " + l1.categoria.descricao);

// Desafio B: Remover livro pelo título
  removerLivro(titulo) {
    this.#livros = this.#livros.filter((livro) => livro.titulo !== titulo);
  }