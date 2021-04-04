events.listen('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, [
        'minecraft:glowstone',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:storage_lead',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:coke',
        'betterendforge:aeternium_block',
        'betterendforge:terminite_block',
        'betterendforge:ender_block',
        'betterendforge:aurora_crystal',
        'betterendforge:amber_block',
        'betterendforge:thallasium_block'
    ]);

    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');

    event.add(storageBlocks + '/aeternium', ['betterendforge:aeternium_block']);
    event.add(storageBlocks + '/terminite', ['betterendforge:terminite_block']);
    event.add(storageBlocks + '/thallasium', ['betterendforge:thallasium_block']);
    event.add(storageBlocks + '/ender', ['betterendforge:ender_block']);
    event.add(storageBlocks + '/aurora', ['betterendforge:aurora_crystal']);
    event.add(storageBlocks + '/amber', ['betterendforge:amber_block']);

    event
        .get(storageBlocks + '/gold_bronze')
        .add('#' + storageBlocks + '/gold')
        .add('#' + storageBlocks + '/bronze');

    event
        .get(storageBlocks + '/gold_brass')
        .add('#' + storageBlocks + '/gold')
        .add('#' + storageBlocks + '/brass');

    event
        .get(storageBlocks + '/iron_aluminum')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/aluminum');
    event
        .get(storageBlocks + '/iron_brass')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/brass');
    event
        .get(storageBlocks + '/iron_invar')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/invar');
    event
        .get(storageBlocks + '/iron_lead')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/lead');
    event
        .get(storageBlocks + '/iron_tin')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/tin');
});
