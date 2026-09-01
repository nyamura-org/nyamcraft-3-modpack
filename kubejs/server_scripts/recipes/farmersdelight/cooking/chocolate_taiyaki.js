ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:chocolate_taiyaki'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 100,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'minecraft:cocoa_beans' },
    { 'tag': 'c:dough' },
    { 'tag': 'starcatcher:starcaught_fishable_fish' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 2, 'id': 'starcatcher_delight:chocolate_taiyaki' }
})
})