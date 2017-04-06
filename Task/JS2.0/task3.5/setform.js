function setForm () {
  show=document.createElement('div');
  show.style.margin='20px';
  if (jsonList.type=='select') {
    setLabel();
    setSelect();
    showAll.appendChild(show);
  }else {
    setLabel();
    setText();
    showAll.appendChild(show);
  }
  submit.className='';
}
//创建label
function setLabel(){
  var label=document.createElement('label');
  label.innerHTML = jsonList.type_name;
  show.appendChild(label);
}
//创建文本表单
function setText(){
  if (jsonList.option.length===0) {
    var input=document.createElement('input');
    input.type=jsonList.type;
    input.minlength=jsonList.text_length[0];
    input.maxlength=jsonList.text_length[1];
    show.appendChild(input);
  } else{
    for (var i = 0; i < jsonList.option.length; i++) {
      var inputs=document.createElement('input');
      inputs.type=jsonList.type;
      inputs.name=jsonList.type;
      inputs.value=jsonList.option[i];
      var label=document.createElement('label');
      label.innerHTML = jsonList.option[i];
      console.log(label);
      show.appendChild(inputs);
      show.appendChild(label);
    }
  }
}
//创建选择表单
function setSelect(){
  var selects=document.createElement('select');
  for (var i = 0; i < jsonList.option.length; i++) {
    var options=document.createElement('option');
    options.value=jsonList.option[i];
    options.innerHTML=jsonList.option[i];
    selects.appendChild(options);
  }
  show.appendChild(selects);
}
