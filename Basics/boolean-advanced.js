let isAccountLocked = true;
let userRole = 'admin';

if (isAccountLocked)
{
    console.log('Account is Locked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome');
}


//challenge area:
let temp = 45;

if (temp <= 32)
{
    console.log('It is freezing outside!');
} else if (temp > 80) {
    console.log('It is too hot outside');
} else {
    console.log('Go outside, it is great');
}