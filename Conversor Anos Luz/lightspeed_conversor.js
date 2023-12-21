var distanciaDesejada;
var umAnoLuz;
var unidadeMedida;

var metrosOuKm = prompt(
	"Qual a unidade de medida desejada? (A= Metros;   B= Quilomêtros)");

var distanciaDesejada = prompt("Qual a distância em Anos-Luz?");

if ( metrosOuKm = "a" ){
	umAnoLuz = 9.461e+15;
	unidadeMedida = "metros";
} else if (metrosOuKm = "b"){
	umAnoLuz = 9.461e+12;
	unidadeMedida = "Km";
}

resultadoFinal = distanciaDesejada * umAnoLuz;

alert(distanciaDesejada + " Ano-Luz equivale a " + resultadoFinal + " " + unidadeMedida);
