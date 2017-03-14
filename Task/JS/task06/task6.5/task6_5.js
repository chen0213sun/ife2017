$=function(el) { return document.querySelector(el); };
$$=function (el) { return document.querySelectorAll(el); };
//查询已存在的tag
function searchLi (someid) {
  var exsitLi=$$(someid);
  var exsit=[];
  for (var i = 0; i < exsitLi.length; i++) {
    exsit[i]=exsitLi[i].innerHTML;
  }
  return exsit;
}
//检验添加是否已经存在,有时间尝试正则
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return false;
        }
    }
    return true;
}
//添加函数
function addobj (place,obj) {
  if (place.length<=10 && contains(place,obj)){
    place.push(obj);
  } else if (place.length>10 && contains(place,obj)){
    place.shift();
    place.push(obj);
  } else {
    alert('不能输入重复内容');
  }
}
//渲染
function render(someplace,arr){
  someplace.innerHTML='';
  for (var i = 0; i < arr.length; i++) {
      var li=document.createElement('li');
      li.innerHTML = arr[i];
      someplace.appendChild(li);
  }
}
//添加tag
function showTag () {
  var tag=$('#tag').value.trim();
  var exsit=searchLi('#tagShow li');
  addobj(exsit,tag);
  render($('#tagShow'),exsit);
}
$('#tag').onkeyup = function(evt) {
  if (evt.keyCode == 13) {
    showTag();
  }
};
//删除tag
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}
	addEventHandler($('#tagShow'),'mouseover',function (e) {
		if(e.target && e.target.nodeName == "LI") {
			e.target.firstChild.insertData(0,'点击删除');
		}
	});
	addEventHandler($('#tagShow'),'mouseout',function(e) {
		if(e.target && e.target.nodeName == "LI") {
			e.target.firstChild.deleteData(0,4);
		}
	});
	addEventHandler($('#tagShow'),'click',function (e) {
		if(e.target && e.target.nodeName == "LI") {
			$('#tagShow').removeChild(e.target);
		}
	});

//添加兴趣
function showcontent () {
  var content=$('#hobbyArea').value.trim().split(/[^\u4e00-\u9fa5\w]+/g);
  var exsit=searchLi('#hobbyShow li');
  for (var i = 0; i < content.length; i++) {
    addobj(exsit,content[i]);
  }
  render($('#hobbyShow'),exsit);
}
$('#btn').onclick=showcontent;
