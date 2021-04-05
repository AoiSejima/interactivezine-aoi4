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