"use strict"
//Div container
const boxContainer = document.getElementById("divs-container");
//btn
const btnGenerate = document.querySelector(".btn-gen");

btnGenerate.addEventListener("click", function () {
  boxContainer.innerHTML = "";
  //Cycle that generates the same div 100 times
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div"); //Virtual Div
    boxContainer.append(div);//append the div into the container
    div.classList.add("div-style", "d-flex", "justify-content-center", "align-items-center");//Add the class at each div
    div.innerHTML = i + 1; //Print the number inside the div
    //EventListner to make the div become blue on click + print in console of the div number
    div.addEventListener("click", function () {
      div.classList.toggle("bg-primary");
      console.log("Div number" + " " + (i + 1));
    })
  }

})

function divGenerator(x, container) {
  //Dove x è la quantità di div da creare
  let div = document.createElement("div"); //Virtual Div
  for (let i = 0; i < x; i++) {
    container.append(div);
  }
  return container.append(div);
}

