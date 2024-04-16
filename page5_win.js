class Win{
    constructor(){
        gameWon=createSprite(windowWidth/2,windowHeight/2);
        gameWon.addImage(winI);
        gameWon.scale=windowWidth/1900;
    }
    display(){
        gameWon.visible=true;
        
    }

    hide(){
        gameWon.visible=false;
    }
}