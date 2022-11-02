 //creamos una funcion para añadir numeros al box
 function addNumbers(val){
    document.getElementById("result").value += val
};
//creamos la funcion de la operacion
function operation(){
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById("result-final").value = b;
    return b;
}
//creamos la funcion de clear
function cl(){
    document.getElementById("result").value = "";
    document.getElementById("result-final").value = "";
}


