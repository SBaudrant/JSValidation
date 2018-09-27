const promiseCheck = require("./is-ready")

const promise = promiseCheck.promiseCheck()


function checkPromise(promise){
    promise.then((state) => {
        console.log("State : ")
        console.log(state)
    }).catch((error) => {
        console.log(error)
    })
}

function app(){
    checkPromise(promise)
}


exports.run = app