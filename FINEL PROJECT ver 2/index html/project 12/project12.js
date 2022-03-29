function change()
{
    var c = document.getElementById("color").style;
    switch (p)
    {
        case 1:
            c.backgroundColor = "blue";
        break;
        case 2:
            c.backgroundColor = "green";
        break;
        case 3:
            c.backgroundColor = "red";
        break;
    }
}
function send()
{
    var name = document.getElementById("1").value;
    var Fname = document.getElementById("2").value;
    var age = document.getElementById("3").value;
    var id = document.getElementById("4").value;
    var jo = document.getElementById("5").value;
    var url = encodeURI("p1="+name+"&p2="+Fname+"&p3="+age+"&p4="+id+"&p5="+jo);
    var web = "project12.html?" + url;
    /*//"?" + window.encodeURI("p1="+name);
    alert(window.encodeURI(variabels));
    var url = window.encodeURI(variabels);
    alert(url);
    */window.location = web;
}
function check()
{
    console.log(location.search);
    var check = location.search;
    if(check != "")
    {
        var arr = decodeURI(location.search.substring(1,location.search.length)).split("&");
        console.log(arr);
        document.getElementById("a").innerHTML ="your name: " + arr[0].substring(arr[0].indexOf("=")+1,arr[0].length);
        document.getElementById("b").innerHTML ="your family name: " + arr[1].substring(arr[1].indexOf("=")+1,arr[1].length);
        document.getElementById("c").innerHTML ="your age: " + arr[2].substring(arr[2].indexOf("=")+1,arr[2].length);
        document.getElementById("d").innerHTML ="your identify number: " + arr[3].substring(arr[3].indexOf("=")+1,arr[3].length);
        document.getElementById("e").innerHTML ="your prefered job: " + arr[4].substring(arr[4].indexOf("=")+1,arr[4].length);
        document.getElementById("sign").style.display = "block";
    }
}
