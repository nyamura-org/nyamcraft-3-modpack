LootJS.modifiers((event) => {
	event.addBlockModifier("farmersdelight:wild_cabbage").replaceLoot("farmersdelight:cabbage", "croptopia:cabbage")
	event.addBlockModifier("farmersdelight:wild_cabbage").replaceLoot("farmersdelight:cabbage_seeds", "croptopia:cabbage_seed")
	event.addBlockModifier("farmersdelight:wild_cabbage").replaceLoot("farmersdelight:wild_cabbages", "croptopia:cabbage")
	event.addBlockModifier("farmersdelight:cabbages").replaceLoot("farmersdelight:cabbage_seeds", "croptopia:cabbage_seed")
	event.addBlockModifier("farmersdelight:cabbages").replaceLoot("farmersdelight:cabbage", "croptopia:cabbage")
})