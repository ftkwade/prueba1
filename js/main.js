var num=24;
var mensaje = document.getElementById("mostrar");
var x = document.getElementById("esconde");

mensaje.style.display = "none";

function rechaza(){
    num = num + 25;
    var font=parseInt(num);
    document.getElementById('diceSi').style.fontSize=font+"px";
  }
  function acepta(){
    console.log("acepta");
    document.getElementById("imagen").src="./img/tres.jpg";
    
  
    if (mensaje.style.display === "none") {
        x.style.display = "none";
        mensaje.style.display = "block";
    } else {
        x.style.display = "none";
    }
}