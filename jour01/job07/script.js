// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
// date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
// $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
// message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
// $jour $mois $année est un jour travaillé”.




const joursFerierData = {
	"1,1": "Jour de l'An",
	"5,4": "Paques",
	"1,5": "Fête du Travail",
	"8,5": "Victoire des Alliés en 1945",
	"13,5": "Ascension",
	"24,5": "Pentecôte",
	"14,7": "Fête nationale",
	"15,8": "Assomption",
	"1,11": "Toussaint",
	"11,11": "Armistice 1918",
	"25,12" : "Noël"
};


function jourtravaille(dateString = "2023-03-06") {
	let date = new Date(dateString);
	let jour = date.getDate();
	let jourSemaine = date.getDay();
	let mois = date.getMonth() + 1;
	let annee = date.getFullYear();
	
	let key = `${jour},${mois}`;

	let jourFerier = joursFerierData[key];

	if (typeof jourFerier == "string") {
		console.log(`Le ${jour} ${mois} ${annee} est un jour férié - ${jourFerier}`);
	} else if (jourSemaine == 6 || jourSemaine == 0) {
		console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
	} else {
		console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
	}
	
	// console.log(key);
	// console.log(jourFerier);
	// console.log(jourSemaine);
}

let d = prompt("Entrez votre date");
console.log(d);

// jourtravaille("2023-05-01");
jourtravaille(d);