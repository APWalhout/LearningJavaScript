let restaurant = {
    name: 'cosi',
    guestCapacity: 75,
    guestCount: 73,
    //method is a function that is a property of an object, a helper method
    checkAvailability: function (partySize) 
    {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize)
    {
        //could throw in a reference to checkavailability as an error catch
        this.guestCount += partySize;
    },
    removeParty: function (partySize)
    {
        this.guestCount -= partySize;
    }
}

//seatParty
//removeParty

let status = restaurant.checkAvailability(4);
restaurant.removeParty(4)
console.log(status);