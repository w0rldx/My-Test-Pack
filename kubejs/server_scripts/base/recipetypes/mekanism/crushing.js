events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:gems/ender',
                output: Item.of('emendatusenigmatica:ender_dust')
            },
            {
                input: 'byg:pink_sandstone',
                output: Item.of('byg:pink_sand', 2)
            },
            {
                input: 'byg:purple_sandstone',
                output: Item.of('byg:purple_sand', 2)
            },
            {
                input: 'byg:blue_sandstone',
                output: Item.of('byg:blue_sand', 2)
            },
            {
                input: 'byg:white_sandstone',
                output: Item.of('byg:white_sand', 2)
            },
            {
                input: 'byg:black_sandstone',
                output: Item.of('byg:black_sand', 2)
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: item.of('atmospheric:arid_sand', 2)
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: item.of('atmospheric:red_arid_sand', 2)
            },
            {
                input: '#forge:stone',
                output: 'minecraft:cobblestone'
            },
            {
                input: Item.of('create:limesand', 3),
                output: Item.of('emendatusenigmatica:silicon_gem')
            },
            {
                input: '#forge:grain',
                output: Item.of('create:wheat_flour', 1)
            },
            {
                input: 'byg:raw_quartz_block',
                output: Item.of('byg:quartzite_sand', 2)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input);
    });
});
