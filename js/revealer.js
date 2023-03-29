function revealer() {
    let button = document.getElementById('bp-revealer')
    let content = document.getElementById('bp-content')

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
        let initialText = 'Zobrazit více';

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = 'Zobrazit méně';
        } else {
            button.textContent = initialText;
        }
    });
}; revealer()