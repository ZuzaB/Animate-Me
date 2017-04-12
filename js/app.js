document.addEventListener('DOMContentLoaded', function(){
    
    var canv = document.querySelector('canvas');
    var ctx = canv.getContext('2d');
    var input = document.querySelector('input');
    var inputVal = input.value;
    var button = document.querySelector('button');
    console.log(canv, input, inputVal);
})