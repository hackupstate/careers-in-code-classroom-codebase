// What the code should do
// 1. password has a length > 7
// 2. password isnt a commonly used password
// 3. has at least 1 special character

// What the code shouldnt do
// 1. it shouldnt allow anything that doesnt conform to these rules

const commonPasswords = [
    'password',
    'password1',
    '123456789',
];

export function isPasswordValid(password) {
    if (password.length < 8) {
        return false;
    }

    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialCharacters.test(password)) {
        return false;
    }

    for (let commonPassword of commonPasswords) {
        if (password.indexOf(commonPassword) > -1) {
            return false
        }
    }

    return true;
}
