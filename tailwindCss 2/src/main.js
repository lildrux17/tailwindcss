import './style.css'
import 'material-symbols';

import { Frontpage } from './pages/frontpage';

document.querySelector('#app').innerHTML = `
  ${Frontpage()}
`;
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

