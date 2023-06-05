//Let me define the function wich return the palindrome
const next_Pal=(numero) => {
    const palindrome = (numero) => {
        return String(numero).split("").reverse().join("")===String(numero);
    }    
    while (!palindrome(numero)){
        numero++;
    }
    return numero;
    }

let numero = 2546;
console.log("Next palindrome to",numero,":",next_Pal(numero));