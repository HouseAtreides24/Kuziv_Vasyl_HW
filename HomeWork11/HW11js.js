// console.log(navigator.hardwareConcurrency)
//
// let btnStart = document.createElement('button')
// let btnEnd = document.createElement('button')
// btnStart.innerText = "START"
// btnEnd.innerText = "END"
// btnStart.onclick = function () {
//     navigator.mediaDevices.getUserMedia({video: true})
//         .then(stream => {
//             let videoplayer = document.getElementById("videoplayer")
//             videoplayer.srcObject = stream;
//             //videoplayer.hidden=false
//             videoplayer.play()
//         });
// }
// btnEnd.onclick = function (){
//     navigator.mediaDevices.getUserMedia({video: true})
//         .then(stream => {
//             let videoplayer = document.getElementById("videoplayer")
//             videoplayer.srcObject = stream;
//             //videoplayer.hidden=true
//             videoplayer.closest(null)
//         });
// }
//
// document.body.append(btnStart,btnEnd)

// let userForm  =document.createElement('form')
// userForm.setAttribute('name' ,'userForm')
// userForm.setAttribute('action' ,'')

// let userNameLabel = document.createElement('label')
// userNameLabel.innerHTML = 'NAME     :'
// let nameValInput = document.createElement('input')
// userNameLabel.appendChild(nameValInput)
//
//
// let userAgeLabel = document.createElement('label')
// userAgeLabel.innerHTML = 'AGE     :'
// let ageValInput = document.createElement('input')
//
// userAgeLabel.appendChild(ageValInput)
//
// let buttonSend = document.createElement('button')
// buttonSend.innerText='Send'
//
// userForm.append(userNameLabel,userAgeLabel);
// document.body.append(userForm,buttonSend)
//
// let userName;
// let userAge;
// let userArray;
// let index = 0;
// buttonSend.onclick = function (){
//      userName = nameValInput.value
//      userAge = ageValInput.value
//     //localStorage.setItem(userName,userAge)
//
//     userArray = [userName, userAge]
//     localStorage.setItem(index,JSON.stringify(userArray))
//     index++;
// }

    // -створити форму з інпутами для model,type та volume автівки.
    // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carForm  =document.createElement('form')
carForm.setAttribute('name' ,'carForm')
carForm.setAttribute('action' ,'')

let carModelLabel = document.createElement('label')
carModelLabel.innerHTML = 'MODEL     :'
let carModelInput = document.createElement('input')
carModelLabel.appendChild(carModelInput)

let carTypeLabel = document.createElement('label')
carTypeLabel.innerHTML = 'TYPE     :'
let carTypeInput = document.createElement('input')
carTypeLabel.appendChild(carTypeInput)

let carVolumeLabel = document.createElement('label')
carVolumeLabel.innerHTML = 'VOLUME     :'
let carVolumeInput = document.createElement('input')
carVolumeLabel.appendChild(carVolumeInput)

let buttonSend = document.createElement('button')
buttonSend.innerText='SEND'

let buttonCleare  =document.createElement('button')
buttonCleare.innerText = 'CLEAER'

carForm.append(carModelLabel,carTypeLabel,carVolumeLabel);
document.body.append(carForm,buttonSend,buttonCleare)

buttonCleare.onclick = function (){
    localStorage.clear();
}


let carArray;
let index = 0;
buttonSend.onclick = function (){
    //localStorage.setItem(userName,userAge)

    carArray = [carModelInput.value, carTypeInput.value,carVolumeInput.value]
    localStorage.setItem(index,JSON.stringify(carArray))
    index++;
}

