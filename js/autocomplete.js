let latlng;
let currentAddress;

const locationInput = document.querySelector('#location');

const autocomplete = new google.maps.places.Autocomplete(locationInput, { 
  types: ['address'],
  componentRestrictions: {country: "ng"}
});

google.maps.event.addListener(autocomplete, 'place_changed',  async function() {
  const place = await autocomplete.getPlace();
  const lats = place.geometry.location.lat();
  const lngs = place.geometry.location.lng(); 

  latlng = new google.maps.LatLng(lats,lngs);

  currentAddress = document.getElementById("location").value;
});
