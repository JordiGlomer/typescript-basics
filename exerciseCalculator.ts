let datos: number[]=[3, 0, 2, 4.5, 0, 3, 1];
let valorObjetivoOriginal = 3;
let numeroDias;
let numeroDiasEntrenados;
let obj: 

{numeroDias: number, 
    numeroDiasEntrenados: number,
    valorObjetivoOriginal: number,
    tiempoMedioCalculado: number,
    succes: boolean,
    descripcionMedia: string,
    target: number,
    media: number,
}
let calculateExercices = (numeroDias: number[], 
    numeroDiasEntrenados: number,
    valorObjetivoOriginal: number,
    tiempoMedioCalculado: number,
    succes: boolean,
    descripcionMedia: string,
    target: number,
    media: number,)=>{
        
    media = numeroDias[datos.length]/numeroDiasEntrenados;
    
    if(valorObjetivoOriginal<tiempoMedioCalculado){
        return('Vago')
    }else if(valorObjetivoOriginal==tiempoMedioCalculado){
        return('Bien...')
    }else
        return('Màkina!')
 

}
numeroDiasEntrenados = datos
for(let i=0; i<datos.length; i++){
    if(datos.length>[i].length){
      numeroDiasEntrenados=datos[i];
    }
}
console.log(calculateExercices);
interface calculateExercices{
    datos: number;
}

function printExercices(obj: calculateExercices){
    console.log(obj.datos);
}
