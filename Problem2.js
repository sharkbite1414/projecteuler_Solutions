var i = 0;
var j = 2;
var k = 1;
var list = [2];

while (i < 4000000) {
  // console.log("before",list, i, j, k);
  i = j+k;
  k = j;
  j = i;
  if (i%2 === 0) {
    list.push(i);
  }
  // console.log("after",list, i,j,k);
}
console.log("Sum of even numbers",list.reduce(function(a,b){return a+b;},0));
