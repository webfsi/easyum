
// all components
import animation from './components/animation.js';
import header from './components/header.js';
import select from './components/select.js';
import course from './components/course.js';
import range from './components/range.js';
import slider from './components/slider.js';
import accordion from './components/accordion.js';
import parallax from './components/parallax.js';

export default () => {
  parallax();
  animation();
  header();
  select();
  course();
  range();
  slider();
  accordion();
};