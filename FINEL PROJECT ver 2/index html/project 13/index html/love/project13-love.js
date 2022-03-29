var values = new Array(); //0-contiue,1-money,2-love,3-xp,4-attackpower
var maxlevel;

function prepare()
{   
    var str = decodeURI(location.search).substring(1,location.search.length);
    var Prevalues = str.split('&');
    for(var i = 0; i < Prevalues.length; i++)
        values[i] = Prevalues[i].substring(Prevalues[i].indexOf('=') + 1, Prevalues[i].length);
    buildStates()
}
function buildStates()
{
    
    
    var strMoney = document.getElementById("smoney");
    var strLOVE = document.getElementById("slove");
    var strXp = document.getElementById("slevel");
    if(maxlevel != "max")
        maxlevel = Math.pow(2,values[2]);
    
    strMoney.innerHTML = "Current Money: " + values[1] + "$";
    strLOVE.innerHTML = "Current LOVE: " + values[2];
    strXp.innerHTML = "Current XP: " + values[3] + "/ " + maxlevel;
}
function back()
{
    var contiue = values[0];
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime);
    window.location = "../../project13.html" + url;
}

function purches1()
{
    var xp = 2;
    var cost = 1;
    buy(xp, cost)
}
function purches2()
{
    var xp = 4;
    var cost = 3;
    buy(xp, cost)
}
function purches3()
{
    var xp = 16;
    var cost = 9;
    buy(xp, cost)
}
function purches4()
{
    var xp = 64;
    var cost = 27;
    buy(xp, cost)
}
function purches5()
{
    var xp = 256;
    var cost = 81;
    buy(xp, cost)
}
function purches6()
{
    var xp = 1024;
    var cost = 243;
    buy(xp, cost)
}
function purches7()
{
    var xp = 4096;
    var cost = 729;
    buy(xp, cost)
}
function purches8()
{
    var xp = 16384;
    var cost = 2187;
    buy(xp, cost)
}
function purches9()
{
    var xp = 65536;
    var cost = 6561;   
    buy(xp, cost)
}
function purches10()
{
    var xp = 262144;
    var cost = 19683;   
    buy(xp, cost)
}
function buy(xp, cost)
{
    var money =  parseInt(values[1]);
    var love = parseInt(values[2]);
    var Cxp = parseInt(values[3]);
    var max = parseInt(maxlevel);
    
    if(money >= cost && love < 20) 
    {
        money -= cost;
        Cxp += xp;
        console.log(money + " " + Cxp + " " + love);
        while(max <= Cxp)
        {
            console.log("love: " + love + ", Cxp: "+Cxp);
            love++;
            Cxp -= max;
            max = Math.pow(2,love);
        }
        if(love == 20)
        {
            max = "max";
            Cxp = "max";
        }
        console.log("love: " + love + ", Cxp: "+Cxp);
        values[1] = money;
        values[2] = love;
        values[3] = Cxp;
        maxlevel = max;
        
        buildStates();
        console.log(values[1] + " " + values[2] + " " + values[3]+ " " + maxlevel);
    }
}