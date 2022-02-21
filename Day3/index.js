function prime() {
  let number = document.getElementById("prime").value;

  if (number % 2 == 0) {
    document.getElementById("oddEvenAns").innerHTML = "The number is even.";
  }
  else {
    document.getElementById("oddEvenAns").innerHTML =  "The number is odd.";
  }
}
