 window.onload=function TimeNow(){

    var now= new Date();
    var h = now.getHours();
    var min = now.getMinutes();
    var s = now.getSeconds();
    min = checkTime(min);
    s = checkTime(s);
 
    document.getElementById("time").innerHTML =
    "Bây giờ là "+h+":"+min+":"+s;
	var t = setTimeout(TimeNow, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}