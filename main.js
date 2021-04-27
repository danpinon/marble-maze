let cols, rows;
const w = 80;
const grid =[]

let current;
let next;
const stack = []
const path = []



//canvas setup p5 easy
function setup(){
    createCanvas(800, 800);
    cols = floor(width/w);
    rows = floor(height/w);
    // frameRate(5)

    for(let j = 0; j < rows; j++){
        for(let i = 0; i < cols; i++){
            let cell = new Cell(i,j);
            grid.push(cell)
        }
    }

    current = grid[0]; //inicial cell set to visited true
    // marble1
    // prince
}

//thing related with drawing
function draw(){
    clear()
    background(51);
    for (let i = 0; i < grid.length; i++){
        grid[i].show();
    }
    current.visited = true;
    current.highlight()
    // centerBox() //center box drawing
    next = current.checkNeighbors()
    nextCell()
    // handleMarble()
    handlePrince()
    
}

function nextCell(){
    if(next){
        // step 1
        next.visited = true;
        // step 2
        stack.push(current)
        // step3
        removeWalls(current, next)
        // step 4
        current = next;

        path.push(current)
        
    } else if(stack.length > 0){

        current = stack.pop()

    }
}

function removeWalls(cellA, cellB) {
    if(cellB != undefined){

        let x = cellA.i - cellB.i;

        if( x === 1){
            cellA.walls[3] = false
            cellB.walls[1] = false
        }else if( x === -1){
            cellA.walls[1] = false
            cellB.walls[3] = false
        }

        let y = cellA.j - cellB.j

        if( y === 1){
            cellA.walls[0] = false
            cellB.walls[2] = false
        }else if( y === -1){
            cellA.walls[2] = false
            cellB.walls[0] = false
        }
    }
    
}
/* 
    index function for selecting
    things in a plane array like 
    if it was a two dimensional
    array (formula vvv)
*/

function index(i, j){ //the index function formula
    if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
        return -1  
    }
    return i + j * cols
}

function centerBox(){
    let centerBox = [grid[44], grid[45], grid[54], grid[55]]
    grid[44].visited = true
    grid[45].visited = true
    grid[54].visited = true
    grid[55].visited = true

    grid[43].walls[1] = false

    grid[44].walls[1] = false
    grid[44].walls[2] = false
    grid[44].walls[3] = false

    grid[45].walls[2] = false
    grid[45].walls[3] = false

    grid[54].walls[0] = false
    grid[54].walls[1] = false
    
    grid[55].walls[0] = false
    grid[55].walls[1] = false
    grid[55].walls[3] = false
    
    grid[56].walls[3] = false

    centerBox.forEach(cell => cell.centerColor())
}


