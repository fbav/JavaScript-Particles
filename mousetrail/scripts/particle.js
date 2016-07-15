'use strict'
var Particle = function (_x, _y) {

    this.acc = new Vector2D(0, 0.05);
    this.vel = new Vector2D(Math.random() * 2 - 1, Math.random() * 2 - 2);
    this.loc = new Vector2D(_x, _y);
    this.r = Math.random() * 10 + 35;
    // particle life
    this.timer = 30;

    // particle life-cycle
    this.run = function () {
        this.update();
        this.render();
    }

    this.update = function () {

        // particle loop: acceleration, velocity, and location update
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.timer -= 1;
    }

    this.render = function () {

        var fillAlpha = this.timer / 300;
        this.fill = "rgba(255,255,255," + fillAlpha + ")";

        this.drawCircle(ctx, this.loc.x, this.loc.y, this.r / 2, this.fill);
    }

    this.drawCircle = function (ctx, x, y, r, fill) {

        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, r, Math.PI * 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    this.dead = function () {
        return this.timer <= 0 ? true : false;
    }
}