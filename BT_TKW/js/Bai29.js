window.onload=function myFuntion(){
	var kt=document.getElementById("kt");
	kt.onclick=function (){
		var user=document.getElementById("user");
		var pass=document.getElementById("pass");
		var pass2=document.getElementById("pass2");
		//Không nhập thông tin 1 trong 3 ô
		if((user.value.length==0) || (pass.value.length==0) || (pass2.value.length==0)){
			alert("Thiếu thông tin đăng nhập.");
			user.style.backgroundColor="yellow";	
			pass.style.backgroundColor="yellow";
			pass2.style.backgroundColor="yellow";
		}
		else{
			user.style.backgroundColor="white";	
			pass.style.backgroundColor="white";
			pass2.style.backgroundColor="white";
			//Tên đăng nhập ít hơn 6 ký tự
			if(user.value.length<6){
				
				user.style.backgroundColor="yellow";	
				alert("Lỗi tên đăng nhập!");
			}
			else{
				user.style.backgroundColor="white";
			}
			//Mật khẩu nhập lại khác mật khẩu cũ
			if(pass.value!=pass2.value){

				pass.style.backgroundColor="yellow";
				pass2.style.backgroundColor="yellow";
				alert("Mật khẩu nhập lại không đúng!");
			}
			else{
				pass.style.backgroundColor="white";
				pass2.style.backgroundColor="white";
			}	
		}	
	}
}