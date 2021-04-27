class Character{
    constructor(x, y){
        this.x = x * w
        this.y = y * w
        this.v = 10
        this.dx = 0
        this.dy = 0
        this.size = w/1.2
    }

    style(color){
        fill(0, 255, 255)
        rect(this.x, this.y, this.size, this.size)
    }

    newPos(){
        this.x += this.dx
        this.y += this.dy
    }

    moveRight(){
        this.dx = this.v
    }
    moveLeft(){
        this.dx = -this.v
    }
    moveUp(){
        this.dy = -this.v
    }
    moveDown(){
        this.dy = this.v
    }
    limits(){
        if(this.x < 0){
            this.x = 0
    
        }if(this.x + this.size > width){
            this.x = width - this.size
    
        }if(this.y < 0){
            this.y = 0
    
        }if(this.y + this.size > height){
            this.y = height - this.size
        }
    }

    collitions(){
        for(let i = 0; i < path.length; i++){
              
        }
        
    }
}
console.log(grid[0])

const prince = new Character(0, 0)

function keydown(event){
    switch (event.key) {
        case "ArrowRight":
            prince.moveRight()
            break;
        case "ArrowLeft":
            prince.moveLeft()
            break;
        case "ArrowUp":
            prince.moveUp()
            break;
        case "ArrowDown":
            prince.moveDown()
            break;
        default:
            break;
    }
}

function keyup(){
    prince.dx = 0
    prince.dy = 0
}


document.addEventListener("keydown", keydown)
document.addEventListener("keyup", keyup)

function handlePrince(){
    prince.style()
    prince.newPos()
    prince.limits()
    prince.collitions()
}