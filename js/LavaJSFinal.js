/*var header_h1 = document.getElementById("header_text");
var i = 0 ;
var char = ["karem","ali"];

function write (elem , content){



 for ( var i =0 ; i <content.length ; i++)
{
	
	
	
	
	console.log(content[i]);
	console.log(i);
	console.log(content.length);
}
}

 if ( i <= content.length )
{

elem.textContent += content[i];

console.log(content[i]);
console.log(i);
console.log(content.length);
}
 
}
i+=1;

setInterval(write(header_h1 , "Lavt") , 100); 
*/






/* var work_p = document.querySelectorAll(".work p");
var work_img = document.querySelectorAll(".work img");

function move(elem) {
	"use strict";
	elem.style.top = "-50px";
	
}
function returnn() {
	"use strict";
	work_p[0].style.top = "-20px";

}

var te = work_p[0];

work_img[0].addEventListener("mouseover", move(te));
work_img[0].addEventListener("mouseleave", returnn);
*/
 /* var sound = document.getElementById("blob");
var webdes = document.querySelectorAll("#webdesign img");
var dev = document.querySelectorAll("#dev img");
var mob = document.querySelectorAll("#mob img");
var supp = document.querySelectorAll("#supp img");
var brand = document.querySelectorAll("#brand img");
var res = document.querySelectorAll("#res img")
function blob(){
	sound.play();

}

webdes[0].addEventListener("mouseover",blob);
res[0].addEventListener("mouseover",blob);
dev[0].addEventListener("mouseover",blob);
brand[0].addEventListener("mouseover",blob);
mob[0].addEventListener("mouseover",blob);
supp[0].addEventListener("mouseover",blob);
*/
var model_anwar = document.getElementsByClassName("model")[0];
function show_anwar() {
model_anwar.style.display="block";

}
var te = document.getElementById("anw");

te.addEventListener("click",show_anwar);

var span_anwar = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span_anwar.onclick = function() {
var model_anwar = document.getElementsByClassName("model")[0];
  model_anwar.style.display = "none";
}



var model_karem = document.getElementsByClassName("model")[1];
function show_karem() {

model_karem.style.display="block";

}
var tek = document.getElementById("kar");

tek.addEventListener("click",show_karem);

var span_karem = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span_karem.onclick = function() {
var model_karem = document.getElementsByClassName("model")[1];
  model_karem.style.display = "none";
}




var model_osama = document.getElementsByClassName("model")[2];
function show_osama() {

model_osama.style.display="block";

}
var teo = document.getElementById("osa");

teo.addEventListener("click",show_osama);

var span_osama = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span_osama.onclick = function() {
var model_osama = document.getElementsByClassName("model")[2];
  model_osama.style.display = "none";
}


/* flip the images */

$(".serv img").mouseenter(function () {
    $(".serv img").addClass("animated flip");

})

$(".work img").mouseenter ( function () {
    $(".work p").css("top" , "20px")

})
