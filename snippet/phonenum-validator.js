//jquery 实时控制输入的手机号格式

$("#PhoneInput").on("input",function(){
  var val=$("#PhoneInput").val();
  var Reg1 = /^1$/,
      Reg2 = /^1[3-8]$/,
      Reg3 = /^1[3-8]\d{1,9}$/;
      // Reg4 = /^((\+?86)|(\(\+86\)))?([1]+[3-8]+\d{9})$/;
  if(val.length == 1 && !Reg1.test(val)){
      $("#PhoneInput").val("");
  }else if(val.length == 2 && !Reg2.test(val)){
      $("#PhoneInput").val(val.substring(0,val.length-1));
  }else if(val.length > 2 && val.length <= 11 && !Reg3.test(val)){
      $("#PhoneInput").val(val.substring(0,val.length-1));
  }else if(val.length > 11){
      $("#PhoneInput").val(val.substring(0,val.length-1));
  }
})