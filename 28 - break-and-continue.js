// Break and continue

let counter = 0

//  for (; counter < 10; counter++) 
// {
//    if (counter === 5) {break}
//    document.write(counter)
// }


//  for (; counter < 10; counter++) 
//  {
//    if (counter === 5) {continue}
//    document.write(counter)
//  }




const LOREM_LIST = ['Car', 'Bike', 'Plane', 'Motorcycle', 'Train', 'Aircraft', 'Zeplin']



const UL_DOM = document.querySelector('#userList')

let index = 0

// for (; index < LOREM_LIST.length; index++) 
// {
//   if (LOREM_LIST[index] == "Train") {break}
//   let LI_DOM = document.createElement('li')
//   LI_DOM.innerHTML = LOREM_LIST[index]
//   UL_DOM.append(LI_DOM)
// }



// index değişkeni LOREM_LIST dizisinin elemanlarını kontrol etmek için kullanılacak
for (let index = 0; index < LOREM_LIST.length; index++) 
{
    // Eğer LOREM_LIST dizisindeki eleman "Bike" ise, döngünün bir sonraki adımına geçilir
    if (LOREM_LIST[index] == "Bike") {continue}

    // LI_DOM değişkeni, <li> etiketi için bir DOM elemanı oluşturur
    let LI_DOM = document.createElement('li')

    // LI_DOM değişkeninin içeriği LOREM_LIST dizisindeki mevcut indeksteki öğe ile değiştirilir
    LI_DOM.innerHTML = LOREM_LIST[index]

    // UL_DOM değişkeni, <ul> etiketi için bir DOM elemanıdır ve LI_DOM değişkenini içine ekler
    UL_DOM.append(LI_DOM)
}
