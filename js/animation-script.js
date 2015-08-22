// Background image slide show
// http://www.willmaster.com/
// Copyright 2008 Bontrager Connection, LLC

var imageArray = new Array(); // leave as is.

// Specify number of milliseconds between image switches.
var switchMilliseconds = 3000;

// Specify the id of the div or other HTML tag with the 
//   background image to switch.

var divID = 'main-bg';

// To add more images, continue the pattern below.

imageArray[0] = '../assets/Asset1.png';
imageArray[1] = '../assets/Asset2.jpg';
imageArray[2] = '../assets/Asset3.jpg';


// No further customization needed in this JavaScript

function publishPicture(i) {
	document.getElementsByClassName(divID).style.background = 'url("'+imageArray[i]+'")';
	i++;
	if( i > (imageArray.length - 1) ) { i = 0; }
	setTimeout('publishPicture('+i+')',switchMilliseconds);
}
publishPicture(0);

