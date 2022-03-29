var values = new Array(); //0-contiue,1-money,2-love,3-xp,4-attackpower,5-visited

var Gsorces = new Image();
var Gsound = new Array();
var heartSrc = new Image();
var heartSound = new Array();
Gsorces[0] = "pictures/gaster-sunmon%20glf.gif";
Gsorces[1] = "pictures/gaster%20glf.gif";
Gsorces[2] = "pictures/gaster-hit%20glf.gif"
Gsorces[3] = "pictures/gaster-excited%20glf.gif";

Gsound[0] = new Audio("audio/gaster%20blaster.mp3");

heartSrc[0] = "pictures/batte-start.gif";
heartSrc[1] = "pictures/fight-none.png";
heartSrc[2] = "pictures/fight-doged.gif";
heartSrc[3] = "pictures/fight-hit.gif";

heartSound[0] = new Audio("audio/battle%20start%20sound%20effect.mp3");
heartSound[1] = new Audio("audio/taking%20damege%20sound%20effect.mp3");
heartSound[2] = new Audio("audio/full%20hit%20sound%20effect.mp3");

var theme = new Audio("audio/game%20theme.mp3");

var maxtime;
var time = 0;
var active = true;

var rxy = new Array();
var xy = new Array();
var times = new Array(0,0); //(מקום 0= מספר פעמים שהבדיקה הורצה, מקום 1= איזו פעולה התרחשה לפני (הגדלה או הקטנה

var i=0; var contiue = 0;


function prepareAndWait()
{
    var box1 = document.getElementById("anima1");
    var box2 = document.getElementById("anima2");
    var text = document.getElementById("g");
    box1.style.display = "none";
    box2.style.display = "none";
    text.style.display = "none";
    prepare();
}
function startAndWait()
{
    var check = values[5];
    if((check != "false")&& active)
    {
        active = false;
        values[5]=false;
        startAnima();
    }
    else if(active)
    {
        active = false;
        chechWebMulti();
        var box1 = document.getElementById("anima1");
        var box2 = document.getElementById("anima2");
        var text = document.getElementById("g");
        document.getElementById("focus").style.display = "none";
        var finish = false;
        startBattle(box1,box2,text,finish);
    }
}
function startAnima()
{ 
    document.getElementById("focus").style.display = "none";
    var box1 = document.getElementById("anima1");
    var box2 = document.getElementById("anima2");
    var text = document.getElementById("g");
    chechWebMulti();
    var theme = new Audio("audio/gaster-summon.mp3");
    theme.play();
    var gas = document.getElementById("gaster");
    gas.src = Gsorces[0];
    setTimeout(function(){dialog(box1,box2,text,gas)},18100);
}
function dialog(box1,box2,text,gas)
{
    box1.style.display = "block";
    box2.style.display = "block";
    text.style.display = "block";
    gas.style.display = "none";
    var b = new Array();
    maxtime = 60;//97;
    show(box1,box2,"DARKER DARKER AND YET DARKER");
    b[0] = setTimeout(function(){swich(box1,box2,b)},5880);
    b[1] = setTimeout(function(){swich(box1,box2,b)},11360);
    var finish = setTimeout(function(){startBattle(box1,box2,g,finish)},20020);
}
function show(box1,box2,string)
{
    var talkingG = new Audio("audio/gaster%20talking.mp3");
    talkingG.play();
    document.getElementById("g").innerHTML = string;
    box1.style.paddingLeft = "99%";
    box1.style.marginLeft = "0%";
    box2.style.paddingLeft = "99%";
    box2.style.marginLeft = "0%";
    var a = setInterval(function(){showing(box1,box2,a,talkingG)},80);
    time=0;
}
function showing(box1,box2,a,talkingG)
{
    console.log(time);
    if(time >= maxtime)
    {
        talkingG.pause();
        clearInterval(a);
        contiue++;
    }
    if(time < 49)
    {
        box1.style.paddingLeft = (parseInt(box1.style.paddingLeft.substring(0,(box1.style.paddingLeft.indexOf("%")))) - 2) + "%";
        box1.style.marginLeft = (parseInt(box1.style.marginLeft.substring(0,box1.style.marginLeft.indexOf("%"))) + 2) + "%";
    }
    else //if(times > 49)
    {
        box2.style.paddingLeft = (parseInt(box2.style.paddingLeft.substring(0,(box2.style.paddingLeft.indexOf("%")))) - 2) + "%";
        box2.style.marginLeft = (parseInt(box2.style.marginLeft.substring(0,box2.style.marginLeft.indexOf("%"))) + 2) + "%";
    }
    time++;
}
function swich(box1,box2,b)
{
    switch (contiue)
    {
        case 1:
            clearTimeout(b[0]);
            console.log("b canceled 1");
            maxtime = 63;//97;
            show(box1,box2,"AND MY EYES ARE SEEING NO HOPE");
            break;
        case 2:
            clearTimeout(b[1]);
            console.log("b canceled 2");
            maxtime = 97;
            show(box1,box2,"BUT WITH YOUR SOUL I WILL BE ABLE TO FREE");
            break;
    }
}
// ==========================================================================================================================================================================================================================================

/*function enterWeb()
{
    //var pic = document.getElementById("frame");
    //rxy = [fun5(1536),754];
    //var width = document.getElementById("frame").style.marginLeft = "500px"; //<------------
    //xy[0] = parseInt(fun5(window.innerWidth));
    //xy[1] = parseInt(window.innerHeight);
    //console.log("xy = "+xy[0] +" | "+ xy[1] + " ,rxy = "+rxy[0] +" | "+ rxy[1])
    rxy[2] = pic.style.marginLeft;    //rxy[0,1] == width and height screen, rxy[2] = padding-left size in px;
}*/
var animaId = new Array("g","gaster","hp","heart","textbox","Headbut1","endtext","anima1","anima2");
var Size =    new Array("71px","11px","704px","500px","423px","352px","-206px","80px","80px");

function WaitchechWebMulti()
{
    chechWebMulti();
    setTimeout(function(){chechWebMulti()},1000); //in case of delay
}
function chechWebMulti()
{
    var selected,size;
    for(i;i<animaId.length;i++)
    {
        selected = document.getElementById(animaId[i]);
        if(i == 0)
            size = selected.style.fontSize = Size[i];
        else if(i > 0 && i < 7)
        {
            size = selected.style.marginLeft = Size[i]; 
        }
        else
        {
            size =selected.style.paddingBottom = Size[i];
        }
        checkWeb(selected,size);
    }
    i=0;
}
function checkWeb(selected,size)
{
    rxy = [fun5(1536),754];
    //var size = document.getElementById("g").style.fontSize = "70px";
    xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    var pic = selected; //<---------------
    //rxy[2] = pic.style.fontSize;
    console.log("web size: x="+xy[0]+" y="+xy[1]+" === x="+rxy[0] + " y=" + rxy[1]);
    nwidth = parseInt(size.substring(0,size.indexOf('p')));
    var sum = 0;
    console.log(size + ", comparing: "+xy[0]+" [] "+rxy[0]);
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
    
    sum = nwidth + 9*(xy0-rxy0)/100;
    if(i == 0)
        pic.style.fontSize = sum + "px";
    else if(i > 0 && i < 7)
    {
        sum = nwidth + (xy0-rxy0);
        pic.style.marginLeft = sum + "px";
    }
    else
    {
        pic.style.paddingBottom = sum + "px";
    }
    console.log("bigger: "+sum);
}
function biggerIt(xy0,rxy0,nwidth,sum,pic)
{
    /*xy[0] = parseInt(fun5(window.innerWidth));
    xy[1] = parseInt(window.innerHeight);
    var pic = document.getElementById("pic");
    nwidth = parseInt(rxy[2].substring(0,rxy[2].indexOf('p')));
    var sum = 0;*/
    
    sum = nwidth - 9*(rxy0 - xy0)/100;
    if(i == 0)
        pic.style.fontSize = sum + "px";
    else if(i > 0 && i < 7)
    {
        sum = nwidth - (rxy0 - xy0);
        pic.style.marginLeft = sum + "px";
    }
    else
    {
        pic.style.paddingBottom = sum + "px";
    }
    console.log("smaller: "+sum);    
}

//===================================================================================================================

//===================================================================================================================

var changeBut = -1; //<---------------------------------------------------- for buttons

function changeBut1()
{
    var button1 = document.getElementById("Headbut1");
    var button2 = document.getElementById("but2");
    var button3 = document.getElementById("but3");
    var str = "";
    
    if(button1.style.borderColor != "orangered")
    {
        str += "by focus on attacking, your attack chances increase by 30%!";
        attackCondition += 30;
        if(changeBut == 2)
        {
           str += " but by forgeting dodging, you decreased your avoid chance by 35%!";
           conditionAvoid-=35;
        }
        else if(changeBut == 3)
        {
            str += " but by forgetting healing, your heal chances have changed back to attack chances!";
        }
        addChat(str)
    }
    
    button1.style.borderColor = "orangered";
    button1.style.color = "orangered";
    
    button2.style.borderColor = "orange";
    button2.style.color = "orange";
    button3.style.borderColor = "orange";
    button3.style.color = "orange";
    changeBut = 1;
}

function changeBut2()
{
    var button1 = document.getElementById("Headbut1");
    var button2 = document.getElementById("but2");
    var button3 = document.getElementById("but3");
    var str = "";
    
    if(button2.style.borderColor != "orangered")
    {
        str += "by focus on dodging, you increase your avoid chance by 25%!";
        conditionAvoid+=25;
        if(changeBut ==1)
        {
            str += " but by forgetting attacking, your attack chances decreased by 30%";
            attackCondition -= 30;
        }
        else if(changeBut == 3)
        {
            str += " but by forgetting healing, your heal chances have changed back to attack chances!";
        }
        addChat(str);
    }
    button2.style.borderColor = "orangered";
    button2.style.color = "orangered";
    
    button1.style.borderColor = "orange";
    button1.style.color = "orange";
    button3.style.borderColor = "orange";
    button3.style.color = "orange";
    changeBut = 2;
}

function changeBut3()
{
    var button1 = document.getElementById("Headbut1");
    var button2 = document.getElementById("but2");
    var button3 = document.getElementById("but3");
    var str = "";
    
    if(button3.style.borderColor != "orangered")
    {
        if(healTimes > 0)
        {
            str += "by focus on healing, in exchange from your attack chances, you could heal!";
            if(changeBut == 1)
            {
                str += " but by forgetting attacking, your attack chances decreased by 30%";
                attackCondition -= 30;
            }
            else if(changeBut == 2)
            {
                str += " but by forgeting dodging, you decreased your avoid chance by 25%!";
                conditionAvoid -= 25;
            }
            addChat(str);
            changeBut = 3;
        }
        else
        {
            addChat("your inventory is empty, you cant heal yourself anymore");
        }
        
        button3.style.borderColor = "orangered";
        button3.style.color = "orangered";
    
        button2.style.borderColor = "orange";
        button2.style.color = "orange";
        button1.style.borderColor = "orange";
        button1.style.color = "orange";

    }
}

function hoverBut1()
{
    var button1 = document.getElementById("Headbut1");
    if(button1.style.borderColor != "orangered")
    {
        button1.style.borderColor = "yellow";
        button1.style.color = "yellow";
    }
}
function hoverBut2()
{
    var button2 = document.getElementById("but2");
    if(button2.style.borderColor != "orangered")
    {
        button2.style.borderColor = "yellow";
        button2.style.color = "yellow";
    }
}
function hoverBut3()
{
    var button3 = document.getElementById("but3");
    if(button3.style.borderColor != "orangered")
    {
        button3.style.borderColor = "yellow";
        button3.style.color = "yellow";
    }
}
function cancelhoverBut1() 
{
    var button1 = document.getElementById("Headbut1");
    if(button1.style.borderColor != "orangered")
    {
        button1.style.borderColor = "orange";
        button1.style.color = "orange";
    }
}
function cancelhoverBut2() 
{
    var button2 = document.getElementById("but2");
    if(button2.style.borderColor != "orangered")
    {
        button2.style.borderColor = "orange";
        button2.style.color = "orange";
    }
}
function cancelhoverBut3() 
{
    var button3 = document.getElementById("but3");
    if(button3.style.borderColor != "orangered")
    {
        button3.style.borderColor = "orange";
        button3.style.color = "orange";
    }
}

// ===================================================battle start from here=========================================

//===================================================================================================================
var health = new Array(); //0-yours, 1- gaster's health
var savemaxhealth;
var healTimes = 5;
var numOfSurviveTurns = 0;
var numOfHits = 0;

function prepare()
{
    var str = decodeURI(location.search).substring(1,location.search.length);
    var Prevalues = str.split('&');
    for(var i = 0; i < Prevalues.length; i++)
        values[i] = Prevalues[i].substring(Prevalues[i].indexOf('=') + 1, Prevalues[i].length);
    health[0] = values[2] * 4 + 16;
    if(values[2] == 20)
        health[0] += 3;
    savemaxhealth = health[0];
    buildStates();
}
function addChatNewLine(str)
{
    var chatBox = document.getElementById("textbox");
    var pastStr = chatBox.innerHTML.substring(chatBox.innerHTML.indexOf('*'),chatBox.innerHTML.length);
    chatBox.innerHTML = "--> * " + str + "\n\n\n" + pastStr;
}
function addChat(str)
{
    var chatBox = document.getElementById("textbox");
    pastStr = chatBox.innerHTML.substring(chatBox.innerHTML.indexOf('*'),chatBox.innerHTML.length);
    chatBox.innerHTML = "--> * " + str + "\n\n" + pastStr;
}
function buildStates()
{
    var hp = document.getElementById("hp");
    var love = document.getElementById("level");
    hp.innerHTML = "HP " + health[0] + " / " + savemaxhealth;
    love.innerHTML = "LV "+ values[2];
}
function startBattle(box1,box2,g,finish)
{
    clearTimeout(finish);
    box1.style.display = "none";
    box2.style.display = "none";
    g.style.display = "none";
    heartSound[0].play();
    var heart = document.getElementById("heart");
    heart.src = heartSrc[0];
    heart.style.display = "block";
    setTimeout(function(){battle(heart)},2500);
}
function battle(heart)
{
    //set size 50%:    
    setSize(document.getElementById("gaster"),256,256);
    Size[1] = "130px";
    setSize(document.getElementById("heart"),250,274);
    Size[3] = "627px";
    chechWebMulti();
    //-----------------------------------------
    health[1] = 100000; //gaster health
    var hp = document.getElementById("hp");
    var love = document.getElementById("level");
    love.style.display = "block";
    hp.style.display = "inline"/*"block"*/;
    heart.src = heartSrc[1];
    heart.style.display = "block";
    var gas = document.getElementById("gaster");
    heartSound[0].pause();
    theme.play();
    var themeTime = setInterval(function(){loopTheme(themeTime)},1000);
    gas.src = Gsorces[1];
    gas.style.display = "block";
    var gam = document.getElementById("game").style.display = "block";
    var blaster = setTimeout(function(){loopGasterBlaster()},4000);
    var fight = setInterval(function(){randomResult(gas,heart,fight)},5200);
}

function setSize(elm,x,y)
{
    elm.style.width = x + "px";
    elm.style.height = y + "px";
}
function loopTheme(themeTime)
{
    theme.play();
    if(finish)
    {
        theme.pause();
        clearInterval(themeTime);
    }
}
function loopGasterBlaster()
{
    if(!(finish))
        Gsound[0].play();
    else
    {
        Gsound[0].pause();
    }
}
  
var conditionAvoid = 41; //<--------------------------------------------------- conditionAvoid
var attackCondition = 41; //<----------------------------------------------------- attackCondition

function randomResult(gas,heart,fight)
{
    var result = parseInt(Math.random()*100) + 1; //40%-doeged, 60%-hited by gaster
    var blaster = setTimeout(function(){loopGasterBlaster()},4000);
    if(!(health[0] < 1 || health[1] < 1 || conditionAvoid > 100 || conditionAvoid < 1))
    {
        if(result < conditionAvoid)
        {
            heart.src = heartSrc[2];
            addChatNewLine("You succsefully avoided the attack, your avoid chances have been increased by 2%!");
            conditionAvoid += 2;
            attackYou(gas);
        }
        else
        {
            heart.src = heartSrc[3];
            addChatNewLine("You have been hit, your avoid chances have been decreased by 2%!");
            heartSound[1].play();
            conditionAvoid -= 2;
            beAttacked();
        }
        numOfSurviveTurns++;
        checkIfLost(fight);
    }
    if(conditionAvoid > 75)
        warn("high");
    else if(conditionAvoid < 35)
    {
        warn("low");
    }
    else
    {
        warn("none");
    }
    console.log("random result:" + result + ", currect avoid chances: "+conditionAvoid + ", currect attack chances: "+attackCondition);
}
function checkIfLost(fight)
{
    if(health[0] < 1 || health[1] < 1)
    {
        setTimeout(function(){end(50,fight)},2000);
    }
    /*else if(health[1] < 1)
    {
        setTimeout(function(){end(50,fight)},2000);
    }*/
    else if(conditionAvoid > 100 || conditionAvoid < 1)
    {
        setTimeout(function(){end(conditionAvoid,fight)},2000);
    }
}
function beAttacked(heart)
{
    var textDamege = document.getElementById("damege");
    var damege = parseInt(Math.random() * 9) + parseInt(values[2]/2) + 3;
    health[0] -= damege;
    textDamege.innerHTML = "-"+damege;
    textDamege.style.display = "inline";
    buildStates();
    setTimeout(function(){cleanAllDamege()},2000);
}

function attackYou(gas)
{
    var result = parseInt(Math.random()*100) + 1; //60%/30%- nothing, 40%/70%- attack, 0%/20% - heal;
    var hitChance = parseInt(Math.random()*100) + 1; //60%- hit, 40%- miss
    console.log("result on attaking you: "+result);
    if(result < attackCondition) //attack
    {
        if(changeBut == 3)
            heal();
        else
        {
            gas.src = Gsorces[2];
            heartSound[2].play();
            addChat("you attacking...");
            if(hitChance < 61) //attack
                setTimeout(function(){deal(values[4])},2000);
            else
            {
                setTimeout(function(){deal("miss")},2000);
            }
        }
    }
    //none
}

function deal(damege)
{
    var gashealthbar = document.getElementById("gasHealth");
    var gasHealth = document.getElementById("textGasHealth");
    var gashealthLeft = document.getElementById("healthLeft");
    if(damege != "miss")
    {
        health[1] -=damege;
        numOfHits++;    
    }
    gashealthLeft.innerHTML = " (" + health[1] + "hp left)";
    gashealthLeft.style.display = "block";
    gashealthbar.style.display = "block";
    gasHealth.innerHTML = damege;
    gasHealth.style.display = "block";
    setTimeout(function(){cleanAllDamege()},2000);
}

function heal()
{
    healTimes--;
    var textDamege = document.getElementById("damege");
    var button3 = document.getElementById("but3");
    addChat("your healed has maxed up");
    health[0] = savemaxhealth;
    textDamege.innerHTML = "->"+savemaxhealth;
    textDamege.style.color = "#40ff00";
    textDamege.style.display = "inline";
    button3.innerHTML = "(" + healTimes + ") Items";
    buildStates();
    setTimeout(function(){cleanAllDamege()},2000);
}
function cleanAllDamege()
{
    var gashealthbar = document.getElementById("gasHealth");
    var gasHealth = document.getElementById("textGasHealth");
    var textDamege = document.getElementById("damege");
    var gas = document.getElementById("gaster");
    var gashealthLeft = document.getElementById("healthLeft");
    var button3 = document.getElementById("but3");
    gas.src = Gsorces[1];
    gashealthLeft.style.display = "none";
    gashealthbar.style.display = "none";
    gasHealth.style.display = "none";
    textDamege.style.display = "none";
    textDamege.style.color = "red";
    if(healTimes < 1)
    {
        changeBut = -1;
        button3.style.borderColor = "orange";
        button3.style.color = "orange";
    }
}

function warn(check)
{
    var textWarn = document.getElementById("warning");
    if(check == "high")
    {
        textWarn.innerHTML = "you are avoiding too much! "+(parseInt(((100-conditionAvoid))/2)+1)+" turns before loosing!";
        textWarn.style.display = "block";
    }
    else if(check == "low")
    {
        textWarn.innerHTML = "you are been hit too much! "+(parseInt((conditionAvoid)/2)+1)+" turns before loosing!";
        textWarn.style.display = "block";
    }
    else //none
    {
        textWarn.style.display = "none";
    }
}

var finish = false;

function end(conditionAvoid,fight)
{
    clearInterval(fight);
    var gam = document.getElementById("game").style.display = "none";
    var gas = document.getElementById("gaster");
    var heart = document.getElementById("heart");
    var text = document.getElementById("endtext");
    text.style.display = "block";
    heart.src = heartSrc[1];
    finish = "true";
    if(conditionAvoid > 100)
    {  
        text.innerHTML = "D E T E R M I N A T I O N";
        setTimeout(function(){endGame(1,gas,text)},6000);
    }
    else if(conditionAvoid < 1)
    {
        text.innerHTML = "PATHETIC";
        setTimeout(function(){endGame(2,gas,text)},6000);
    }
    else
    {
        if(health[0] < 1)
        {
            text.innerHTML = "IS THAT WHAT YOUR SOUL CAN DO?";
            setTimeout(function(){endGame(3,gas,text)},6000);
        }
        else
        {
            text.innerHTML = "WELL DONE, YOU OVERCOME ME";
            setTimeout(function(){endGame(4,gas,text)},6000);
        }
    }
}
function endGame(end,gas,text)
{
    text.style.display = "none";
    gas.src = Gsorces[3];
    if(end == 1)
        setTimeout(function(){crazyText("ferwell")},3000);
    else if(end == 2)
    {
        setTimeout(function(){crazyText("but be happy, your death will be significant")},3000);
    }
    else if(end == 3)
    {
         setTimeout(function(){crazyText("go to the shop and be better next time")},3000);
    }
    else
    {
         setTimeout(function(){crazyText("but have you forgot who from us is the ruler?")},3000);
    }
}
function crazyText(t)
{
    var text = document.getElementById("endtext")
    text.style.font = "50px";
    Size[5] = "611px";
    text.innerHTML = t;
    text.style.marginTop = "10%";
    chechWebMulti();
    text.style.display = "block";
    setTimeout(function(){crushGame()},5000);
}
function crushGame()
{
    var contiue;
    if(health[1] > 0)
        contiue = values[0];
    else
    {
        contiue = false;
        alert("THANK YOU FOR PARTICIPATING IN MY EXPERINENT")
        alert("RESET action completed...");
        var contiue = true;
        var money = 0;
        var LOVE = 1;
        var xp = 0;
        var attackPower = 1;
        var firstTime = true;
        var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime + "&state7="+price);
        window.location = "../../FINEL.html" + url; //reset =)
    }
    var money = values[1];
    var LOVE = values[2];
    var xp = values[3];
    var attackPower = values[4];
    var firstTime = values[5];
    var price = (numOfSurviveTurns * values[2]+ numOfHits * values[2]) * values[2];
    var url = "?" + decodeURI("state1=" + contiue + "&state2=" + money + "&state3=" + LOVE + "&state4=" +xp + "&state5=" + attackPower + "&state6="+firstTime + "&state7="+price);
    document.getElementById("body").style.marginLeft = "50%";
    setTimeout(function(){
        alert("ERROR: GASTER_DETERMINED_CONTROL is not defined (666.js at EXPERIMENT)"); 
        window.location = "../../FINEL.html" + url;
    },1000);
}



