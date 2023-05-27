// Fonksiyonlara parametreler atamak ve fonksiyonlara geridönüş almak

// Temel Kurallar : 
// 1: Bir fonksiyon bir veya birden fazla parametreler alınabilir veya hiç almayabilir
// 2: Bir fonksiyona dışarı bilgi gönderilebilir(return) veya gondermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.


let fname = "Mete"

function greetings (fname = "", lname = "")
{
    console.log(`Merhaba ${fname}`)
    console.log(`Merhaba ${fname}, ${lname}`)
}


console.log(fname) // Değişken
greetings() // Fonksiyona parametre göndermedik ?
greetings("Parametre")
