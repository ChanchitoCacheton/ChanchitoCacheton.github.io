
var xPos_CANVAS=0;
var yPos_CANVAS=0;

var weight_CANVAS=480;
var height_CANVAS=1024;

var GAME= new Phaser.Game(weight_CANVAS,height_CANVAS,Phaser.CANVAS,'canvas_game');

//managment

GAME.state.add('Menu',Menu);
//GAME.state.add('Credits',Credits);
//GAME.state.add('Stage',Stage);
//GAME.state.add('Pause',Pause);
//GAME.state.add('gameOver',gameOver);


GAME.state.start('Menu');