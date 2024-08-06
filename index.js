const prompt = require("prompt-sync")();

const {
  criarCorretora,
  listarCorretoras,
  atualizarCorretora,
  removerCorretora,
} = require("./corretora.js");
const {
  criarCorretor,
  listarCorretores,
  removerCorretor,
} = require("./corretor.js");
const {
  criarImovel,
  listarImoveis,
  atualizarImovel,
  removerImovel,
} = require("./imovel.js");
const {
  criarCliente,
  listarClientes,
  atualizarCliente,
  removerCliente,
} = require("./cliente.js");
const { registrarVenda, listarVendas, removerVenda } = require("./venda.js");

function menuCorretoras() {
  console.log(`
    1 - Cadastrar Corretora
    2 - Listar Corretoras
    3 - Atualizar Corretora
    4 - Remover Corretora
    0 - Voltar
  `);
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      criarCorretora();
      break;
    case "2":
      listarCorretoras();
      break;
    case "3":
      atualizarCorretora();
      break;
    case "4":
      removerCorretora();
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida");
  }
}

function menuCorretores() {
  console.log(`
    1 - Cadastrar Corretor
    2 - Listar Corretores
    3 - Remover Corretor
    0 - Voltar
  `);
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      criarCorretor();
      break;
    case "2":
      listarCorretores();
      break;
    case "3":
      removerCorretor();
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida");
  }
}

function menuImoveis() {
  console.log(`
    1 - Cadastrar Imóvel
    2 - Listar Imóveis
    3 - Atualizar Imóvel
    4 - Remover Imóvel
    0 - Voltar
  `);
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      criarImovel();
      break;
    case "2":
      listarImoveis();
      break;
    case "3":
      atualizarImovel();
      break;
    case "4":
      removerImovel();
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida");
  }
}

function menuClientes() {
  console.log(`
    1 - Cadastrar Cliente
    2 - Listar Clientes
    3 - Atualizar Cliente
    4 - Remover Cliente
    0 - Voltar
  `);
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      criarCliente();
      break;
    case "2":
      listarClientes();
      break;
    case "3":
      atualizarCliente();
      break;
    case "4":
      removerCliente();
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida");
  }
}

function menuVendas() {
  console.log(`
    1 - Registrar Venda
    2 - Listar Vendas
    3 - Remover Venda
    0 - Voltar
  `);
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      registrarVenda();
      break;
    case "2":
      listarVendas();
      break;
    case "3":
      removerVenda();
      break;
    case "0":
      return;
    default:
      console.log("Opção inválida");
  }
}

while (true) {
  console.log(`
    1 - Gerenciar Corretoras
    2 - Gerenciar Corretores
    3 - Gerenciar Imóveis
    4 - Gerenciar Clientes
    5 - Gerenciar Vendas
    0 - Sair
  `);
  const opcao = prompt("Escolha uma opção: "); 

  switch (opcao) {
    case "1":
      menuCorretoras();
      break;
    case "2":
      menuCorretores();
      break;
    case "3":
      menuImoveis();
      break;
    case "4":
      menuClientes();
      break;
    case "5":
      menuVendas();
      break;
    case "0":
      process.exit();
      break;
    default:
      console.log("Opção inválida");
  }
}
