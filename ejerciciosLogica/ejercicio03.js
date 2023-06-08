/*Defino la función countNameRepetitions*/

const countNameRepetitions=(nombres) => {
    const red=[... new Set(nombres)];
    const resultado = [];
    const rta =[]
    nombres.forEach(el => (resultado[el] = (resultado[el]||"")+"*"));
    return resultado
    }

const nombres = ["Arturo","Diego","Mateo","Juan","Diego","Andrés","Matilde","Tatiana","Andrés","Pancracio","Tatiana","Jonás","Milan","Tommy"]
console.log(nombres,"\n","countNameRepetitions (names)",countNameRepetitions(nombres));