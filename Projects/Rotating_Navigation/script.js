// Create page functionality by targeting DOM elements with JS
const open = document.getElementById('open');
const close = document.getElementById('close');

const container = document.querySelector('.container');

// event listener to container to add show-nav class when clicked
open.addEventListener('click', () => container.classList.add('show-nav'));

// event listener to container to add show-nav class when clicked
close.addEventListener('click', () => container.classList.remove('show-nav'));
