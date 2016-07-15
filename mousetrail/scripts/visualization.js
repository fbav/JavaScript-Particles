'use strict'
var viz;

var Visualization = function () {

    this.root = '';
    this.context = '';

    this.ms = {
        x: 0,
        y: 0
    }; // Mouse speed
    this.mp = {
        x: 0,
        y: 0
    }; // Mouse position

    this.init = function (divID) {

        var el = document.getElementById(divID);

        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        el.style.position = "fixed";
        el.setAttribute("width", this.canvasWidth);
        el.setAttribute("height", this.canvasHeight);
        el.style.top = 0;
        el.style.left = 0;

        this.root = el;
        window.ctx = el.getContext("2d");

        // set origin point
        this.origin = new Vector2D(this.canvasWidth / 2, this.canvasHeight / 4);

        // initiate particle system with a single particle
        this.ps = new ParticleSystem(1, this.origin);

        // draw loop
        this.timeUpdateInterval = setInterval(draw, 25);

        // keep adding new particles
        this.addParticleInterval = setInterval("viz.ps.addParticle(viz.ps.origin.x,viz.ps.origin.y)", 10);

        // follow mouse location
        $('#' + divID).mousemove(MouseMove);

    }
}

function draw() {
    clear();
    viz.ps.run();
}

function clear() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, viz.canvasWidth, viz.canvasHeight);
}

function MouseMove(e) {

    viz.mp.x = e.layerX;
    viz.mp.y = e.layerY;

    viz.origin.x = viz.mp.x;
    viz.origin.y = viz.mp.y;
}