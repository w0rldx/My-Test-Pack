events.listen('recipes', (event) => {
    var data = {
        recipes: [
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: {fluidTag: 'forge:milk', amount: 250},
        		output: 'farmersdelight:milk_bottle'
        	},
        	{
        		input: 'farmersdelight:milk_bottle',
        		fluid: Fluid.of('create:chocolate', 250),
        		output: 'farmersdelight:hot_cocoa'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:syrup', 25),
        		output: 'autumnity:syrup_bottle'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:sap', 500),
        		output: 'autumnity:sap_bottle'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('industrialforegoing:essence', 250),
        		output: 'minecraft:experience_bottle'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('cofh_core:experience', 250),
        		output: 'minecraft:experience_bottle'
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
    });
});
