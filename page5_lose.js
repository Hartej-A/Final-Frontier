class Lose{
    constructor(){
        gameLost=createSprite(windowWidth/2,windowHeight/2);
        gameLost.addAnimation("glitch", loseI);
        gameLost.scale=windowWidth/1900;
    }
    display(){
        gameLost.visible=true;
        
    }

    hide(){
        gameLost.visible=false;
    }
}