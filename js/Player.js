var x = 600;
var z = 250;
var width = 100;
var hight = 100;

var WalkSpeed = 20;
var RunSpeed = 20;
var speed = WalkSpeed;
var Direction = "front";
var AnimationFrame = "idle.png";

var player = document.getElementById("player");

var UP = false;
var canUP = true;
var DOWN = false;
var canDOWN = true;
var RIGHT = false;
var canRIGHT = true;
var LEFT = false;
var canLEFT = true;

var RUN = false;

var canInteract = true;

var oldX;
var oldZ;
setInterval(function() {
    if (Region(1300, 2000, -1000, 2000)) {
        x = oldX;
        z = oldZ;
    }
    else if (Region(-100, -40, -1000, 2000)) {
        x = oldX;
        z = oldZ;
    }
    else if (Region(-1000, 2000, -1000, -40)) {
        x = oldX;
        z = oldZ;
    }
    else if (Region(-1000, 2000, 575, 1000)) {
        x = oldX;
        z = oldZ;
    }
    else {
        oldX = x;
        oldZ = z;

        if (UP && canUP) {
            z -= speed;
        }
        if (DOWN && canDOWN) {
            z += speed;
        }
        if (RIGHT && canRIGHT) {
            x += speed;
        }
        if (LEFT && canLEFT) {
            x -= speed;
        }
        updatePlayer();
    }
}, 100)

document.addEventListener('keypress', function(event) {
    console.log(event.key);
    if(event.key == "w") {
        UP = true;
    }
    if(event.key == "s") {
        DOWN = true;
    }
    if(event.key == "d") {
        RIGHT = true;
    }
    if(event.key == "a") {
        LEFT = true;
    }

    /*if (event.key == "e") {
        if (Region())
    }*/
});

document.addEventListener('keyup', function(event) {
    if  (event.key == "w") {
        UP = false;
    }
    if  (event.key == "s") {
        DOWN = false;
    }
    if  (event.key == "d") {
        RIGHT = false;
    }
    if  (event.key == "a") {
        LEFT = false;
    }
});

function updatePlayer() {
    player.style.left = x + "px";
    player.style.top = z + "px";
    player.style.backgroundSize = "100%"
    player.style.backgroundColor = "transparent"
}

setInterval(function() {
    changePlayerTexture();
}, 100)

function changePlayerTexture() {
    if (UP) {
        Direction = "back";
        AnimationFrame = "walk.gif";
    } else if (DOWN) {
        Direction = "front";
        AnimationFrame = "walk.gif";
    } else if (RIGHT) {
        Direction = "right";
        AnimationFrame = "walk.gif";
    } else if (LEFT) {
        Direction = "left";
        AnimationFrame = "walk.gif";
    } else if (!UP || !DOWN || !RIGHT || !LEFT) {
        Direction = "front";
        AnimationFrame = "idle.png";
    }

    player.style.background = "url('textures/player_front_idle.png')"
}