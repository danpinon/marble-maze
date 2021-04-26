class Marble {
    constructor(x, y, width, height){
        this.x = (x * w )+ w/2
        this.y = (y * w) + w/2
        this.posX = 
        this.posY = 
        this.width = width
        this.height = height
        this.v = 0
        this.weight = 1
    }

    style(){
        fill(0, 255, 0)
        stroke(51)
        ellipse(this.x, this.y, w/2, w/2)
    }

    physics(){
        this.v += this.weight;
        this.y += this.v
    }
    limits(){
        if(this.y > height - this.height){
            this.y = height - this.height
            this.v = 0
        }
    }
}

const marble1 = new Marble(0, 0, 10,10)


function collitions(){
    for(i = 0; i < grid.length; i++){

    }
}


