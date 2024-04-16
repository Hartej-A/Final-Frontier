class LevelSelect{
    constructor(){
        levelSelectBack=createSprite(windowWidth/2,windowHeight/2);
        levelSelectBack.addImage(levelSelectBackI);
        levelSelectBack.scale=windowWidth/1200;

        disclaimer=createSprite(windowWidth/2,windowHeight);
        disclaimer.addImage(disclaimerI);
        disclaimer.scale=windowWidth/12000;
        disclaimer.setCollider("rectangle", 0, 0, windowWidth/1.1, windowHeight);

        starA=createSprite(-windowWidth*9/22, windowHeight*4/41);
        starA.addImage(starAI);
        starA.rotation=-120;
        starA.scale=windowWidth/3900;
        starA.setCollider("circle", 0, 0, windowWidth/3.1);

        starB=createSprite(-windowWidth*9/22, windowHeight*13/20);
        starB.addImage(starBI);
        starB.scale=windowWidth/4900;
        starB.setCollider("circle", 0, 0, windowWidth/3.1);

        planetb=createSprite(-windowWidth*2/11, windowHeight*13/20);
        planetb.addImage(planetbI);
        planetb.scale=windowWidth/9000;
        planetb.setCollider("circle", 0, 0, windowWidth/3.1);

        planetd=createSprite(windowWidth*1/30, windowHeight*1/2);
        planetd.addImage(planetdI);
        planetd.scale=windowWidth/6000;
        planetd.setCollider("circle", 0, 0, windowWidth/3.1);

        moond=createSprite(windowWidth*3.5/30, windowHeight*7.5/20);
        moond.addImage(moondI);
        moond.scale=windowWidth/60000;
        moond.setCollider("circle", 0, 0, windowWidth/3.1);

        planetc=createSprite(windowWidth*3/10, windowHeight*1/2);
        planetc.addImage(planetcI);
        planetc.scale=windowWidth/7000;
        planetc.setCollider("circle", 0, 0, windowWidth/3.1);

        planete=createSprite(windowWidth*11/20, windowHeight*1/2);
        planete.addImage(planeteI);
        planete.scale=windowWidth/8000;
        planete.setCollider("circle", 0, 0, windowWidth/3.1);
        
        planetf=createSprite(windowWidth*8/10, windowHeight*1/2);
        planetf.addImage(planetfI);
        planetf.scale=windowWidth/7000;
        planetf.setCollider("circle", 0, 0, windowWidth/3.1);
        
        planetg=createSprite(windowWidth*11/10, windowHeight*1/2);
        planetg.addImage(planetgI);
        planetg.scale=windowWidth/7000;
        planetg.setCollider("circle", 0, 0, windowWidth/3.1);
        
        information=createSprite(windowWidth*10/12, windowHeight*1/2);
        information.addImage(informationI);
        information.scale=windowWidth/2800;
    }
    display(){
        levelSelectBack.visible=true;
        disclaimer.visible=true;
        starA.visible=true;
        starB.visible=true;
        planetb.visible=true;
        planetc.visible=true;
        planetd.visible=true;
        moond.visible=true;
        planete.visible=true;
        planetf.visible=true;
        planetg.visible=true;
        information.visible=true;


        background(0,0,0);
        
        translate(translateX, 0);
        
        //scrollng
        if(mouseX>windowWidth*11/12 && translateX>-windowWidth/1.75){
            translateX-=2;
            mouseTranslate+=2;
            information.x+=2;
            disclaimer.x+=2;
            levelSelectBack.x+=1.8;
        }
        if(mouseX<windowWidth*1/12 && translateX<windowWidth/1.75){
            translateX+=2;
            mouseTranslate-=2;
            information.x-=2;
            disclaimer.x-=2;
            levelSelectBack.x-=1.8;
        }

        //hovering
        if(mouse.isTouching(information)){
            information.addImage(informationI);
            cursor("default");
        }
        else if(mouse.isTouching(disclaimer)){
            cursor("help");
            information.addImage(information_notToScale);
        }
        else if(mouse.isTouching(starA)){
            cursor("not-allowed");
            information.addImage(information_starA);
        }
        else if(mouse.isTouching(starB)){
            cursor("not-allowed");
            information.addImage(information_starB);
        }
        else if(mouse.isTouching(planetb)){
            cursor("cell");
            information.addImage(information_planetb);
            if(mouseIsPressed){
                translateX=0;
                mouseTranslate=0;
                screen="level1";
            }
        }
        else if(mouse.isTouching(planetd)){
            cursor("not-allowed");
            information.addImage(information_planetd);
        }
        else if(mouse.isTouching(moond)){
            cursor("progress");
            information.addImage(information_moond);
        }
        else if(mouse.isTouching(planetc)){
            cursor("progress");
            information.addImage(information_planetc);
        }
        else if(mouse.isTouching(planete)){
            cursor("progress");
            information.addImage(information_notConfirmed);
        }
        else if(mouse.isTouching(planetf)){
            cursor("progress");
            information.addImage(information_notConfirmed);
        }
        else if(mouse.isTouching(planetg)){
            cursor("progress");
            information.addImage(information_notConfirmed);
        }
        else{
            information.addImage(informationI);
            cursor("default");
        }
    }

    hide(){
        levelSelectBack.visible=false;
        disclaimer.visible=false;
        starA.visible=false;
        starB.visible=false;
        planetb.visible=false;
        planetc.visible=false;
        planetd.visible=false;
        moond.visible=false;
        planete.visible=false;
        planetf.visible=false;
        planetg.visible=false;
        information.visible=false;
    }
}