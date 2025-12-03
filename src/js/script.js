// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightBox");

const lightboxImg= document.querySelector("#lightBox img");

lightbox.querySelector("button")?.addEventListener("click", () => lightbox.close());

document.body.addEventListener("click", (evt) => {
    if (!evt.target.matches("[data-full-img]")) return;
    document.querySelector('#lightBox img').src = evt.target.dataset.fullImg;
    document.querySelector('#lightBox').showModal();
});
