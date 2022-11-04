/*
//Generating even numbers till 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
  console.log(i);
  }
  }

  */


//even and odd detection
function evenAndodd() {
  var arr = [3, 4, 8, 18,23];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
    console.log(arr[i] , " is even");
    }
    else {
    console.log(arr[i] , " is odd");
    }
    }
  }
  evenAndodd();

/*
//Detecting large number
let arr= [3, 4, 8, 18,23];
function maxNum(num){
  let max = num[0];
  for(let i = 0; i < num.length; i++){
    let element = num[i];
      if(element > max){
        max = element;
      }
    }
    return max;
}
let answer = maxNum(arr);
console.log('Largest Number is: ', answer);
*/