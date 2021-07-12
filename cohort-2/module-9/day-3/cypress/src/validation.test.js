import {valid, validPassword, validUsername} from "./validation";
import axios from 'axios';

// mock modules here
jest.mock('axios');

describe('validPassword', () => {
    // cant mock here!

    test('returns false when weak password is used', async () => {
        expect(await validPassword({password: "password"})).toBeFalsy();
    });

    test('returns false when password is too short', async () => {
        expect(await validPassword({password: "1"})).toBeFalsy()
    });

    test('returns false when contains weak password', async () => {
        expect(await validPassword({password: "123456789"})).toBeFalsy()
        expect(await validPassword({password: "safepassword"})).toBeFalsy()
    });

    test('returns true when strong password, and not recently used', async () => {
        axios.post.mockImplementation(() => Promise.resolve({success: true}));
        expect(await validPassword({password: "TqtJFDiEKW-i64yZpYTH"})).toBeTruthy();
    });

    test('returns false when strong password, and recently used', async () => {
        axios.post.mockImplementation(() => Promise.resolve({success: false}));
        expect(await validPassword({password: "TqtJFDiEKW-i64yZpYTH"})).toBeFalsy();
    });
})

describe('validUsername', () => {
    test('returns false when reserved', async () => {
        expect(await validUsername({username: "admin"})).toBeFalsy(); // reserved
        expect(await validUsername({username: "user"})).toBeFalsy(); // reserved
        expect(await validUsername({username: "system"})).toBeFalsy(); // reserved
    });

    test('returns false when username taken', async () => {
        axios.post.mockImplementation(() => Promise.resolve({success: false}));
        expect(await validUsername({username: "taken"})).toBeFalsy(); // reserved
    });
})

describe('valid', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('returns true if already computed', async () => {
        window.localStorage.setItem("nathan", "valid");
        expect(await valid({username: "nathan", password: "2384902y3jnkzxc"})).toBeTruthy()
    });

    test('returns false if not computed', async () => {
        expect(await valid({username: "nathan", password: "password"})).toBeFalsy()
    });
});

