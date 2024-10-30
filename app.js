// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Filtering functionality
const filterLinks = document.querySelectorAll("nav a");
const galleryItems = document.querySelectorAll(".gallery-item");

filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.getAttribute("data-filter");

        galleryItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});








