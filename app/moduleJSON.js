export function moduleJSON () {
    let myObj = {
        isAdmin: true,
        name: `Anton`,
        surname: 'Nemesh',
        age: 31,
        city: 'Cherkasy',
        today: new Date,
        personalData: {
            weight: 70,
            height: 176
        }
    }
    console.log(myObj);
    let myJSON = JSON.stringify(myObj, (key, value) => {
        return (typeof value === 'boolean') ? undefined : value;
    }, 3);
    console.log(myJSON);
    myJSON = JSON.parse(myJSON, (key, value) => {
        if (key === 'today') value = new Date(value);
        return value;
    });
    console.log(myJSON);
    console.log(myJSON.today.getFullYear());
    console.log('');

    let room = {
        number: 23,
    };

    let meetup = {
        title: "Conference",
        room
    };

    // meetup.place = room;
    // room.occupiedBy = meetup;

    console.log( JSON.stringify(room) );
    console.log( JSON.stringify(meetup) );

    room.toJSON = function () { return `Just ${this.number}`; }
    meetup.toJSON = function () { return `${this.title} and ${this.room.number}` }

    console.log('1');

    console.log( JSON.stringify(room) );
    console.log( JSON.stringify(meetup) );
}