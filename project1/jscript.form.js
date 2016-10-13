/**
 * Created by Lenovo on 2016/10/12.
 */
jscript.form.formToXML=function(inForm,inRootElement){
    if(inForm==null){
        return null;
    }
    if(inRootElement==null){
        return null;
    }
    var outXML="<"+inRootElement+">";
    var i;
    for(i=0;i<inForm.length;i++){
        var ofe=inForm[i];
        var ofeType=ofe.type.toUpperCase();
        var ofeName=ofe.name;
        var ofeValue=ofe.value;
        if(ofeType=="TEXT"||ofeType=="HIDDEN"||ofeType=="PASSWORD"
            ||ofeType=="SELECT-ONE"
            ||ofeType=="TEXTAREA"){
            outXML+="<"+ofeName+">"+ofeValue+"</"+ofeName+">"
        }
        if(ofeType=="RADIO" && ofe.checked==true){
            outXML+="<"+ofeName+">"+ofeValue+"</"+ofeName+">"
        }
        if(ofeType=="CHECKBOX"){
            if(ofe.checked==true){
                cbval="true";
            }else{
                cbval="false";
            }
            outXML=outXML+"<"+ofeName+">"+cbval+"</"+ofeName+">"
        }
        outXML+="";
    }
    outXML+="</"+inRootElement+">";
    return outXML;
}//end formToXML


jscript.form.selectLocateOption=function(inSelect,inValue,
                                          inJustFind,inCaseInsensitvie){
    if(inSelect==null||
      inValue==null||invalue==""||
      inCaseInsensitvie==null||
      inJustFind==null){
        return;
    }
    if(inCaseInsensitvie){
        nextVal=nextVal.toLowerCase();
    }
    var found=false;
    var i;
    
    for(i=0;(i<inSelect.length)&&!found;i++){
        var nextVal=inSelect.options[i].value;
            if(inCaseInsensitvie){
        nextVal=nextVal.toLowerCase();
    }
        if(nextVal==inValue){
            found=true;
            if(!inJustFind){
                inSelect.options[i].selected=true;
            }
        } 
    }
    return found;
}//end selectLocateOption().



jscript.form.selectSelectAll=function(inSelect){
    if(inSelect==null||!inSelect.options||inSelect.options.length==0){
        return;
    }
    var i;
    for(i=0;i<inSelect.options.length;i++){
        inSelect.options[i].selected=true;
    }
}//end selectSelectAll().




