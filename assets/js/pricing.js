var datepickers = [].slice.call(document.querySelectorAll("[data-datepicker]"));
var datepickersList = datepickers.map(function (el) {
  return new Datepicker(el, {
    buttonClass: "btn",
  });
});

// var http = new XMLHttpRequest();
// console.log(http)
// http.open("GET", "https://restcountries.eu/rest/v2/name/united");
// http.onreadystatechange = function(){
//   if(http.readyState != XMLHttpRequest.DONE) {
//     return;
//   } else if(http.status == 200) {
//     console.log(JSON.parse(http.responseText))
//   } else {
//     console.log('error, not working' + http.status);
//   }
// }
// http.send();

fetch(
  "https://geodata.gov.hk/gs/api/v1.0.0/geoDataQuery?&q=%7Bv%3A%221%2E0%2E0%22%2Cid%3A%228d6eb5e8-13be-4b79-b0c2-19f647009c54%22%2Clang%3A%22ALL%22%7D"
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let campsite = {
        name: data.features[i].properties["Facility Name"],
        website: data.features[i].properties.Website,
      };

      $(".campsite-dropdown").append(
        `<li><a class="dropdown-item" target="_blank" href=${campsite.website}>${campsite.name}</a></a></li>`
      );
    }
    console.log(campsites);
  });
