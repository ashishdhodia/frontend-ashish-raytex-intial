function age() {
  let bdate = document.getElementById("date").value;
  let pastDate = new Date(bdate);

  let year = new Date().getFullYear() - pastDate.getFullYear();

  document.getElementById("ans").innerHTML = year;
  
}
