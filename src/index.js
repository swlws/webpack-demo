import _ from 'lodash';
import './style.css';
import img from './sky.jpg';
import Data from './data.xml';
import printMe from './print.js';
import { cube } from './math.js'

console.log(process.env.NODE_ENV)

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  console.log(Data);

  return element;
}

function component_btn() {
  var btn = document.createElement('button');
  btn.innerHTML = `click me and check the console`;
  btn.onclick = printMe;

  return btn;
}

document.body.appendChild(component());
document.body.appendChild(component_btn());