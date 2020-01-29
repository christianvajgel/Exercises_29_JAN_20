let number,
    result;

number = prompt("Enter the number to calculate: ");

if (number <= 10000){
    result = number * number;
    window.alert(number + "² = " + result);
} else {
    window.alert("The number you chose is greater than 10.000, try again!");
}