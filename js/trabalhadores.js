window.onload = function() {
  var trabalhadores = parseInt(prompt("Quantos trabalhadores são? "));
  var soma = 0;
  for(var i = 1; i <= trabalhadores; i++) {
    var salario = parseFloat(prompt("Digite o salário do " + i + "º trabalhador: "));
    soma += salario;
  }
  alert("A soma dos salários é de: R$ " + soma);
}
