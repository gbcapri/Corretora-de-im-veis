const prompt = require("prompt-sync")();

let ultimoIdCorretora = 0;

let corretoras = [];

function modelo(id = ++ultimoIdCorretora) {
  const nome = prompt("Nome da Corretora: ");

  if (nome !== "") {
    return { id, nome };
  }

  console.log("Corretora inválida");
  return null;
}

function criarCorretora() {
  const novaCorretora = modelo();

  if (novaCorretora) {
    corretoras.push(novaCorretora);
    console.log("Corretora criada com sucesso");
  }
}

function listarCorretoras() {
  corretoras.forEach((corretora) => {
    console.log(`ID: ${corretora.id}, Nome: ${corretora.nome}`);
  });
}

function atualizarCorretora() {
  listarImoveis();

  const id = prompt("ID do imóvel: ");

  const novo = modelo(id);

  const indice = imoveis.findIndex(imovel => imovel.id == id)

  if (novo && indice != -1) {
    imoveis[indice] = novo;
    console.log("imóvel atualizado com sucesso");
  }
} 

function removerCorretora() {
  listarCorretoras();
  const id = prompt("ID da Corretora a ser removida: ");
  const indice = corretoras.findIndex((corretora) => corretora.id == id);
  if (indice !== -1) {
    corretoras.splice(indice, 1);
    console.log("Corretora removida com sucesso");
  } else {
    console.log("Corretora não encontrada");
  }
}

module.exports = {
  criarCorretora,
  atualizarCorretora,
  removerCorretora,
  listarCorretoras,
};
