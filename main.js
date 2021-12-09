function c1(){
    var flag=document.getElementById("flag1").value ;
    if (md5(flag) == "c6f11fe5c5b4c68ca9cef02ce27059bd"){
        m=document.getElementById("web").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("web").innerHTML= n;
        document.getElementById("btn1").disabled = true;
    }
}
function c2(){
    var flag=document.getElementById("flag2").value ;
    if (md5(flag)== "7aed653cee9fc30c621ae5f83814ccef"){
        m=document.getElementById("web").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("web").innerHTML= n;
        document.getElementById("btn2").disabled = true;
    }
}
function c3(){
    var flag=document.getElementById("flag3").value ;
    if (md5(flag)== "d51cff7b638044e0154b2d1ab4fdb2a6"){
        m=document.getElementById("web").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("web").innerHTML= n;
        document.getElementById("btn3").disabled = true;
    }
}
function c4(){
    var flag=document.getElementById("flag4").value ;
    if (md5(flag)== "f5e3f10f422350a9d18d3d06dc4da71e"){
        m=document.getElementById("web").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("web").innerHTML= n;
        document.getElementById("btn4").disabled = true;
    }
}
function c5(){
    var flag=document.getElementById("flag5").value ;
    if (md5(flag)== "02931f6d23cb734df678621de9d6be86"){
        m=document.getElementById("crypto").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("crypto").innerHTML= n;
        document.getElementById("btn5").disabled = true;
    }
}
function c6(){
    var flag=document.getElementById("flag6").value ;
    if (md5(flag)== "d0e48859d946bf813e11bf263133ee9d"){
        m=document.getElementById("crypto").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("crypto").innerHTML= n;
        document.getElementById("btn6").disabled = true;
    }
}
function c7(){
    var flag=document.getElementById("flag7").value ;
    if (md5(flag)== "35e55b1d642877e8e2e1033125e50caf"){
        m=document.getElementById("crypto").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("crypto").innerHTML= n;
        document.getElementById("btn7").disabled = true;
    }
}
function c8(){
    var flag=document.getElementById("flag8").value ;
    if (md5(flag)== "08d31258c3e37aa16a00e2ca7af4cb8c"){
        m=document.getElementById("crypto").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("crypto").innerHTML= n;
        document.getElementById("btn8").disabled = true;
    }
}
function c9(){
    var flag=document.getElementById("flag9").value ;
    if (md5(flag)== "4f7ece9c65989a3154c1adeebb7234f1"){
        m=document.getElementById("reverse").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("reverse").innerHTML= n;
        document.getElementById("btn9").disabled = true;
    }
}
function c10(){
    var flag=document.getElementById("flag10").value ;
    if (md5(flag) == "08d31258c3e37aa16a00e2ca7af4cb8c"){
        m=document.getElementById("reverse").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("reverse").innerHTML= n;
        document.getElementById("btn10").disabled = true;
    }
}
function c11(){
    var flag=document.getElementById("flag11").value ;
    if (flag== "12345"){
        m=document.getElementById("reverse").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("reverse").innerHTML= n;
        document.getElementById("btn11").disabled = true;
    }
}
function c12(){
    var flag=document.getElementById("flag12").value ;
    if (flag== "12345"){
        m=document.getElementById("reverse").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("reverse").innerHTML= n;
        document.getElementById("btn12").disabled = true;
    }
}
function c13(){
    var flag=document.getElementById("flag13").value ;
    if (md5(flag)== "6cd0e6601f4e0902dd58167d06cfec23"){
        m=document.getElementById("osint").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("osint").innerHTML= n;
        document.getElementById("btn13").disabled = true;
    }
}
function c14(){
    var flag=document.getElementById("flag14").value ;
    if (md5(flag)== "08d31258c3e37aa16a00e2ca7af4cb8c"){
        m=document.getElementById("osint").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("osint").innerHTML= n;
        document.getElementById("btn14").disabled = true;
    }
}
function c15(){
    var flag=document.getElementById("flag15").value ;
    if (flag== "12345"){
        m=document.getElementById("osint").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("osint").innerHTML= n;
        document.getElementById("btn15").disabled = true;
    }
}
function c16(){
    var flag=document.getElementById("flag16").value ;
    if (flag== "12345"){
        m=document.getElementById("osint").innerHTML;
        n=parseInt(m);
        n=n+10;
        document.getElementById("osint").innerHTML= n;
        document.getElementById("btn16").disabled = true;
    }
}
function total(){
    m1=document.getElementById("web").innerHTML ;
    n1=parseInt(m1);
    m2=document.getElementById("crypto").innerHTML ;
    n2=parseInt(m2);
    m3=document.getElementById("crypto").innerHTML ;
    n3=parseInt(m3);
    m4=document.getElementById("crypto").innerHTML ;
    n4=parseInt(m4);
    document.getElementById("total").innerHTML = n1+n2+n3+n4;
}