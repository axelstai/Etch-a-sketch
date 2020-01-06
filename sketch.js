
const container = document.querySelector("#container");



//creates grid of divs with a nested loop
for (i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: inline-block; width: 10px; height: 10px; background: blue;");
    container.appendChild(row)
    for (j = 0; j < 16; j++) {
        let column = document.createElement("div");
        column.setAttribute("style", "display: block; width: 10px; height: 10px; background: blue;");
        row.appendChild(column);
    }
}



