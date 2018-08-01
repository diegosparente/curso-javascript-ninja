# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
function isTruthy(argumento) {
  return !!argumento;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy('a');
isTruthy({});
isTruthy([]);
isTruthy(true);
isTruthy(2 === 2);
isTruthy('a' !== 'b');
isTruthy(1 < 2);
isTruthy(null !== false);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  placa: 'ooe-7987',
  ano: 2012,
  cor: 'Azul',
  quantasportas: 2,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(cor) {
  carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function() {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function() {
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function() {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function() {
  return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.entreNoCarro = function( numeroDePessoas ) {
  var totalPessoas = carro.quantidadePessoas + numeroDePessoas;
  var quantasPessoas = carro.assentos - carro.quantidadePessoas;
  var pessoa = quantasPessoas === 1 ? pessoa = 'pessoa' : pessoa = 'pessoas';
    
  if ( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
    return 'O carro já está lotado!';
  }

  if ( totalPessoas > carro.assentos ) { 
    return 'Só cabem mais ' + quantasPessoas + ' ' + pessoa + '!';
  }
  carro.quantidadePessoas += numeroDePessoas;
  return 'Já temos' + totalPessoas + ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //Azul

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelha');

// E agora, qual a cor do carro?
carro.obterCor(); //vermelha

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //verde musgo

// Qual a marca e modelo do carro?
carro.obterMarca(); //Fiat
carro.obterModelo(); //Uno

// Adicione 2 pessoas no carro.
carro.entreNoCarro(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.entreNoCarro(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.entreNoCarro(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
carro.entreNoCarro(-4); // Já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
entreNoCarro(10); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
```
