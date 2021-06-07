function calculateBmi() {
   // var edad  = parseInt(document.getElementById('edad').value);
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    var bmi = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var resultado;
    
    if (bmi < 18.5) {
      resultado = 'estás muy delgado';
    } else if (bmi < 25) {
      resultado = 'estás saludable';
    } else {
      resultado = 'tienes sobrepeso';
    }
    
  }
  console.log(calculateBmi(alturaEnCentimetros,pesoEnKilos));
  console.log(resultado);
  //window.onload=init();