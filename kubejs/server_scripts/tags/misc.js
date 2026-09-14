ServerEvents.tags('item', (event) => {
	event.add('c:foods/dough', 'farm_and_charm:dough')
	event.remove('c:foods/dough', 'croptopia:dough')
	event.remove('c:dough', 'croptopia:dough')
	event.remove('c:doughs', 'croptopia:dough')
	event.add('c:foods/pasta', 'farm_and_charm:raw_pasta')
	event.remove('c:foods/pasta', 'farmersdelight:raw_pasta')
})
