let sootImgArray = ['../../graphics/sootm2.jpg', 
'../../graphics/sootm3.jpg',
'../../graphics/sootm4.jpg',
'../../graphics/sootm5.jpg',
'../../graphics/sootm6.jpg',
'../../graphics/sootm7.jpg'];

let button = document.querySelector(".button");
let myImage = document.getElementById("mainImg");




function randSootImg() {
	let randIndex = Math.floor(Math.random() * sootImgArray.length);
	let randSoot = sootImgArray[randIndex];
	myImage.setAttribute("src",randSoot);
};


button.addEventListener("click", randSootImg());

button.addEventListener("click", function(event) {
  console.log(event, event.target);
});