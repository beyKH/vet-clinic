elsIndexServicesLinks = document.querySelectorAll('.services-tabs__link');
elsIndexServicesItems = document.querySelectorAll('.services-tabs__item');

elsIndexServicesLinks.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    elsIndexServicesItems.forEach( function (item) {
      item.classList.remove('services-tabs__item--active');
    })
    link.closest('.services-tabs__item').classList.add('services-tabs__item--active');
  })
})


let  elsGiveQuestionLink = document.querySelector('.site-header__link');
let  elsFaqSection  = document.querySelector('.modal-faq');
let  elsFaqButton  = document.querySelector('.modal-faq__cancel-button');

 elsGiveQuestionLink.addEventListener('click',function (evt) {
   evt.preventDefault();
  elsFaqSection.classList.add('modal-faq--active');

})

elsFaqButton.addEventListener('click',function () {
  elsFaqSection.classList.remove('modal-faq--active');
})


elsqaItem = document.querySelectorAll('.qa');
elsqaToggler = document.querySelectorAll('.qa-question__toggler');

elsqaToggler.forEach(function (toggler) {
  toggler.addEventListener('click',function () {
      toggler.closest('.qa').classList.toggle('qa--active');
  })
})



// article

elsArticleITem  = document.querySelectorAll('.article-card');
elsArticleLink = document.querySelectorAll('.article-card__link');

elsArticleLink.forEach(function (link) {
  link.addEventListener('click',function (evt) {
    evt.preventDefault();
    elsArticleITem.forEach(function (item) {
      item.classList.remove('article-card__open');

    })
    link.closest('.article-card').classList.add('article-card__open');
  })
})
