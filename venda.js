const prompt = require("prompt-sync")();

let ultimoId = 0

let residencias = [];

function modelo(id = ++ultimoId) {
  const bairro = prompt("Bairro: ");
  const rua = prompt("Rua: ");
  const numero = parseInt(prompt("Número: "));

  const moradores = [];
  while (true) {
    const nome = prompt("Digite o nome do usuário, ou acabou para sair: ");

    if (nome == "acabou") {
      break;
    }

    moradores.push(nome);
  }

  if (bairro != "" && rua != "" && numero > 0 && moradores.length >= 0) {
    return {
      bairro,
      rua,
      numero,
      moradores,
      id
    };
  }

  console.log("Residência inválida");
}

function criarResidencia() {
  const novo = modelo();

  if (novo) {
    residencias.push(novo);
    console.log("Residência criada com sucesso");
  }
}
function listarResidencias() {
  residencias.forEach((residencia) => {
    console.log(
      `ID: ${residencia.id}. Bairro: ${residencia.bairro}, Rua: ${
        residencia.rua
      }, Número: ${residencia.numero}`
    );
    residencia.moradores.forEach((morador, indice) => {
      console.log(`Morador ${indice + 1}: ${morador}`);
    });
  });
}

function atualizarResidencia() {
  listarResidencias();

  const id = prompt("ID da residência: ");

  const novo = modelo(id);

  const indice = residencias.findIndex(residencia => residencia.id == id)

  if (novo && indice != -1) {
    residencias[indice] = novo;
    console.log("Residência atualizada com sucesso");
  }
}

function removerResidencia() {
  listarResidencias();

  const id = prompt("ID da residência: ");

  const indice = residencias.findIndex(residencia => residencia.id == id)

  if(indice != -1) {

    residencias.splice(indice, 1);
  
    console.log("Residência removida com sucesso");
  }
}

module.exports = {
    criarResidencia,
    atualizarResidencia,
    removerResidencia,
    listarResidencias,
}