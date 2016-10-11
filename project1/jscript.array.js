//数组类包

//拷贝数组
jscript.array.copyArray=function(inSrcArray,inDestArray){
    
    var i;
    
    for(i=0;i<inSrcArray.length;i++){
        inDestArray.push(inSrcArray[i]);
    }
    
    return inDestArray;
}
//End copyArray(),


//查找数组元素所在的位置
jscript.array.findInArray=function(inArray,inValue){
    
    var i;
    
    for(i=0;i<inArray.length;i++){
        
        if(inArray[i]==inValue){
            return i;
        }
    }
    return -1;
}//end findInArray()

//计算素组平均值
jscript.array.arrayAverage=function(inArray){
    var i;
    var accumulator=0;
    
    for(i=0;i<inArray.length;i++){
        accumulator+=inArray[i];
        
    }
    return accumulator/inArray.length;
    
}
//end arrayAverage()