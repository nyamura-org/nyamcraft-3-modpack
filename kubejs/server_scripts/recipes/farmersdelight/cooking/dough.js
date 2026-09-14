ServerEvents.recipes(event => {
event.remove({output: 'croptopia:tofu_and_dumplings'})
event.custom({
  'type': 'farmersdelight:cooking',
  'container': { 'id': 'minecraft:bowl' },
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'c:doughs' },
    { 'tag': 'c:crops/chile_pepper' },
    { 'tag': 'c:tofu' }
  ],
  'result': { 'id': 'croptopia:tofu_and_dumplings', 'count': 1 }
})
event.remove({output: 'croptopia:chicken_and_dumplings'})
event.custom({
  'type': 'farmersdelight:cooking',
  'container': { 'id': 'minecraft:bowl' },
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'c:doughs' },
    { 'tag': 'c:crops/chile_pepper' },
    { 'tag': 'c:foods/raw_chicken' }
  ],
  'result': { 'id': 'croptopia:chicken_and_dumplings', 'count': 1 }
})
event.remove({output: 'croptopia:egg_roll'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'tag': 'c:crops/lettuce' },
    { 'tag': 'c:crops/chile_pepper' },
    { 'tag': 'c:doughs' },
    { 'tag': 'c:eggs' }
  ],
  'result': { 'id': 'croptopia:egg_roll', 'count': 1 }
})
})