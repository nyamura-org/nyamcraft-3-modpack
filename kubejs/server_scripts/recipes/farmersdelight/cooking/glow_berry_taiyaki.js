ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:glow_berry_taiyaki'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 100,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'minecraft:glow_berries' },
    { 'tag': 'c:dough' },
    { 'tag': 'starcatcher:starcaught_fishable_fish' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 2, 'id': 'starcatcher_delight:glow_berry_taiyaki' }
})
})