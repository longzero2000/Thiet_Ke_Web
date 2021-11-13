window.onload=function Event(){
	var click=document.getElementById("click");
	click.onclick=function(){
		var p=document.getElementById("pass");
		var lb=document.getElementById("nhappass");
		var cl=document.getElementById("click");
		if(p.type==="password"){
			p.type="text";
			np.innerHTML="Hiển thị Password";
			cl.value="Click để ẩn Password";
		}
		else{
			p.type="password";
			np.innerHTML="Nhập Password";
			cl.value="Click để hiển thị Password";
		}
	}
}