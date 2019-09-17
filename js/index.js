(function() {
    // const displayProf = document.getElementsByClassName("displayProfile");
    
  
    
//        function removeEle(){
//         if(localStorage.getItem("status") === true){
//             displayProf.style.display="block";
//             loginBtn.style.display ="none";
//             registerBtn.style.display ="none";
//       }else{
//     displayProf.style.display="none";
//     loginBtn.style.display ="block";
//     registerBtn.style.display ="block";
//   }
//        }    
    // let textAddress= document.getElementById("location").value;
    const getAddress = document.getElementById("searchIcon");
    const searchBtn = document.getElementById("search-container-button");

    searchBtn.addEventListener('click', function() {
        let currentAddress = document.getElementById("location").value;
        if(currentAddress !== ""){
        searchFromQuery(currentAddress);
        localStorage.setItem('latlng', JSON.stringify(latlng));
        localStorage.setItem('currentAddress', currentAddress);
        window.location.assign('./result-page.html');
        }
    })

  

    function searchFromQuery(inputValue){
        var search = {
            query: inputValue,
            fields: ['place_id','geometry'],
        };
      
        service = new google.maps.places.PlacesService(document.createElement('div'));
        service.findPlaceFromQuery(search, call); 
      
        function call(response, status){
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                inputValue;
                locationInput.value = inputValue;
                latlng = response[0].geometry.location;
                localStorage.setItem("set",  latlng);
                console.log(latlng);
                return latlng;
               
            }
        }
    }

    // On Click, gets my current address
    getAddress.addEventListener('click', function(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            latlng = new google.maps.LatLng(lat, lng);
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({
            'latLng': latlng
            }, (answer, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    currentAddress = answer[0].formatted_address
                    locationInput.value = currentAddress;
                    return latlng;
                }
            })
        });
    } else {
        alert("Sorry your browser does not support geolocation")
    }
    })

  

})(); 