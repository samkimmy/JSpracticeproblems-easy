function getObjectKeys(obj) {
    return Object.keys(obj);
}
const exampleObject = {
    name: "Sam",
    age: 34,
    profession: "Engineer"
};
console.log(getObjectKeys(exampleObject));