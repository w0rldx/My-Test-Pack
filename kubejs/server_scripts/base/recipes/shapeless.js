events.listen('recipes', (event) => {
    const recipes = [
        { output: 'botania:enchanted_soil', inputs: ['minecraft:grass_block', 'botania:overgrowth_seed'] },
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'simplefarming:cornbread', inputs: ['#forge:grain', '#forge:crops/corn', '#forge:grain'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: 'minecraft:pumpkin', inputs: ['autumnity:large_pumpkin_slice'] },
        {
            output: 'simplefarming:fish_sandwich',
            inputs: [
                '#forge:bread',
                'aquaculture:fish_fillet_cooked',
                'aquaculture:fish_fillet_cooked',
                '#forge:crops/tomato',
                '#forge:salad_ingredients'
            ]
        },
        {
            output: 'simplefarming:sushi',
            inputs: [
                '#forge:grain',
                'minecraft:dried_kelp',
                'aquaculture:fish_fillet_raw',
                'aquaculture:fish_fillet_raw'
            ]
        },
        {
            output: 'simplefarming:fish_fillet',
            inputs: ['#forge:grain', '#forge:grain', 'aquaculture:fish_fillet_cooked', 'aquaculture:fish_fillet_cooked']
        },
        {
            output: Item.of('farmersdelight:milk_bottle', 4),
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        {
            output: Item.of('simplefarming:candy', 2),
            inputs: ['#forge:chocolate_bars', 'minecraft:sugar', 'minecraft:sugar']
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },
        { output: 'quark:root', inputs: ['minecraft:vine', '#forge:dyes/brown'] },
        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        {
            output: Item.of('bambooeverything:bamboo_bundle', 2),
            inputs: ['thermal:bamboo_block', 'thermal:bamboo_block']
        },
        { output: Item.of('thermal:bamboo_block', 2), inputs: ['quark:bamboo_block', 'quark:bamboo_block'] },
        {
            output: Item.of('quark:bamboo_block', 2),
            inputs: ['bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_bundle']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbench'] },
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', 'emendatusenigmatica:enigmatic_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', 'emendatusenigmatica:enigmatic_hammer']
        },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        { output: 'emendatusenigmatica:fluorite_dust', inputs: ['thermal:earth_charge', '#forge:ores/fluorite'] },
        { output: 'emendatusenigmatica:dimensional_dust', inputs: ['thermal:earth_charge', '#forge:ores/dimensional'] },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        {
            output: Item.of('akashictome:tome').nbt({
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'industrialforegoing:industrial_foregoing' }
                    },
                    alexsmobs: { id: 'alexsmobs:animal_dictionary', Count: 1 },
                    immersiveengineering: { id: 'immersiveengineering:manual', Count: 1 },
                    eidolon: { id: 'eidolon:codex', Count: 1 },
                    botania: { id: 'botania:lexicon', Count: 1, tag: {} },
                    thermal: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'thermal:guidebook' } },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'patchouli:modded_for_dummies' }
                    },
                    rftoolsbase: { id: 'rftoolsbase:manual', Count: 1 },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1
                    },
                    solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                    betterendforge: { id: 'betterendforge:guidebook', Count: 1 }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        {
            output: Item.of('buildersaddition:large_candle', 4),
            inputs: ['#forge:wax', '#forge:wax', '#forge:wax', '#forge:string']
        },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: Item.of('minecraft:honeycomb', 9), inputs: ['minecraft:honeycomb_block'] },
        { output: Item.of('byg:pollen_dust', 4), inputs: ['byg:pollen_block'] },

        { output: Item.of('betterendforge:lumecorn_seed', 6), inputs: ['betterendforge:lumecorn_rod'] },
        { output: Item.of('betterendforge:bulb_vine_seed', 4), inputs: ['betterendforge:glowing_bulb'] },
        { output: Item.of('betterendforge:end_lily_seed', 1), inputs: ['betterendforge:end_lily_leaf'] },
        { output: Item.of('betterendforge:blue_vine_seed', 4), inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('minecraft:paper', 3),
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: Item.of('supplementaries:flax_seeds', 1),
            inputs: ['supplementaries:flax']
        },
        {
            output: Item.of('refinedstorage:quartz_enriched_iron', 4),
            inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:gems/quartz'],
            id: 'refinedstorage:quartz_enriched_iron'
        },
        { output: Item.of('byg:quartz_crystal'), inputs: ['minecraft:quartz'] },
        { output: Item.of('minecraft:quartz'), inputs: ['byg:quartz_crystal'] },
        {
            output: 'kubejs:quintuple_alfsteel_ingot',
            inputs: [
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:dusts/mana'
            ]
        },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
