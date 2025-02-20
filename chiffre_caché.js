var x
var nb_tentatives
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max - min)) + min
}
function padding(x, n){
    let zeros = "0"
    zeros = zeros.repeat(n)
    console.log(zeros)
    let s = zeros + x
    return s.slice(-4)
}
function setDifficultyLevel(){
const diff_lvls = document.querySelectorAll('[name="niveau_desire"')
let diff_lvl
diff_lvls.forEach((x)=>{
    if(x.checked){
        diff_lvl = x.value
    }
})
switch (diff_lvl) {
    case 'facile':
        x = getRandomNumber(0,10);
        nb_tentatives = 5
      break;
    case 'intermédiaire':
        x = getRandomNumber(0,10);
        nb_tentatives = 3
      break;
    case 'difficile':
        x = getRandomNumber(0,10);
        nb_tentatives = 1
      break;
    default:
        x = getRandomNumber(0,10);
        nb_tentatives = 3
  }
}
function game(){
  alert('start game');
  setDifficultyLevel();
  while (nb_tentatives>0){
    var answer = prompt("Devinez le nombre caché");
    if(answer == x) {alert("Quelle chance! vous avez gagné!"); break;}
    nb_tentatives--;
    if (nb_tentatives == 0) alert("vous avez échoué :(");
  }
}
const button = document.querySelector("button")
button.addEventListener("click", game)