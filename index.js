function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};

function deepestChild(){
  let selector = '#grand-node div';
  const list = document.querySelectorAll(selector);
  for (let i of list) {
    selector = selector + ' div';
  };
  return document.querySelector(selector);
};

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list');
  for (let i of list) {
    i.innerHTML = parseInt(i.innerHTML) + parseInt(n);
  };
};
