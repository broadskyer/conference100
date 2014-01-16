Common = {    
    post:function(url, data, success){              //一个基本的post请求封装
        $.ajax({
            url:url,
            type:"post",
            data:data,
            dataType:"json",
            error:function(){
                //Common.tip(TipData["1002"], 0);
                //ajax错误提示
            },
            success:function(data){  
                if(data && data.res != 0){
                    //Common.showError(data);
                    //错误处理code转换成文字提示给用户
                };  
                success && success(data);
            }
        });
    },
    get:function(url, data, success){              //一个基本的get请求封装
        $.ajax({
            url:url,
            type:"get",
            data:data,
            dataType:"json",
            error:function(){
                //Common.tip(TipData["1002"], 0);
                //ajax错误提示
            },
            success:function(data){  
                if(data && data.res != 0){
                    //Common.showError(data);
                    //错误处理code转换成文字提示给用户
                };  
                success && success(data);
            }
        });
    },
    getFake:function(url, data, success){
        if(url == "user/login.php"){
            success(TestData["login"]);
        }else if(url == "user/register.php"){
            success(TestData["register"]);
        }else if(url == "user/edit.php"){
            success(TestData["update-person-info"]);
        }else if(url == "user/email/change.php"){
            success(TestData["change-main-email"]);
        }else if(url == "user/email/add.php"){
            success(TestData["add-new-email"]);
        }
    },
    isEmail:function(strEmail){                     //邮箱验证
        if (strEmail.search(/^w+((-w+)|(.w+))*@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+)*.[A-Za-z0-9]+$/) != -1){
            return true;
        }
        return false;
    },
    isEmpty: function(str){                            //是否为空
        if(str.length == 0){
            return true;
        }
        return false;
    },
    isNumber: function(str){                         //数值检测
        return !isNaN(str); 
    },
    trim: function(str){                               //去除空格
        return str.replace(/(^\s*)|(\s*$)/g, ""); 
    }
};