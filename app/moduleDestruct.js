export function moduleDestruct() {
    let myObj = {
        name: 'Anton',
        surname: 'Nemesh',
        age: 31,
        isAdmin: true,
        city: 'Cherkasy',
        personalData: {
            weight: 70,
            height: 176
        }
    }

    const myArr = ['A', 'N', 31];

    for (let key in myObj) {
        console.log(`${key}: ${myObj[key]},`);
    }
    console.log('');

    for (let value of myArr) {
        console.log(`${value},`);
    }
    console.log('');

    for (let i = 0; i < myArr.length; i++) {
        console.log(`${i}: ${myArr[i]},`);
    }
    console.log('');

    for (let value of myObj.name) {
        console.log(`${value},`);
    }
    console.log('');
    const [, surname] = Object.entries(myObj);
    console.log('____________________________________________________________');
    console.log(surname);
    console.log('____________________________________________________________');

    console.log('');
    console.log(Object.entries(myObj));

    console.log('');
    for (let [key, value] of Object.entries(myObj)) {
        console.log(`${key}: ${value}`);
    }

    console.log('');
    const [firstProp, ...other] = myArr;
    console.log(`The first property from myArr equal '${firstProp}' and other property equal new array`, other)

    const {personalData: {height, weight}, surname: lastname, name, city: currentCity = 'World'} = myObj;
    console.log(`
    My name is ${name}.
    My surname is ${lastname}.
    I live in ${currentCity}!
    My weight is ${weight}, my height is ${height}.
    `);

    function displayInfo ({
                              name = 'DEFAULT VALUE',
                              surname: lastname= 'DEFAULT VALUE5',
                              city= 'DEFAULT VALUE',
                              personalData: { weight= 'DEFAULT VALUE', height= 'DEFAULT VALUE' }
                          }) {
        let displayInfo = `
    My name is ${name}.
    My surname is ${lastname}.
    I live in ${city}!
    My weight is ${weight}, my height is ${height}.
    `;
        console.log(displayInfo);
    }

    displayInfo(myObj);
    setTimeout(() => {
        displayInfo({personalData: {}});
    }, 3000);

    const map = new Map();
    map.set(myObj, 'Hello Anton');

    console.log(`myArr - ${myArr[1].name} \n myObj - ${myObj.name} \n map - ${map.keys()}`);

    myObj = null;

    console.log(`myArr - ${myArr[1].name} \n myObj - ${myObj?.name} \n map - ${map.keys()}`);

    for (let value of  map.values()) {
        console.log(`map - ${value}`);
    }

}