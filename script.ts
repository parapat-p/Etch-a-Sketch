const container = document.querySelector<HTMLElement>(".container");
const body = document.querySelector<HTMLElement>("body");


const createButton = document.createElement("button");
createButton.textContent = "Create new grid"
createButton.addEventListener("click",() => {
    let gridSize:any = prompt("Please enter grid size");
    if(!gridSize){return;}
    if(!container){return;}
    gridSize = Number(gridSize);
    container.replaceChildren();
    if(gridSize>100){
        gridSize = 100;
    }
    createGrid(gridSize,gridSize);
})

if(container && body){
    //container
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.width = "1920px";
    container.style.height = "1020px";
    //body
    body.prepend(createButton);
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";
}
else{
    //Do nothing
}

let bgColor = "";

function randomColor(){
    let r:number = Math.floor(Math.random() * 256);
    let g:number = Math.floor(Math.random() * 256);
    let b:number = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function createSquareBox():HTMLDivElement{
    let grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "1px solid";
    grid.style.boxSizing = "border-box";
    grid.style.display = "flex";
    grid.style.flex = "1";
    grid.style.opacity = "0.1";
    grid.style.backgroundColor = "white";
    //Event
    grid.addEventListener("mouseenter",() => {
        let gridOpacity = Number(grid.style.opacity);
        gridOpacity += 0.1;
        grid.style.opacity = String(gridOpacity);
        if(grid.style.backgroundColor === "white"){
            grid.style.backgroundColor = randomColor();
        }
    })
    // grid.addEventListener("mouseleave",() => {
    //     grid.style.backgroundColor = "white";
    // })

    return grid;
}

function createRowGrid() :HTMLDivElement{
    let rowGrid = document.createElement("div");
    rowGrid.style.display = "flex"
    rowGrid.style.flexDirection ="row";
    rowGrid.className = "rowGrid";
    rowGrid.style.flex = "1";
    return rowGrid;
}


function createGrid(row:number, column:number) :HTMLDivElement[][] {
    let gridArray:HTMLDivElement[][] = [];
    if(container){
    for(let i = 0;i<row;i++){

        let Row:HTMLDivElement = createRowGrid();
        let gridRow:HTMLDivElement[] = [];
    
        for(let j = 0;j<column;j++){
            let grid = createSquareBox();
            Row.appendChild(grid);
            gridRow.push(grid);
        }
        container.appendChild(Row);
        gridArray.push(gridRow);
    }
    }
    else{
        //do nothing
    }
    
    return gridArray;
}

