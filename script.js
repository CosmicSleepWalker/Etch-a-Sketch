let grid = prompt("Enter the grid size (max 100): ");
while(grid > 100){
    grid = prompt("Enter the grid size (max 100): ");
}
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const createGrid = () => {

    if(document.querySelector("button") === null){
        const button = document.createElement("button");
        button.textContent = "generate new grid";
        button.id = "btn";
        header.appendChild(button);
    }

    for(let i = 0; i < grid; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < grid; j++){
            const item = document.createElement("div");
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor  = "aqua";
            })
            item.classList.add("item");
            row.appendChild(item);
        }

    }
}

createGrid();


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    grid = prompt("Enter the grid size (max 100): ");
    while(grid > 100){
        grid = prompt("Enter the grid size (max 100): ");
    }
    if(grid < 101) {
        const rowElements = container.querySelectorAll(".row");
        rowElements.forEach(item => {
            item.remove();
        })
        createGrid();
    }

    
})


