// 1
let myBody = document.getElementsByTagName('body')[0]
console.log(myBody);

let lastEl = myBody.lastElementChild
console.log(lastEl);

let lastDiv = lastEl.previousElementSibling
console.log(lastDiv);

let firstElLastDiv = lastDiv.firstElementChild
console.log(firstElLastDiv);

// 2 
let lastElLastDiv = lastDiv.lastElementChild
console.log(lastElLastDiv);

// 3 
let lesP = lastDiv.getElementsByTagName('p')[0]
console.log(lesP);

let leI = lesP.firstElementChild
console.log(leI);

// 4 
let lastP = lastDiv.getElementsByTagName('p')[1]
let leB = lastP.getElementsByTagName('b')[0]
console.log(leB);

// 5 
let parentI = leI.parentElement
console.log(parentI);

// 6 
let parentB = leB.parentElement
console.log(parentB);

// 7 
let nextChild = lastDiv.firstElementChild.nextElementSibling
console.log(nextChild);