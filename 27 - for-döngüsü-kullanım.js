// For döngüsü kullanımı


// for(başlangıç değeri; koşul; artış miktarı) 

// Başlangıç değeri: Döngünün başlangıç değerini belirtir.
// Koşul: Döngünün çalışması için sağlanması gereken koşulu belirtir.
// Artış miktarı: Döngü her çalıştığında başlangıç değeri artış miktarı kadar artar.

for (let i = 1; i <= 10; i++)
{
    document.write(i);
}
  


// "users" adında bir dizi tanımlanır ve içine üç farklı string atılır.
let users = ["Car" , "Bike" , "Plane"]

// HTML'deki "#userList" id'li element seçilir ve "userListDOM" adında bir değişkene atanır.
const userListDOM = document.querySelector("#userList");

// for döngüsü kullanılarak "users" dizisinin tüm elemanları üzerinde gezinilir.
// "index" adında bir değişken tanımlanır ve 0 olarak başlangıç değeri atanır.
// Döngü her çalıştığında "index" değeri 1 artar ve dizinin sonuna kadar döngü devam eder.
for ( index = 0; index < users.length; index++)
{
    // Her döngüde, "liDOM" adında bir <li> elementi oluşturulur.
    const liDOM = document.createElement("li")

    // <li> elementinin içeriği, "users" dizisindeki ilgili elemanla değiştirilir.
    liDOM.innerHTML = users[index]

    // <li> elementi, "userListDOM" elementinin içine eklenir.
    userListDOM.appendChild(liDOM) 
}

