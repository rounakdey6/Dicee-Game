var n1= Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+n1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
var n2= Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(n1>n2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw"
}
