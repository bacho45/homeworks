number = [3,7,12,5,8];
squares = number.map(num => num * num)

console.log(squares)



number = [1,2,3,4,5,6,7,8,9];
oddNumbers = number.filter(num => num % 2 !==1)

console.log(oddNumbers)


number = [1,2,3,4,5];
total =number.reduce((accumulator,currentValue) => accumulator + currentValue, 0)

console.log(total)


let numbers = [20];
let age = 10;

let checkNumbers = (numbers > age && numbers % 2 === 0)
console.log(checkNumbers)