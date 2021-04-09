// var database = [
// {
// 	userName: "jakez",
// 	password:"master"
// }, 
// {
// 	userName:"jw",
// 	password:"weru"
// }
// ];
// var feedback = [
// {
// 	master: "Master alikuwa amelalia maskio"
// }
// ];

// var userNamePrompt = prompt("What is your userName? ");
// var passworPrompt = prompt("What is your password");

// function isUserValid(userName, password){
// 	for(var i=0;i<database.length; i++){
// 		if(userNamePrompt===database[i].userName && passworPrompt===database[i].password){
// 			return true;
// 		}

// 	}
// 	return false;
	
// }

// function signIn(userName, password){
// 	if(isUserValid(userName, password)){
// 		console.log(feedback);
// 	}
// 	else {
// 		alert("wrong password")
// 	}
// }

// signIn(userNamePrompt, passworPrompt);
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul =document.getElementById("lst");
// var lst = document.querySelectorAll("li");

// console.log(lst);

// function createList(){
// 	var li = document.createElement("li");
// 		btn = document.createElement("button");
// 		btn.appendChild(document.createTextNode("delete"));
// 		li.appendChild(document.createTextNode(input.value));
// 		li.appendChild(btn);
// 		ul.appendChild(li);
// 		input.value="";

// }

// function inputlength(){
// 	return input.value.length;

// }

// button.addEventListener("click", function(){
// 	if(inputlength()>0 ){
// 		createList();

// 	}
// })
// input.addEventListener("keypress", function(event){
// 	if(inputlength()>0 && event.keyCode===13 ){
// 		createList();

// 	}
// })
var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function backsground(){
	body.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")";
css.textContent = body.style.background + ";";
}
 

color1.addEventListener("input", backsground);
color2.addEventListener("input", backsground);