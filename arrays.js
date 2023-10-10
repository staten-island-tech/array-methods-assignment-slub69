console.log("Connected")
const characters = [
    Spongebob = {
        fname: 'Spongebob',
        lname: 'Squarepants',
        age: 17,
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
    age: 17,
    parents: ['Krabs Senior', 'Betsy Krabs']
}]
characters.forEach((name)=>console.log(name.fname))
characters.forEach((parent)=>console.log(parent.fname + '\'s dad is ' + parent.parents[0] + '.'))
characters.forEach((parent)=>console.log(parent.fname + '\'s mom is ' + parent.parents[1] + '.'))
const young = characters.filter((old)=>old.age < 18)
young.forEach((young_name)=>console.log(young_name.fname + ' is a minor.'))
