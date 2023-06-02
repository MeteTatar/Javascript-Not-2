// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/


let userFormDOM = document.querySelector('#userForm') // userFormDOM adında bir değişken tanımlanır ve DOM'daki #userForm elementi ile eşleştirilir
userFormDOM.addEventListener('submit', formHandler) // userFormDOM'a bir submit olayı dinleyicisi eklenir ve formHandler fonksiyonu çağrılır
const alertDOM = document.querySelector('#alert') // alertDOM adında bir değişken tanımlanır ve DOM'daki #alert elementi ile eşleştirilir


const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert"> <strong>${title}</strong> ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>` // alertFunction adında bir arrow fonksiyon tanımlanır ve bu fonksiyon, bootstrap uyumlu bir uyarı kutusu HTML'i döndürür


function formHandler(event) // formHandler adında bir fonksiyon tanımlanır, bu fonksiyon kullanıcı formunu işler
{
    event.preventDefault() // sayfanın yenilenmesini engeller


    const USER_NAME = document.querySelector("#username") // Kullanıcı adı ve puan bilgileri USER_NAME ve SCORE değişkenlerine atanır
    const SCORE = document.querySelector("#score")
    
    if (USER_NAME.value && SCORE.value) // Kullanıcı adı ve puan bilgileri girilmiş mi kontrol edilir
    { 
        addItem(USER_NAME.value, SCORE.value)  // addItem fonksiyonu çağrılır ve kullanıcı adı ve puan bilgileri listeye eklenir
        USER_NAME.value = "" // Kullanıcı adı alanı sıfırlanır
        SCORE.value = "" // Puan alanı sıfırlanır
    } 

    else // Eğer kullanıcı adı veya puan bilgisi girilmemişse, bootstrap uyumlu bir uyarı kutusu HTML'i oluşturulur ve HTML içeriği güncellenir
    {
        alertDOM.innerHTML = alertFunction("Baslik Bilgisi" , "Eksik Bilgi Girdiniz" , "success") 
    }
}


let userListDOM = document.querySelector('#userList') // userListDOM adında bir değişken tanımlanır ve DOM'daki #userList elementi ile eşleştirilir


const addItem = (userName, score) => // addItem adında bir fonksiyon tanımlanır, bu fonksiyon kullanıcı adı ve puan bilgisini listeye ekler
{
    let liDOM = document.createElement('li') // li elementi oluşturulur
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>` // li elementinin HTML içeriği belirlenir
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center') // li elementine bootstrap uyumlu sınıflar eklenir
    userListDOM.append(liDOM) // li elementi userListDOM'a eklenir
}


// Popover Kullanımı:
// Sample Website yapımında butonu interaktif yapmak için kullanabilirsiniz.(bkz. Bootstrap)
// Tüm popoverları çalıştırmak için .js kodu:

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//  return new bootstrap.Popover(popoverTriggerEl)
//})