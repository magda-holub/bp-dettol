//revealer
function revealer() {
    let button = document.getElementById('bpToggle')

    let toggle = function (element) {
        element.classList.toggle('is-visible');
    };

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('toggle')) return;
        event.preventDefault();

        let content = document.querySelector(event.target.hash);
        if (!content) return;

        toggle(content);

    }, false);

    button.addEventListener('click', function handleClick(){
        let initialText = document.getElementById('bpToggle--text__collapsed').textContent;

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = document.getElementById('bpToggle--text__expanded').textContent;
        } else {
            button.textContent = initialText;
        }
    });
}; revealer();

//dropdown
function dropDown() {
    let boxes = document.querySelectorAll(".bpFaq--box");

    let openbox = (box) => {
        let content = box.querySelector(".bpFaq--box--content");
        box.classList.add("bpFaq--box__active");
        content.style.maxHeight = content.scrollHeight + 24 + "px";
    };

    let closebox = (box) => {
        let content = box.querySelector(".bpFaq--box--content");
        box.classList.remove("bpFaq--box__active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        let handle = box.querySelector(".bpFaq--box--handle");
        let content = box.querySelector(".bpFaq--box--content");

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

//h1
$("#h1cc").insertAfter("#categoryUpperDescription")