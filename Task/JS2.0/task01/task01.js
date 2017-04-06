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
var input=$('#content');

var span=$('span');
function check(){
  var inputText=input.value.trim();
  if (countLength(inputText)===0) {
    span.innerHTML = '名称不能为空';
    span.style.color='red';
    input.style.borderColor='red';
  } else if (countLength(inputText)<4 || countLength(inputText)>16 ){
    span.innerHTML = '名称必须在规定范围内';
    span.style.color='red';
    input.style.borderColor='red';
  } else {
    span.innerHTML = '名称格式正确';
    span.style.color='green';
    input.style.borderColor='green';
  }
}
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
addEventHandler($('#submit'),'click',check);
//重置
addEventHandler(input,'focus',function(){
  span.innerHTML='必填，长度为4~16个字符';
  span.style.color='grey';
  input.style.borderColor='grey';
});
