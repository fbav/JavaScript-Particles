
var TO_RADIANS = Math.PI / 360;

function ImageParticle(img, posx, posy, xDirection)
{

    this.posX       = posx;
    this.posY       = posy;
    this.velX       = 0;
    this.velY       = 0;
    this.xDirection = xDirection;
    this.shrink     = 1;
    this.size       = 1;
    this.maxSize    = -1;
    this.drag       = 1;
    this.gravity    = 0;
    this.alpha      = 1;
    this.fade       = 0.001;
    this.spin       = 0;
    this.rotation   = 0;
    this.img        = img;

    this.compositeOperation = 'source-over';

    this.update = function()
    {
        this.velX *= this.drag;
        this.velY *= this.drag;
        this.velY += this.gravity;
        this.posX += this.velX;
        this.posY += this.velY;
        this.size *= this.shrink;

        if((this.maxSize>0) && (this.size>this.maxSize))
            this.size = this.maxSize;

        this.alpha -= this.fade;
        if(this.alpha<0) this.alpha = 0;

        this.rotation += this.spin;
    };

    this.render = function(c)
    {
         var xOffset = 10;

        if(this.alpha ==0) return;

        c.save();

        if(this.xDirection === "RtoL"){
            c.translate(this.posX+=-xOffset, this.posY);
        } else{
            c.translate(this.posX+=xOffset, this.posY);
        }

        c.scale(this.size,this.size);
        c.rotate(this.rotation * TO_RADIANS);
        c.translate(img.width*-0.5, img.width*-0.5);
        c.globalAlpha = this.alpha;
        c.globalCompositeOperation = this.compositeOperation;
        c.drawImage(img,0,0);
        c.restore();
    }
}


function randomRange(min, max)
{
    return ((Math.random()*(max-min)) + min);
}
