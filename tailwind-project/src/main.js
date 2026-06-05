import './style.css'

// import pages
import { blog } from './pages/blog.js';

document.querySelector('#app').innerHTML = `
  ${blog()}
`;

