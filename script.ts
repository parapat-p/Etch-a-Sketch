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
    createGrid(gridSize,gridSize);
})

if(container && body){
    //container
    container.style.display = "flex"
    container.style.flexDirection = "column";
    //body
    body.prepend(createButton);
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.flexDirection = "column";
}
else{
    //Do nothing
}




function createSquareBox():HTMLDivElement{
    let grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "2px solid";
    grid.style.padding = "10px"; 
    grid.style.display = "flex";
    grid.style.flex = "1";

    //Event
    grid.addEventListener("mouseenter",() => {
        grid.style.backgroundColor = "black";
    })
    grid.addEventListener("mouseleave",() => {
        grid.style.backgroundColor = "white";
    })

    return grid;
}

function createRowGrid() :HTMLDivElement{
    let rowGrid = document.createElement("div");
    rowGrid.style.display = "flex"
    rowGrid.style.flexDirection ="row";
    rowGrid.className = "rowGrid";
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
