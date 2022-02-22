function show() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let uname = document.getElementById("uname").value;
  let city = document.getElementById("city").value;
  let zip = document.getElementById("zip").value;
  let pass = document.getElementById("pass").value;

  console.log(zip);
  document.getElementById(
    "formData"
  ).innerHTML = `Firstname: ${fname} <br> Lastname: ${lname} <br> Username: ${uname} <br> City: ${city} <br> Zip : ${zip} <br> Password : ${pass}`;
}
