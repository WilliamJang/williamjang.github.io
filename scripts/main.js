
//This code changes main image, when user click the image.
var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefoxIcon.png'){
		myImage.setAttribute('src','images/chromeIcon.png');
	} else{
		myImage.setAttribute('src', 'images/firefoxIcon.png');
	}
}

//This code changes main string, when user type thier name.
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')){
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

function setUserName(){
	var myName = prompt('Plase enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}