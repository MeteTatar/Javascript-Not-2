// Dom etkinlikleri ile çalışmak

let DOMetk = document.querySelector("#DOMetk")
DOMetk.addEventListener("click", domClick) // tıklama etkinliği ekleniyor

function domClick()
{
    console.log("tıklandı")
    console.log(this.innerHTML = "Tıklandığı için bilgi değişti") // tıklandığında içerisindeki bilgiyi değiştiriyor
    // (this.style.color = "red") //consola yazdırmıyor ve tıklandığında rengini değiştiriyor
    (this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" ) // yazıyı siyah ise kırmızı yap kırmızı ise tekrar siyah yap
}

let DOMetkh = document.querySelector("#DOMetkh")
DOMetkh.addEventListener("mouseover", mover) // imlec üzerine geldiğinde etkinlik çalışıyor

function mover()
{
    console.log("tıklandı")
    console.log(this.innerHTML = "imlec üzerine geldiği için bilgi değişti") // imlec üzerine geldiğinde içerisindeki bilgiyi değiştiriyor
    // (this.style.color = "red") //consola yazdırmıyor ve imlec üzerine geldiğinde rengini değiştiriyor
    (this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" ) // yazıyı siyah ise kırmızı yap kırmızı ise tekrar siyah yap
}