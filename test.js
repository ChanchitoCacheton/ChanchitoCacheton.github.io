
var Game = new Phaser.Game(480, 360, Phaser.CANVAS, 'canvas_game',{ preload: preload, create: create, update: update,render: render});

var player;
var cursor;
var bg;

function preload(){

	Game.load.image('bg', 'assets/ui/ui_canvas.png');
	Game.load.image('player', 'assets/player/player_idle_right.png');
	
}

function create(){


	bg= Game.add.tileSprite(0, 0, 480, 1024, 'bg');
	Game.world.setBounds(0, 0, 480, 1024);

	Game.physics.startSystem(Phaser.Physics.P2JS);

	player=Game.add.sprite(Game.world.centerX, 0, 'player');

	Game.physics.p2.enable(player);

	cursors = Game.input.keyboard.createCursorKeys();

    Game.camera.follow(player);


}

function update(){

	

    if (cursors.up.isDown)
    {
        player.body.moveUp(100)
    }
    

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -120;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(100);
    }





}


function render() {

    Game.debug.cameraInfo(Game.camera, 23, 40);
    Game.debug.spriteCoords(player, 32, 200);



}

