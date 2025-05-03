let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am a new tag!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();