$(function(){  
  
    const $coverDivs = $('.cover');
    
    $coverDivs.on('click', function(){
        $coverDivs.removeClass('hidden');
        $(this).addClass('hidden');
    }) 
    
//wizard animation
    const canvas = document.querySelector('canvas');
    const input = document.querySelector('input');
    const button = document.getElementById('write');
    const wizard = document.querySelector('.wizard');
    
    function write(txt){
        let ctx = canvas.getContext('2d'), 
            dashLen = 220, 
            dashOffset = dashLen, 
            speed = 10, 
            x = 0, i = 0;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = '30px Pangolin, cursive, sans-serif';
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 2/3;
        ctx.strokeStyle = ctx.fillStyle = '#fff'; 
        
            (function writingLoop() {
                ctx.clearRect(x, 0, 60, 150);
                ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
                dashOffset -= speed;
                ctx.strokeText(txt[i], x, 90);

                if (dashOffset > 0) requestAnimationFrame(writingLoop);
                else {
                    ctx.fillText(txt[i], x, 90);
                    dashOffset = dashLen;
                    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
                    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());
                    ctx.rotate(Math.random() * 0.005);
                    if (i < txt.length) requestAnimationFrame(writingLoop);
                }
            })();
    }
    
    button.addEventListener('click', function(){
        
        let inputVal = input.value;
        
        if (inputVal.length == 0){
 
        }else if(inputVal.length <= 18){
            wizard.classList.add('animation');
            setTimeout(function(){write(inputVal);},4000);
             }else{
                wizard.classList.add('animation');
                setTimeout(function(){write("your text is too long");},4000);
             }

    //clearing input and animation
        input.value = '';
        input.onfocus = function(){
            wizard.classList.remove('animation');
            write(' ');
        }
    });
//end wizard animation
    
 //banana animation
    const $banana = $('.banana');
    const $eyeBalls = $banana.find('.eye-ball');
    const $handRight = $banana.find('.hand-right');
    const $handLeft = $banana.find('.hand-left');
    const $legRight = $banana.find('.leg-right');
    const $legLeft = $banana.find('.leg-left');
    const $mouth = $banana.find('.smile');
    
    //control buttons
    const $control = $('.control');
    const $leftHandCtrl = $control.find('.left-hand');
    const $rightHandCtrl = $control.find('.right-hand');
    const $leftLegCtrl = $control.find('.left-leg');
    const $rightLegCtrl = $control.find('.right-leg');
    const $eyeballsCtrl = $control.find('.eyeballs');
    const $mouthCtrl = $control.find('.mouth');
    const $animate = $('.go');
   
    const arrPart = [$handLeft, $handRight, $legLeft, $legRight, $mouth, $eyeBalls];
    const arrCtrl = [$leftHandCtrl, $rightHandCtrl, $leftLegCtrl, $rightLegCtrl, $mouthCtrl, $eyeballsCtrl];
    const arrClasses = ['move-left-hand', 'move-right-hand', 'move-left-leg', 'move-right-leg', 'move-mouth', 'move-eyeballs'];
    
    
    //animation demos    
    for(let j=0; j< arrClasses.length; j++){
        arrCtrl[j].on('mouseenter', function(){
          arrPart[j].addClass(arrClasses[j]); 
        })
        arrCtrl[j].on('mouseleave', function(){
          arrPart[j].removeClass(arrClasses[j]); 
        })
   } 
    
    //animations 
    function moveLeftHand(time){
        setTimeout(function(){$handLeft.addClass('move-left-hand');}, time);
        setTimeout(function(){$handLeft.removeClass('move-left-hand');}, time+2000);
    }
    
    function moveRightHand(time){
        setTimeout(function(){$handRight.addClass('move-right-hand');}, time);
        setTimeout(function(){$handRight.removeClass('move-right-hand');}, time+2000);
    }
    
    function moveLeftLeg(time){
        setTimeout(function(){$legLeft.addClass('move-left-leg');}, time);
        setTimeout(function(){$legLeft.removeClass('move-left-leg');}, time+2000);
    }
   
    function moveRightLeg(time){
        setTimeout(function(){$legRight.addClass('move-right-leg');}, time);
        setTimeout(function(){$legRight.removeClass('move-right-leg');}, time+2000);
    }
    
    function moveMouth(time){
        setTimeout(function(){$mouth.addClass('move-mouth');}, time);
        setTimeout(function(){$mouth.removeClass('move-mouth');}, time+2000);
    }
    
    function moveEyeballs(time){
        setTimeout(function(){$eyeBalls.addClass('move-eyeballs');}, time);
        setTimeout(function(){$eyeBalls.removeClass('move-eyeballs');}, time+2000);
    }
    
    let arrAnimation = [];
    const $buttons = $control.children();
    
 //getting information about animation sequence   
    $buttons.on('click', function(){
        let className = $(this).attr('class');
        arrAnimation.push(className); 
    });
    
    $animate.on('click', function(){
         console.log(arrAnimation);
        for (let i=0; i< arrAnimation.length; i++){
            if (arrAnimation[i] === 'eyeballs'){
                moveEyeballs(i*2000);
            }
            if(arrAnimation[i] === 'mouth'){
                moveMouth(i*2000);
            }
            if(arrAnimation[i] === 'left-hand'){
                moveLeftHand(i*2000);
            }
            if(arrAnimation[i] === 'right-hand'){
               moveRightHand(i*2000);
            }
            if(arrAnimation[i] === 'left-leg'){
                moveLeftLeg(i*2000);
            }
            if(arrAnimation[i] === 'right-leg'){
                moveRightLeg(i*2000);
            }
         }
        arrAnimation = [];
    })
    
})