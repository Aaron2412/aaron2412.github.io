function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //这个正则是寻找&+url参数名字=值+&,&可以不存在。
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null)return  unescape(r[2]); return null;
}

if (GetQueryString("alert") == "true") {
    alert("API IS TRIGGERED")
}