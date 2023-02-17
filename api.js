fetch("https://tema7-f389.restdb.io/rest/frugter", {
method: "get",
headers:{
    "x-apikey": "63e9f446478852088da6810b",
},
})

.then((e) => e.json())
.then(doSomething);

function doSomething(data){
console.log(data);
}