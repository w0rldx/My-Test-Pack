import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.registries.ICookingRecipeManager;
import stdlib.List;
import crafttweaker.api.FurnaceManager;

//Copper Tag
var copper_tag = <tag:items:forge:ingots/copper>;
copper_tag.add(<item:caves_and_cliffs_mod:copper_ingot>);

var copperore_tag = <tag:items:forge:ores/copper>;
copperore_tag.add(<item:caves_and_cliffs_mod:copper_ore>);
copperore_tag.add(<item:caves_and_cliffs_mod:deepslate_copper_ore>);

var ore_tag = <tag:items:forge:ores>;
ore_tag.add(<item:caves_and_cliffs_mod:deepslate_copper_ore>);
ore_tag.add(<item:caves_and_cliffs_mod:copper_ore>);

//Ore Tag
ore_tag.add(<item:caves_and_cliffs_mod:deepslate_copper_ore>);
ore_tag.add(<item:caves_and_cliffs_mod:copper_ore>);

for item in loadedMods.getMod("osv").items {
    ore_tag.add(item);
}