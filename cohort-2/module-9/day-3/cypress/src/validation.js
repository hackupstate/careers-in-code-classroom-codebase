import axios from "axios";

const weakPasswords = [
    'password',
    '123456',
]

const reservedUsernames = [
    'admin',
    'user',
    'system',
]

export class API {
    wasPasswordUsedRecently(password) {
        return axios.post("api/v1/users/checkPassword", {'password': password}).then(res => res.data);
    }

    isUsernameTaken(username) {
        return axios.post("api/v1/users/checkUsername", {'username': username}).then(res => res.data);
    }
}

const api = new API();

export const valid = async ({username, password}) => {
    if (window.localStorage.getItem(username)) {
        return true;
    } else {
        if (await validPassword({password: password}) && await validUsername({username: username})) {
            window.localStorage.setItem(username, "valid");
            return true;
        }
    }
    return false;
}

export const validUsername = async ({username}) => {
    if (reservedUsernames.includes(username)) {
        return false;
    }

    // more rules
    const data = await api.isUsernameTaken(username);
    return data.success;
};

export const validPassword = async ({password}) => {
    // too common
    if (weakPasswords.includes(password)) {
        return false;
    }

    // too short
    if (password.length < 8) {
        return false;
    }

    for (let weakPassword of weakPasswords) {
        if (password.indexOf(weakPassword) > -1) {
            return false;
        }
    }

    const data = await api.wasPasswordUsedRecently(password);
    console.log(data.success);
    return data.success;
};