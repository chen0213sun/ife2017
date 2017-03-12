var number = document.getElementById('input');
var show = document.getElementById('show');
//左侧入
function leftIn() {
    var input = number.value;
    if (show.childNodes.length <= 60) {
        if (!isNaN(input) && input > 10 && input < 100) {
            var li = document.createElement('li');
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
function oursort () {
  var orderAqi=[],i=0,j=1,clear=null,len=show.childNodes.length;
  for (var n = 0; n< len; n++) {
    orderAqi[n]=parseInt(show.childNodes[n].style.height);
  }
  console.log(orderAqi);
  clear = setInterval(run,50);
  console.log(orderAqi);
  function run() {
			if (i < len) {
				if (j < len) {
					if (orderAqi[i] > orderAqi[j]) {
						temp = orderAqi[i];
						orderAqi[i] = orderAqi[j];
						orderAqi[j] = temp;
						show.childNodes[i].style.height=orderAqi[i]+'px';
						show.childNodes[j].style.height=orderAqi[j]+'px';
					}
					j++;
				} else {
					i++;
					j = i + 1;
				}
			} else {
				clearInterval(clear);
				return;
			}
		}
}

document.getElementById('order').onclick=oursort;
