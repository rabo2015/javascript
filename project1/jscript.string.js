
//这是一个js类
jscript.string.substrCount=function(inStr,inSearchStr){
   if(inStr==null||inStr==""||
       inSearchStr==null||inSearchStr=="" ){
       return 0;
   }
    var splitChars=inStr.split(inSearchStr);
    return inSearchStr.length-1;
}//end substrCount().

jscript.string.stripChars=function(inStr,inStripOrAllow,inCharList){
    if(inStr==null||inStr==""||
        inCharList==null||inCharList==""||
        inStripOrAllow==null||inStripOrAllow==""){
        return "";
    }
    inStripOrAllow=inStripOrAllow.toLowerCase();
    var outStr="";
    var i;
    var j;
    var nextChar;
    var keepChar;
    for(i=0;i<inStr.length;i++){
        nextChar=inStr.substr(i,1);
        if(inStripOrAllow=="allow"){
            keepChar=false;
        }else{
            keepChar=true;
        }
        for(j=0;j<inCharList.length;j++){
            checkChar=inCharList.substr(j,1)
            if(inStripOrAllow=="allow" && nextChar==checkChar){
                keepChar=true;
            }
            if(inStripOrAllow=="strip" && nextChar==checkChar){
                keepChar=false;
            }
            if(keepChar==true){
                outStr=outStr+nextChar;
            }
        }
        return outStr;
    }//end stripChars().


jscript.string.strContentValid=function(inString,inCharList,inFormExcept){
    if(inString==""||inCharList==null||inFormExcept==null||
        inString==""||inCharList==""){
        return false;
    }
    inFormExcept=inFormExcept.toLowerCase();
    var i;
    if(inFormExcept=="form_list"){
        if(inCharList.indexOf(inString.cjarAt(i))==-1){
            return false;
        }               
    }
    return true;
}//end strContentValid();



jscript.string.replace=function(inSrc,inOld,inNew){
    if(inSrc==null||inSrc==""||inOld==null||inOld==""||
      inNew==null||inNew==""){
        return "";
    }
    while(inSrc.indexOf(inOld)>-1){
        inSrc=inSrc.replace(inOld,inNew);
    }
    return inSrc;
}//end replace


jscript.string.leftTrim=function(inStr){
    if(inStr==null||inStr==""){
        return null;
    }
    var j;
    for(j=0;inStr.charAt(j)=="";j++){
        return inStr.substring(j,inStr.length);
    }
}//end leftTrim.

jscript.string.rightTrim=function(inStr){
    if(inStr==null||inStr==""){
        return null;
    }
    instr=this.leftTrim(inStr);
    instr=this.rightTrim(inStr);
    return inStr;
}//end rightTrim.


jscript.string.breakLine=function(inText,inSize){
    
    if(inText==null||inText==""||inSize<=0){
        return inText;
    }
    if(inText.length<=inSize){
        return inText;
    }
    var outArray=new Array();
    var str =inText;
    while(str.length>inSize){
        var x=str.substring(0,inSize);
        var y=x.lastIndexOf(" ");
        var z=x.lastIndexOf("\n");
        if(z!=-1){
            y=z;
        }
        if(y==-1){
            y=inSize;
        }
        outArray.push(str.substring(0,y));
        str=str.substring(y);
    }
    outArray.push(str);
    return outArray;
    
}//end break Line();
    
    
    
    
}



