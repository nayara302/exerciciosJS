window.onload = function() {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    var salario = parseFloat(prompt("Digite o valor do seu salário: "));
    soma += salario;
  }

  var media = soma / 5;

  if (media <= 5000) {
    alert("Rever os salários desses profissionais.");
  }else{
    alert("O salário desses funcionários estão corretos.");
  }
}
