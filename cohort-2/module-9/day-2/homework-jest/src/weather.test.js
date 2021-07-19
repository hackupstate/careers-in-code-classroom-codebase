import {shouldWearJacket} from "./weather";

describe('weather', () => {
    it('should return true', async () => {
        expect(await shouldWearJacket("syracuse")).toEqual(true);
    })
})