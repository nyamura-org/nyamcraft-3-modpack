ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:chicken_wrapped_in_bacon'})
event.custom({
  'type': 'farm_and_charm:pot_cooking',
  'ingredients': [
    { 'item': 'croptopia:bacon' },
    { 'item': 'farm_and_charm:chicken_parts' },
    { 'tag': 'c:pasta' },
    { 'tag': 'c:butter' }
  ],
  'requireContainer': true,
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:chicken_wrapped_in_bacon', 'count': 1 },
  'requiresLearning': false
})
event.remove({output: 'farm_and_charm:bacon_with_eggs'})
event.custom({
  'type': 'farm_and_charm:pot_cooking',
  'ingredients': [
    { 'item': 'croptopia:bacon' },
    { 'item': 'croptopia:bacon' },
    { 'tag': 'c:eggs' },
    { 'tag': 'c:eggs' },
    { 'tag': 'c:butter' }
  ],
  'requireContainer': true,
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:bacon_with_eggs', 'count': 3 },
  'requiresLearning': false
})
})