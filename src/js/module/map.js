import { mockStoresNike } from '../../mocks/store';
import { sortStoresByDistance } from './geolocation';

export let markersArray = [];

export function addMarker(location) {
    const image = "https://images.lojanike.com.br/landingpage/ni/938/1/assets/img/square-pin-preto.svg";
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });
    markersArray.push(marker);
}

export function showAddressInformation(coordinate) {
    const store = mockStoresNike.find((store) => store.coordinates[0] === coordinate[0] &&
        store.coordinates[1] === coordinate[1]
    );
    const storeInformationBlock = `<div class="block-store">
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

    document.getElementById("storeInformationList").innerHTML += storeInformationBlock;
}

export function deleteOverlays() {
    if (markersArray) {
        for (let i in markersArray) {
        markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
}

export function addPointerToMap(client) {
    deleteOverlays();
    sortStoresByDistance(client).forEach((pointer) => {
        addMarker(new google.maps.LatLng(pointer[0], pointer[1]));
        showAddressInformation(pointer);
    });
}