class Marble {
    constructor(x, y, width, height){
        this.x = (x * w )+ w/2
        this.y = (y * w) + w/2
        this.posX = 
        this.posY = 
        this.width = w/2
        this.height = w/2
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
        if(this.y > height - this.height/2){
            this.y = height - this.height/2
            this.v = 0
        }
    }
}

const marble1 = new Marble(0, 0, 20,20)




function handleMarble(){
    marble1.physics()
    marble1.style()
    marble1.limits()
 
}

