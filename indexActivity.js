console.log("Hello, Welcome to De La Salle University")

let firstName = "Emjay";
let lastName ="Billones";
let age = 19;
let hobbies = ["reading", "eating", "playing league of legends", "cooking", "studying"];
let homeAddress = {
    houseNumber: "B9 L7",
    street : "Greenheart",
    subdivision : "Greensborough",
    barangay : "Sabang",
    province : "Cavite",
    zipCode: 4114
};

console.log('First Name: ' +firstName);
console.log('Last Name: '+ lastName);
console.log('Age: ' + age);
console.log('Hobbies: ' + hobbies);
console.log(`Home Address: ${JSON.stringify(homeAddress)}`)