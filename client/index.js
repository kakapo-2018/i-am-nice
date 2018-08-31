import React from 'react'
import {render} from 'react-dom'
import App from './App'


var decalImage = new Image;

decalImage = 'placeholder.png';

let weaponImage = 'placeholder.png'

let haveWeapon = 0;

let hpp = 10;


function changeWeapon (weapon) {

  if (weapon == 'health'){
    hpp = 10
    console.log('heck')
    decalImage = 'health.png';
    weaponImage = 'health.png'
  }
  else if (weapon == 'knife'){

    decalImage = 'blood.png';
    weaponImage = 'wKnife.png'
  }
  else if (weapon == 'punch'){

    decalImage = 'bruise.png';
    weaponImage = 'wGlove.png'
  }
  else if (weapon == 'hammer'){

    decalImage = 'smash.png';
    weaponImage = 'wHammer.png'
  }
  else if (weapon == 'gun'){

    decalImage = 'bullethole.png';
    weaponImage = 'wGun.png'
  }

}

function startBeg() {
  const begsForLife = [
    "Please", 
    "I have a family who needs me", 
    "I don't want to die....", 
    "I am afraid of death."
  ]
  
  let thisBeg = begsForLife[Math.floor(Math.random() *begsForLife.length)]
  
  return thisBeg
}


document.addEventListener('click', function(e) {
  e = e || window.event;
  let decalImg = document.createElement('img');
  
  let offset = 230;
  
  decalImg.src = decalImage;
  decalImg.style.zIndex = -2;
  decalImg.style.position = 'absolute';
  decalImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
  decalImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';
  this.body.appendChild(decalImg);
  
  let theBeg = document.getElementById("the-beg");
  theBeg.innerHTML = startBeg();

  hpp --;

  let vision = document.getElementById('toggle_div')

  let hp = 0.3 - (hpp * 0.03)

  let fillStyle = "rgba(0, 0, 0, " + hp + ")"; 

  vision.style.backgroundColor = fillStyle



}, false);

  
  document.oncontextmenu = function (e) {
    e.preventDefault();
    let decalImg = document.getElementById('curWeapon');
    decalImg.src = "";
    return false;
  }
  
  document.addEventListener('mousemove', function(e) {
      e = e || window.event;
      var weaponImg = document.getElementById('curWeapon');
  
      let offset = 120;
  
      weaponImg.src = weaponImage
      weaponImg.style.position = 'absolute';
      weaponImg.style.zIndex = - 1;
      weaponImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
      weaponImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';
  
  }, false);
  
  
  document.addEventListener('DOMContentLoaded', () => {
    render(
    <App />,
    document.getElementById('app')
  )
})


export default changeWeapon