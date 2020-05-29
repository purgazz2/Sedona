var seach = document.querySelector(".seach-button");
var popup = document.querySelector(".modal");

var form = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adultAmount = popup.querySelector("[name=adult]");
var childAmount = popup.querySelector("[name=child]");

seach.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");
    // dateIn.focus();
});

form.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value || !childAmount || !adultAmount) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});