import { stores } from '../../mocks/store.js';

export function calcDistance(origin, point){
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
    return getNearestStores(client, stores).slice(0, 3);
}
export function getNearestStores(client, stores){
    return stores.sort((a,b) => calcDistance(client, a) < calcDistance(client, b) ? -1 : 1)
}