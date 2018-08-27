function ordemCrescente() {
  var num1 = parseInt(document.getElementById("num1").value) ;
  var num2 = parseInt(document.getElementById("num2").value) ;
  var num3 = parseInt(document.getElementById("num3").value) ;

  var numero = [num1, num2, num3];

  if(num1 == num2 && num2 == num3){
    alert("Os números são iguais.");
  }else{
    numero.sort();
    for (var i = 0; i < 3; i++) {
      alert(numero[i]);
    }
  }
}
