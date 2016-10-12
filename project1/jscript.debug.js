/**
 * Created by Lenovo on 2016/10/12.
 */

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

    /**
     *this function is used top set the minimum level a log instance will show.
     * @pram inlevel one of the level contstans. any message at this level
     * or a higher level will be displayed, orhers will not.
     *
     */
    this.setLevel=function(inLevel){
        this.logLevel=inLevel;
    }//end setLevel().

    /*
    * this function is used to set the target div that all messages are
    * written to. note that when you call this. the div's existing contents
    * are cleared out
    *
    * @param inTargetDiv the div object that all messages are written to.
    * .
    * *
    * /
    this.setTargetDiv=function(inTargetDiv){
        this.targetDiv=inTargetDiv;
        this.targetDiv.innerHTML="";
    }//end setTargetDiv().

     /**
     *this function is called to determine if a particular message meets or
     * exceeds the current level of the log instance and should therefore be
     * logged
     *
     * @parm inLevel the level of the message being checked
     */

    this.shouldBeLogged=function(inLevel){
        if(inLevel >= this.logLevel){
            return true;
        }else{
            return false;
        }
    }//end shouldBeLogged().
    /*
    * this function logs messages at trace level.
    * @parm inMessages the message to log.
    * */

    this.trace=function(inMessage){
        if(this.shouldBeLogged(this.LEVEL_TRACE)&&this.targetDiv){
            this.targetDiv.innerHTML +=
                "<div style='color:#"+this.LEVEL_TRACE_COLOR+";'>"+"[TRACE]"+inMessage+"</div>";
        }
    }//end trace();

}//end DivLogger().

