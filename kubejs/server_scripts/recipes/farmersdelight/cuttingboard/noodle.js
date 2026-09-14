ServerEvents.recipes(event => {
event.remove({output: 'farmersdelight:raw_pasta'})
event.remove({output: 'croptopia:noodle'})
event.custom({
  'type': 'farmersdelight:cutting',
  'ingredients': [
    { 'tag': 'c:foods/dough' }
  ],
  'tool': [
    { 'type': 'farmersdelight:item_ability',
      'action': 'knife_dig' },
    { 'tag': 'c:tools/knife'}
  ],
  'result': [{ 'item': { 'id': 'croptopia:noodle', 'count': 1 }}]
})
})