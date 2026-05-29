
import './tailwind.css'
import { test,heightWidth,paddingMargin, flexBox,buttons, animation, Transform, Background, Grid } from './tailwind';

document.querySelector('#app').innerHTML = ` 

  ${heightWidth()}
  ${paddingMargin()}
  ${flexBox()}
  ${buttons()}
  ${animation()}
  ${Transform()}
  ${Background()}
  ${Grid()}
`;