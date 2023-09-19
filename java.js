// navbar scroll transparent
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#501e27";
  } else {
   
    document.getElementById("navbar").style.background = "#0c0c0c";
  }
}


// reveal effect 
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);



// typwriter 
// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = [" Web Designer.","Front-End Developer.",];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
if (i >= 0 ) {
typeWriterElement.innerHTML = text.substring(0, i--);
// generate a random Number to emulate backspace hitting.
 var rndBack = 10 + Math.random() * 100;
setTimeout(function() {
  delWriter(text, i, cb);
},rndBack); 
} else if (typeof cb == 'function') {
setTimeout(cb,1000);
}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
if ( i < text.length+1 ) {
typeWriterElement.innerHTML = text.substring(0, i++);
// generate a random Number to emulate Typing on the Keyboard.
var rndTyping = 250 - Math.random() * 100;
setTimeout( function () { 
  typeWriter(text, i++, cb)
},rndTyping);
} else if (i === text.length+1) {
setTimeout( function () {
  delWriter(text, i, cb)
},1000);
}
};

// the main writer function
function StartWriter(i) {
if (typeof textArray[i] == "undefined") {
setTimeout( function () {
  StartWriter(0)
},1000);
} else if(i < textArray[i].length+1) {
typeWriter(textArray[i], 0, function () {
  StartWriter(i+1);
});
}  
};
// wait one second then start the typewriter
setTimeout( function () {
StartWriter(0);
},1000);





