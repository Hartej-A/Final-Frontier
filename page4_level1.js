class Level1{
    constructor(){
        playBack=createSprite(windowWidth/3,windowHeight/2);
        playBack.addImage(planetbBackI);
        playBack.scale=windowWidth/1500;

        nextDayB=createSprite(windowWidth*7/8,windowHeight*6/7);
        nextDayB.addImage(nextDayI);
        nextDayB.scale=windowWidth/9000;
        nextDayB.setCollider("rectangle", 0, 0, windowWidth/1.2, windowHeight/1);
        
        miniGameB=createSprite(windowWidth*1/7,windowHeight*1/5);
        miniGameB.addImage(forageI);
        miniGameB.scale=windowWidth/10000;
        miniGameB.setCollider("rectangle", 0, 0, windowWidth/1.2, windowHeight/1);

        mine=createSprite(windowWidth*9/15,windowHeight*4/5);
        mine.addImage(drillButtonI);
        mine.scale=windowWidth/8000;
        mine.setCollider("rectangle", 0, 0, windowWidth/2, windowHeight/0.85);

        nuclear=createSprite(windowWidth*5/14,windowHeight*2/5);
        nuclear.addImage(nuclearI);
        nuclear.scale=windowWidth/5000;
        nuclear.setCollider("rectangle", 0, 0, windowWidth/1.5, windowHeight/1.75);

        describe=createSprite(windowWidth*21/24, windowHeight*1/2);
        describe.scale=windowWidth/3200;
        
        
        fence1=createSprite(windowWidth*2/9,windowHeight*9/10);
        fence1.addImage(fenceOKI);
        fence1.scale=windowWidth/20000;
        fence1.setCollider("circle", 0, 0, windowWidth/2.75);

        fence2=createSprite(windowWidth*3/9,windowHeight*9/10);
        fence2.addImage(fenceOKI);
        fence2.scale=windowWidth/20000;
        fence2.setCollider("circle", 0, 0, windowWidth/2.75);

        fence3=createSprite(windowWidth*4/9,windowHeight*9/10);
        fence3.addImage(fenceOKI);
        fence3.scale=windowWidth/20000;
        fence3.setCollider("circle", 0, 0, windowWidth/2.75);

        fence4=createSprite(windowWidth*5/9,windowHeight*9/10);
        fence4.addImage(fenceOKI);
        fence4.scale=windowWidth/20000;
        fence4.setCollider("circle", 0, 0, windowWidth/2.75);
        

        alert=createSprite(windowWidth*1/2,windowHeight*3/10);
        alert.visible=false;
        alert.scale=windowWidth/5000;
    
        notify=createSprite(windowWidth*1/2,windowHeight*1/10);
        notify.visible=false;
        notify.scale=windowWidth/5000;
    }

    display(){
        background(0,0,0);

        if(done==0){//} && daysLeft!=365){
            error=""; 
            alert.visible=false;
            notification=""; 
            notify.visible=false;
            daysLeft--;
            supplyDropDays--;
            food-=population;
            power-=powerUsage;
            this.event();
            happen=true;
            clickProtect=30;
        }
        done++;

        playBack.visible=true;
        nextDayB.visible=true;
        miniGameB.visible=true;
        mine.visible=true;
        fence1.visible=true;
        fence2.visible=true;
        fence3.visible=true;
        fence4.visible=true;
        nuclear.visible=true;
        describe.visible=false;

        
        //stats
        noStroke();
        fill(255, 255, 255);
        textSize(windowWidth/30);
        text("Stats: ", windowWidth*5/6, windowHeight*1/8);
        textSize(windowWidth/50);
        text("Days left: " + daysLeft, windowWidth*12/15, windowHeight*2/8);
        text("Supply drop in " + supplyDropDays, windowWidth*12/15, windowHeight*2.5/8);

        if(population<=10){
            fill(255, 0, 0);
            text("Population: " + population, windowWidth*12/15, windowHeight*3/8);
        }
        else{
            fill(255, 255, 255);
            text("Population: " + population, windowWidth*12/15, windowHeight*3/8);
        }
        
        if(food<=population*3 || food<20){
            fill(255, 0, 0);
            text("Meals: " + food, windowWidth*12/15, windowHeight*3.5/8);
        }
        else{
            fill(255, 255, 255);
            text("Meals: " + food, windowWidth*12/15, windowHeight*3.5/8);
        }
        
        if(power<=15){
            fill(255, 0, 0);
            text("Power: " + power, windowWidth*12/15, windowHeight*4/8);
        }
        else{
            fill(255, 255, 255);
            text("Power: " + power, windowWidth*12/15, windowHeight*4/8);
        }
        
        if(supplies<=10){
            fill(255, 0, 0);
            text("Material: " + supplies, windowWidth*12/15, windowHeight*4.5/8);
        }
        else{
            fill(255, 255, 255);
            text("Material: " + supplies, windowWidth*12/15, windowHeight*4.5/8);
        }


        //calculating other stats
        powerUsage=0;
        if(fence1Stat==1)
            powerUsage++;
        if(fence2Stat==1)
            powerUsage++;
        if(fence3Stat==1)
            powerUsage++;
        if(fence4Stat==1)
            powerUsage++;
        //if there is not enough power
        if(powerUsage>power){
            fence1Stat=3;
            fence2Stat=3;
            fence3Stat=3;
            fence4Stat=3;
            //power=0;
        }


        //buttons
        if(mouse.isTouching(miniGameB) && population>5){
            cursor("grab");
            miniGameB.addImage(forageHoverI);
            describe.visible=true;
            describe.addImage(describeForageI);
            
            if(mouseIsPressed && clickProtect<0){
                done=0;
                screen="l1_forage";
            }
        }
        else if(mouse.isTouching(miniGameB) && population<=5)
        {
            cursor("not-allowed");
        }
        else{
            miniGameB.addImage(forageI);
        }

        if(mouse.isTouching(mine) && population>5){
            cursor("grab");
            mine.x=windowWidth*9/15+random(-1, 1);
            mine.y=windowHeight*3/5+random(-1, 1);
            describe.visible=true;
            describe.addImage(describeMineI);

            if(mouseIsPressed && clickProtect<0){
                done=0;
                screen="l1_mine";
            }
        }
        else if(mouse.isTouching(mine) && population<=5)
        {
            cursor("not-allowed");
        }
        else{
            mine.x=windowWidth*9/15;
            mine.y=windowHeight*3/5;
        }

        if(mouse.isTouching(nuclear) && population>15){
            cursor("grab");
            describe.visible=true;
            describe.addImage(describeNuclearI);

            if(mouseIsPressed && clickProtect<0){
                done=0;
                screen="l1_energy";
            }
        }
        else if(mouse.isTouching(nuclear) && population<=15){
            cursor("not-allowed");
        }


        //every day
        if(mouse.isTouching(nextDayB)){
            cursor("vertical-text");
            if(mouseIsPressed && clickProtect<0){//each day...
                error=""; alert.visible=false;
                notification=""; 
                notify.visible=false;
                clickProtect=10;
                daysLeft--;
                supplyDropDays--;
                food-=population;
                power-=powerUsage;
                this.event();
                happen=true;
            }
        }
        if(supplyDropDays<0){
            supplyDropDays=10;
            food+=500;
            power+=24;
            supplies+=10;
            notification="supplyDrop";
        }
        //fences
        if(fence1Stat==1)
        {
            fence1.addImage(fenceOKI);
        }
        else if(fence1Stat==2)
        {
            fence1.addImage(fenceWarnI);
            if(mouseIsPressed && mouse.isTouching(fence1) && supplies>=5){
                fence1Stat=1;
                supplies-=5;
            }
        }
        else{
            fence1.addImage(fenceDownI);
            fence1.x=windowWidth*2/9 +random(-5,5);
            fence1.y=windowHeight*9/10 +random(-5,5);
            if(mouseIsPressed && mouse.isTouching(fence1) && supplies>=10){
                fence1Stat=1;
                supplies-=10;
            }
        }

        if(fence2Stat==1)
        {
            fence2.addImage(fenceOKI);
        }
        else if(fence2Stat==2)
        {
            fence2.addImage(fenceWarnI);
            if(mouseIsPressed && mouse.isTouching(fence2) && supplies>=5){
                fence2Stat=1;
                supplies-=5;
            }
        }
        else{
            fence2.addImage(fenceDownI);
            fence2.x=windowWidth*3/9 +random(-5,5);
            fence2.y=windowHeight*9/10 +random(-5,5);
            if(mouseIsPressed && mouse.isTouching(fence2) && supplies>=10){
                fence2Stat=1;
                supplies-=10;
            }
        }
        
        if(fence3Stat==1)
        {
            fence3.addImage(fenceOKI);
        }
        else if(fence3Stat==2)
        {
            fence3.addImage(fenceWarnI);
            if(mouseIsPressed && mouse.isTouching(fence3) && supplies>=5){
                fence3Stat=1;
                supplies-=5;
            }
        }
        else{
            fence3.addImage(fenceDownI);
            fence3.x=windowWidth*4/9 +random(-5,5);
            fence3.y=windowHeight*9/10 +random(-5,5);
            if(mouseIsPressed && mouse.isTouching(fence3) && supplies>=10){
                fence3Stat=1;
                supplies-=10;
            }
        }
        
        if(fence4Stat==1)
        {
            fence4.addImage(fenceOKI);
        }
        else if(fence4Stat==2)
        {
            fence4.addImage(fenceWarnI);
            if(mouseIsPressed && mouse.isTouching(fence4) && supplies>=5){
                fence4Stat=1;
                supplies-=5;
            }
        }
        else{
            fence4.addImage(fenceDownI);
            fence4.x=windowWidth*5/9 +random(-5,5);
            fence4.y=windowHeight*9/10 +random(-5,5);
            if(mouseIsPressed && mouse.isTouching(fence4) && supplies>=10){
                fence4Stat=1;
                supplies-=10;
            }
        }

        //gameplay
        if(error=="asteroid" && happen==true){
            var randEffect=floor(random(1, 5));
            if(randEffect==1){
                fence1Stat++;
            }
            else if(randEffect==2){
                fence2Stat++;
            }
            else if(randEffect==3){
                fence3Stat++;
            }
            else {
                fence4Stat++;
            }
            happen=false;
            alert.addImage(asteroidI);
            alert.visible=true;
        }


        //events
        if(error=="attack" && happen==true){
            var kill=floor(random(5, 20));
            population-=kill;
            kill=floor(random(0, 15));
            food-=kill;
            happen=false;
            alert.addImage(attackI);
            alert.visible=true;
        }

        if(notification=="supplyDrop"){
            notify.addImage(supplyDropI);
            notify.visible=true;
        }
        if(notification=="fenceWarn"){
            notify.addImage(fenceDamageI);
            notify.visible=true;
        }
        if(notification=="fenceDanger"){
            notify.addImage(fenceDestroidI);
            notify.visible=true;
        }
        if(notification=="nuclear"){
            notify.addImage(powerPlantI);
            notify.visible=true;
        }

        //if there is not enough food (people die)
        if(food<population && today!=daysLeft){
            population-=ceil((population-food)/(population/2));
            food=0;
            today=daysLeft;
        }

        //ending the game
        if(population<=0){
            screen="lose"
        }
        if(daysLeft<=0){
            screen="win";
        }
    }
    
    hide(){
        playBack.visible=false;
        nextDayB.visible=false;
        miniGameB.visible=false;
        mine.visible=false;
        fence1.visible=false;
        fence2.visible=false;
        fence3.visible=false;
        fence4.visible=false;
        nuclear.visible=false;
        describe.visible=false;
    }


    event(){
        var randEvent=floor(random(0,101));
        if(randEvent>=0 && randEvent<=10){
            error="asteroid";
        }
        else if(randEvent<=20){
            error="radiation";
        }

        if(fence1Stat==2 || fence2Stat==2 || fence3Stat==2 || fence4Stat==2){
            notification="fenceWarn";
        }
        if(fence1Stat>2 || fence2Stat>2 || fence3Stat>2 || fence4Stat>2){
            notification="fenceDanger";
            if(randEvent>=50 && randEvent<=70){
                error="attack";
            }
        }
    }
}