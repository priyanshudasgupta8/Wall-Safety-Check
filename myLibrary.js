// Personal library
// Collision detection function
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){
            return true;
    }
    else {
            return false;
    } 
}

// Function for detection of previous collisions due to high speeds of objects
function hasCollided(Lbullet,Lwall) {
    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;

    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    }
    else {
        return false;
    }
}