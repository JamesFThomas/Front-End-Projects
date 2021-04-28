// JS to give functionality to html elements

// target element with class of search
const search = document.querySelector('.search');
// target element with class of btn
const btn = document.querySelector('.btn');
// target element with class of input
const input = document.querySelector('.input');

// add event listener to button for click
btn.addEventListener('click', () => {
  // use toggle method to add/remove active class to search element
  search.classList.toggle('active');
  // set focus class on input element using focus method
  input.focus();
});
