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

//Other
craftingTable.removeRecipe(<item:additionalenderitems:warp_portal>);