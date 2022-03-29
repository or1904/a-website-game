var rxy = new Array();
var xy = new Array();
var times = new Array(0,0); //(מקום 0= מספר פעמים שהבדיקה הורצה, מקום 1= איזו פעולה התרחשה לפני (הגדלה או הקטנה
var values = new Array(); //0-contiue,1-money,2-love,3-xp,4-attackpower,5-if met gaster,6-price from last game, not sent

function show1()
{
    var op = document.getElementById("1").style;
    op.opacity = "100%";
    op.display = "inline";
}
function show2()
{
    var op = document.getElementById("2").style;
    op.opacity = "100%";
    op.display = "inline";
}
function show3()
{
    var op = document.getElementById("3").style;
    op.opacity = "100%";
    op.display = "inline";
}
function show4()
{
    var op = document.getElementById("4").style;
    op.opacity = "100%";
    op.display = "inline";
}
function hide1()
{
    var op = document.getElementById("1").style;
    op.opacity = "0%";
}
function hide2()
{
    var op = document.getElementById("2").style;
    op.opacity = "0%";
}
function hide3()
{
    var op = document.getElementById("3").style;
    op.opacity = "0%";
}
function hide4()
{
    var op = document.getElementById("4").style;
    op.opacity = "0%";
}
function openWeb1()
{
    var contiue = values[0];
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location = "index%20html/project%2011/project%2011.html" + url;
}
function openWeb2()
{
    var contiue = values[0];
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location = "index%20html/project%2012/project12.html" + url;
}
function openWeb3()
{
    var contiue = values[0];
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location = "index%20html/project%2013/project13.html" + url;
}
function openWeb4()
{
    var contiue = values[0];
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location = "index%20html/GAME/GAME.html" + url;
}
function enterWeb()
{
    checkEnter();
    var pic = document.getElementById("pic");
    rxy = [fun5(1536),754];
    var width = document.getElementById('pic').style.paddingLeft = "450px";
    xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    console.log("xy = "+xy[0] +" | "+ xy[1] + " ,rxy = "+rxy[0] +" | "+ rxy[1])
    rxy[2] = pic.style.paddingLeft;    //rxy[0,1] == width and height screen, rxy[2] = padding-left size in px;
}
function checkEnter()
{
    var str = decodeURI(location.search).substring(1,location.search.length);
    var Prevalues = str.split('&');
    for(var i = 0; i < Prevalues.length; i++)
        values[i] = Prevalues[i].substring(Prevalues[i].indexOf('=') + 1, Prevalues[i].length);
    if(values[0] == " " || values[0] == "")
        window.location = "index%20html/money/money.html";
    else
    {
        if(values[6] != "" && values[6] != undefined)
        {
            var price = values[6]//.substring(price.lastIndexOf(' ') + 1,value[6].length);
            alert("you got "+price+"$ Game money");
            values[1] = parseInt(values[1]) + parseInt(price);
        }
    }
}
function checkWeb()
{
    xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    var pic = document.getElementById("pic");
    console.log("web size: x="+xy[0]+" y="+xy[1]+" === x="+rxy[0] + " y=" + rxy[1]);
    nwidth = parseInt(rxy[2].substring(0,rxy[2].indexOf('p')));
    var sum = 0;
    console.log(rxy[2] + ", comparing: "+xy[0]+" [] "+rxy[0]);
    if(xy[0] > rxy[0]) //כאשר הדף מתקטן
    {
        smallIt(xy[0],rxy[0],nwidth,sum,pic);
        times[1] = -1;
    }
    else if(xy[0] < rxy[0]) //כאשר הדף גודל
    {
        biggerIt(xy[0],rxy[0],nwidth,sum,pic);
        times[1] = 1;
    }
    else //אם הדף חוזר לגודל המקורי
    {
        if(times[1] == -1)
            smallIt(xy[0],rxy[0],nwidth,sum,pic);
        else
        {
            biggerIt(xy[0],rxy[0],nwidth,sum,pic);
        }
    }
    times[0] = times[0]+1;
    console.log("==================== "+times[0]+" ====================");
}
function fun5(x)
{
    return (x*50)/100;
}
function smallIt(xy0,rxy0,nwidth,sum,pic)
{
    /*xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    var pic = document.getElementById("pic");
    nwidth = parseInt(rxy[2].substring(0,rxy[2].indexOf('p')));
    var sum = 0;*/
    
    sum = nwidth + (xy0-rxy0);
    pic.style.paddingLeft = sum + "px";
    console.log("bigger: "+sum);
}
function biggerIt(xy0,rxy0,nwidth,sum,pic)
{
    /*xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    var pic = document.getElementById("pic");
    nwidth = parseInt(rxy[2].substring(0,rxy[2].indexOf('p')));
    var sum = 0;*/
    
    sum = nwidth - (rxy0 - xy0);
    pic.style.paddingLeft = sum + "px";
    console.log("smaller: "+sum);    
}