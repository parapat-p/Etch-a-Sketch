var container = document.querySelector(".container");
if (container) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
}
else {
    //Do nothing
}
function createSquareBox() {
    var grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "2px solid";
    grid.style.padding = "10px";
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
var gridArray = createGrid(100, 100);
