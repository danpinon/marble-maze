class Cell {
    constructor(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];//top, right, bottom, left walls
    this.visited = false;
    this.x = this.i * w;
    this.y = this.j * w;
    }
    show() {
        
        const x1 = this.x
        const x2 = this.x + w
        const y1 = this.y
        const y2 = this.y + w
        stroke(240);
        strokeWeight(3)
        if(this.walls[0]){
            line(x1, y1, x2, y1) //top line
        }
        if(this.walls[1]){
            line(x2, y1, x2, y2) //right line
        }
        if(this.walls[2]){
            line(x2, y2, x1, y2) //bottom line
        }
        if(this.walls[3]){
            line(x1 , y2, x1, y1) //left line
        }

        if(this.visited) {
            noStroke()
            fill(255, 0, 255, 100)
            rect(this.x, this.y, w, w);
        }
        // noFill();
        
    }
    
    checkNeighbors(){
        const neighbors = [];
        // console.log(neighbors)
        //declaration of the neighbors of the current cell 
        const top    = grid[index(this.i,     this.j - 1)]
        const right  = grid[index(this.i + 1, this.j)]
        const bottom = grid[index(this.i,     this.j + 1)]
        const left   = grid[index(this.i - 1, this.j)]

        //if it is a real thing and visited is false push the neightbor
        if(top    && !top.visited)    { neighbors.push(top) }
        if(right  && !right.visited)  { neighbors.push(right) }
        if(bottom && !bottom.visited) { neighbors.push(bottom) }
        if(left   && !left.visited)   { neighbors.push(left) }

        if(neighbors.length > 0) {
            let rand = floor(random(0, neighbors.length));
            return neighbors[rand];
        } else { 
            return undefined ;
        }
    }

    highlight(){
        noStroke()
        fill(0, 0, 255, 100)
        rect(this.x, this.y, w, w)
    }
    centerColor(){
        noStroke()
        fill(255, 0, 0, 100)
        rect(this.x, this.y, w, w)
        
    }
}

