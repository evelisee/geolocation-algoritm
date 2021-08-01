console.log('caiu aqui')
// const stores = [
//     [40,88],
//     [18, 56],
//     [99,2],
// ]
// let map;
const stores = [
    [-23.5422422, -46.6598244],
    [-23.5628081, -46.6719082],
    [-25.4314756, -49.2710761],
    [-23.4751418, -46.525286],
    [-29.6636174, -51.142409]
]
// const client = [20, 32]
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

export function addBaloonInformation(coordinate) {
    let storeBaloon = mockStoresNike.find((store) => store.coordinates[0] === coordinate[0] && store.coordinates[1] === coordinate[1]);
    return {
        content: `
            <h4><strong>${storeBaloon.address}</strong><h4>
            <p>CEP: ${storeBaloon.cep}</p>
            <p>Tel. ${storeBaloon.phone}<br /></p>s
            `
        }
}

export function addPointerToMap(client){
    const image = "https://images.lojanike.com.br/landingpage/ni/938/1/assets/img/square-pin-preto.svg";
    sortStoresByDistance(client).forEach((pointer) => {
        let latLangProp = {lat: pointer[0], lng: pointer[1] };
        let marker = new google.maps.Marker({
            position: latLangProp, 
            map,
            icon: image,
        });

        let bubbleInformation = new google.maps.InfoWindow(addBaloonInformation(pointer));
        google.maps.event.addListener(marker, 'click', function() {
          bubbleInformation.open(map,marker);
        });
    })

}


const mockStoresNike = [
    {
        address: 'Av. Higienópolis, 618 - Higienópolis - SP',
        cep: '01238-000',
        phone: '(11) 3667-9653',
        category: 'Nike Store',
        coordinates: [-23.5422422, -46.6598244],
    },
    {
        address: 'R. Oscar Freire, 969 - Jardim Paulista - SP',
        cep: '01426-003',
        phone: '(11) 3068-0044',
        category: 'Nike Store',
        coordinates: [-23.5628081, -46.6719082],
    },
    {
        address: 'Rua Barão de Rio Branco, 136 - Centro - Curitiba - PR',
        cep: '80010-180',
        phone: '(41) 3358-0621',
        category: 'Nike Factory Store',
        coordinates: [-25.4314756, -49.2710761]
    },
    {
        address: 'Rod. Pres. Dutra, KM 222,3 - Jardim Santa Francisca, Guarulhos - SP',
        cep: '07034-000',
        phone: '(11) 2189-0586',
        category: 'Nike Factory Store',
        coordinates: [-23.4751418, -46.525286]
    },
    {
        address: 'Rua Rincao, 505 Complemento: Salas 201 a 205 e 241 a 242 - Rincao - RS',
        cep: '93310-460',
        phone: '(51) 3303-3812',
        category: 'Nike Factory Store',
        coordinates: [-29.6636174, -51.142409]
    }
]
