function show() {
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let temp = [city, state, country]
  
  let table = document.getElementById("tablebody")

  table.innerHTML = table.innerHTML + "<tr><td>" + city + "</td><td>" + state + "</td><td>" + country + "</td></tr>"
}
