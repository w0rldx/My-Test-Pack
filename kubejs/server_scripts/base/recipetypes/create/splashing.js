events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
                ],
                input: 'create:limesand'
            },
            {
                outputs: [Item.of('upgrade_aquatic:driftwood_log')],
                input: '#minecraft:logs'
            },
            {
                outputs: ['embellishcraft:rusty_wall_ladder'],
                input: 'embellishcraft:steel_wall_ladder'
            },
            {
                outputs: ['embellishcraft:rusty_rungs'],
                input: 'embellishcraft:steel_rungs'
            },
            {
                outputs: ['embellishcraft:rusty_suspended_stairs'],
                input: 'embellishcraft:steel_suspended_stairs'
            },
            {
                outputs: ['embellishcraft:rusty_door'],
                input: 'embellishcraft:steel_door'
            },
            {
                outputs: ['embellishcraft:sturdy_rusty_door'],
                input: 'embellishcraft:sturdy_steel_door'
            },
            {
                outputs: ['embellishcraft:warning_rusty_door'],
                input: 'embellishcraft:warning_steel_door'
            },
            {
                outputs: [Item.of('minecraft:quartz').withChance(0.25), Item.of('minecraft:redstone').withChance(0.05)],
                input: 'byg:quartzite_sand'
            }
        ],
        rusty_items: [
            'quark:rusty_iron_plate_slab',
            'quark:rusty_iron_plate_stairs',
            'quark:rusty_iron_plate_vertical_slab'
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
    data.rusty_items.forEach((item) => {
        event.recipes.create.splashing([item], item.replace('rusty_', ''));
    });
});
