import { mockStoresNike, stores } from '../../mocks/store.js';

let markersArray = [];


function calcDistante(origin, point){
    const xA = origin[0];
    const xB = point[0];
    const yA = origin[1];
    const yB = point[1];

    const cateto1 = ((xB) - (xA));
    const cateto2 = ((yB) - (yA));
    const distanceHypotenuse = Math.sqrt((Math.pow(cateto1, 2)) + (Math.pow(cateto2, 2)));
    return distanceHypotenuse;
}

export function sortStoresByDistance(client){
    return getNearestStores(client).slice(0, 3);
}
export function getNearestStores(client){
    return stores.sort((a,b) => calcDistante(client, a) < calcDistante(client, b) ? -1 : 1)
}

export function showAddressInformation(coordinate) {
    const store = mockStoresNike.find((store) => store.coordinates[0] === coordinate[0] && store.coordinates[1] === coordinate[1]);
    let storeInformationBlock = `<div class="block-store">
            <h3 class="neutral-500 font-24">${store.name}</h3>

            <div class="container-address grey">
                <p class="font-14">${store.address}, ${store.cep} </p>
                <div class="hour font-12">
                    <p>Atendimento:</p>
                    <p>Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
                    <p>Telefone: ${store.phone}</p>
                    <p class="green neutral-600">Disponível em ${store.availabilityInDays} dias úteis</p>
                </div>
            </div>
        </div>`;

    document.getElementById('storeInformationList').innerHTML += storeInformationBlock;
    
}

export function addPointerToMap(client){
    deleteOverlays();
    sortStoresByDistance(client).forEach((pointer) => {
        addMarker(new google.maps.LatLng(pointer[0], pointer[1]));
        showAddressInformation(pointer);
    })

}

function addMarker(location) {
    const image = "https://images.lojanike.com.br/landingpage/ni/938/1/assets/img/square-pin-preto.svg";
    let marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: image
    });
    markersArray.push(marker);
  }

  function deleteOverlays() {
    if (markersArray) {
      for (let i in markersArray) {
        markersArray[i].setMap(null);
      }
      markersArray.length = 0;
    }
  }
