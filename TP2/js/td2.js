/**
* 
* M413 - TD2
* * 
* 	@author Arthur BAILLEUL
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2023-03-19
*
*/
"use strict";

/*
jquery permet de simplifier l'écriture de code javascript, c'est beaucoup utilisé dans le monde du web.
*/

// M413 - TD2
let message = 'JavaScript is ok :)';
let selected = false;
let element;
console.log( message);

function onLoad() {
	insertDiv();
	initSelect();
}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

function initSelect() {
	document.addEventListener('click', select);
}

/* EXERCICE 1
function select(event) {
	const element = event.target;
	if(element.style.backgroundColor === 'red')
		element.style.backgroundColor = 'white';
	else
		element.style.backgroundColor = 'red';
}*/

/* EXERCICE 8*/
function select(event) {
	const element = event.target;
	if (element.style.backgroundColor === 'red') {
		element.style.backgroundColor = 'white';
	} else {
		element.style.backgroundColor = 'red';
		const parent = element.parentElement;
		parent.style.backgroundColor = 'orange';
		const grandParent = parent.parentElement;
		grandParent.style.backgroundColor = 'orange';
		grandParent.addEventListener('click', function() {
			grandParent.style.backgroundColor = 'orange';
		}, { once: true });
	}
}

function select2(event) {
	if(!selected) {
		element = event.target;

		let path = [];
		let parent = element;
		while(parent.tagName.toLowerCase() !== 'body') {
			path.push(parent.tagName.toLowerCase());
			parent = parent.parentElement;
		}
		path.reverse();

		if(!(path[0] === 'div' && (path[1] === 'select' || path[1] === 'input') || event.target.id === 'insert-div')) {
			if(element.style.backgroundColor === 'blue')
				element.style.backgroundColor = 'white';
			else
				element.style.backgroundColor = 'blue';
		}
		insertElement(element);
		selected = true;
	} else {
		element.style.backgroundColor = 'white';
		const elementInserted = document.getElementById('inserted');
		console.log(elementInserted);
		elementInserted.remove();
		selected = false;
	}
}

function insertElement(target) {
	const type = document.getElementById('insert-type').value;
	const text = document.getElementById('insert-text').value;
	switch(type) {
		case 'div':
			target.insertAdjacentHTML('beforebegin', '<div id="inserted">' + text + '</div>');
			break;
		case 'p':
			target.insertAdjacentHTML('beforebegin', '<p id="inserted">' + text + '</p>');
			break;
		case 'span':
			target.insertAdjacentHTML('beforebegin', '<span id="inserted">' + text + '</span>');
			break;
	}
}

function insertDiv() {
	const div = '<div id="insert-div"><select id="insert-type" name="type"><option value="div">div</option><option value="p">p</option><option value="span">span</option></select><input type="text" id="insert-text" value="My New Text Element"> </div>';
	document.body.insertAdjacentHTML('beforebegin', div);
}


function search() {
	const search = document.getElementById("ChampText").value;
	if(search=="") {
		// Remplace le body par la page sans les span
		document.body.innerHTML = page.innerHTML;
	} else {
		// Cherche les mêmes mots que la recherche
		const regex = new RegExp(search, "g");
		const result = document.body.innerHTML.replace(regex, "<span style='background-color: yellow;'>"+search+"</span>");
		document.body.innerHTML = result;
	}
}
