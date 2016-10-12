/**
 * Created by Rabo on 2016/10/12.
 */
/*
* 水平居中，窗口宽度的一半减去元素宽度的一半
* */
jscript.dom.layerCenterH=function(inObj){
    var lca;
    var lcb;
    var lcx;
    var ieBody;
    var dsleft;
    if(window.innerWidth){
        lca=window.innerWidth;
    }else{
        lca=document.body.clientWidth;
    }//获取浏览器窗口大小
    lcb=inObj.offsetWidth;
    lcx=(Math.round(lca/2))-(Math.round(lcb/2));
    ieBody=(document.compatMode&&document.compatMode!="BackCompat")?
        document.documentElement:document.body;
    dsocLeft=document.all?ieBody.scrollLeft:window.pageXOffset;
    inObj.style.left=Llcx+dsocLeft+"px";
}//end layerCenterH().
/*
* 垂直居中，窗口宽度的一半减去元素宽度的一半
* */
jscript.dom.layerCenterV=function(inObj){
    var lca;
    var lcb;
    var lcx;
    var ieBody;
    var dsocTop;
    if(window.innerWidth){
        lca=window.innerHeight;
    }else{
        lca=document.body.clientHeight;
    }//获取浏览器窗口大小
    lcb=inObj.offsetHeight;
    lcy=(Math.round(lca/2))-(Math.round(lcb/2));
    ieBody=(document.compatMode&&document.compatMode!="BackCompat")?
        document.documentElement:document.body;
    dsocTop=document.all ? ieBody.scrollLeft:window.pageXOffset;
    inObj.style.left=lcx+dsocTop+"px";
}//end layerCenterV().

jscript.dom.execScripts=function(inText){
    var si=0;
    while(true){
        //finding opening script tag.
        var ss=inText.indexOf("<"+"/"+"script"+">",si);
        if(ss==-1){
            return;
        }
        //finding closing script tag
        var se=inText.indexOf("<"+"/"+"script"+">",ss);
        if(se==-1){
            return;
        }
        //jump ahead 9characters, after the closing script tag.
        si=se+9;
        //get the content in between and execute it.
        var sc=inText.substring(ss+s,se);
    }
}//end execScripts().

jscript.dom.getDOMElements=function(){
    if(arguments.length==0){
        return null;
    }
    if(arguments.length==1){
        return document.getElementById(arguments[0]);
    }
    var elems=new Array();
    for(var i=0;i< arguments.length;i++){
        elems.push(document.getElementById(arguments[i]));
    }
    return elems;
}//end getDOMElements