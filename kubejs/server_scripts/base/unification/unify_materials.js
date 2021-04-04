//priority: 900
events.listen('recipes', (event) => {
    materialsToUnify.forEach(function (material) {
        var ore = getPreferredItemInTag(Ingredient.of('#forge:ores/' + material)).id;
        var ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;
        var chunk = getPreferredItemInTag(Ingredient.of('#forge:chunks/' + material)).id;

        var crushedOre = getPreferredItemInTag(Ingredient.of('#create:crushed_ores/' + material)).id;
        var dust = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + material)).id;
        var shard = getPreferredItemInTag(Ingredient.of('#forge:shards/' + material)).id;

        var plate = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;
        var gear = getPreferredItemInTag(Ingredient.of('#forge:gears/' + material)).id;
        var rod = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        var wire = getPreferredItemInTag(Ingredient.of('#forge:wires/' + material)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);

        betterend_alloys(event, material, ore, ingot);

        create_ore_processing_with_secondary_outputs(event, material, crushedOre);
        create_gem_processing(event, material, ore, gem, dust, shard);
        create_ingot_gem_milling(event, material, ingot, dust, gem);
        create_press_plates(event, material, gem, plate);

        emendatus_hammer_crushing(event, material, ore, dust);
        emendatus_shapeless_transform(event, material, ore, chunk);

        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_ore_processing(event, material, ore, gem, shard);
        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust);
        immersiveengineering_press_plates(event, material, ingot, gem, plate);
        immersiveengineering_hammer_plates(event, material, ingot, gem, plate);
        immersiveengineering_hammer_crushing(event, material, ore, dust);
        immersiveengineering_gem_crushing(event, material, dust, gem);

        minecraft_ore_ingot_smelting(event, material, ore, ingot);
        minecraft_ore_gem_smelting(event, material, ore, gem);
        minecraft_dust_smelting(event, material, dust, ingot);

        thermal_ore_pulverizing(event, material, ore, dust, gem, shard);
        thermal_press_wires(event, material, wire);
        thermal_press_plates(event, material, gem, plate);
    });
});

//material unification functions
function gear_unification(event, material, ingot, gem, gear) {
    if (gear == air) {
        return;
    }

    var output = gear,
        input,
        mold = '#thermal:crafting/dies/gear';

    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    // Implemented by Thermal
    // event.recipes.thermal.press(gear, [Item.of(gearInput, 4), 'thermal:press_gear_die']);

    event.recipes.immersiveengineering.metal_press(output, Ingredient.of(input, 4), mold);
    event.shaped(gear, [' B ', 'BAB', ' B '], {
        A: '#forge:nuggets/iron',
        B: input
    });
}

function rod_unification(event, material, ingot, gem, rod) {
    if (rod == air) {
        return;
    }

    event.remove({ type: 'minecraft:crafting_shaped', output: rod });

    var output = Item.of(rod, 2),
        input,
        mold = '#thermal:crafting/dies/rod';

    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.thermal.press(output, [input, mold]).energy(2400);
    event.recipes.immersiveengineering.metal_press(output, input, mold);
    event.shaped(output, [' A ', ' A ', '   '], {
        A: input
    });
}

function betterend_alloys(event, material, ore, ingot) {
    if (ore == air || ingot == air) {
        return;
    }
    var tag = 'forge:ores/' + material;
    event.custom({
        type: 'betterendforge:alloying',
        ingredients: [{ tag: tag }, { tag: tag }],
        result: Ingredient.of(ingot, 3),
        experience: 2,
        smelttime: 300
    });
}

function create_ore_processing_with_secondary_outputs(event, material, crushedOre) {
    if (crushedOre == air) {
        return;
    }

    var primaryOutput = crushedOre,
        stoneOutput = 'minecraft:cobblestone',
        primaryCount = 2,
        secondaryCount = 2,
        secondaryMaterial,
        input = '#forge:ores/' + material,
        processingTime = 300;

    switch (material) {
        case 'iron':
            secondaryMaterial = 'nickel';
            processingTime = 400;
            break;
        case 'nickel':
            secondaryMaterial = 'iron';
            processingTime = 350;
            break;
        case 'gold':
            secondaryMaterial = 'zinc';
            break;
        case 'copper':
            secondaryMaterial = 'gold';
            processingTime = 350;
            break;
        case 'aluminum':
            secondaryMaterial = 'iron';
            break;
        case 'lead':
            secondaryMaterial = 'silver';
            break;
        case 'silver':
            secondaryMaterial = 'lead';
            break;
        case 'uranium':
            secondaryMaterial = 'lead';
            processingTime = 400;
            break;
        case 'osmium':
            secondaryMaterial = 'tin';
            processingTime = 400;
            break;
        case 'tin':
            secondaryMaterial = 'osmium';
            processingTime = 350;
            break;
        case 'zinc':
            secondaryMaterial = 'gold';
            processingTime = 350;
            break;
        case 'iesnium':
            secondaryMaterial = 'iesnium';
            processingTime = 350;
            break;
        case 'cloggrum':
            secondaryMaterial = 'cloggrum';
            processingTime = 350;
            break;
        case 'froststeel':
            secondaryMaterial = 'froststeel';
            processingTime = 350;
            break;
        case 'regalium':
            secondaryMaterial = 'regalium';
            processingTime = 350;
            break;
        case 'utherium':
            secondaryMaterial = 'utherium';
            processingTime = 350;
            break;
        default:
            return;
    }

    var secondaryOutput = getPreferredItemInTag(Ingredient.of('#create:crushed_ores/' + secondaryMaterial)).id;
    var primaryChance = 0.25,
        secondaryChance = 0.05;

    var outputs = [
        Item.of(primaryOutput),
        Item.of(primaryOutput, primaryCount).withChance(primaryChance),
        Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
    ];

    event.recipes.create.milling(outputs, input).processingTime(processingTime);

    primaryChance = 0.6;
    secondaryChance = 0.1;
    outputs = [
        Item.of(primaryOutput),
        Item.of(primaryOutput, primaryCount).withChance(primaryChance),
        Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
        Item.of(stoneOutput).withChance(0.125)
    ];
    event.recipes.create.crushing(outputs, input).processingTime(processingTime);
}

function create_gem_processing(event, material, ore, gem, dust, shard) {
    if (ore == air) {
        return;
    }

    var stoneOutput = 'minecraft:cobblestone',
        processingTime = 300,
        output = gem,
        primaryCount,
        secondaryCount,
        input = '#forge:ores/' + material;

    switch (material) {
        case 'redstone':
            primaryCount = 8;
            secondaryCount = 6;
            secondaryChance = 0.25;
            output = dust;
            break;
        case 'coal':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.5;
            break;
        case 'diamond':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.25;
            processingTime = 500;
            break;
        case 'emerald':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.25;
            processingTime = 500;
            break;
        case 'lapis':
            primaryCount = 8;
            secondaryCount = 4;
            secondaryChance = 0.25;
            break;
        case 'quartz':
            primaryCount = 2;
            secondaryCount = 4;
            secondaryChance = 0.5;
            processingTime = 350;
            stoneOutput = 'minecraft:netherrack';
            break;
        case 'sulfur':
            primaryCount = 6;
            secondaryCount = 2;
            secondaryChance = 0.25;
            break;
        case 'apatite':
            primaryCount = 8;
            secondaryCount = 4;
            secondaryChance = 0.25;
            break;
        case 'fluorite':
            primaryCount = 6;
            secondaryCount = 3;
            secondaryChance = 0.25;
            break;
        case 'dimensional':
            primaryCount = 6;
            secondaryCount = 3;
            secondaryChance = 0.25;
            break;
        case 'ender':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.25;
            output = shard;
            break;
        case 'amber':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.25;
            output = shard;
            break;
        default:
            return;
    }
    var outputs = [
        Item.of(output, primaryCount),
        Item.of(output, secondaryCount).withChance(secondaryChance),
        Item.of(stoneOutput).withChance(0.125)
    ];
    
    //TODO:FIX
    event.recipes.create.crushing(outputs, input).processingTime(processingTime);
}

function create_ingot_gem_milling(event, material, ingot, dust, gem) {
    if (dust == air) {
        return;
    }

    var input,
        outputs = [Item.of(dust, 1)],
        processingTime = 300;
    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.create.milling(outputs, input).processingTime(processingTime);
}

function create_press_plates(event, material, gem, plate) {
    if (plate == air || gem == air) {
        return;
    }

    var output = plate;
    var input = '#forge:gems/' + material;

    event.recipes.create.pressing(output, input);
}

function emendatus_hammer_crushing(event, material, ore, dust) {
    if (ore == air || dust == air) {
        return;
    }

    event.replaceInput(
        { id: 'emendatusenigmatica:dust_from_chunk/' + material },
        'emendatusenigmatica:' + material + '_chunk',
        '#forge:ores/' + material
    );
}

function emendatus_shapeless_transform(event, material, ore, chunk) {
    if (ore == air || chunk == air) {
        return;
    }
    if (material == 'mana') {
        material = 'arcane';
    }

    event.shapeless('emendatusenigmatica:' + material + '_ore', ['emendatusenigmatica:' + material + '_chunk']);
}

function immersiveengineering_hammer_crushing(event, material, ore, dust) {
    if (ore == air || dust == air) {
        return;
    }

    let output = dust,
        input = '#forge:ores/' + material,
        hammer = 'immersiveengineering:hammer';

    event.remove({ id: 'immersiveengineering:crafting/hammercrushing' + material });
    event.shapeless(output, [input, hammer]).id('kubejs:immersiveengineering_hammer_crushing/' + material);
}

function immersiveengineering_gem_crushing(event, material, dust, gem) {
    if (gem == air || dust == air) {
        return;
    }

    var output = dust,
        input = '#forge:gems/' + material;

    event.recipes.immersiveengineering.crusher(output, input).energy(2000);
}

function immersiveengineering_ingot_crushing(event, material, dust, ingot) {
    if (ingot == air || dust == air) {
        return;
    }

    if (material == 'signalum' || material == 'lumium' || material == 'enderium') {
        var output = dust,
            input = '#forge:ingots/' + material;

        event.recipes.immersiveengineering.crusher(output, input).energy(2000);
    }
}

function immersiveengineering_ore_processing(event, material, ore, gem, shard) {
    if (ore == air || gem == air) {
        return;
    }
    var count,
        input = '#forge:ores/' + material,
        output = gem;

    switch (material) {
        case 'sulfur':
            count = 6;
            break;
        case 'apatite':
            count = 12;
            break;
        case 'dimensional':
            count = 8;
            break;
        case 'mana':
            count = 2;
            break;
        case 'cinnabar':
            count = 2;
            break;
        case 'potassium_nitrate':
            count = 2;
            break;
        case 'bitumen':
            count = 2;
            break;
        case 'ender':
            count = 3;
            output = shard;
            break;
        case 'amber':
            count = 3;
            output = shard;
            break;
        default:
            return;
    }

    event.recipes.immersiveengineering.crusher(Item.of(output, count), input).energy(2000);
}

function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust) {
    if (ore == air) {
        return;
    }

    var primaryOutput = Item.of(dust, 2),
        secondaryMaterial,
        secondaryChance = 0.1,
        input = '#forge:ores/' + material;

    switch (material) {
        case 'iron':
            secondaryMaterial = 'nickel';
            break;
        case 'nickel':
            secondaryMaterial = 'iron';
            break;
        case 'gold':
            secondaryMaterial = 'zinc';
            break;
        case 'copper':
            secondaryMaterial = 'gold';
            break;
        case 'aluminum':
            secondaryMaterial = 'iron';
            break;
        case 'lead':
            secondaryMaterial = 'silver';
            break;
        case 'silver':
            secondaryMaterial = 'lead';
            break;
        case 'uranium':
            secondaryMaterial = 'lead';
            break;
        case 'osmium':
            secondaryMaterial = 'tin';
            break;
        case 'tin':
            secondaryMaterial = 'osmium';
            break;
        case 'zinc':
            secondaryMaterial = 'gold';
            break;
        case 'iesnium':
            secondaryMaterial = 'iesnium';
            break;
        case 'cloggrum':
            secondaryMaterial = 'cloggrum';
            break;
        case 'froststeel':
            secondaryMaterial = 'froststeel';
            break;
        case 'regalium':
            secondaryMaterial = 'regalium';
            break;
        case 'utherium':
            secondaryMaterial = 'utherium';
            break;
        default:
            return;
    }

    var secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + secondaryMaterial)).id;

    event.recipes.immersiveengineering
        .crusher(primaryOutput, input, [Item.of(secondaryOutput).chance(secondaryChance)])
        .id('immersiveengineering:crusher/ore_' + material);
}

function immersiveengineering_press_plates(event, material, ingot, gem, plate) {
    if (plate == air) {
        return;
    }

    event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });
    blacklistedMaterials = [
        'iron',
        'gold',
        'copper',
        'aluminum',
        'silver',
        'lead',
        'nickel',
        'uranium',
        'osmium',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'constantan',
        'electrum',
        'steel',
        'invar'
    ];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var output = plate,
        mold = '#thermal:crafting/dies/plate';
    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.immersiveengineering.metal_press(output, input, mold).energy(2400);
}

function immersiveengineering_hammer_plates(event, material, ingot, gem, plate) {
    if (plate == air) {
        return;
    }

    const hammer = 'immersiveengineering:hammer';
    for (let i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    let output = plate;
    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }
    event.shapeless(output, [input, hammer]).id('kubejs:immersiveengineering_hammer_plates/' + material);
}

function minecraft_ore_ingot_smelting(event, material, ore, ingot) {
    if (ore == air || ingot == air) {
        return;
    }

    blacklistedMaterials = ['ender'];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var output = ingot,
        input = '#forge:ores/' + material;

    event.smelting(output, input).xp(0.7);
    event.blasting(output, input).xp(0.7);
}

function minecraft_ore_gem_smelting(event, material, ore, gem) {
    if (ore == air || gem == air) {
        return;
    }

    blacklistedMaterials = ['amber'];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var output = gem,
        input = '#forge:ores/' + material;

    event.smelting(output, input).xp(0.7);
    event.blasting(output, input).xp(0.7);
}

function minecraft_dust_smelting(event, material, dust, ingot) {
    if (ingot == air || dust == air) {
        return;
    }

    blacklistedMaterials = ['starmetal'];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var output = ingot,
        input = '#forge:dusts/' + material;

    event.smelting(output, input).xp(0.7);
    event.blasting(output, input).xp(0.7);
}

function thermal_ore_pulverizing(event, material, ore, dust, gem, shard) {
    if (ore == air) {
        return;
    }

    var primaryOutput = dust,
        stoneOutput = 'minecraft:gravel',
        primaryCount = 2,
        secondaryMaterial,
        input = '#forge:ores/' + material,
        experience = 0.2;

    /*experience: 0.2,
    outputs: [
        Item.of('emendatusenigmatica:aluminum_dust', 2),
        Item.of('emendatusenigmatica:iron_dust').chance(0.1),
        Item.of('minecraft:gravel').chance(0.2)
    ]*/

    switch (material) {
        case 'nickel':
            secondaryMaterial = 'iron';
            break;
        case 'aluminum':
            secondaryMaterial = 'iron';
            break;
        case 'uranium':
            secondaryMaterial = 'lead';
            break;
        case 'osmium':
            secondaryMaterial = 'tin';
            break;
        case 'zinc':
            secondaryMaterial = 'gold';
            break;
        case 'ender':
            secondaryMaterial = 'ender';
            stoneOutput = 'betterendforge:endstone_dust';
            primaryOutput = shard;
            break;
        case 'amber':
            secondaryMaterial = 'amber';
            stoneOutput = 'betterendforge:endstone_dust';
            primaryOutput = shard;
            break;
        case 'bitumen':
            secondaryMaterial = 'bitumen';
            primaryOutput = gem;
            break;
        case 'dimensional':
            secondaryMaterial = 'dimensional';
            stoneOutput = 'betterendforge:endstone_dust';
            primaryOutput = gem;
            break;
        case 'mana':
            secondaryMaterial = 'mana';
            primaryOutput = gem;
            break;
        default:
            return;
    }
    var secondaryType = 'dusts';
    if (shard != air) {
        secondaryType = 'shards';
    } else if (gem != air) {
        secondaryType = 'gems';
    }

    var secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:' + secondaryType + '/' + secondaryMaterial)).id;

    outputs = [
        Item.of(primaryOutput, primaryCount),
        Item.of(secondaryOutput).chance(0.1),
        Item.of(stoneOutput).chance(0.2)
    ];

    event.remove({
        input: input,
        mod: 'thermal',
        type: 'thermal:pulverizer'
    });
    event.recipes.thermal.pulverizer(outputs, input).experience(experience);
}

function thermal_press_plates(event, material, gem, plate) {
    if (plate == air || gem == air) {
        return;
    }

    var output = plate;
    var input = '#forge:gems/' + material;

    event.recipes.thermal.press(Item.of(output), input);
}

function thermal_press_wires(event, material, wire) {
    if (wire == air) {
        return;
    }

    var output = Item.of(wire, 2),
        input = '#forge:ingots/' + material,
        mold = '#thermal:crafting/dies/wire';
    event.recipes.thermal.press(output, [input, mold]).energy(2400);
}
