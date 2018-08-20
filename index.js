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
  for (let i of list) {
    i.innerHTML = parseInt(i.innerHTML) + parseInt(n);
  };
};
