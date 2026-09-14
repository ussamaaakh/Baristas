let activeCategory = 'Toute la carte';
const search = document.getElementById('search');
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const pills = document.getElementById('pills');
['Toute la carte', ...menuCategories].forEach(category => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'pill'; button.textContent = category;
  button.addEventListener('click', () => { activeCategory = category; render(); });
  pills.append(button);
});
function render() {
  [...pills.children].forEach(button => { const active = button.textContent === activeCategory; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  const query = normalize(search.value.trim());
  const items = menuItems.filter(item => (activeCategory === 'Toute la carte' || item.category === activeCategory) && normalize(`${item.name} ${item.desc || ''} ${item.category}`).includes(query));
  document.getElementById('category-title').textContent = activeCategory;
  document.getElementById('result-count').textContent = `${items.length} résultat${items.length === 1 ? '' : 's'}`;
  const grid = document.getElementById('grid'); grid.replaceChildren();
  items.forEach(item => {
    const card = document.createElement('article'); card.className = 'dish';
    const category = document.createElement('span'); category.className = 'dish-category'; category.textContent = item.category;
    const title = document.createElement('h3'); title.textContent = item.name;
    const description = document.createElement('p'); description.textContent = item.desc || '';
    const price = document.createElement('span'); price.className = 'price'; price.textContent = item.price;
    card.append(category,title,description,price); grid.append(card);
  });
  if(!items.length) {
    const empty = document.createElement('div'); empty.className = 'empty-state';
    const message = document.createElement('p'); message.textContent = 'Aucun plat ne correspond à votre recherche. Essayez une autre envie ou une autre catégorie.';
    const reset = document.createElement('button'); reset.className = 'button'; reset.textContent = 'Afficher toute la carte'; reset.addEventListener('click', () => { search.value = ''; activeCategory = 'Toute la carte'; render(); search.focus(); });
    empty.append(message,reset); grid.append(empty);
  }
}
search.addEventListener('input',render);
render();
