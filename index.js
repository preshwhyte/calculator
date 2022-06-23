

let operator=prompt("Choose one : + (for addition) , - (subtraction) , * (multiply) , / (division) ")
let num1=parseFloat(prompt("number One:"))
let num2=parseFloat(prompt("number Two:"))

if (operator=="+"){
    let addition=num1 + num2;
    alert("your answer is: "+ " " + addition)
    console.log(addition)
}
else if (operator=="-"){
    let subtraction=num1 - num2;
    alert("your answer is: " + " " + subtraction)
    console.log(subtraction)
}
else if (operator=="*"){
    let multiplication=num1 * num2;
    alert("your answer is:"+ " " + multiplication)
    console.log(multiplication)
}
else if (operator=="/"){
    let division=num1 / num2;
    alert("your answer is:"+ " "+ division)
    console.log(division)
}
else{
    alert("input the right operator: +, -, *, /")
    console.log("input the right operator: +, -, *, /")
}