function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nest = document
    .getElementById('nested')
    .quarySelector('div div div div.target')
  return nest;
}


function increaseRankBy(n) {
  const list = document
    .getElementById('app')
    .quarySelector('ul.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(i + n);
  }
}

function deepestChild() {
  
}