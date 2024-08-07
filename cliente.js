const prompt = require("prompt-sync")();

let ultimoIdCliente = 0;

let clientes = [];

function modeloCliente(id = ++ultimoIdCliente) {
  const nome = prompt("Nome do Cliente: ");

  if (nome !== "") {
    return { id, nome };
  }

  console.log("Cliente inválido");
  return null;
}

function criarCliente() {
  const novoCliente = modeloCliente();

  if (novoCliente) {
    clientes.push(novoCliente);
    console.log("Cliente criado com sucesso");
  }
}

function listarClientes() {
  clientes.forEach((cliente) => {
    console.log(
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

function removerCliente() {
  listarClientes();
  const id = prompt("ID do Cliente a ser removido: ");
  const indice = clientes.findIndex(cliente => cliente.id == id);
  if (indice !== -1) {
    clientes.splice(indice, 1);
    console.log("Cliente removido com sucesso");
  } else {
    console.log("Cliente não encontrado");
  }
}



module.exports = {
  criarCliente,
  atualizarCliente,
  removerCliente,
  listarClientes,
};
