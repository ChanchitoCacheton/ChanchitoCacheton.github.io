
var button_START;
var button_CREDITS;




var Menu = {

	preload: function(){

		GAME.stage.backgroundColor='#FFF';
		GAME.load.image('bgMenu','src/ui_menu.png');
		GAME.load.spritesheet('button_start','src/set_buttons_menu.png');
		

	},
	create: function(){

		var bg= GAME.add.tileSprite(0,0,480,360,'bgMenu');

		button_START=this.add.button(GAME.world.centerX-75,150,'button_start',actionOnClick,this,1,0);
		button.onInputUp.add(up,this);
		button.onInputOut.add(out,this);


	},

	up:function (){ console.log('button_pressed',arguments);},
	out: function(){ console.log('button_idle')},

	actionOnClick:function(){

		GAME.state.start('Menu');

	},

	start: function(){},
	credits: function(){},








};