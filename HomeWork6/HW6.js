

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase().toLowerCase())
// console.log(str2.toUpperCase().toLowerCase())
// console.log(str3.toUpperCase().toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim())
// console.log(str)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToarray = (str) => {
//     return str.split(" ");
// }
//     let str = 'Каждый охотник желает знать';
// console.log(stringToarray(str))
// let arr = stringToarray(str);
// document.writeln(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters=(str, length)=>{
//     return  str.slice(0,length)
// }
// document.writeln(delete_characters(str, 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{
//     return str.toUpperCase().replaceAll(" ","-")
// }
// document.writeln(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str  ="   a   dsfgsdg werterh";
//
// let our_func = (str) =>{
//      return str.trim()[0].toUpperCase()+str.trim().slice(1);
// }
// console.log(our_func(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = "тихо ходить кіт по фабриці"
//
// let our_func = (str) =>{
//      return str[0].toUpperCase()+str.slice(1);
// }
// let capitalize = str =>{
//     let new_array = [];
//     for (let i = 0; i < str.split(" ").length; i++) {
//         new_array.push(our_func(str.split(" ")[i]))
//     }
//     return new_array.join(" ");
// }
// console.log(capitalize(str))

// - Напишите функцию cutString(str, n), которая делит строку на подстроки,
//     состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// function cutString(str, n) {
//     let newArray = [];
//     for(let i = 0 ; i < str.length; i += n) {
//         newArray.push(str.substr(i, n));
//     }
//     return newArray;
// }
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// // some.email@gmail.com
// let validator = (beginer_text)=>{
//     let text = beginer_text.toUpperCase();
//     let index_snail;
//     let index_point;
//     let availability_snail;
//     let text1;
//     for (let i = 0; i < beginer_text.length; i++) {
//         if (text[i]==='@'){
//             index_snail=i;
//             text1 = beginer_text.slice(0,index_snail)
//             availability_snail=true;
//         }
//         if (beginer_text[i]===''){
//             index_point=i;
//         }
//     }
//     if (index_point-index_snail<=2){
//         document.writeln("not the correct fill format")
//     }else {
//         document.writeln("correct filling format")
//     }
//     document.writeln(text1)
//     document.writeln(availability_snail)
// }
//
// validator("someemail@gmail.com");

//- є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let new_array = coursesArray.sort((a,b)=>{
// if (a.modules.length-b.modules.length>0) {
//     return -1;
// }else return  1;
// })
// console.log(new_array)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// let count=(str, stringsearch)=>{
//     let count1 = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]===stringsearch)count1++
//     }
//     return count1;
// }
// console.log(count(str,symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString=(str, n)=>{
//     let new_array = str.split(" ");
//     let rez = (array)=>{
//         let new_text = " ";
//         for (let i = 0; i < n; i++) {
//             new_text+=(new_array[i]+" ");
//         }
//         return new_text;
//     }
//     return rez(new_array).trim()
// }
// console.log(cutString(str,5))