console.log("Test")
const characters = [
    Spongebob = {
        fname: 'Spongebob',
        lname: 'Squarepants',
        age: 18,
        parents: ['Harold Squarepants', 'Margret Squarepants']
},
 Patrick = {
    fname: 'Patrick',
    lname: 'Star',
    age: 37,
    parents: ['Herb Star', 'Margie Star']
},
 Squiqward = {
    fname: 'Squidward',
    lname: 'Tentacles',
    age: 30,
    parents: ['Jeff Tentacles', 'Mrs. Tentacles']
},
 Krabs = {
    fname: 'Eugene',
    lname: 'Krabs',
    age: 18,
    parents: ['Krabs Senior', 'Betsy Krabs']
}]
characters.forEach((name)=>
    console.log(name.fname)
)
const young = characters.filter((old)=>
    old.age < 21
)
console.log(young);
