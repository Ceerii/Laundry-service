// $('.ui')
//   .rating('disable')
// ;

(function() {
//    if(localStorage.getItem("status")){
//     removeEle();
//    }

//    function removeEle(){
//     loginBtn.style.display ="none"
//     registerBtn.style.display ="none"
//    }    

    find(JSON.parse(localStorage.getItem('latlng')));
    // resultsFromQuery(localStorage.getItem('response'));
  

    const resultCards = document.querySelector('.cards');
    const resultLength = document.querySelector('#resultLength');
    const firstSwiperSlide = document.querySelector('.swiper-slide');
    const resultModal = document.querySelector('#result-modal');
    const resultCloseBtn = document.querySelector('#resultCloseBtn');
    const locationForm = document.querySelector('#locationForm');

    resultCloseBtn.addEventListener('click', function() {
        resultModal.classList.toggle('show-modal');
    });

    locationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem('latlng', JSON.stringify(latlng));
        localStorage.setItem('currentAddress', currentAddress);
        find(JSON.parse(localStorage.getItem('latlng')));
    });


    // Search through latitude and longitude
    function find(el) {
        var requests = {
            location : el,
            radius: '1000',
            type: ['laundry']
        };
    
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.nearbySearch(requests, calls); 
        
        function calls(ans, status) {
            locationInput.value = localStorage.getItem('currentAddress');
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                showResults(ans);
            } else {
                resultLength.innerHTML = `There are no Laundry places in your location`;
            }
        }
    }

    // Search through input value('string')
    // function resultsFromQuery(e){
    //     var response = {
    //         location : e,
    //         radius: '1000',
    //         type: ['laundry']
    //     };
    
    //     var services = new google.maps.places.PlacesService(document.createElement('div'));
    //     services.nearbySearch(response, callback); 
        
    //     function callback(ans, status) {
    //         locationInput.value = localStorage.getItem('currentAddress');
    //         if (status == google.maps.places.PlacesServiceStatus.OK) {
    //             showResults(ans);
    //         } else {
    //             resultLength.innerHTML = `There are no Laundry places in your location`;
    //         }
    //     }
    // }

    // Html Cards template display
    function showResults(results) {
        console.log(results);
        resultLength.innerHTML = `There are ${results.length} results based on your search`;
        const cardTemplate = results.map(function(result) {
            return (
               
                `<div class="resultCards">
                    <div class="resultCards-image">
                        <img src="${result.photos ? result.photos[0].getUrl() : './img/L1.png'}" alt="">
                    </div>
                    <div class="resultCards-content">
                        <p>${result.name}</p>
                        <div class="ui rating" data-rating="${result.rating ? result.rating : 0 } "> 
                      </div>
                        <button href="#" class="">View</button>
                    </div>
                </div>`
                
            )
           
        })
        
        resultCards.innerHTML = cardTemplate.join('');

        // Add event listeners on all card buttons to trigger modal 
        const moreDetailsBtns = document.querySelectorAll('.trigger');
        for(let i = 0; i < moreDetailsBtns.length; i++) {
            moreDetailsBtns[i].addEventListener('click', function() {
                displayPlaceDetails(results[i].place_id);
            });
        }
    }
    

    // HTML Modal Display for each card
    function displayPlaceDetails(id) {
        var service = new google.maps.places.PlacesService(document.createElement('div'));

        service.getDetails({ placeId: id }, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                const reviews = place.reviews ? place.reviews.map(review => {
                    return (
                        `<div class="reviewName">
                            <div class="reviewPerson">${review.author_name}</div>
                        </div>
                        <div>
                            <div class="reviewInfo">
                                <div>${review.text}</div>
                            </div>
                        </div>`
                    );
                }) : `No reviews yet`;

                const modalInfoTemplate = (
                    `<div class="Infocontainer slide-content">
                        <img class='container-image' src='${place.photos ? place.photos[0].getUrl() : './img/L1.png'}'/>
                        <div class='info-name'> 
                            <p class='info-container-name'>${place.name}</p>
                        </div>
                        <div class="middle-container">
                            <h5 className="reviewNumber">(${place.user_ratings_total})</h5>
                            <a href="#">Sign Up <span>to see contact details</span></a>
                        </div>

                        <div class="bottom-container">
                            ${reviews[0]}
                        </div>
                        
                        
                        <div class="last-container">
                            <div class="last-container-item">
                                <button class="button button-prev">Back</button>
                                <button class="button-next booknow button">Book Now</button>
                            </div>
                        </div>
                    </div>`
                );
                console.log(reviews);
                firstSwiperSlide.innerHTML = modalInfoTemplate;
                resultModal.classList.toggle('show-modal');
                
            } else {
                console.log('No extra details');
            }
        });
    }
})();


function toggleNav() {
  let navMobile = document.querySelector(".navigation-content");
  if (navMobile.style.display === "block") {
   navMobile.style.display = "none";
  } else {
    navMobile.style.display = "block";
 }
    
}

const hamburger = () => {
    document.querySelector(".fa-bars").addEventListener("click", toggleNav)
}
hamburger();
