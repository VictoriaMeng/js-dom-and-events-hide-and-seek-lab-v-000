function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};

function deepestChild(){
  var children = document.getElementById('grand-node');
  while (typeof children[0] != 'undefined') {
    children = children[0];
  }
  return children;
};

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < list.length, i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n);
  }
}
