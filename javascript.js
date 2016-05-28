var myVar;	//Variable used for assigning setInterval function
var ed = new Date();  //ed stands for end date i.e. deadline
function verify(){		//funtion to verify range of input values
	var temp = 0;
	if(document.getElementById("year").value < 2016 || document.getElementById("year").value > 2099 || 
		document.getElementById("year").value === NaN){
		alert("Year range should be between 2016 and 2099 ...");
		temp++;
	}
	if(document.getElementById("month").value < 1 || document.getElementById("month").value > 12 || 
		document.getElementById("month").value === NaN){
		alert("Month range should be between 1 and 12 ...");
		temp++;
	}
	if(document.getElementById("date").value < 1 || document.getElementById("date").value > noOfDays(document.getElementById("month").value-1) ||
		document.getElementById("date").value === NaN){
		alert("Date range should be between 1 and "+noOfDays(document.getElementById("month").value-1)+" ...");
		temp++;
	} //noOfDays function to check range of date for corresponding months
	if(document.getElementById("hour").value < 0 || document.getElementById("hour").value > 23 ||
		document.getElementById("hour").value === NaN){
		alert("Hour range should be between 0 and 23 ...");
		temp++;
	}
	if(document.getElementById("minutes").value < 0 || document.getElementById("minutes").value > 59 ||
		document.getElementById("year").value === NaN){
		alert("Minute range should be between 0 and 59 ...");
		temp++;
	}
	if(document.getElementById("seconds").value < 0 || document.getElementById("seconds").value > 59 ||
		document.getElementById("seconds").value === NaN){
		alert("Seconds range should be between 0 and 59 ...");
		temp++;
	}
	if(!temp){
		input();
	}
}
function input(){ //function to save the entered values
	ed.setFullYear	(document.getElementById("year").value);
	ed.setMonth		(document.getElementById("month").value);
	ed.setDate		(document.getElementById("date").value);
	ed.setHours		(document.getElementById("hour").value);
	ed.setMinutes	(document.getElementById("minutes").value);
	ed.setSeconds	(document.getElementById("seconds").value);
	ed.setMilliseconds(0);
	if( ed < new Date()) {
		alert("Invalid Input ... Retry ...");
	}
	else{
		alert("Deadline is on "+ed.getDate()+"/"+ed.getMonth()+"/"+ed.getFullYear()+"  "+ed.getHours()+":"+ed.getMinutes()+":"+ed.getSeconds());
		ed.setMonth(ed.getMonth()-1);
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
		d.setMinutes(d.getMinutes() + 1);
	}
	else {
		document.getElementById("secs").innerHTML = ed.getSeconds() - d.getSeconds();
	}
	if( ed.getMinutes() - d.getMinutes() < 0){
		document.getElementById("mins").innerHTML = ed.getMinutes() - d.getMinutes() + 60;
		d.setHours(d.getHours() + 1);
	}
	else {
		document.getElementById("mins").innerHTML = ed.getMinutes() - d.getMinutes();
	}
	if( ed.getHours() - d.getHours() < 0) {
		document.getElementById("hours").innerHTML = ed.getHours() - d.getHours() + 24;
		d.setDate(d.getDate() + 1);
	}
	else {
		document.getElementById("hours").innerHTML = ed.getHours() - d.getHours();
	}
	if( ed.getDate() - d.getDate() < 0) {
		document.getElementById("days").innerHTML = ed.getDate() - d.getDate() + noOfDays(d.getMonth());
		d.setMonth(d.getMonth() + 1);
	}
	else{
		document.getElementById("days").innerHTML = ed.getDate() - d.getDate();
	}
	if( ed.getMonth() - d.getMonth() < 0) {
		document.getElementById("months").innerHTML = ed.getMonth() - d.getMonth() + 12;
		d.setFullYear(d.getFullYear() + 1);
	}
	else{
		document.getElementById("months").innerHTML = ed.getMonth() - d.getMonth();
	}
	document.getElementById("years").innerHTML = ed.getFullYear() - d.getFullYear();
	if( (ed.getFullYear() === d.getFullYear()) && (ed.getMonth() === d.getMonth()) && (ed.getDate() === d.getDate()) && 
		(ed.getHours() === d.getHours()) && (ed.getMinutes() === d.getMinutes()) && (ed.getSeconds() === d.getSeconds())){
		stop();
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
	document.getElementById("year").value = 0;
	document.getElementById("month").value = 0;
	document.getElementById("date").value = 0;
	document.getElementById("hour").value = 0;
	document.getElementById("minutes").value = 0;
	document.getElementById("seconds").value = 0;
	clearInterval(myVar);
	document.getElementById("years").innerHTML = 0;
	document.getElementById("months").innerHTML = 0;
	document.getElementById("hours").innerHTML = 0;
	document.getElementById("days").innerHTML = 0;
	document.getElementById("secs").innerHTML = 0;
	document.getElementById("mins").innerHTML = 0;
	document.getElementById("eventmessage").innerHTML = "The booking starts in";
}
function eventend() { //function to change event message when event ends
	document.getElementById("eventmessage").innerHTML = "!!! The Booking Has Started !!!";
}