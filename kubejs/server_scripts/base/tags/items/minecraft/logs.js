events.listen('item.tags', (event) => {
    event.get('minecraft:birch_logs').add('#byg:palo_verde_logs');
});
