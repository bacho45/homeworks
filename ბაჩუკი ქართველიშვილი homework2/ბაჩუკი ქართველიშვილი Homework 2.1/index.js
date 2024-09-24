 let password = []

 password.push("PASWORD12345","pasword","pasword123")

 for (let i = 0; i < password.length; i++){
     password[i] = password[i].toLowerCase()
 }

let passwordStrength = []

for (let i =0; i < password.length; i++){
    passwordStrength[i] = password[i].length > 8 ? "strong" : "weak"
}

console.log(password)
console.log(passwordStrength)
 

for (let i = 0; i < password.length; i++) {
    let length = 0;
  
    for (let j = 0; j < password[i].length; j++) {
      length++;
    }
  
    console.log(length);
}

password.shift()

console.log(password)


password.unshift("pasword12")

console.log(password)
