var number = document.getElementById('input');
var show = document.getElementById('show');
//左侧入
function leftIn() {
    var input = number.value;
    if (show.childNodes.length <= 60) {
        if (!isNaN(input) && input > 10 && input < 100) {
            var li = document.createElement('li');
            li.style.width='5px';
            li.style.height=input+ 'px';
            show.insertBefore(li, show.childNodes[0]);
        } else {
            alert('请输入10~100的数字');
        }
    } else {
        alert('不得输入超过60个数字');
    }

}
document.getElementById('left-in').onclick = leftIn;
//右侧入
function rightIn() {
    var input = number.value;
    if (show.childNodes.length <= 60) {
        if (!isNaN(input) && input > 10 && input < 100) {
            var li = document.createElement('li');
            li.style.width='5px';
            li.style.height=input+ 'px';
            show.appendChild(li);
        } else {
            alert('请输入数字');
        }
    } else {
        alert('不得输入超过60个数字');
    }

}
document.getElementById('right-in').onclick = rightIn;
//左侧出
function leftOut() {
    if (show.childNodes.length !== 0) {
        show.removeChild(show.firstChild);
    } else {
        alert('还没有输入数字');
    }
}
document.getElementById('left-out').onclick = leftOut;
//右侧出
function rightOut() {
    if (show.childNodes.length !== 0) {
        show.removeChild(show.lastChild);
    } else {
        alert('还没有输入数字');
    }
}
document.getElementById('right-out').onclick = rightOut;
//排序
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function bubbleSort(items){
  var len = items.length, i, j, stop;
  for (i = 0; i < len; i++){
    for (j = 0, stop = len-i; j < stop; j++){
      if (items[j] > items[j+1]){
        swap(items, j, j+1);
      }
    }
  }
  return items;
}
function oursort () {
  var orderAqi=[];
  for (var i = 0; i < show.childNodes.length; i++) {
    orderAqi[i]=parseInt(show.childNodes[i].style.height);
  }
  bubbleSort(orderAqi);
  console.log(orderAqi);
  for (var j = 0; j < show.childNodes.length; j++) {
    show.childNodes[j].style.height=orderAqi[j]+'px';
  }
}
document.getElementById('order').onclick=oursort;
