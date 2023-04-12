var switcher = document.querySelector("#layout_switch"),
    buttons = switcher.querySelectorAll("button"),
    testLayout = document.querySelector("#testLayout"),
    body = document.body;

switcher.querySelectorAll("button")[0].addEventListener("click", function () {
    testLayout.classList.remove("layout-0", "layout-1");
    body.classList.add("mobile");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");

});

switcher.querySelectorAll("button")[1].addEventListener("click", function () {
    testLayout.classList.remove("layout-1");
    body.classList.remove("mobile");
    testLayout.classList.add("layout-0");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");
});

switcher.querySelectorAll("button")[2].addEventListener("click", function () {
    testLayout.classList.remove("layout-0");
    body.classList.remove("mobile");
    testLayout.classList.add("layout-1");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");
});