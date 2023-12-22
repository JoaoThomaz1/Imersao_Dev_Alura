var bannerDosFilmes = []; //array para guardar as img's
var nomeDosFilmes = []; //array para guardar os nomes
var linkDosFilmes = []; //array para guardar link dos filmes

function adicionarFilme(){
	
	var filmeAdicionado = document.getElementById("filme").value
	var nomeFilme = document.getElementById("nomeFilme").value
	var linkFilme = document.getElementById("linkFilme").value

	if ((filmeAdicionado.endsWith("jpg")) || (filmeAdicionado.endsWith("jpeg"))){

		bannerDosFilmes.push(filmeAdicionado) //push das novas img's
		nomeDosFilmes.push(nomeFilme); // push dos novos nomes
		linkDosFilmes.push(linkFilme); // push dos novos links
	
	} else {
		document.getElementById("mensagemErro").innerHTML = "Formato não aceito, Favor adicione no formato JPG ou JPEG!";
	}

	var elementListaFilmes = document.getElementById("listaFilmes") //div para colocar as img's
	elementListaFilmes.innerHTML = "";

	for (i = 0; i < bannerDosFilmes.length; i++ ){
		
		elementListaFilmes.innerHTML += "<a href ='" + linkDosFilmes[i] + "'><img src='" + bannerDosFilmes[i] + "'></a>";
		elementListaFilmes.innerHTML += "<p>" + nomeDosFilmes[i] + "</p>";
		
	}
	
	document.getElementById("filme").value = ""
	document.getElementById("nomeFilme").value = ""
	document.getElementById("linkFilme").value = ""
}


