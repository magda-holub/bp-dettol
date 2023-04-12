//revealer
function revealer() {
    var button = document.getElementById('bpToggle')

    var toggle = function (element) {
        element.classList.toggle('is-visible');
    };

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('toggle')) return;
        event.preventDefault();

        var content = document.querySelector(event.target.hash);
        if (!content) return;

        toggle(content);

    }, false);

    button.addEventListener('click', function handleClick(){
        var initialText = document.getElementById('bpToggle__text--collapsed').textContent;

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = document.getElementById('bpToggle__text--expanded').textContent;
        } else {
            button.textContent = initialText;
        }
    });
}; revealer();

//dropdown
function dropDown() {
    var boxes = document.querySelectorAll(".bpFaq__box");

    var openbox = (box) => {
        var content = box.querySelector(".bpFaq__box__content");
        box.classList.add("bpFaq__box--active");
        content.style.maxHeight = content.scrollHeight + 24 + "px";
    };

    var closebox = (box) => {
        var content = box.querySelector(".bpFaq__box__content");
        box.classList.remove("bpFaq__box--active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        var handle = box.querySelector(".bpFaq__box__handle");
        var content = box.querySelector(".bpFaq__box__content");

        handle.onclick = () => {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach((box) => closebox(box));
                openbox(box);
            }
        };
    });

}; dropDown();
