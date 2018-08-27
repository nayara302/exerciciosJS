window.onload = function() {
  var nome1 = prompt("Digite seu nome: ");
  var idade1 = parseInt(prompt(nome1 + " digite a sua idade: "));

  var nome2 = prompt("Digite seu nome: ");
  var idade2 = parseInt(prompt(nome2 + " digite a sua idade: "));

  verificaMaioridade(nome1, idade1, nome2, idade2);
};

function verificaMaioridade(nome1, idade1, nome2, idade2){
  if(idade1 >= 18 && idade2 >= 18){
    alert("Somente uma pessoa pode ser maior de idade!");
  }else{
    if(idade1 >= 18){
      alert(nome1 + " você é maior de idade!");
    }else {
      alert(nome2 + " você é maior de idade!");
    }
  }
};
