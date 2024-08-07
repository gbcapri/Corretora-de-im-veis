const { imoveis } = require("./imovel");
const { clientes } = require("./cliente");
const { corretores } = require("./corretor");
const prompt = require("prompt-sync")();


let ultimoIdVenda = 0;
let vendas = [];

function modeloVenda(id = ++ultimoIdVenda) {
  const id_imovel = prompt("ID do Imóvel: ");
  const id_cliente = prompt("ID do Cliente: ");
  const id_corretor = prompt("ID do Corretor: ");

  if (id_imovel !== "" && id_cliente !== "" && id_corretor !== "") {
    return { id, id_imovel, id_cliente, id_corretor };
  }

  console.log("Venda inválida");
  return null;
}

function registrarVenda() {
  const novaVenda = modeloVenda();

  if (novaVenda) {
    vendas.push(novaVenda);
    console.log("Venda registrada com sucesso");
  }
}

function listarVendas() {
  vendas.forEach((venda) => {
    console.log(
      `ID Imóvel: ${venda.id_imovel}, ID Cliente: ${venda.id_cliente}, ID Corretor: ${venda.id_corretor}`
    );
  });
}

function removerVenda() {
  listarVendas();
  const id_imovel = prompt("ID do Imóvel vendido a ser removido: ");
  const id_cliente = prompt("ID do Cliente: ");
  const id_corretor = prompt("ID do Corretor: ");

  const indice = vendas.findIndex(
    (venda) =>
      venda.id_imovel == id_imovel &&
      venda.id_cliente == id_cliente &&
      venda.id_corretor == id_corretor
  );

  if (indice !== -1) {
    vendas.splice(indice, 1);
    console.log("Venda removida com sucesso");
  } else {
    console.log("Venda não encontrada");
  }
}

module.exports = {
  registrarVenda,
  removerVenda,
  listarVendas,
};
