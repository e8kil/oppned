var count=0;
var kort1;
var kort2;
var valg;
var height;
var width;
var oppnedstorre;
var countstorre;
var allekort = [];
var content;
var content1;
var radius;
var margin;
$(document).ready( function () {
	height = $(window).height()*0.6;
	oppnedstorre = $(window).height()*0.10;
	countstorre = $(window).height()*0.08;
	content = $(window).height();
	console.log(content);
	margin = $(window).height()*0.0311;
	$("#ned,#newgame").css("margin-top",margin+"px");
	$("#newgame").css("line-height",content*0.0738+"px");
	radius = $(window).height()*0.0233;
	$("#kort,#opp,#ned,#count,#newgame").css("border-radius",radius);
	content1 = $(window).width();
	console.log(content1);
	$("body").css("background-size",content+"px"+ content1+"px");
	$("html").css("height",content);
	$("#content").height(content-20);
	$("#tap").height(height);
	width = height*0.687;
	$("#content").width(width);
	$("#opp").html("<img src='./pics/up1.png' style='margin:0 auto; opacity: 1; border-radius:10px;' alt='card' height='"+oppnedstorre+"px'  width='30%;'>");
	$("#ned").html("<img src='./pics/down1.png' style='margin:0 auto; opacity: 1; border-radius:10px;' alt='card' height='"+oppnedstorre+"px'  width='30%;'>");
	$("#count1").css("height",countstorre);
	$("#count").css("height",countstorre);
	$("#count").css("line-height",content*0.0838+"px");
	$("#count").css("font-size",countstorre*0.9);
	$("#newgame").css("font-size",countstorre*0.8);
	$("#newgame").css("height",countstorre*0.9);
	console.log(width);
	$("#newgame").hide();
	kort();
	console.log(content);
});

function kortNr() {
	var a = Math.floor((Math.random() * 14) + 1);
	if(a==1){
		a=14;
		return a;
	}
	else{
		return a;
	}
}
function kortType() { 
	var a = Math.floor((Math.random() * 4) + 1);
	if(a==1){
		b = "_of_clubs";
	}
	else if (a==2){
		b = "_of_diamonds";
	}
	else if (a==3){
		b = "_of_hearts";
	}
	else{
		b = "_of_clubs";
	}
	return b;
}
function kort(){
	var kort1 = kortNr();
	var b = kortType();
	var kortogtype = kort1+b;
	var kortogtype1 = kortogtype;
	console.log(kortogtype);
	if(jQuery.inArray(kortogtype,allekort) == -1){

		if(count<=0){
			$("#kort1").html("<img src='./pics/"+kortogtype+".png' style='border-radius:10px;' alt='card' height='"+height+"px; width='"+width+"px;'>");
			$("#count").html(1);
			allekort[count]= kort1+b;
			kort2 = kort1;
			count++;
		}
		else {
			count++;
			$("#kort1").html("<img src='./pics/"+kortogtype+".png' style='border-radius:10px;' alt='card' height='"+height+"px; width="+width+"px;'>");
			if(valg==1){
				if(kort2<=kort1){
					$("#count").html(count);
					allekort[count]= kort1+b;
					kort2=kort1;
				}
				else {
					if ("vibrate" in navigator) {
						navigator.vibrate(1000);
					}				
					$("#kort").css({"background-image": "url('./pics/wrong1.png')"});
					$("#kort").css("height",height+"px");
					$("#kort1").css("opacity","0.5");
					$("#opp").hide();
					$("#ned").hide();
					$("#count1").css("height",countstorre*2.3);
					$("#count1").css({"width": "60%"});
					$("#count").css("height",countstorre*2.2);
					$("#count").css("line-height",content*0.178+"px");
					$("#count").css("font-size",(countstorre*0.9)*2.5);
					$("#count").html(count);
					$("#newgame").show();
					count=0;
					allekort= [];
				}
			}
			else {
				if(kort2>=kort1){
					$("#count").html(count);
					allekort[count]= kort1+b;
					kort2=kort1;
				}
				else {
					if ("vibrate" in navigator) {
						navigator.vibrate(1000);
					}
					$("#kort").css({"background-image": "url('./pics/wrong1.png')"});
					$("#kort").css("height",height+"px");
					$("#kort1").css("opacity","0.5");
					$("#opp").hide();
					$("#ned").hide();
					$("#count1").css("height",countstorre*2.3);
					$("#count1").css({"width": "60%"});
					$("#count").css("height",countstorre*2.2);
					$("#count").css("line-height",content*0.178+"px");
					$("#count").css("font-size",(countstorre*0.9)*2.5);
					$("#count").html(count);
					$("#newgame").show();
					count=0;
					allekort= [];
				}
			
			}
		}
		console.log(allekort);
	}

	else {
	kort();
	}
}


$(this).keydown(function (e) {
	if(count!=0){
		var keyCode = e.keyCode || e.which,
			arrow = {left: 37, up: 38, right: 39, down: 40 };

		switch (keyCode) {
			case arrow.up:
				valg = 1;
				kort();
			break;
			case arrow.down:
				valg = 2;
				kort();
			break;
		}
	}
});
$("#opp").click(function(){
	if ("vibrate" in navigator) {
    navigator.vibrate(30);
	}
	valg = 1;
	kort();
});
$("#ned").click(function(){
	if ("vibrate" in navigator) {
		navigator.vibrate(30);
	}
	valg = 2;
	kort();
});

function newGame(){
	$("#count").css("line-height",content*0.0838+"px");
	$("#count").css("height",countstorre);
	$("#count1").css("height",countstorre);
	if ("vibrate" in navigator) {
		navigator.vibrate(30);
	}
	$("#newgame").hide();
	$("#kort1").css("opacity","1");
	$("#count").css("font-size",countstorre*0.9);
	$("#count1").css({"width": "30%"});
	$("#kort").css({"background-image": "none"});
	$("#opp").show();
	$("#ned").show();
	kort();
}
$("#newgame").click(function(){
	newGame();
});
$(document).keypress(function(e) {
	if(count===0){
		if(e.which == 13) {
			newGame();
		}
	}
});

$("#newgame").mouseover(function(){
  $(this).css("background-color","#505050");
});
$("#newgame").mouseout(function(){
  $(this).css("background-color","green");
});
$("#startpaanytt").click(function(){
	location.reload();
});

