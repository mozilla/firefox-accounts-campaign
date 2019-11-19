'use strict';

console.log('foo');

const GOAL = 5000;
const MAX_HEIGHT = 153;
const MIN_HEIGHT = 11;
const MAX_TOP = 142;
const MIN_TOP = 0;
const RATIO = MAX_TOP/GOAL;

let current = 800; // TODO: actually get it...

if (current > GOAL) {
  current = GOAL;
}

const values = calculateValues(current);
setNewValues(values);
setTitle(current);

function setTitle(current) {
  const numberElement = document.querySelector('#number');
  numberElement.textContent = current;
}

function calculateValues(current) {
  const additionalPixels = current * RATIO;

  return {
    newHeight: additionalPixels + MIN_HEIGHT,
    newTop: MAX_TOP - additionalPixels,
  };
}

function setNewValues({ newHeight, newTop }) {
  if (newHeight > MAX_HEIGHT ||
      newHeight < MIN_HEIGHT ||
      newTop > MAX_TOP ||
      newTop < MIN_TOP) {
    console.error('CALCULATED_BAR_HEIGHT_POSITION_NOT_SUPPORTED', { newHeight, newTop });
    return;
  }

  document.documentElement.style
    .setProperty('--thermometer-height', `${newHeight}px`);
  document.documentElement.style
    .setProperty('--thermometer-top', `${newTop}px`);
}
