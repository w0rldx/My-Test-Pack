events.listen('recipes', (event) => {
    // Please add new recipes to this object instead of recipes
    const newRecipes = [
        {
            output: 'botanypots:botany_pot',
            pattern: ['ADA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:terracotta',
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            },
            id: 'botanypots:crafting/botany_pot'
        }
    ];

    var recipes = [
        shapedRecipe(Item.of('minecraft:stick', 16), ['A', 'A'], {
            A: '#minecraft:logs'
        }),

        shapedRecipe('minecraft:hopper', ['ABA', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#minecraft:logs'
        }),
        shapedRecipe('refinedstorageaddons:wireless_crafting_grid', ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'refinedstorage:range_upgrade',
            C: 'refinedstorage:wireless_grid',
            D: 'minecraft:crafting_table'
        }),
        shapedRecipe('simplefarming:fish_and_chips', [' A ', 'BCB', ' A '], {
            A: '#forge:crops/potato',
            B: '#forge:grain',
            C: 'aquaculture:fish_fillet_cooked'
        }),
        shapedRecipe('minecraft:furnace', ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
        shapedRecipe('decorative_blocks:lattice', ['A A', '   ', 'A A'], {
            A: '#forge:rods/wooden'
        }),
        shapedRecipe(Item.of('valhelsia_structures:oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:spruce_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:spruce_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:birch_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:birch_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:jungle_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:jungle_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:dark_oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:dark_oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:acacia_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:acacia_log'
        }),
        shapedRecipe(Item.of('minecraft:ladder', 4), ['A A', 'ABA', 'A A'], {
            A: '#forge:rods/wooden',
            B: '#minecraft:planks'
        }),
        shapedRecipe(Item.of('emendatusenigmatica:steel_ingot', 2), ['AA'], {
            A: 'immersiveengineering:ingot_steel'
        }),
        shapedRecipe(Item.of('immersiveengineering:ingot_steel', 2), ['AA'], {
            A: 'mekanism:ingot_steel'
        }),
        shapedRecipe(Item.of('mekanism:ingot_steel', 2), ['AA'], {
            A: 'emendatusenigmatica:steel_ingot'
        }),
        // Remove in 0.4.0
        shapedRecipe(Item.of('minecraft:lapis_lazuli', 4), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/blue'
        }),
        shapedRecipe(Item.of('minecraft:diamond', 1), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/light_blue'
        }),
        shapedRecipe(Item.of('minecraft:emerald', 2), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/green'
        }),
        shapedRecipe(Item.of('minecraft:lapis_lazuli', 4), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/blue'
        }),
        shapedRecipe(Item.of('minecraft:diamond', 1), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/light_blue'
        }),
        shapedRecipe(Item.of('minecraft:emerald', 2), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/green'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'alexsmobs:roadrunner_feather',
            B: '#forge:ingots/enderium',
            C: 'minecraft:elytra',
            D: 'paraglider:deku_leaf',
            E: 'minecraft:nether_star',
            F: 'minecraft:nether_star'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'thermal:lightning_charge',
            B: '#mekanism:alloys/atomic',
            C: 'thermal:hazmat_fabric',
            D: 'paraglider:deku_leaf',
            E: 'thermal:hazmat_boots',
            F: 'alexsmobs:frontier_cap'
        }),
        shapedRecipe(Item.of('eidolon:candle', 4), ['B', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('quark:white_candle', 2), ['B', 'A', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('byg:embur_hyphae', 3), ['AA', 'AA'], {
            A: 'byg:embur_pedu'
        }),
        shapedRecipe(Item.of('byg:pollen_block', 1), ['AA', 'AA'], {
            A: 'byg:pollen_dust'
        }),
        shapedRecipe('losttrinkets:magical_feathers', ['FAF', 'EBE', 'CDC'], {
            A: 'minecraft:elytra',
            B: 'magicfeather:magicfeather',
            C: 'minecraft:prismarine_shard',
            D: Item.of('minecraft:potion', { Potion: 'bountifulbaubles:flight' }),
            E: 'rftoolsbase:infused_diamond',
            F: 'minecraft:ender_eye'
        }),
        shapedRecipe(Item.of('quark:turf', 1), ['A', 'A'], {
            A: 'quark:turf_slab'
        }),
        shapedRecipe(Item.of('minecraft:string', 3), ['AA', 'A '], {
            A: 'supplementaries:flax'
        }),

        //ID Overrides
        shapedRecipe(
            Item.of('minecraft:honeycomb_block'),
            ['AAA', 'AAA', 'AAA'],
            {
                A: 'minecraft:honeycomb'
            },
            'minecraft:honeycomb_block'
        ),

        // Torch from Stick+Standing Fire
        shapedRecipe(Item.of('minecraft:torch', 4), ['A', 'B'], {
            A: 'additional_lights:fire_for_standing_torch_s',
            B: '#forge:rods/wooden'
        })
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }
        //All recipes using logs here
        var chest = wood.modId + ':' + wood.logType + '_chest';
        if (!Item.exists(chest)) {
            event.shaped(Item.of('minecraft:chest', 4), ['AAA', 'A A', 'AAA'], {
                A: wood.logBlock
            });
        } else {
            event.shaped(Item.of(chest, 4), ['AAA', 'A A', 'AAA'], {
                A: wood.logBlock
            });
        }

        var dupes = [
            'palo_verde',
            'withering_oak',
            'blue_archwood',
            'green_archwood',
            'purple_archwood',
            'menril_filled',
            'watchful_aspen',
            'crustose',
            'sappy_maple'
        ];

        if (dupes.includes(wood.logType)) {
            return;
        }

        //All recipes using planks here
        event.shaped(Item.of('minecraft:oak_sign', 3), ['AAA', 'AAA', ' B '], {
            A: wood.plankBlock,
            B: '#forge:rods/wooden'
        });

        event.shaped(Item.of('minecraft:chest'), ['AAA', 'A A', 'AAA'], {
            A: wood.plankBlock
        });
    });

    colors.forEach((color) => {
        event
            .shaped(`botanypots:${color}_botany_pot`, ['ADA', 'ABA', 'ACA'], {
                A: `minecraft:${color}_terracotta`,
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            })
            .id(`botanypots:crafting/${color}_botany_pot`);
        event.remove({ id: `botanypots:crafting/compact_hopper_${color}_botany_pot` });
    });

    [
        { ingredient: '#forge:ingots/copper', tier: 'basic' },
        { ingredient: '#forge:dusts/redstone', tier: 'advanced' },
        { ingredient: '#forge:ingots/osmium', tier: 'elite' },
        { ingredient: '#forge:obsidian', tier: 'ultimate' }
    ].forEach((recipe) => {
        event
            .shaped(`mekanism:${recipe.tier}_bin`, ['ABA', 'A A', 'AAA'], {
                A: 'minecraft:smooth_stone',
                B: recipe.ingredient
            })
            .id(`mekanism:bin/${recipe.tier}`);
    });
});
