export const validatePassword = (password) => {
    if (password.length < 8) {
        return false;
    }

    const commonPasswords = [
        'password',
        '12345678',
        '        ',
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

// What the code should do
// 1. check that the password is >7 characters in length
// 2. not be a "commonly used" password
// 3. make sure it has at least one special character

console.assert(validatePassword("password") === false);
console.assert(validatePassword("12345678") === false);
console.assert(validatePassword("        ") === false);
console.assert(validatePassword("cat") === false);
console.assert(validatePassword("hjgjklhgj") === false, "missing special character");
console.assert(validatePassword("hjgjklhg@") === true);