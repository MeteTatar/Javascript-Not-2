// Arrow function kullanımı

function hello(firstname) // hello fonksiyonumuza firstname değişkeni tanımladık
{
    console.log(`Merhaba ${firstname}`) // consola merhaba yazdırıp firstname değişkenini yazdırıyoruz
}

hello("Mete") // firstname değişkenimize "Mete" string ini tanımlıyoruz


const hellofon1 = (firstname) => 
{ 
    console.log(`merhaba ${firstname}`)
}
hellofon1("hellofun1")



const hellofun2 = firstname => // TEKLİ PARAMETRE GİRİŞLERİNDE PARANTEZ İÇİNE YAZMAMIZA GEREK YOK !
                                    // TEKLİ DEĞER GİRİŞLERİNDE SÜSLÜ PARANTEZ İÇİNE YAZMAMIZA GEREK YOK !
console.log(`merhaba ${firstname}`)

hellofun2("hellofun2")



const hellofon3 = (firstname, lastname) => // ÜSTEKİ AÇIKLAMANIN ÖRNEĞİ
{
    console.log(`hello ${firstname} ${lastname}`)
}

hellofon3("hellofun3" , " Last Name info")



const hellofon4 = (firstname , lastname) =>
{
    let info = `Merhaba ${firstname} ${lastname}` // İNFO DEĞERİNİN İÇİNE "Merhaba" YAZDIRILIP "firstname" ve "lastname" PARAMETRELERİ YAZDIRILIYOR
    console.log(info)
    return info
}

hellofon4("hellofon4", "other info")