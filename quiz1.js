const QUESTIONS = [
  ["Quelle est la capitale de la France ?", "madrid", "rabat", "paris", "birlin", "paris"],
  ["Combien font 5 + 3 ?", "3", "6", "9", "8", "8"],
  ["Quel est le fleuve le plus long du monde ?", "draa", "dahir", "Nil", "kotliner", "Nil"]
];

  // ["Quelle est la couleur du ciel par temps clair ?", "vers", "bleu", "noir", "rouge", "bleu"],
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
  // ["Quelle planète est la plus proche du Soleil ?", "Mercure", "tére", "moon", "Mercured", "Mercure"],

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





// !*********************************

// function refuseCHeck() {

//   const checkedup = document.getElementsByName('choix');

//   checkedup.forEach(radio => {

//     if (radio.checked) {
//       radio.checked = false;

//     }
//   })
// }




//function checkign()***********************************

function checkingFUNC() {

  const checkedup = document.querySelectorAll(".choix");

  checkedup.forEach(radio => {
    radio.addEventListener('change', function () {
      if (radio.checked) {
        btnSuivant()

      }
    })

  })
}

checkingFUNC()

//***********************************
function btnSuivant() {

  buttonSuivant.addEventListener('click', function () {
    k++;
    buttonPrecedant.style.visibility = "visible"
    i++;
    // 14
    if (i >= 2) {
      buttonSuivant.innerText = "Terminer"
    } else {
      buttonSuivant.innerText = "suivant"
    }
    // 15
    if (i == 3) {
      terminer();
        
    }

    document.getElementById("question").innerText = QUESTIONS[i][0]
    document.getElementById("choix11").innerText = QUESTIONS[i][1]
    document.getElementById("choix22").innerText = QUESTIONS[i][2]
    document.getElementById("choix33").innerText = QUESTIONS[i][3]
    document.getElementById("choix44").innerText = QUESTIONS[i][4]

  

  })
}

//************************************ 
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
// !!***************************************
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
      console.log(raio);
    });
    // repnse[1].textContent=QUESTIONS[i][2];
    // repnse[2].textContent=QUESTIONS[i][3];
    // repnse[3].textContent=QUESTIONS[i][4];


    conteneurDiv.appendChild(clone);

  }
}
///****************************** */
ajouterValus()
function ajouterValus() {
  const checkedup = document.getElementsByName('choix');
  for (let i = 0; i < QUESTIONS.length; i++) {
    checkedup.forEach((radio, index) => {

      radio.value = QUESTIONS[i][index + 1]
    })
  }
}
// !!!!!!**********************************!!!!!!!!!!!!!!
function verify() {
  var tabReponce = document.querySelectorAll(".choix")
  var reponseCorrect = 0;
  for (let i = 0; i < QUESTIONS.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (tabReponce[j].checked) {

        if (tabReponce[j].value == QUESTIONS[i][5]) {
          reponseCorrect++;

        }

      }
    }

  }
  document.getElementById("div-score").textContent="reponseCorrect" ;
}




//       document.getElementById("question").innerHTML = QUESTIONS[i][0];
//       inputText.innerHTML = QUESTIONS[0][0]
//       inputText.innerHTML = QUESTIONS[i][1].toLowerCase().trim();
//         if (inputTextLower === reponseCorrecte) {
//           bonnesReponse++;
// }    }
