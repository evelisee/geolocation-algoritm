import { stores } from '../../mocks/store.js';

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