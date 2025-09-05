const container = document.querySelector<HTMLElement>(".container");
if(container){
    container.style.display = "flex"
    container.style.flexDirection = "column";
}

function createSquareBox(){
    let grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "2px solid";
    grid.style.padding = "10px"; 
    grid.textContent = "1";
    return grid;
}

function createRowGrid(){
    let rowGrid = document.createElement("div");
    rowGrid.style.display = "flex"
    rowGrid.style.flexDirection ="row";
    rowGrid.className = "rowGrid";
    return rowGrid;
}


function createGrid(row:number, column:number){
    let gridArray:HTMLDivElement[][] = [];
    let gridRowArray:HTMLDivElement[] = [];
    if(container){
    for(let i = 0;i<row;i++){

        let gridRow:HTMLDivElement = createRowGrid();
        let gridRow_iter:HTMLDivElement[] = [];
    
        for(let j = 0;j<column;j++){
            let gridBox = createSquareBox();
            gridRow.appendChild(gridBox);
            gridRow_iter.push(gridBox);
        }
        container.appendChild(gridRow);
        gridArray.push(gridRow_iter);
        gridRowArray.push(gridRow);
    }
    }
    else{
        //do nothing
    }
    
    return gridArray;
}

createGrid(16,16);