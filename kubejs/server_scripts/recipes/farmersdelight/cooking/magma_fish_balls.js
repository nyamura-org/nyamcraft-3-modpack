ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:magma_fish_balls'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'starcatcher:worms' },
    { 'item': 'starcatcher:magma_fish' },
    { 'tag': 'c:foods/tomato' },
    { 'tag': 'c:dough' },
    { 'item': 'minecraft:egg' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 4, 'id': 'starcatcher_delight:magma_fish_balls' }
})
})