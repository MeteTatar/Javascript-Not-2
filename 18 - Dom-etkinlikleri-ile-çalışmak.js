// Dom etkinlikleri ile çalışmak

let DOMetk = document.querySelector("#DOMetk")
DOMetk.addEventListener("click", domClick)

function domClick()
{
    console.log("tıklandı")
    console.log(this.innerHTML = "Tıklandığında için bilgi değişti")
}