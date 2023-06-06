/*Defino la función FizzBuzz para determinar los mpultiplos de 3 o 5*/

const fizzBuzz=(numero) => {
    for (let i=1; i<=numero;i++){
        if (i%3==0 && i%5==0) {
            console.log("FizzBuzz");
        } else if (i%5==0) {
            console.log("Buzz");
        } else if (i%3==0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

let numero = 45;
fizzBuzz(numero);