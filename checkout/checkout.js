// let btn = document.getElementById("placed").addEventListener("click",function(){
//     let first = document.getElementById("first").value
//     let last = document.getElementById("last").value
//     let address =document.querySelectorAll(".address").value
//     console.log(address)
//     let state= document.getElementById("state").value
//     let city = document.getElementById("city").value
//     let phone = document.getElementById("phone").value
//     if(first !="" && last!="" && city!="" && state != "" && city != "" && phone !=""){
       
//         alert ("Order Placed")
//    }
//    else{
   
//     alert("Please Fill all the information")
//    }
// })


let data = JSON.parse(localStorage.getItem("bag"));

console.log(data);


let data2 = JSON.parse(localStorage.getItem("total"));

console.log(data2);

