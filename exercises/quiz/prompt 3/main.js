console.log ("hello");


let wrapper = document.querySelector (".wrapper");
let dateDiv = document.createElement ("div");


let otherText = document.createElement ("span");
let colors = ["red", "orange", "yellow", "green", "blue"];


let randIndex = Math.floor(Math.random() * colors.length);
let randColor = colors[randIndex];



function displayDate(){
	let date = new Date();
	wrapper.appendChild(dateDiv);
	wrapper.appendChild(otherText);
	dateDiv.classList.add ("date");
	otherText.classList.add("other");
	otherText.innerHTML = "the time is ";
	dateDiv.innerHTML = date; 
	dateDiv.setAttribute("src",randColor);

}

function clearPage(){
	dateDiv.innerHTML = " ";

}



displayDate();
setInterval(displayDate, 1000);





