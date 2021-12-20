let ourArray = [
    {title : 'Real', body : "Ronaldo is the best player"},
    {title : 'Barselona', body : "Messi is the best player"},
    {title : 'Chelsy', body : "Drogba is the best player"},
    {title : 'Arsenal', body : "Henry is the best player"},
    {title : 'Milan', body : "Maldini is the best player"}
]

let mainDiv = document.createElement('div')
let h1Main= document.createElement('h1')

h1Main.innerText = 'menu'
mainDiv.appendChild(h1Main)

let statusClub = true;
let idElement = 0;


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// for (const club of ourArray) {
//     let divElement = document.createElement('div')
//     idElement++;
//     divTittle = document.createElement('div')
//     divTittle.classList.add('club')
//     divTittle.id=`${idElement}`
//     divTittle.innerText = club.title;
//
//     divTittle.onclick = function (e){
//         console.log(this.classList +"  "+ this.tagName+ ' '+ this.id+ " "+ this.offsetWidth+" "+this.offsetHeight)
//     }
//
//     divBody = document.createElement('div')
//     divBody.id=`${idElement}`
//     divBody.classList.add(club.title)
//     divBody.innerHTML = club.body;
//     divBody.classList.add('www')
//     divBody.onclick = function (e){
//         console.log(this.classList +"  "+ this.tagName+ ' '+ this.id+ " "+ this.offsetWidth+" "+this.offsetHeight)
//     }
//
//     divElement.appendChild(divTittle)
//     divElement.appendChild(divBody)
//
//
//     mainDiv.appendChild(divElement)
// }
//
// // document.onclick  = function (e){
// //     console.log(e.target)
// // }
//
// document.body.appendChild(mainDiv)


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ]
//
// let checkBoxDiv = document.createElement('div')
// let filterBy = document.createElement('div')
// filterBy.innerText = 'BY STATUS'
// let chekbox1 = document.createElement('input')
// chekbox1.type='checkbox'
// // chekbox1.dirName = 'STATUS'
// document.body.appendChild(chekbox1);
// checkBoxDiv.append(filterBy,chekbox1)
//
// let checkBoxDiv2 = document.createElement('div')
// let filterBy2 = document.createElement('div')
// filterBy2.innerText = 'BY AGE'
// let chekbox2 = document.createElement('input')
// chekbox2.type='checkbox'
// // chekbox1.dirName = 'STATUS'
// document.body.appendChild(chekbox2);
// checkBoxDiv.append(filterBy2,chekbox2)
//
// let checkBoxDi3 = document.createElement('div')
// let filterBy3 = document.createElement('div')
// filterBy3.innerText = 'BY CITY'
// let chekbox3 = document.createElement('input')
// chekbox3.type='checkbox'
// // chekbox3.dirName = 'STATUS'
// document.body.appendChild(chekbox3);
// checkBoxDiv.append(filterBy3,chekbox3)
//
// let filterButton  =document.createElement('button')
// filterButton.innerText = 'FILTER'
// filterButton.onclick = function (){
//     for (const user of usersWithAddress) {
//         //if (chekbox1.)
//     }
// }
//
// document.body.append(checkBoxDiv,checkBoxDiv2,checkBoxDi3,filterButton)
//
// let chbox=document.getElementById('one');
// console.log(usersWithAddress)
// filterButton.onclick = function () {
//
//     if (chekbox1.checked) {
//         usersWithAddress = usersWithAddress.filter(value => {
//             if (value.status == true) {
//                 return true
//             } else return false
//         })
//     }
//     if (chekbox2.checked) {
//         usersWithAddress = usersWithAddress.filter(value => {
//             if (value.age > 29) {
//                 return true
//             } else return false
//         })
//     }
//     if (chekbox3.checked) {
//         usersWithAddress = usersWithAddress.filter(value => {
//             if (value.address.city == 'Kyiv') {
//                 return true
//             } else return false
//         })
//     }
//     console.log(usersWithAddress)
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let arrayImg = [
//     'first','second','third','fourth','fifth','sixth'
// ] ;
//
// let btnNext = document.createElement('button')
// btnNext.innerText = ' -> '
// let btnPrevious=document.createElement('button')
// btnPrevious.innerText=' <- '
//
// let divElement = document.createElement('div')
//
// divElement.style.background='red'
//
// let image = document.createElement('img')
// image.style.height=400+'px';
// let index=0;
//
// btnNext.onclick = function (){
//     if (index==6){
//         index=0
//     }
//     image.src = 'img/'+arrayImg[index]+'.jpg'
//     index++;
// }
// btnPrevious.onclick = function (){
//     if (index==-1){
//         index=5
//     }
//     image.src = 'img/'+arrayImg[index]+'.jpg'
//     index--;
// }
// divElement.appendChild(image)
//
// document.body.append(divElement,btnPrevious,btnNext)

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// for (const club of ourArray) {
//     let divElement = document.createElement('div')
//     idElement++;
//     divTittle = document.createElement('div')
//     divTittle.classList.add('club')
//     divTittle.id = `${idElement}`
//     divTittle.innerText = club.title;
//
//     divBody = document.createElement('div')
//     divBody.id=`${idElement}`
//     divBody.classList.add(club.title)
//     divBody.innerHTML = club.body;
//     divBody.classList.add('www')
//
//     divElement.append(divTittle,divBody)
//     mainDiv.appendChild(divElement)
// }
// document.body.appendChild(mainDiv)
//
//
//
// console.log(mainDiv.children)
// for (const element of mainDiv.children) {
//     element.onmousedown = function (){
//         console.log(element.tagName+' '+element.classList+" "+ element.id+' '+element.clientHeight+' '+element.clientWidth)
//     }
// }