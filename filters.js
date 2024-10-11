// Original array of rockets
var rockets = [
    { name: 'Sally', age: 32 },
    { name: 'Bob', age: 23 },
    { name: 'Jim', age: 16 },
    { name: 'Scott Rhine', age: 7 },
    { name: 'Angie Davison', age: 4 },
    { name: 'James Munger', age: 3 }
];

// Print the original array
console.log('Original array:', rockets);

// Filter to include ONLY people of age 18 or higher
var adults = rockets.filter(function(person) {
    return person.age >= 18;
});

// Print the filtered array with only adults
console.log('Adults (age 18 or higher):', adults);
