function validate() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;
var div = document.getElementById('doimau'); 
if(u!= "1234") {
alert("Tên đăng nhập sai!");
div.style.background= "red";
return false;
}
if(p1 != "1234") {
alert("Mật khẩu nhập vào sai!");
div.style.background= "red";
return false;
}
alert("Đăng nhập thành công!");
return window.open("trangcanhan.html");
}
