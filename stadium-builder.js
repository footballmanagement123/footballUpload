const iconAddObjects = document.getElementById('icon-add-objects');
const sidebar = document.getElementById('sidebar');

iconAddObjects.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});