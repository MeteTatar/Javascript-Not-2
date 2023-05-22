let price = 100
let user = "Mete"

// == Eşitse 

console.log ( price == 1 )
console.log ( price == "100")

// hem değeri hemde türü eşit ise

console.log ( price === 1 )
console.log ( price === "100")  

// != Eşit değilse

console.log(user != "guest")
console.log(user != "Mete")

// < Küçükse

console.log("price < 1000 = " , price < 1000)
 
// <= Küçük veya eşitse

console.log("price <= 1000 = " , price <= 1000)

// > Büyükse

console.log("price > 1000 = " , price > 1000)

// >= Büyükse veya eşitse

console.log("price => 1000 = " , price => 1000)

// && ve

price = 0

console.log(price > 0 && user != "guest")

// || Veya

console.log(price > 0 || user != "guest")

// ! değil (tersi)

user = "guest"
price = 1 

console.log(price > 0 && !user == "guest")

console.log(2)
