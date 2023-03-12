function exercice1() {
  let monTableau = ["a", "b", "c", "d", "e"];

  let derniereValeur = monTableau.pop();

  monTableau.unshift(derniereValeur);

  return monTableau;

let exercice1Resultat = exercice1();

document.getElementById("exercice1Resultat").innerHTML = exercice1Resultat;
}
 
function exercice2() {
    let mots = texte.split(" ");

    let motsMajuscules = mots.map(function(mot) {
      return mot.toUpperCase();
    });

    return motsMajuscules;
}
  let exercice2Resultat = exercice2();

  document.getElementById("exercice2Resultat").innerHTML = exercice2Resultat.join(" ");


function exercice3() { 
    let mots = texte.split(" ");

    let motsFiltres = mots.filter(function(mot) {
      return mot.length > 3;
    });
  
    return motsFiltres;
}
  let resultatExercice3 = exercice3();

  document.getElementById("exercice3Resultat").innerHTML = resultatExercice3.join(" ");


function exercice4() {
    const mots = texte.split(" ");
    const tableau = document.createElement("table");
    
    mots.forEach(function(mot) {
      const ligne = document.createElement("tr");
      const cellule = document.createElement("td");
      cellule.textContent = mot;
      ligne.appendChild(cellule);
      tableau.appendChild(ligne);
    });
    
    document.getElementById("exercice4Resultat").appendChild(tableau);
}
