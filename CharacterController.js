interface CharacterController {
    // drawFrame(this.game.clockTick, this.ctx, this.x, this.y, scale)
    void runRightAnim(clockTick, ctx, x, y, scale);
    
}

function CharacterController (game, name) {
    if (name === "luke") {
        var luke = new Character(game, name, "./img/luke_sprites_right.png", "./img/luke_sprites_left.png");
        // Character.prototype.addAnimation = function (animName, spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
        
        // *********************** //
        // Right-Facing Animations //
        // *********************** //
        // Primary Weapon
        luke.addAnimation("runRightAnim", luke.spriteRight, 0, 2310, 96, 70, 0.1, 8, true, false);
        luke.addAnimation("jumpRightAnim", luke.spriteRight, 0, 2100, 144, 140, 0.1, 9, false, false);
        luke.addAnimation("standRightAnim", luke.spriteRight, 0, 1540, 96, 70, 1, 3, true, false);
        luke.addAnimation("crouchRightAnim", luke.spriteRight, 0, 1610, 96, 70, 0.5, 3, true, false);
        luke.addAnimation("attk1RightAnim", luke.spriteRight, 0, 1820, 144, 140, 0.07, 5, false, false);
        luke.addAnimation("attk2RightAnim", luke.spriteRight, 0, 1960, 144, 140, 0.07, 5, false, false);
        luke.addAnimation("saberOnRightAnim", luke.spriteRight, 0, 1750, 96, 70, 0.1, 3, false, false);
        luke.addAnimation("saberOffRightAnim", luke.spriteRight, 0, 1750, 96, 70, 0.1, 3, false, true);
        luke.addAnimation("dyingRightAnim", luke.spriteRight, 0, 630, 96, 70, 0.5, 6, false, false);
        // Right-Facing Animations
        // Secondary Weapon
        luke.addAnimation("gunCrouchRightAnim", luke.spriteRight, 0, 280, 96, 70, 1, 3, true, false);
        luke.addAnimation("gunRunRightAnim", luke.spriteRight, 0, 140, 96, 70, 0.05, 8, true, false);
        luke.addAnimation("gunJumpRight", luke.spriteRight, 0, 490, 96, 70, 0.1, 8, false, false);
        
        luke.addAnimation("gunStanding0RightAnim", luke.spriteRight, 576, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding22RightAnim", luke.spriteRight, 480, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding45RightAnim", luke.spriteRight, 384, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding67RightAnim", luke.spriteRight, 288, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding90RightAnim", luke.spriteRight, 192, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding135RightAnim", luke.spriteRight, 0, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding157RightAnim", luke.spriteRight, 96, 210, 96, 70, 0.5, 1, true, false);
        
        luke.addAnimation("gunCrouching0RightAnim", luke.spriteRight, 576, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching22RightAnim", luke.spriteRight, 480, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching45RightAnim", luke.spriteRight, 384, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching67RightAnim", luke.spriteRight, 288, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching90RightAnim", luke.spriteRight, 192, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching157RightAnim", luke.spriteRight, 0, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching135RightAnim", luke.spriteRight, 96, 280, 96, 70, 0.5, 1, true, false);
        
        // ********************** //
        // Left-Facing Animations //
        // ********************** //

        // Primary weapon animations
        luke.addAnimation("standLeftAnim", luke.spriteLeft, 1632, 1540, -96, 70, 1, 3, true, false);
        luke.addAnimation("runLeftAnim", luke.spriteLeft, 1632, 2310, -96, 70, 0.1, 8, true, false);
        luke.addAnimation("jumpLeftAnim", luke.spriteLeft, 336, 2100, 144, 140, 0.1, 9, false, false);
        luke.addAnimation("crouchLeftAnim", luke.spriteLeft, 1344, 1610, 96, 70, 1, 3, true, false);
        luke.addAnimation("saberOnLeftAnim", luke.spriteLeft, 1344, 1750, 96, 70, 0.1, 3, false, true);
        luke.addAnimation("saberOffLeftAnim", luke.spriteLeft, 1344, 1750, 96, 70, 0.1, 3, false, false);

        // Secondary weapon animations
        luke.addAnimation("gunStandLeftAnim", luke.spriteLeft, 1632, 0, -96, 70, 1, 3, true, false);
        luke.addAnimation("gunCrouchLeftAnim", luke.spriteLeft, 1344, 280, 96, 70, 1, 3, true, false);
        luke.addAnimation("gunRunLeftAnim", luke.spriteLeft, 1632, 140, -96, 70, 0.05, 8, true, false);
        luke.addAnimation("gunJumpLeftAnim", luke.spriteLeft, 864, 490, 96, 70, 0.1, 8, false, false);
        
        luke.addAnimation("gunStanding0LeftAnim", luke.spriteLeft, 960, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding22LeftAnim", luke.spriteLeft, 1056, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding45LeftAnim", luke.spriteLeft, 1152, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding67LeftAnim", luke.spriteLeft, 1248, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding90LeftAnim", luke.spriteLeft, 1344, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding135LeftAnim", luke.spriteLeft, 1536, 210, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunStanding157LeftAnim", luke.spriteLeft, 1440, 210, 96, 70, 0.5, 1, true, false);

        luke.addAnimation("gunCrouching0LeftAnim", luke.spriteLeft, 960, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching22LeftAnim", luke.spriteLeft, 1056, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching45LeftAnim", luke.spriteLeft, 1152, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching67LeftAnim", luke.spriteLeft, 1248, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching90LeftAnim", luke.spriteLeft, 1344, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching157LeftAnim", luke.spriteLeft, 1536, 280, 96, 70, 0.5, 1, true, false);
        luke.addAnimation("gunCrouching135LeftAnim", luke.spriteLeft, 1440, 280, 96, 70, 0.5, 1, true, false);

        console.log("luke's animations added.");

        luke.update();
        
    } else if (name === "vader") {

    }

}