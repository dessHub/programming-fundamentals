// implement your solution here
function evenOdd(arg) {

  var diff = 0;
  for(i=0; i<arg.length; i++){
    var odd = 0;
    var even = 0;
   if (arg[i]%2 === 0){
       even += arg[i];
   }else if(arg[i]%2 !== 0){
       odd += arg[i];
   }
  diff += even-odd;
  }

  return diff;
}

var a = [10, 5, 2];

console.log(evenOdd(a));
