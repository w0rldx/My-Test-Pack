events.listen('item.tags', (event) => {
    var items = [
        'immersiveengineering:floodlight',
        'immersiveengineering:lantern',
        'immersiveengineering:balloon',
        'minecraft:beacon',
        'minecraft:end_rod',
        'minecraft:glowstone',
        'minecraft:lava_bucket',
        'minecraft:magma_block',
        'rsgauges:sensitive_glass_block',
        'simplylight:edge_light',
        'simplylight:edge_light_top',
        'simplylight:lightbulb',
        'simplylight:rodlamp',
        'torchmaster:dreadlamp',
        'undergarden:tall_shimmerweed',
        'undergarden:shimmerweed',
        'betterendforge:glowing_pillar_luminophor'
    ];
    var exceptions = ['rsgauges:industrial_alarm_lamp'];

    event
        .get('forge:lights')
        .add(items)
        .add(/_lantern/)
        .add(/_lamp/)
        .add(/torch/)
        .add(/fire_pit/)
        .add(/shiny_flower/)
        .add(/floating_flower/)
        .add(/candle/)
        .add(/campfire/)
        .add(/_glowcane/)
        .add(/byg:\w+_glowshroom/)
        .add(/quark:\w+_glowshroom/)
        .add(/botania:\w+_mushroom/)
        .add(/illumin/)
        .add(/sconce/)
        .add(/candelabra/)
        .add(/chandelier/)
        .add(/brazier/)
        .remove(exceptions);
});
