import React from 'react'
import {render} from 'react-dom'
import App from './App'


var decalImage = new Image;

decalImage = 'bullethole.png';

let weaponImage = 'wGun.png'


function changeWeapon (weapon) {
  if (weapon == 'knife'){

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





document.addEventListener('click', function(e) {
    e = e || window.event;
    var decalImg = document.createElement('img');

    let offset = 120;

    decalImg.src = decalImage;
    decalImg.style.zIndex = -2;

    decalImg.style.position = 'absolute';
    decalImg.style.height = '150px';
    decalImg.style.width = '150px';
    decalImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
    decalImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';
    this.body.appendChild(decalImg);
}, false);




document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})

export default changeWeapon