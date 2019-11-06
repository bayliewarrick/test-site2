let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let BackgroundImg = myImage.getAttribute('class');
    if(mySrc === 'images/profile.jpg') {
        myImage.setAttribute('src', 'images/computer.png');
    } else {
        myImage.setAttribute('src', 'images/profile.jpg');
    }
}

let myButton = document.querySelector('button');
let myWelcome = document.querySelector('p');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myWelcome.textContent = 'Welcome to BaylieMedia, ' + myName.toUpperCase();
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myWelcome.textContent = 'Welcome to BaylieMedia, ' + storedName.toUpperCase();
  } 

  myButton.onclick = function() {
      setUserName();
  }