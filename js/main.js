elsIndexServicesLinks = document.querySelectorAll('.services-tabs__link');
elsIndexServicesItems = document.querySelectorAll('.services-tabs__item');

elsIndexServicesLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    elsIndexServicesItems.forEach( function (item) {
      item.classList.remove('services-tabs__item--active');
    })
    link.closest('.services-tabs__item').classList.add('services-tabs__item--active');
  })
})
