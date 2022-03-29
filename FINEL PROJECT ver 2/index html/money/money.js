var dogMod = new String("false");
//var check = new String("true");
/*addEventListener("movemouse", function(pos)
{
    //setTimeout(moveDoggi, 1000);
    check == "false";
    //doogi.style.marginLeft = (pos.x-49) + "px";
    //doogi.style.marginTop = (pos.y-130) + "px";
})
if(check=="false")
{
    setTimeout(moveDoggi,2000);
}
//})*/
function moveDoggi()
{
    //var Ddogy = document.getElementById("doogi").style.marginTop;
    console.log("works")
    var Ddogx = document.getElementById("doogi").style.marginLeft;
    var Dlimitx = document.getElementById("dog").style.marginLeft; 
    //var Dlimity = document.getElementById().style.marginTop;
    var dogx = parseInt(Ddogx.substring(0, Ddogx.indexOf('p')));
    //var dogy = parseInt(Ddogy.substring(0, Ddogy.indexOf('p')));
    var limitx = parseInt(Dlimitx.substring(0, Dlimitx.indexOf('p')));
    console.log(limitx + "|" + dogx)
    var result;
    for(var i = 0; i<10;i++)
    {
        result = (dogx-10) + "px";
        document.getElementById("doogi").style.marginLeft = result;
        console.log(limitx + "|" + dogx + ", " + result);
    }
}

function moreInfo()
{
    var dog = document.getElementById("dog");
    if(dogMod == "false")
        dog.innerHTML = "click for more info!";
    else
    {
        dog.innerHTML = "";
    }
}

function barkIn()
{
    var dog = document.getElementById("dog");
    var bark = new Audio("audioM/trollDog.mp3");
    var doogi = document.getElementById("doogi").style.display = "block";
    if(dogMod == "false")
    {   
        bark.play();
        var Ddogy = document.getElementById("doogi").style.marginTop = "651px";
        var Ddogx = document.getElementById("doogi").style.marginLeft = "1400px";
        document.getElementById("dog").style.marginLeft = "0px";
        dog.style.backgroundImage = "url('picturesM/barking.gif')";
        dog.style.backgroundSize = "contain";
        dog.innerHTML =  "";
        dogMod = "true";
    }
    else
    {
        window.open("https://undertale.com/");
    }
}

function barkOut()
{
    var dog = document.getElementById("dog");
    var bark = new Audio("audioM/barking.mp3");
    bark.play();
    if(dogMod == "true")
        dog.innerHTML = "*bark!* click on me!";
    else
    {
        dog.innerHTML = "";
    }
}
function openFINAL()
{
    var contiue = true;
    var money = 99999999999999//0;
    var LOVE = 1;
    var xp = 0;
    var attackPower = 1;
    var firstTime = true;
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location.href="../../FINEL.html" + url;
}