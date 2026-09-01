ServerEvents.recipes(event => {
event.remove({output: 'farmersdelight:dumplings'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'c:dough' },
    { 'tag': 'c:crops/cabbage' },
    { 'tag': 'c:crops/onion' },
    { 'type': 'neoforge:compound',
      'children': [
        { 'tag': 'c:foods/raw_chicken' },
        { 'tag': 'c:foods/raw_pork' },
        { 'tag': 'c:foods/raw_beef' },
        { 'item': 'minecraft:brown_mushroom' }
      ]
    }
  ],
  'result': { 'count': 2, 'id': 'farmersdelight:dumplings' }
})
})