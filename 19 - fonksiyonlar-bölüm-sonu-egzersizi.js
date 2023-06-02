// fonksiyonlar bölüm sonu egzersizi

let counter = 0 // counter adında bir değişken tanımlanır ve 0 değeri atanır
let counterDOM = document.querySelector('#counter') // counterDOM adında bir değişken tanımlanır ve DOM'daki #counter elementi ile eşleştirilir
let increaseDOM = document.querySelector('#increase') // increaseDOM adında bir değişken tanımlanır ve DOM'daki #increase elementi ile eşleştirilir
let decreaseDOM = document.querySelector('#decrease') // decreaseDOM adında bir değişken tanımlanır ve DOM'daki #decrease elementi ile eşleştirilir


counterDOM.innerHTML = counter // counterDOM'un HTML içeriği counter değişkeninin mevcut değeriyle değiştirilir

increaseDOM.addEventListener("click" , clickevent) // increaseDOM'a bir click olayı dinleyicisi eklenir ve clickevent fonksiyonu çağrılır
decreaseDOM.addEventListener("click" , clickevent) // decreaseDOM'a bir click olayı dinleyicisi eklenir ve clickevent fonksiyonu çağrılır


function clickevent() // clickevent adında bir fonksiyon tanımlanır, bu fonksiyon sayesinde sayaç arttırılıp azaltılacaktır
{
    console.log(this.id) // console.log fonksiyonu aracılığıyla tıklanan butonun id'si konsola yazdırılır

    this.id == "increase" ? counter += 1 : counter -= 1 // Ternary operatörü kullanarak, tıklanan butonun id'sine göre sayaç değeri arttırılır veya azaltılır
    counterDOM.innerHTML = counter// counterDOM'un HTML içeriği güncellenir ve sayaç değeri görüntülenir
}

// Bu kod, sayfa üzerindeki HTML elementlerine erişmek için document.querySelector() yöntemini kullanır. querySelector() yöntemi, belirtilen CSS seçicisine göre ilk eşleşen HTML elementini döndürür. 
// Bu kodda, #counter, #increase ve #decrease CSS seçicileri kullanılarak, sırasıyla sayaçın mevcut değerini görüntülemek için bir span elementi ve arttırma/azaltma butonları için button elementleri seçilir.
// Daha sonra, arttırma ve azaltma butonlarına birer click olayı dinleyicisi eklenir. Bu olay dinleyicileri, butonlara tıklandığında çağrılacak olan clickevent() fonksiyonu ile ilişkilendirilir.
// clickevent() fonksiyonu, tıklanan butonun id'sine göre sayaç değerini arttırır veya azaltır. Arttırma veya azaltma işlemi ternary operatörü kullanılarak yapılır. Son olarak, sayaç değeri güncellenir ve HTML içeriği yenilenir.