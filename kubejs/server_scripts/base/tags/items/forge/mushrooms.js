events.listen('item.tags', (event) => {
    event.add('forge:mushrooms', [
        'byg:death_cap',
        'byg:shulkren_fungus',
        'byg:soul_shroom_spore_end',
        'byg:soul_shroom',
        'byg:purple_glowshroom',
        'byg:blue_glowshroom',
        'betterendforge:umbrella_tree_sapling',
        'betterendforge:mossy_glowshroom_sapling',
        'betterendforge:small_jellyshroom'
    ]);
});
