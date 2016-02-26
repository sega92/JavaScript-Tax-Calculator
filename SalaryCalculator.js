//EVENT LISTENER : User action is stored into a variable named event1. Calls the function calc() when the button1 is clicked
var event1 = document.getElementById("button1");
event1.addEventListener('click',calc, false);

//Creating the function that calc salary tax and displays the result into the DOM. It doesn't return a value.
function calc(){

//User input 1 convert in JS to a number and the value is stored into a variable usersalary
var grsalary = parseInt(document.getElementById("input1").value);
    
//Declaring number variables
var taxrate = 0;
var taxrate20 = 0;
var taxrate40 = 0;
var taxfree = 10600;
var netsalary = 0;

//Using if condition to check and calculate users tax rate and netsalary
if (grsalary <= taxfree){
    taxrate = 0;
    netsalary = grsalary - taxrate;
}
else if(grsalary >= taxfree && grsalary <= 31000){
    taxrate20 = 0.2 * (grsalary - taxfree);
    netsalary = grsalary - taxrate20;
}
else {
    taxrate40 = 0.4 * (grsalary - 31000);
    taxrate20 = 0.2 * (31000 - taxfree);
    netsalary = grsalary - (taxrate20 + taxrate40);
}   
    
//Writing the output results into DOM    
document.getElementById("demo").innerHTML = "<br>Your Gross Annual Salary: $" + grsalary + "<br><br>Tax free allowance: $" + taxfree + "<br>Tax at 20%: $" + taxrate20 + "<br>Tax at 40%: $" + taxrate40 + "<br><br>Net Salary: $" + netsalary+ "<br>"; 

}
