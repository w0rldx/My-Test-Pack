events.listen('item.tags', (event) => {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'solcarrot:food_book',
        'rftoolsbase:manual',
        'alexsmobs:animal_dictionary'
    ];
    event.get('forge:manuals').add(items);
});
