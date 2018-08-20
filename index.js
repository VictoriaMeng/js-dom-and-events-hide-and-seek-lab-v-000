function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};

function deepestChild(){
  let children = document.querySelectorAll('grand-node');
  while (typeof children[0] != 'undefined') {
    children = children.querySelectorAll('div');
  }
  return children;
};

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list');
  for (let i of list) {
    i.innerHTML = parseInt(i.innerHTML) + parseInt(n);
  };
};
