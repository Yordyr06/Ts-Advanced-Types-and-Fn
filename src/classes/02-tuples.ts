const prices: (number | string)[] = [1, 2, 3, 4]
prices.push(5)
prices.push("yalmonte");

let user: [string, number]
user = ["yalmonte", 28];

// user = []
// user = [""]
// user = [0]
// user = ["yalmonte", 28, 0]

const [username, age] = user
console.log(username);
console.log(age);