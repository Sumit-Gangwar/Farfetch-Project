let btn = document.getElementById("placed").addEventListener("click",function(){
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    // let address =document.querySelectorAll("address")

    let city = document.getElementById("city")
    if(first !="" && last!="" && city!=""){
       
        alert ("Order Placed")
   }
   else{
   
    alert("Please Fill all the information")
   }
})
