( function() {

  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName() {
      return this.name + ' ' + this.lastName;
    };

    this.getAge = function getAge() {
      return this.age;
    };

    this.addAge = function addAge() {
      this.age += arguments[0];
      return this;
    };
  }

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  var diego = new Person('Diego', 'Parente', 32)
  console.log( diego );
  var pedro = new Person('Pedro', 'Parente', 15)
  console.log( pedro );
  var biatriz = new Person('Biatriz', 'Parente', 12)
  console.log( biatriz );

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log( diego.getFullName() );
  console.log( pedro.getFullName() );
  console.log( biatriz.getFullName() );

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  console.log( diego.getFullName() + ' tem ' + diego.getAge() + ' anos.');
  console.log( pedro.getFullName() + ' tem ' + pedro.getAge() + ' anos.');
  console.log( biatriz.getFullName() + ' tem ' + biatriz.getAge() + ' anos.');

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  console.log( diego.getFullName() + ' agora tem ' + diego.addAge(2).getAge() + ' anos.');
  console.log( pedro.getFullName() + ' agora tem ' + pedro.addAge(1).getAge() + ' anos.');
  console.log( biatriz.getFullName() + ' agora tem ' + biatriz.addAge(3).getAge() + ' anos.');

} )();
