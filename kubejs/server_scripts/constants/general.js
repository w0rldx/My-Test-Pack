//priority: 1001

const air = 'minecraft:air';

// priority of which mod output should come from, if applicable
const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'jaopca',
    'kubejs',
    'create',
    'industrialforegoing',
    'botania',
    'quark',
    'refinedstorage',
    'mapperbase',
    'eidolon',
    'morevanillalib',
    'titanium'
];

// Used for recipes/tags that use colors
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

// Used for tag generation
const createStoneTypes = [
    'scoria',
    'limestone',
    'weathered_limestone',
    'dolomite',
    'gabbro',
    'dark_scoria',
    'natural_scoria'
];

const normalMode = global.packmode == 'expert';
const expertMode = global.packmode == 'expert';
