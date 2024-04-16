class Home{
    constructor(){
        homeBack=createSprite(windowWidth/2,windowHeight/2);
        homeBack.addImage(homeBackI);
        homeBack.scale=windowWidth/1200;

        title=createSprite(windowWidth/2,windowHeight*3/7);
        title.addAnimation("titles", titleI);
        title.scale=windowWidth/3500;

        how=createSprite(windowWidth*1/4,windowHeight*4/5);
        how.addAnimation("button", blueButtonI);
        how.scale=windowWidth/13000;

        play=createSprite(windowWidth*3/4,windowHeight*4/5);
        play.addAnimation("button", redButtonI);
        play.scale=windowWidth/13000;

        howB=createSprite(windowWidth*1/4,windowHeight*4/5);
        howB.addImage(howI);
        howB.scale=windowWidth/13000;
        howB.setCollider("circle", 0, 0, windowWidth/3);

        playB=createSprite(windowWidth*3/4,windowHeight*4/5);
        playB.addImage(playI);
        playB.scale=windowWidth/13000;
        playB.setCollider("circle", 0, 0, windowWidth/3);
    }
    display(){
        title.visible=true;
        homeBack.visible=true;
        how.visible=true;
        howB.visible=true;
        play.visible=true;
        playB.visible=true;

        background(0,0,0);
        
        //buttons
        how.rotation+=25;
        if(mouse.isTouching(howB)){
            cursor("help");
            how.rotation-=25;
            if(mouseIsPressed){
                screen="how";
            }
        }

        play.rotation-=47;
        if(mouse.isTouching(playB)){
            cursor("pointer");
            play.rotation+=2;
            if(mouseIsPressed){
                screen="levelSelect";
            }
        }
    }

    hide(){
        title.visible=false;
        homeBack.visible=false;
        how.visible=false;
        howB.visible=false;
        play.visible=false;
        playB.visible=false;
    }
}