function getCookie(name){
    var arr = [];
    var reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return  decodeURIComponent(arr[2]);
    }else{
        return null;
    }
}
function getACSRFToken(url) {
    var skey;
    url || (url = '');
    if(url.indexOf('qzone.qq.com/')>-1){
        skey = getCookie("p_skey");
    }else if(url.indexOf('qq.com')>-1){
        skey =getCookie("skey");
    }
    if(!skey){
        skey = getCookie("p_skey") || getCookie("skey");
    }
    return arguments.callee._DJB(skey);
}
getACSRFToken._DJB = function(str) {
    var hash = 5381;
    for (var i = 0,
             len = str.length; i < len; ++i) {
        hash += (hash << 5) + str.charAt(i).charCodeAt();
    }
    return hash & 0x7fffffff;
}
