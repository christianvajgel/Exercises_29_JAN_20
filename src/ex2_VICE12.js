let
    input = "4 5 6",
    output = input.split(" ");

if (output[0] > 0 && output[0] <= 100 &&
    output[1] > 0 && output[1] <= 100 &&
    output[2] > 0 && output[2] <= 100){
        output.sort(function(a, b){return a-b});
        console.log("The vice-champion score is " + output[1]);
} else {
    console.log("Invalid parameters.")
}