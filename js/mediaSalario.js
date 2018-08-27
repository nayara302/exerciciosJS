window.onload = function() {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    var salario = parseFloat(prompt("Digite o valor do seu salário: "));
    soma += salario;
  }
  var media = soma / 5;
  alert("A média dos salários dos trabalhadores é de: " + media);
}
