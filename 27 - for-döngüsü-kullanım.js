// For döngüsü kullanımı


// for(başlangıç değeri; koşul; artış miktarı) 

// Başlangıç değeri: Döngünün başlangıç değerini belirtir.
// Koşul: Döngünün çalışması için sağlanması gereken koşulu belirtir.
// Artış miktarı: Döngü her çalıştığında başlangıç değeri artış miktarı kadar artar.

for (let i = 1; i <= 10; i++)
{
    document.write(i);
}
  

let users = ["Car" , "Bike" , "Plane"]

const userListDOM = document.querySelector("#userList");

for ( index = 0; index < users.length; index++)
{
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM) 
}
