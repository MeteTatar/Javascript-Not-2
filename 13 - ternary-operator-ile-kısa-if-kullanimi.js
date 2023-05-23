// eğer kullanıcı adı varsa yazdır yoksa kullanıcı bilgisi bulunamadı yazdır

let username = prompt("Kullanıcı adınızı giriniz = ")
let info = document.querySelector("#info")

// ternary kullanımı
// koşul ? doğruysa : yanlışsa

info.innerHTML = `${username.length > 0 ? username : "Kullanıcı bilgisi bulunamadı..."}`