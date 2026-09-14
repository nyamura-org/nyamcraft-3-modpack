RecipeViewerEvents.removeEntries("item", event => {
	event.remove('/^tinymultiblocklib:/')

	event.remove('farmersdelight:dog_food')
	event.remove('farmersdelight:raw_pasta')
	event.remove('croptopia:dough')
	event.remove('croptopia:coffee')

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

