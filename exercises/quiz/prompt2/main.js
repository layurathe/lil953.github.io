console.log ("hello")

let wrapper = document.querySelector (".wrapper");
let dateDiv = document.createElement ("div");


function displayDate(){
	let date = new Date();
	wrapper.appendChild(dateDiv);
	dateDiv.classList.add ("date");
	dateDiv.innerHTML = date;
}


let button = document.querySelector(".button");




displayDate()

function clearPage(){
	dateDiv.innerHTML = " ";

}

button.addEventListener("click", clearPage);
button.addEventListener ("click", displayDate);
