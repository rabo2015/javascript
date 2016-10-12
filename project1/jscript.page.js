jscript.page.printPage=function(){
    if(parseInt(navigator.appVersion)>=4){
        window.print();
    }
}//end printPage().

jscript.page.getParameter(){
    var retVal=null;
    var varvals=unescape(location.search.substring(1));
    if(varvals){
        var search_array=varvals.split("&");
        var temp_array=new Array();
        var j=0;
        var i=0;
        for(i=0;i<search_arry.length;i++){
            temp_array=search_array[i].split("=");
            var pName=temp_array[0];
            var pVal=temp_array[1]；
            if(inParamName==null){
                if(retval==null){
                 retVal=new Array();   
                }              
                retVal[j]=pName;
                retVal[j+1]=pVal;
                j=j+2;
            }else{
            if(pName==inParamName){
                retVal=pVal;
                break;
                }
            }
        }
    }
    return retVal;
}//end getParameters();

jscript.page.breakOutOfFrames=function(){
    if(self!=top){
        top.location=self.location;
    }
}//end breakOutOfFrames().

