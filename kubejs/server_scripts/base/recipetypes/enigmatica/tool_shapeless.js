events.listen('recipes', (event) => {
    var tillsIntoFarmland = [
        { type: 'minecraft:farmland', soils: ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:coarse_dirt'] },
        { type: 'farmersdelight:rich_soil_farmland', soils: ['farmersdelight:rich_soil'] },
        {
            type: 'undergarden:deepsoil_farmland',
            soils: [
                'undergarden:deepturf_block',
                'undergarden:ashen_deepturf_block',
                'undergarden:deepsoil',
                'undergarden:coarse_deepsoil'
            ]
        }
    ];

    tillsIntoFarmland.forEach(function (category) {
        var farmland = category.type;
        category.soils.forEach(function (soil) {});
    });

    buildWoodVariants.forEach((variant) => {
        //var modID = variant.logBlock.split(':')[0];

        data = {
            recipes: [
                {
                    input: variant.logBlock,
                    output: variant.logBlockStripped
                },
                {
                    input: variant.woodBlock,
                    output: variant.woodBlockStripped
                }
            ]
        };
    });
});
