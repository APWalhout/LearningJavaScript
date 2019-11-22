let restaurant = {
    name: 'cosi',
    guestCapacity: 75,
    guestCount: 0,
    //method is a function that is a property of an object, a helper method
    checkAvailability: function (partySize) 
    {
        console.log(partySize);
    } 
}

restaurant.checkAvailability(4);