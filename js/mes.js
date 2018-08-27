window.onload = function () {
  var number = parseInt(prompt("Digite o número de um mês: "));
  if (number < 1 || number > 12) {
    alert("Número inválido. Digite apenas números entre 1 e 12.");
  }else {
    alert(verificaMes(number));
  }
}
function verificaMes(number){
  var txt = "";

   if (number == 1){
     txt = "Janeiro.";
   }
   if (number == 2){
     txt = "Fevereiro.";
   }
   if (number == 3){
     txt = "Março.";
   }
   if (number == 4){
     txt = "Abril.";
   }
   if (number == 5){
     txt = "Maio.";
   }
   if (number == 6){
     txt = "Junho.";
   }
   if (number == 7){
     txt = "Julho.";
   }
   if (number == 8){
     txt = "Agosto.";
   }
   if (number == 9){
     txt = "Setembro.";
   }
   if (number == 10){
     txt = "Outubro.";
   }
   if (number == 11){
     txt = "Novembro.";
   }
   if (number == 12){
     txt = "Dezembro.";
   }

   return txt;
}
