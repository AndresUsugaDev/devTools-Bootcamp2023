/*Defino la función countNameRepetitions*/

const countNameRepetitions=(nombres) => {
    const red=[... new Set(nombres)];
    const resultado = [];
    const rta =[];
    nombres.forEach(el => (resultado[el] = resultado[el] + "*" || "*"));
    //console.log(resultado)
    for (let i=0; i<red.length;i++){
        rta.push(red[i]+":"+resultado[red[i]].substring(9));
    }//Este ciclo elimina el término undefined uqe sale por defecto en la línea 8
    return rta;
    }

const nombres = ["Arturo","Diego","Mateo","Juan","Diego","Andrés","Matilde","Tatiana","Andrés","Pancracio","Tatiana","Jonás","Milan","Tommy"]
console.log(nombres,"\n","countNameRepetitions (names)",countNameRepetitions(nombres));