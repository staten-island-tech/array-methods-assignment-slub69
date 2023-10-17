console.log("Connected...\n\n\n")
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
characters.forEach((name) => {
    console.log(name.fname + ' ' + name.lname)
    name.parents.forEach((parent) => {
        console.log('Parents are ' + parent)
    })
    console.log('\n')
});


/* characters.forEach((parent)=>check_parents())
check_parents(){
    parent.forEach(m_f)=>console.log(parent.fname + ' and ' + parent.lname + ' are ')}
const young = characters.filter((old)=>old.age < 18)
young.forEach((young_name)=>console.log(young_name.fname + ' is a minor.')) */