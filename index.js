const images = document.querySelectorAll(".image-card img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const colseBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;



images.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        currentIndex = index;

        lightbox.classList.add("active")
        lightboxImg.src= image.src;
    });
}) ;

colseBtn.addEventListener("click",()=>{
    lightbox.classList.remove("active");
});
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});