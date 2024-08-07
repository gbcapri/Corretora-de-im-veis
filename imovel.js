const { corretoras } = require("./corretora");
const prompt = require("prompt-sync")();

let ultimoIdImovel = 0;
let imoveis = [];

function modeloImovel(id = ++ultimoIdImovel) {
  const bairro = prompt("Bairro: ");
  const rua = prompt("Rua: ");
  const numero = parseInt(prompt("Número: "));
  const id_corretora = prompt("ID da Corretora: ");

  if (bairro !== "" && rua !== "" && numero > 0 && id_corretora !== "") {
    return { id, bairro, rua, numero, id_corretora };
  }

  console.log("Imóvel inválido");
  return null;
}

function criarImovel() {
  const novoImovel = modeloImovel();

  if (novoImovel) {
    imoveis.push(novoImovel);
    console.log("Imóvel criado com sucesso");
  }
}

function listarImoveis() {
  imoveis.forEach((imovel) => {
    console.log(
      `ID: ${imovel.id}. Bairro: ${imovel.bairro}, Rua: ${imovel.rua}, Número: ${imovel.numero}`
    );
  });
}

function atualizarImovel() {
  listarImoveis();

  const id = prompt("ID do imóvel: ");

  const novo = modelo(id);

  const indice = imoveis.findIndex((imovel) => imovel.id == id);

  if (novo && indice != -1) {
    imoveis[indice] = novo;
    console.log("imóvel atualizado com sucesso");
  }
}

function removerImovel() {
  listarImoveis();

  const id = prompt("ID do imóvel: ");

  const indice = imoveis.findIndex((imovel) => imovel.id == id);

  if (indice != -1) {
    imoveis.splice(indice, 1);

    console.log("imóvel removido com sucesso");
  }
}

module.exports = {
  criarImovel,
  atualizarImovel,
  removerImovel,
  listarImoveis,
};
