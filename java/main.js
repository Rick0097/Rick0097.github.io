var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images10/norma_0.webp') {
      myImage.setAttribute ('src','images10/firefox2.png');
    } else {
      myImage.setAttribute ('src','images10/norma_0.webp');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ты как милый котеночек, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ты как милый котеночек, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
