// Write your solution in this file!
// Declare a global variable called customerName using the var keyword
var customerName = "bob";

// A function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName.toLocaleUpperCase();
}


// A function that declares a global variable called bestCustomer and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = "not bob";
}

// A function that overwrites the value of the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant called leastFavoriteCustomer in global scope
const leastFavoriteCustomer = "Bob";

// A function that attempts to change the value of the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Sam"; // this will result in a TypeError since a const variable cannot be reassigned
}
