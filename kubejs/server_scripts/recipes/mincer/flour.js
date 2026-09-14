ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:flour'})
event.custom({
  'type': 'farm_and_charm:mincer',
  'ingredient': { 'tag': 'farm_and_charm:wheat' },
  'recipe_type': 'STONE',
  'result': { 'id': 'croptopia:flour', 'count': 4 }
})
event.shaped('farm_and_charm:flour_bag', [ 'AAA', 'AAA', 'AAA' ], { A: '#c:flour'})
event.remove({output: 'farm_and_charm:flour_bag'})
event.shapeless('9x croptopia:flour',  [ 'farm_and_charm:flour_bag' ])
})