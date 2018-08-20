function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
};
function nestedTarget(){
  return document.getElementById('nested');
};
function increaseRankBy(n){
  return document.querySelectorAll('.ranked-list').map(r => parseInt(r) + n);
}
