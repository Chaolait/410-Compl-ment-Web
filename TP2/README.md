# M413 - TD2 : Réponses aux Questions

> Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?

- document.addEventListener('click', (event) => {...}
- Je l'ai mis sur le document.

> Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?

- XxxXxxXxxXxxXxxXxxXxxXxx

> Comment avez-vous ajouté l’élément ?

- J'ai utilisé un insertAdjacentHTML() sur l'element target
target.insertAdjacentHTML('beforebegin', '<span id="inserted">' + text + '</span>');

> Comment avez-vous fait pour que la fonction select2() ignore les évèments de la <div> donnée ci-dessus ? 

- Je check quel chemin a parcouru l'event.target et si il correspond a un des chemin que l'on veut eviter, je ne fais rien.

