const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");



const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");


const clearBtn = document.getElementById("clearbtn");
const bottomImg = document.getElementById("bottom");
const returnBtn = bottomImg.getAttribute("src");


btn1.addEventListener("click", function(e){ //btn1_ს ვანიჭებთ ევენთლისენერს და ვატანთ ევენთს.
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src"); //ვიღებთ ივენთიდან ქურენთ ტარგეტს,შევდივარ მის მშობელში და თაგ ნეიმით ვპოულობთ იმიჯს, 0_ით ვიღებთ პირველ ელემენტს და ვიღებთ იმიჯის src ატრიბუტს.
    bottomImg.setAttribute("src", selectedSrc); //ქვედა img_ის src_ს ვანიჭებთ ახალ src_ს.
})


btn2.addEventListener("click", function(e){ 
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src"); 
    bottomImg.setAttribute("src", selectedSrc);
})


btn3.addEventListener("click", function(e){ 
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src");
    bottomImg.setAttribute("src", selectedSrc); 
})

btn4.addEventListener("click", function(e){ 
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src");
    bottomImg.setAttribute("src", selectedSrc); 
})


btn5.addEventListener("click", function(e){ 
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src");
    bottomImg.setAttribute("src", selectedSrc); 
})


btn6.addEventListener("click", function(e){
    const selectedSrc=e.currentTarget.parentNode.getElementsByTagName("img")[0].getAttribute("src"); 
    bottomImg.setAttribute("src", selectedSrc); 
})



img1.addEventListener("click", function(e){ //image_ს ვანიჭებთ ევენთლისენერს და ვატანთ ევენთს.
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src")); //ქვედა image_ს ვანიჭებთ image_ზე დაჭერის დროს image_ის src_ს
})


img2.addEventListener("click", function(e){
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src"));
})


img3.addEventListener("click", function(e){
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src"));
})


img4.addEventListener("click", function(e){
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src"));
})

img5.addEventListener("click", function(e){
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src"));
})


img6.addEventListener("click", function(e){
    bottomImg.setAttribute("src", e.currentTarget.getAttribute("src"));
})


clearBtn.addEventListener("click", function(){
    bottomImg.setAttribute("src", returnBtn); // ქვედა button_ზე დაჭერის დროს შეცვლილი src შეცვალოს თავდაპირველ src_თი.
})

bottomImg.addEventListener("click", function(){
    bottomImg.setAttribute("src", returnBtn); // ქვედა სურათზე დაჭერის დროს შეცვლილი src შეცვალოს თავდაპირველ src_თი.
})