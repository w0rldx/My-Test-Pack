events.listen('recipes', (event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});