import {guideSection,appContainer,aboutContainer} from "../components/BottomSection.js";
let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
let app=document.getElementById("app").innerHTML=appContainer();
let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();

let FavList=JSON.parse(localStorage.getItem("Products"));
let favCount=document.getElementById("countFav");
let nav=document.getElementById("nav");
let departments=document.querySelectorAll("#departments>div>a>img");
let depart=document.querySelectorAll("#departments>div>a>h2");
if(FavList!==null && FavList!==undefined){
    favCount.innerText=FavList.length;
}

let width= screen.width;
if(width<768){
   nav.innerHTML=`<nav class="navbar bg-white fixed-top">
   <div class="container-fluid">
   <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div id="title" class="mx-50"><a class="navbar-brand" href="./homepage.html"><img style="width: 60%;margin-left: 25%;" src="./icons/logo.jpg" alt=""></a></div>
     <div id="title"><a class="navbar-brand" href="./wishlist.html"><img src="./icons/icons8-favorite-24.png" alt=""></a></div>
     <div id="icons"><a class="navbar-brand" href="./wishlist.html"><img src="./icons/icons8-shopping-bag-24.png" alt=""></a></div>
     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
       <div class="offcanvas-header">
         <a class="offcanvas-title" id="offcanvasNavbarLabel" href="../homepage.html"><img src="./icons/favicon dark.ico" alt=""></a>
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
       <div class="offcanvas-body">
           <div id="departments" class="d-block">
               <div id="women" class="my-2" style="height:60px; overflow:hidden;"><a href="">
                   <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/3e1fa8601c3b054126db727190907134/16x9_three-columns/480/data" alt="">
                   <h2 style="font-size: 15px;" class="start-0">SHOP WOMEN</h2>
               </a></div>
               <div id="men" class="my-2" style="height:60px; overflow:hidden"><a href="">
                   <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/79d650ec078a16ebb376d1b3e0c982d3/16x9_three-columns/480/data" alt="">
                   <h2 style="font-size: 15px;" class="start-0">SHOP MEN</h2>
               </a></div>
               <div id="kids" class="my-2" style="height:60px; overflow:hidden"><a href="">
                   <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/f7dda851843a12916bada7c705c0e823/16x9_three-columns/480/data" alt="">
                   <h2 style="font-size: 15px;" class="start-0">SHOP KIDS</h2>
               </a></div>
           </div>
       </div>
     </div>
   </div>
 </nav>` 
for(let i=0;i<departments.length;i++){
  departments[i].style.width="auto";
}
};
if(width<1000 && width>768){
  for(let i=0;i<depart.length;i++){
    depart[i].style.fontSize="20px"
  }
}
