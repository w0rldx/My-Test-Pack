events.listen('item.tags', (event) => {
    event.get('forge:gears/gold_bronze').add('#forge:gears/gold').add('#forge:gears/bronze');
    event.get('forge:gears/gold_copper').add('#forge:gears/gold').add('#forge:gears/copper');
    event.get('forge:gears/gold_diamond').add('#forge:gears/gold').add('#forge:gears/diamond');
    event.get('forge:gears/gold_invar').add('#forge:gears/gold').add('#forge:gears/invar');
    event.get('forge:gears/gold_silver').add('#forge:gears/gold').add('#forge:gears/silver');

    event.get('forge:gears/iron_invar').add('#forge:gears/iron').add('#forge:gears/invar');
});
