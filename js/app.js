document.addEventListener('DOMContentLoaded', function(){
    
    var canv = document.querySelector('canvas');
    var input = document.querySelector('input');
    var inputVal = input.value;
    var button = document.querySelector('button');
    
    var ctx = canv.getContext('2d');
    var dashLen = 220;
    var dashOffset = dashLen;
    var speed = 5;
    var txt = "Write";
    var x = 30;
    var i = 0;
    
    ctx.font = '30px Pangolin, cursive, sans-serif';
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 2/3; //może nie być potrzebne
    ctx.strokeStyle = ctx.fillStyle = '#fff';
    
    function writing(){
        ctx.clearRect(x, 0, 60, 150);
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
        dashOffset -= speed;
        ctx.strokeText(txt[i], x, 90);
        
        if (dashOffset >0) requestAnimationFrame(writing); 
        else{
           ctx.fillText(txt[i], x, 90);
           dashOffset = dashLen;
            x+=ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());
            ctx.rotate(Math.random() * 0.005);
            if (i < txt.length) requestAnimationFrame(writing); 
        }
    }
   writing();    
})