function square(n){
  return n*n
}

function askForName(){
  var n = parseInt(document.getElementById("user-input").value);
  if(isNaN(n)){
    document.getElementById("first-ptag").innerHTML = "That is not a number";
  }else{
    document.getElementById("first-ptag").innerHTML = "The square of your favorite number is: " + square(n);
  }
}
