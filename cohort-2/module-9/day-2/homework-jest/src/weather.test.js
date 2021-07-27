import {shouldWearJacket} from "./weather";

jest.setTimeout(100000);

describe('shouldWearJacket', () => {
    it('should return true if the weather is too cold', async () => {
        // Part 2: mock the response of axios, emulate a cold temperature coming from the API
        expect(await shouldWearJacket("syracuse")).toEqual(true);
    })

    // Part 3: write a test that mocks the response of axios, emulates a warm temperature coming from the API

    // Part 4: (bonus) write a test that mocks the "getWeather" function (NOT axios), and returns a cold temperature
})