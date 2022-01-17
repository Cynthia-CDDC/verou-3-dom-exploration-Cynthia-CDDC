const olList = document.querySelector('ol');
console.log(olList);
const childFirst = olList.querySelector('li');
console.log(childFirst);
const childLast = olList.querySelectorAll('li')[4];
console.log(childLast);

olList.insertBefore(childLast, childFirst);
console.log(olList.children);



//const sectionsList = document.querySelectorAll('section');
//console.log(sectionsList);
//const h2List = sectionsList.querySelectorAll('h2');

const h2List = document.querySelectorAll('h2');
console.log(h2List);

const h2item1 = h2List[1];
console.log(h2item1);
const h2item2 = h2List[2];
console.log(h2item2);
//? first apand item 1 and item 2 to section? because items of sibling elements?
h2List.insertBefore(h2item2, h2item1);

