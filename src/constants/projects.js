import Task from '../assets/img/Task-Tracker.png';
import Weather from '../assets/img/Weather-App.png';
import Skyscanner from '../assets/img/skyscanner.png';
import Ecommers from '../assets/img/e-commers.png';
import Perlego from '../assets/img/perlego.png';
import Registration from '../assets/img/Registration.png';
import Expedia from '../assets/img/expedia.png';

import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import netlifyIcon from '@iconify-icons/simple-icons/netlify';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import expressIcon from '@iconify-icons/simple-icons/express';
import sassIcon from '@iconify-icons/simple-icons/sass';
import reactIcon from '@iconify-icons/simple-icons/react';
import herokuIcon from '@iconify-icons/simple-icons/heroku';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import appiumIcon from '@iconify-icons/logos/appium';
import webdriverioIcon from '@iconify-icons/simple-icons/webdriverio';
import mochaIcon from '@iconify-icons/simple-icons/mocha';
import browserstackIcon from '@iconify-icons/logos/browserstack';
import cucumberIcon from '@iconify-icons/simple-icons/cucumber';
import cypressIcon from '@iconify-icons/simple-icons/cypress';
import seleniumIcon from '@iconify-icons/simple-icons/selenium';

export default [
  {
    id: 1,
    image: Task,
    title: 'Task Tracker',
    category: 'Dev',
    icons: [javascriptIcon, sassIcon, netlifyIcon],
    description:
      'This app fetches weather data based on your location.It uses http://openweathermap.org/ API',
    type: 'Feature',
    type_data: [
      'Geolocation',
      'Modern Icon using https://erikflowers.github.io/weather-icons/',
      'Wind direction',
      'Daylight calculation',
    ],
    demo: 'https://task-tracker-pj.netlify.app',
    github: 'https://github.com/pirasanthan-jesugeevegan/dev-task-tracker',
  },
  {
    id: 2,
    image: Weather,
    title: 'Weather App',
    category: 'Dev',
    icons: [mongodbIcon, expressIcon, reactIcon, nodeDotJs, herokuIcon],
    demo: 'https://weather-app-checker.netlify.app',
    github: 'https://github.com/pirasanthan-jesugeevegan/dev-weather-app',
  },
  {
    id: 3,
    image: Skyscanner,
    title: 'Skyscanner Mobile App',
    category: 'Automation',
    icons: [appiumIcon, webdriverioIcon, mochaIcon, browserstackIcon],
  },
  {
    id: 4,
    image: Ecommers,
    title: 'E-Commerce',
    category: 'Automation',
    icons: [cypressIcon, cucumberIcon, mochaIcon],
  },
  {
    id: 5,
    image: Perlego,
    title: 'Perlego Login',
    category: 'Automation',
    icons: [cypressIcon, cucumberIcon, mochaIcon],
  },
  {
    id: 6,
    image: Registration,
    title: 'Registration form',
    category: 'Automation',
    icons: [seleniumIcon, webdriverioIcon, cucumberIcon],
  },
  {
    id: 7,
    image: Expedia,
    title: 'Exepdia Hotel',
    category: 'Automation',
    icons: [cypressIcon, cucumberIcon, mochaIcon],
  },
];
