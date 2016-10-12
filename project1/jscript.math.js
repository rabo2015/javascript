jscript.math.genRandomNumber=function(inMin,inMax){
    if(inMin>inMax){
        return 0;
    }
    return inMin+(inMax-inmin)*Math.random();
}//end genRandomNumber().