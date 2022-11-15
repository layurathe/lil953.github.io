console.log ("hello")

let date = new Date();
let wrapper = document.querySelector (".wrapper");


function displayDate(){
	let dateDiv = document.createElement ("div");
	wrapper.appendChild(dateDiv);
	dateDiv.classList.add ("date");
	dateDiv.innerHTML = date;
}



console.log (date)

displayDate()