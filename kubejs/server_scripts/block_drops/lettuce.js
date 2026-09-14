LootJS.modifiers((event) => {
	event.addBlockModifier("farm_and_charm:lettuce_seeds").replaceLoot("farm_and_charm:lettuce", "croptopia:lettuce_seed")
	event.addBlockModifier("farm_and_charm:lettuce_crop").replaceLoot("farm_and_charm:lettuce", "3x croptopia:lettuce")
	event.addBlockModifier("farm_and_charm:wild_lettuce").replaceLoot("farm_and_charm:wild_lettuce", "croptopia:lettuce")
	event.addBlockModifier("farm_and_charm:wild_lettuce").replaceLoot("farm_and_charm:lettuce_seeds", "croptopia:lettuce_seed")
	event.addBlockModifier("farm_and_charm:wild_lettuce").replaceLoot("farm_and_charm:lettuce", "croptopia:lettuce")
})