var myVar;	//Variable used for assigning setInterval function
var cy,cmo,cd,ch,cmi,cs;	//Variables used for current parameters of date and time
var edate,dinput;  //end date and input in date stands for end date i.e. deadline
var ey,emo,eda,eh,emi,es,ems; //end date and time parameters
var etime; //end time input
var ed = new Date(); //date object for end date
function verify(){		//funtion to verify input values
	document.getElementById("eventmessage").innerHTML = "The booking starts in";
	var temp = 0;
	dinput = document.getElementById("dates").value;
	etime = document.getElementById("times").value;
	edate = new Date(dinput);
	var timeArray = etime.split(":");
	eh = parseInt(timeArray[0]);
	emi = parseInt(timeArray[1]);
	if( !!edate.valueOf() && !isNaN(eh) && !isNaN(emi) ){
		input();
	}
	else {
		alert("Invalid input ..." );
	}
}
function input(){ //function to save the entered values
	ey = edate.getFullYear();
	emo = edate.getMonth();
	eda = edate.getDate();
	var timeArray = etime.split(":");
	eh = parseInt(timeArray[0]);
	emi = parseInt(timeArray[1]);
	es = 0;
	ems = 0;
	var etemp = new Date(ey,emo,eda,eh,emi,es,ems);
	ed = etemp;
	if( ed < new Date() ) {
		alert("Invalid Input ... values lesser than current time ...");
	}
	else{
		alert("Deadline is on "+ed.getDate()+"/"+(ed.getMonth()+1)+"/"+ed.getFullYear()+"  "+ed.getHours()+":"+ed.getMinutes()+":"+ed.getSeconds());
		setinterval();
	}
}
function setinterval(){  //function to invoke setInterval()
	myVar = setInterval(myTime,1000);
}
function myTime(){ //function for timer
	var d = new Date(); //variable for current time
	if( ed.getSeconds() - d.getSeconds() < 0) {
		document.getElementById("secs").innerHTML = ed.getSeconds() - d.getSeconds() + 60;
		cmi = d.getMinutes() + 1;
	}
	else {
		document.getElementById("secs").innerHTML = ed.getSeconds() - d.getSeconds();
		cmi = d.getMinutes();
	}
	if( ed.getMinutes() - cmi < 0){
		document.getElementById("mins").innerHTML = ed.getMinutes() - cmi + 60;
		ch = d.getHours() + 1;
	}
	else {
		document.getElementById("mins").innerHTML = ed.getMinutes() - cmi;
		ch = d.getHours();
	}
	if( ed.getHours() - d.getHours() < 0) {
		document.getElementById("hours").innerHTML = ed.getHours() - ch + 24;
		cd = d.getDate() + 1;
	}
	else {
		document.getElementById("hours").innerHTML = ed.getHours() - ch;
		cd = d.getDate();
	}
	if( ed.getDate() - cd < 0) {
		document.getElementById("days").innerHTML = ed.getDate() - cd + noOfDays(d.getMonth());
		cmo = d.getMonth() + 1;
	}
	else{
		document.getElementById("days").innerHTML = ed.getDate() - cd;
		cmo = d.getMonth();
	}
	if( ed.getMonth() - d.getMonth() < 0) {
		document.getElementById("months").innerHTML = ed.getMonth() - cmo + 12;
		cy = d.getFullYear() + 1;
	}
	else{
		document.getElementById("months").innerHTML = ed.getMonth() - cmo;
		cy = d.getFullYear();
	}
	document.getElementById("years").innerHTML = ed.getFullYear() - cy;
	if( (ed.getFullYear() <= d.getFullYear()) && (ed.getMonth() <= d.getMonth()) && (ed.getDate() <= d.getDate()) && 
		(ed.getHours() <= d.getHours()) && (ed.getMinutes() <= d.getMinutes()) && (ed.getSeconds() <= d.getSeconds())){
		clearInterval(myVar);
		eventend();
	}
}
function noOfDays( tmon ) { // function to check no of days in the corresponding month
	if( tmon === 0 || tmon === 2 || tmon === 4 || tmon === 6 || tmon === 7 || tmon === 9 || tmon === 11 )
		return 31;
	else if( tmon === 1 )
		return 28;
	else
		return 30;
}
function stop() { //function to invoke clearInterval()
	clearInterval(myVar);
}
function reset(){ //function to reset values once reset button is pressed
	document.getElementById("dates").value = "----------";
	document.getElementById("times").value = "--:--";
	clearInterval(myVar);
	document.getElementById("years").innerHTML = 0;
	document.getElementById("months").innerHTML = 0;
	document.getElementById("hours").innerHTML = 0;
	document.getElementById("days").innerHTML = 0;
	document.getElementById("secs").innerHTML = 0;
	document.getElementById("mins").innerHTML = 0;
	document.getElementById("eventmessage").innerHTML = "The booking starts in";
	stop();
}
function eventend() { //function to change event message when event ends
	document.getElementById("eventmessage").innerHTML = "!!! The Booking Has Started !!!";
}