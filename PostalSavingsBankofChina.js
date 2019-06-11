//-------------------------第一个淡入淡出轮播图------------------------------------------

var oOL=document.getElementById('OL');
var oIMG=oOL.getElementsByTagName('img');
var oUL=document.getElementById("UL");
var oA=oUL.getElementsByTagName("a");
var IMGbanner=document.getElementById("IMGBanner");
var j=0;
var timer=setInterval(seet,3000);
function seet()
{
    j++;
    seting();
}
oOL.onmouseout=function(){
    timer=setInterval(seet,3000);
}
IMGbanner.onmouseover=function () {
    clearInterval(timer);
    // setTimeout();
    oIMG[j].style.animation="none";
}
for(var i=0;i<oA.length;i++){
    oA[i].index=i;
    oA[i].onclick=function(){
        j=this.index;
        seting();
        clearInterval(timer);
        // oIMG[j].style.animation="none";
        return false;
    }
}
function seting() {
    if(j===8) {j=0;}
    // alert(j);
    for(var i=0;i<oIMG.length;i++)
    {
        oIMG[i].style.display="none";
        oA[i].id=" ";
    }
    oA[j].id="click";
    oIMG[j].style.display="block";
    oIMG[j].style.animation="rote 3s infinite";
}
//---------------------------------------------游乐好卷左右轮播图-------------------------------------------
var List=document.getElementById("A");
var ListImg=List.getElementsByTagName("img");
var YOULE=document.getElementById("youleo");
var ListA=YOULE.getElementsByTagName("a");
var Youlewang=document.getElementById("YOULEWANG");
var Leftdot=document.getElementById("left-o");
var Rightdot=document.getElementById("right-o");
var timeo=setInterval(youle,3000);
var k=0;
function youle()
{
    k++;
   look();
}
Youlewang.onmouseover=function () {
    clearInterval(timeo);
}
Youlewang.onmouseout=function () {
    timeo=setInterval(youle,3000);
}
for(var a=0;a<ListA.length;a++)
{
    ListA[a].index=a;
    ListA[a].onclick=function () {
        k=this.index;
        look();
        return false;
    }
}
Leftdot.onclick=function () {
    for (var z = 0; z < ListA.length; z++) {
        ListA[z].id = " ";
    }
    if (k === 2) {
        k = 0;
    }
    if (k === 0)
    {
    ListImg[1].style.left = "-276px";
    ListImg[1].style.transition = "all 3s";
    ListImg[k].style.left = "0px";
    ListImg[k].style.transition = "all 3s";
    ListA[1].id = "dotto";
    k++;
    return false;
    }
    if (k === 1)
    {
        ListImg[0].style.left = "-276px";
        ListImg[0].style.transition = "all 3s";
        ListImg[k].style.left = "0px";
        ListImg[k].style.transition = "all 3s";
        ListA[0].id = "dotto";
        k++;
        return false;
    }
}
Rightdot.onclick=function () {
    for (var z = 0; z < ListA.length; z++)
    {
        ListA[z].id = " ";
    }
    if (k === 2) {
        k = 0;
    }
    if (k === 0)
    {
        ListImg[1].style.left = "-276px";
        ListImg[1].style.transition = "all 3s";
        ListImg[k].style.left = "0px";
        ListImg[k].style.transition = "all 3s";
        ListA[1].id = "dotto";
        k++;
        return false;
    }
    if (k === 1)
    {
        ListImg[0].style.left = "-276px";
        ListImg[0].style.transition = "all 3s";
        ListImg[k].style.left = "0px";
        ListImg[k].style.transition = "all 3s";
        ListA[0].id = "dotto";
        k++;
        return false;
    }
}
function look()
{
    for (var z = 0; z < ListA.length; z++) {
        ListA[z].id = " ";
    }
    if (k === 2) {
        k = 0;
    }
    if (k === 1) {
        ListImg[k].style.left = "-276px";
        ListImg[k].style.transition = "all 3s";
        ListImg[0].style.left = "0px";
        ListImg[0].style.transition = "all 3s";
        ListA[k].id = "dotto";
    }
    console.log(k);
    if (k === 0)
    {
        ListImg[k].style.left = "-276px";
        ListImg[k].style.transition = "all 3s";
        ListImg[1].style.left = "0px";
        ListImg[1].style.transition = "all 3s";
        ListA[k].id = "dotto";
    }
}
//邮储新闻切换
var News=document.getElementById("youchunews");
var Caigou=document.getElementById("caigou");
var Cenbot=document.getElementById("CENBOT");
var Centop=document.getElementById("CENTOP");
News.onmouseover=function () {
    Cenbot.style.display="block";
    Centop.style.display="none";
}
Caigou.onmouseover=function () {
    Cenbot.style.display="none";
    Centop.style.display="block";
}


//选项卡
var Loop=document.getElementById("loop");
var LoopList=Loop.getElementsByClassName("Color");
console.log(LoopList.length);
for(var c=0;c<LoopList.length;c++)
{
    LoopList[c].onmouseenter=function () {
        for(var d=0;d<9;d++){
            LoopList[d].id=" ";
        }
       this.id="Coloro";
    }
    Loop.onmouseleave=function () {
        for(var d=0;d<9;d++){
            LoopList[d].id=" ";
        }
        LoopList[0].id="Coloro";
    }
}
//新闻轮播图
var LBN=document.getElementById("YOUchunew");
var Lucy=document.getElementById("lucy");
var TOPO=document.getElementById("topo");
var BOTO=document.getElementById("boto");
console.log(BOTO);
var num=0;
var kock=setInterval(jock,2000);
function jock()
{
    if(num===5){num=0}
    LBN.style.transition="all 2s";
    LBN.style.top=-50 * num + 'px';
    num++;
}
Lucy.onmouseover=function () {
    clearInterval(kock);
}
Lucy.onmouseout=function () {
    kock=setInterval(jock,2000);
}
BOTO.onclick=function () {
    if(num===5){num=0}
    LBN.style.transition="all 2s";
    LBN.style.top=-50 * num + 'px';
    num++;
    return false;
}
TOPO.onclick=function () {
    if(num===0){num=5}
    num--;
    LBN.style.transition="all 2s";
    LBN.style.top=-50 * num + 'px';
    return false;
}
//银行卡轮播图
var Lunbop=document.getElementById("LUNBOP");
var OPU=document.getElementById("ooop");
var dotleft=document.getElementById("dot-left");
var dotright=document.getElementById("dot-right");
// console.log(dotleft);
var numm=0;
var koook=setInterval(kckk,2000);
function kckk() {
    if(numm===12){numm=0}
    Lunbop.style.transition="all 2s";
    Lunbop.style.left=-224 * numm +'px';
    numm++;
}
OPU.onmouseenter=function () {
    clearInterval(koook);
}
OPU.onmouseleave=function () {
    koook=setInterval(kckk,2000);
}
dotleft.onclick=function () {
    if(numm===0){numm=12}
    numm--;
    Lunbop.style.transition="all 2s";
    Lunbop.style.left=-224 * numm +'px';
    return false;
}
dotright.onclick=function () {
    if(numm===12){numm=0}
    Lunbop.style.transition="all 2s";
    Lunbop.style.left=-224 * numm +'px';
    numm++;
    return false;
}

