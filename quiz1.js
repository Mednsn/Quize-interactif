 const QUESTIONS = [
    ["Quelle est la capitale de la France ?","madrid","rabat","paris","birlin", "paris"],
    ["Combien font 5 + 3 ?","3","6","9","8", "8"],
    ["Quelle est la couleur du ciel par temps clair ?", "vers","bleu","noir","rouge","bleu"],
    ["Quel est le plus grand océan ?","extras ordinaire","un orientation object","comment", "Pacifique", "Pacifique"],
    ["Combien de jours dans une semaine ?", "7","6","1","9","7"],
    ["Quelle est la capitale de l'Espagne ?",  "Madrid","almeria","casa","barcelona","Madrid",],
    ["Combien de continents y a-t-il sur Terre ?", "5","3","7","1","7"],
    ["Quelle est la langue officielle du Brésil ?","ortogole","patricate","portugais","spartacosse","portugais"],
    ["Quel est l'animal le plus rapide du monde ?","guépard","niger","spocot","guéard", "guépard"],
    ["Combien de secondes dans une minute ?", "40","60","90","70","60"],
    ["Quel est le plus grand pays du monde ?", "maroc","okran","nighterant","Russie","Russie"],
    ["De quelle couleur est une banane mûre ?", "jaune","jaune","jaune","jaune","jaune"],
    ["Quelle planète est la plus proche du Soleil ?", "Mercure","Mercure","Mercure","Mercure","Mercure"],
    ["Combien de pattes a une araignée ?", "8","8","8","8","8"],
    ["Quel est le fleuve le plus long du monde ?", "Nil","Nil","Nil","Nil","Nil"]
  ];


var bonnesReponse=0;
 var buttonPrecedant = document.getElementById("Button-precedant");
 var buttonSuivant = document.getElementById("Button-suivant");

   
document.getElementById("question").innerText=QUESTIONS[0][0] 
document.getElementById("choix11").innerText = QUESTIONS[0][1]
document.getElementById("choix22").innerText = QUESTIONS[0][2]
document.getElementById("choix33").innerText = QUESTIONS[0][3]
document.getElementById("choix44").innerText = QUESTIONS[0][4]




function precedant(){
 var i = 0,k=0;
  if(k==0){
      
      buttonPrecedant.style.visibility= "hidden"
    }
    
buttonSuivant.addEventListener('click',function(){
  k++;
  if(k==1){
      buttonPrecedant.style.visibility= "visible"
    }
  
   i++;
   if(i>=14){
    buttonSuivant.style.visibility= "hidden"

    }else{
      buttonSuivant.style.visibility= "visible"
    }
    
document.getElementById("question").innerText=QUESTIONS[i][0] 
document.getElementById("choix11").innerText = QUESTIONS[i][1]
document.getElementById("choix22").innerText = QUESTIONS[i][2]
document.getElementById("choix33").innerText = QUESTIONS[i][3]
document.getElementById("choix44").innerText = QUESTIONS[i][4]
  
 })

  buttonPrecedant.addEventListener('click',function(){
   i--;
   k--; 
   if(k==0){
    buttonPrecedant.style.visibility= "hidden"
   }
 if(i>=14){
    buttonSuivant.style.visibility= "hidden"
    }else{
      buttonSuivant.style.visibility= "visible"
    }
document.getElementById("question").innerText=QUESTIONS[i][0] 
document.getElementById("choix11").innerText = QUESTIONS[i][1]
document.getElementById("choix22").innerText = QUESTIONS[i][2]
document.getElementById("choix33").innerText = QUESTIONS[i][3]
document.getElementById("choix44").innerText = QUESTIONS[i][4]
  
  })
  }
  precedant()

  // function hiddin(){
  //   if 
  // }

 


//       document.getElementById("question").innerHTML = QUESTIONS[i][0];
//       inputText.innerHTML = QUESTIONS[0][0]
//       inputText.innerHTML = QUESTIONS[i][1].toLowerCase().trim();
//         if (inputTextLower === reponseCorrecte) {
//           bonnesReponse++;
 // }    }
   