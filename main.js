const SecHouseID = document.querySelector(".cards-container");

const url = "api.json";
const response = fetch(url);

let houses = [];

const pintadoHouses = (array) => {
  SecHouseID.innerHTML = "";
  array.forEach((house) => {
    SecHouseID.innerHTML += `<article class="cards-container__CardHouses-aticle">
          <figure class="cards-container__houses-img">
            <img src="${house.url}" alt="casita" class="cards-container__figure-img">
          </figure>
          <div class="cards-container__div-info-1">
            <div class="cards-container__pIcons-div">
              <div class="cards-container__p-div">
                <p class="cards-container__text-type">${house.type}</p>
                <p class="cards-container__text-status">${house.status}</p>
              </div>
              <figure class="cards-container__thunder-icon">
                
              </figure>
            </div>
            <div class="cards-container__infoIcons-div">
              <p class="cards-container__price">${house.price}</p>
              <div class="cards-container__div-favorite">
                <figure class="cards-container__favorite"></figure>
                <figure class="cards-container__compare"></figure>
              </div>
            </div>
          </div>
          <div class="cards-container__div-info-2">
            <div class="cards-container__ubication"> 
              <p><figure class="cards-container__ubication-icon"></figure>${house.place}</p>
            </div>
            <p class="cards-container__direction-text">${house.placeDescription}</p>
            <div class="cards-container__owner">
              <div class="cards-container__owner-div">
                <p class="cards-container__owner-p"><figure class="cards-container__owner-photo" ><img src="${house.sellerPhoto}" alt=""></figure> ${house.nameSeller}</p>
              </div>
              <div class="cards-container__calendar-div">
                <p class="cards-container__owner-p-2"><figure class="cards-container__calendar"></figure>${house.time}</p>
              </div>
            </div>
            <div class="cards-container__otherInfo-div">
              <div class="cards-container__sizeInfo">
                <p><figure class="cards-container__ft-icon"><img src="./img/area-icon.webp" alt=""></figure><strong>${house.area}</strong>  Sq Ft</p>
              </div>
              <div class="cards-container__icons-div">
                <p><figure class="cards-container__icon-garage"><img src="./img/garage-icon.webp" alt=""></figure>${house.garage}<figure class="cards-container__icon-bathroom"><img src="./img/bathroom-icon.webp" alt=""></figure>${house.bathroom}<figure class="cards-container__icon-bedroom"><img src="./img/bedroom-icon.webp" alt=""></figure>${house.beedroom}</p>
              </div>
            </div>
          </article>`;
  });
};

const arregloIncial = (array) => {
  let housesfiltro = array.slice(0, 6);
  pintadoHouses(housesfiltro);
};

const LlenadoHouses = (data) => {
  houses = data;
  arregloIncial(houses);
};

response
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    LlenadoHouses(data);
  });

  // <article class="cards-container__CardHouses-aticle">
  //         <figure class="cards-container__houses-img">
  //           <img src="./img/house13.webp" alt="casita" class="cards-container__figure-img">
  //         </figure>
  //         <div class="cards-container__div-info-1">
  //           <div class="cards-container__pIcons-div">
  //             <div class="cards-container__p-div">
  //               <p class="cards-container__text-type"><span>HOUSE</p>
  //               <p class="cards-container__text-status"><span>FOR SALE</p>
  //             </div>
  //             <figure class="cards-container__thunder-icon">
                
  //             </figure>
  //           </div>
  //           <div class="cards-container__infoIcons-div">
  //             <p class="cards-container__price">$320,000.00</p>
  //             <div class="cards-container__div-favorite">
  //               <figure class="cards-container__favorite"></figure>
  //               <figure class="cards-container__compare"></figure>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="cards-container__div-info-2">
  //           <div class="cards-container__ubication"> 
  //             <p><figure class="cards-container__ubication-icon"></figure>Beverly Hills, CA</p>
  //           </div>
  //           <p class="cards-container__direction-text">272 S Rexford Dr, Beverly Hills, CA 90212, USA</p>
  //           <div class="cards-container__owner">
  //             <div class="cards-container__owner-div">
  //               <p class="cards-container__owner-p"><figure class="cards-container__owner-photo" ><img src="./img/agent-image.webp" alt=""></figure> John Doe</p>
  //             </div>
  //             <div class="cards-container__calendar-div">
  //               <p class="cards-container__owner-p-2"><figure class="cards-container__calendar"></figure><strong>4 </strong> months ago</p>
  //             </div>
  //           </div>
  //           <div class="cards-container__otherInfo-div">
  //             <div class="cards-container__sizeInfo">
  //               <p><figure class="cards-container__ft-icon"><img src="./img/area-icon.webp" alt=""></figure><strong>2400</strong>  Sq Ft</p>
  //             </div>
  //             <div class="cards-container__icons-div">
  //               <p><figure class="cards-container__icon-garage"><img src="./img/garage-icon.webp" alt=""></figure>2<figure class="cards-container__icon-bathroom"><img src="./img/bathroom-icon.webp" alt=""></figure>3<figure class="cards-container__icon-bedroom"><img src="./img/bedroom-icon.webp" alt=""></figure>3</p>
  //             </div>
  //           </div>
  //         </article>  