function check(input){
  var input_length=countLength(input.value.trim());
  var tips;
  if(input_length ===0){
    return tips=0;
  } else if (input.type==='text' || input.type==='password') {
    if (input_length>=input.minlength && input_length<=input.maxlength) {
      return tips=1;
    } else{
    return tips=2;
  }
} else if (input.type==='email') {
  if(checkEmail(input)){
    return tips=1;
  }else{
    return tips=2;
  }
}
}
//返回字符长度
function countLength(str){
  var str_length=0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i)>=0 && str.charCodeAt(i)<=128) {
      str_length+=1;
    }else{
      str_length+=2;
    }
  }
  return str_length;
}
//邮箱检验
function checkEmail(email){
  var apos=email.value.indexOf('@');
  var dotpos=email.value.indexOf('.');
  if (apos<1||dotpos-apos<2) {
    return false;
  } else{
    return true;
  }
}
