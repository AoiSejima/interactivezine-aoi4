//pop1 
var e = document.getElementById('popupBoxOnePosition');
 var close = document.getElementById('closebox1');

document.getElementById('box1').addEventListener('click', function(){
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
});

// When the user clicks on Click here to close modal
close.onclick = function() {
    e.style.display = "none";
}

//pop2
 var popupBoxTwoPosition = document.getElementById('popupBoxTwoPosition');
 var closeclosebox2 = document.getElementById('closebox2');

document.getElementById('box2').addEventListener('click', function(){
  if(popupBoxTwoPosition.style.display == 'block')
    popupBoxTwoPosition.style.display = 'none';
  else
    popupBoxTwoPosition.style.display = 'block';
});

closeclosebox2.onclick = function() {
    popupBoxTwoPosition.style.display = "none";
}

//pop3
var popupBoxThreePosition = document.getElementById('popupBoxThreePosition');
var closeclosebox3 = document.getElementById('closebox3');

document.getElementById('box3').addEventListener('click', function(){
 if(popupBoxThreePosition.style.display == 'block')
    popupBoxThreePosition.style.display = 'none';
 else
    popupBoxThreePosition.style.display = 'block';
});

closeclosebox3.onclick = function() {
    popupBoxThreePosition.style.display = "none";
}


const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onmouseover = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 800,
    iterations: Infinity
  });
}

const $iconBack = document.querySelector('.icon-back');
const $arrowBack = document.querySelector('.arrow-back');

$iconBack.onmouseover = () => {
  $arrowBack.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 800,
    iterations: Infinity
  });
}