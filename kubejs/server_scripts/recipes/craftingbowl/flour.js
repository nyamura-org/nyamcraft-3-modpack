ServerEvents.recipes(event => {
event.remove({output: 'bakery:cake_dough'})
event.custom({
  'type': 'farm_and_charm:crafting_bowl',
  'ingredients': [
    { 'tag': 'c:flour' },
    { 'item': 'minecraft:sugar' },
    { 'tag': 'c:eggs' },
    { 'tag': 'c:milk' }
  ],
  'result': { 'id': 'bakery:cake_dough', 'count': 12 }
})
event.remove({output: 'bakery:sweet_dough'})
event.custom({
  'type': 'farm_and_charm:crafting_bowl',
  'ingredients': [
    { 'tag': 'c:flour' },
    { 'item': 'minecraft:sugar' },
    { 'tag': 'c:eggs' },
    { 'tag': 'c:water_bottles' }
  ],
  'result': { 'id': 'bakery:sweet_dough', 'count': 12 }
})
})
