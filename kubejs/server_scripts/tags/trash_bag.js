ServerEvents.tags('item', (event) => {
	//whitelist
	//event.add('furniture:trash_bag_blacklist', /^minecraft:/)
	//event.add('furniture:trash_bag_blacklist', /^serene_shrubbery:/)
	//event.add('furniture:trash_bag_blacklist', /^starcatcher_delight:/)
	//event.add('furniture:trash_bag_blacklist', /^sootychimneys:/)
	//event.add('furniture:trash_bag_blacklist', /^handcrafted:/)
	//event.add('furniture:trash_bag_blacklist', /^naturalist:/)
	//event.add('furniture:trash_bag_blacklist', /^farmersdelight:/)
	//event.add('furniture:trash_bag_blacklist', /^fungidelight:/)
	//event.add('furniture:trash_bag_blacklist', /^bakery:/)
	//event.add('furniture:trash_bag_blacklist', /^herbalbrews:/)
	//event.add('furniture:trash_bag_blacklist', /^meadow:/)
	//event.add('furniture:trash_bag_blacklist', /^farm_and_charm:/)
	//event.add('furniture:trash_bag_blacklist', /^brewery:/)
	//event.add('furniture:trash_bag_blacklist', /^vinery:/)

	//blacklist
	event.add('furniture:trash_bag_blacklist', /^ftbquests:/)
	event.add('furniture:trash_bag_blacklist', /^ftbfiltersystem:/)
	event.add('furniture:trash_bag_blacklist', /^seamlesssleep:/)
	event.add('furniture:trash_bag_blacklist', /^yigd:/)
	event.add('furniture:trash_bag_blacklist', /^selling_bin:/)
	event.add('furniture:trash_bag_blacklist', /^ftblibrary:/)
	event.add('furniture:trash_bag_blacklist', /^tinymultiblocklib:/)
	event.add('furniture:trash_bag_blacklist', /^lootr:/)
	event.add('furniture:trash_bag_blacklist', /^mowziesmobs:/)
	event.add('furniture:trash_bag_blacklist', /^croptopia:/)
	event.add('furniture:trash_bag_blacklist', /^biomesoplenty:/)
	event.add('furniture:trash_bag_blacklist', /^alexsmobsup:/)
	event.add('furniture:trash_bag_blacklist', /^starcatcher:/)
	event.add('furniture:trash_bag_blacklist', /^dramaticdoors:/)
	event.add('furniture:trash_bag_blacklist', /^vinery:/)
	event.add('furniture:trash_bag_blacklist', /^furniture:/)
	event.add('furniture:trash_bag_blacklist', /^backpacked:/)
	event.add('furniture:trash_bag_blacklist', /^waystones:/)
	event.add('furniture:trash_bag_blacklist', /^wildernature:/)
	event.add('furniture:trash_bag_blacklist', /^citadelup:/)
	event.add('furniture:trash_bag_blacklist', /^biomesoplenty:/)
	event.add('furniture:trash_bag_blacklist', /^sophisticatedstorage:/)
	event.add('furniture:trash_bag_blacklist', /^sophisticatedcore:/)
	//item_blacklist
	event.add('furniture:trash_bag_blacklist', /spawn_egg/)
	event.add('furniture:trash_bag_blacklist', 'minecraft:trial_spawner')
	event.add('furniture:trash_bag_blacklist', 'minecraft:vault')
	event.add('furniture:trash_bag_blacklist', 'minecraft:end_portal_frame')

	//nether_stage
	event.add('furniture:trash_bag_blacklist', /^betternether:/)
	event.add('furniture:trash_bag_blacklist', /nether/)	
	//end_stage
	event.add('furniture:trash_bag_blacklist', /^betterend:/)
	event.add('furniture:trash_bag_blacklist', 'minecraft:shulker_shell')
	event.add('furniture:trash_bag_blacklist', 'minecraft:dragon_egg')
	event.add('furniture:trash_bag_blacklist', 'minecraft:end_rod')
	event.add('furniture:trash_bag_blacklist', 'minecraft:end_crystal')
	event.add('furniture:trash_bag_blacklist', /chorus/)
	event.add('furniture:trash_bag_blacklist', /end_stone/)
	event.add('furniture:trash_bag_blacklist', /purpur_/)
	//aether_stage
	event.add('furniture:trash_bag_blacklist', /^deep_aether:/)
	event.add('furniture:trash_bag_blacklist', /^aether:/)

	//items
	event.add('furniture:trash_bag_blacklist', 'herbalbrews:tea_leaf_crate')
	event.add('furniture:trash_bag_blacklist', 'brewery:netherite_brewingstation')
	event.add('furniture:trash_bag_blacklist', 'meadow:alpine_salt')
	event.add('furniture:trash_bag_blacklist', 'herbalbrews:herbalbrews_banner')
	event.add('furniture:trash_bag_blacklist', 'bakery:bakery_banner')
	event.add('furniture:trash_bag_blacklist', 'meadow:meadow_banner')
	event.add('furniture:trash_bag_blacklist', 'brewery:brewery_banner')
	event.add('furniture:trash_bag_blacklist', 'vinery:vinery_standard')
	//farmerdelight
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:carrot_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:potato_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:beetroot_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:cabbage_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:tomato_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:onion_crate')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:wheat_dough')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:bacon')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:cooked_bacon')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:tomato')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:tomato_seeds')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:rotten_tomato')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:wild_tomatoes')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:cabbage_seeds')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:wild_cabbages')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:cabbage')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:cabbage_leaf')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:onion')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:wild_onions')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:rice_bag')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:rice_bale')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:wild_rice')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:rice_panicle')
	event.add('furniture:trash_bag_blacklist', 'farmersdelight:rice')
	//fungidelight
	event.add('furniture:trash_bag_blacklist', 'fungidelight:brown_mushroom_crate')
	event.add('furniture:trash_bag_blacklist', 'fungidelight:inky_cap_mushroom_crate')
	event.add('furniture:trash_bag_blacklist', 'fungidelight:morel_mushroom_crate')
	event.add('furniture:trash_bag_blacklist', 'fungidelight:red_mushroom_crate')
	event.add('furniture:trash_bag_blacklist', 'fungidelight:truffle_crate')
	//farm_and_charm
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:scarecrow')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:butter')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:bacon')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:carrot_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:potato_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:beetroot_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:tomato')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:tomato_seeds')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:rotten_tomato')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:tomato_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_tomatoes')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:lettuce')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:lettuce_seeds')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:lettuce_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_lettuce')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:onion')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:onion_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_onions')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:kernels')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:corn')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_corn')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:corn_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:strawberry_seeds')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:strawberry')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_strawberries')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:strawberry_bag')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:barley_seeds')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:barley')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:barley_ball')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:wild_barley')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:strawberry_tea_cup')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:nettle_tea_cup')
	event.add('furniture:trash_bag_blacklist', 'farm_and_charm:ribwort_tea_cup')
})