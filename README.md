# Corretora-de-im-veis
Utilizando agora IDs, faça o gerenciamento das seguintes entidades:

Corretora:
 nome

Corretor:
 nome
 id_corretora: relacionar com corretora

Imóvel
 numero
 rua
 bairro id_corretora: relacionar com corretora
 
Cliente:
 nome

Venda
 id_imovel
 id_cliente
 id_corretor
