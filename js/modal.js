const btnOpenModal = document.getElementById("btn-open-modal");
const modal = document.getElementById("modal");
const btnCloseModal = document.getElementById("modal-close-btn");
const form = document.querySelector(".form");
const jsInput = document.querySelector(".js-input");
const backdrop = document.getElementById("backdrop");


const onOpenModal = () => {
    window.addEventListener("keydown", onEscapePress);
    modal.classList.add("active");
    console.log(123);
}


const onCloseModal = () => {
    window.removeEventListener("keydown", onEscapePress)
    modal.classList.remove("active")
}


const onEscapePress = (event) => {
    console.log(event.code);
    if (event.code === "Escape"){
        onCloseModal()
    }
}


const onBackdropClick = (event) => {
    if (event.target === event.currentTarget){
        onCloseModal();
    }
}


window.addEventListener("keydown", onEscapePress);
btnOpenModal.addEventListener("click", onOpenModal)
btnCloseModal.addEventListener("click", onCloseModal)