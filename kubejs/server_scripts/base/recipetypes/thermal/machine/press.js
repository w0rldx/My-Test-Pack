events.listen('recipes', (event) => {
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
            output: Item.of('immersiveengineering:mold_plate', 1)
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
            output: Item.of('immersiveengineering:mold_wire', 1)
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
            output: Item.of('immersiveengineering:mold_gear', 1)
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
            output: Item.of('immersiveengineering:mold_rod', 1)
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')],
            output: Item.of('immersiveengineering:empty_casing', 2)
        },
        {
            inputs: [Item.of('byg:pink_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('byg:pink_sand', 4)
        },
        {
            inputs: [Item.of('byg:purple_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('byg:purple_sand', 4)
        },
        {
            inputs: [Item.of('byg:blue_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('byg:blue_sand', 4)
        },
        {
            inputs: [Item.of('byg:white_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('byg:white_sand', 4)
        },
        {
            inputs: [Item.of('byg:black_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('byg:black_sand', 4)
        },
        {
            inputs: [Item.of('atmospheric:arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('atmospheric:arid_sand', 4)
        },
        {
            inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('atmospheric:red_arid_sand', 4)
        },
        //ID Overrides
        {
            id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
            inputs: [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('minecraft:honeycomb_block', 1)
        },
        {
            id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
            inputs: [Item.of('minecraft:honeycomb_block', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            output: Item.of('minecraft:honeycomb', 9)
        }
    ];

    ['osmium', 'aluminum', 'uranium'].forEach((metal) => {
        recipes.push({
            inputs: [
                Item.of(`emendatusenigmatica:${metal}_ingot`, 9),
                Ingredient.of('#thermal:crafting/dies/packing_3x3')
            ],
            output: Item.of(`emendatusenigmatica:${metal}_block`)
        });
    });

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400).id(recipe.id)
            : event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400);
    });
});
