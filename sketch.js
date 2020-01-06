
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.style.backgroundColor = "pink";

//creates grid of divs with a nested loop
for (i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: inline-block; width: 10px; height: 10px; background: white;");
    row.classList.add("div");
    container.appendChild(row)
    for (j = 0; j < 16; j++) {
        let column = document.createElement("div");
        column.setAttribute("style", "display: block; width: 10px; height: 10px; background: white;");
        column.classList.add("div");
        row.appendChild(column);
    }
}

//makes the divs black when selected
const divs = document.querySelectorAll(".div");
divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    })
})

//create reset-button
const button = document.createElement("button");
button.textContent = "Reset Canvas";
container.appendChild(button);

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let divs = document.querySelectorAll(".div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
})



