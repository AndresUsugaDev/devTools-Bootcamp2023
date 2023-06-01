const createPhoneNumber=(numero) => {
    while (numero>0 && numero.toString().length===10){
        const tx1=Array.from(numero.toString().substring(0,3));
        const tx2=Array.from(numero.toString().substring(3,6));
        const tx3=Array.from(numero.toString().substring(6,10));
        tx1.unshift("(");
        tx1.push(")");
        tx2.unshift(" ");
        tx2.push("-");
        return tx1.concat(tx2,tx3).join("");
    }
    }
let numero = 3128669939;
console.log("createPhoneNumber",Array.from(numero.toString(),Number),"=>",createPhoneNumber(numero));