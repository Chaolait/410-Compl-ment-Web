'use strict';


// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

let isSearched = false;
var page = document.body;

function onLoad() {
	//debugger; // Pour passer en debugger sur le navigateur.
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !
	//defineHeading1();
	defineHeading2(0);
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDays();
	updateClock2();
	updateGraphicClock();
	formulaire();
}

function defineHeading1() {
	let title = document.getElementById("title").textContent;
	document.title = title;
}

function defineHeading2(position=(document.getElementsByTagName("h2").length)-1) {
	const h2 = document.getElementsByTagName("h2");
	const numberOfH2 = h2.length;
	if(!numberOfH2==0) {
		document.title = h2[position].textContent;
	}
}

function defineHeading3() { 
	const numberOfH2 = document.getElementsByTagName("h2").length;
	if(numberOfH2==0) {
		document.title = "Arthur BAILLEUL";
	}
}

function defineHeading4() {
	const firstOrLast = document.getElementsByClassName("firstOrLast");
	const lastElement = firstOrLast.length-1;

	((firstOrLast.length%2==0)?
		document.title = firstOrLast[0].textContent :
		document.title = firstOrLast[lastElement].textContent
		)
}

function swapInnerHTML() {
	let baliseP = document.getElementsByTagName("p");
	let swap = baliseP[0].innerHTML;
	baliseP[0].innerHTML = baliseP[1].innerHTML;
	baliseP[1].innerHTML = swap;
}

function dateAlter() {
	const autor = document.getElementsByName("author")[0].content;
	let day = new Date().toLocaleDateString('fr-FR', {weekday: 'long'});
	let dayOfMonth = new Date().toLocaleDateString('fr-FR', {day: 'numeric'});
	let month = new Date().toLocaleDateString('fr-FR', {month: 'long'});
	let year = new Date().toLocaleDateString('fr-FR', {year: 'numeric'});

	let date = day + " " + dayOfMonth + " " + month + " " + year;
	let message = "Dernière modification : "+ date +" par " + autor;
	document.getElementById("update-date").innerHTML = message;
}

function getNbDays() {
	document.getElementById("nbDays").addEventListener("click", e => {
		const nbDaysElement = document.getElementById("nbDays");
		let nbDaysText = nbDaysElement.textContent; // il reste xxx jours avant le 19 juillet 202X » (202x étant année en cours)
		let nbDays = nbDaysText.substring(nbDaysText.indexOf("19"), nbDaysText.indexOf("X")); // 19 juillet 202X
		let date = new Date();

		const nbDaysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
		let nbDaysFromStartOfYear = 0;
		for(let i = 0; i < date.getMonth(); i++) {
			nbDaysFromStartOfYear += nbDaysPerMonth[i];
		}
		nbDaysFromStartOfYear += date.getDate();

		let nbDaysBeforeEndOfYear = 365 - nbDaysFromStartOfYear;
		let nbDaysFromStartOfYearToJuly19 = 200;

		if(nbDaysFromStartOfYear > nbDaysFromStartOfYearToJuly19) {
			nbDaysElement.textContent = "Il reste " + (nbDaysBeforeEndOfYear + nbDaysFromStartOfYearToJuly19) + " jours avant le 19 juillet " + date.getFullYear()+1;
		} else if(nbDaysFromStartOfYear == nbDaysFromStartOfYearToJuly19) {
			nbDaysElement.textContent = "Aujourd'hui c'est le 19 juillet " + date.getFullYear();
		} else {	
			nbDaysElement.textContent = "Il reste " + (nbDaysFromStartOfYearToJuly19 - nbDaysFromStartOfYear) + " jours avant le 19 juillet " + date.getFullYear();
		}
	});
}

function updateClock1() {
	setInterval(e => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		let time = hours + ":" + minutes + ":" + seconds;
		document.getElementById("clock").textContent = time;
	}, 1000);
}

function updateClock2() {
	setTimeout(e => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		let time = hours + ":" + minutes + ":" + seconds;
		document.getElementById("clock").textContent = time;
		updateClock2();
	}, 1000);
}

function updateGraphicClock() {
	const hour10 = document.getElementById("hour10");
	const hour1 = document.getElementById("hour1");
	const minute10 = document.getElementById("minute10");
	const minute1 = document.getElementById("minute1");
	const second10 = document.getElementById("seconde10");
	const second1 = document.getElementById("seconde1");
	setInterval(e => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		hour10.src = "assets/images/" + Math.floor(hours/10) + ".gif";
		hour1.src = "assets/images/" + hours%10 + ".gif";
		minute10.src = "assets/images/" + Math.floor(minutes/10) + ".gif";
		minute1.src = "assets/images/" + minutes%10 + ".gif";
		second10.src = "assets/images/" + Math.floor(seconds/10) + ".gif";
		second1.src = "assets/images/" + seconds%10 + ".gif";

	}, 1000);
}

function formulaire() {
	const input = document.getElementById("inputDuFormulaire");
	input.addEventListener("input", e => {
		const input = e.target;
		const value = input.value;

		if(isNaN(value)&&value!="")
			input.style.backgroundColor = "red";
		else if(value=="")
			input.style.backgroundColor = "white";
		else
			input.style.backgroundColor = "green";
	});
}

function search() {
	const search = document.getElementById("ChampText").value;
	if(search.value=="") {
		// remplace le body par page sans les span
		document.innerHTML = page.innerHTML;
		console.log("vide");
	} else {
		console.log("pas vide");
		// cherche les memes mots que la recherche
		const regex = new RegExp(search, "g");
		const result = document.body.innerHTML.replace(regex, "<span style='background-color: yellow;'>"+search+"</span>");
		page.innerHTML = result;
		
	}
}

