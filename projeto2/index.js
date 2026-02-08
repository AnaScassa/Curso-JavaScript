// Value precisa ser numero
let value = Number(prompt("Enter the product value: "));

console.log(`The product value is: ${value}`);
console.log(typeof value);
// O tipo de dado retornado pelo prompt 

if (value >= 20){
    document.getElementById("result").innerHTML = "Approved";
}else{
    document.getElementById("result").innerHTML = "Rejected";
}