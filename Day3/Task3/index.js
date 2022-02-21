function fib() {
  let number = document.getElementById("fib").value;
  // console.log(number);
  var num1 = 0;
  var num2 = 1;
  var numnext = 0;
  var arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(num1);
    numnext = num1 + num2;
    num1 = num2;
    num2 = numnext;
  }
  document.getElementById("fibAns").innerHTML = arr;
}
