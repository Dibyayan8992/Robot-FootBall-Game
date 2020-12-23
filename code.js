var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["de0d3861-4c91-42fb-9856-b638650fbd82","e84bbd15-1108-4184-a344-cf6949638718","419fccec-036c-492d-b885-ca10805ff524","51804197-9cf3-47be-98bd-2edd348152d0","5c517183-8d6d-4b8a-a76b-d256c23bcc4b"],"propsByKey":{"de0d3861-4c91-42fb-9856-b638650fbd82":{"name":"grass","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"QFAFFt7aPktQeSMkDg6oQaxuwN7YxMcw","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/de0d3861-4c91-42fb-9856-b638650fbd82.png"},"e84bbd15-1108-4184-a344-cf6949638718":{"name":"feild.png_1","sourceUrl":"assets/v3/animations/_2BbB5wT5jkcXd2VZV-E5kYofVj1ViQvEBSytNjGbNk/e84bbd15-1108-4184-a344-cf6949638718.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"s7N7lt7ufzxv8Nc1g4.YTcsopvB0OY_K","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/_2BbB5wT5jkcXd2VZV-E5kYofVj1ViQvEBSytNjGbNk/e84bbd15-1108-4184-a344-cf6949638718.png"},"419fccec-036c-492d-b885-ca10805ff524":{"name":"little_robot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/I9K_zCakC_DuV.ftWZYspgTeOGvnJuQY/category_characters/little_robot.png","frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"I9K_zCakC_DuV.ftWZYspgTeOGvnJuQY","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I9K_zCakC_DuV.ftWZYspgTeOGvnJuQY/category_characters/little_robot.png"},"51804197-9cf3-47be-98bd-2edd348152d0":{"name":"little_robot_1_copy_1","sourceUrl":null,"frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"6HOnsSYH9SflYewLRWk966YWEi7V8FFQ","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/51804197-9cf3-47be-98bd-2edd348152d0.png"},"5c517183-8d6d-4b8a-a76b-d256c23bcc4b":{"name":"football.png_1","sourceUrl":"assets/v3/animations/_2BbB5wT5jkcXd2VZV-E5kYofVj1ViQvEBSytNjGbNk/5c517183-8d6d-4b8a-a76b-d256c23bcc4b.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ca53zABU8.oY2bh_XjlC.7nAVSw3gabM","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/_2BbB5wT5jkcXd2VZV-E5kYofVj1ViQvEBSytNjGbNk/5c517183-8d6d-4b8a-a76b-d256c23bcc4b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//margins
var bg=createSprite(200,200,400,400);
bg.setAnimation("feild.png_1");




//main components(goals,strikers,puck)
var cStriker=createSprite(50,200,50,100);
cStriker.setAnimation("little_robot_1");
cStriker.scale=0.2;

var pStriker=createSprite(350,360,50,100);
pStriker.setAnimation("little_robot_1_copy_1");
pStriker.scale=0.2;

var pGoal=createSprite(371,200,16,100);
pGoal.shapeColor="green";

var cGoal=createSprite(27,200,16,100);
cGoal.shapeColor="green";

var football=createSprite(200,210,15,15);
football.setAnimation("football.png_1");
football.scale=0.4;


//Score var
var cScore=0;
var pScore=0;


var gameState="serve";



//function
function draw(){
background("white");
createEdgeSprites();
drawSprites();


 


if(gameState==="serve"){
  textSize(15);
  fill("white");
  text("Press Space to serve",130,180);
  
  football.x=200;
  football.y=200;
}

if (cScore===5||pScore===5){
  textSize(15);
  fill("white");
  text("Game Over",160,160);
  text("Press 'r' to reset",140,180);
  gameState="over";
  football.x=200;
  football.y=200;

if(keyWentDown("r")&&gameState==="over"){
    gameState="serve";
    cScore=0;
    pScore=0;
  }
  
}
  
 
if (keyDown("space")&&gameState==="serve"){
  
  football.velocityY=10;
  football.velocityX=11;
  
  gameState="play";
  
  
}

textSize(15);
fill("white"); 
text(cScore,176,30);
text(pScore,215,30);


  
if(football.isTouching(cGoal)){
  pScore=pScore+1;
  gameState="serve";
}
if(football.isTouching(pGoal)){
  cScore=cScore+1;
  gameState="serve";
}
football.bounceOff(pStriker); 
football.bounceOff(cStriker); 
football.bounceOff(edges);

pStriker.y=World.mouseY;
cStriker.y=football.y;football
 
 if(keyDown("LEFT_ARROW")){
   pStriker.x=pStriker.x-20;
 }
 
 if(keyDown("RIGHT_ARROW")){
   pStriker.x=pStriker.x+20;
 }
 
 
 
 
 
}
function serve(){
  if (keydown("space")&&gameState==="serve"){
    
    
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
