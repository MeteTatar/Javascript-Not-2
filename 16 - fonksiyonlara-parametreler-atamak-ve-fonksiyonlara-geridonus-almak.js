// Fonksiyonlara parametreler atamak ve fonksiyonlara geridönüş almak

// Temel Kurallar : 
// 1: Bir fonksiyon bir veya birden fazla parametreler alınabilir veya hiç almayabilir
// 2: Bir fonksiyona dışarı bilgi gönderilebilir(return) veya gondermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.


let fname = "Mete" // burada değişkene Mete ismini atadık yani bundan fonksiyonumuz etkilenmiyor

function greetings (fname = "Otto", lname = "red")
{
    console.log(`Merhaba ${fname}`)
    console.log(`Merhaba ${fname} ${lname}`)
}


console.log(fname) // Değişken
greetings() // Fonksiyona parametre göndermedik ?
greetings("sonra yazdır") // önce greetings fonksiyonunun içini yazdırıyor sonra parametreyi yazdırıyor


function greetings2(firstname, lastname)
{
    let info = `Merhaba ${firstname} ${lastname}`
    return info
}

let info = greetings2("info", "eklendi")
console.log(info)
