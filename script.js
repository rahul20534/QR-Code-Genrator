let btn = document.getElementById("btn");
let input = document.getElementById("input");
let qrimage = document.getElementById("qrimage");

btn.addEventListener("click", function(){
    let value = input.value;
    let qr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let result = qr+value;
    qrimage.src = result;
})