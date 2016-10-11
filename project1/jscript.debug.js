//debug包
jscript.debug.enumProps=function(inObj){
    
    var props="";
    var i;
    
    for(i in inObj){
        props+=i+"="+inObj[i]+"\n";
    }
    alert(props);
}//end enumProps


//DivLogger类函数
jscript.debug.DivLogger=function(){
    /**the following are faux constants that define the various levels a log
     * instance can be set to output.
     *
     */
     this.LEVEL_TRACE=1;
    this.LEVEL_DEBUG=2;
    this.LEVEL_INFO=3;
    this.LEVEL_WARN=4;
    this.LEVEL_ERROR=5;
    this.LEVEL_FATAL=6;

    
    /*
        *these are the font colors for each logging level.
    */
    
    this.LEVEL_TRACE_COLOR="a0a000";
    this.LEVEL_DEBUG_COLOR="64c864";
    this.LEVEL_INFO_COLOR="000000";
    this.LEVEL_WARN_COLOR="0000ff";
    this.LEVEL_ERROR_COLOR="FF8C00";
    this.LEVEL_FATAL_COLOR="ff0000"; 
    /*
        *logLevel determines the minimum message level the instance
    */    
    this.logLevel=3;
    
    /*
        *ttargetDIV is the DIV object to output to.
    */
    this.targetDiv=null;
}
