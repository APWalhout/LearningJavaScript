let temp = 65;

//logical AND operator: true iff A = true, B = true
if ((temp >= 60) && (temp <= 85))
{
    console.log('It is the perfect temperature outside');
}

//logical OR operator: true if at least one compared boolean is true
if ((temp <= 0) || (temp >= 120))
{
    console.log('Do not go outside, you will die of exposure');
}

//challenge area:
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) 
{
    console.log('Only Vegan Menus');
} else if (isGuestTwoVegan || isGuestOneVegan) {
    console.log('Both Options');
} else {
    console.log('Offer Any Options');
}