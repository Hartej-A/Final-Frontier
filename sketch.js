/*CREDITS*

IMAGES:
All images created by Hartej Anand with kleki.com

LIBRARIES:
p5.js by p5js
p5.play.js by Quinton Ashley, Paolo Pedercini
p5.sound.min.js by Jason Sigal

FONTS:
VT323 by Google Fonts
Rubik Dirt by Google Fonts

*ALL CODE OWNED BY HARTEJ S. ANAND*/

//variables
var screen="home";
var translateX=0;
var mouseTranslate=0;
var clickProtect=0;

//home page
var homeBack, how, howB, play, playB, title, titleI;

//how page
var directions, back;

//level select page
var levelSelectBack, disclaimer, starA, starB, planetb, planetc, planetd, moond, planete, planetf, planetg, information;

//all games
var daysLeft=366;
var supplyDropDays=10;
var population=100;
var power=100;
var supplies=25;
var food=2000;
var deaths=0;

var fence1Stat=1;
var fence2Stat=1;
var fence3Stat=1;
var fence4Stat=1;
var powerUsage=0;

var notification="";
var error="";

var playBack, miniGameB, nextDayB, planet, notify, alert, fence1, fence2, fence3, fence4, describe;
var happen=true;

//level 1
var asteroidI, attackI, fenceDamageI, fenceDestroidI, supplyDropI, powerPlantII;

var fruit1, fruit2, fruit3, animal1, animal2, forest;
var fruitI, animalI, forestI;

var mine, miniBack, drill, shadow, shadow2, crystal;
var drillButtonI, drillI,  miniBackI, hideI, crystalI, describeForageI, describeMineI, describeNuclearI;

var leverTrack=1;
var nuclear, miniBBack, lever, button, panel, knob, energyScreen;
var nuclearI, leverUpI, leverDownI, buttonI, panelI, knobI, energyScreenI1, energyScreenI2, energyScreenI3;
var windowN, crystalMine, laser, heat, lowMaterialWarn;
var windowOnI, windowOffI, crystalMineI, laser1I, laser2I, heat1I, heat2I, heat3I, heat4I, lowMaterialWarnI;
var laserLevel=1, heatLevel=1, mining=1;

var done=0;
var today;

//end game
var lose, gameLost, loseI;
var win, gameWon, winI;

//images
function preload(){
    //home page
    titleI=loadAnimation("images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title1.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png", "images/title2.png");
    homeBackI=loadImage("images/homeBack.png");
    blueButtonI=loadAnimation("images/blueButton.png");
    redButtonI=loadAnimation("images/redButton.png");
    howI=loadImage("images/how.png");
    playI=loadImage("images/play.png");

    //how page
    directionsI=loadImage("images/directions.png");
    backI=loadImage("images/back.png");

    //level select page
    levelSelectBackI=loadImage("images/levelSelectBack.png");
    disclaimerI=loadImage("images/disclaimer.png");
    starAI=loadImage("images/starA.png");
    starBI=loadImage("images/starB.png");
    planetbI=loadImage("images/planetb.png");
    planetdI=loadImage("images/planetd.png");
    moondI=loadImage("images/moond.png");
    planetcI=loadImage("images/planetc.png");
    planeteI=loadImage("images/planete.png");
    planetfI=loadImage("images/planetf.png");
    planetgI=loadImage("images/planetg.png");
    
    //level select page information sprite
    informationI=loadImage("images/information.png");
    information_notConfirmed=loadImage("images/info_notConfirmed.png");
    information_notToScale=loadImage("images/info_notToScale.png");
    information_starA=loadImage("images/info_starA.png");
    information_starB=loadImage("images/info_starB.png");
    information_planetb=loadImage("images/info_planetb.png");
    information_planetd=loadImage("images/info_planetd.png");
    information_moond=loadImage("images/info_notConfirmed.png");
    information_planetc=loadImage("images/info_notConfirmed.png");

    //all levels
    fenceOKI=loadImage("images/fenceOK.png");
    fenceWarnI=loadImage("images/fenceWarn.png");
    fenceDownI=loadImage("images/fenceDown.png");
    nextDayI=loadImage("images/nextDay.png");
    miniBackI=loadImage("images/miniBack.png");

    //level 1
    planetbBackI=loadImage("images/planetbBack.png");
    forageI=loadImage("images/forage.png");
    forageHoverI=loadImage("images/forageHover.png");
    asteroidI=loadImage("images/errorAsteroid.png");
    attackI=loadImage("images/errorAttack.png");
    supplyDropI=loadImage("images/notifySupplyDrop.png");
    fenceDamageI=loadImage("images/notifyDamageFence.png");
    fenceDestroidI=loadImage("images/notifyInactiveFence.png");
    powerPlantI=loadImage("images/notifyNuclearPlant.png");
    describeForageI=loadImage("images/describe_forage1.png");
    describeMineI=loadImage("images/describe_mine1.png");
    describeNuclearI=loadImage("images/describe_power1.png");

    fruitI=loadImage("images/bush.png");
    animalI=loadAnimation( "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/monsterBush.png", "images/monsterBush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/monsterBush.png");
    animal2I=loadAnimation("images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/monsterBush.png", "images/monsterBush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/bush.png", "images/monsterBush.png");
    forestI=loadImage("images/forageBack.png");

    drillButtonI=loadImage("images/drill.png");
    drillI=loadAnimation("images/drilling1.png", "images/drilling2.png", "images/drilling1.png", "images/drilling3.png", );
    hideI=loadImage("images/hide.png");
    crystalI=loadImage("images/crystal.png");

    nuclearI=loadImage("images/nuclearPower.png");
    leverDownI=loadImage("images/lever1.png");
    leverUpI=loadImage("images/lever2.png");
    buttonI=loadImage("images/button.png");
    panelI=loadImage("images/panel.png");
    knobI=loadImage("images/knob.png");
    energyScreenI1=loadImage("images/energy1.png");
    energyScreenI2=loadImage("images/energy2.png");
    energyScreenI3=loadImage("images/energy3.png");

    windowOnI=loadImage("images/screenOn.png");
    windowOffI=loadImage("images/screenOff.png");
    crystalMineI=loadImage("images/crystalHarvest.png");
    laser1I=loadAnimation("images/laser1.png", "images/laser2.png");
    laser2I=loadAnimation("images/biglaser1.png", "images/biglaser2.png");
    heat1I=loadImage("images/heatLevel1.png");
    heat2I=loadImage("images/heatLevel2.png");
    heat3I=loadImage("images/heatLevel3.png");
    heat4I=loadImage("images/heatLevel4.png");
    lowMaterialWarnI=loadImage("images/lowMaterial.png");


    //end game
    loseI=loadAnimation("images/lose1.png", "images/lose2.png", "images/lose3.png", "images/lose4.png", "images/lose5.png", "images/lose6.png", "images/lose7.png", "images/lose8.png", "images/lose9.png", "images/lose10.png", "images/lose11.png", "images/lose12.png", "images/lose13.png", "images/lose14.png", "images/lose15G.png", "images/lose16.png", "images/lose17.png", "images/lose18.png", "images/lose19.png", "images/lose1.png", "images/lose2.png", "images/lose3.png", "images/lose4.png", "images/lose5.png", "images/lose6.png", "images/lose7.png", "images/lose8G.png", "images/lose9.png", "images/lose10.png", "images/lose11.png", "images/lose12.png", "images/lose13.png", "images/lose14.png", "images/lose15.png", "images/lose16.png", "images/lose17.png", "images/lose18.png", "images/lose19.png");
    winI=loadImage("images/win.png");
}

//creating canvas & sprites
function setup(){
    createCanvas(windowWidth, windowHeight);

    mouse=createSprite(mouseX,mouseY);
    mouse.scale=windowWidth/10000;


    //screens
    homePage = new Home();
    howPage = new How();
    levelPage = new LevelSelect();
    level1 = new Level1();
    forage1 = new Forage1();
    mine1 = new Mine1();
    energy1 = new Energy1();
    level2 = new Level2();
    level3 = new Level3();
    win = new Win();
    lose = new Lose();
    
}

function draw(){
    background(0,0,0);
    cursor("default");
    mouse.visible=false;
    mouse.x=mouseX+mouseTranslate;
    mouse.y=mouseY;

    //preventing clicking from occuring instantly
    clickProtect--;

    //different screens
    //navigation screens
    if(screen=="home"){
        homePage.display();
        
        forage1.hide();
        mine1.hide();
        energy1.hide();

        howPage.hide();
        levelPage.hide();
        level1.hide();
        level2.hide();
        level3.hide();
        win.hide();
        lose.hide();
    }
    else if(screen=="how"){
        howPage.display();
        
        forage1.hide();
        mine1.hide();
        energy1.hide();

        homePage.hide();
        levelPage.hide();
        level1.hide();
        level2.hide();
        level3.hide();
        win.hide();
        lose.hide();
    }
    else if(screen=="levelSelect"){
        levelPage.display();
        
        forage1.hide();
        mine1.hide();
        energy1.hide();

        homePage.hide();
        howPage.hide();
        level1.hide();
        level2.hide();
        level3.hide();
        win.hide();
        lose.hide();
    }
    //level 1 screens
    else if(screen=="level1"){
        level1.display();
        
        forage1.hide();
        mine1.hide();
        energy1.hide();

        homePage.hide();
        howPage.hide();
        levelPage.hide();
        level2.hide();
        level3.hide();
        win.hide();
        lose.hide();
    }
    else if(screen=="l1_forage"){
        forage1.display();
    }
    else if(screen=="l1_mine"){
        mine1.display();
    }
    else if(screen=="l1_energy"){
        energy1.display();
    }
    //level 2 screens
    else if(screen=="level2"){
        level2.display();
        
        forage1.hide();
        mine1.hide();

        homePage.hide();
        howPage.hide();
        levelPage.hide();
        level1.hide();
        level3.hide();
        win.hide();
        lose.hide();
    }
    //level 3 screens
    else if(screen=="level3"){
        level3.display();
        
        forage1.hide();
        mine1.hide();

        homePage.hide();
        howPage.hide();
        levelPage.hide();
        level1.hide();
        level2.hide();
        win.hide();
        lose.hide();
    }
    //win game
    else if(screen=="win"){
        win.display();
        
        forage1.hide();
        mine1.hide();

        homePage.hide();
        howPage.hide();
        levelPage.hide();
        level1.hide();
        level2.hide();
        level3.hide();
        lose.hide();
    }
    else if(screen=="lose"){
        lose.display();
        
        forage1.hide();
        mine1.hide();

        homePage.hide();
        howPage.hide();
        levelPage.hide();
        level1.hide();
        level2.hide();
        level3.hide();
        win.hide();
    }

    drawSprites();
}