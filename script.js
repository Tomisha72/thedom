// alert("hello world");
var imageNumber = 1;
var imageName = "images/classProject-";
var imageId = "classPoject-";
var mainImage = document.getElementById("main_image");

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");


function goNext(){

  if( imageNumber<5) {
    hideImage(imageId + imageNumber);
imageNumber = imageNumber + 1;
var newSrc = imageName + imageNumber + ".jpg";
console.log(newSrc);
mainImage.src = newSrc;
}
}

function goBack(){
  if( imageNumber>1) {
    var showImage = document.getElementById(imageId);
imageNumber = imageNumber - 1;
var newSrc = imageName + imageNumber + ".jpg";
console.log(newSrc);
mainImage.src = newSrc;
}
}
nextButton.onclick = goNext;



var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

console.log(mainImage.src, nextButton, prevButton);
//on click
function goNext() {
  if( imageNumber < 5 ) {
    imageNumber = imageNumber + 1;
    var newSrc = imageName + imageNumber + ".jpg";
    console.log(newSrc);
    mainImage.src = newSrc;
  }
}

function goBack() {
  if( imageNumber > 1 ) {
    imageNumber = imageNumber - 1;
    var newSrc = imageName + imageNumber + ".jpg";
    console.log(newSrc);
    mainImage.src = newSrc;
  }
}

nextButton.addEventListener("click"), goNext;

prevButton.addEventListener("click"), goBack;
