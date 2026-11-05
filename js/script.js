function genererContenu() {
	// Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p

	// obtenir l'element
	const	blocDyn = document.getElementById("demo");

	// obtenir les infos
	const	nbSection = document.getElementById("qty").value,
		titre = document.getElementById("titre").value,
		txt = document.getElementById("contenu").value;

	// creer les elements a ajouter au DOM
	const	blocStage = document.createElement("section");

	for (let i = 0; i < nbSection; i++) {
		const	nodeTitre = document.createElement("h2"),
			nodePara = document.createElement("p");

		nodeTitre.textContent = titre + " [" + i + "]";
		nodePara.textContent = txt + " [" + i + "]";

		blocStage.appendChild(nodeTitre);
		blocStage.appendChild(nodePara);
	}

	// ajouter elements au DOM
	blocDyn.appendChild(blocStage);
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
	
	//obtenir couleure
	const	colPara = document.getElementById("couleur").value;

	// objenir elements
	const	paraToChange = document.getElementById("demo").getElementsByTagName("p");

	for (let e of paraToChange) {
		e.style.color = colPara;
	}

	// pkoi ca marche pas?
	// paraToChange.forEach( e => { e.style.color = colPara; } );
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
	
	// get les elements
	const buttons = document.getElementsByTagName("button");

	for (let e of buttons) {
		e.className = document.getElementById("btnClass").value;
	}
}
