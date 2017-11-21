   //@author Adam Kalman
    drawBackground();
    manyBuildings();
    lotsOLamps();
    manyStars();
    makeItRain();

    function drawStar(length) {
        //This function draws a five-point star
        penColor("black");
        turnTo(18);
        penDown();
        for (var i=0; i<5; i++){
            moveForward(length);
            turnRight(144);
        }
        turnTo(0);
        penUp();
    }
    function drawBuilding(height,width) {
        //This function draws a building
        penDown();
        turnTo(0);
        penColor("black");
        moveForward(height);
        turnRight(90);
        moveForward(width);
        turnRight(90);
        moveForward(height);
        turnTo(0);
        penUp();
    }
    function drawBackground() {
        //This function draws the background of the scene
        penRGB(145,249,249);
        penDown();
        dot(1000);
        penUp();
    }
    function rainDrop() {
        penRGB(0,0,255);
        penDown();
        penWidth(randomNumber(1,5));
        turnTo(0);
        moveBackward(randomNumber(1,9));
        penUp();

    }
    function streetLamp() {
        penRGB(143,147,149);
        penDown();
        turnTo(0);
        moveForward(randomNumber(90,180));
        turnRight();
        moveForward(10);
        penColor("yellow");
        dot(5);
        penUp();
    }
    function manyBuildings() {
        moveTo(5,445);
        for (var i=0; i<5; i++){
            drawBuilding(randomNumber(90,300),randomNumber(50,75));
        }
    }
    function lotsOLamps() {
        moveTo(5,445);
        for (var i=0; i<5; i++){
            moveTo(5+(i*randomNumber(40,80)),445);
            streetLamp();
        }
    }
    function manyStars() {
        for(var i=0; i<7; i++){
            moveTo(i+(randomNumber(20,300)),randomNumber(30,60));
            drawStar(randomNumber(10,50));
        }
    }
    function makeItRain() {
        for(var i=0; i<40; i++){
            moveTo(i+(randomNumber(20,300)),randomNumber(30,400));
            rainDrop();
        }
    }
