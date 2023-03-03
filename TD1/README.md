# M413 - TD1 : Réponses aux Questions

Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?  

- la fonction onload();

Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ?  

- document.getElementById("title")

Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer 
le texte de celui-ci ?

- textContent

Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première 
balise <h2> ? 

- document.getElementsByTagName("h2")[0]

Comment faire pour connaitre le nombre de balise <h2> du document ? 

- document.getElementsByTagName("h2").length

Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ? 

- document.getElementsByClassName("firstOrLast")

Comment avez-vous déterminé si un nombre est pair ? 

- firstOrLast.length%2==0 je fais le modulo de la longueur de la liste et je regarde si le reste est égal à 0 si oui alors le nombre est pair sinon il est impair

Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ? 

- innerHTML : permet de récupérer le contenu HTML d'un élément avec les balises
- innerText : permet de récupérer le contenu textuel d'un élément
- textContent : permet de récupérer le contenu textuel d'un élément

Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ? 

- const autor = document.getElementsByName("author")[0].content;

Même question avec le dernier auteur de la liste.

- const autor = document.getElementsByName("author")[document.getElementsByName("author").length-1].content;

Comment obtenez-vous le nombre de jours ? 

- Je fais une boucle avec le nombre de mois parcouru et je fais la somme des jours de chaque mois et je rajoute le nombre de jours du mois en cours

Comment faites-vous la mise à jour du texte ?

- const nbDaysElement = document.getElementById("nbDays");
- nbDaysElement.textContent

Quel évènement avez-vous utilisé ? 

- J'ai utilisé l'évènement input.

Comment avez-vous fait changer la couleur du champ texte ?

- J'ai utilisé l'évènement input puis j'ai récupéré l'élément ciblé et j'ai changé la couleur de son background.

