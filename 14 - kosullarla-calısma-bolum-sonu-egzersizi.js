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

let not = prompt("Notunuzu giriniz = ")
let notharf;

if(not => 90)
{
    notharf = "AA"
}
else if (not >= 85)
{
    notharf = "BA"
}
else if (not >= 80)
{
    notharf = "BB"
}
else if (not >= 75)
{
    notharf = "CB"
}
else if (not >= 70)
{
    notharf = "CC"
}
else if (not >= 65)
{
    notharf = "DC"
}
else if (not >= 60)
{
    notharf = "DD"
}
else if (not >= 50)
{
    notharf = "FD"
}
else if (not <= 49)
{
    notharf = "FF"
}

console.log(notharf)