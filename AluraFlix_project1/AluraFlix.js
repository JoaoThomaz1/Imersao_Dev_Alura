
//var entrar = prompt("Gostaria de ver as categorias? (Escreva SIM ou NAO)");


//if (entrar === "SIM"){
	
//	document.write("<button> AÇÃO </button>");
	

var listaFilmes = ["https://cdn.kobo.com/book-images/7b0e1631-9550-459a-9914-ab53b5fdb82e/1200/1200/False/orgulho-e-preconceito-19.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/87/23/46/19873389.jpg","https://i.pinimg.com/236x/52/9b/bb/529bbb1b94b65b0e066c712c8aa18691.jpg","https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg","https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg"];

var nomeFilmes = ["Orgulho e Preconceito", "Velozes e Furiosos", "Interestelar", "Senhor dos Anéis - As Duas Torres", "Senhor dos Anéis - A sociedade do Anel"];

document.write("<div class='container_filmes'>")

var i = 0

while(i < listaFilmes.length){
	if ((listaFilmes[i].endsWith("jpg")) || (listaFilmes.endsWith("jpeg"))){
		document.write("<div class='container_filme'>")
		document.write("<img src="+listaFilmes[i]+">");
		document.write("<p>"+ nomeFilmes[i] +"</p>");
		document.write("</div>")
	}
	i ++;
}

document.write("</div>")