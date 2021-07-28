import axios from "axios";

export const wasPasswordUsedRecently = (password) => {
    return axios.post("https://de1ux-password-backend.herokuapp.com/password/check", {'password': password})
        .then((response) => {
            return response.data.recentlyUsed;
        })
        .catch(error => {
            return true;
        });
}


export const validatePassword = async (password) => {
    if (await wasPasswordUsedRecently(password)) {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    const commonPasswords = [
        'password',
        '12345678',
    ]

    if (commonPasswords.includes(password)) {
        return false;
    }

    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialCharacters.test(password)) {
        return false;
    }

    return true;
}
