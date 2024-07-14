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






    const btn = document.querySelector('.fix-services__read-more');
    const items = Array.from(document.querySelectorAll('.fix-services__item'));
    let itemsHidden = false;
    
    function responseOnWindowWidth() {
      if (window.innerWidth > 1119) {
        items.forEach((item, index) => {
          if (index > 7) {
            item.style.display = 'none';
          }
        })
      }
      else {
        items.forEach((item, index) => {
          if (index > 5) {
            item.style.display = 'none';
          }
        })
      }
      itemsHidden = true;
    };
    responseOnWindowWidth();
    
    function readMore() {
      if (itemsHidden) {
        items.forEach((item) => {
          item.style.display = 'flex';
        });
        itemsHidden = false;
        btn.innerHTML = 'Скрыть';
        btn.style.background = '#f8f8f8 url("img/logo/expand180.svg") no-repeat 0 50%';
        btn.style.margin = '46px 0 0 0';
      }
      else {
        responseOnWindowWidth();
        btn.innerHTML = 'Показать всё';
        btn.style.background = '#f8f8f8 url("img/logo/expand.svg") no-repeat 0 50%';
        btn.style.margin = '24px 0 0 0';
      }
    };
    
    function onResize() {
      items.forEach((item) => {
        item.style.display = 'flex';
      });
      responseOnWindowWidth();
    }
    
    window.addEventListener('resize', onResize);





