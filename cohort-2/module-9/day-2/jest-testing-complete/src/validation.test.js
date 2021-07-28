import * as passwordChecker from "./passwordChecker"

import {validatePassword} from "./validation";
import axios from "axios";

jest.mock('axios');

describe('validatePassword', () => {
    it('should reject common passwords', async () => {
        let spy = jest.spyOn(passwordChecker, "wasPasswordUsedRecently").mockImplementation(async (password) => Promise.resolve(false))

        expect(await validatePassword("password")).toEqual(false);
        expect(await validatePassword("12345678")).toEqual(false);

        spy.mockRestore();
    });

    it('should reject short passwords', async () => {
        axios.post.mockImplementation(() => Promise.resolve({data: {recentlyUsed: false}}));
        expect(await validatePassword("cat")).toEqual(false);
    });

    it('should reject passwords missing a special character', async () => {
        axios.post.mockImplementation(() => Promise.resolve({data: {recentlyUsed: false}}));
        expect(await validatePassword("hjgjklhgj")).toEqual(false);
    });

    it('should accept passwords that meet criteria', async () => {
        axios.post.mockImplementation(() => Promise.resolve({data: {recentlyUsed: false}}));
        expect(await validatePassword("hjgjklhg@1")).toEqual(true);
    });

    it('should reject passwords that were used recently', async () => {
        axios.post.mockImplementation(() => Promise.resolve({data: {recentlyUsed: true}}));
        expect(await validatePassword("hjgjklhg@1")).toEqual(false);
    });

    it('should return false if theres an error', async () => {
        axios.post.mockImplementation(() => Promise.reject("request failed!"));
        expect(await validatePassword("hjgjklhg@1")).toEqual(false);
    });
});
