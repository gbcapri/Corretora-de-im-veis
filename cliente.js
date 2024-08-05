const prompt = require("prompt-sync")();

let ultimoId = 0;

let clientes = [];

function modelo(id = ++ultimoId) {
  const nomeCliente = prompt("Nome do cliente:");
  const bairro = prompt("Bairro: ");
  const rua = prompt("Rua: ");
  const numero = parseInt(prompt("Número: "));

  if (bairro != "" && rua != "" && numero > 0) {
    return {
        nomeCliente,
      bairro,
      rua,
      numero,
      id,
    };
  }

  console.log("Cliente inválido");
}

function adicionarCliente() {
  const novo = modelo();

  if (novo) {
    clientes.push(novo);
    console.log("Cliente criado com sucesso");
  }
}
function listarClientes() {
  clientes.forEach((cliente) => {
    console.log(//continuar a adicionar o nome do cliente
      `ID: ${cliente.id}. Bairro: ${cliente.bairro}, Rua: ${cliente.rua}, Número: ${cliente.numero}`
    );
  });
}

function atualizarCliente() {
  listarClientes();

  const id = prompt("ID do Cliente: ");

  const novo = modelo(id);

  const indice = clientes.findIndex((cliente) => cliente.id == id);

  if (novo && indice != -1) {
    clientes[indice] = novo;
    console.log("Cliente atualizada com sucesso");
  }
}

function removercliente() {
  listarClientes();

  const id = prompt("ID do cliente: ");

  const indice = clientes.findIndex((cliente) => cliente.id == id);

  if (indice != -1) {
    clientes.splice(indice, 1);

    console.log("Cliente removida com sucesso");
  }
}

module.exports = {
  adicionarCliente,
  atualizarCliente,
  removercliente,
  listarClientes,
};
