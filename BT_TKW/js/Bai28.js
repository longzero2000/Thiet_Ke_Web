window.onload=function myFuntion(){
	var enter=document.getElementById("Enter");
	
	enter.onclick=function(){
		var url=document.getElementById("url");
		window.open(url.value);
	}
	
}