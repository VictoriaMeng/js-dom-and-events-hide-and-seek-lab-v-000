function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};

function deepestChild(){
  let children = document.getElementById('grand-node');
  while (typeof children[0] != 'undefined') {
    children = children[0];
  }
  return children;
};

function increaseRankBy(n){
  return document.querySelectorAll('.ranked-list') + n;
}
