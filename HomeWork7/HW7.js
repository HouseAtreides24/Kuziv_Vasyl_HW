
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let ourArray = new Array();
// for (let i = 0;i<10;i++){
//     let elementName = "User";
//     elementName+=(i+1);
//     ourArray.push(new User((i+1),elementName,"aef",'dfhgdfh',346524578))
// }
// console.log(ourArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let ourArray = new Array();
// for (let i = 0;i<10;i++){
//     let elementName = "User";
//     elementName+=(i+1);
//     ourArray.push(new User((i+1),elementName,"aef",'dfhgdfh',346524578))
// }
// let newArray = ourArray.filter(users=>{
//     if (users.id%2===0) {
//         return true;
//     }else return  false
// })
// console.log(newArray)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let ourArray = new Array();
// for (let i = 0;i<10;i++){
//     let elementName = "User";
//     elementName+=(i+1);
//     ourArray.push(new User((i+1),elementName,"aef",'dfhgdfh',346524578))
// }
// let newArray = ourArray.sort((a,b)=>{
//     if (a.id-b.id>0) {
//         return -1;
//     }else return  1;
// })
// console.log(newArray)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname , email, phone,order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.order=order;
//     }
// }
// let ourArra = new Array();
// for (let i=0;i<10;i++){
//     let clientNum = "Client"+i+1;
//     let goods = new Array()
//     for (let j=0;j<4;j++){
//         let good = "Good"+j+1
//         goods.push(good)
//     }
//     let client = new Client(i+1,clientNum,"asfsdgfsdg","sdgdfg",124234,goods);
//     ourArra.push(client)
// }
// console.log(ourArra)

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id, name, surname , email, phone,order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.order=order;
//     }
// }
// let ourArra = new Array();
// for (let i=0;i<10;i++){
//     let clientNum = "Client"+i+1;
//     let goods = new Array()
//     for (let j=0;j<i;j++){
//         let good = "Good"+j+1
//         goods.push(good)
//     }
//     let client = new Client(i+1,clientNum,"asfsdgfsdg","sdgdfg",124234,goods);
//     ourArra.push(client)
// }
// console.log(ourArra.sort((a,b)=>{
//     if (a.order.length-b.order.length>0){
//         return -1;
//     }else return 1
// }))

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// function User(id,name,username,email,address=new Address(),phone,website,company=new Company()){
//     this.id=id;
//     this.name=name;
//     this.username=username;
//     this.email=email;
//     this.address = new Address()
//     this.phone=phone;
//     this.website=website;
//     this.company = new Company()
// }
// function Address(street,suite,city,zipcode,geo = new Geo()){
//     this.street=street;
//     this.suite=suite;
//     this.city=city;
//     this.zipcode=zipcode;
//     this.geo = new Geo()
// }
// function Geo(lat,lng){
//     this.lat=lat;
//     this.lng=lng;
// }
// function Company(name,catchPhrase,bs){
//     this.name=name;
//     this.catchPhrase=catchPhrase;
//     this.bs=bs;
// }
//
// let user1 = new User(12,"Vasya","sdfsdg","asfd",
//     new Address("qwr","wet","sdgg", 1244,new Geo(123,45)))
// console.log(user1)

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class Teg{
//     constructor(titleOfTag, action, titleOfAttribute) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.titleOfAttribute = titleOfAttribute;
//     }
// }
// class Attribute{
//     constructor(attributeName, attributeAction) {
//         this.attributeName = attributeName;
//         this.attributeAction = attributeAction;
//     }
// }
// let attr11 = "accesskey";
// let attr11_Action = "Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки буквой или цифрой." +
//     " Браузеры при этом используют различные комбинации клавиш. Например, для accesskey= работают следующие сочетания.";
// let attr12 = "coords";
// let attr12_Action ="Атрибут coords применяется к ссылкам, которые располагаются внутри контейнера object>. Совместно с атрибутом shape создает «горячую область», которая служит ссылкой."
//     "По своему действию похож на тег area.";
// let attr13 = " download";
// let attr13_Action = "АПри наличии атрибута download браузер не переходит по ссылке," +
//     " а предложит скачать документ, указанный в адресе ссылки.";
// let attr14 = "hreflang";
// let attr14_Action = "Идентифицирует язык текста по ссылке.";
// let teg_A = "a";
// let action_A = "Тег a является одним из важных элементов HTML и предназначен для создания ссылок"
// let att_El11 = new Attribute(attr11,attr11_Action)
// let att_El12 = new Attribute(attr12,attr12_Action)
// let att_El13 = new Attribute(attr13,attr13_Action)
// let att_El14 = new Attribute(attr14,attr14_Action)
// let arrayOfAttr_A = [att_El11,att_El12,att_El13,att_El14]
// let teg_A_Attr = new Teg(teg_A,action_A,arrayOfAttr_A);
// function druk (zadacha){
//     document.write(`<div>${teg_A_Attr.titleOfTag} <p>${teg_A_Attr.action}</p>
// <p>${zadacha.titleOfAttribute[0].attributeName}</p><p>${zadacha.titleOfAttribute[0].attributeAction}</p>
// <p>${zadacha.titleOfAttribute[1].attributeName}</p><p>${zadacha.titleOfAttribute[1].attributeAction}</p>
// <p>${zadacha.titleOfAttribute[2].attributeName}</p><p>${zadacha.titleOfAttribute[2].attributeAction}</p>
// <p>${zadacha.titleOfAttribute[3].attributeName}</p><p>${zadacha.titleOfAttribute[3].attributeAction}</p></div>`)
// }
// druk(teg_A_Attr)

