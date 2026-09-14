ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:barley_patties_with_potatoes'})
event.custom({
  'type': 'farm_and_charm:pot_cooking',
  'ingredients': [
    { 'tag': 'c:crops/barley' },
    { 'tag': 'c:crops/barley' },
    { 'item': 'minecraft:potato' },
    { 'tag': 'farm_and_charm:butter' },
    { 'item': 'minecraft:egg' },
    { 'tag': 'farm_and_charm:cabbage' }
  ],
  'requireContainer': true,
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:barley_patties_with_potatoes', 'count': 2 },
  'requiresLearning': false
})
})