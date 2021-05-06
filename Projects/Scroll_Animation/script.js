// target all DOM elements with ".box" class
const boxes = document.querySelectorAll('.box');

//  function that triggers "box" transition
const checkBoxes = () => {
  // create point on DOM to trigger box fly-in transition
  const triggerPoint = window.innerHeight * 0.8;

  // target boxes on the DOM
  boxes.forEach((box) => {
    // function to track top of box element on DOM
    const boxTop = box.getBoundingClientRect().top;

    /*
    create conditionals to add and remove "show" class to "box" elements according to
    there position on the screen
    */
    if (boxTop < triggerPoint) {
      //  add "show" class when top of box below trigger point
      box.classList.add('show');
    } else {
      //  remove "show" class when top of box above trigger point
      box.classList.remove('show');
      colorChange(box);
    }
  });
};

// function that changes color of box during transition
const colorChange = (div) => {
  // create list of colors to randomly select from
  let colors = ['#000000', '#8B0000', '#800080', '#008000', '#800080'];

  //create variable set to random color choice
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  div.style.backgroundColor = randomColor;
};

// add event listener for scroll event to trigger box flying into view
window.addEventListener('scroll', checkBoxes);

checkBoxes();
