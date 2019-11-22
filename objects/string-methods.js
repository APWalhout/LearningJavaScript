let name = 'Alex Walhout';

//length property
console.log(name.length);

//convert to upper case
console.log(name.toUpperCase());
//documentation on mdn string in google
//a developer.mozilla.org page

console.log(name.toLowerCase());

//includes method
let password = 'abc123password098';
console.log(password.includes('password'));

//trim() removes extra white space before and after a string without touching middle
let trimStr = '  Alex Wal  hout ';
console.log(trimStr.trim());

//challenge area:
let isValidPassword = function (passcode)
{
    let wordCheck = passcode.toLowerCase();//this step allows quick checks for all forms of 'password' occurrence
    if ((passcode.length < 8) || (wordCheck.includes('password')))
    {
        return false;
    }
    return true;
}

console.log(isValidPassword('PaSSwoRd'));
console.log(isValidPassword('password'));
console.log(isValidPassword('123'));
console.log(isValidPassword('123abcd985frt'));