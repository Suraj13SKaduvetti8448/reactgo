const I = require('i');

// const myString = "hello world from I package";

// // Create a new instance of I
// const str = new I(myString);

// // Use some methods from the i package
// console.log('Original:', myString);
// console.log('Original:', I(myString)); //hello world from I package
// console.log('CamelCase:', str.camel());        // helloWorldFromIPackage
// console.log('Capitalized:', str.capitalize()); // Hello world from I package
// console.log('Dashed:', str.dasherize());       // hello-world-from-i-package
// console.log('Slug:', str.slugify());            // hello-world-from-i-package


const i = new I();

console.log('Pluralize "cat":', i.pluralize('cat'));           // cats
console.log('Pluralize "person":', i.pluralize('person'));     // people
console.log('Singularize "buses":', i.singularize('buses'));   // bus
console.log('Singularize "children":', i.singularize('children')); // child
