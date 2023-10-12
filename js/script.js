
const dropdownTexts = document.querySelectorAll(".droptet");
const dropdownContents = document.querySelectorAll(".dropme");

dropdownTexts.forEach((text, index) => {
    text.addEventListener("click", function () {
        if (dropdownContents[index].classList.contains("hidden")) {
            dropdownContents[index].classList.remove("hidden");
        } else {
            dropdownContents[index].classList.add("hidden");
        }
    });

    document.addEventListener("click", function (event) {
        if (!text.contains(event.target)) {
            dropdownContents[index].classList.add("hidden");
        }
    });
});
