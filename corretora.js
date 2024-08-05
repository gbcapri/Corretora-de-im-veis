const prompt = require("prompt-sync")();

let ultimoId = 0

let imoveis = [];

function modelo(id = ++ultimoId) {
  const bairro = prompt("Bairro: ");
  const rua = prompt("Rua: ");
  const numero = parseInt(prompt("Número: "));


  if (bairro != "" && rua != "" && numero > 0) {
    return {
      bairro,
      rua,
      numero,
      id
    };
  }

  console.log("Imóvel inválido");
}

function criarImovel() {
  const novo = modelo();

  if (novo) {
    imoveis.push(novo);
    console.log("Imóvel criado com sucesso");
  }
}
function listarImoveis() {
  imoveis.forEach((imovel) => {
    console.log(
      `ID: ${imovel.id}. Bairro: ${imovel.bairro}, Rua: ${
        imovel.rua
      }, Número: ${imovel.numero}`
    );
  });
}

function atualizarImovel() {
  listarImoveis();

  const id = prompt("ID do imóvel: ");

  const novo = modelo(id);

  const indice = imoveis.findIndex(imovel => imovel.id == id)

  if (novo && indice != -1) {
    imoveis[indice] = novo;
    console.log("imóvel atualizado com sucesso");
  }
}

function removerImovel() {
  listarImoveis();

  const id = prompt("ID do imóvel: ");

  const indice = imoveis.findIndex(imovel => imovel.id == id)

  if(indice != -1) {

    imoveis.splice(indice, 1);
  
    console.log("imóvel removido com sucesso");
  }
}

module.exports = {
    criarImovel,
    atualizarImovel,
    removerImovel,
    listarImoveis,
}