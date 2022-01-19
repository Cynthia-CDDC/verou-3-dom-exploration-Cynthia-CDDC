const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  // TODO: add the div (select the location where you want to add it first)
const containerSection = document.querySelector(".displayedsquare-wrapper");
const div = document.createElement("div");
div.classList.add("displayedsquare");
containerSection.append(div);

// TODO: get the color class from the one that was clicked, and assign it to the new one
const color = e.target.classList[1];
div.classList.add(color)
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
} 
//End of given JS

//More readable version of the given function
/*const clickOnSquare = (event) => {
console.log(event.target.classList[1]);
console.log(getElapsedTime());

// TODO: add the div (select the location where you want to add it first)
const containerSection = document.querySelector(".displayedsquare-wrapper");
const div = document.createElement("div");
div.classList.add("displayedsquare");
containerSection.append(div);

// TODO: get the color class from the one that was clicked, and assign it to the new one
const color = event.target.classList[1];
div.classList.add(color)
}*/




