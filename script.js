import { InputHandler } from './input.js';
import {Player} from './player.js';
window.addEventListener('load',function(){
    const canvas =  document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    class Game {
        constructor(width, height){
            this.width =width;
            this.height=height;
            this.Player =new Player(this);
            this.input = new InputHandler();
        }
        update(deltaTime){
            this.Player.update(this.input.keys, deltaTime);
        }
        draw(context){
            this.Player.draw(context);
        }
    }
    const game = new Game(canvas.width,canvas.height);
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp-lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});
