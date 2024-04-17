class Mine1{
    constructor(){
        miniBack=createSprite(windowWidth/2,windowHeight/2);
        miniBack.addImage(miniBackI);
        miniBack.scale=windowWidth/500;

        drill=createSprite(windowWidth/2,windowHeight/16);
        drill.addAnimation("drilling", drillI);
        drill.scale=windowWidth/7500;
        drill.setCollider("rectangle", 0, 0, windowWidth/1.8 , windowHeight/0.8);


        crystal=createSprite(windowWidth/2,windowHeight/16);
        crystal.addImage(crystalI);
        crystal.scale=windowWidth/8000;
        crystal.setCollider("rectangle", 0, 0, windowWidth/1.8 , windowHeight/0.9);


        shadow2=createSprite(windowWidth/2,windowHeight/16);
        shadow2.addImage(hideI);
        shadow2.scale=windowWidth/1000;
        
        shadow=createSprite(windowWidth/2,windowHeight/16);
        shadow.addImage(hideI);
        shadow.scale=windowWidth/1500;
    }
    display(){
        if(done==0){
            drill.x=windowWidth/2;
            drill.y=windowHeight/16;
            crystal.x=windowWidth/2;
            crystal.y=windowHeight*1.5/16;
        }
        done++;

        miniBack.visible=true;
        drill.visible=true;
        shadow.visible=true;
        shadow2.visible=true;
        crystal.visible=true;

        shadow.x=drill.x;
        shadow.y=drill.y;
        shadow2.x=drill.x;
        shadow2.y=drill.y;

        if(keyDown("left") && drill.x>windowWidth*1/20){
            drill.x-=6;
        }
        else if(keyDown("right") && drill.x<windowWidth*19/20){
            drill.x+=6;
        }
        if(keyDown("down") && drill.y<windowHeight*19/20){
            drill.y+=1;
        }
        drill.y+=1;

        if(drill.y>crystal.y || drill.isTouching(crystal)){
            supplies+=2;
            crystal.x=random(windowWidth/100, windowWidth*99/100);
            crystal.y=random(drill.y , drill.y+windowHeight/4);
        }

        if(drill.y>windowHeight){
            done=0;
            screen="level1";
        }

    }

    hide(){
        miniBack.visible=false;
        drill.visible=false;
        shadow.visible=false;
        shadow2.visible=false;
        crystal.visible=false;

    }
}
