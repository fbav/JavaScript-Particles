'use strict'
var Vector2D = function (_x, _y) {

    this.x = _x;
    this.y = _y;

    // add given vector _v to this vector
    this.add = function (_v) {
        this.x += _v.x;
        this.y += _v.y;
    }

    this.setV = function (_v) {
        this.x = _v.x;
        this.y = _v.y;
    }

    this.set = function (_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    this.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    }

    // calculate distance between two vectors
    this.DistanceBetween = function (_v) {
        var dx = _v.x - this.x;
        var dy = _v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // multiply vector by given scalar
    this.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    // calculate vector length/magnitude
    this.magnitude = function () {

        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // normalize the vector
    this.normalize = function () {

        var l = this.magnitude();

        if (l == 0) {
            this.x = 0;
            this.y = 0;
        } else {
            this.x /= l;
            this.y /= l;
        }
    }

    this.limit = function (maxVar) {
        var l = this.magnitude();
        if (l > maxVar) {
            this.normalize();
            this.mult(maxVar);
        }
    }

    this.borders = function () {
        var margin = 15;

        if (this.x < margin)
            this.x = margin;
        if (this.y < margin)
            this.y = margin;
        if (this.x > viz.canvasWidth - 2 * margin)
            this.x = viz.canvasWidth - 2 * margin;
        if (this.y > viz.canvasHeight - 2 * margin)
            this.y = viz.canvasHeight - 2 * margin;
    }

}