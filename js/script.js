import { SlideNav } from './slide.js';

const slideNav = new SlideNav('.slide', '.slide-wrapper');
slideNav.init(0);
slideNav.addArrow('.prev', '.next');
slideNav.addControl();