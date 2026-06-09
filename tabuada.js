let num = parseInt(prompt("Digiti o número para a tabuada"))
console.log("Tabuada de " + num)
 for (let i = 1; i  <= 10; i++) {
    let res = num * i
    console.log(num , "X" , i , "=" , res);
 }