// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


// Kata 1: Use the .filter() method
const KATA1 = document.createElement('h1')
main.append(KATA1)
KATA1.append('KATA 1: ')
// Filter the users array to show only the users with an isActive property of true.
const isActiveFilter = users.filter(user => user.isActive)
main.append(JSON.stringify(isActiveFilter))
console.log(isActiveFilter)


// Kata 2: Use the .map() method
const KATA2 = document.createElement('h1')
main.append(KATA2)
KATA2.append('KATA 2: ')
// Map over the users array to show only the email addresses of the users.
const emailAddressMap = users.map(user => user.email)
main.append(JSON.stringify(emailAddressMap))
console.log(emailAddressMap)


// Kata 3: Use the .some() method
const KATA3 = document.createElement('h1')
main.append(KATA3)
KATA3.append('KATA 3: ')
// Check whether at least one user in the users array has a company property of "OVATION".
const someCompanyOvation = users.some(user => user.company == 'OVATION')
main.append(JSON.stringify(someCompanyOvation))
console.log(someCompanyOvation)


// Kata 4: Use the .find() method
const KATA4 = document.createElement('h1')
main.append(KATA4)
KATA4.append('KATA 4: ')
// Find the first user in the array over the age of 38.
const olderThan38 = users.find(user => user.age > 38)
main.append(JSON.stringify(olderThan38))
console.log(olderThan38)


// Kata 5: Use the .filter() and .find() methods
const KATA5 = document.createElement('h1')
main.append(KATA5)
KATA5.append('KATA 5: ')
// Find the first user in the array over the age of 38 who is active.
const olderThan38isActive = users
    .filter(user => user.age > 38)
    .find(user => user.isActive)
main.append(JSON.stringify(olderThan38isActive))
console.log(olderThan38isActive)


// Kata 6: Use the .filter() and .map() methods
const KATA6 = document.createElement('h1')
main.append(KATA6)
KATA6.append('KATA 6: ')
// Show the balance of every user in the array from the "ZENCO" company.
const balanceOfZenco = users
    .filter(user => user.company == 'ZENCO')
    .map(user => user.balance)
main.append(balanceOfZenco)
console.log(balanceOfZenco)


// Kata 7: Use the .filter() method with .includes()
const KATA7 = document.createElement('h1')
main.append(KATA7)
KATA7.append('KATA 7: ')
// Show the age of every user with the "fugiat" tag.
const ageOfFugiat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
main.append(JSON.stringify(ageOfFugiat))
