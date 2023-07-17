// form submit yöntemi

let formDOM = document.querySelector("#userform")
formDOM.addEventListener("submit" , formsubmit) // formDOM'a gönderme etkinliği ekleniyor ve formsubmit 

function formsubmit(event)
{
    event.preventDefault() // Url kısmına yazma engellendi
    console.log("İşlem gerçekleştirildi")
}