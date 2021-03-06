var PLAY=3;
var END=2;
var STORY=1;
var BEGIN=0
var ARDO=4;
var NECRO=5;
var DRAGON=6;
var DRAGON2=6.1;
var NECRO2=5.2;
var ARDO2=4.2;
var gameState=BEGIN;
var Next1,Next2,Next3;
var Next1Img,Next2Img,Next3Img;
var Otscore=0;
var score=0;
var C1,C2,C3,C1Img,C2Img,C3Img;
var Abbigail,AbbigailRun;
var Ground;
var ABST,ARST,LUST;
var ABSTImg,ARSTImg,LUSTImg;
var Lucan,LucanRun;
var Thalleous,ThalleousRun;
var start1,start2,start3,start4,start5,start6,start7,start8,start9,start10,start11,start12,start13,start14,start15,start16,start17,start18,start19,start20,start21;
var start1Img,start2Img,start3Img,start4Img,start5Img,start6Img,start7Img,start8Img,start9Img,start10Img,start11Img,start12Img,start13Img,start14Img,start15Img,start16Img,start17Img,start18Img,start19Img,start20Img,start21Img;
var SToB,StobImg,StartB,StartBImg;
var Start,StartImg
var BackB,BackBImg;
var AbbigailJ,ThalleousJ,LucanJ;
var ABBackground1,ABBackground2,ABBackground3,ABBackground4;
var ABBackground1Img,ABBackground2Img,ABBackground3Img,ABBackground4Img;
var NEBackground1,NEBackground2,NEBackground3,NEBackground4,NEBackground5,NEBackground6;
var NEBackground1Img,NEBackground2Img,NEBackground3Img,NEBackground4Img,NEBackground5Img,NEBackground6Img;
var ARBackground1,ARBackground2,ARBackground3,ARBackground4,ARBackground5,ARBackground6;
var ARBackground1,ARBackground2,ARBackground3Img,ARBackground4Img,ARBackground5Img,ARBackground6Img;
var Grim,GrimAnim,GrimGroup;
var Zombie,ZombieGroup,ZombieAnim;
var Jalkar,JalkarAnim,JalkarGroup;
var WitherHead,WitherHeadGroup,WitherHeadImg;
var Voltaris1,Voltaris1Group,Voltaris1Anim;
var Voltaris2,Voltaris2Group,Voltaris2Anim;
var ThalleousSR,LucanSR,Arrow,Bow,SwordT,SwordL;
var BowImg,SwordTImg,SwordLImg,ArrowGroup,ArrowImg;
var Ground2,Ground3;
function preload(){
  start1Img=loadImage("Story/S1.jpg")
  start2Img=loadImage("Story/S2.jpg")
  start3Img=loadImage("Story/S3.jpg")
  start4Img=loadImage("Story/S4.jpg")
  start5Img=loadImage("Story/S5.jpg")
  start6Img=loadImage("Story/S6.jpg")
  start7Img=loadImage("Story/S7.jpg")
  start8Img=loadImage("Story/S8.jpg")
  start9Img=loadImage("Story/S9.jpg")
  start10Img=loadImage("Story/S10.jpg")
  start11Img=loadImage("Story/S11.jpg")
  start12Img=loadImage("Story/S12.jpg")
  start13Img=loadImage("Story/S13.png")
  start14Img=loadImage("Story/S14.png")
  start15Img=loadImage("Story/S15.png")
  start16Img=loadImage("Story/S16.png")
  start17Img=loadImage("Story/S17.jpg")
  start18Img=loadImage("Story/S18.jpg")
  start19Img=loadImage("Story/S19.jpg")
  start20Img=loadImage("Story/S20.jpg")
  start21Img=loadImage("Story/S21.jpg")

  StobImg=loadImage("Buttons/StoryB.jpg");
  StartImg=loadImage("Story/Start.jpg");
  StartBImg=loadImage("Buttons/StartB.jpg")
  BackBImg=loadImage("Buttons/backbutton.png")


  C1Img=loadImage("Choose/Aaj.jpg")
  C2Img=loadImage("Choose/Ard.png")
  C3Img=loadImage("Choose/Lnn.png")

  AbbigailRun=loadAnimation("AAE/AB1.png","AAE/AB2.png","AAE/AB3.png","AAE/AB4.png","AAE/AB5.png","AAE/AB6.png","AAE/AB7.png","AAE/AB8.png","AAE/AB9.png");
  LucanRun=loadAnimation("LAN/L1.png","LAN/L2.png","LAN/L3.png","LAN/L4.png","LAN/L5.png","LAN/L6.png","LAN/L7.png","LAN/L8.png","LAN/L9.png","LAN/L10.png")
  ThalleousRun=loadAnimation("Thalleous/T1.png","Thalleous/T2.png","Thalleous/T3.png","Thalleous/T4.png","Thalleous/T5.png","Thalleous/T6.png","Thalleous/T7.png","Thalleous/T8.png","Thalleous/T9.png","Thalleous/T10.png","Thalleous/T11.png")

ABBackground1Img=loadImage("ABBACK/AB1.png")
ABBackground2Img=loadImage("ABBACK/AB2.png")
ABBackground3Img=loadImage("ABBACK/AB3.png")
ABBackground4Img=loadImage("ABBACK/AB4.png")

NEBackground1Img=loadImage("NEBACK/NE1.png")
NEBackground2Img=loadImage("NEBACK/NE2.png")
NEBackground3Img=loadImage("NEBACK/NE3.png")
NEBackground4Img=loadImage("NEBACK/NE4.png")
NEBackground5Img=loadImage("NEBACK/NE5.png")
NEBackground6Img=loadImage("NEBACK/NE6.png")

ARBackground1Img=loadImage("ARBACK/Forest.png");
ARBackground2Img=loadImage("ARBACK/End.png");
ARBackground3Img=loadImage("ARBACK/Fight.png");
ARBackground4Img=loadImage("ARBACK/Forest2.png");

ABSTImg=loadImage("OST/ABBISE.png");
LUSTImg=loadImage("OST/LUCANSE.png");
ARSTImg=loadImage("OST/ARSE.png");

Next1Img=loadImage("Buttons/Next.png");
Next2Img=loadImage("Buttons/Next2.png");
Next3Img=loadImage("Buttons/Next3.png");

GrimAnim=loadAnimation("Enemy/Grim.png","Enemy/Grim2.png","Enemy/Grim3.png","Enemy/Grim4.png")
JalkarAnim=loadAnimation("AAE/JA1.png","AAE/JA2.png","AAE/JA3.png","AAE/JA4.png","AAE/JA5.png")

AbbigailJ=loadImage("JUMP/Abbigail.png");
LucanJ=loadImage("JUMP/Lucan.png");
ThalleousJ=loadImage("JUMP/Thalleous.png")

ZombieAnim=loadAnimation("Zombies/Z1.png","Zombies/Z2.png","Zombies/Z3.png","Zombies/Z4.png","Zombies/Z5.png","Zombies/Z6.png","Zombies/Z7.png","Zombies/Z8.png","Zombies/Z9.png");      
WitherHeadImg=loadImage("Enemy/Skeleton.jpg");      

Voltaris1Anim=loadAnimation("Voltaris/V1.png","Voltaris/V2.png","Voltaris/V3.png","Voltaris/V4.png","Voltaris/V5.png","Voltaris/V6.png","Voltaris/V7.png","Voltaris/V8.png","Voltaris/V9.png");
Voltaris2Anim=loadAnimation("Voltaris/VS1.png","Voltaris/VS2.png","Voltaris/VS3.png","Voltaris/VS4.png");

ArrowImg=loadImage("Weapons/Arrow.png");
BowImg=loadImage("Weapons/Bow.png");

ThalleousSR=loadAnimation("Thalleous/TS1.png","Thalleous/TS2.png","Thalleous/TS3.png","Thalleous/TS4.png","Thalleous/TS5.png","Thalleous/TS6.png","Thalleous/TS7.png","Thalleous/TS8.png","Thalleous/TS9.png","Thalleous/TS10.png")
LucanSR=loadAnimation("LAN/LS1.png","LAN/LS2.png","LAN/LS3.png","LAN/LS4.png","LAN/LS5.png","LAN/LS6.png","LAN/LS7.png","LAN/LS8.png","LAN/LS9.png","LAN/LS10.png")

SwordTImg=loadImage("Thalleous/Sword.png");
SwordLImg=loadImage("LAN/Sword.png")
BowImg=loadImage("Weapons/Bow.png");
}


function setup() {
  createCanvas(1350,670);
  
Stob=createSprite(1230,450,1,1);
Stob.addImage(StobImg);
Stob.scale=0.15;
Stob.visible=true 

StartB=createSprite(1230,550,1,1);
StartB.addImage(StartBImg);
StartB.scale=0.35


start1=createSprite(670,350,1,1);
start1.addImage(start1Img);
start1.scale=1;
start1.visible=false;

start2=createSprite(670,320,1,1);
start2.addImage(start2Img);
start2.scale=1;
start2.visible=false;

start3=createSprite(670,350,1,1);
start3.addImage(start3Img);
start3.scale=1;
start3.visible=false;

start4=createSprite(670,350,1,1);
start4.addImage(start4Img);
start4.scale=1;
start4.visible=false;

start5=createSprite(670,350,1,1);
start5.addImage(start5Img);
start5.scale=1;
start5.visible=false;

start6=createSprite(670,350,1,1);
start6.addImage(start6Img);
start6.scale=1;
start6.visible=false;

start7=createSprite(670,350,1,1);
start7.addImage(start7Img);
start7.scale=1;
start7.visible=false;

start8=createSprite(670,350,1,1);
start8.addImage(start8Img);
start8.scale=1;
start8.visible=false;

start9=createSprite(670,350,1,1);
start9.addImage(start9Img);
start9.scale=1;
start9.visible=false;

start10=createSprite(670,350,1,1);
start10.addImage(start10Img);
start10.scale=1;
start10.visible=false;

start11=createSprite(670,330,1,1);
start11.addImage(start11Img);
start11.scale=0.95;
start11.visible=false;

start12=createSprite(670,350,1,1);
start12.addImage(start12Img);
start12.scale=1;
start12.visible=false;

start13=createSprite(670,350,1,1);
start13.addImage(start13Img);
start13.scale=0.6;
start13.visible=false;

start14=createSprite(670,350,1,1);
start14.addImage(start14Img);
start14.scale=0.6;
start14.visible=false;

start15=createSprite(670,350,1,1);
start15.addImage(start15Img);
start15.scale=0.6;
start15.visible=false;

start16=createSprite(670,350,1,1);
start16.addImage(start16Img);
start16.scale=0.6;
start16.visible=false;

start17=createSprite(670,350,1,1);
start17.addImage(start17Img);
start17.scale=1;
start17.visible=false;

start18=createSprite(670,350,1,1);
start18.addImage(start18Img);
start18.scale=1;
start18.visible=false;

start19=createSprite(670,350,1,1);
start19.addImage(start19Img);
start19.scale=1;
start19.visible=false;

start20=createSprite(670,350,1,1);
start20.addImage(start20Img);
start20.scale=1;
start20.visible=false;

start21=createSprite(670,350,1,1);
start21.addImage(start21Img);
start21.scale=1;
start21.visible=false;

BackB=createSprite(1130,550,1,1);
BackB.addImage(BackBImg);
BackB.scale=0.35
BackB.visible=false

C1=createSprite(350,305,1,1);
C1.addImage(C1Img);
C1.scale=0.4
C1.visible=false;

C2=createSprite(670,305,1,1);
C2.addImage(C2Img);
C2.scale=0.4;
C2.visible=false;

C3=createSprite(1180,305,1,1);
C3.addImage(C3Img);
C3.scale=0.4;
C3.visible=false;

Abbigail=createSprite(100,500,20,20);
Abbigail.addAnimation("ABRun",AbbigailRun);
Abbigail.scale=0.3;
Abbigail.visible=false;
Abbigail.addAnimation("AJ",AbbigailJ);

Lucan=createSprite(100,500,20,20);
Lucan.addAnimation("LUCRun",LucanRun);
Lucan.addAnimation("LJ",LucanJ);
Lucan.addAnimation("LSR",LucanSR);
Lucan.scale=0.3;
Lucan.visible=false;

Thalleous=createSprite(100,500,20,20);
Thalleous.addAnimation("ThalleousR",ThalleousRun);
Thalleous.scale=0.4;
Thalleous.visible=false;
Thalleous.addAnimation("TJ",ThalleousJ);
Thalleous.addAnimation("TSR",ThalleousSR);


Ground=createSprite(670,655,1500,20);
Ground.visible=false;

Ground2=createSprite(670,700,1500,20);
//Ground2.visible=false;

Ground3=createSprite(670,900,1500,20);
Ground3.visible=false;

  SwordT=createSprite(1440,600,10,10);
   SwordT.addImage(SwordTImg);
   SwordT.scale=3;

   SwordL=createSprite(1440,600,10,10);
   SwordL.addImage(SwordLImg);
   SwordL.scale=5;

   Bow=createSprite(1440,600,10,10);
   Bow.addImage(BowImg);
   Bow.scale=0.6;
//ABBIGAIL BACKGROUND
ABBackground1=createSprite(695,335,2,2);
ABBackground1.addImage(ABBackground1Img);
ABBackground1.scale=1.2;
ABBackground1.visible=false;

ABBackground2=createSprite(675,335,2,2);
ABBackground2.addImage(ABBackground2Img);
ABBackground2.scale=1.2;
ABBackground2.visible=false;

ABBackground3=createSprite(675,335,2,2);
ABBackground3.addImage(ABBackground3Img);
ABBackground3.scale=1.2;
ABBackground3.visible=false;

ABBackground4=createSprite(675,335,2,2);
ABBackground4.addImage(ABBackground4Img);
ABBackground4.scale=1.2;
ABBackground4.visible=false;

//LUCAN BACKGROUND
NEBackground1=createSprite(675,335,2,2);
NEBackground1.addImage(NEBackground1Img);
NEBackground1.scale=1.2;
NEBackground1.visible=false;

NEBackground2=createSprite(675,335,2,2);
NEBackground2.addImage(NEBackground2Img);
NEBackground2.scale=1.2;
NEBackground2.visible=false;

NEBackground3=createSprite(675,335,2,2);
NEBackground3.addImage(NEBackground3Img);
NEBackground3.scale=1.2;
NEBackground3.visible=false;

NEBackground4=createSprite(675,335,2,2);
NEBackground4.addImage(NEBackground4Img);
NEBackground4.scale=1.2;
NEBackground4.visible=false;

NEBackground5=createSprite(675,335,2,2);
NEBackground5.addImage(NEBackground5Img);
NEBackground5.scale=1.2;
NEBackground5.visible=false;

NEBackground6=createSprite(675,335,2,2);
NEBackground6.addImage(NEBackground6Img);
NEBackground6.scale=1.2;
NEBackground6.visible=false;

ARBackground1=createSprite(675,335,2,2);
ARBackground1.addImage(ARBackground1Img);
ARBackground1.scale=1.2;
ARBackground1.visible=false

ARBackground2=createSprite(675,335,2,2);
ARBackground2.addImage(ARBackground2Img);
ARBackground2.scale=1.2;
ARBackground2.visible=false

ARBackground3=createSprite(675,335,2,2);
ARBackground3.addImage(ARBackground3Img);
ARBackground3.scale=1.2;
ARBackground3.visible=false

ARBackground4=createSprite(675,335,2,2);
ARBackground4.addImage(ARBackground4Img);
ARBackground4.scale=1.2;
ARBackground4.visible=false;

ABST=createSprite(675,365,1,1);
ABST.addImage(ABSTImg);
ABST.scale=0.99;
ABST.visible=false;

LUST=createSprite(675,340,1,1);
LUST.addImage(LUSTImg);
LUST.scale=0.99;
LUST.visible=false;

ARST=createSprite(675,353,1,1);
ARST.addImage(ARSTImg);
ARST.scale=0.99;
ARST.visible=false;

Next1=createSprite(1000,500,1,1);
Next1.addImage(Next1Img);
Next1.scale=0.1;
Next1.visible=false;
  
Next2=createSprite(1100,500,1,1);
Next2.addImage(Next2Img);
Next2.scale=0.1;
Next2.visible=false;
  
Next3=createSprite(1200,500,1,1);
Next3.addImage(Next3Img);
Next3.scale=0.1;
Next3.visible=false;

GrimGroup = new Group();
JalkarGroup= new Group();
ZombieGroup= new Group();
WitherGroup= new Group();
Voltaris1Group= new Group();
Voltaris2Group= new Group();
}

function draw() {
  background(StartImg);  
 textSize(30)
  text("Score: "+ score, 1200,30);
  
  console.log(gameState)
  start21.depth = start21.depth;
    BackB.depth =start21.depth + 1;
 if(mousePressedOver(Stob)){
gameState=STORY;
  }
  if(gameState===STORY){
    Otscore = Otscore + Math.round(getFrameRate()/60);
    if(Otscore>3){
      start1.visible=true;
      Stob.visible=false;
      StartB.visible=false;
      BackB.visible=true;
    }
   if(Otscore>30){
     start1.visible=false;
     start2.visible=true;
   }
   if(Otscore>180){
    start2.visible=false;
    start3.visible=true;
  }
  if(Otscore>290){
    start3.visible=false;
    start4.visible=true;
  }
  if(Otscore>450){
    start4.visible=false;
    start5.visible=true;
  }
  if(Otscore>640){
    start5.visible=false;
    start6.visible=true;
  }
  if(Otscore>810){
    start6.visible=false;
    start7.visible=true;
  }
  if(Otscore>960){
    start7.visible=false;
    start8.visible=true;
  }
  if(Otscore>1200){
    start8.visible=false;
    start9.visible=true;
  }
  if(Otscore>1440){
    start9.visible=false;
    start10.visible=true;
  }
  if(Otscore>1680){
    start10.visible=false;
    start11.visible=true;
  }
  if(Otscore>1930){
    start11.visible=false;
    start12.visible=true;
  }
  if(Otscore>2060){
    start12.visible=false;
    start13.visible=true;
  } 
  if(Otscore>2280){
    start13.visible=false;
    start14.visible=true;
  }
  if(Otscore>2500){
    start14.visible=false;
    start15.visible=true;
  }
  if(Otscore>2850){
    start15.visible=false;
    start16.visible=true;
  } 
  if(Otscore>3150){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3300){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3720){
    start17.visible=false;
    start18.visible=true;
  }
  if(Otscore>4000){
    start18.visible=false;
    start19.visible=true;
  }
  if(Otscore>4280){
    start19.visible=false;
    start20.visible=true;
    BackB.visible=true;
  }
  if(Otscore>4630){
    start20.visible=false;
    start21.visible=true;
    BackB.visible=true;
    
  }
  if(Otscore>4800){
    start21.visible=false;
  }
  if(mousePressedOver(BackB)){
    start1.visible=false;
    start21.visible=false;
    BackB.visible=false;
    StartB.visible=true;
    Stob.visible=true;
    Otscore=0
    gameState=BEGIN
  }
  }
if(gameState===BEGIN){
  start1.visible=false;
  start2.visible=false;
  start3.visible=false;
  start4.visible=false;
  start5.visible=false;
  start6.visible=false;
  start7.visible=false;
  start8.visible=false;
  start8.visible=false;
  start10.visible=false;
  start11.visible=false;
  start12.visible=false;
  start13.visible=false;
  start14.visible=false;
  start15.visible=false;
  start16.visible=false;
  start17.visible=false;
  start18.visible=false;
  start18.visible=false;
  start20.visible=false;
  start21.visible=false;
  if(mousePressedOver(StartB)){
    gameState=PLAY
  }
}
  if(gameState===PLAY){
    fill(247, 228, 61)
    textSize(35)
    text("Which type of group do you want to play ???",120,25)
   C1.visible=true;
   C2.visible=true;
   C3.visible=true;
   console.log('before if'+ gameState)
  
 
  }
  if(mousePressedOver(C1)&& gameState===PLAY){
   gameState=DRAGON2;
   ABST.visible=true;
    C1.visible=false;
    C2.visible=false;
    C3.visible=false;
  StartB.visible=false;
    Stob.visible=false;
    console.log('After if'+gameState)
    
      }
      if(mousePressedOver(C2)&& gameState===PLAY){
       gameState= ARDO2;
   ARST.visible=true;
   C1.visible=false;
        C2.visible=false;
        C3.visible=false;
        StartB.visible=false;
        Stob.visible=false;
        console.log('After if'+gameState);
        
          }
          
          if(mousePressedOver(C3)&& gameState===PLAY){
        gameState=NECRO2;
   LUST.visible=true;
         C1.visible=false;
        C2.visible=false;
        C3.visible=false;
        StartB.visible=false;
        Stob.visible=false;
       // console.log('After if'+gameState)
         }
         if(gameState===DRAGON2){
           ABST.visible=true;
           Next1.visible=true;
         }

         if(mousePressedOver(Next1)){
          gameState=DRAGON;
          console.log(gameState);
          Next2.visible=false;
            LUST.visible=false;
        }

        if(gameState===ARDO2){
          ARST.visible=true;
          Next2.visible=true;
        }
        if(mousePressedOver(Next2)){
         gameState=ARDO;
       }
       if(gameState===NECRO2){
        LUST.visible=true;
        Next3.visible=true;
          
      }
     if(mousePressedOver(Next3)){
       gameState=NECRO;
     }

if(gameState===DRAGON){
  ABST.visible=false;
 ABBackground1.depth = ABBackground1.depth;
  Abbigail.depth = ABBackground1.depth + 1;
  ABBackground1.depth = ABBackground1.depth;
  Ground.depth = ABBackground1.depth + 1;
  ABBackground1.velocityX=-2;
  ABBackground1.visible=true;
  GrimFun();
  JalkarFun();

  if(score>10){
    Bow.velocityX=-5;
    ABBackground1.depth = ABBackground1.depth;
    Bow.depth = ABBackground1.depth + 1;
  }
  if(ABBackground1.x<600){
   ABBackground1.x=ABBackground1.width/2;
   Next1.visible=false;
 }
 if(keyDown("space")&& Abbigail.y >= 300) {
  Abbigail.velocityY = -15;
  Abbigail.changeAnimation("AJ",AbbigailJ);
  Abbigail.scale=0.6;

}
if(Abbigail.isTouching(Ground)){
  Abbigail.changeAnimation("ABRun",AbbigailRun)
   Abbigail.scale=0.3;
}
  Abbigail.velocityY = Abbigail.velocityY + 0.8
   Abbigail.visible=true;
   Ground.visible=true;
   score = score + Math.round(getFrameRate()/60);
  
}
if(gameState===5){
  LUST.visible=false;
    NEBackground1.depth = NEBackground1.depth;
  Lucan.depth = NEBackground1.depth + 1;
  NEBackground1.depth = NEBackground1.depth;
  Ground.depth = NEBackground1.depth + 1;
  NEBackground1.velocityX=-2;
  NEBackground1.visible=true;
  Next3.visible=false;
  if(score>450){
    SwordL.velocityX=-5;
    NEBackground1.depth = NEBackground1.depth;
  SwordL.depth = NEBackground1.depth + 1;
 
  }

  if(Lucan.isTouching(SwordL)){
    SwordL.visible=false;
    Ground2.visible=true;
    Lucan.changeAnimation("LSR",LucanSR);
    Ground.y=800;
    Ground2.y=655;
    Lucan.scale=0.3;
  }

if(Lucan.isTouching(Ground2)){
  Lucan.changeAnimation("LSR",LucanSR);
  Lucan.scale=0.3;
}
  if(NEBackground1.x<600){
   NEBackground1.x=NEBackground1.width/2;
 }
 ZombieFun();
 WitherFun();
 score = score + Math.round(getFrameRate()/60);

 if(keyDown("space")&& Lucan.y >= 300) {
  Lucan.velocityY = -15;
  Lucan.changeAnimation("LJ",LucanJ);
  Lucan.scale=0.63;
 }
if(Lucan.isTouching(Ground)){
  Lucan.changeAnimation("LUCRun",LucanRun);
  Lucan.scale=0.3
}

  Lucan.velocityY = Lucan.velocityY + 0.8
   Lucan.visible=true;
   Ground.visible=true;
}
if(gameState===4){
  ARST.visible=false;
  Next2.visible=false;
  ARBackground1.visible=true;
  ARBackground1.velocityX=-2;
 ARBackground1.depth = ARBackground1.depth;
  Thalleous.depth = ARBackground1.depth + 1;
  ARBackground1.depth = ARBackground1.depth;
  Ground.depth = ARBackground1.depth + 1;
  Voltaris1Fun();
  Voltaris2Fun();


  if(Thalleous.isTouching(SwordT)){
    SwordT.visible=false;
    Ground2.visible=true;
    Thalleous.changeAnimation("TSR",ThalleousSR);
    Ground.y=800;
    Ground2.y=655;
    Thalleous.scale=0.4;
  }

if(Thalleous.isTouching(Ground2)){
  Thalleous.changeAnimation("TSR",ThalleousSR);
  Thalleous.scale=0.4;
}

  score = score + Math.round(getFrameRate()/60);
  if(ARBackground1.x<600){
    ARBackground1.x=ARBackground1.width/2;
   
  }

  if(score>450){
    SwordT.velocityX=-5;
    ARBackground1.depth = ARBackground1.depth;
    SwordT.depth = ARBackground1.depth + 1;
  }
  if(keyDown("space")&& Thalleous.y >= 300) {
    Thalleous.velocityY = -15;
    Thalleous.changeAnimation("TJ",ThalleousJ);
  }
  if(Thalleous.isTouching(Ground)){
    Thalleous.changeAnimation("ThalleousR",ThalleousRun);
  }
  Thalleous.velocityY = Thalleous.velocityY + 0.8;
  Thalleous.visible=true;
  Ground.visible=true;
}
Abbigail.collide(Ground);


Lucan.collide(Ground);
Lucan.collide(Ground2);
Thalleous.collide(Ground);
Thalleous.collide(Ground2);
  drawSprites();
}

function GrimFun(){
  if(frameCount%400===0){
    var Grim=createSprite(1440,50,50,5);
    Grim.y=Math.round(random(450,500));
    Grim.addAnimation("GrimA",GrimAnim);
   Grim.velocityX=-7;
   Grim.scale=0.2;
   GrimGroup.add(Grim);
    }
}

function JalkarFun(){
  if(frameCount%600===0){
    var Jalkar=createSprite(1440,1,1,1);
    Jalkar.y=Math.round(random(550,550));
    Jalkar.addAnimation("JalkarA",JalkarAnim);
    Jalkar.velocityX=-8;
    Jalkar.scale=0.38;
    JalkarGroup.add(Jalkar);
  }
}

function ZombieFun(){
  if(frameCount%400===0){
var Zombie=createSprite(1440,1,1,1)
Zombie.y=Math.round(random(580,580))
Zombie.addAnimation("ZombieA",ZombieAnim);
Zombie.velocityX=-8;
Zombie.scale=0.27;
ZombieGroup.add(Zombie);
  }
}

function WitherFun(){
  if(frameCount%750===0){
var WitherHead=createSprite(1440,1,1,1)
WitherHead.y=Math.round(random(500,580))
WitherHead.addImage(WitherHeadImg);
WitherHead.velocityX=-9;
//WitherHead.scale=0.27;
WitherGroup.add(WitherHead);
  }
}

function Voltaris1Fun(){
  if(frameCount%450===0){
    var Voltaris1=createSprite(1440,1,1,1);
    Voltaris1.y=Math.round(random(565,565));
    Voltaris1.addAnimation("VoltarisA",Voltaris1Anim);
    Voltaris1.velocityX=-8;
    Voltaris1.scale=0.4;
    Voltaris1Group.add(Voltaris1);
  }
}

function Voltaris2Fun(){
  if(frameCount%700===0){
    var Voltaris2=createSprite(1440,1,1,1);
    Voltaris2.y=Math.round(random(560,560));
    Voltaris2.addAnimation("VoltarisB",Voltaris2Anim);
    Voltaris2.velocityX=-8;
    Voltaris2.scale=0.43;
    Voltaris2Group.add(Voltaris2);
  }
}