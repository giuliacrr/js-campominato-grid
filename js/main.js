"use strict"
//Div container
const boxContainer = document.getElementById("divs-container");
//btn
const btnGenerate = document.querySelector(".btn-gen");
//Select quantity of divs 
const quantity = document.getElementById("select-quantity")


btnGenerate.addEventListener("click", function () {
  boxContainer.innerHTML = "";
  //Divs quantity
  const quantityValue = parseInt(quantity.value) // 1 = 49, 2 = 81, 3 = 100
  let x = 0;
  let square = 0;
  if (quantityValue === 1) {
    square = Math.sqrt(49);
    x = 49;
  } else if (quantityValue === 2) {
    square = Math.sqrt(81);
    x = 81;
  } else if (quantityValue === 3) {
    square = Math.sqrt(100);
    x = 100;
  }
  //Cycle that generates the same div x times
  for (let i = 0; i < x; i++) {
    let div = document.createElement("div"); //Virtual Div
    boxContainer.append(div);//append the div into the container
    div.classList.add("div-style", "d-flex", "justify-content-center", "align-items-center");//Add the class at each div
    div.innerHTML = i + 1; //Print the number inside the div
    div.style.flexBasis = `calc(100% / ${square})`;
    //EventListner to make the div become blue on click + print in console of the div number
    div.addEventListener("click", function () {
      div.classList.toggle("bg-primary");
      console.log("Div number" + " " + (i + 1));
    })
  }
})

//function divGenerator(x, container) {
  //Dove x è la quantità di div da creare
  //let div = document.createElement("div"); //Virtual Div
  //for (let i = 0; i < x; i++) {
    //container.append(div);
  //}
  //return container.append(div);
//}

