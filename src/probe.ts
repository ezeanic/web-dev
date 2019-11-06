import fetch from 'node-fetch'

function logData(objectArray) {
   // put your code here
   console.log("We got data:", objectArray)
}

let host=process.env.API_HOST

fetch(`http://${host}:3000/contact`)
.then(res => res.json())
.then(json => {
    logData(json)
    })
.catch(err => console.log("Error!:", err))
