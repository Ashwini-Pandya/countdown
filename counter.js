var add = document.getElementById("increa");
var sub = document.getElementById("decrea");
var reset = document.getElementById("set");
var num  = 0;
function addition(){
    num = num + 1;
    console.log(num);
    document.getElementById("root").innerHTML= num;
    if (num > 0){
        document.getElementById("root").style.color="green";
    }
}
function subtraction(){
    num = num - 1;
    console.log(num);
    document.getElementById("root").innerHTML= num;
    if (num < 0){
        document.getElementById("root").style.color="red";
    }
}
function settozero(){
    num = 0;
    console.log(num);
    document.getElementById("root").innerHTML= num;
    if (num === 0){
        document.getElementById("root").style.color="black";
    }
}
console.log(num);
