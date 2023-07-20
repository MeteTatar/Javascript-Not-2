// Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı ve Metodları
let laptop = 
{
    brand : "MSI",
    model : "GE72 Apache Pro",
    kg : "3.5"
}



// doğru anahtar bilgisi oluşturmak

console.log(laptop, laptop["brand"]);
console.log(laptop.model, laptop["model"]);

// Anahtar bilgisine yeni değer eklemek

laptop.kg = "4.5"
laptop["brand"] = "Monster"

// Yeni bilgi eklemek

laptop.version = "10.24.75"

// Anahtar bilgilerine ulaimak (keys) -> Object.keys(item)

keys = Object.keys(laptop)
console.group(keys)
console.log(Object.keys(laptop))

keys.forEach (keyInfo =>
    {
        console.log(keyInfo)
        console.log(laptop[keyInfo])
    })

// Değer bilgilerne ulasmak (values) -> Object.values(item)

console.log
(
    Object.values(laptop)
)

let values = Object.values(laptop)

values.forEach(value =>
    {
        console.log("value = ", value)
    })
