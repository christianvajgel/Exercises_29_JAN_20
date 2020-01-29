let
    input = " 3 \n Pedro \n Paulo \n 2 4 \n 3 5 \n 1 0 \n 2 \n Claudio \n Carlos \n 1 5 \n 2 3 \n 0",
    firstGame,
    secondGame;

input = input.split(" ");
searchForItem("");
searchForItem("\n");
firstGame = input.slice(3,9);
secondGame = input.slice(12,16);

console.log("\nFirst Test");
games(firstGame,"Pedro","Paulo");

console.log("\nSecond Test");
games(secondGame,"Claudio","Carlos");

function searchForItem(String) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === String){
            input.splice(i,1);
        }
    }
}

function gameChecker(n1,n2){
    return ((Number(n1) + Number(n2)) % 2) === 0;
}

function games(Array,nameOne,nameTwo) {
    for (let i = 0; i < Array.length; i = i + 2) {
        switch (gameChecker(Array[i],Array[i + 1])) {
            case true:
                console.log(nameOne);
                break;
            case false:
                console.log(nameTwo);
                break;
        }
    }
}