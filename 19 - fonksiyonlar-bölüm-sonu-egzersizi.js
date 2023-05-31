// fonksiyonlar bölüm sonu egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click" , clickevent)
decreaseDOM.addEventListener("click" , clickevent)

function clickevent()
{
    console.log(this.id)

    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}