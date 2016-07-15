'use strict'
var ParticleSystem = function (num, v) {

    this.particles = [];
    this.origin = v;

    for (var i = 0; i < num; i++) {
        this.particles.push(new Particle(v.x, v.y));
    }

    // running the particle system
    this.run = function () {

        // iterate through particles	
        for (var i = viz.ps.particles.length - 1; i >= 0; i--) {
            var p = viz.ps.particles[i];
            p.run();
            if (p.dead()) {
                viz.ps.particles.splice(i, 1);
            }
        }
    }

    // adding a particle
    this.addParticle = function (_x, _y) {
        this.particles.push(new Particle(_x, _y));
    }

}