const { corretoras } = require("./corretora");
const prompt = require("prompt-sync")();

let ultimoIdCorretor = 0;
let corretores = [];

function modeloCorretor(id = ++ultimoIdCorretor) {
  const nome = prompt("Nome do Corretor: ");
  const id_corretora = prompt("ID da Corretora: ");

  if (nome !== "" && id_corretora !== "") {
    return { id, nome, id_corretora };
  }

  console.log("Corretor inválido");
  return null;
}

function criarCorretor() {
  const novoCorretor = modeloCorretor();

  if (novoCorretor) {
    corretores.push(novoCorretor);
    console.log("Corretor criado com sucesso");
  }
}

function listarCorretores() {
  corretores.forEach((corretor) => {
    console.log(
      `ID: ${corretor.id}, Nome: ${corretor.nome}, ID Corretora: ${corretor.id_corretora}`
    );
  });
}

function removerCorretor() {
  listarCorretores();
  const id = prompt("ID do Corretor a ser removido: ");
  const indice = corretores.findIndex((corretor) => corretor.id == id);
  if (indice !== -1) {
    corretores.splice(indice, 1);
    console.log("Corretor removido com sucesso");
  } else {
    console.log("Corretor não encontrado");
  }
}

module.exports = {
  criarCorretor,
  listarCorretores,
  removerCorretor,
  corretores,
};
