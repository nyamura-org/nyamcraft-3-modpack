ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:suspicious_taiyaki'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 100,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher:willish' },
    { 'tag': 'c:dough' },
    { 'tag': 'starcatcher:starcaught_fishable_fish' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 2, 'id': 'starcatcher_delight:suspicious_taiyaki' }
})
})