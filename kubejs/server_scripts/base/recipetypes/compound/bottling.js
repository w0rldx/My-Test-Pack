events.listen('recipes', (event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.inputs.forEach((input) => {
            recipe.fluids.forEach((fluid) => {
                event.recipes.create.filling(recipe.output, [input, fluid]);
                event.recipes.thermal.bottler(recipe.output, [fluid, input]);
            });
        });
    });
});