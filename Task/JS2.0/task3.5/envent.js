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
//声明区
var types = $$('#type input'),
    labels1 = $$('#type label'),
    configures = $$('#configure input'),
    rules = $$('#type1 input'),
    labels2 = $$('#type1 label'),
    content = $('#type2 input'),
    limits = $$('#type3 input'),
    fieldsets = $$('fieldset'),
    selection = $('#selection'),
    addList = $('#add'),
    resets=$('#reset'),
    showAll=$('#show_all'),
    submit=$('#submit'),
    selectList = [];
var jsonList = {
        type: '',
        configure: '',
        type_name:'',
        text_length: [],
        option: [],
    };
var hints=[
  {
  type:'text',
  hint:['请输入正确的文本格式','输入不能为空','输入正确']
},
  {
  type:'number',
  hint:['请输入正确的数字格式','输入不能为空','输入正确']
},
  {
  type:'email',
  hint:['请输入正确的邮箱格式','输入不能为空','输入正确']
},
  {
  type:'tel',
  hint:['请输入正确的电话格式','输入不能为空','输入正确']
},
  {
  type:'password',
  hint:['请输入正确的密码格式','输入不能为空','输入正确']
},
  {
  type:'radio',
  hint:['请选择一个选项','尚未选择','已选择']
},
  {
  type:'checkbox',
  hint:['请至少选择一个选项','尚未选择','已选择']
},
  {
    type:'select',
    hint:['请选择一个选项','尚未选择','已选择']
  },
  {
  type:'textarea',
  hint:['请输入正确的文本格式','输入不能为空','输入正确']
  }
];
//事件绑定
addEventHandler(fieldsets[0], 'click', function() {
    typeChoose();
});
addEventHandler(fieldsets[1], 'click', configureChoose);
addEventHandler(fieldsets[2], 'click', ruleChoose);
addEventHandler(content, 'keyup', function(evt) {
    if (evt.keyCode == 13) {
        showSelect();
    }
});
addEventHandler(resets,'click',reset);
addEventHandler(addList, 'click', function() {
  if(showSelect()){
    setValue();
    typeChoose();
    configureChoose();
    ruleChoose();
    showSelect();
    lengthLimit();
    console.log(jsonList);
    setForm();
    action();
    return jsonList;
  }else{
      alert('请输入至少两个选项');
    }
});
