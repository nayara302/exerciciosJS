function verificaSoma() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var soma = num1 + num2;

  if(soma >= 18){
    alert("O valor é maior ou igual a 18. A soma é de: " + soma);
  }else {
    alert("O valor é menor que 18. A soma é de: " + soma);
  }
}
