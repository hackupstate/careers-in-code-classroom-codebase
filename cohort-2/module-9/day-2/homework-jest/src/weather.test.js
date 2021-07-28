import {shouldWearJacket} from "./weather";

jest.setTimeout(100000);

describe('shouldWearJacket', () => {
    it('should return true if the weather is too cold', async () => {
        // Part 2: write two tests
        // one test with a city that has a cold temperature
        // one test with a city that has a warm temperature
        expect(await shouldWearJacket("syracuse")).toEqual(true);
    })

    // Part 3: mock the response of axios, emulate a cold temperature coming from the API

    // Part 4: write a test that mocks the response of axios, emulates a warm temperature coming from the API

    // Part 5: (bonus) write a test that mocks the "getWeather" function (NOT axios), and returns a cold temperature
})