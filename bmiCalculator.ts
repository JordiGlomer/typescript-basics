
let resultado;

const calculateBmi = (altura: number, peso: number): string =>{
   const bmi = peso /(altura*altura);
   if (bmi >= 18.5 && bmi < 25) {
    resultado = 'Normal (healthy weight)';

  } else {
    resultado = 'fuera de serie';
  }

return `El indice de masa corporal es: ${bmi}.\nTu peso es ${resultado}`;
}
console.log(resultado);
console.log(calculateBmi(1.83,72));



// https://softwarecrafters.io/typescript/typescript-tutorial-javascript-introduccion