const btnOpenModal = document.getElementById("btn-open-modal")
const modal = document.getElementById("modal")
const btnCloseModal = document.getElementById("modal-close-btn")
const form = document.querySelector(".form")
const jsInput = document.querySelector(".js-input")


const openModal = () => {
    modal.classList.add("active")
    console.log(123);
}


const closeModal = () => {
    modal.classList.remove("active")
    console.log(987);
}


const onFormSubmit = (event) => {
    event.preventDefault()
    console.dir(event.currentTarget.element.value);
}


const onFocus = () => {
    console.log("Інпут отримав фокус");
}


const onBlur = () => {
    console.log("Інпут отримав блюр");
}


form.addEventListener("submit", onFormSubmit)
btnOpenModal.addEventListener("click", openModal)
btnCloseModal.addEventListener("click", closeModal)
jsInput.addEventListener("focus", onFocus)
jsInput.addEventListener("blur", onBlur)