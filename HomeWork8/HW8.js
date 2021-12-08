
// //-- отримує текст з параграфа з id "content"
// console.log("Home Work 8")
// let ourValue = document.getElementById("content");
// console.log(ourValue)
// document.writeln(`${ourValue.textContent}`)
// // -- отримує текст з блоку з id "rules"
// console.log(document.getElementById('rules').textContent)
// // -- замініть текст параграфа з id 'content' на будь-який інший
// ourValue.textContent = "We change this content!!!!!!!!!1"
// document.writeln(`<p> ${ourValue.textContent}</p>`)
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// document.writeln(`<p> ${document.getElementById('rules').textContent="We change another tag!!!!!"}</p>`)
// document.writeln(`<p> ${document.getElementById('rules').textContent}</p>`)
// // -- змініть кожному елементу колір фону на червоний
// for (const elements of document.body.children){
//     elements.style.background = "red"
// }
// // -- змініть кожному елементу колір тексту на синій
// for (const elements of document.body.children){
//     elements.style.color = "blue"
// }
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// for (const ourClass of document.getElementById("rules").classList){
//     console.log(ourClass)
// }
// //-- поміняти колір тексту у всіх елементів fc_rules на червоний
// for (const arrayElement of document.getElementsByClassName('fc_rules')) {
//     arrayElement.style.color='gold'
// }
//
//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
// let rez = new Array();
//
// function  reCall(startElement){
//     if (startElement.children.length){
//         for (const element of startElement.children){
//             for (const elementClass of element.classList) {
//                 rez.push(elementClass)
//             }
//             reCall(element)
//         }
//     }
// }
// reCall(document.body)
// console.log(rez)
