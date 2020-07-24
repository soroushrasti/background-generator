var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

 style = window.getComputedStyle(body),
initialcolor = style.getPropertyValue('background');

console.log(initialcolor)

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background  + "\n"+ "initialcolor:" +  initialcolor ;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);