// create variable and set to function capture all panels on page, querySelectorAll
const panels = document.querySelectorAll('.panel');

// use function to iterate through array of panels from page, forEach()
panels.forEach((panel) => {
  // add an event listener onto each panel to listen for user click with picture
  panel.addEventListener('click', () => {
    // use helper function to remove active class from other panels
    removeActiveClasses();

    // change the class of the panel that was clicked to active
    panel.classList.add('active');
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
