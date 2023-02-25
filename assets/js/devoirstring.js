// exercice 1
function prenom() {
    // on récupère le prénom on le met dans l'élément avec id holder1
    // compléter le code ici
    const prenom = document.getElementById("prenom").value;
  document.getElementById("holder1").innerHTML = "Prénom : " + prenom;
}

function nomdefamille() {
    // on récupère le nom on le met dans l'élément avec id holder1
    // compléter le code icifunction prenom() 
  const nomdefamille = document.getElementById("nomdefamille").value;
  document.getElementById("holder1").innerHTML = "Nom de famille : " + nomdefamille;
}

function nomcomplet() {
    // on concatène prénom et nom pour afficher le nom entier et on met le résultat dans l'élément avec id holder1
    // compléter le code ici
    const prenom = document.getElementById("prenom").value;
    const nomdefamille = document.getElementById("nomdefamille").value;
    const nomcomplet = prenom + " " + nomdefamille;
    document.getElementById("holder1").innerHTML = "Nom complet : " + nomcomplet;
  }


// exercice 2
function segmentText() {
    // on récupère le texte de l'élément d'id texte, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici
        const texte = document.getElementById("texte").value;
        const mots = texte.match(/\b\w+\b/g);
        const nbMots = mots.length;
        const listeMots = mots.join(", ");
      
        document.getElementById("holder2").innerHTML = `Le texte contient ${nbMots} mots : ${listeMots}`;
      }
      
