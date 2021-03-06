function Vader() {
    canvas.addEventListener("click", vaderClick);
    this.spritesheet = AM.getAsset("./img/vader_1560x1040.png");
    this.x = 600;
    this.y = 500;

// Animation object: spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse
    this.attack1Anim = new Animation(this.spritesheet, 0, 320, 120, 80, 0.05, 13, false, false);
    this.attack2Anim = new Animation(this.spritesheet, 0, 480, 120, 80, 0.05, 11, false, false);
    this.idleAnim = new Animation(this.spritesheet, 840, 160, 120, 80, 1, 1, true, false);
    this.jumpAnim = new Animation(this.spritesheet, 0, 720, 120, 169, 0.3, 5, false, false);
    this.attacking = false;
    this.switchAttack = true;
    this.jumping = false;
}

Vader.prototype = new Entity();
Vader.prototype.constructor = Vader;

Vader.prototype.update = function() {
    if (gameEngine.w) {
        this.jumping = true;
    }

    if (gameEngine.d) {
        this.x += 5;
    }
    if (gameEngine.a) {
        this.x -= 5;
    }

    if (this.attack1Anim.isDone() || this.attack2Anim.isDone()) {
        this.attack1Anim.elapsedTime = 0;
        this.attack2Anim.elapsedTime = 0;
        this.attacking = false;
        this.switchAttack = !this.switchAttack;
    }

    if (this.jumpAnim.isDone()) {
        this.jumpAnim.elapsedTime = 0;
        this.jumping = false;
    }
    
    if (this.jumping) {
        var totalHeight = 200;
        var jumpDistance = this.jumpAnim.elapsedTime / this.jumpAnim.totalTime;
        if (jumpDistance > 0.5) {
            jumpDistance = 1 - jumpDistance;
        }
        var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = 500 - height;
        // if (this.y == 500) {
        //     this.jumping = false;
        // }
    }
    
    // if (this.idleAnim.isDone()) {
    //     this.idleAnim.elpasedTime = 0;
    // }
}

Vader.prototype.draw = function() {
    // console.log(this.attacking);
    if (this.attacking) {
        // ctx.drawImage(this.spritesheet, 0, 320, 120, 80, this.x, this.y, 120, 80);
        if (this.switchAttack) {
            this.attack1Anim.drawFrame(gameEngine.clockTick, ctx, this.x, this.y, 1);
        } else {
            this.attack2Anim.drawFrame(gameEngine.clockTick, ctx, this.x, this.y, 1);
        }
    } else if (this.jumping) {
        this.jumpAnim.drawFrame(gameEngine.clockTick, ctx, this.x, this.y - 80, 1);
    } else {
        this.idleAnim.drawFrame(gameEngine.clockTick, ctx, this.x, this.y, 1);
    }
}

function vaderClick(event) {
    var audio = AM.getSound('./sounds/Swing2.WAV').cloneNode();
    audio.volume = sfxVolume * 0.2;
    audio.play();
    gameEngine.entities[0].attacking = true;
    // console.log(this.attacking/)
}