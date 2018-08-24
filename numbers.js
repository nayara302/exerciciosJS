function verificaNumero(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log(num1 + " - " + num2);
  var result = document.getElementById("resultado");

  if(num1 < 0 || num2 < 0){
    alert("O valor digitado não é válido");
    alert("Tente novamente!!!");
  }else{
    if (num1 > num2) {
      result.innerHTML = "O número " + num1 + " é o maior!";
    }else{
      result.innerHTML = "O número " + num2 + " é o maior!";
    }
  }
}
