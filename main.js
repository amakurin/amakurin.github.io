const filters = { year: null, industries: [], stack: [] };

function applyFilters() {
  document.querySelectorAll('.project-card').forEach(card => {
    const matchesYear = !filters.year || card.dataset.year === filters.year;
    const matchesInd = filters.industries.length === 0 || filters.industries.some(tag => card.dataset.industries.includes(tag));
    const matchesStack = filters.stack.length === 0 || filters.stack.some(tag => card.dataset.stack.includes(tag));
    card.style.display = (matchesYear && matchesInd && matchesStack) ? '' : 'none';
  });
}

document.querySelectorAll('.filter-button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const parent = btn.closest('#industry-filters') ? 'industries' : 'stack';
    const list = filters[parent];
    const value = btn.textContent.trim();
    const index = list.indexOf(value);
    if (index === -1) list.push(value); else list.splice(index, 1);
    applyFilters();
  });
});

document.querySelectorAll('.year-button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.year-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filters.year = btn.textContent.trim();
    applyFilters();
  });
});

document.querySelectorAll('.project-card video').forEach(v => {
  v.addEventListener('mouseenter', () => v.play());
  v.addEventListener('mouseleave', () => v.pause());
});
