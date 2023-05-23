// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

const gul = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
`

const uzul = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
`

let not = prompt("Notunuzu giriniz = ")
let notharf;
let info = document.querySelector("#info")

if(not < 0 || not > 100)
{
    notharf = "Lütfen 0 dan büyük yada 100 den küçük bir değer giriniz."
}
else if(not >= 90)
{
    notharf = `AA ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 85)
{
    notharf = `BA ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 80)
{
    notharf = `BB ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 75)
{
    notharf = `CB ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 70)
{
    notharf = `CC ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 65)
{
    notharf = `DC ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 60)
{
    notharf = `DD ${gul}`
    info.classList.add("text-primary")
}
else if (not >= 50)
{
    notharf = `FD ${gul}`
    info.classList.add("text-primary")
}
else if (not <= 49)
{
    notharf = `FF ${uzul}`
    info.classList.add("text-danger")
}

info.innerHTML = `${not} ---> ${notharf}`
