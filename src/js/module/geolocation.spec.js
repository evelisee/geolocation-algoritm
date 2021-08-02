import { calcDistance, getNearestStores } from './geolocation.js';

describe('calcDistance()', () => {
    it('should return hipotenuse value', () => {
        const origin = [20, 32];
        const point = [40,88];
        expect(calcDistance(origin, point)).toBe(59.464274989274024);
    });
});

describe('getNearestStores()', () => {
    it('should return list by neasert location', () => {
        const client =  [20, 32];
        const stores = [[40,88], [18, 56], [99, 2]];
        expect(getNearestStores(client, stores)).toMatchObject([[18,56],[40,88],[99,2]]);
    });
});