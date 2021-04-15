// create variables set to project DOM elements to add effects
const progress = document.getElementById('progress'); // progress div
const prev = document.getElementById('prev'); // prev button
const next = document.getElementById('next'); // next button
const circles = document.querySelectorAll('.circle'); // numbered circles

// create variable to represent active numbered circle
let currentActive = 1;

// add event listener to next button
next.addEventListener('click', () => {
  // increment the variable with each click
  currentActive++;

  // keep index within limit of numbered circles 1-4
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // invoke the update function
  update();
});

// add event listener to prev button
prev.addEventListener('click', () => {
  // decrement the variable with each click
  currentActive--;

  // keep index within limit of numbered circles 1-4
  if (currentActive < 1) {
    currentActive = 1;
  }

  // invoke the update function
  update();
});

const update = () => {
  //update class of each circle of DOM to change color
  circles.forEach((circle, i) => {
    // add active class if index less than currentActive
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      // remove active class if index less than currentActive
      circle.classList.remove('active');
    }
  });

  // make variable set to group of active circles
  const actives = document.querySelectorAll('.active');

  // use lengths of circles and actives array to update progress line with each click
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // enable the previous button when currentValue > 1
  if (currentActive === 1) {
    prev.disabled = true;
  }
  // disable the next button when currentValue === circles.length
  else if (currentActive === circles.length) {
    next.disabled = true;
  }
  // enable both buttons when currentActive in range 1-4
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};
