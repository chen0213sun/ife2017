var number=document.getElementById('input');
var show=document.getElementById('show');
//左侧入
function leftIn () {
  var input=number.value;
  if (!isNaN(input)) {
    var li=document.createElement('li');
    li.innerHTML = input;
    show.insertBefore(li,show.childNodes[0]);
  } else {
    alert('请输入数字');
  }

}
document.getElementById('left-in').onclick=leftIn;
//右侧入
function rightIn() {
  var input=number.value;
  if (!isNaN(input)) {
    var li=document.createElement('li');
    li.innerHTML = input;
    show.appendChild(li);
  } else {
    alert('请输入数字');
  }
}
document.getElementById('right-in').onclick=rightIn;
//左侧出
function leftOut() {
  if (show.childNodes.length!==0) {
    alert(show.firstChild.innerHTML);
    show.removeChild(show.firstChild);
  } else {
    alert('还没有输入数字');
  }
}
document.getElementById('left-out').onclick=leftOut;
//右侧出
function rightOut() {
  if (show.childNodes.length!==0) {
    alert(show.firstChild.innerHTML);
    show.removeChild(show.lastChild);
  } else {
    alert('还没有输入数字');
  }
}
document.getElementById('right-out').onclick=rightOut;
