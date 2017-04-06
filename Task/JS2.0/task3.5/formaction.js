//为每一个展示区的input添加事件
function action() {
    var inputs = $$('#show_all input');
    console.log(inputs);
    for (var i = 0; i < inputs.length; i++) {
        var parent = inputs[i].parentNode;
        var span = document.createElement('span');
        parent.appendChild(span);
        addEventHandler(inputs[i], 'focus', function() {
            for (var j = 0; j < hints.length; j++) {
                if (this.type === hints[j].type) {
                  this.nextSibling.className='hint';
                    this.nextSibling.innerHTML = hints[j].hint[0];
                }
            }
        });
        addEventHandler(inputs[i], 'blur', function() {
            for (var k = 0; k < hints.length; k++) {
              if(this.type===hints[k].type){
                if (check(this)===0) {
                    this.nextSibling.className='wrong';
                    this.nextSibling.innerHTML = hints[k].hint[1];
                } else if (check(this)===1) {
                    this.nextSibling.className='right';
                    this.nextSibling.innerHTML = hints[k].hint[2];
                } else{
                  if(this.type==='text' || this.type==='password'){
                    this.nextSibling.className='wrong';
                    this.nextSibling.innerHTML = '输入范围在'+this.minlength+'~'+this.maxlength+'之内';
                  } else if (this.type==='email') {
                    this.nextSibling.className='wrong';
                    this.nextSibling.innerHTML = '邮箱格式不正确';
                  }

                }
              }
            }
        });
    }
}
