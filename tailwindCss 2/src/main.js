import './style.css'

import { Frontpage } from './pages/frontpage';

document.querySelector('#app').innerHTML = `
  ${Frontpage()}
`;
