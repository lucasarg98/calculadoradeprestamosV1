alert('Esta calculadora hace los calculos de manera automatica');

function myFunction(){
  var monto = document.getElementById("Monto").value;
  var meses = document.getElementById("Meses").value;
  var tasa = document.getElementById("Tasa").value;
  var pagoMensual = (monto * tasa * 0.01) / meses;

  document.getElementById("pagomensual").innerHTML = "Pago Mensual: $ "+pagoMensual.toFixed();
 
  if (monto <= 0 && meses <= 0 && meses <= 12 && tasa <= 0){
    alert("Los montos solicitados tienen que ser mayores a 0");
  }
}






