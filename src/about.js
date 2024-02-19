// const feedbackCard = document.querySelector(".feedback__body_card--last");
const navbar = document.querySelector('.header__navbar');
const testButton = document.querySelector('.header__button_test');

// window.addEventListener('resize', function() {
//   if (window.innerWidth > 1570) {
//     feedbackCard.style.display = "flex";
//   } else {
//     feedbackCard.style.display = "none";
//   }
// });

window.addEventListener('resize', function() {
  if (window.innerWidth > 1600) {
    navbar.style.display = 'flex';
    testButton.style.display = 'none';
  } else {
    navbar.style.display = 'none';
    testButton.style.display = 'block';
  }
});

if (window.innerWidth > 1600) {
  navbar.style.display = 'flex';
  testButton.style.display = 'none';
} else {
  navbar.style.display = 'none';
  testButton.style.display = 'block';
}

// if (window.innerWidth > 1570) {
//   feedbackCard.style.display = 'flex';
// } else {
//   feedbackCard.style.display = 'none'
// }
