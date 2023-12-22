var jogadores = [];

function novoJogador() {
	var nomeJogador = document.getElementById("jogador").value;

	var listaJogador = {
		nome: nomeJogador,
		vitoria: 0,
		empate: 0,
		derrota: 0,
		pontos: 0
	};
	jogadores.push(listaJogador);
	dadosJogador();
}

var elementoTabela = document.getElementById("tabelaJogadores");

function dadosJogador() {
	elementoTabela.innerHTML = "";

	for (i = 0; i < jogadores.length; i++) {
		elementoTabela.innerHTML += ` 
					 <tr>
						<td>${jogadores[i].nome}</td>
						<td>${jogadores[i].vitoria}</td>
						<td>${jogadores[i].empate}</td>
						<td>${jogadores[i].derrota}</td>
						<td>${jogadores[i].pontos}</td>
						<td><button onClick="adicionarVitoria(joao)">Vitória</button></td>
						<td><button onClick="adicionarEmpate(joao)">Empate</button></td>
						<td><button onClick="adicionarDerrota(joao)">Derrota</button></td>
					</tr>
		`;
	}


}

function adicionarVitoria(jogador) {
	jogador.vitoria++;
	jogador.pontos = jogador.pontos + 3;
	dadosJogador();
}

function adicionarEmpate(jogador) {
	jogador.empate++;
	jogador.pontos++;
	dadosJogador();
}

function adicionarDerrota(jogador) {
	jogador.derrota++;
	dadosJogador();
}
