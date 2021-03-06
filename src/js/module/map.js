import { mockStoresNike } from '../../mocks/store';
import { sortStoresByDistance } from './geolocation';

export const markersArray = [];

export function addMarker(location) {
    const image = 'https://images.lojanike.com.br/landingpage/ni/938/1/assets/img/square-pin-preto.svg';
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
    });
    markersArray.push(marker);
}

export function showAddressInformation(coordinate) {
    const store = mockStoresNike.find((storeData) =>
        storeData.coordinates[0] === coordinate[0] && storeData.coordinates[1] === coordinate[1]);
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

    document.getElementById('storeInformationList').innerHTML += storeInformationBlock;
}

export function deleteOverlays() {
    if (markersArray) {
        for (const i in markersArray) {
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

function onKonamiCode(cb) {
    let input = '';
    const key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += (`${e.keyCode}`);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return null;
        input = (`${e.keyCode}`);
    });
}

onKonamiCode(function () { alert('You got an extra life :)'); });
