//priority: 900
events.listen('recipes', (event) => {
    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });
});

//stoneworks functions
function industrialforegoing_stoneworks(event, material, type) {
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    event.custom({
        output: {
            item: material,
            count: 1
        },
        waterNeed: 1000,
        lavaNeed: 1000,
        waterConsume: waterConsume,
        lavaConsume: lavaConsume,
        type: 'industrialforegoing:stonework_generate'
    });
}

function thermal_stoneworks(event, material) {
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: 'minecraft:water',
        below: material,
        result: {
            item: material
        }
    });
}
