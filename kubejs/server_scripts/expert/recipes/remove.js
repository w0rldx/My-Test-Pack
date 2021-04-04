events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }

    const outputRemovals = ['create:andesite_alloy'];

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
