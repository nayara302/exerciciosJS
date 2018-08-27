window.onload = function() {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    var salario = parseFloat(prompt("Digite o valor do seu salário: "));
    soma += salario;
  }
  alert("A soma dos salários dos trabalhadores é de: R$ " + soma);
}
