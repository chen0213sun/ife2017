//类型
function typeChoose() {
    if (types[0].checked) {
        fieldsets[2].className = '';
        fieldsets[3].className = 'hide';
        fieldsets[4].className = '';
        jsonList.type = 'text';
    } else if (types[1].checked || types[2].checked || types[3].checked) {
        fieldsets[2].className = 'hide';
        fieldsets[3].className = '';
        fieldsets[4].className = 'hide';
        if (types[1].checked) {
            jsonList.type = 'radio';
        } else if (types[2].checked) {
            jsonList.type = 'checkbox';
        } else if (types[3].checked) {
            jsonList.type = 'select';
        }
    } else if (types[4].checked) {
        fieldsets[2].className = 'hide';
        fieldsets[3].className = 'hide';
        fieldsets[4].className = '';
        jsonList.type = 'textarea';
    }
    for (var i = 0; i < types.length; i++) {
        if (types[i].checked) {
            configures[0].value = labels1[i].childNodes[1].nodeValue;
        }
    }
}
//配置
function configureChoose() {
    if (configures[1].checked) {
        jsonList.configure = 'must';
    } else if (configures[2].checked) {
        jsonList.configure = 'or';
    }
}
//规则
function ruleChoose() {
    if (types[0].checked) {
        if (rules[0].checked) {
            fieldsets[4].className = '';
            jsonList.type = 'text';
        } else if (rules[1].checked || rules[2].checked || rules[3].checked) {
            fieldsets[4].className = 'hide';
            if (rules[1].checked) {
                jsonList.type = 'number';
            } else if (rules[2].checked) {
                jsonList.type = 'email';
            } else if (rules[3].checked) {
                jsonList.type = 'tel';
            }
        } else if (rules[4].checked) {
            fieldsets[4].className = '';
            jsonList.type = 'password';
        }

        for (var i = 0; i < rules.length; i++) {
            if (rules[i].checked) {
                configures[0].value = labels2[i].childNodes[1].nodeValue;
            }
        }
    }
}
//选项
function render(someplace, arr) {
    someplace.innerHTML = ''; //渲染
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];
        someplace.appendChild(li);
    }
}

function ifExist(arr, obj) {
    var j = arr.length;
    while (j--) {
        if (arr[j] == obj) { //查询是否存在
            return false;
        }
    }
    return true;
}

function addObj(place, obj) {
    if (place.length <= 10 && ifExist(place, obj)) {
        place.push(obj);
    } else if (place.length > 10 && ifExist(place, obj)) { //添加选项
        place.shift();
        place.push(obj);
    } else {
        return;
    }
}

function searchLi(someid) {
    var exsitLi = $$(someid);
    var exsit = [];
    for (var i = 0; i < exsitLi.length; i++) {
        exsit[i] = exsitLi[i].innerHTML;
    }
    return exsit;
}

function showSelect() {
    if (types[1].checked || types[2].checked || types[3].checked) {
        if (content.value === '') {
            return false;
        } else {
            var selects = content.value.trim().split(' ');//有问题！！！！！！
              var exsit = searchLi('#selection li');
              for (var i = 0; i < selects.length; i++) {
                  addObj(exsit, selects[i]);
              }
              jsonList.option = exsit;
              render(selection, exsit);
            if(exsit.length<2){
              return false;
            }
        }
        return true;
    } else {
        jsonList.option = [];
        return true;
    }
}
function reset() {
    jsonList.option = [];
    content.value = null;
    selection.innerHTML = null;
}
//长度限制
function lengthLimit() {
    jsonList.text_length[0] = limits[0].value;
    jsonList.text_length[1] = limits[1].value;
}
//名称
function setValue(){
  jsonList.type_name=configures[0].value;
}
