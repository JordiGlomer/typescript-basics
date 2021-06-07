var datos = [3, 0, 2, 4.5, 0, 3, 1];
var valorObjetivoOriginal = 3;
var numeroDias;
var numeroDiasEntrenados;
var obj;
var calculateExercices = function (numeroDias, numeroDiasEntrenados, valorObjetivoOriginal, tiempoMedioCalculado, succes, descripcionMedia, target, media) {
    media = numeroDias[datos.length] / numeroDiasEntrenados;
    if (valorObjetivoOriginal < tiempoMedioCalculado) {
        return ('Vago');
    }
    else if (valorObjetivoOriginal == tiempoMedioCalculado) {
        return ('Bien...');
    }
    else
        return ('Màkina!');
};
numeroDiasEntrenados = datos;
for (var i = 0; i < datos.length; i++) {
    if (datos.length > [i].length) {
        numeroDiasEntrenados = datos[i];
    }
}
console.log(calculateExercices);
function printExercices(obj) {
    console.log(obj.datos);
}
