// target DOM element with class of .loading-text
const loadText = document.querySelector('.loading-text');

// target DOM element with class of .bg
const bg = document.querySelector('.bg');

// create variable to act as load percentage amount
let load = 0;

// create function to increment variables
const blurring = () => {
  //increase load
  load++;

  // stop incrementing of load value at 100
  if (load > 99) {
    clearInterval(int);
  }

  // change DOM element loadText to mimic load variable value
  loadText.innerText = `${load}%`;
  // change opacity or load percentage to disappear when done
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // change blur of background image
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

// use interval function to invoke blurring function
let int = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// stack over flow function to change opacity of text for load volume
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
