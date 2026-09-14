ServerEvents.recipes(event => {
event.remove({output: 'croptopia:butter'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'c:milk' },
    { 'tag': 'c:salt' }
  ],
  'result': { 'id': 'croptopia:butter', 'count': 3 }
})
})