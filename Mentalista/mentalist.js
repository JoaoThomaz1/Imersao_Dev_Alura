var jogoCompleto = 0;

while (jogoCompleto < 1){
	var numeroSecreto = parseInt(Math.random() * 1001);
	var tentativa = 0;
	var tentativaLimite = 8;
   var derrota = 0

	while (tentativa != tentativaLimite+1){
		var chute = prompt("Digite um número de 0 a 1000!")

		if(chute > 1000 || chute < 0){
			alert("Número invalido, tente novamente")
			Alert("NÚMEROS ENTRE 0 E 1000!")
		}
		if (chute == numeroSecreto){
			alert("Parabéns, você acertou o número!")
		} else if (chute > numeroSecreto) {
			alert("Você errou, o número está abaixo deste! Tentativa: " + tentativa)
		} else if (chute < numeroSecreto) {
			alert("Você errou, o número está acima deste! Tentativa: " + tentativa)
		}

		tentativa ++;
	}
	
	if (tentativa == tentativaLimite+1 && chute != numeroSecreto){
		alert("Você extrapolou a quantidade de tentativas! O número correto era: " + numeroSecreto);
		jogoCompleto --;
      derrota ++;
	}

   if (chute == numeroSecreto || derrota == 1) {
      var resposta = confirm("Deseja continuar? \n\n1. Continuar\n2. Sair");

      if (!resposta){
         break;
      }
   }

	jogoCompleto ++;
	
}