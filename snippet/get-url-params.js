//正则获取url参数

function getParams(name){
    var reg=new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r=window.location.search.substr(1).match(reg);
    console.log('r',r);
    if (r != null){
        return(unescape(r[2]));
    } else{
        return null;
    };
}

var val=getParams("name");
if(val!=null){
    console.log('url中字段为 name 的参数值为，'val)
}else{
  console.log("未获取到值")
}