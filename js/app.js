$(function(){  
//wizard animation
    var canvas = document.querySelector('canvas');
    var input = document.querySelector('input');
    var button = document.getElementById('write');
    
    var ctx = canvas.getContext('2d');
    var dashLen = 220;
    var dashOffset = dashLen;
    var speed = 5;//może zmienić na 2
    var x = 0;
    var i = 0;
    var wizard = document.querySelector('.wizard');
  
    ctx.font = '30px Pangolin, cursive, sans-serif';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 2/3; //może nie być potrzebne
    ctx.strokeStyle = ctx.fillStyle = '#fff';    

    button.addEventListener('click', function () {
        var inputVal = input.value;
        var txt = '';
        
        wizard.classList.add('animation');
        
        if (inputVal.length == 0){
            txt = ' ';
        }else if(inputVal.length <= 18){
             txt = inputVal;
             }else{
             txt = "your text is too long";
        }
            function writing() {
                ctx.clearRect(x, 0, 60, 150);
                ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
                dashOffset -= speed;
                ctx.strokeText(txt[i], x, 90);

                if (dashOffset > 0) requestAnimationFrame(writing);
                else {
                    ctx.fillText(txt[i], x, 90);
                    dashOffset = dashLen;
                    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
                    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());
                    ctx.rotate(Math.random() * 0.005);
                    if (i < txt.length) requestAnimationFrame(writing);
                }
            }
           setTimeout(writing, 8000);
       ctx.clearRect(0, 0, canvas.width, canvas.height);//zmienić bo nie dokońca dobrze działa
        input.value = '';
    })
   //end wizard animation
    
 //banana animation
    var $banana = $('.banana');
    var $eyeBalls = $banana.find('.eye-ball');
    var $handRight = $banana.find('.hand-right');
    var $handLeft = $banana.find('.hand-left');
    var $legRight = $banana.find('.leg-right');
    var $legLeft = $banana.find('.leg-left');
    var $mouth = $banana.find('.smile');
    
    //control buttons
    var $control = $('.control');
    var $leftHandCtrl = $control.find('.left-hand');
    var $rightHandCtrl = $control.find('.right-hand');
    var $leftLegCtrl = $control.find('.left-leg');
    var $rightLegCtrl = $control.find('.right-leg');
    var $leftEyeCtrl = $control.find('.left-eye');
    var $rightEyeCtrl = $control.find('.right-eye');
    var $mouthCtrl = $control.find('.mouth');
    var $animate = $control.find('.go');
   
    
    
    
    console.log($control, $leftHandCtrl, $rightHandCtrl, $leftLegCtrl, $rightLegCtrl, $leftEyeCtrl, $rightEyeCtrl, $mouthCtrl, $animate);

})