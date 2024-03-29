var container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
}

const header = document.querySelector("#header");
header.textContent = "etch-a-sketch!"

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
        cell.addEventListener("mouseover", () =>{
                cell.style.backgroundColor = "black";
        });
})