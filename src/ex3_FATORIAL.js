let fat = [12,13,14],
    result = 1,
    count = 1,
    instanceCounter = 1;

for (let i = 0; i < fat.length; i++) {
    let aux = String(calculateFactorial(fat[i]));
    console.log("Instance " + instanceCounter +
                "\n" + getNumber(aux) + "\n");
    instanceCounter++;
}

function getNumber(aux) {
    let pos = Number(aux.length-1);

    for (pos; pos > -1; pos--) {
        if (aux.charAt(pos) !== "0") {
            return String(aux.charAt(pos));
        }
    }
}

function calculateFactorial(number) {
    for (count; count <= number; count++) {
        result *= count;
    }
    return result;
}