class Forage1{
    constructor(){
        forest=createSprite(windowWidth/2,windowHeight/2);
        forest.addImage(forestI);
        forest.scale=windowWidth/1300;

        fruit1=createSprite(random(windowWidth/4, windowWidth*3/4),random(windowHeight/4, windowHeight*3/4));
        fruit1.addImage(fruitI);
        fruit1.scale=windowWidth/15000;
        fruit1.setCollider("rectangle", 0, 0, windowWidth/0.8, windowHeight/0.9);

        fruit2=createSprite(random(windowWidth/4, windowWidth*3/4),random(windowHeight/4, windowHeight*3/4));
        fruit2.addImage(fruitI);
        fruit2.scale=windowWidth/15000;
        fruit2.setCollider("rectangle", 0, 0, windowWidth/0.8, windowHeight/0.9);

        fruit3=createSprite(random(windowWidth/4, windowWidth*3/4),random(windowHeight/4, windowHeight*3/4));
        fruit3.addImage(fruitI);
        fruit3.scale=windowWidth/15000;
        fruit3.setCollider("rectangle", 0, 0, windowWidth/0.8, windowHeight/0.9);

        animal1=createSprite(random(windowWidth/4, windowWidth*3/4),random(windowHeight/4, windowHeight*3/4));
        animal1.addAnimation("hiding", animalI);
        animal1.scale=windowWidth/15000;
        animal1.setCollider("rectangle", 0, 0, windowWidth/0.8, windowHeight/0.9);

        animal2=createSprite(random(windowWidth/4, windowWidth*3/4),random(windowHeight/4, windowHeight*3/4));
        animal2.addAnimation("hiding", animal2I);
        animal2.scale=windowWidth/15000;
        animal2.setCollider("rectangle", 0, 0, windowWidth/0.8, windowHeight/0.9);

    }
    display(){
        if(done==0){
            forest.visible=true;
            fruit1.visible=true;
            fruit2.visible=true;
            fruit3.visible=true;
            animal1.visible=true;
            animal2.visible=true;

            fruit1.x=random(windowWidth/4, windowWidth*3/4);
            fruit1.y=random(windowHeight/4, windowHeight*3/4);

            fruit2.x=random(windowWidth/4, windowWidth*3/4);
            fruit2.y=random(windowHeight/4, windowHeight*3/4);

            fruit3.x=random(windowWidth/4, windowWidth*3/4);
            fruit3.y=random(windowHeight/4, windowHeight*3/4);

            animal1.x=random(windowWidth/4, windowWidth*3/4);
            animal1.y=random(windowHeight/4, windowHeight*3/4);

            animal2.x=random(windowWidth/4, windowWidth*3/4);
            animal2.y=random(windowHeight/4, windowHeight*3/4);
        }
        done++;

        //collecting food
        if(mouseIsPressed && mouse.isTouching(fruit1)){
            fruit1.visible=false;
            food+=100;
        }
        else if(mouseIsPressed && mouse.isTouching(fruit2)){
            fruit2.visible=false;
            food+=100;
        }
        else if(mouseIsPressed && mouse.isTouching(fruit3)){
            fruit3.visible=false;
            food+=100;
        }
        if(fruit1.visible==false && fruit2.visible==false && fruit3.visible==false){
            done=0;
            screen="level1";
        }
        
        //finding animal
        if(mouseIsPressed && (mouse.isTouching(animal1) || mouse.isTouching(animal2))){
            done=0;
            population-=5;
            screen="level1";
        }
    }

    hide(){
        forest.visible=false;
        fruit1.visible=false;
        fruit2.visible=false;
        fruit3.visible=false;
        animal1.visible=false;
        animal2.visible=false;
    }
}