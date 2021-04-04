events.listen('recipes', (event) => {
    var data = {
        recipes: [
        	{
        		input: 'farmersdelight:milk_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('minecraft:milk', 250)
        	},
        	{
        		input: 'autumnity:syrup_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:syrup', 25)
        	},
        	{
        		input: 'autumnity:sap_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:sap', 500)
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
    });
});
