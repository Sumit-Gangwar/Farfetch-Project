arr = [
//   {
//     id: 64,
//     img1: "https://cdn-images.farfetch-contents.com/18/22/54/55/18225455_38871225_1000.jpg",
//     img2: "https://cdn-images.farfetch-contents.com/18/22/54/55/18225455_38870937_1000.jpg",
//     brand: "Bottega Veneta",
//     category: "paperbag style trousers",
//     type: "clothing",
//     desc: "Congratulations: you're officially a black belt in Bottega Veneta. Meaning: you just levelled up your accessorising art to its highest with this leather belt. Well done!",
//     price: 1048,
//   },
//     {
//       id: 65,
//       img1: "https://cdn-images.farfetch-contents.com/18/54/52/25/18545225_39964126_1000.jpg",
//       img2: "https://cdn-images.farfetch-contents.com/18/54/52/25/18545225_39964119_1000.jpg",
//       brand: "Off-White",
//       category: "Caravaggio-print hoodie",
//       type: "clothing",
//       desc: "Off-White adorns this classic black hoodie with an image of one of the Italian painter Caravaggio's works. Juxtaposed on the back is the label's key identifier - the Arrow motif.",
//       price: 863,
//     },
    {
      id: 66,
      img1: "https://cdn-images.farfetch-contents.com/18/14/62/22/18146222_38574918_1000.jpg",
      img2: "https://cdn-images.farfetch-contents.com/18/14/62/22/18146222_38574925_1000.jpg",
      brand: "Tom Wood",
      category: "Sting organic-cotton jeans",
      type: "clothing",
      desc: "Tom Wood's Sting denim jeans are cut for a regular fit and are crafted from GOTS certified organic cotton. This casual pair are designed sit on the natural waistline and then fall into a relaxed straight-leg.",
      price: 278,
    },
  {
    id: 67,
    img1: "https://cdn-images.farfetch-contents.com/18/28/49/59/18284959_39261463_1000.jpg",
    img2: "https://cdn-images.farfetch-contents.com/18/28/49/59/18284959_39261484_1000.jpg",
    brand: "Rick Owens DRKSHDW",
    category: "logo hooded jacket",
    type: "clothing",
    desc: "Rick Owens DRKSHDW injects its signature edge into this jacket for AW22. An asymmetric hood and pentacle logo graphic contribute to the moody yet architectural design.",
    price: 888,
  },
];
localStorage.setItem("bag", JSON.stringify(arr));
let options = [];
let innerdiv = document.getElementById("checkout");
function append(data) {
  let main  = document.getElementById("main")
  if(data.length==0){
    main.style.display="block"
    main.innerHTML = null
    let empty = document.createElement("img")
     empty.src ="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png" 
     empty.id="empty"
     let shop = document.createElement("button")
     shop.innerText="Shop Now"
     shop.id="shop";
     shop.addEventListener("click",function(){
      window.location.href = "#"
     })
     main.append(empty,shop)
  } else {
    data.forEach(function (el, index) {

      // console.log(el);
      let big = document.createElement("div");
      big.id = "big";
  
    
  
      let img = document.createElement("img");
      img.setAttribute("id", "innerimg");
      img.src = el.img1;
  
      //   firstdiv
  
      let firstdiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = el.brand;
      h3.style.fontSize = "20px";
  
      let p = document.createElement("p");
      p.innerText = el.category;
  
      //   seconddiv
  
      let seconddiv = document.createElement("div");
  
      let h2 = document.createElement("h4");
      h2.innerText = el.price;
      h2.style.fontSize = "20px";
  
      let para = document.createElement("para");
      para.innerText = "(Import duties included)";
  
      //  thirddiv
      let thirddiv = document.createElement("div");
      let quantity = document.createElement("h4");
      quantity.innerText = "Quantity";
  
      let select = document.createElement("select");
      select.id = "getOp";
      let option = document.createElement("option");
      option.text = "1";
      let option1 = document.createElement("option");
      option1.text = "2";
      let option2 = document.createElement("option");
      option2.text = "3";
      let option3 = document.createElement("option");
      option3.text = "4";
  
      select.add(option);
      select.add(option1);
      select.add(option2);
      select.add(option3);
  
      select.addEventListener("click", function () {
         if(select.value != 1){
          call();
         }
      });
  
      let cross = document.createElement("img");
      cross.setAttribute("id", "cross");
      cross.src = "../cross.png";
      cross.addEventListener("click", function () {
        remove(el, index);
      });
  
      firstdiv.append(h3, p);
      seconddiv.append(h2, para);
      thirddiv.append(quantity, select);
      big.append(img, firstdiv, seconddiv, thirddiv, cross);
      innerdiv.append(big);
    })
  }
 
 
}



append(arr);
function call() {
  let sum = 0;
  let s = document.querySelectorAll("#getOp");
  for (let i = 0; i < s.length; i++) {
    sum += (s[i].value*arr[i].price);
   
  }
  let semi = document.getElementById("semi");
  let delhi = document.getElementById("delhi");
  let x = Math.floor(Math.random(40)*60)
  delhi.innerText = x;
  let final = document.getElementById("finalP");
  
  semi.innerText = sum;
  let finalAmt = sum+x;
  let last = [];
  last.push(finalAmt)
  last.push(x);
  final.innerText = "USD $ "+finalAmt;
  localStorage.setItem("total",JSON.stringify(last))
}
// window.location.reload()

function remove(el, index) {
  let arr = JSON.parse(localStorage.getItem("bag"));
  let newData = arr.filter(function (el, i) {
    return i !== index;
  });
  //Again set the new data.
  localStorage.setItem("bag", JSON.stringify(newData));
  console.log(newData);
  innerdiv.innerHTML = null;
  append(newData);
  call();

//   window.location.reload();
}
call();

