console.log(navigator.hardwareConcurrency)

let btnStart = document.createElement('button')
let btnEnd = document.createElement('button')
btnStart.innerText = "START"
btnEnd.innerText = "END"
btnStart.onclick = function () {
    navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
            let videoplayer = document.getElementById("videoplayer")
            videoplayer.srcObject = stream;
            videoplayer.hidden=false
            videoplayer.play()
        });
}
btnEnd.onclick = function (){
    navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
            let videoplayer = document.getElementById("videoplayer")
            videoplayer.srcObject = stream;
            videoplayer.hidden=true
        });
}

//let { name, age } = document.forms.userForm;
let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btn = document.getElementById('btn');

document.body.append(btnStart,btnEnd)