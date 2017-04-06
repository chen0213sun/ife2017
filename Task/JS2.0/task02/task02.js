function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}
$ = function(el) {
    return document.querySelector(el);
};
$$ = function(el) {
    return document.querySelectorAll(el);
};
var content=$('#name input'),
    key=$('#key input'),
    keyconfirm=$('#keyconfirm input'),
    email=$('#email input'),
    phone=$('#phone input');
    var spans = $$('span');
//字符串长度检测
function check(str) {
    var str_length = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 128) {
            str_length += 1;
        } else {
            str_length += 2;
        }
    }
    return str_length;
}

//验证颜色改变事件
function chagneColor(input,span,tips){
  if(tips===true){
    input.style.borderColor="green";
    span.style.color = 'green';
  } else if (tips===false) {
    input.style.borderColor="red";
    span.style.color = 'red';
  }
}

//名称检验
function checkName() {
    var content_value = content.value.trim();
    var content_length = check(content_value);
    if (content_length === 0) {
        chagneColor(content,spans[0],false);
        spans[0].innerHTML = '名称不能为空';
    } else if (content_length < 4 || content_length > 16) {
        chagneColor(content,spans[0],false);
        spans[0].innerHTML = '名称字符数必须在4~16个之内';
    } else {
        chagneColor(content,spans[0],true);
        spans[0].innerHTML='输入正确';
        return true;
    }
}
addEventHandler(content,'focus',function(){
  spans[0].innerHTML="必填，长度为4~16个字符";
});
addEventHandler(content,'blur',checkName);
//密码检验
function checkKey() {
    var key_value = key.value;
    var key_length = key_value.length;
    if (key_length === 0) {
        chagneColor(key,spans[0],false);
        spans[1].innerHTML = '密码不能为空';
    } else if (key_length < 4 || key_length > 16) {
        chagneColor(key,spans[1],false);
        spans[1].innerHTML = '密码字符数必须在4~16个之内';
    } else {
        chagneColor(key,spans[1],true);
        spans[1].innerHTML='密码可用';
        return true;
    }
}
addEventHandler(key,'focus',function(){
  spans[1].innerHTML="必填，长度为4~16个字符";
});
addEventHandler(key,'blur',checkKey);
//密码确认检验
function confirmKey(){
  if(keyconfirm.value===key.value){
    chagneColor(keyconfirm,spans[2],true);
    spans[2].innerHTML='密码输入一致';
    return true;
  } else{
    chagneColor(keyconfirm,spans[2],false);
    spans[2].innerHTML='密码输入不一致';
  }
}
addEventHandler(keyconfirm,'focus',function(){
  spans[2].innerHTML="请重复输入密码";
});
addEventHandler(keyconfirm,'blur',confirmKey);
//邮箱验证
function checkEmail(){
  var apos=email.value.indexOf('@');
  var dotpos=email.value.indexOf('.');
  if (apos<1||dotpos-apos<2) {
    chagneColor(email,spans[3],false);
    spans[3].innerHTML='邮箱格式不正确';
  } else{
    chagneColor(email,spans[3],true);
    spans[3].innerHTML='邮箱格式正确';
    return true;
  }
}
addEventHandler(email,'focus',function(){
  spans[3].innerHTML="请输入可用邮箱";
});
addEventHandler(email,'blur',checkEmail);
//电话验证
function checkPhone(){
  var filter  = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
  if (filter.test(phone.value)){
    chagneColor(phone,spans[4],true);
    spans[4].innerHTML='输入正确';
    return true;
  } else {
    chagneColor(phone,spans[4],false);
    spans[4].innerHTML='电话格式不正确';
  }
}
addEventHandler(phone,'focus',function(){
  spans[4].innerHTML="请输入可用号码";
});
addEventHandler(phone,'blur',checkPhone);
//整体检验
$('#submit').onclick=function(){
  if (checkName()&&checkKey()&&confirmKey()&&checkEmail()&&checkPhone()) {
    alert('提交成功');
  } else {
    alert('提交失败');
  }
};
