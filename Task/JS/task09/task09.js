//事件绑定函数，兼容浏览器差异
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
var root = $('.parent');
var divs = $$('div');
var timer;
var list = [];
var search = $('.search');
var selectNode = null;
var add = $('.add');
//深度遍历函数
function tdf(node) {
    if (node) {
        list.push(node);
        for (var i = 0; i < node.children.length; i++) {
            tdf(node.children[i]);
        }
    }
}
//广度遍历函数
function tbf(node) {
    var queue = [];
    var p = null;
    if (node) {
        queue.push(node);
    }
    while (queue.length > 0) {
        p = queue.shift();
        list.push(p);
        if (p.firstElementChild) {
            queue.push(p.firstElementChild);
            p = p.firstElementChild;
            while (p.nextElementSibling) {
                queue.push(p.nextElementSibling);
                p = p.nextElementSibling;
            }
        }
    }
}
//渲染函数
function render() {
    var tag = true;
    var i = 0;
    var text = search.value.trim();
    root.style.backgroundColor = "blue";
    timer = setInterval(function() {
        i++;
        if (i < list.length) {
            if (text && list[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == text) {
                list[i].style.backgroundColor = "red";
                list[i - 1].style.backgroundColor = "#fff";
                list[i].setAttribute('class', 'selected');
                tag = false;
            } else {
                list[i].style.backgroundColor = "blue";
                list[i - 1].style.backgroundColor = "#fff";
            }
        } else {
            clearInterval(timer);
            list[list.length - 1].style.backgroundColor = "#fff";
            if (text && tag) {
                alert('没有搜到关键字');
            }
        }
    }, 200);
}
//重置函数
function reset() {
    list = [];
    clearInterval(timer);
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "#fff";
        //删除selected类
        var classname = divs[i].getAttribute('class');
        classname = classname.replace('selected', '');
        divs[i].setAttribute('class', classname);
    }
}


//添加事件
addEventHandler(root, 'click', function(e) {
    reset();
    e.target.style.backgroundColor = "grey";
    selectNode = e.target;
});
addEventHandler(root, 'dblclick', function(e) {
    e.target.style.backgroundColor = "#fff";
    selectNode = null;
});
addEventHandler($('.TDF'), 'click', function() {
    reset();
    tdf(root);
    render();
});
addEventHandler($('.TBF'), 'click', function() {
    reset();
    tbf(root);
    render();
});
addEventHandler($('.dnode'), 'click', function() {
    if (selectNode === null) {
        alert('请先选择一个节点以供删除');
    }
    var parent = selectNode.parentNode;
    parent.removeChild(selectNode);
    selectNode = null;
});
addEventHandler($('.anode'), 'click', function() {
    if (selectNode === null) {
        alert('请先选择一个节点以供添加');
    } else {
        if (add.value.trim() === '') {
            alert('请输入一个内容');
        } else {
            var son = document.createElement('div');
            son.innerHTML = add.value.trim();
            selectNode.appendChild(son);
        }
    }
});
