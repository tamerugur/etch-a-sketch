var MAX_WIDTH = 800;
var MAX_HEIGHT = 800;

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


// cells.forEach(cell => {
//         cell.addEventListener("mouseleave", () =>{
//                 cell.style.backgroundColor = "#834eab";
//         });
// })

button.addEventListener("mouseenter", () =>{
        button.style.backgroundColor = "#bc97db";
});

button.addEventListener("mousedown", () =>{
        button.style.background = "#5b3474";
        var grid = prompt("Enter the amount of grid. (e.g for 64x64 grid, type 64)");
        setUpNewGrid(grid);
});


button.addEventListener("mouseup", () =>{
        button.style.background = "#9f6dc8";
})

button.addEventListener("mouseleave", () =>{
        button.style.backgroundColor = "#9f6dc8";
});

function setUpNewGrid(grid) {
        if(grid > 100){
                grid = prompt("grid cannot be bigger than 100x100. please enter again.");
                setUpNewGrid(grid);
        }

        const cells = document.querySelectorAll(".cell");
        
        cells.forEach(cell => {
                cell.remove();
        })
        cells.forEach(cell => {
                cell.classList.remove();
        })

        for (let i = 0; i < grid*grid; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.style.width = MAX_WIDTH / grid + "px";
                cell.style.height = MAX_HEIGHT / grid + "px";
                grids.appendChild(cell);
        
                cell.addEventListener("mouseenter", () => {
                    cell.style.backgroundColor = "black";
                });

}
}

setUpNewGrid(16);