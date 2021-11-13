var u = document.getElementById("link")
u.onclick= function()
{
var t = confirm("Are you sure you want to goto that page?");
	if (t == true) {
    window.open("http://ntu.edu.vn");
	}
}