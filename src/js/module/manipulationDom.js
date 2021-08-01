import { addPointerToMap } from '../module/geolocation.js'

const buttonSearchGeolocation = document.getElementById('searchGeolocation');
const coordinateInput = document.getElementById('coordinateInput');
const mapAndListContainer = document.getElementById('mapAndListContainer');

buttonSearchGeolocation.addEventListener('click',() => {
    clearList();
    const coordinate = [...coordinateInput.value.split(',')];
    console.log(-23.5421282,-46.6971003);
    addPointerToMap(coordinate);
    mapAndListContainer.classList.remove('none');
});

function clearList() {
    document.getElementById('storeInformationList').innerHTML = '';
}