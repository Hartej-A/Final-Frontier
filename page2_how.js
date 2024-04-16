class How{
    constructor(){
        directions=createSprite(windowWidth/2,windowHeight*2/5);
        directions.addImage(directionsI);
        directions.scale=windowWidth/2100;

        back=createSprite(windowWidth*1/16,windowHeight*9/10);
        back.addImage(backI);
        back.scale=windowWidth/8000;
        back.setCollider("circle", 0, 0, windowWidth/3);
    }
    display(){
        directions.visible=true;
        back.visible=true;

        background(0,0,0);

        //buttons
        back.scale=windowWidth/8000;
        if(mouse.isTouching(back)){
            cursor("all-scroll");
            back.scale=windowWidth/6000;
            if(mouseIsPressed){
                screen="home";
            }
        }
    }

    hide(){
        directions.visible=false;
        back.visible=false;
    }
}