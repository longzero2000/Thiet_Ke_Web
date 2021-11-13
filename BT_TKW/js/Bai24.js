window.onload=function Time(){
	var today=new Date();
	var d=today.getDate();
	var m=today.getMonth()+1;
	var y=today.getFullYear();
	document.getElementById("day").innerHTML=
		"Hôm nay, ngày "+d+" tháng "+m+" năm "+y;
}