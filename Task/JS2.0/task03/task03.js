$ = function(el) {
    return document.querySelector(el);
};
$$ = function(el) {
    return document.querySelectorAll(el);
};
var inputs = $$('input'),
    city_school = $('#city_school'),
    city = $('#city'),
    school = $('#school'),
    work = $('#work');
//单选按钮切换
inputs[0].onclick = function() {
    if (inputs[0].checked) {
        city_school.className = '';
        work.className = 'hide';
    }
};
inputs[1].onclick = function() {
    if (inputs[1].checked) {
        city_school.className = 'hide';
        work.className = '';
    }
};
//城市与学校的联动
var optionlist = [{
        city: '北京',
        school: ['北京大学', '清华大学', '人民大学']
    },
    {
        city: '南京',
        school: ['东南大学', '南京大学', '邮电大学']
    },
    {
        city: '杭州',
        school: ['农林大学', '浙江大学', '美术学院']
    },
    {
        city: '徐州',
        school: ['师范大学', '矿业大学', '医科大学']
    },
];

function showCity() {
    city.innerHTML = '';
    for (var i = 0; i < optionlist.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = optionlist[i].city;
        option.value = optionlist[i].city;
        city.appendChild(option);
    }
}

function showSchool() {
    school.innerHTML = '';
    for (var i = 0; i < city.childNodes.length; i++) {
        if (city.childNodes[i].selected) {
            for (var j = 0; j < optionlist[i].school.length; j++) {
                var school_option = document.createElement('option');
                school_option.innerHTML = optionlist[i].school[j];
                school.appendChild(school_option);
            }
        }
    }
}
window.onload = function() {
    showCity();
    showSchool();
};

city.onclick = function() {
    showSchool();
};
