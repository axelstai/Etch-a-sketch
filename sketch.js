
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.style.backgroundColor = "pink";
let number = prompt("what size canvas do you want?");
let size = 700 / number + "px";

//creates a canvas made of divs with a nested loop
for (i = 0; i < number; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: inline-block; width: 1px; height: 1px; background: white;");
    row.classList.add("div");
    container.appendChild(row)
    for (j = 0; j < number; j++) {
        let column = document.createElement("div");
        column.setAttribute("style", "display: block; width: 1px; height: 1px; background: white;");
        column.classList.add("div");
        row.appendChild(column);
    }
}


//rezises canvas and makes the divs black when selected
const divs = document.querySelectorAll(".div");
divs.forEach((div) => {
    div.style.width = size;
    div.style.height = size;
    div.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    })
})

//create reset-button
const button = document.createElement("button");
button.textContent = "Reset Canvas";
container.insertBefore(button, container.childNodes[0]);

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let sz = prompt("what size canvas do you want?")
    number = sz;
    console.log(number);
    let divs = document.querySelectorAll(".div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })

})

