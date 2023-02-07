export default () => {
  const $navListItems = document.querySelectorAll('.nav-list-item')
  $navListItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      if (!item.classList.contains('hover')) {
        item.classList.add('hover');
      }
    })
    item.addEventListener('mouseleave', function() {
      if (item.classList.contains('hover')) {
        setTimeout(() => {

          item.classList.remove('hover');
          // item.classList.remove('hover');
        }, 1000);
      }
    })
  });
}