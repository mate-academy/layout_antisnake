'use strict';

// vision ---------------------------------------

const navbar = document.querySelector('.header__navbar');
const testButton = document.querySelector('.header__button_test');
const serviceCard = document.querySelector('.services__slider_card--last');
const videoBlockButton = document.querySelector('.learnMoreButton--videoBlock');
const feedbackCard = document.querySelector('.feedback__body_card--last');

window.addEventListener('resize', function() {
  if (window.innerWidth > 1600) {
    navbar.style.display = 'flex';
    testButton.style.display = 'none';
  } else {
    navbar.style.display = 'none';
    testButton.style.display = 'block';
  }

  if (window.innerWidth > 1700) {
    serviceCard.style.display = 'block';
  } else {
    serviceCard.style.display = 'none';
  }

  if (window.innerWidth > 1430) {
    videoBlockButton.style.display = 'block';
  } else {
    videoBlockButton.style.display = 'none';
  }

  if (window.innerWidth > 1570) {
    feedbackCard.style.display = 'flex';
  } else {
    feedbackCard.style.display = 'none';
  }
});

if (window.innerWidth > 1600) {
  navbar.style.display = 'flex';
  testButton.style.display = 'none';
} else {
  navbar.style.display = 'none';
  testButton.style.display = 'block';
}

if (window.innerWidth > 1700) {
  serviceCard.style.display = 'block';
} else {
  serviceCard.style.display = 'none';
}

if (window.innerWidth > 1430) {
  videoBlockButton.style.display = 'block';
} else {
  videoBlockButton.style.display = 'none';
}

if (window.innerWidth > 1570) {
  feedbackCard.style.display = 'flex';
} else {
  feedbackCard.style.display = 'none';
}
