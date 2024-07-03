function toggleReadMore() {
    let moreContent = document.querySelector('.about-more');
    let readMoreButton = document.querySelector('.about-more--button');
    let moreBtn = document.querySelector('.more-btn--icon')
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'inline';
        readMoreButton.textContent = 'Скрыть';
        moreBtn.style.transform= 'rotate(180deg)'

    } else {
        moreContent.style.display = 'none';
        readMoreButton.textContent = 'Читать далее';
        moreBtn.style.transform= 'rotate(0)'
    }
}

    let openModal = document.querySelector('.nav_btn_modal');
    let closeModal = document.querySelector('.nav-btn-modal_close');
    let modal = document.querySelector('.nav-btn-modal__elements');
    openModal.addEventListener('click', () => {
        modal.classList.add('active')
    })
    closeModal.addEventListener('click',() => {
        modal.classList.remove('active')
    })