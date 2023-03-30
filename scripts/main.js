/*

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/arbre.png') {
      myImage.setAttribute('src', 'images/arbre2.png');
    } else {
      myImage.setAttribute('src', 'images/arbre.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Entrez votre nom');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bonjour, ' + myName;
  }
  
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bonjour, ' + storedName;
  }

  myButton.addEventListener('click', function() {
    setUserName();
  });

