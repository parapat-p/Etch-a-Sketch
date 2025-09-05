var container = document.querySelector(".container");
var body = document.querySelector("body");
var createButton = document.createElement("button");
createButton.textContent = "Create new grid";
createButton.addEventListener("click", function () {
    var gridSize = prompt("Please enter grid size");
    if (!gridSize) {
        return;
    }
    if (!container) {
        return;
    }
    gridSize = Number(gridSize);
    container.replaceChildren();
    if (gridSize > 100) {
        gridSize = 100;
    }
    createGrid(gridSize, gridSize);
});
if (container && body) {
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
else {
    //Do nothing
}
function createSquareBox() {
    var grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "1px solid";
    grid.style.boxSizing = "border-box";
    grid.style.display = "flex";
    grid.style.flex = "1";
    //Event
    grid.addEventListener("mouseenter", function () {
        grid.style.backgroundColor = "black";
    });
    grid.addEventListener("mouseleave", function () {
        grid.style.backgroundColor = "white";
    });
    return grid;
}
function createRowGrid() {
    var rowGrid = document.createElement("div");
    rowGrid.style.display = "flex";
    rowGrid.style.flexDirection = "row";
    rowGrid.className = "rowGrid";
    rowGrid.style.flex = "1";
    return rowGrid;
}
function createGrid(row, column) {
    var gridArray = [];
    if (container) {
        for (var i = 0; i < row; i++) {
            var Row = createRowGrid();
            var gridRow = [];
            for (var j = 0; j < column; j++) {
                var grid = createSquareBox();
                Row.appendChild(grid);
                gridRow.push(grid);
            }
            container.appendChild(Row);
            gridArray.push(gridRow);
        }
    }
    else {
        //do nothing
    }
    return gridArray;
}
