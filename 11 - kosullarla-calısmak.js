// eğer kullanıcı ismi varsa ekrana ismi yazdır

let username = prompt("Kullanıcı adınızı giriniz = ")

if (username.length > 0)
{
    console.log(`Girilen kullanıcı adı ${username}`)
}
else
{
    console.log("Girilmiş bilgi yok")
}