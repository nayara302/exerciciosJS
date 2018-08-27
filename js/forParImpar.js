window.onload = function() {
  var qtd = parseInt(prompt("Quantos números serão inseridos? "));
  var somaTotal = 0;
  var somaImpar = 0;
  var somaPar = 0;

  for (var i = 1; i <= qtd; i++) {
    var number = parseInt(prompt("Digite um número: "));
    var aux = number % 2;
    if(aux == 0){
      alert("O número " + number + " é par.");
      somaPar += number;
    }else{
      alert("O número " + number + " é ímpar.");
      somaImpar += number;
    }
    somaTotal += number;
  }

  alert("A soma total dos números é de: " + somaTotal +
      "\nA soma dos números pares é de: " + somaPar +
      "\nE a soma dos números impares é de: " + somaImpar);
}
