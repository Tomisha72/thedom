// alert("hello world");
var imageNumber = 1;
var imageName = "images/classProject-";
var mainImage = document.getElementById("main_image");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
console.log (mainImage.src, nextButton, prevButton);


function goNext(){
  
  if( imageNumber<5) {
imageNumber = imageNumber + 1;
var newSrc = imageName + imageNumber + ".jpg";
console.log(newSrc);
mainImage.src = newSrc;
}
}

function goBack(){
  if( imageNumber>1) {
imageNumber = imageNumber - 1;
var newSrc = imageName + imageNumber + ".jpg";
console.log(newSrc);
mainImage.src = newSrc;
}
}
nextButton.onclick = goNext;

prevButton.onclick = goBack;
