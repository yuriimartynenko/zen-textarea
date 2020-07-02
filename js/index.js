const body = document.querySelector('body');
const textArea = document.querySelector('.section__textarea');
const buttonSend = document.querySelector('.section__submit');
const sectionWriteComment = document.querySelector('.section__write-comment');
const sectionLists = document.querySelector('.section__lists');
const sectionComments = document.querySelector('.section__comments');
const toggleButton = document.querySelectorAll('.section__toggle');

function addComment(comment) {
    sectionComments.insertAdjacentHTML('beforeend', `<div class='section__item'>${comment}</div>`);
}

function onAddComment(event) {
    event.preventDefault();
    
    const minCharacters = 2;
    const textAreaValue = textArea.value;

    if (textAreaValue.trim().length > minCharacters) {
        addComment(textAreaValue);
        textArea.value = '';
    } else {
        textArea.value = 'Opps. Min 3 symbols...';
    }
}

function onToggle(event) {
    event.preventDefault();

    const sectionHidden = 'section__toggle--hidden';
    const sectionBody = 'body-background';

    if (sectionWriteComment.classList.contains(sectionHidden)) {
        sectionWriteComment.classList.remove(sectionHidden);
        sectionLists.classList.add(sectionHidden);
        body.classList.remove(sectionBody);
    } else {
        sectionWriteComment.classList.add(sectionHidden);
        sectionLists.classList.remove(sectionHidden);
        body.classList.add(sectionBody);
    }
}

toggleButton.forEach(el => {
    el.addEventListener('click', onToggle);
});
buttonSend.addEventListener('click', onAddComment);
