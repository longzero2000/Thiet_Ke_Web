window.onload=function myFuntion(){
	//Cong
	document.getElementById("cong").onclick=
	function PhepCong(){
		var m=document.getElementById("tinh");
		var x=parseInt(m.x.value);
		var y=parseInt(m.y.value);
		var kq=x+y;
		m.kq.value=kq;
	}
	//Tru
	document.getElementById("tru").onclick=
	function PhepTru(){
		var m=document.getElementById("tinh");
		var x=parseInt(m.x.value);
		var y=parseInt(m.y.value);
		var kq=x-y;
		m.kq.value=kq;
	}
	//Nhan
	document.getElementById("nhan").onclick=
	function PhepNhan(){
		var m=document.getElementById("tinh");
		var x=parseInt(m.x.value);
		var y=parseInt(m.y.value);
		var kq=x*y;
		m.kq.value=kq;
	}
	//Chia
	document.getElementById("chia").onclick=
	function PhepChia(){
		var m=document.getElementById("tinh");
		var x=parseInt(m.x.value);
		var y=parseInt(m.y.value);
		var kq=x/y;
		m.kq.value=kq;
	}
	//Mu
	document.getElementById("mu").onclick=
	function TinhMu(){
		var m=document.getElementById("tinh");
		var x=parseInt(m.x.value);
		var y=parseInt(m.y.value);
		var kq=Math.pow(x,y);
		m.kq.value=kq;
	}
	
}