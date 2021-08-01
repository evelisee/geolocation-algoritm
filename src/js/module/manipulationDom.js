import { addPointerToMap } from '../module/geolocation.js'

const buttonSearchGeolocation = document.getElementById('searchGeolocation');
const coordinateInput = document.getElementById('coordinateInput');


buttonSearchGeolocation.addEventListener('click',() => {
    const coordinate = [...coordinateInput.value.split(',')];
    console.log(coordinate);
    console.log(-23.5421282,-46.6971003);
    console.log(addPointerToMap(coordinate))
});