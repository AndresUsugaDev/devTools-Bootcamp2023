/*Defino la función countNameRepetitions*/
const countNameRepetitions=(nombres) => {
    const resultado = [];
<<<<<<< Updated upstream
    const rta =[];
    nombres.forEach(el => (resultado[el] = resultado[el] + "*" || "*"));
    //console.log(resultado)
    for (let i=0; i<red.length;i++){
        rta.push(red[i]+":"+resultado[red[i]].substring(9));
    }
    return rta;
=======
    nombres.forEach(el => (resultado[el] = (resultado[el]||"")+"*"));
    return resultado
>>>>>>> Stashed changes
    }
const nombres = ["Arturo","Diego","Mateo","Juan","Diego","Andrés","Matilde","Tatiana","Andrés","Pancracio","Tatiana","Jonás","Milan","Tommy"]
console.log(nombres,"\n","countNameRepetitions (names)",countNameRepetitions(nombres));