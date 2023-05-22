let Username =prompt("Kullanıcı adınızı giriniz = ")
let Yas = prompt("Yaşınızı giriniz = ")
let sys = document.querySelector("#sys")

if (Username && Yas >= 18)
{
    sys.innerHTML = "Ehliyet alabilirsiniz."
}
else if (!Username)
{
    sys.innerHTML = "Adınızı giriniz ve tekrar deneyiniz."
}
else if (!Yas)
{
    sys.innerHTML = "Yaşınızı giriniz ve tekrar deneyiniz."
}
else if (!(Username && as))
{
    sys.innerHTML = "Adınızı ve yaşınızı giriniz."
}
else
{
    sys.innerHTML = "Yaşınız ehliyet almak için uygun değildir."
}