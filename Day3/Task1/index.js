function prime() {
  let number = document.getElementById("prime").value;

  if (number == 1) {
    document.getElementById("primeAns").innerHTML = "Prime";
  } else if (number == 2) {
    document.getElementById("primeAns").innerHTML = "Prime";
  } else {
    for (i = 2; i < number; i++) {
      // console.log(number % i == 0);
      if (number % i == 0) {
        document.getElementById("primeAns").innerHTML = "Non-Prime";
        break;
      } else {
        document.getElementById("primeAns").innerHTML = "Prime";
      }
    }
  }
}
