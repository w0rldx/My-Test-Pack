events.listen('recipes', (event) => {
    var nether_end_biomes = end_biomes.concat(nether_biomes);

    event.remove({ id: 'industrialforegoing:laser_drill_fluid/oil' });
    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"immersivepetroleum:oil",Amount:10}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 20,
                weight: 8
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens15'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"industrialforegoing:essence",Amount:5}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 10,
                weight: 4
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens13'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });
});
