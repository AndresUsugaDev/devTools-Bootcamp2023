/*Defino la función drawX para dibujar una X en una matriz cuadrada*/
const drawX=(dim) => {
    let c=1;
    let arr = [];
    while(c<dim+1){
        for (let i=1;i<dim+1;i++){
            if(i==c || i==dim-c+1){
                arr.push("*");
            }else{
                arr.push(" ");
            }
        }
        console.log(arr.join(""));
        c=c+1
        arr=[]
    }
}
let dim = 6;
drawX(dim)