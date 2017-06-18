// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = this.random(0,5)*101;
    this.y = (this.random(1,4)*83)-23;
    this.speed = Math.floor((Math.random() * 6) + 2)*80;
};

Enemy.prototype.random = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if(this.x > 500){
        this.x = -80;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.loc = function() {
    return Math.floor(Math.random() * 5);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.width = 101;
    this.height = 83;
    this.sprite = 'images/char-boy.png';
    this.x = 2*this.width;
    this.y = (5*this.height)-43;
    // this.speed = 100;
}

Player.prototype.update = function(dt){
    // this.speed *= dt;
};

Player.prototype.handleInput = function(e){
    this.e = e;
    // console.log(this.x/101, Math.round(this.y/83));
    if(this.x == 0){
        console.log(0);
    }

    if(this.e == 'left'){
        if(this.x/101 !== 0){
            this.x -= this.width;
        }
    }
    else if(this.e == 'up'){
        if(Math.round(this.y/83) == 0){
            this.y = (6*this.height)-43;
            this.x = 2*this.width;
        }
        this.y -= this.height;
    }
    else if(this.e == 'right'){
        if(this.x/101 !== 4){
            this.x += this.width;
        }
    }
    else if(this.e == 'down'){
        if(Math.round(this.y/83) !== 4){
            this.y += this.height;
        }
    }
    else{
        return false;
    }
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});