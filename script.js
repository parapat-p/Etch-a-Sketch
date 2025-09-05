var container = document.querySelector(".container");
if (container) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
}
function createSquareBox() {
    var grid = document.createElement("div");
    grid.className = "squareBox";
    grid.style.border = "2px solid";
    grid.style.padding = "10px";
    grid.textContent = "1";
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
    var gridRowArray = [];
    if (container) {
        for (var i = 0; i < row; i++) {
            var gridRow = createRowGrid();
            var gridRow_iter = [];
            for (var j = 0; j < column; j++) {
                var gridBox = createSquareBox();
                gridRow.appendChild(gridBox);
                gridRow_iter.push(gridBox);
            }
            container.appendChild(gridRow);
            gridArray.push(gridRow_iter);
            gridRowArray.push(gridRow);
        }
    }
    else {
        //do nothing
    }
    return gridArray;
}
createGrid(16, 16);
