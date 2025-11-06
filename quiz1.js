const QUESTIONS = [
  ["Quelle est la capitale de la France ?", "madrid", "rabat", "paris", "birlin", "paris"],
  ["Combien font 5 + 3 ?", "3", "6", "9", "8", "8"],
  ["Quelle est la couleur du ciel par temps clair ?", "vers", "bleu", "noir", "rouge", "bleu"],

  ["Quelle planète est la plus proche du Soleil ?", "Mercure", "tere", "moon", "Mercured", "Mercure"]
  // ["Quel est le fleuve le plus long du monde ?", "draa", "dahir", "Nil", "kotliner", "Nil"]
];
// ["Quel est le plus grand océan ?", "atlantique", "indien", "arctique", "Pacifique", "Pacifique"],
// ["Combien de jours dans une semaine ?", "7", "6", "1", "9", "7"],
// ["Combien de pattes a une araignée ?", "10", "8", "5", "7", "3"],
// ["Quelle est la capitale de l'Espagne ?", "Madrid", "almeria", "casa", "barcelona", "Madrid",],
// ["Combien de continents y a-t-il sur Terre ?", "5", "3", "7", "1", "7"],
// ["Quelle est la langue officielle du Brésil ?", "ortogole", "patricate", "portugais", "spartacosse", "portugais"],
// ["Quel est l'animal le plus rapide du monde ?", "guépard", "tiger", "aigle", "lion", "guépard"],
// ["Combien de secondes dans une minute ?", "40", "60", "90", "70", "60"],
// ["Quel est le plus grand pays du monde ?", "maroc", "okran", "nighterant", "Russie", "Russie"],
// ["De quelle couleur est une banane mûre ?", "rouge", "noir", "jaune", "vere", "jaune"],

var reponseCorrect = 0;
let tabValue = [];
var bonnesReponse = 0;
var k = 0, i = 0;
var buttonPrecedant = document.getElementById("Button-precedant");
var buttonSuivant = document.getElementById("Button-suivant");

document.getElementById("deuxeme-Section").style.visibility = "hidden"

document.getElementById("question").innerText = QUESTIONS[0][0]
document.getElementById("choix11").innerText = QUESTIONS[0][1]
document.getElementById("choix22").innerText = QUESTIONS[0][2]
document.getElementById("choix33").innerText = QUESTIONS[0][3]
document.getElementById("choix44").innerText = QUESTIONS[0][4]

buttonPrecedant.style.visibility = "hidden";
//function checkign()***************************************************************************************
function checkingFUNC() {
  const checkedup = document.querySelectorAll(".choix");
  checkedup.forEach((radio, index) => {
    radio.value = QUESTIONS[i][index + 1];
    if (radio.checked) {

      tabValue.push(radio.value);


      let outputRV = radio.value;
      let outputQS = QUESTIONS[i][5];
      if (outputRV === outputQS) {
        console.log(reponseCorrect);
        reponseCorrect++;
        document.getElementById("div-h2-score").textContent = "votre resultats est : " + reponseCorrect + "/15.";
      }
      k++;
      buttonPrecedant.style.visibility = "visible"
      i++;
      // 14
      if (i >= 3) {
        buttonSuivant.innerText = "Terminer"
      } else {
        buttonSuivant.innerText = "suivant"
      }
      // 15
      if (i == 4) {
        terminer();
      }
      document.getElementById("question").innerText = QUESTIONS[i][0]
      document.getElementById("choix11").innerText = QUESTIONS[i][1]
      document.getElementById("choix22").innerText = QUESTIONS[i][2]
      document.getElementById("choix33").innerText = QUESTIONS[i][3]
      document.getElementById("choix44").innerText = QUESTIONS[i][4]
      radio.checked = false;
    }
  });

}
//**************************************************************************************************************
btnSuivant()
function btnSuivant() {
  buttonSuivant.addEventListener('click', function () {
    checkingFUNC()
  }
  )
}
//************************************ *********************************************************************
btnPrec()
function btnPrec() {
  buttonPrecedant.addEventListener('click', function () {
    i--;
    k--;
    buttonSuivant.innerText = "suivant"
    if (k == 0) {
      buttonPrecedant.style.visibility = "hidden"
    }
    document.getElementById("question").innerText = QUESTIONS[i][0]
    document.getElementById("choix11").innerText = QUESTIONS[i][1]
    document.getElementById("choix22").innerText = QUESTIONS[i][2]
    document.getElementById("choix33").innerText = QUESTIONS[i][3]
    document.getElementById("choix44").innerText = QUESTIONS[i][4]
  })
}
// !!***************************************!ùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùùù**********************************
function terminer() {
  document.getElementById("deuxeme-Section").style.visibility = "visible"
  var afficherDiv = document.getElementById("div-affichage");
  var conteneurDiv = document.getElementById("div-conteneur");
  for (let i = 0; i < QUESTIONS.length; i++) {
    const clone = afficherDiv.cloneNode(true);
    var questionSct2 = clone.querySelector(".Deux-Section-H2");
    var repnse = clone.querySelectorAll(".h33");
    questionSct2.textContent = QUESTIONS[i][0];
    repnse.forEach((raio, index) => {
      raio.textContent = QUESTIONS[i][index + 1];
      raio.value = QUESTIONS[i][index + 1];
    });

    if (tabValue[i] != QUESTIONS[i][5]) {

      for (let j = 0; j < 4; j++) {
        if (tabValue[i] === repnse[j].value) {

          repnse[j].style.background = 'red';
        }
      }
    }
    for (let p = 0; p < 4; p++) {
      if (repnse[p].value === QUESTIONS[i][5]) {

        repnse[p].style.background = 'Lime';
      }
    }

    conteneurDiv.appendChild(clone);
  }
}
// **********************************************************************************************************************

