events.listen('jei.add.items', (event) => {
    const items = [
        Item.of('akashictome:tome').nbt({
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
                modularrouters: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'modularrouters:book' }
                },
                betterendforge: { id: 'betterendforge:guidebook', Count: 1 }
            }
        })
    ];

    items.forEach((item) => event.add(item));
});
