const container = document.querySelector("#container");
const button = document.querySelector("button");
const header = document.createElement("div");
const grids = document.createElement("div");


button.textContent = "change number of grids";
header.textContent = "etch-a-sketch!"

header.classList.add("header");
grids.classList.add("grids");
button.classList.add("but");

container.appendChild(header);
container.appendChild(grids);

for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.style.width = "50px"
        cell.style.height = "50px"
        cell.classList.add("cell");
        grids.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
        cell.addEventListener("mouseenter", () =>{
                cell.style.backgroundColor = "black";
        });
})

cells.forEach(cell => {
        cell.addEventListener("mouseleave", () =>{
                cell.style.backgroundColor = "#834eab";
        });
})

button.addEventListener("mouseenter", () =>{
        button.style.backgroundColor = "#bc97db";
});
button.addEventListener("mouseleave", () =>{
        button.style.backgroundColor = "#9f6dc8";
});

function setUpGrid() {

}