$ = function(el) {
    return document.querySelector(el);
};
$$ = function(el) {
    return document.querySelectorAll(el);
};
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

var root = $('#root');
var list = [];
var timer;
//前序遍历
function preOrder(node) {
    if (!(node == null)) {
        list.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}
//中续遍历
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.firstElementChild);
        list.push(node);
        inOrder(node.lastElementChild);
    }
}
//后序遍历
function PostOrder(node) {
    if (!(node == null)) {
        PostOrder(node.firstElementChild);
        PostOrder(node.lastElementChild);
        list.push(node);
    }
}
//渲染
function render() {
    var i = 0;
    list[i].style.backgroundColor = 'blue';
    timer = setInterval(function() {
        i++;
        if (i < list.length) {
            list[i].style.backgroundColor = 'blue';
            list[i - 1].style.backgroundColor = '#fff';
        } else {
            clearInterval(timer);
            list[list.length - 1].style.backgroundColor = '#fff';
        }
    }, 500);
}
//重置
function reset() {
    list = [];
    clearInterval(timer);
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = '#fff';
    }
}

addEventHandler($('#pre'), 'click', function() {
    reset();
    preOrder(root);
    render();
});
addEventHandler($('#in'), 'click', function() {
    reset();
    inOrder(root);
    render();
});
addEventHandler($('#post'), 'click', function() {
    reset();
    PostOrder(root);
    render();
});
