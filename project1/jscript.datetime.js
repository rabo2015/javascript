//日期函数,判断当前月有几天
jscript.datetime.getNumberDaysInMoth=function(inMonth,inYear){
    inMonth=inMonth-1;
    var leap_year=this.isLeapYear(inYear);
    
    if(leap_year){
        leap_year=1;
    }else{
        leap_year=0;
    }
    if(inMonth==3||inMonth==5||inMonth==8||inMonth=10){
        return 30;
    }elseif(inMonth==1){
        return 28+leap_year;
    }else{
        return 31;
    }
}//end getNumberDaysInMoth()

//闰年判断
jscript.datatime.isLeapYear=function(inYear){
    if((inYear%4==0&&!(inYear%100==0))||inYear%400==0){
        return ture;
    }else{
        return false;
    }
}//end isLeadYear()