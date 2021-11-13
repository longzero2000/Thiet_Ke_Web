document.getElementById("check").onclick = function ()
            {
                var checkbox = document.getElementsByName("bai20");
                for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
                        alert("Số bạn chọn là: "+checkbox[i].value);
                    }
                }
            };