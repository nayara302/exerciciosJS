window.onload = function (){
  var valor = parseInt(prompt("Digite um valor: "));
  var result = valor % 2;
  if (result == 0){
    alert("O número é par.");
  }else {
    alert("O número é impar.");
  }
}
