
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
        if(inFormExcept=="for_list"){

        }
    }

}
