var i=0;
function carrusel()
{
i++;
if(i>3) i=1
    document.getElementById("banner").setAttribute("src","banner/banner"+i+".png");

    document.getElementById("banner").style.opacity="1";
    document.getElementById("banner").style.transition="all 0.5s";

    setTimeout("desvanecer()",2000);
    
}
carrusel();

function desvanecer()
{
    document.getElementById("banner").style.opacity="0";
    document.getElementById("banner").style.transition="all 2s";

    setTimeout("carrusel()", 2000);
}

function reloj()
{
    let hora=new Date();

    let h=hora.getHours();
    let m=hora.getMinutes();
    let s=hora.getSeconds();

    var r=["am","pm"];
    var t=0;

    if(h>11)
    { 
        t=1;
    }    

    document.getElementById("reloj").innerHTML="Hora: "+(h)+":"+m+":"+s+" "+r[t];
    setTimeout("reloj()",1000);
}
reloj();

function encima(p)
{
    document.getElementsByClassName("navmenulink").item(p).style.background="#fff";
    document.getElementsByClassName("navmenulink").item(p).style.color="#424245";
}           

function salida(p)
{
    document.getElementsByClassName("navmenulink").item(p).style.background="#424245";
    document.getElementsByClassName("navmenulink").item(p).style.color="white";
}