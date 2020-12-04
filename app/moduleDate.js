export function moduleDate() {
    function daysCounter(date) {
        const now = new Date;
        let result = new Date (now - date);
        console.log(`
    From ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} past ${Math.floor(result/8.64e7)} days.
    `);
    }

    const freedomDate = new Date(2020, 0, 21);
    daysCounter(freedomDate);
}