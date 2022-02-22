function show() {
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;

  document.getElementById("citySelect").innerHTML = city;
  document.getElementById("stateSelect").innerHTML = state;
  document.getElementById("countrySelect").innerHTML = country;
}
