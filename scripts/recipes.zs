import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.registries.ICookingRecipeManager;
import stdlib.List;
import crafttweaker.api.FurnaceManager;

craftingTable.addShaped("shaped1", <item:minecraft:furnace>, [
    [<tag:items:forge:stone>, <tag:items:forge:stone>, <tag:items:forge:stone>],
    [<tag:items:forge:stone>, <item:minecraft:air>, <tag:items:forge:stone>],
    [<tag:items:forge:stone>, <tag:items:forge:stone>, <tag:items:forge:stone>]
]);
craftingTable.addShapeless("less1", <item:minecraft:cobblestone>, [<tag:items:forge:stone>]);


//Copper Smelthing
furnace.removeRecipe(<item:caves_and_cliffs_mod:copper_ingot>);
furnace.addRecipe("copperore2copperingot", <item:create:copper_ingot>, <item:caves_and_cliffs_mod:copper_ore>, 1.0, 200);
furnace.addRecipe("copperore12copperingot", <item:create:copper_ingot>, <item:caves_and_cliffs_mod:deepslate_copper_ore>, 1.0, 200);
blastFurnace.removeRecipe(<item:caves_and_cliffs_mod:copper_ingot>);
blastFurnace.addRecipe("copperore2copperingot", <item:create:copper_ingot>, <item:caves_and_cliffs_mod:copper_ore>, 1.0, 200);
blastFurnace.addRecipe("copperore12copperingot", <item:create:copper_ingot>, <item:caves_and_cliffs_mod:deepslate_copper_ore>, 1.0, 200);

//Copper Recipe
craftingTable.removeRecipe(<item:caves_and_cliffs_mod:copper_block>);
craftingTable.addShapeless("ingots2copperblock", <item:caves_and_cliffs_mod:copper_block>, [<item:create:copper_ingot>, <item:create:copper_ingot>, <item:create:copper_ingot>, <item:create:copper_ingot>]);
craftingTable.removeRecipe(<item:caves_and_cliffs_mod:copper_ingot>);
craftingTable.addShapeless("copperblock2ingots", <item:create:copper_ingot> * 4, [<item:caves_and_cliffs_mod:copper_block>]);
craftingTable.removeRecipe(<item:caves_and_cliffs_mod:spyglass>);
craftingTable.addShapeless("spyglass", <item:caves_and_cliffs_mod:spyglass>, [<item:minecraft:air>, <item:caves_and_cliffs_mod:amethyst_shard>, <item:minecraft:air>, <item:minecraft:air>, <item:create:copper_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:create:copper_ingot>]);
craftingTable.removeRecipe(<item:caves_and_cliffs_mod:lightning_rod>);
craftingTable.addShapeless("lightning_rod", <item:caves_and_cliffs_mod:lightning_rod>, [<item:minecraft:air>, <item:create:copper_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:create:copper_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:create:copper_ingot>]);

//Mekanism Copper
furnace.removeRecipe(<item:mekanism:ingot_copper>);
blastFurnace.removeRecipe(<item:mekanism:ingot_copper>);
furnace.addRecipe("crushedcopper2ingot", <item:create:copper_ingot>, <item:mekanism:dust_copper>, 0.3, 200);
blastFurnace.addRecipe("crushedcopper2ingot2", <item:create:copper_ingot>, <item:mekanism:dust_copper>, 0.3, 100);
craftingTable.removeRecipe(<item:mekanism:block_copper>);
craftingTable.removeRecipe(<item:mekanism:ingot_copper>);
craftingTable.removeRecipe(<item:mekanism:nugget_copper>);

//Copper Tag
var copper_tag = <tag:items:forge:ingots/copper>;
copper_tag.add(<item:caves_and_cliffs_mod:copper_ingot>);

var copperore_tag = <tag:items:forge:ores/copper>;
copperore_tag.add(<item:caves_and_cliffs_mod:copper_ore>);
copperore_tag.add(<item:caves_and_cliffs_mod:deepslate_copper_ore>);