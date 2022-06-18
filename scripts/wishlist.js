// Fetching products from localstorage, which has been stored from products page.
let storeArr = JSON.parse(localStorage.getItem("wishlist")) || [];

let data = [
  {
    id: 64,
    img1: "https://cdn-images.farfetch-contents.com/18/22/54/55/18225455_38871225_1000.jpg",
    img2: "https://cdn-images.farfetch-contents.com/18/22/54/55/18225455_38870937_1000.jpg",
    brand: "Bottega Veneta",
    category: "paperbag style trousers",
    type: "clothing",
    desc: "Congratulations: you're officially a black belt in Bottega Veneta. Meaning: you just levelled up your accessorising art to its highest with this leather belt. Well done!",
    price: 1048,
  },
  {
    id: 65,
    img1: "https://cdn-images.farfetch-contents.com/18/54/52/25/18545225_39964126_1000.jpg",
    img2: "https://cdn-images.farfetch-contents.com/18/54/52/25/18545225_39964119_1000.jpg",
    brand: "Off-White",
    category: "Caravaggio-print hoodie",
    type: "clothing",
    desc: "Off-White adorns this classic black hoodie with an image of one of the Italian painter Caravaggio's works. Juxtaposed on the back is the label's key identifier - the Arrow motif.",
    price: 863,
  },
  {
    id: 66,
    img1: "https://cdn-images.farfetch-contents.com/18/14/62/22/18146222_38574918_1000.jpg",
    img2: "https://cdn-images.farfetch-contents.com/18/14/62/22/18146222_38574925_1000.jpg",
    brand: "Tom Wood",
    category: "Sting organic-cotton jeans",
    type: "watches",
    desc: "Tom Wood's Sting denim jeans are cut for a regular fit and are crafted from GOTS certified organic cotton. This casual pair are designed sit on the natural waistline and then fall into a relaxed straight-leg.",
    price: 278,
  },
];
let clothing = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "44 - XS",
  two: "48 - M",
  three: "50 - L",
  four: "52 - XL",
  five: "54 - XXL",
};
let shoes = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "41 FR",
  two: "42 FR",
  three: "43 FR",
  four: "44  FR",
  five: "45 FR",
};

let accessories = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: 58,
  two: 59,
  three: 60,
  four: 61,
  five: 62,
};
let otherSizes = {
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "Only one size available",
};

// Appending all products to the wishlist page.

let display = document.querySelector("#display");
showData(data);
function showData() {
  data.forEach((element) => {
    let small = document.createElement("div");
    small.setAttribute("class", "small");
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let name = document.createElement("h6");
    let cate = document.createElement("p");
    let price = document.createElement("p");
    let id = document.createElement("p");
    let btn = document.createElement("button");
    let sizeBtn = document.createElement("button");
    let closeBtn = document.createElement("img");
    let size = document.createElement("div");
    let type;
    if (element.type == "clothing") {
      type = clothing;
    } else if (element.type == "shoes" || element.type == "sneakers") {
      type = shoes;
    } else if (element.type == "accessories") {
      type = accessories;
    } else {
      type = otherSizes;
    }
    btn.setAttribute("class", "btn size");
    closeBtn.setAttribute("class", "close");
    closeBtn.src = "../icons/icons8-close-26.png";
    sizeBtn.setAttribute("class", "btn sizeBtn");
    size.setAttribute("class", "card mw-75 text-left py-2 box");
    if (type !== otherSizes) {
      size.innerHTML = `
           <h6>${type.measure}</h6>
           <div class="bg-light"><ul><li>${type.sizeDes}</li></ul></div>
            <ul class="list-group">
                <li class="list-group-item item-size">${type.one}</li>
                <li class="list-group-item item-size">${type.two}</li>
                <li class="list-group-item item-size">${type.three}</li>
                <li class="list-group-item item-size">${type.four}</li>
                <li class="list-group-item item-size">${type.five}</li>
                
            </ul>    
        `;
    } else {
      size.innerHTML = `
            <div class="bg-light"><ul><li>${type.sizeDes}</li></ul></div>
            <ul class="list-group">
                <li class="list-group-item item-size">${type.one}</li>
                </ul>`;
    }
    let sz = document.getElementsByClassName("item-size");
    image1.srcset = element.img1;
    name.innerText = element.brand;
    cate.innerText = element.category;
    price.innerText = `$${element.price}`;
    id.innerText = element.id;
    btn.innerText = "Add To Bag";
    sizeBtn.innerText = "Select Size";
    display.append(small);
    small.append(closeBtn, image1, name, cate, price, sizeBtn, size, btn);
    image1.addEventListener("mouseenter", () => {
      image1.srcset = element.img2;
    });
    image1.addEventListener("mouseout", () => {
      image1.srcset = element.img1;
    });
    sizeBtn.addEventListener("click", () => {
      showSize(size, sz, sizeBtn);
    });
    closeBtn.addEventListener("click", () => {
      removeItem(element);
    });
    btn.addEventListener("click", () => {
      addItem(element);
    });
  });
}
// function for selecting size
let size = true;
function showSize(s, el, sizeBtn) {
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", () => {
      sizeBtn.innerText = `${el[i].innerText}`;
    });
  }

  if (size) {
    s.style.display = "block";
    size = false;
  } else {
    s.style.display = "none";
    size = true;
  }
}

// function for removing product from wishlist
function removeItem(el) {
  data = data.filter((x) => {
    return el.id !== x.id;
  });
  display.innerHTML = null;
  showData(data);
  localStorage.setItem("wishlist",JSON.stringify(data));
}

// function for adding product to the cart

let msg = document.getElementById("alert");
let cart = JSON.parse(localStorage.getItem("cartItem")) || [];
function addItem(el) {
  cart.push(el);
  localStorage.setItem("cartItem", JSON.stringify(cart));
  msg.innerHTML = `<div class="alert alert-info" role="alert">
    Product added successfully, go to <a href="#" class="alert-link">Cart</a>
  </div>`;
  setTimeout(() => {
    msg.innerHTML = null;
  }, 3000);
}
