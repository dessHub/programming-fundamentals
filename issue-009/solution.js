// implement your solution here
function sumEven(arg) {

  var sum = 0;
  for(i=0; i<arg.length; i++){
   if (arg[i]%2 === 0){
       sum += arg[i];
   }

  }
  return sum;
}

var a = [10, 5, 2];

console.log(sumEven(a));
