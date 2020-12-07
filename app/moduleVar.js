export function moduleVar() {
    console.log(`Var before = ${myVar}`);
    var myVar = 'This is VAR';
    console.log(`Var after = ${myVar}`);
}