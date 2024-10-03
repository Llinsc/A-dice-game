var randomNumber = Math.floor(Math.random() *6) + 1;
var randomImage = "dice" + randomNumber + ".png";
var imageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber1 = Math.floor(Math.random() *6) +1;
var randomImage1 ="dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomImage1;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource1);
 //if a player wins 
if (randomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Nesh Wins!";
}
else if (randomNumber1 > randomNumber) {
  document.querySelector("h1").innerHTML = "Ciko Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
