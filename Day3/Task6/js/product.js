function count() {
  let temp = 0;
  temp = document.getElementById("cart").innerHTML;
  num = parseInt(temp);
  num += 1;
  document.getElementById("cart").innerHTML = num;
  console.log(num);
}
