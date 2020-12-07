export function modulePrototype() {
    let user = {
        name: 'Anton',
        surname: 'Nemesh',
        get fullName() {
            return `${this.name} ${this.surname}`
        },
        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        }
    }

    let isAdmin = {
        admin: true,
        __proto__: user,
    }

    console.log(user.fullName);
    console.log('');
    console.log(isAdmin.fullName);
    isAdmin.fullName = 'Super Administrator';
    console.log(isAdmin.fullName);

}