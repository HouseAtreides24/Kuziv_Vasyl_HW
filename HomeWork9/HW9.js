// Все робити за допомоги js.





//

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// - створити блок,
let divElement = document.createElement(`div`)
divElement.innerText = "Our first div Element";
document.body.appendChild(divElement)
//     - додати йому класи wrap, collapse, alpha, beta
divElement.setAttribute('class','wrap')
divElement.setAttribute('class',divElement.getAttribute('class')+' '+ 'collapse')
divElement.setAttribute('class',divElement.getAttribute('class')+' '+ 'alpha')
divElement.setAttribute('class',divElement.getAttribute('class')+' '+ 'beta')
console.log(divElement.getAttribute('class'))
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divElement.style.color = 'red';
divElement.style.background = 'gold'

// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(divElement.cloneNode(true))

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let newElement = document.createElement('div')
    newElement.innerText = `${coursesAndDurationArrayElement.title}`+ ' ' + `${coursesAndDurationArrayElement.monthDuration}`
    document.body.appendChild(newElement)
}

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let newElement = document.createElement('div')

    let h1Element = document.createElement('h1')
    h1Element.innerText = `${coursesAndDurationArrayElement.title}`

    let pElement = document.createElement('p')
    pElement.innerText  =`${coursesAndDurationArrayElement.monthDuration}`

    newElement.appendChild(h1Element);
    newElement.appendChild(pElement)

    document.body.appendChild(newElement)
}