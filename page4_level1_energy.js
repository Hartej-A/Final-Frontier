class Energy1{
    constructor(){
        miniBBack=createSprite(windowWidth/2,windowHeight/2);
        miniBBack.addImage(miniBackI);
        miniBBack.scale=windowWidth/500;

        lever=createSprite(windowWidth*2/9,windowHeight*4.5/6);
        lever.addImage(leverDownI);
        lever.scale=windowWidth/7000;
        lever.setCollider("rectangle", 0, 0, windowWidth/1.75, windowHeight/0.8);

        button=createSprite(windowWidth*4/9,windowHeight*4.5/6);
        button.addImage(buttonI);
        button.scale=windowWidth/7000;
        button.setCollider("circle", 0, 0, windowWidth/3.5);

        energyScreen=createSprite(windowWidth*6/9,windowHeight*4.5/6);
        energyScreen.addImage(energyScreenI2);
        energyScreen.scale=windowWidth/6000;

        panel=createSprite(windowWidth*7/9,windowHeight*4.5/6);
        panel.addImage(panelI);
        panel.scale=windowWidth/7000;
        panel.setCollider("rectangle", 0, 0, windowWidth/5, windowHeight/1.6);

        knob=createSprite(windowWidth*7/9,windowHeight*4.5/6);
        knob.addImage(knobI);
        knob.scale=windowWidth/20000;
        knob.setCollider("circle", 0, 0, windowWidth/3);

        //game screen
        windowN=createSprite(windowWidth*1/2,windowHeight*2/7);
        windowN.addImage(windowOffI);
        windowN.scale=windowWidth/4000;

        laser=createSprite(windowWidth*1/2,windowHeight*2/7);
        laser.addAnimation("laser", laser1I);
        laser.scale=windowWidth/4000;

        heat=createSprite(windowWidth*1/2,windowHeight*2/7);
        heat.addImage(heat1I);
        heat.scale=windowWidth/4000;

        crystalMine=createSprite(windowWidth*1/2,windowHeight*2/7);
        crystalMine.addImage(crystalMineI);
        crystalMine.scale=windowWidth/4000;


        lowMaterialWarn=createSprite(windowWidth*17/20,windowHeight*1/3);
        lowMaterialWarn.addImage(lowMaterialWarnI);
        lowMaterialWarn.scale=windowWidth/6000;
    }
    display(){
        if(done==0){
            lowMaterialWarn.visible=false;
            crystalMine.visible=false;
            miniBBack.visible=true;
            button.visible=true;
            panel.visible=true;
            knob.visible=true;
            energyScreen.visible=true;
            windowN.visible=true;
            heat.visible=true;
            laser.visible=true;
            lever.visible=true;

            lever.addImage(leverDownI);
            leverTrack=1;
            mining=50;
        }
        done++;

        //buttons
        if(leverTrack==0){
            done=0;
            screen="level1";
        }
        if(mouse.isTouching(lever)){
            cursor("grab");
            if(mouseIsPressed && clickProtect<0){
                if(leverTrack==1){
                    lever.addImage(leverUpI);
                    windowN.addImage(windowOnI);
                }
                else if(leverTrack==2){
                    lever.addImage(leverDownI);
                    windowN.addImage(windowOffI);
                    leverTrack=-1;
                }
                leverTrack++;
                clickProtect=20;
            }
        }

        if(mouse.isTouching(knob)){
            cursor("grab");
            if(mouseIsPressed && knob.isTouching(panel)){
                knob.y=mouseY;
            }
        }
        if(!knob.isTouching(panel)){
            if(knob.y<panel.y)
            {
                knob.y+=10;
            }
            if(knob.y>panel.y)
            {
                knob.y-=10;
            }
        }
        if(knob.y>panel.y-windowHeight/30 && knob.y<panel.y+windowHeight/30){
            laserLevel=2;
        }
        else if(knob.y>panel.y+windowHeight/30){
            laserLevel=1;
        }
        else if(knob.y<panel.y-windowHeight/30){
            laserLevel=3;
        }

        if(mouse.isTouching(button)){
            cursor("grab");
            if(mouseIsPressed && clickProtect<0 && crystalMine.visible==false && supplies>=10){
                clickProtect=20;
                crystalMine.visible=true;
                mining=150;
            }
        }
        if(mining<0 && crystalMine.visible==true){
            power+=8;
            supplies-=10;
            crystalMine.visible=false;
        }
       

        //heat
        if(leverTrack==1 || (laserLevel==1 && heatLevel>0)){
            heatLevel--;
            energyScreen.addImage(energyScreenI1);
            laser.visible=false;
        }
        else if(laserLevel==2){
            heatLevel++;
            energyScreen.addImage(energyScreenI2);
            laser.visible=true;
            laser.addAnimation("lasers", laser1I);
            mining-=1;
        }
        else if(laserLevel==3){
            heatLevel+=3;
            energyScreen.addImage(energyScreenI3);
            laser.visible=true;
            laser.addAnimation("biglaser", laser2I);
            mining-=2;
        }

        if(heatLevel>1200){
            population-=floor(random(population*5/6, population-1));
            notification="nuclear";
            done=0;
            screen="level1";
        }
        else if(heatLevel>900){
            heat.addImage(heat4I);
        }
        else if(heatLevel>600){
            heat.addImage(heat3I);
        }
        else if(heatLevel>300){
            heat.addImage(heat2I);
        }
        else {
            heat.addImage(heat1I);
        }

        //warning
        if(supplies<20){
            lowMaterialWarn.visible=true;
        }

    }

    hide(){
        lowMaterialWarn.visible=false;
        crystalMine.visible=false;
        miniBBack.visible=false;
        button.visible=false;
        panel.visible=false;
        knob.visible=false;
        energyScreen.visible=false;
        windowN.visible=false;
        heat.visible=false;
        laser.visible=false;
        lever.visible=false;

    }
}