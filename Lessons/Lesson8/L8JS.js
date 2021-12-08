function ourFunk(){
    let x=10;
    user = {age: 31}
    let userWorker  = {
        xxx: function () {
            return x;
        },
        getAge: function () {
            return user;
        }
    }

        return userWorker;
}
let xx  = ourFunk();
console.log(xx.xxx())
console.log(xx.getAge().age)