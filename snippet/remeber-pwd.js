//前端使用cookie实现记住密码

//初始加载判断是否记住密码
    if($.cookie("accountInfo")!=null){
        var accountInfo=$.cookie("accountInfo");
        var account=accountInfo.substr(0,accountInfo.indexOf('&'));
        var pwd=accountInfo.substr(accountInfo.indexOf('&')+1,accountInfo.length);
        $("#Account").val(account);
        $("#Password").val(pwd);
    }


// （以下写在登录接口成功回调里）根据复选框选中状态决定是否记住密码
    if($('#rememberPwd').is(':checked')==true){
        if($.cookie('accountInfo')==null){
            //账户名和密码存入cookie 便于下次进来自动填入
            var accountInfo=$('#Account').val()+'&'+$("#Password").val();
            $.cookie('accountInfo',accountInfo,{expires:7});
        }
    }else{
        //未选中的时候要把上次保存的账号信息清空掉
        if($.cookie('accountInfo')!=null){
            $.cookie('accountInfo',null);
        }
    }