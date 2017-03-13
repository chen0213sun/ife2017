var input=document.getElementById('input');
var show=document.getElementById('show');
var content=[];
function showcontent () {
  content=input.value.trim().split(/[^\u4e00-\u9fa5\w]+/g);
  for (var i = 0; i < content.length; i++) {
    var li=document.createElement('li');
    li.innerHTML = content[i];
    show.appendChild(li);
    input.value=null;
  }
}
document.getElementById('btn-input').onclick=showcontent;
function search () {
  var target=document.getElementById('search').value.trim();
  var li=show.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    if (li[i].innerHTML.indexOf(target)!=-1) {
      li[i].style.color="black";
    } else{
      li[i].style.color="#fff";
    }
  }
}
document.getElementById('btn-search').onclick=search;
