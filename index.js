function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};

function deepestChild(){
  let selector = '#grand-node';
  const list = document.querySelectorAll('#grand-node');
  for (let i of list) {
    selector = selector + ' div';
  };
  return children;
};

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list');
  for (let i of list) {
    i.innerHTML = parseInt(i.innerHTML) + parseInt(n);
  };
};
