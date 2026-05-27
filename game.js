let THREE;

const SAVE_KEY = "patrickolandia_save_v2";
const SAVE_OLD_KEY = "patrickolandia_save_old_v2";
const SAVE_SLOTS = [1, 2, 3];

const ITEMS = {
  wheatSeed: { name: "Semente de Trigo", iconKey: "seed_wheat", category: "semente", stack: 20, value: 5, sell: 5, origin: "comprado" },
  carrotSeed: { name: "Semente de Cenoura", iconKey: "seed_carrot", category: "semente", stack: 20, value: 8, sell: 8, origin: "comprado" },
  potatoSeed: { name: "Semente de Batata", iconKey: "seed_potato", category: "semente", stack: 20, value: 10, sell: 10, origin: "comprado" },
  tomatoSeed: { name: "Semente de Tomate", iconKey: "seed_tomato", category: "semente", stack: 20, value: 18, sell: 18, origin: "comprado" },
  cornSeed: { name: "Semente de Milho", iconKey: "seed_corn", category: "semente", stack: 20, value: 30, sell: 30, origin: "comprado" },
  strawberrySeed: { name: "Semente de Morango", iconKey: "seed_strawberry", category: "semente", stack: 20, value: 45, sell: 45, origin: "comprado" },
  carrot: { name: "Cenoura", iconKey: "carrot", category: "cultivo", stack: 10, value: 14, sell: 14, origin: "fazenda" },
  potato: { name: "Batata", iconKey: "potato", category: "cultivo", stack: 10, value: 18, sell: 18, origin: "fazenda" },
  wheat: { name: "Trigo", iconKey: "wheat", category: "cultivo", stack: 10, value: 8, sell: 8, origin: "fazenda" },
  tomato: { name: "Tomate", iconKey: "tomato", category: "cultivo", stack: 10, value: 32, sell: 32, origin: "fazenda" },
  corn: { name: "Milho", iconKey: "corn", category: "cultivo", stack: 10, value: 28, sell: 28, origin: "fazenda" },
  strawberry: { name: "Morango", iconKey: "strawberry", category: "cultivo", stack: 10, value: 40, sell: 40, origin: "fazenda" },
  egg: { name: "Ovo", iconKey: "egg", category: "ingrediente", stack: 6, value: 18, sell: 18, origin: "fazenda" },
  milk: { name: "Leite", iconKey: "milk", category: "ingrediente", stack: 6, value: 30, sell: 30, origin: "fazenda" },
  wood: { name: "Madeira", iconKey: "wood", category: "recurso", stack: 20, value: 2, sell: 0 },
  stone: { name: "Pedra", iconKey: "stone", category: "recurso", stack: 20, value: 2, sell: 0 },
  hay: { name: "Feno", iconKey: "hay", category: "feno", stack: 30, value: 0.1, sell: 0.1 },
  path: { name: "Caminho de Pedra", iconKey: "path", category: "construcao", stack: 32, value: 3, sell: 0 },
  fence: { name: "Cerca", iconKey: "fence", category: "construcao", stack: 32, value: 4, sell: 0 },
  omelet: { name: "Omelete", iconKey: "food_omelet", category: "comida", stack: 5, value: 32, sell: 32, mixedSell: 19, origin: "fazenda" },
  hotMilk: { name: "Leite quente", iconKey: "food_hot_milk", category: "comida", stack: 5, value: 48, sell: 48, mixedSell: 28, origin: "fazenda" },
  simpleSoup: { name: "Sopa simples", iconKey: "food_soup", category: "comida", stack: 5, value: 45, sell: 45, mixedSell: 27, origin: "fazenda" },
  tomatoSalad: { name: "Salada de tomate", iconKey: "food_salad", category: "comida", stack: 5, value: 58, sell: 58, mixedSell: 34, origin: "fazenda" },
  cookedCorn: { name: "Milho cozido", iconKey: "food_corn", category: "comida", stack: 5, value: 42, sell: 42, mixedSell: 25, origin: "fazenda" },
  strawberryJam: { name: "Geleia de morango", iconKey: "food_jam", category: "comida", stack: 5, value: 95, sell: 95, mixedSell: 57, origin: "fazenda" },
  farmStew: { name: "Ensopado da fazenda", iconKey: "food_stew", category: "comida", stack: 5, value: 90, sell: 90, mixedSell: 54, origin: "fazenda" },
  breakfast: { name: "Café da manhã", iconKey: "food_breakfast", category: "comida", stack: 5, value: 95, sell: 95, mixedSell: 57, origin: "fazenda" },
};

const CROPS = {
  carrotSeed: { crop: "carrot", days: 4, stages: 5, seedPrice: 8, regrow: 0 },
  potatoSeed: { crop: "potato", days: 5, stages: 5, seedPrice: 10, regrow: 0 },
  wheatSeed: { crop: "wheat", days: 3, stages: 5, seedPrice: 5, regrow: 0 },
  tomatoSeed: { crop: "tomato", days: 6, stages: 5, seedPrice: 18, regrow: 0 },
  cornSeed: { crop: "corn", days: 7, stages: 5, seedPrice: 30, regrow: 5 },
  strawberrySeed: { crop: "strawberry", days: 8, stages: 5, seedPrice: 45, regrow: 6 },
};

const RECIPES = {
  omelet: { name: "Omelete", iconKey: "recipe_card", ingredients: { egg: 1 }, output: "omelet", price: 80 },
  hotMilk: { name: "Leite quente", iconKey: "recipe_card", ingredients: { milk: 1 }, output: "hotMilk", price: 100 },
  simpleSoup: { name: "Sopa simples", iconKey: "recipe_card", ingredients: { potato: 1, carrot: 1 }, output: "simpleSoup", price: 150 },
  tomatoSalad: { name: "Salada de tomate", iconKey: "recipe_card", ingredients: { tomato: 1, carrot: 1 }, output: "tomatoSalad", price: 180 },
  cookedCorn: { name: "Milho cozido", iconKey: "recipe_card", ingredients: { corn: 1 }, output: "cookedCorn", price: 220 },
  strawberryJam: { name: "Geleia de morango", iconKey: "recipe_card", ingredients: { strawberry: 2 }, output: "strawberryJam", price: 300 },
  farmStew: { name: "Ensopado da fazenda", iconKey: "recipe_card", ingredients: { potato: 1, carrot: 1, tomato: 1 }, output: "farmStew", price: 350 },
  breakfast: { name: "Café da manhã", iconKey: "recipe_card", ingredients: { egg: 1, milk: 1, potato: 1 }, output: "breakfast", price: 400 },
};

const SEED_SHOP = ["wheatSeed", "carrotSeed", "potatoSeed", "tomatoSeed", "cornSeed", "strawberrySeed"];
const INGREDIENT_SHOP = [
  { id: "carrot", price: 22 },
  { id: "potato", price: 28 },
  { id: "tomato", price: 48 },
  { id: "corn", price: 42 },
  { id: "strawberry", price: 60 },
  { id: "egg", price: 30 },
  { id: "milk", price: 48 },
];

const CRAFTING_RECIPES = {
  path: { output: "path", name: "Caminho de Pedra", costs: { stone: 1 } },
  fence: { output: "fence", name: "Cerca", costs: { wood: 1 } },
};

const EXPANSION_PRICES = [500, 1000, 2000, 4000];
const EXPANSION_LABELS = { top: "Norte", bottom: "Sul", right: "Leste", left: "Oeste" };
const STAT_KEYS = [
  "salesMoney", "itemsSold", "cropsHarvested", "eggsCollected", "milkCollected", "recipesPrepared",
  "treesCut", "stonesBroken", "woodCollected", "stoneCollected", "hayCollected",
  "itemsCrafted", "constructionsPlaced", "expansionsBought", "daysPlayed",
];

function svgIcon(body, className = "item-svg-icon") {
  return `<svg class="${className}" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${body}</svg>`;
}

function cropSymbol(kind) {
  const symbols = {
    wheat: `<path d="M33 48V17" stroke="#9b7a24" stroke-width="4" stroke-linecap="round"/><path d="M30 19c-9 2-12 8-12 8 8 1 12-3 12-8zM36 24c9 2 12 8 12 8-8 1-12-3-12-8zM30 31c-8 1-11 7-11 7 7 2 11-2 11-7zM36 36c8 1 11 7 11 7-7 2-11-2-11-7z" fill="#efc94c"/>`,
    carrot: `<path d="M30 21c9 5 13 14 8 27-13-2-19-8-19-17 0-7 5-11 11-10z" fill="#f18a35"/><path d="M29 20c-1-7 3-10 8-12 0 6-2 10-8 12zM31 21c4-7 9-7 15-5-4 5-8 7-15 5z" fill="#4aa85f"/>`,
    potato: `<ellipse cx="32" cy="35" rx="15" ry="12" fill="#b98552"/><circle cx="27" cy="32" r="1.8" fill="#7b5336"/><circle cx="37" cy="38" r="1.6" fill="#7b5336"/><circle cx="34" cy="29" r="1.3" fill="#7b5336"/>`,
    tomato: `<circle cx="32" cy="35" r="14" fill="#e85b4f"/><path d="M32 21l4 7 8-2-5 6 5 6-8-2-4 7-4-7-8 2 5-6-5-6 8 2 4-7z" fill="#4f9e51"/>`,
    corn: `<ellipse cx="32" cy="34" rx="9" ry="18" fill="#f3c944"/><path d="M24 46c-3-10-1-20 8-28 2 12 0 22-8 28zM40 46c3-10 1-20-8-28-2 12 0 22 8 28z" fill="#5aa65b"/><path d="M28 25h8M27 32h10M28 39h8" stroke="#d9a92f" stroke-width="2" stroke-linecap="round"/>`,
    strawberry: `<path d="M32 50c-11-8-17-16-14-25 3-8 11-8 14-2 3-6 11-6 14 2 3 9-3 17-14 25z" fill="#e54f57"/><path d="M32 18l4 7 8-3-5 7h-14l-5-7 8 3 4-7z" fill="#4eaa58"/><circle cx="27" cy="32" r="1.2" fill="#ffd28a"/><circle cx="35" cy="34" r="1.2" fill="#ffd28a"/><circle cx="31" cy="41" r="1.2" fill="#ffd28a"/>`,
  };
  return symbols[kind] || "";
}

function seedBagIcon(kind) {
  return svgIcon(`
    <defs>
      <linearGradient id="bag-${kind}" x1="18" x2="48" y1="12" y2="57" gradientUnits="userSpaceOnUse">
        <stop stop-color="#e7c184"/>
        <stop offset="1" stop-color="#b97843"/>
      </linearGradient>
    </defs>
    <path d="M22 18c2-6 7-9 10-9s8 3 10 9c5 6 8 20 8 31 0 6-4 9-10 9H24c-6 0-10-3-10-9 0-11 3-25 8-31z" fill="url(#bag-${kind})"/>
    <path d="M22 19c6 4 14 4 20 0" stroke="#895b34" stroke-width="4" stroke-linecap="round"/>
    <path d="M18 49c5 4 23 5 29 0" stroke="#9b6339" stroke-width="3" stroke-linecap="round" opacity=".45"/>
    <rect x="20" y="28" width="24" height="21" rx="7" fill="#fff1cf"/>
    <rect x="22" y="30" width="20" height="17" rx="5" fill="#fff8e7"/>
    <path d="M23 16c3 2 15 2 18 0" stroke="#f0d39f" stroke-width="2" stroke-linecap="round"/>
    <g transform="translate(12 12) scale(.62)">${cropSymbol(kind)}</g>
  `, "item-svg-icon seed-bag-icon");
}

function renderIcon(iconKey = "unknown") {
  if (iconKey.startsWith("seed_")) return seedBagIcon(iconKey.replace("seed_", ""));
  const icons = {
    wheat: svgIcon(cropSymbol("wheat")),
    carrot: svgIcon(cropSymbol("carrot")),
    potato: svgIcon(cropSymbol("potato")),
    tomato: svgIcon(cropSymbol("tomato")),
    corn: svgIcon(cropSymbol("corn")),
    strawberry: svgIcon(cropSymbol("strawberry")),
    egg: svgIcon(`<ellipse cx="32" cy="35" rx="15" ry="18" fill="#fff8e6"/><ellipse cx="28" cy="29" rx="5" ry="7" fill="#ffffff" opacity=".75"/><path d="M22 42c7 5 16 6 23 0" stroke="#e4d8bd" stroke-width="3" stroke-linecap="round"/>`),
    milk: svgIcon(`<path d="M24 9h16v9l5 9v24c0 5-3 8-8 8H27c-5 0-8-3-8-8V27l5-9V9z" fill="#fffaf0"/><path d="M24 9h16v10H24z" fill="#8fd3e8"/><path d="M22 33h21v14H22z" fill="#b8e6f1"/><path d="M25 37h15" stroke="#fff8e7" stroke-width="3" stroke-linecap="round"/><path d="M27 52h10" stroke="#d7decf" stroke-width="3" stroke-linecap="round"/>`),
    wood: svgIcon(`<path d="M12 40l30-23c5-4 14 6 9 11L22 52c-6 4-15-7-10-12z" fill="#9b6339"/><path d="M20 39l25-19" stroke="#c89158" stroke-width="3" stroke-linecap="round"/><circle cx="17" cy="45" r="9" fill="#c89158"/><circle cx="17" cy="45" r="5" fill="#8a5835"/><circle cx="17" cy="45" r="2" fill="#dba86c"/>`),
    stone: svgIcon(`<path d="M15 43l8-19 18-8 14 17-8 18H24z" fill="#b9b6a1"/><path d="M24 25l9 8 10-16" stroke="#8e8d81" stroke-width="3" stroke-linecap="round"/><path d="M25 47h20" stroke="#d5d1ba" stroke-width="3" stroke-linecap="round" opacity=".7"/>`),
    hay: svgIcon(`<path d="M18 45c5-15 7-25 4-35M32 48c3-16 4-28 1-38M46 45c-4-15-5-25-2-35" stroke="#d7af3a" stroke-width="4" stroke-linecap="round"/><path d="M16 36h32" stroke="#efcf63" stroke-width="4" stroke-linecap="round"/><path d="M13 45h38" stroke="#b98a2f" stroke-width="5" stroke-linecap="round"/>`),
    path: svgIcon(`<path d="M13 45h38v9H13z" fill="#9c9d87"/><path d="M17 35h13v8H17zM34 31h13v10H34zM24 20h15v9H24z" fill="#c5c3aa"/><path d="M20 38h7M37 35h7M27 24h9" stroke="#e1dec5" stroke-width="2" stroke-linecap="round"/>`),
    fence: svgIcon(`<path d="M17 12h9v41h-9zM38 12h9v41h-9z" fill="#9b6034"/><path d="M12 25h40v8H12zM12 39h40v8H12z" fill="#b97942"/><path d="M19 15l3-5 3 5M40 15l3-5 3 5" fill="#c89158"/><path d="M17 29h30M17 43h30" stroke="#d69b62" stroke-width="2" stroke-linecap="round"/>`),
    food_omelet: svgIcon(`<ellipse cx="32" cy="38" rx="21" ry="12" fill="#f7d46a"/><circle cx="27" cy="35" r="5" fill="#fff8df"/><circle cx="27" cy="35" r="2.5" fill="#f0b83c"/><path d="M15 46h34" stroke="#d99b44" stroke-width="4" stroke-linecap="round"/>`),
    food_hot_milk: svgIcon(`<rect x="20" y="17" width="24" height="34" rx="8" fill="#fff8e7"/><path d="M24 17h16v9H24z" fill="#8fd3e8"/><path d="M22 34h20" stroke="#d7decf" stroke-width="4"/><path d="M23 13c-2-5 4-6 2-10M33 13c-2-5 4-6 2-10M43 13c-2-5 4-6 2-10" stroke="#b7b0a1" stroke-width="3" stroke-linecap="round"/>`),
    food_soup: svgIcon(`<path d="M16 31h32c-1 13-7 20-16 20s-15-7-16-20z" fill="#f0a35a"/><path d="M14 30c5-5 31-5 36 0" stroke="#c8743e" stroke-width="5" stroke-linecap="round"/><circle cx="26" cy="37" r="3" fill="#f6d17a"/><circle cx="36" cy="39" r="3" fill="#e86a4e"/><path d="M21 51h22" stroke="#8f6443" stroke-width="4" stroke-linecap="round"/>`),
    food_salad: svgIcon(`<path d="M15 34h34c-2 11-8 17-17 17s-15-6-17-17z" fill="#d7ece0"/><circle cx="25" cy="33" r="5" fill="#e85b4f"/><path d="M28 27c8-7 17-4 19 5-9 2-15 0-19-5zM18 34c3-8 10-11 17-7-4 7-10 10-17 7z" fill="#62b95d"/>`),
    food_corn: svgIcon(`<ellipse cx="32" cy="34" rx="10" ry="19" fill="#f3c944"/><path d="M21 47c-4-11 0-23 11-32 3 14 0 25-11 32zM43 47c4-11 0-23-11-32-3 14 0 25 11 32z" fill="#68ad62"/><path d="M28 24h8M27 32h10M28 40h8" stroke="#d9a92f" stroke-width="2.5" stroke-linecap="round"/>`),
    food_jam: svgIcon(`<path d="M22 22h20l-2 29H24z" fill="#e85b68"/><path d="M21 18h22v8H21z" fill="#f7e7bd"/><path d="M25 31h14v11H25z" fill="#fff2d5" opacity=".8"/><circle cx="30" cy="36" r="2" fill="#e85b68"/><circle cx="35" cy="38" r="2" fill="#e85b68"/>`),
    food_stew: svgIcon(`<path d="M15 32h34c-2 13-8 20-17 20s-15-7-17-20z" fill="#9f6a43"/><path d="M13 31c6-5 32-5 38 0" stroke="#6f4932" stroke-width="5" stroke-linecap="round"/><circle cx="25" cy="38" r="3.5" fill="#f0c85a"/><circle cx="34" cy="40" r="3.5" fill="#e85b4f"/><circle cx="40" cy="36" r="3" fill="#f18a35"/>`),
    food_breakfast: svgIcon(`<circle cx="32" cy="36" r="20" fill="#f7e7bd"/><ellipse cx="26" cy="36" rx="9" ry="7" fill="#fff8df"/><circle cx="26" cy="36" r="3" fill="#f0b83c"/><rect x="35" y="28" width="9" height="17" rx="4" fill="#c18b58"/><path d="M39 25v23" stroke="#8f5b38" stroke-width="3" stroke-linecap="round"/>`),
    recipe_card: svgIcon(`<path d="M18 12h25c4 0 7 3 7 7v34H21c-4 0-7-3-7-7V16c0-2 2-4 4-4z" fill="#f7e7bd"/><path d="M22 21h20M22 30h17M22 39h12" stroke="#9f7244" stroke-width="4" stroke-linecap="round"/><path d="M42 12v41" stroke="#d4ae72" stroke-width="5"/>`),
    farm_seal: svgIcon(`<path d="M32 48V26" stroke="#4c9b4f" stroke-width="5" stroke-linecap="round"/><path d="M31 28c-10-1-15-7-16-15 9 0 15 5 16 15zM34 31c10-1 15-7 16-15-9 0-15 5-16 15z" fill="#69bd63"/>`, "seal-svg-icon"),
    unknown: svgIcon(`<circle cx="32" cy="32" r="18" fill="#ead9b7"/><path d="M28 25c1-5 9-6 10 0 1 6-6 7-6 13" stroke="#9c7048" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="47" r="3" fill="#9c7048"/>`),
  };
  return icons[iconKey] || icons.unknown;
}

const WEATHER = [
  { id: "sunny", name: "Ensolarado", chance: 45, sky: 0x93e4f0, light: 4.3 },
  { id: "rain", name: "Chuva", chance: 25, sky: 0x8aaebd, light: 2.3 },
  { id: "cloudy", name: "Nublado", chance: 20, sky: 0xb7cbd1, light: 2.8 },
  { id: "wind", name: "Vento leve", chance: 10, sky: 0xa7e5e7, light: 3.7 },
];

const WEEK_DAYS = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Sábado-feira", "Domingo-feira"];
const MONTHS = ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6"];

const TOOL_ICONS = {
  hoe: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M38 9l8 6-24 39-8-5 24-40z" fill="#8b5934"/><path d="M42 14h15v7H41z" fill="#c7b08b" transform="rotate(24 49 17.5)"/><path d="M11 48h38M12 56h30" stroke="#835238" stroke-width="5" stroke-linecap="round"/><path d="M18 42c4 3 10 3 15 0" stroke="#b77643" stroke-width="4" stroke-linecap="round"/></svg>`,
  water: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M17 26c0-8 7-14 16-14h8v34H25c-5 0-8-4-8-9V26z" fill="#88cde8"/><path d="M41 22h7c5 0 9 4 9 9s-4 9-9 9h-7" fill="none" stroke="#479ec7" stroke-width="6" stroke-linecap="round"/><path d="M20 20h21" stroke="#fff5dc" stroke-width="4" stroke-linecap="round"/><path d="M12 35c-4 5-4 9 0 13 4-4 4-8 0-13zM26 46c-3 4-3 7 0 10 3-3 3-6 0-10zM38 46c-3 4-3 7 0 10 3-3 3-6 0-10z" fill="#36aee6"/></svg>`,
  axe: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M35 10l8 6-25 41-8-5 25-42z" fill="#8b5934"/><path d="M38 8c10 2 16 9 17 19-8 3-16 0-23-7l6-12z" fill="#d7ded9"/><path d="M36 20c5 1 10 4 14 8" stroke="#89999a" stroke-width="4" stroke-linecap="round"/></svg>`,
  pickaxe: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M31 24l8 5-20 30-8-5 20-30z" fill="#8b5934"/><path d="M10 23c13-13 29-15 45-7l-4 8c-14-5-26-3-38 7l-3-8z" fill="#d3d7ce"/><path d="M17 25c11-7 21-9 32-5" stroke="#879394" stroke-width="4" stroke-linecap="round"/></svg>`,
  scythe: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M39 7c9 9 9 23-1 34-6 6-13 9-22 8 12-5 19-13 21-25 1-7 1-12 2-17z" fill="#d8dfd8"/><path d="M28 25l8 5-20 29-8-5 20-29z" fill="#8b5934"/><path d="M15 50c10-2 18-9 24-20" stroke="#7c8f8d" stroke-width="4" stroke-linecap="round"/><path d="M45 49c-7-1-12-5-15-11" stroke="#55a957" stroke-width="4" stroke-linecap="round"/></svg>`,
  build: `<svg class="tool-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M20 9h19l4 8-10 9-17-11 4-6z" fill="#c6cfca"/><path d="M31 26l24 22-7 7-23-23 6-6z" fill="#8b5934"/><path d="M12 43h18v13H12z" fill="#d9a04d"/><path d="M10 56h44" stroke="#7c5434" stroke-width="5" stroke-linecap="round"/></svg>`,
};

const TOOL_LABELS = {
  hoe: "Arar",
  water: "Regar",
  axe: "Machado",
  pickaxe: "Picareta",
  scythe: "Foice",
  build: "Construir",
};

const ACTION_ICON = `<svg class="tool-icon action-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M23 31V14c0-3 2-5 5-5s5 2 5 5v13" fill="#f2c99c" stroke="#8b5934" stroke-width="4" stroke-linecap="round"/><path d="M33 29V16c0-3 2-5 5-5s5 2 5 5v17" fill="#f2c99c" stroke="#8b5934" stroke-width="4" stroke-linecap="round"/><path d="M43 34V22c0-3 2-5 5-5s5 2 5 5v19c0 11-7 18-18 18h-5c-8 0-13-4-17-11l-5-9c-2-4 2-8 6-6l8 5" fill="#f2c99c" stroke="#8b5934" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

const palette = {
  grass: 0x61c65a,
  grassDark: 0x3f9e4a,
  soil: 0x8b5130,
  tilled: 0xa06339,
  wet: 0x49332a,
  wood: 0x96592a,
  leaf: 0x25a94e,
  carrot: 0xf07823,
  water: 0x3199d4,
  cream: 0xfff3d4,
  white: 0xfff5df,
  black: 0x171717,
  red: 0xe85243,
  gold: 0xf1b82d,
  stone: 0xbfb890,
  skin: [0xe7b587, 0xb8794e, 0x794a32],
  hair: [0x6c402b, 0x171717, 0xd6a049],
  shirt: [0x26a35a, 0x2187cf, 0xdd4f48],
  pants: [0x466b8f, 0x6d5a41],
  shoes: [0x4a3328, 0x191919],
};

const ui = {
  canvas: document.querySelector("#game"),
  weatherLayer: document.querySelector("#weatherLayer"),
  floatLayer: document.querySelector("#floatLayer"),
  toastLayer: document.querySelector("#toastLayer"),
  modal: document.querySelector("#modal"),
  mainMenu: document.querySelector("#mainMenu"),
  creationScreen: document.querySelector("#creationScreen"),
  creationForm: document.querySelector("#creationForm"),
  farmNameInput: document.querySelector("#farmNameInput"),
  characterNameInput: document.querySelector("#characterNameInput"),
  barefootInput: document.querySelector("#barefootInput"),
  farmNameLabel: document.querySelector("#farmNameLabel"),
  dateLabel: document.querySelector("#dateLabel"),
  weatherLabel: document.querySelector("#weatherLabel"),
  moneyLabel: document.querySelector("#moneyLabel"),
  woodLabel: document.querySelector("#woodLabel"),
  stoneLabel: document.querySelector("#stoneLabel"),
  hayLabel: document.querySelector("#hayLabel"),
  inventory: document.querySelector("#inventory"),
  expandInventory: document.querySelector("#expandInventory"),
  joystick: document.querySelector("#joystick"),
  stick: document.querySelector("#stick"),
  toolButton: document.querySelector("#toolButton"),
  toolRadial: document.querySelector("#toolRadial"),
  quickActionButton: document.querySelector("#quickActionButton"),
  overviewButton: document.querySelector("#overviewButton"),
  interactionIcons: document.querySelector("#interactionIcons"),
};

let createAppearance = { skin: 0, hair: 0, shirt: 0, pants: 0, shoes: 0, barefoot: false };
let state = null;
let isPaused = true;
let overviewMode = false;
let overviewPan = { x: 0, z: 0 };
let overviewSelectionId = null;
let overviewMove = null;
let overviewDrag = null;
let selectedTool = "hoe";
let selectedSlot = 0;
let activeSelection = "tool";
let activeSaveSlot = 1;
let pendingNewGameSlot = 1;
let expandedInventory = false;
let activeStorage = null;
let longPressTimer = null;
let joystickPointer = null;
let lastTime = 0;
let activeOrderCart = { shop: null, items: [] };
let sleepingInProgress = false;

let scene;
let renderer;
let camera;
let raycaster;
let pointer;
let groundPlane;
let world;

const matCache = new Map();
const textureCache = new Map();
const objects = new Map();
const collisions = [];
const interactionObjects = [];
const cropMeshes = new Map();
const particles = [];
let targetMarker;
let player;
const playerParts = {};
let moveInput;
let autoPath = [];
let pendingAutoInteraction = null;
let zoom = 1;
let sunLight;
let hemiLight;
let sustainedMoveDirection = null;
let sustainedMoveTime = 0;

const interiorDevDefaults = {
  counterPeninsulaX: 0.86,
  counterPeninsulaZ: -1.96,
  counterReturnX: 1.08,
  counterReturnZ: -2.48,
  nightstandX: -3.88,
  nightstandZ: -1.9,
};
let interiorDevConfig = null;
const interiorDevRefs = {
  peninsula: null,
  counterReturn: null,
  innerPanel: null,
  counterLip: null,
  cornerTop: null,
  nightstand: [],
};

function initThreeObjects() {
  scene = new THREE.Scene();
  scene.background = null;
  scene.fog = new THREE.Fog(0x9ee7ee, 16, 42);
  renderer = new THREE.WebGLRenderer({ canvas: ui.canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  camera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0.1, 90);
  camera.position.set(8, 9, 8);
  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();
  groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  world = new THREE.Group();
  scene.add(world);
  targetMarker = new THREE.Mesh(
    new THREE.RingGeometry(0.34, 0.46, 32),
    new THREE.MeshBasicMaterial({ color: 0xb9f36a, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
  );
  targetMarker.rotation.x = -Math.PI / 2;
  targetMarker.position.y = 0.08;
  targetMarker.visible = false;
  scene.add(targetMarker);
  player = new THREE.Group();
  player.position.set(0, 0, 0);
  world.add(player);
  moveInput = new THREE.Vector3();
}

function material(color, roughness = 0.78, textureName = "") {
  const key = `${color}-${roughness}-${textureName}`;
  if (!matCache.has(key)) {
    const texture = textureName ? textureCache.get(textureName) : null;
    matCache.set(key, new THREE.MeshStandardMaterial({
      color,
      map: texture,
      roughness,
      metalness: 0.02,
      emissive: color,
      emissiveIntensity: 0.018,
    }));
  }
  return matCache.get(key);
}

function box(w, h, d, color, options = {}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material(color, options.roughness, options.texture));
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  if (options.outline !== false) {
    mesh.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(w * 1.004, h * 1.004, d * 1.004)),
      new THREE.LineBasicMaterial({ color: 0x2b241d, transparent: true, opacity: 0.18 }),
    ));
  }
  return mesh;
}

function cylinder(radius, height, color, sides = 8) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, sides), material(color));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function sphere(radius, color, width = 12, height = 8) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, width, height), material(color));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function cone(radius, height, color, sides = 8) {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(radius, height, sides), material(color));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function buildTexture(name, base, marks) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 128, 128);
  marks(ctx);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  textureCache.set(name, texture);
}

function setupTextures() {
  buildTexture("grass", "#62bf58", (ctx) => {
    for (let i = 0; i < 90; i += 1) {
      ctx.strokeStyle = i % 2 ? "rgba(255,255,255,0.1)" : "rgba(39,112,45,0.16)";
      ctx.beginPath();
      const x = Math.random() * 128;
      const y = Math.random() * 128;
      ctx.moveTo(x, y);
      ctx.lineTo(x + 12, y - 4);
      ctx.stroke();
    }
  });
  buildTexture("soil", "#8b5130", (ctx) => {
    for (let i = 0; i < 110; i += 1) {
      ctx.fillStyle = i % 2 ? "rgba(255,214,168,0.15)" : "rgba(55,31,20,0.18)";
      ctx.beginPath();
      ctx.ellipse(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 5, 1 + Math.random() * 2, Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }
  });
  buildTexture("wood", "#96592a", (ctx) => {
    for (let y = 8; y < 128; y += 20) {
      ctx.strokeStyle = "rgba(70,35,16,0.2)";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(128, y);
      ctx.stroke();
    }
    for (let x = 32; x < 128; x += 48) {
      ctx.strokeStyle = "rgba(70,35,16,0.12)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x, 8);
      ctx.lineTo(x, 128);
      ctx.stroke();
    }
  });
}

function emptyState() {
  return {
    version: 2,
    farmName: "Fazenda do Patrick",
    characterName: "Patrick",
    appearance: { skin: 0, hair: 0, shirt: 0, pants: 0, shoes: 0, barefoot: false },
    money: 17,
    calendar: { day: 1, month: 1, year: 1, absoluteDay: 1 },
    weather: "sunny",
    mode: "farm",
    player: { x: 0.2, z: 1.1 },
    selectedTool: "hoe",
    inventory: [
      { id: "carrotSeed", qty: 3 },
      { id: "potatoSeed", qty: 3 },
      null, null, null, null, null, null,
    ],
    resources: { wood: 0, stone: 0, hay: 0 },
    chestResources: { wood: 0, stone: 0 },
    fridge: [],
    chest: [],
    saleCrate: [],
    deliveries: { seeds: [], ingredients: [], recipes: [] },
    incomingDeliveries: { seeds: [], ingredients: [], recipes: [] },
    unlockedRecipes: [],
    storesUsedToday: {},
    crops: [],
    animals: [
      { id: "chicken1", type: "chicken", x: 5.3, z: -1.6, petted: false, productReady: false, sad: false },
      { id: "cow1", type: "cow", x: 4.7, z: 1.45, petted: false, productReady: false, sad: false },
    ],
    objects: startingObjects(),
    expansions: { top: false, bottom: false, left: false, right: false },
    expansionOrder: [],
    dailyStats: createStatsBucket(),
    currentWeekStats: createStatsBucket(),
    totalStats: createStatsBucket(),
    weeklyHistory: [],
    latestNewspaperWeek: null,
    stats: { weeklyHistory: [], currentWeek: {} },
    pendingNewspaper: false,
  };
}

function startingObjects() {
  const fixed = [
    { id: "house", type: "house", x: -3.8, z: -2.6, w: 2.2, d: 1.8, movable: true },
    { id: "phone", type: "phone", x: -1.3, z: -2.7, w: 0.6, d: 0.6, movable: true },
    { id: "seedBox", type: "seedBox", x: -0.4, z: -2.7, w: 0.55, d: 0.55, movable: true },
    { id: "ingredientBox", type: "ingredientBox", x: 0.35, z: -2.7, w: 0.55, d: 0.55, movable: true },
    { id: "recipeBox", type: "recipeBox", x: 1.1, z: -2.7, w: 0.55, d: 0.55, movable: true },
    { id: "saleCrate", type: "saleCrate", x: 2.1, z: -2.6, w: 0.75, d: 0.65, movable: true },
    { id: "coop", type: "coop", x: 4.8, z: -2.35, w: 1.2, d: 1.0, movable: true },
    { id: "cowBarn", type: "cowBarn", x: 5.2, z: 2.35, w: 1.5, d: 1.1, movable: true },
    { id: "silo", type: "silo", x: -5.1, z: 2.4, w: 0.8, d: 0.8, movable: true },
    { id: "workbench", type: "workbenchBroken", x: -2.2, z: 0.25, w: 0.8, d: 0.65, movable: false, repaired: false, hp: 1 },
    { id: "chest", type: "chest", x: -5.65, z: -0.35, w: 0.8, d: 0.55, movable: true },
    { id: "newspaper", type: "newspaper", x: -2.15, z: -1.05, w: 0.45, d: 0.35, movable: false },
    { id: "signTop", type: "expansionSign", dir: "top", x: 0, z: -15.4, w: 0.7, d: 0.4 },
    { id: "signBottom", type: "expansionSign", dir: "bottom", x: 0, z: 15.4, w: 0.7, d: 0.4 },
    { id: "signLeft", type: "expansionSign", dir: "left", x: -15.4, z: 0, w: 0.4, d: 0.7 },
    { id: "signRight", type: "expansionSign", dir: "right", x: 15.4, z: 0, w: 0.4, d: 0.7 },
  ];
  const generated = [];
  const blocked = fixed.map((o) => ({ x: o.x, z: o.z, r: 2.3 }));
  for (let i = 0; i < 38; i += 1) {
    const type = weightedPick([{ id: "grass", w: 38 }, { id: "tree", w: 15 }, { id: "smallRock", w: 16 }, { id: "bigRock", w: 8 }, { id: "log", w: 8 }, { id: "branch", w: 15 }]);
    let tries = 0;
    let x;
    let z;
    do {
      x = -11 + Math.random() * 22;
      z = -11 + Math.random() * 22;
      tries += 1;
    } while ((Math.abs(x) < 4 && Math.abs(z) < 4) || blocked.some((b) => Math.hypot(b.x - x, b.z - z) < b.r) && tries < 40);
    generated.push({ id: `${type}${i}`, type, x, z, w: 0.6, d: 0.6, hp: type === "tree" || type === "bigRock" ? 3 : type === "log" ? 2 : 1 });
  }
  return [...fixed, ...generated].map(prepareWorldObject);
}

function prepareWorldObject(obj) {
  const prepared = { ...obj };
  if (prepared.type === "workbench") prepared.repaired = true;
  if (prepared.type === "workbenchBroken" && prepared.repaired) prepared.type = "workbench";
  if (prepared.type === "placedFence") prepared.itemId ??= "fence";
  if (prepared.type === "stonePath") prepared.itemId ??= "path";
  prepared.rotY ??= stableNumber(prepared.id, 0, Math.PI * 2);
  prepared.scaleX ??= 0.92 + stableNumber(`${prepared.id}:sx`, 0, 0.18);
  prepared.scaleZ ??= 0.92 + stableNumber(`${prepared.id}:sz`, 0, 0.18);
  prepared.drop ??= resourceDropFor(prepared);
  return prepared;
}

function stableNumber(seed, min = 0, max = 1) {
  let hash = 2166136261;
  for (let i = 0; i < String(seed).length; i += 1) {
    hash ^= String(seed).charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return min + ((hash >>> 0) / 4294967295) * (max - min);
}

function resourceDropFor(obj) {
  if (obj.drop) return obj.drop;
  if (obj.type === "branch") return 1;
  if (obj.type === "log") return Math.round(stableNumber(`${obj.id}:wood`, 2, 3));
  if (obj.type === "tree") return Math.round(stableNumber(`${obj.id}:wood`, 4, 6));
  if (obj.type === "smallRock") return Math.round(stableNumber(`${obj.id}:stone`, 1, 2));
  if (obj.type === "bigRock") return Math.round(stableNumber(`${obj.id}:stone`, 3, 5));
  return 1;
}

function weightedPick(entries) {
  const total = entries.reduce((sum, e) => sum + e.w, 0);
  let roll = Math.random() * total;
  for (const entry of entries) {
    roll -= entry.w;
    if (roll <= 0) return entry.id;
  }
  return entries[0].id;
}

function createStatsBucket(source = {}) {
  const bucket = {};
  for (const key of STAT_KEYS) bucket[key] = Number(source[key] || 0);
  return bucket;
}

function addStats(target, source) {
  for (const key of STAT_KEYS) target[key] = Number((Number(target[key] || 0) + Number(source[key] || 0)).toFixed(2));
}

function recordStat(key, amount = 1) {
  if (!state || !STAT_KEYS.includes(key) || amount <= 0) return;
  state.dailyStats ||= createStatsBucket();
  state.dailyStats[key] = Number((Number(state.dailyStats[key] || 0) + amount).toFixed(2));
}

function syncLegacyStats() {
  state.stats ||= {};
  state.stats.salesMoney = state.totalStats.salesMoney;
  state.stats.totalSold = state.totalStats.itemsSold;
  state.stats.cropsHarvested = state.totalStats.cropsHarvested;
  state.stats.eggsCollected = state.totalStats.eggsCollected;
  state.stats.milkCollected = state.totalStats.milkCollected;
  state.stats.treesCut = state.totalStats.treesCut;
  state.stats.stonesBroken = state.totalStats.stonesBroken;
  state.stats.woodCollected = state.totalStats.woodCollected;
  state.stats.stoneCollected = state.totalStats.stoneCollected;
  state.stats.hayCollected = state.totalStats.hayCollected;
  state.stats.daysPlayed = state.totalStats.daysPlayed;
  state.stats.weeklyHistory = state.weeklyHistory;
  state.stats.currentWeek = state.currentWeekStats;
}

function saveKey(slot = activeSaveSlot, old = false) {
  return old ? `${SAVE_OLD_KEY}_slot_${slot}` : `${SAVE_KEY}_slot_${slot}`;
}

function migrateLegacySaveSlots() {
  if (!localStorage.getItem(saveKey(1)) && localStorage.getItem(SAVE_KEY)) {
    localStorage.setItem(saveKey(1), localStorage.getItem(SAVE_KEY));
  }
  if (!localStorage.getItem(saveKey(1, true)) && localStorage.getItem(SAVE_OLD_KEY)) {
    localStorage.setItem(saveKey(1, true), localStorage.getItem(SAVE_OLD_KEY));
  }
}

function parseSave(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSummary(raw) {
  const save = parseSave(raw);
  if (!save) return "Save corrompido";
  return `${save.farmName || "Fazenda sem nome"} · ${save.characterName || "Pessoa fazendeira"} · ${dateText(save.calendar)} · ${formatMoney(Number(save.money || 0))}`;
}

function startNewGame(slot = pendingNewGameSlot) {
  activeSaveSlot = SAVE_SLOTS.includes(Number(slot)) ? Number(slot) : 1;
  localStorage.removeItem(saveKey(activeSaveSlot));
  localStorage.removeItem(saveKey(activeSaveSlot, true));
  state = emptyState();
  normalizeState();
  state.saveSlot = activeSaveSlot;
  state.farmName = ui.farmNameInput.value.trim() || "Fazenda sem nome";
  state.characterName = ui.characterNameInput.value.trim() || "Pessoa fazendeira";
  state.appearance = { ...createAppearance, barefoot: ui.barefootInput.checked };
  selectedTool = "hoe";
  activeSelection = "tool";
  overviewMode = false;
  document.body.classList.remove("overview-active");
  document.querySelector("#overviewPanel")?.remove();
  setTool("hoe", true);
  selectedSlot = 0;
  rebuildWorld();
  applyWeather(state.weather);
  closeScreens();
  isPaused = false;
  syncUi();
  toast(`Bem-vindo a ${state.farmName}!`);
}

function saveGame() {
  state.selectedTool = selectedTool;
  state.selectedSlot = selectedSlot;
  state.activeSelection = activeSelection;
  state.saveSlot = activeSaveSlot;
  normalizeState();
  const current = localStorage.getItem(saveKey(activeSaveSlot));
  if (current) {
    let currentState = null;
    try {
      currentState = JSON.parse(current);
    } catch {
      currentState = null;
    }
    if (currentState?.calendar && (state.calendar.absoluteDay - currentState.calendar.absoluteDay) >= 2) {
      localStorage.setItem(saveKey(activeSaveSlot, true), current);
    }
  }
  localStorage.setItem(saveKey(activeSaveSlot), JSON.stringify(state));
}

function loadGame(version = "recent", slot = activeSaveSlot) {
  activeSaveSlot = SAVE_SLOTS.includes(Number(slot)) ? Number(slot) : 1;
  const raw = localStorage.getItem(version === "old" ? saveKey(activeSaveSlot, true) : saveKey(activeSaveSlot));
  if (!raw) return toast("Nenhum save encontrado.");
  if (overviewMode) setOverviewMode(false);
  try {
    state = JSON.parse(raw);
  } catch {
    return toast("Save corrompido.");
  }
  normalizeState();
  state.saveSlot = activeSaveSlot;
  selectedTool = state.selectedTool || "hoe";
  selectedSlot = state.selectedSlot || 0;
  const loadedActiveSelection = state.activeSelection === "item" ? "item" : "tool";
  setTool(selectedTool, true);
  setActiveSelection(loadedActiveSelection);
  rebuildWorld();
  applyWeather(state.weather);
  closeScreens();
  isPaused = false;
  syncUi();
  toast("Jogo carregado.");
}

function dateText(calendar = state.calendar) {
  const week = WEEK_DAYS[(calendar.absoluteDay - 1) % WEEK_DAYS.length];
  return `${week}, Dia ${calendar.day} de ${MONTHS[calendar.month - 1]}, Ano ${calendar.year}`;
}

function formatMoney(value) {
  return Number.isInteger(value) ? `R$${value}` : `R$${value.toFixed(2).replace(".", ",")}`;
}

function normalizeState() {
  if (!state) return;
  const defaults = {
    farmName: "Fazenda do Patrick",
    characterName: "Patrick",
    appearance: { skin: 0, hair: 0, shirt: 0, pants: 0, shoes: 0, barefoot: false },
    money: 17,
    weather: "sunny",
    calendar: { day: 1, month: 1, year: 1, absoluteDay: 1 },
    player: { x: 0.2, z: 1.1 },
    animals: [
      { id: "chicken1", type: "chicken", x: 5.3, z: -1.6, petted: false, productReady: false, sad: false },
      { id: "cow1", type: "cow", x: 4.7, z: 1.45, petted: false, productReady: false, sad: false },
    ],
    crops: [],
  };
  state.mode = state.mode === "house" ? "house" : "farm";
  state.farmName ||= defaults.farmName;
  state.characterName ||= defaults.characterName;
  state.appearance = { ...defaults.appearance, ...(state.appearance || {}) };
  state.money = Number.isFinite(Number(state.money)) ? Number(state.money) : defaults.money;
  state.weather = WEATHER.some((item) => item.id === state.weather) ? state.weather : defaults.weather;
  state.calendar = { ...defaults.calendar, ...(state.calendar || {}) };
  state.calendar.absoluteDay = Math.max(1, Number(state.calendar.absoluteDay) || 1);
  state.calendar.day = Math.max(1, Number(state.calendar.day) || 1);
  state.calendar.month = Math.max(1, Number(state.calendar.month) || 1);
  state.calendar.year = Math.max(1, Number(state.calendar.year) || 1);
  state.player = { ...defaults.player, ...(state.player || {}) };
  if (!Array.isArray(state.animals)) state.animals = defaults.animals;
  state.animals = state.animals.map((animal, index) => ({
    id: animal.id || `animal${index}`,
    type: animal.type === "cow" ? "cow" : "chicken",
    x: Number.isFinite(Number(animal.x)) ? Number(animal.x) : (animal.type === "cow" ? 4.7 : 5.3),
    z: Number.isFinite(Number(animal.z)) ? Number(animal.z) : (animal.type === "cow" ? 1.45 : -1.6),
    homeX: Number.isFinite(Number(animal.homeX)) ? Number(animal.homeX) : (Number.isFinite(Number(animal.x)) ? Number(animal.x) : (animal.type === "cow" ? 4.7 : 5.3)),
    homeZ: Number.isFinite(Number(animal.homeZ)) ? Number(animal.homeZ) : (Number.isFinite(Number(animal.z)) ? Number(animal.z) : (animal.type === "cow" ? 1.45 : -1.6)),
    petted: Boolean(animal.petted),
    productReady: Boolean(animal.productReady),
    sad: Boolean(animal.sad),
    wanderTimer: Number.isFinite(Number(animal.wanderTimer)) ? Math.max(0, Number(animal.wanderTimer)) : 1 + stableNumber(`${animal.id || index}:idle`, 0, 2),
    wanderTarget: animal.wanderTarget || null,
  }));
  if (!Array.isArray(state.crops)) state.crops = defaults.crops;
  state.inventory = Array.from({ length: 8 }, (_, index) => normalizeStack(state.inventory?.[index] || null));
  state.chest = (state.chest || []).map(normalizeStack).filter(Boolean);
  state.fridge = (state.fridge || []).map(normalizeStack).filter(Boolean);
  state.saleCrate = (state.saleCrate || []).map(normalizeStack).filter(Boolean);
  state.resources ||= { wood: 0, stone: 0, hay: 0 };
  state.resources.wood ||= 0;
  state.resources.stone ||= 0;
  state.resources.hay ||= 0;
  state.chestResources ||= { wood: 0, stone: 0 };
  state.chestResources.wood ||= 0;
  state.chestResources.stone ||= 0;
  state.deliveries ||= { seeds: [], ingredients: [], recipes: [] };
  state.deliveries.seeds ||= [];
  state.deliveries.ingredients ||= [];
  state.deliveries.recipes ||= [];
  state.incomingDeliveries ||= { seeds: [], ingredients: [], recipes: [] };
  state.incomingDeliveries.seeds ||= [];
  state.incomingDeliveries.ingredients ||= [];
  state.incomingDeliveries.recipes ||= [];
  state.storesUsedToday ||= {};
  state.unlockedRecipes ||= [];
  const legacyStats = state.stats || {};
  state.dailyStats = createStatsBucket(state.dailyStats);
  state.currentWeekStats = createStatsBucket(state.currentWeekStats || legacyStats.currentWeek);
  state.totalStats = createStatsBucket(state.totalStats || legacyStats);
  state.weeklyHistory = Array.isArray(state.weeklyHistory) ? state.weeklyHistory.map(normalizeWeekEntry) : (legacyStats.weeklyHistory || []).map(normalizeWeekEntry);
  state.latestNewspaperWeek = state.latestNewspaperWeek || state.weeklyHistory[state.weeklyHistory.length - 1]?.weekNumber || null;
  state.pendingNewspaper = Boolean(state.pendingNewspaper && state.weeklyHistory.length);
  syncLegacyStats();
  state.expansions ||= { top: false, bottom: false, left: false, right: false };
  state.expansions.top ||= false;
  state.expansions.bottom ||= false;
  state.expansions.left ||= false;
  state.expansions.right ||= false;
  state.expansionOrder = Array.isArray(state.expansionOrder)
    ? state.expansionOrder.filter((dir) => state.expansions[dir])
    : Object.keys(state.expansions).filter((dir) => state.expansions[dir]);
  state.objects = dedupeObjectsById((state.objects || startingObjects()).map(prepareWorldObject));
  if (!state.objects.some((obj) => obj.id === "workbench")) {
    state.objects.push(prepareWorldObject({ id: "workbench", type: "workbenchBroken", x: -2.2, z: 0.25, w: 0.8, d: 0.65, movable: false, repaired: false, hp: 1 }));
  }
  if (!state.objects.some((obj) => obj.id === "newspaper")) {
    state.objects.push(prepareWorldObject({ id: "newspaper", type: "newspaper", x: -2.15, z: -1.05, w: 0.45, d: 0.35, movable: false }));
  }
  migrateCrowdedHouseEntrance();
  state.selectedSlot = Number.isInteger(state.selectedSlot) ? clamp(state.selectedSlot, 0, 7) : selectedSlot;
  state.activeSelection = state.activeSelection === "item" ? "item" : "tool";
}

function dedupeObjectsById(list) {
  const seen = new Set();
  return list.filter((obj) => {
    if (!obj?.id || seen.has(obj.id)) return false;
    seen.add(obj.id);
    return true;
  });
}

function normalizeWeekEntry(entry = {}) {
  return {
    weekNumber: Number(entry.weekNumber || 0),
    year: Number(entry.year || 1),
    month: Number(entry.month || 1),
    startDay: Number(entry.startDay || 1),
    endDay: Number(entry.endDay || 5),
    stats: createStatsBucket(entry.stats || entry),
  };
}

function migrateCrowdedHouseEntrance() {
  const workbench = state.objects.find((obj) => obj.id === "workbench");
  if (workbench && Math.hypot(workbench.x - -2.25, workbench.z - -1.25) < 0.25) {
    workbench.x = -2.2;
    workbench.z = 0.25;
  }
  const chest = state.objects.find((obj) => obj.id === "chest");
  if (chest && Math.hypot(chest.x - -4.9, chest.z - -1.4) < 0.25) {
    chest.x = -5.65;
    chest.z = -0.35;
  }
}

function normalizeStack(stack) {
  if (!stack || !stack.id || !ITEMS[stack.id] || stack.qty <= 0) return null;
  const normalized = { id: stack.id, qty: Math.floor(stack.qty) };
  if (usesOrigin(stack.id)) normalized.origin = stack.origin || ITEMS[stack.id].origin || "fazenda";
  return normalized;
}

function usesOrigin(itemId) {
  const category = ITEMS[itemId]?.category;
  return ["cultivo", "ingrediente", "comida"].includes(category);
}

function isFarmProduct(stack) {
  return Boolean(stack && usesOrigin(stack.id) && stack.origin === "fazenda");
}

function compatibleStacks(a, b) {
  if (!a || !b || a.id !== b.id) return false;
  if (!usesOrigin(a.id)) return true;
  return (a.origin || "fazenda") === (b.origin || "fazenda");
}

function cloneStack(stack, qty = stack?.qty) {
  if (!stack) return null;
  return normalizeStack({ ...stack, qty });
}

function stackLimit(stackOrId) {
  const id = typeof stackOrId === "string" ? stackOrId : stackOrId?.id;
  return ITEMS[id]?.stack || 1;
}

function itemDisplayName(stack) {
  return ITEMS[stack.id]?.name || stack.id;
}

function itemOriginText(stack) {
  if (!usesOrigin(stack.id)) return "";
  if (ITEMS[stack.id]?.category === "comida") return stack.origin === "fazenda" ? "Produto da Fazenda" : "Ingredientes comprados";
  return stack.origin === "fazenda" ? "Produto da Fazenda" : "Comprado";
}

function showMainMenu() {
  isPaused = true;
  if (overviewMode) setOverviewMode(false);
  closeModal();
  ui.creationScreen.classList.remove("is-active");
  ui.mainMenu.classList.add("is-active");
}

function closeScreens() {
  if (overviewMode) setOverviewMode(false);
  ui.mainMenu.classList.remove("is-active");
  ui.creationScreen.classList.remove("is-active");
  closeModal();
}

function showModal(html) {
  isPaused = true;
  ui.toolRadial.classList.remove("is-open");
  ui.modal.innerHTML = `<div class="modal-card">${html}</div>`;
  ui.modal.classList.add("is-active");
}

function closeModal(resume = true) {
  ui.modal.classList.remove("is-active");
  ui.modal.innerHTML = "";
  if (resume && state && !ui.mainMenu.classList.contains("is-active") && !ui.creationScreen.classList.contains("is-active")) isPaused = false;
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  ui.toastLayer.append(node);
  setTimeout(() => node.remove(), 2050);
}

function setupScene() {
  setupTextures();
  hemiLight = new THREE.HemisphereLight(0xffffff, 0x5c9b63, 1.45);
  scene.add(hemiLight);
  sunLight = new THREE.DirectionalLight(0xfff1c8, 4.2);
  sunLight.position.set(-6, 10, 5);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -22;
  sunLight.shadow.camera.right = 22;
  sunLight.shadow.camera.top = 22;
  sunLight.shadow.camera.bottom = -22;
  scene.add(sunLight);
  const fillLight = new THREE.DirectionalLight(0xffd7a2, 0.6);
  fillLight.position.set(4, 4, -5);
  scene.add(fillLight);
  buildPlayer();
  requestAnimationFrame(animate);
}

function clearWorld() {
  for (const child of [...world.children]) {
    if (child !== player) world.remove(child);
  }
  objects.clear();
  collisions.length = 0;
  interactionObjects.length = 0;
  cropMeshes.clear();
}

function rebuildWorld() {
  clearWorld();
  player.position.set(state.player.x, 0, state.player.z);
  updatePlayerStyle();
  buildFarmGround();
  buildStaticObjects();
  buildCrops();
  buildAnimals();
  buildInteriorIfNeeded();
  resolvePlayerOverlap();
}

function farmBounds() {
  if (state?.mode === "house") return { minX: -4.2, maxX: 4.2, minZ: -3.2, maxZ: 3.2 };
  return {
    minX: state?.expansions?.left ? -32 : -16,
    maxX: state?.expansions?.right ? 32 : 16,
    minZ: state?.expansions?.top ? -32 : -16,
    maxZ: state?.expansions?.bottom ? 32 : 16,
  };
}

function isInUnlockedFarmArea(x, z) {
  if (state?.mode === "house") return true;
  if (x >= -16 && x <= 16 && z >= -16 && z <= 16) return true;
  if (state?.expansions?.top && x >= -8 && x <= 8 && z >= -32 && z <= -16) return true;
  if (state?.expansions?.bottom && x >= -8 && x <= 8 && z >= 16 && z <= 32) return true;
  if (state?.expansions?.left && x >= -32 && x <= -16 && z >= -8 && z <= 8) return true;
  if (state?.expansions?.right && x >= 16 && x <= 32 && z >= -8 && z <= 8) return true;
  return false;
}

function buildFarmGround() {
  const ground = box(32, 0.18, 32, palette.grass, { castShadow: false, texture: "grass", outline: false });
  ground.position.y = -0.09;
  world.add(ground);
  addExpansionGround();
  addPaths();
  addFenceBorder();
  addClouds();
}

function addExpansionGround() {
  const expansions = [
    ["top", 0, -24, 16, 16],
    ["bottom", 0, 24, 16, 16],
    ["left", -24, 0, 16, 16],
    ["right", 24, 0, 16, 16],
  ];
  for (const [dir, x, z, w, d] of expansions) {
    if (!state.expansions?.[dir]) continue;
    const ground = box(w, 0.18, d, palette.grass, { castShadow: false, texture: "grass", outline: false });
    ground.position.set(x, -0.09, z);
    world.add(ground);
  }
}

function addPaths() {
  const points = [
    [-3.8, -2.6], [-2.7, -2.55], [-1.3, -2.7], [-0.4, -2.7], [0.35, -2.7],
    [1.1, -2.7], [2.1, -2.6], [3.2, -2.45], [4.8, -2.35], [5.2, 2.35],
    [-5.1, 2.4], [-2.25, -1.25],
  ];
  for (const [x, z] of points) {
    const stone = cylinder(0.16, 0.03, palette.stone, 10);
    stone.position.set(x, 0.025, z);
    stone.scale.set(1.35, 1, 0.65);
    stone.rotation.y = stableNumber(`${x},${z}:path`, 0, Math.PI);
    stone.castShadow = false;
    world.add(stone);
  }
}

function addFenceBorder() {
  for (let i = -16; i <= 16; i += 2) {
    if (state.expansions.top && Math.abs(i) < 8) {
      // leave a visible gate into the northern expansion
    } else {
      addFencePost(i, -16);
    }
    if (state.expansions.bottom && Math.abs(i) < 8) {
      // leave a visible gate into the southern expansion
    } else {
      addFencePost(i, 16);
    }
  }
  for (let i = -14; i <= 14; i += 2) {
    if (!(state.expansions.left && Math.abs(i) < 8)) addFencePost(-16, i);
    if (!(state.expansions.right && Math.abs(i) < 8)) addFencePost(16, i);
  }
  if (state.expansions.top) {
    addRail(-12, -16, 8, 0.12);
    addRail(12, -16, 8, 0.12);
  } else {
    addRail(0, -16, 32, 0.12);
  }
  if (state.expansions.bottom) {
    addRail(-12, 16, 8, 0.12);
    addRail(12, 16, 8, 0.12);
  } else {
    addRail(0, 16, 32, 0.12);
  }
  if (state.expansions.left) {
    const top = box(0.12, 0.18, 8, palette.wood, { texture: "wood" });
    top.position.set(-16, 0.55, -12);
    world.add(top);
    const bottom = box(0.12, 0.18, 8, palette.wood, { texture: "wood" });
    bottom.position.set(-16, 0.55, 12);
    world.add(bottom);
  } else {
    const left = box(0.12, 0.18, 32, palette.wood, { texture: "wood" });
    left.position.set(-16, 0.55, 0);
    world.add(left);
  }
  if (state.expansions.right) {
    const top = box(0.12, 0.18, 8, palette.wood, { texture: "wood" });
    top.position.set(16, 0.55, -12);
    world.add(top);
    const bottom = box(0.12, 0.18, 8, palette.wood, { texture: "wood" });
    bottom.position.set(16, 0.55, 12);
    world.add(bottom);
  } else {
    const right = box(0.12, 0.18, 32, palette.wood, { texture: "wood" });
    right.position.set(16, 0.55, 0);
    world.add(right);
  }
  if (!state.expansions.top) collisions.push({ x: 0, z: -16.2, w: 32, d: 0.4 });
  if (!state.expansions.bottom) collisions.push({ x: 0, z: 16.2, w: 32, d: 0.4 });
  if (!state.expansions.left) collisions.push({ x: -16.2, z: 0, w: 0.4, d: 32 });
  if (!state.expansions.right) collisions.push({ x: 16.2, z: 0, w: 0.4, d: 32 });
  addExpansionOuterCollisions();
}

function addExpansionOuterCollisions() {
  if (state.expansions.top) {
    collisions.push({ x: 0, z: -32.2, w: 16, d: 0.4 }, { x: -8.2, z: -24, w: 0.4, d: 16 }, { x: 8.2, z: -24, w: 0.4, d: 16 });
  }
  if (state.expansions.bottom) {
    collisions.push({ x: 0, z: 32.2, w: 16, d: 0.4 }, { x: -8.2, z: 24, w: 0.4, d: 16 }, { x: 8.2, z: 24, w: 0.4, d: 16 });
  }
  if (state.expansions.left) {
    collisions.push({ x: -32.2, z: 0, w: 0.4, d: 16 }, { x: -24, z: -8.2, w: 16, d: 0.4 }, { x: -24, z: 8.2, w: 16, d: 0.4 });
  }
  if (state.expansions.right) {
    collisions.push({ x: 32.2, z: 0, w: 0.4, d: 16 }, { x: 24, z: -8.2, w: 16, d: 0.4 }, { x: 24, z: 8.2, w: 16, d: 0.4 });
  }
}

function addFencePost(x, z) {
  const post = box(0.18, 0.74, 0.18, palette.wood, { texture: "wood" });
  post.position.set(x, 0.37, z);
  world.add(post);
}

function addRail(x, z, w, d) {
  const rail = box(w, 0.16, d, palette.wood, { texture: "wood" });
  rail.position.set(x, 0.55, z);
  world.add(rail);
}

function buildStaticObjects() {
  for (const obj of state.objects) {
    prepareWorldObject(obj);
    if (obj.type.startsWith("sign") && !isExpansionVisible(obj.dir)) continue;
    if (obj.type === "newspaper" && !state.weeklyHistory.length) continue;
    if (isDeliveryBox(obj.type) && !hasPendingDelivery(obj.type)) continue;
    const group = objectModel(obj);
    group.position.set(obj.x, 0, obj.z);
    group.userData.object = obj;
    world.add(group);
    objects.set(obj.id, group);
    if (!["grass", "branch", "stonePath", "newspaper"].includes(obj.type)) {
      collisions.push({ x: obj.x, z: obj.z, w: obj.w || 0.8, d: obj.d || 0.8, id: obj.id });
    }
    if (isInteractive(obj)) interactionObjects.push({ id: obj.id, type: obj.type, group, object: obj });
  }
  addGroundDecor();
}

function isExpansionVisible(dir) {
  return !dir || state.expansions[dir] === false;
}

function objectModel(obj) {
  const g = new THREE.Group();
  if (obj.type === "house") {
    const base = box(2.2, 1.2, 1.8, 0xf4d8a8, { roughness: 0.8 });
    base.position.y = 0.6;
    g.add(base);
    const roof = cone(1.65, 0.9, 0xb75543, 4);
    roof.position.y = 1.55;
    roof.rotation.y = Math.PI / 4;
    g.add(roof);
    const trim = box(2.34, 0.12, 0.12, 0xffedc7, { outline: false });
    trim.position.set(0, 1.04, 0.93);
    g.add(trim);
    const door = box(0.42, 0.7, 0.06, 0x7b4d2a);
    door.position.set(0, 0.38, 0.93);
    g.add(door);
    const knob = sphere(0.035, 0xf6d06f, 8, 5);
    knob.position.set(0.14, 0.38, 0.98);
    g.add(knob);
    for (const x of [-0.72, 0.72]) {
      const window = box(0.38, 0.34, 0.07, 0xaee7f2, { outline: false });
      window.position.set(x, 0.72, 0.95);
      g.add(window);
      const sill = box(0.48, 0.06, 0.08, 0xfff1cf, { outline: false });
      sill.position.set(x, 0.51, 0.99);
      g.add(sill);
    }
  } else if (obj.type === "phone") {
    const base = box(0.56, 0.08, 0.5, 0x3f7fa6, { outline: false });
    base.position.y = 0.04;
    g.add(base);
    const body = box(0.48, 0.96, 0.36, 0x55a4d5);
    body.position.y = 0.52;
    g.add(body);
    const back = box(0.52, 1.08, 0.08, 0x3d83b4, { outline: false });
    back.position.set(0, 0.58, -0.2);
    g.add(back);
    for (const x of [-0.31, 0.31]) {
      const post = box(0.08, 1.08, 0.08, 0x37769d);
      post.position.set(x, 0.58, 0.02);
      g.add(post);
    }
    const top = box(0.72, 0.16, 0.56, 0xffdb78);
    top.position.set(0, 1.16, -0.02);
    g.add(top);
    const hoodLip = box(0.78, 0.08, 0.16, 0xe7b956, { outline: false });
    hoodLip.position.set(0, 1.06, 0.28);
    g.add(hoodLip);
    const sign = box(0.38, 0.12, 0.035, 0xf7f0cf, { outline: false });
    sign.position.set(0, 1.16, 0.31);
    g.add(sign);
    const phoneMark = box(0.18, 0.035, 0.02, 0x2f5f82, { outline: false });
    phoneMark.position.set(0, 1.16, 0.335);
    g.add(phoneMark);
    const frontPanel = box(0.36, 0.58, 0.045, 0x2f6f99, { outline: false });
    frontPanel.position.set(0, 0.67, 0.205);
    g.add(frontPanel);
    const screen = box(0.25, 0.12, 0.025, 0xdaf1e9, { outline: false });
    screen.position.set(0, 0.88, 0.235);
    g.add(screen);
    const dial = cylinder(0.095, 0.035, 0xffe7a2, 16);
    dial.rotation.x = Math.PI / 2;
    dial.position.set(0, 0.62, 0.24);
    g.add(dial);
    for (const x of [-0.08, 0, 0.08]) {
      for (const y of [0.47, 0.53]) {
        const key = box(0.035, 0.025, 0.018, 0xf8e9bd, { outline: false });
        key.position.set(x, y, 0.245);
        g.add(key);
      }
    }
    const cord = cylinder(0.012, 0.24, 0x203f58, 6);
    cord.rotation.z = 0.35;
    cord.position.set(-0.12, 0.76, 0.245);
    g.add(cord);
    const handset = box(0.3, 0.075, 0.075, 0x1f4868);
    handset.position.set(-0.01, 0.78, 0.255);
    handset.rotation.z = -0.15;
    g.add(handset);
  } else if (obj.type === "chest") {
    const body = box(0.76, 0.36, 0.52, 0x8a5630, { texture: "wood" });
    body.position.y = 0.2;
    g.add(body);
    const lid = box(0.82, 0.18, 0.58, 0x6f3f24, { texture: "wood" });
    lid.position.y = 0.48;
    g.add(lid);
    for (const x of [-0.28, 0.28]) {
      const band = box(0.07, 0.58, 0.62, 0x4b3a32, { outline: false });
      band.position.set(x, 0.33, 0);
      g.add(band);
    }
    const lock = box(0.16, 0.18, 0.045, 0xf0c45f, { outline: false });
    lock.position.set(0, 0.32, -0.29);
    g.add(lock);
    const shine = box(0.34, 0.035, 0.04, 0xb97842, { outline: false });
    shine.position.set(0, 0.59, -0.2);
    g.add(shine);
  } else if (obj.type.includes("Box")) {
    const colors = {
      seedBox: { body: 0xd8a05e, lid: 0xf3d394, accent: 0x69b65f },
      ingredientBox: { body: 0xc98b4a, lid: 0xf5e1b3, accent: 0xe36d5a },
      recipeBox: { body: 0x8f75c9, lid: 0xe9defb, accent: 0xfff3ce },
    }[obj.type] || { body: 0xba8448, lid: 0xffe4aa, accent: 0xf0cc65 };
    const crate = box(0.62, 0.34, 0.52, colors.body, { texture: "wood" });
    crate.position.y = 0.18;
    g.add(crate);
    const lid = box(0.7, 0.09, 0.58, colors.lid);
    lid.position.y = 0.42;
    g.add(lid);
    for (const x of [-0.23, 0.23]) {
      const strap = box(0.055, 0.39, 0.58, 0x8b6138, { outline: false });
      strap.position.set(x, 0.24, 0);
      g.add(strap);
    }
    const badge = box(0.26, 0.18, 0.04, colors.accent, { outline: false });
    badge.position.set(0, 0.3, -0.285);
    g.add(badge);
    if (obj.type === "seedBox") {
      const leaf = sphere(0.08, 0x5faf55, 8, 5);
      leaf.scale.set(1.4, 0.18, 0.75);
      leaf.position.set(0.02, 0.48, -0.18);
      leaf.rotation.z = -0.45;
      g.add(leaf);
      const seed = sphere(0.06, 0x8a5630, 8, 5);
      seed.scale.set(1, 0.32, 0.75);
      seed.position.set(-0.11, 0.49, -0.08);
      g.add(seed);
    } else if (obj.type === "ingredientBox") {
      for (const x of [-0.12, 0.08]) {
        const produce = sphere(0.09, x < 0 ? 0xf06f56 : 0xf2c65a, 10, 6);
        produce.scale.set(1, 0.75, 1);
        produce.position.set(x, 0.49, -0.08);
        g.add(produce);
      }
      const leaf = box(0.16, 0.03, 0.06, 0x5fac63, { outline: false });
      leaf.position.set(0.02, 0.57, -0.08);
      leaf.rotation.z = 0.3;
      g.add(leaf);
    } else if (obj.type === "recipeBox") {
      const paperA = box(0.34, 0.035, 0.25, 0xfff8df, { outline: false });
      paperA.position.set(-0.03, 0.49, -0.06);
      paperA.rotation.y = -0.18;
      g.add(paperA);
      const ribbon = box(0.04, 0.05, 0.28, 0xc96a50, { outline: false });
      ribbon.position.set(-0.03, 0.53, -0.06);
      g.add(ribbon);
    }
  } else if (obj.type === "saleCrate") {
    const base = box(0.82, 0.32, 0.56, 0xb86b3d, { receiveShadow: false });
    base.position.y = 0.23;
    g.add(base);
    for (const x of [-0.3, 0.3]) {
      for (const z of [-0.22, 0.22]) {
        const foot = box(0.12, 0.12, 0.12, 0x704228, { outline: false });
        foot.position.set(x, 0.095, z);
        g.add(foot);
      }
    }
    const frontBacker = box(0.88, 0.36, 0.055, 0x8d5232, { outline: false, receiveShadow: false });
    frontBacker.position.set(0, 0.28, 0.37);
    g.add(frontBacker);
    for (const y of [0.2, 0.32, 0.44]) {
      const slat = box(0.9, 0.07, 0.07, 0xe2995f, { outline: false, receiveShadow: false });
      slat.position.set(0, y, 0.43);
      g.add(slat);
    }
    for (const x of [-0.37, 0.37]) {
      const side = box(0.075, 0.44, 0.08, 0x704228, { outline: false, receiveShadow: false });
      side.position.set(x, 0.31, 0.435);
      g.add(side);
    }
    const produceA = sphere(0.11, 0xe85f4d, 10, 6);
    produceA.scale.set(1, 0.65, 1);
    produceA.position.set(-0.16, 0.5, -0.05);
    g.add(produceA);
    const produceB = sphere(0.1, 0xf4ca63, 10, 6);
    produceB.scale.set(1, 0.65, 1);
    produceB.position.set(0.08, 0.49, 0.08);
    g.add(produceB);
    const tag = box(0.3, 0.18, 0.035, 0xfff0bd, { outline: false });
    tag.position.set(0, 0.36, 0.49);
    g.add(tag);
    const mark = box(0.18, 0.035, 0.02, 0x7b4d2a, { outline: false });
    mark.position.set(0, 0.37, 0.515);
    g.add(mark);
  } else if (obj.type === "coop") {
    const platform = box(1.18, 0.12, 0.9, 0x8f5a34, { texture: "wood" });
    platform.position.y = 0.13;
    g.add(platform);
    for (const x of [-0.46, 0.46]) {
      for (const z of [-0.32, 0.32]) {
        const leg = box(0.1, 0.32, 0.1, 0x7b4d2a, { texture: "wood" });
        leg.position.set(x, 0.16, z);
        g.add(leg);
      }
    }
    const body = box(0.98, 0.7, 0.72, 0xd99a4a, { texture: "wood" });
    body.position.y = 0.56;
    g.add(body);
    const frontPanel = box(0.82, 0.54, 0.045, 0xc5793d, { texture: "wood" });
    frontPanel.position.set(0, 0.54, 0.39);
    g.add(frontPanel);
    const frontTrim = box(1.08, 0.08, 0.07, 0xffdf96, { outline: false });
    frontTrim.position.set(0, 0.92, 0.4);
    g.add(frontTrim);
    const roof = cone(0.82, 0.46, 0xb94f3f, 4);
    roof.position.y = 1.13;
    roof.rotation.y = Math.PI / 4;
    g.add(roof);
    const roofCap = box(1.28, 0.08, 0.1, 0xffd18a, { outline: false });
    roofCap.position.set(0, 1.21, 0.02);
    roofCap.rotation.y = Math.PI / 4;
    g.add(roofCap);
    const hatch = box(0.3, 0.38, 0.07, 0x6f4428, { texture: "wood" });
    hatch.position.set(0, 0.46, 0.44);
    g.add(hatch);
    const hatchTop = cone(0.17, 0.13, 0xffdf96, 3);
    hatchTop.position.set(0, 0.7, 0.48);
    hatchTop.rotation.x = Math.PI / 2;
    g.add(hatchTop);
    for (const x of [-0.26, 0.26]) {
      const window = box(0.16, 0.16, 0.045, 0xffedba, { outline: false });
      window.position.set(x, 0.68, 0.445);
      g.add(window);
      const bar = box(0.12, 0.035, 0.055, 0x8b5a35, { outline: false });
      bar.position.set(x, 0.68, 0.472);
      g.add(bar);
    }
    const perch = cylinder(0.035, 0.9, 0x9b6034, 8);
    perch.rotation.z = Math.PI / 2;
    perch.position.set(0, 0.34, 0.52);
    g.add(perch);
    const nestBox = box(0.34, 0.28, 0.34, 0xc47b3d, { texture: "wood" });
    nestBox.position.set(-0.58, 0.46, 0.02);
    g.add(nestBox);
    const nestRoof = box(0.42, 0.08, 0.38, 0xb94f3f, { outline: false });
    nestRoof.position.set(-0.58, 0.64, 0.02);
    g.add(nestRoof);
  } else if (obj.type === "cowBarn") {
    const floor = box(1.66, 0.1, 1.14, 0x8b5b38, { texture: "wood" });
    floor.position.y = 0.08;
    g.add(floor);
    const backWall = box(1.48, 0.84, 0.14, 0xc96a50, { texture: "wood" });
    backWall.position.set(0, 0.5, -0.45);
    g.add(backWall);
    for (const x of [-0.66, 0.66]) {
      const post = box(0.13, 0.92, 0.13, 0x7a4b2a, { texture: "wood" });
      post.position.set(x, 0.52, 0.4);
      g.add(post);
    }
    for (const x of [-0.66, 0.66]) {
      const rearPost = box(0.13, 0.92, 0.13, 0x7a4b2a, { texture: "wood" });
      rearPost.position.set(x, 0.52, -0.42);
      g.add(rearPost);
    }
    const sideRailL = box(0.12, 0.32, 0.9, 0x9f6138, { texture: "wood" });
    sideRailL.position.set(-0.72, 0.42, 0.02);
    g.add(sideRailL);
    const sideRailR = box(0.12, 0.32, 0.9, 0x9f6138, { texture: "wood" });
    sideRailR.position.set(0.72, 0.42, 0.02);
    g.add(sideRailR);
    const roof = cone(1.06, 0.58, 0x8f4939, 4);
    roof.position.y = 1.18;
    roof.rotation.y = Math.PI / 4;
    g.add(roof);
    const roofLip = box(1.64, 0.1, 0.16, 0xb75b45, { outline: false });
    roofLip.position.set(0, 0.98, 0.52);
    g.add(roofLip);
    const beam = box(1.5, 0.12, 0.12, 0xffd18a, { outline: false });
    beam.position.set(0, 0.86, 0.47);
    g.add(beam);
    const trough = box(0.78, 0.18, 0.28, 0x9b6034, { texture: "wood" });
    trough.position.set(0, 0.2, 0.58);
    g.add(trough);
    const feed = box(0.66, 0.05, 0.18, 0xf1c85a, { outline: false });
    feed.position.set(0, 0.32, 0.58);
    g.add(feed);
    const hay = cone(0.2, 0.32, 0xf1c85a, 6);
    hay.position.set(-0.5, 0.26, -0.28);
    g.add(hay);
    const sign = box(0.42, 0.24, 0.045, 0xffdf96, { outline: false });
    sign.position.set(0, 0.68, 0.61);
    g.add(sign);
    const mark = box(0.22, 0.04, 0.02, 0x7a4b2a, { outline: false });
    mark.position.set(0, 0.69, 0.635);
    g.add(mark);
  } else if (obj.type === "silo") {
    const base = cylinder(0.43, 0.12, 0xa98b68, 14);
    base.position.y = 0.06;
    g.add(base);
    const body = cylinder(0.38, 1.28, 0xdce3d7, 14);
    body.position.y = 0.72;
    g.add(body);
    for (const y of [0.34, 0.72, 1.08]) {
      const band = cylinder(0.392, 0.045, 0x9fb1aa, 14);
      band.position.y = y;
      g.add(band);
    }
    const roof = cone(0.48, 0.38, 0xd4634e, 14);
    roof.position.y = 1.55;
    g.add(roof);
    const cap = cylinder(0.16, 0.08, 0xf1d08d, 10);
    cap.position.y = 1.78;
    g.add(cap);
    const hatch = box(0.24, 0.3, 0.035, 0xf3e1b0, { outline: false });
    hatch.position.set(0, 0.7, -0.39);
    g.add(hatch);
    const hatchMark = box(0.15, 0.035, 0.02, 0x8f724d, { outline: false });
    hatchMark.position.set(0, 0.72, -0.415);
    g.add(hatchMark);
    const hayCue = cone(0.13, 0.2, 0xf1c85a, 6);
    hayCue.position.set(-0.3, 0.18, 0.32);
    g.add(hayCue);
  } else if (obj.type === "workbenchBroken" || obj.type === "workbench") {
    const table = box(0.72, 0.28, 0.56, 0x795033, { texture: "wood" });
    table.position.y = 0.24;
    table.rotation.z = obj.type === "workbenchBroken" ? -0.08 : 0;
    g.add(table);
    if (obj.type === "workbench") {
      const top = box(0.82, 0.08, 0.62, 0xa96b37, { texture: "wood" });
      top.position.y = 0.43;
      g.add(top);
      const tool = box(0.42, 0.06, 0.08, 0xc9c9bf);
      tool.position.set(0.06, 0.5, 0.04);
      tool.rotation.y = -0.45;
      g.add(tool);
      for (const x of [-0.24, 0.24]) {
        const leg = box(0.08, 0.36, 0.08, 0x7b4d2a, { texture: "wood" });
        leg.position.set(x, 0.18, 0.2);
        g.add(leg);
      }
    } else {
      const plank = box(0.54, 0.07, 0.1, 0x5e3b28, { texture: "wood" });
      plank.position.set(0.08, 0.45, 0);
      plank.rotation.y = 0.6;
      g.add(plank);
    }
  } else if (obj.type === "stonePath") {
    const base = box(0.92, 0.08, 0.92, 0xa7a78f);
    base.position.y = 0.04;
    g.add(base);
    const stoneA = box(0.34, 0.04, 0.24, 0xc5c3aa);
    stoneA.position.set(-0.18, 0.1, -0.12);
    g.add(stoneA);
    const stoneB = box(0.3, 0.04, 0.28, 0xb7b59e);
    stoneB.position.set(0.2, 0.1, 0.16);
    g.add(stoneB);
  } else if (obj.type === "placedFence") {
    const left = box(0.14, 0.72, 0.14, palette.wood, { texture: "wood" });
    left.position.set(-0.3, 0.36, 0);
    g.add(left);
    const right = box(0.14, 0.72, 0.14, palette.wood, { texture: "wood" });
    right.position.set(0.3, 0.36, 0);
    g.add(right);
    const railA = box(0.78, 0.13, 0.12, 0xb97942, { texture: "wood" });
    railA.position.set(0, 0.48, 0);
    g.add(railA);
    const railB = box(0.78, 0.12, 0.12, 0x9b6034, { texture: "wood" });
    railB.position.set(0, 0.26, 0);
    g.add(railB);
  } else if (obj.type === "tree") {
    const trunk = cylinder(0.16, 0.85, palette.wood, 8);
    trunk.position.y = 0.42;
    g.add(trunk);
    for (let i = 0; i < 3; i += 1) {
      const crown = sphere(0.5 - i * 0.07, i === 1 ? 0x69c86b : 0x3fad55, 10, 7);
      crown.scale.set(1.08, 0.86, 1);
      crown.position.set((i - 1) * 0.18, 1.0 + i * 0.18, (i % 2) * 0.12);
      g.add(crown);
    }
  } else if (obj.type === "smallRock" || obj.type === "bigRock") {
    const rock = sphere(obj.type === "bigRock" ? 0.42 : 0.25, palette.stone, 9, 6);
    rock.scale.set(obj.scaleX || 1, 0.55, obj.scaleZ || 1);
    rock.position.y = obj.type === "bigRock" ? 0.2 : 0.11;
    g.add(rock);
    const shine = sphere(obj.type === "bigRock" ? 0.13 : 0.08, 0xd8d5bf, 7, 4);
    shine.scale.set(1, 0.16, 0.55);
    shine.position.set(-0.08, rock.position.y + 0.12, -0.08);
    g.add(shine);
  } else if (obj.type === "log") {
    const log = cylinder(0.18, 0.85, palette.wood, 8);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = obj.rotY || 0;
    log.position.y = 0.18;
    g.add(log);
    for (const x of [-0.43, 0.43]) {
      const ring = cylinder(0.185, 0.018, 0xf0c487, 12);
      ring.rotation.z = Math.PI / 2;
      ring.position.set(x, 0.18, 0);
      g.add(ring);
    }
  } else if (obj.type === "grass") {
    for (let i = 0; i < 6; i += 1) {
      const blade = cone(0.055, 0.24 + (i % 3) * 0.04, i % 2 ? 0x79c76b : 0x4faa56, 5);
      blade.position.set((i - 2.5) * 0.055, 0.13, ((i * 7) % 3 - 1) * 0.045);
      blade.rotation.z = (i - 2.5) * 0.13;
      g.add(blade);
    }
  } else if (obj.type === "branch") {
    const branch = box(0.55, 0.05, 0.08, palette.wood, { texture: "wood" });
    branch.position.y = 0.05;
    branch.rotation.y = obj.rotY || 0;
    g.add(branch);
    const twig = box(0.28, 0.04, 0.06, 0x7b4d2a, { texture: "wood" });
    twig.position.set(0.08, 0.07, 0.11);
    twig.rotation.y = (obj.rotY || 0) + 0.75;
    g.add(twig);
  } else if (obj.type === "expansionSign") {
    const post = box(0.1, 0.6, 0.1, palette.wood, { texture: "wood" });
    post.position.y = 0.3;
    g.add(post);
    const sign = box(0.7, 0.36, 0.08, 0xf4d8a8);
    sign.position.y = 0.72;
    g.add(sign);
    const arrow = cone(0.11, 0.2, 0x7b4d2a, 3);
    arrow.position.set(0, 0.73, -0.07);
    arrow.rotation.x = Math.PI / 2;
    g.add(arrow);
  } else if (obj.type === "newspaper") {
    const paper = box(0.5, 0.04, 0.35, 0xf7e7bd);
    paper.position.y = 0.05;
    paper.rotation.y = obj.rotY || -0.35;
    g.add(paper);
    const lineA = box(0.34, 0.012, 0.025, 0x8f724d);
    lineA.position.set(0, 0.085, -0.06);
    g.add(lineA);
    const lineB = box(0.24, 0.012, 0.025, 0x8f724d);
    lineB.position.set(-0.03, 0.087, 0.04);
    g.add(lineB);
  }
  g.rotation.y = obj.type === "tree" || obj.type === "grass" ? (obj.rotY || 0) : g.rotation.y;
  return g;
}

function isInteractive(obj) {
  return ["house", "phone", "seedBox", "ingredientBox", "recipeBox", "saleCrate", "coop", "cowBarn", "silo", "workbenchBroken", "workbench", "chest", "expansionSign", "newspaper"].includes(obj.type);
}

function isInteractionAvailable(item) {
  if (!item || !state) return false;
  if (item.type === "newspaper") return state.weeklyHistory.length > 0;
  if (isDeliveryBox(item.type)) return hasPendingDelivery(item.type);
  if (item.type === "coop") return state.animals.find((a) => a.type === "chicken")?.productReady;
  if (item.type === "cowBarn") return state.animals.find((a) => a.type === "cow")?.productReady;
  if (item.type === "animal") return !item.animal?.petted;
  return true;
}

function isDeliveryBox(type) {
  return ["seedBox", "ingredientBox", "recipeBox"].includes(type);
}

function deliveryKeyForBox(type) {
  if (type === "seedBox") return "seeds";
  if (type === "ingredientBox") return "ingredients";
  if (type === "recipeBox") return "recipes";
  return null;
}

function hasPendingDelivery(type) {
  const key = deliveryKeyForBox(type);
  return !!key && (state.deliveries?.[key]?.length || 0) > 0;
}

function addGroundDecor() {
  const decor = [[-8, 4, "flower"], [-7, -3, "rock"], [-2, 4, "tuft"], [3, -5, "flower"], [7, 3, "tuft"], [8, -6, "rock"], [-10, 8, "leaf"], [10, -2, "flower"]];
  for (const [x, z, type] of decor) {
    if (type === "flower") {
      const stem = cylinder(0.018, 0.13, palette.leaf, 5);
      stem.position.set(x, 0.1, z);
      world.add(stem);
      const colors = [0xff91b2, 0x83b8ff, 0xffdc62];
      const bloom = sphere(0.06, colors[Math.floor(stableNumber(`${x},${z}:flower`, 0, colors.length - 0.001))], 8, 6);
      bloom.position.set(x, 0.2, z);
      world.add(bloom);
    } else if (type === "rock") {
      const rock = sphere(0.13, palette.stone, 8, 5);
      rock.scale.set(1.35, 0.42, 0.85);
      rock.position.set(x, 0.08, z);
      world.add(rock);
    } else {
      for (let i = 0; i < 3; i += 1) {
        const blade = cone(0.045, 0.22, palette.leaf, 5);
        blade.position.set(x + (i - 1) * 0.06, 0.12, z + (i % 2) * 0.035);
        blade.rotation.z = (i - 1) * 0.22;
        world.add(blade);
      }
    }
  }
}

function addClouds() {
  for (const [x, y, z, s] of [[-12, 5.4, -14, 1.2], [9, 5.1, -13, 0.86], [-2, 5.8, -17, 0.7]]) {
    const cloud = new THREE.Group();
    for (const [cx, cy, size] of [[-0.28, 0, 0.34], [0, 0.08, 0.46], [0.34, -0.02, 0.3]]) {
      const puff = sphere(size * s, 0xffffff, 14, 8);
      puff.material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 });
      puff.castShadow = false;
      cloud.add(puff);
      puff.position.set(cx * s, cy * s, 0);
    }
    cloud.position.set(x, y, z);
    world.add(cloud);
  }
}

function buildCrops() {
  for (const crop of state.crops) {
    const g = new THREE.Group();
    g.position.set(crop.x, 0.01, crop.z);
    world.add(g);
    const soil = box(0.95, 0.11, 0.95, crop.watered ? palette.wet : palette.tilled, { texture: "soil" });
    soil.position.y = 0.1;
    g.add(soil);
    if (crop.seedId) addCropVisual(g, crop);
    cropMeshes.set(crop.id, g);
  }
}

function addCropVisual(g, crop) {
  const data = CROPS[crop.seedId];
  const progress = Math.min(1, crop.growth / data.days);
  const stage = Math.max(1, Math.ceil(progress * 4));
  const cropType = data.crop;
  if (cropType === "corn") {
    const stalkCount = stage >= 3 ? 2 : 1;
    for (let i = 0; i < stalkCount; i += 1) {
      const stalk = cylinder(0.035, 0.28 + stage * 0.16, 0x58a855, 6);
      stalk.position.set((i - 0.5) * 0.18, 0.26 + stage * 0.08, 0);
      g.add(stalk);
      const leaf = box(0.28, 0.04, 0.1, 0x70bd5d, { outline: false });
      leaf.position.set(stalk.position.x + 0.08, stalk.position.y + 0.04, 0.02);
      leaf.rotation.y = i ? -0.8 : 0.8;
      g.add(leaf);
    }
    if (crop.ready) {
      const cob = cylinder(0.055, 0.28, 0xf5c43c, 8);
      cob.rotation.z = 0.45;
      cob.position.set(0.16, 0.66, 0.08);
      g.add(cob);
    }
    return;
  }
  if (cropType === "tomato") {
    const stem = cylinder(0.04, 0.25 + stage * 0.12, 0x4fa64e, 6);
    stem.position.y = 0.28 + stage * 0.07;
    g.add(stem);
    for (let i = 0; i < Math.min(5, stage + 1); i += 1) {
      const leaf = box(0.2, 0.045, 0.12, 0x61b85b, { outline: false });
      leaf.position.set((i - 2) * 0.08, 0.36 + i * 0.035, (i % 2) * 0.1);
      leaf.rotation.y = i % 2 ? -0.7 : 0.7;
      g.add(leaf);
    }
    if (crop.ready) {
      for (const [x, y, z] of [[0.12, 0.56, 0.1], [-0.08, 0.62, -0.04], [0.02, 0.48, 0.16]]) {
        const tomato = sphere(0.075, 0xe2463d, 8, 6);
        tomato.position.set(x, y, z);
        g.add(tomato);
      }
    }
    return;
  }
  if (cropType === "strawberry") {
    for (let i = 0; i < 4 + stage; i += 1) {
      const leaf = box(0.18, 0.045, 0.12, 0x5fb85c, { outline: false });
      leaf.position.set(Math.cos(i) * 0.16, 0.28, Math.sin(i * 1.7) * 0.14);
      leaf.rotation.y = i;
      g.add(leaf);
    }
    if (crop.ready) {
      for (const [x, z] of [[-0.12, 0.05], [0.12, -0.07], [0.02, 0.16]]) {
        const berry = sphere(0.07, 0xdb3152, 8, 6);
        berry.scale.set(0.9, 1.1, 0.9);
        berry.position.set(x, 0.36, z);
        g.add(berry);
      }
    }
    return;
  }
  if (stage === 1) {
    const sprout = cone(0.08, 0.22, palette.leaf, 5);
    sprout.position.y = 0.28;
    g.add(sprout);
  } else {
    const count = stage >= 4 ? 4 : 2;
    for (let i = 0; i < count; i += 1) {
      const stemColor = cropType === "wheat" ? 0xd7ba50 : cropType === "potato" ? 0x5aa95a : palette.leaf;
      const stem = cylinder(0.04, 0.18 + stage * 0.1, stemColor, 6);
      stem.position.set((i - (count - 1) / 2) * 0.12, 0.26 + stage * 0.06, (i % 2) * 0.08);
      g.add(stem);
      const leaf = box(0.22, 0.05, 0.12, stemColor, { outline: false });
      leaf.position.set(stem.position.x, stem.position.y + 0.12, stem.position.z + 0.02);
      leaf.rotation.y = i % 2 ? -0.7 : 0.7;
      g.add(leaf);
    }
  }
  if (crop.ready) {
    const fruitColor = data.crop === "potato" ? 0xc79a57 : data.crop === "carrot" ? palette.carrot : data.crop === "tomato" ? 0xe2463d : data.crop === "corn" ? 0xf5c43c : data.crop === "strawberry" ? 0xdb3152 : 0xe2ce6c;
    if (cropType === "wheat") {
      for (const x of [-0.12, 0.02, 0.14]) {
        const head = cone(0.06, 0.22, fruitColor, 6);
        head.position.set(x, 0.7, 0.08);
        g.add(head);
      }
    } else {
      const fruit = cropType === "carrot" ? cone(0.09, 0.2, fruitColor, 7) : sphere(0.12, fruitColor, 8, 6);
      fruit.position.set(0.06, cropType === "carrot" ? 0.32 : 0.52, 0.12);
      g.add(fruit);
    }
  }
}

function buildAnimals() {
  for (const animal of state.animals) {
    const group = animal.type === "chicken" ? makeChicken() : makeCow();
    group.position.set(animal.x, 0, animal.z);
    group.userData.animal = animal;
    group.userData.targetRotationY = 0;
    world.add(group);
    objects.set(animal.id, group);
    collisions.push({ x: animal.x, z: animal.z, w: animal.type === "cow" ? 0.9 : 0.5, d: animal.type === "cow" ? 0.7 : 0.5, id: animal.id, animal: true });
  }
}

function makeChicken() {
  const g = new THREE.Group();
  const body = sphere(0.34, 0xfff7dc, 14, 9);
  body.scale.set(0.95, 0.82, 1.08);
  body.position.y = 0.36;
  g.add(body);
  const chest = sphere(0.2, 0xffffff, 10, 6);
  chest.scale.set(0.8, 0.55, 0.52);
  chest.position.set(0, 0.37, 0.25);
  g.add(chest);
  const head = sphere(0.23, 0xfff7dc, 12, 8);
  head.position.set(0.02, 0.69, 0.27);
  g.add(head);
  for (const x of [-0.055, 0, 0.055]) {
    const comb = sphere(0.055, palette.red, 8, 5);
    comb.scale.set(0.85, 1.32, 0.68);
    comb.position.set(x, 0.91 + (x === 0 ? 0.04 : 0), 0.27);
    g.add(comb);
  }
  const beak = cone(0.075, 0.18, palette.gold, 4);
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0.02, 0.69, 0.5);
  g.add(beak);
  for (const x of [-0.07, 0.07]) {
    const eye = sphere(0.025, 0x2d241d, 6, 4);
    eye.position.set(x, 0.75, 0.46);
    g.add(eye);
  }
  for (const x of [-0.08, 0.08]) {
    const foot = box(0.08, 0.035, 0.16, 0xf2b23a, { outline: false });
    foot.position.set(x, 0.055, -0.02);
    g.add(foot);
  }
  for (const x of [-0.27, 0.27]) {
    const wing = sphere(0.16, 0xf0e7ca, 8, 5);
    wing.scale.set(0.55, 0.74, 1.04);
    wing.position.set(x, 0.37, 0.02);
    g.add(wing);
  }
  return g;
}

function makeCow() {
  const g = new THREE.Group();
  const body = sphere(0.5, 0xf8f3df, 14, 9);
  body.scale.set(1.42, 0.78, 0.88);
  body.position.y = 0.5;
  g.add(body);
  const head = sphere(0.28, 0xf8f3df, 12, 8);
  head.scale.set(1.08, 0.96, 0.92);
  head.position.set(0.62, 0.64, -0.03);
  g.add(head);
  for (const [x, z, sx, sz] of [[-0.28, -0.22, 1.55, 0.85], [0.1, 0.24, 1.2, 0.8], [0.42, -0.14, 0.9, 0.72]]) {
    const spot = sphere(0.13, 0x2f2a27, 8, 5);
    spot.scale.set(sx, 0.2, sz);
    spot.position.set(x, 0.78, z);
    g.add(spot);
  }
  const snout = sphere(0.15, 0xe9b6a6, 10, 6);
  snout.scale.set(1.24, 0.78, 0.9);
  snout.position.set(0.84, 0.55, -0.04);
  g.add(snout);
  for (const z of [-0.08, 0.08]) {
    const nostril = sphere(0.018, 0x8a635b, 6, 4);
    nostril.position.set(0.96, 0.56, z);
    g.add(nostril);
  }
  for (const z of [-0.11, 0.11]) {
    const eye = sphere(0.028, 0x2b241d, 6, 4);
    eye.position.set(0.76, 0.71, z);
    g.add(eye);
  }
  for (const z of [-0.16, 0.12]) {
    const ear = cone(0.08, 0.18, 0xf5efe0, 5);
    ear.rotation.z = Math.PI / 2;
    ear.position.set(0.56, 0.82, z);
    g.add(ear);
  }
  for (const z of [-0.12, 0.1]) {
    const horn = cone(0.045, 0.16, 0xf2ddb5, 6);
    horn.rotation.z = -Math.PI / 2;
    horn.position.set(0.58, 0.91, z);
    g.add(horn);
  }
  for (const [x, z] of [[-0.42, -0.24], [-0.42, 0.24], [0.34, -0.24], [0.34, 0.24]]) {
    const leg = box(0.13, 0.36, 0.13, 0x3f332d);
    leg.position.set(x, 0.18, z);
    g.add(leg);
  }
  const tail = cylinder(0.018, 0.34, 0x3f332d, 6);
  tail.rotation.z = -0.55;
  tail.position.set(-0.74, 0.62, 0.02);
  g.add(tail);
  const tailTip = sphere(0.055, 0x2f2a27, 6, 4);
  tailTip.position.set(-0.84, 0.49, 0.02);
  g.add(tailTip);
  return g;
}

function buildPlayer() {
  while (player.children.length) player.remove(player.children[0]);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.52, 24), new THREE.MeshBasicMaterial({ color: 0x2e7d4f, transparent: true, opacity: 0.2 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  player.add(shadow);
  playerParts.body = box(0.48, 0.54, 0.36, palette.shirt[0]);
  playerParts.body.position.y = 0.44;
  player.add(playerParts.body);
  playerParts.head = sphere(0.24, palette.skin[0], 12, 8);
  playerParts.head.position.y = 0.92;
  player.add(playerParts.head);
  playerParts.hair = sphere(0.25, palette.hair[0], 12, 6);
  playerParts.hair.scale.set(1, 0.48, 0.9);
  playerParts.hair.position.y = 1.14;
  player.add(playerParts.hair);
  playerParts.hairBangs = box(0.34, 0.08, 0.14, palette.hair[0], { outline: false });
  playerParts.hairBangs.position.set(0, 1.04, -0.18);
  player.add(playerParts.hairBangs);
  const face = new THREE.Group();
  for (const x of [-0.075, 0.075]) {
    const eye = sphere(0.022, 0x33251f, 8, 4);
    eye.position.set(x, 0.94, -0.225);
    face.add(eye);
  }
  playerParts.face = face;
  player.add(face);
  playerParts.leftArm = box(0.14, 0.42, 0.14, palette.shirt[0]);
  playerParts.leftArm.position.set(-0.35, 0.44, 0);
  player.add(playerParts.leftArm);
  playerParts.rightArm = box(0.14, 0.42, 0.14, palette.shirt[0]);
  playerParts.rightArm.position.set(0.35, 0.44, 0);
  player.add(playerParts.rightArm);
  playerParts.leftLeg = box(0.16, 0.3, 0.16, palette.pants[0]);
  playerParts.leftLeg.position.set(-0.12, 0.15, 0.1);
  player.add(playerParts.leftLeg);
  playerParts.rightLeg = box(0.16, 0.3, 0.16, palette.pants[0]);
  playerParts.rightLeg.position.set(0.12, 0.15, 0.1);
  player.add(playerParts.rightLeg);
  playerParts.leftShoe = box(0.18, 0.09, 0.22, palette.shoes[0]);
  playerParts.leftShoe.position.set(-0.12, 0.04, 0.2);
  player.add(playerParts.leftShoe);
  playerParts.rightShoe = box(0.18, 0.09, 0.22, palette.shoes[0]);
  playerParts.rightShoe.position.set(0.12, 0.04, 0.2);
  player.add(playerParts.rightShoe);
  const scarf = box(0.42, 0.08, 0.38, 0xffd36f, { outline: false });
  scarf.position.y = 0.72;
  playerParts.scarf = scarf;
  player.add(scarf);
}

function updatePlayerStyle() {
  const a = state?.appearance || createAppearance;
  playerParts.body.material = material(palette.shirt[a.shirt]);
  playerParts.leftArm.material = material(palette.shirt[a.shirt]);
  playerParts.rightArm.material = material(palette.shirt[a.shirt]);
  playerParts.head.material = material(palette.skin[a.skin]);
  playerParts.hair.material = material(palette.hair[a.hair]);
  playerParts.hairBangs.material = material(palette.hair[a.hair]);
  playerParts.leftLeg.material = material(palette.pants[a.pants]);
  playerParts.rightLeg.material = material(palette.pants[a.pants]);
  playerParts.leftShoe.visible = !a.barefoot;
  playerParts.rightShoe.visible = !a.barefoot;
  playerParts.leftShoe.material = material(palette.shoes[a.shoes]);
  playerParts.rightShoe.material = material(palette.shoes[a.shoes]);
}

function buildInteriorIfNeeded() {
  if (state.mode !== "house") return;
  clearWorld();
  const interiorDev = interiorDevValues();
  const floor = box(9, 0.12, 7, 0xdabf8b, { outline: false, texture: "wood" });
  floor.position.y = -0.06;
  world.add(floor);

  const backWall = box(9, 1.32, 0.18, 0xf3d8ad, { outline: false });
  backWall.position.set(0, 0.6, -3.36);
  world.add(backWall);
  const leftWall = box(0.18, 1.32, 7, 0xf0d1a3, { outline: false });
  leftWall.position.set(-4.5, 0.6, 0);
  world.add(leftWall);
  const cornerFill = box(0.18, 1.32, 0.18, 0xf2d4a9, { outline: false });
  cornerFill.position.set(-4.5, 0.6, -3.36);
  world.add(cornerFill);
  const backTopTrim = box(8.96, 0.08, 0.1, 0xe8c99b, { outline: false });
  backTopTrim.position.set(0, 1.28, -3.23);
  world.add(backTopTrim);
  const leftTopTrim = box(0.1, 0.08, 6.96, 0xe3bf8e, { outline: false });
  leftTopTrim.position.set(-4.31, 1.28, 0);
  world.add(leftTopTrim);
  const backBase = box(8.96, 0.16, 0.12, 0xc29668, { texture: "wood", outline: false });
  backBase.position.set(0, 0.13, -3.18);
  world.add(backBase);
  const leftBase = box(0.12, 0.16, 6.96, 0xc29668, { texture: "wood", outline: false });
  leftBase.position.set(-4.27, 0.13, 0);
  world.add(leftBase);
  const cornerBase = box(0.18, 0.16, 0.18, 0xc29668, { texture: "wood", outline: false });
  cornerBase.position.set(-4.27, 0.13, -3.18);
  world.add(cornerBase);

  const kitchenFloor = box(2.72, 0.026, 1.24, 0xe7d2ad, { outline: false, castShadow: false });
  kitchenFloor.position.set(2.14, 0.035, -2.56);
  world.add(kitchenFloor);
  for (const x of [1.46, 2.14, 2.82]) {
    const grout = box(0.018, 0.028, 1.08, 0xd6bd95, { outline: false, castShadow: false });
    grout.position.set(x, 0.052, -2.58);
    world.add(grout);
  }
  for (const z of [-2.88, -2.48, -2.08]) {
    const grout = box(2.46, 0.028, 0.018, 0xd6bd95, { outline: false, castShadow: false });
    grout.position.set(2.14, 0.054, z);
    world.add(grout);
  }

  for (const [x, z, w, d] of [[0, -3.08, 8.86, 0.07], [-4.16, 0, 0.07, 6.86]]) {
    const trim = box(w, 0.22, d, 0xc29668, { texture: "wood", outline: false });
    trim.position.set(x, 0.06, z);
    world.add(trim);
  }

  const bed = new THREE.Group();
  bed.position.set(-2.85, 0, -2.18);
  const bedFrame = box(1.62, 0.32, 0.98, 0x9a6234, { texture: "wood" });
  bedFrame.position.y = 0.18;
  bed.add(bedFrame);
  const mattress = box(1.42, 0.16, 0.78, 0xfff4dd, { outline: false });
  mattress.position.y = 0.42;
  bed.add(mattress);
  const blanket = box(0.9, 0.13, 0.82, 0x8ec9dd, { outline: false });
  blanket.position.set(0.22, 0.53, 0);
  bed.add(blanket);
  const pillow = box(0.42, 0.14, 0.55, 0xfffbef, { outline: false });
  pillow.position.set(-0.46, 0.58, 0);
  bed.add(pillow);
  const headboard = box(0.12, 0.68, 1.05, 0x7b4d2a, { texture: "wood" });
  headboard.position.set(-0.84, 0.38, 0);
  bed.add(headboard);
  world.add(bed);
  collisions.push({ x: -2.85, z: -2.18, w: 1.62, d: 0.98, id: "bed" });
  interactionObjects.push({ id: "bed", type: "bed", group: bed, object: { id: "bed", type: "bed", x: -2.85, z: -2.18 } });

  const fridge = new THREE.Group();
  fridge.position.set(2.85, 0, -2.74);
  const fridgeBody = box(0.72, 1.34, 0.58, 0xf5f7ed);
  fridgeBody.position.y = 0.67;
  fridge.add(fridgeBody);
  const freezerLine = box(0.62, 0.035, 0.035, 0xc8d0c4, { outline: false });
  freezerLine.position.set(0, 0.92, -0.31);
  fridge.add(freezerLine);
  const handleTop = box(0.055, 0.28, 0.055, 0xb8c0ba, { outline: false });
  handleTop.position.set(-0.29, 1.08, -0.33);
  fridge.add(handleTop);
  const handleBottom = box(0.055, 0.46, 0.055, 0xb8c0ba, { outline: false });
  handleBottom.position.set(-0.29, 0.55, -0.33);
  fridge.add(handleBottom);
  for (const [x, y, color] of [[0.08, 1.1, 0xffd36f], [0.22, 0.72, 0x8fc6e8], [0.02, 0.52, 0xf08a87]]) {
    const magnet = box(0.1, 0.08, 0.018, color, { outline: false });
    magnet.position.set(x, y, -0.34);
    fridge.add(magnet);
  }
  world.add(fridge);
  collisions.push({ x: 2.85, z: -2.74, w: 0.72, d: 0.58, id: "fridge" });
  interactionObjects.push({ id: "fridge", type: "fridge", group: fridge, object: { id: "fridge", type: "fridge", x: 2.85, z: -2.74 } });

  const kitchen = new THREE.Group();
  kitchen.position.set(1.64, 0, -2.74);
  const counter = box(1.5, 0.68, 0.58, 0xb98458, { texture: "wood" });
  counter.position.y = 0.34;
  kitchen.add(counter);
  const counterTop = box(1.58, 0.08, 0.64, 0xf2d69d, { outline: false });
  counterTop.position.y = 0.72;
  kitchen.add(counterTop);
  const stove = box(0.52, 0.065, 0.42, 0x3d4b52, { outline: false });
  stove.position.set(0.36, 0.79, -0.03);
  kitchen.add(stove);
  for (const x of [0.25, 0.47]) {
    const burner = cylinder(0.055, 0.016, 0x20282d, 12);
    burner.position.set(x, 0.84, -0.1);
    kitchen.add(burner);
  }
  const sink = box(0.32, 0.04, 0.22, 0xbdd4d0, { outline: false });
  sink.position.set(-0.38, 0.8, -0.05);
  kitchen.add(sink);
  const towel = box(0.16, 0.22, 0.035, 0x8ec9dd, { outline: false });
  towel.position.set(-0.7, 0.43, -0.32);
  kitchen.add(towel);
  world.add(kitchen);
  const backsplash = box(1.58, 0.36, 0.055, 0xf6dfb6, { outline: false });
  backsplash.position.set(1.64, 0.72, -3.08);
  world.add(backsplash);
  const connectorTop = box(0.34, 0.08, 0.62, 0xf2d69d, { outline: false });
  connectorTop.position.set(2.48, 0.73, -2.74);
  world.add(connectorTop);
  collisions.push({ x: 1.64, z: -2.74, w: 1.5, d: 0.58, id: "kitchen" });
  interactionObjects.push({ id: "kitchen", type: "kitchen", group: kitchen, object: { id: "kitchen", type: "kitchen", x: 1.64, z: -2.74 } });

  const stool = new THREE.Group();
  stool.position.set(0.02, 0, -1.18);
  const seat = cylinder(0.18, 0.08, 0x9a6234, 10);
  seat.position.y = 0.42;
  stool.add(seat);
  for (const [x, z] of [[-0.1, -0.1], [0.1, -0.1], [-0.1, 0.1], [0.1, 0.1]]) {
    const leg = cylinder(0.025, 0.4, 0x7b4d2a, 6);
    leg.position.set(x, 0.2, z);
    stool.add(leg);
  }
  world.add(stool);
  collisions.push({ x: 0.02, z: -1.18, w: 0.36, d: 0.36, id: "kitchenStool" });

  const rug = box(2.35, 0.025, 1.35, 0xe58f84, { outline: false, castShadow: false });
  rug.position.set(-0.1, 0.03, 0.82);
  world.add(rug);
  for (const z of [0.5, 0.86, 1.22]) {
    const stripe = box(1.95, 0.028, 0.08, 0xffc6ac, { outline: false, castShadow: false });
    stripe.position.set(-0.1, 0.055, z);
    world.add(stripe);
  }

  const table = new THREE.Group();
  table.position.set(-0.1, 0, 0.72);
  const top = box(1.16, 0.14, 0.76, 0x9a6234, { texture: "wood" });
  top.position.y = 0.5;
  table.add(top);
  for (const [x, z] of [[-0.45, -0.28], [0.45, -0.28], [-0.45, 0.28], [0.45, 0.28]]) {
    const leg = box(0.09, 0.5, 0.09, 0x7b4d2a, { texture: "wood" });
    leg.position.set(x, 0.25, z);
    table.add(leg);
  }
  const bowl = sphere(0.15, 0xffdf8a, 10, 5);
  bowl.scale.set(1, 0.35, 1);
  bowl.position.set(0.18, 0.62, -0.08);
  table.add(bowl);
  world.add(table);
  collisions.push({ x: -0.1, z: 0.72, w: 1.16, d: 0.76, id: "table" });

  const cabinet = new THREE.Group();
  cabinet.position.set(-3.86, 0, -0.92);
  const body = box(0.52, 1.16, 0.78, 0x9d6b42, { texture: "wood" });
  body.position.y = 0.58;
  cabinet.add(body);
  const topShelf = box(0.58, 0.12, 0.84, 0x7b4d2a, { texture: "wood" });
  topShelf.position.y = 1.18;
  cabinet.add(topShelf);
  for (const x of [-0.18, 0.18]) {
    const door = box(0.035, 0.82, 0.32, 0xb78350, { texture: "wood", outline: false });
    door.position.set(0.28, 0.56, x);
    cabinet.add(door);
    const knob = sphere(0.028, 0xf2d07b, 8, 4);
    knob.position.set(0.31, 0.58, x * 0.55);
    cabinet.add(knob);
  }
  const drawer = box(0.035, 0.18, 0.62, 0x8a5734, { texture: "wood", outline: false });
  drawer.position.set(0.31, 0.98, 0);
  cabinet.add(drawer);
  world.add(cabinet);
  collisions.push({ x: -3.86, z: -0.92, w: 0.52, d: 0.78, id: "cabinet" });

  const sideChair = new THREE.Group();
  sideChair.position.set(-0.98, 0, 0.72);
  const sideSeat = box(0.42, 0.1, 0.38, 0x9a6234, { texture: "wood" });
  sideSeat.position.y = 0.34;
  sideChair.add(sideSeat);
  const sideBack = box(0.1, 0.48, 0.42, 0x7b4d2a, { texture: "wood" });
  sideBack.position.set(-0.22, 0.54, 0);
  sideChair.add(sideBack);
  for (const [x, z] of [[-0.14, -0.12], [0.14, -0.12], [-0.14, 0.12], [0.14, 0.12]]) {
    const leg = box(0.045, 0.32, 0.045, 0x7b4d2a, { texture: "wood" });
    leg.position.set(x, 0.16, z);
    sideChair.add(leg);
  }
  world.add(sideChair);
  collisions.push({ x: -0.98, z: 0.72, w: 0.46, d: 0.42, id: "sideChair" });
  const backPicture = box(0.62, 0.38, 0.028, 0x8ec9dd, { outline: false });
  backPicture.position.set(-1.25, 0.9, -3.22);
  world.add(backPicture);
  const backPictureFrame = box(0.72, 0.46, 0.02, 0x9a6234, { texture: "wood", outline: false });
  backPictureFrame.position.set(-1.25, 0.9, -3.24);
  world.add(backPictureFrame);
  const leftWindow = box(0.035, 0.52, 0.72, 0xaee7f2, { outline: false });
  leftWindow.position.set(-4.22, 0.86, 0.95);
  world.add(leftWindow);
  const leftWindowSill = box(0.055, 0.08, 0.84, 0xfff1cf, { outline: false });
  leftWindowSill.position.set(-4.17, 0.52, 0.95);
  world.add(leftWindowSill);
  const smallMat = box(0.9, 0.025, 0.55, 0x8ec9dd, { outline: false, castShadow: false });
  smallMat.position.set(2.18, 0.035, -1.43);
  world.add(smallMat);

  const doorMarker = new THREE.Object3D();
  doorMarker.position.set(0, 0, 3.15);
  world.add(doorMarker);
  interactionObjects.push({ id: "houseDoor", type: "houseDoor", group: doorMarker, object: { id: "houseDoor", type: "houseDoor", x: 0, z: 3.15 } });
}

function resolvePlayerOverlap() {
  if (!state || !collides(player.position.x, player.position.z)) return;
  const candidates = state.mode === "house"
    ? [[0, 2.25], [-1.2, 2.05], [1.2, 2.05], [-1.4, 0.2], [1.25, 0.35], [0, -0.65], [-3.25, -0.2]]
    : [[state.player.x, state.player.z], [state.player.x + 0.8, state.player.z], [state.player.x - 0.8, state.player.z], [state.player.x, state.player.z + 0.8], [state.player.x, state.player.z - 0.8], [0, 1.1]];
  const start = new THREE.Vector3(player.position.x, 0, player.position.z);
  candidates.sort((a, b) => Math.hypot(a[0] - start.x, a[1] - start.z) - Math.hypot(b[0] - start.x, b[1] - start.z));
  for (const [x, z] of candidates) {
    if (!collides(x, z)) {
      player.position.set(x, 0, z);
      state.player = { x, z };
      return;
    }
  }
}

function applyWeather(weatherId) {
  const weather = WEATHER.find((item) => item.id === weatherId) || WEATHER[0];
  scene.fog.color.setHex(weather.sky);
  sunLight.intensity = weather.light;
  hemiLight.intensity = weather.id === "rain" ? 1.1 : 1.45;
  ui.weatherLayer.innerHTML = "";
  if (weather.id === "rain") ui.weatherLayer.innerHTML = '<div class="rain"></div>';
  if (weather.id === "wind") ui.weatherLayer.innerHTML = '<div class="wind"></div>';
  document.body.style.background = weather.id === "rain"
    ? "linear-gradient(180deg, #7faabb 0%, #a7bec3 50%, #79a678 100%)"
    : weather.id === "cloudy"
      ? "linear-gradient(180deg, #b2cfd5 0%, #d0e1dd 48%, #94c98d 100%)"
      : "linear-gradient(180deg, #88dff0 0%, #bceef0 48%, #8dd18a 100%)";
}

function randomWeather() {
  const roll = Math.random() * 100;
  let acc = 0;
  for (const weather of WEATHER) {
    acc += weather.chance;
    if (roll <= acc) return weather.id;
  }
  return "sunny";
}

function syncUi() {
  if (!state) return;
  const weather = WEATHER.find((item) => item.id === state.weather);
  ui.farmNameLabel.textContent = state.farmName;
  ui.dateLabel.textContent = dateText();
  ui.weatherLabel.textContent = weather?.name || "Ensolarado";
  ui.moneyLabel.textContent = formatMoney(state.money);
  ui.woodLabel.textContent = `Madeira ${state.resources.wood}/20`;
  ui.stoneLabel.textContent = `Pedra ${state.resources.stone}/20`;
  ui.hayLabel.textContent = `Feno ${state.resources.hay}/500`;
  renderInventory();
}

function renderInventory() {
  ui.inventory.classList.toggle("is-expanded", expandedInventory);
  const visibleSlots = expandedInventory ? 8 : 4;
  ui.inventory.innerHTML = "";
  for (let i = 0; i < visibleSlots; i += 1) {
    const button = renderSlot(state.inventory[i], { container: "inventory", index: i, selected: activeSelection === "item" && selectedSlot === i });
    button.addEventListener("click", () => {
      selectInventorySlot(i);
    });
    ui.inventory.append(button);
  }
}

function setActiveSelection(mode) {
  activeSelection = mode === "item" ? "item" : "tool";
  if (state) state.activeSelection = activeSelection;
  ui.toolButton?.classList.toggle("is-selected", activeSelection === "tool");
  ui.toolRadial?.querySelectorAll("[data-tool]").forEach((button) => {
    button.classList.toggle("is-selected", activeSelection === "tool" && button.dataset.tool === selectedTool);
  });
  renderInventory();
  updateActionButton();
}

function selectInventorySlot(index) {
  selectedSlot = index;
  if (state) state.selectedSlot = selectedSlot;
  ui.toolRadial?.classList.remove("is-open");
  setActiveSelection("item");
}

function renderSlot(stack, meta) {
  const button = document.createElement("button");
  button.className = `slot ${meta.selected ? "is-selected" : ""} ${isFarmProduct(stack) ? "has-seal" : ""}`;
  button.type = "button";
  button.draggable = Boolean(stack);
  button.dataset.container = meta.container;
  button.dataset.index = String(meta.index);
  button.innerHTML = stack
    ? `<span class="slot-icon">${renderIcon(ITEMS[stack.id]?.iconKey || "unknown")}</span><small>${stack.qty}</small>${isFarmProduct(stack) ? `<em title="Produto da Fazenda">${renderIcon("farm_seal")}</em>` : ""}`
    : "";
  button.title = stack ? `${itemDisplayName(stack)} ${itemOriginText(stack)}`.trim() : "Vazio";
  button.addEventListener("dragstart", (event) => {
    if (!stack) return event.preventDefault();
    event.dataTransfer.setData("application/json", JSON.stringify(meta));
    event.dataTransfer.effectAllowed = "move";
  });
  button.addEventListener("dragover", (event) => event.preventDefault());
  button.addEventListener("drop", (event) => {
    event.preventDefault();
    const raw = event.dataTransfer.getData("application/json") || event.dataTransfer.getData("text/plain");
    if (!raw) return;
    const from = raw.startsWith("{") ? JSON.parse(raw) : { container: "inventory", index: Number(raw) };
    handleDrop(from, meta);
  });
  button.addEventListener("pointerdown", () => {
    clearTimeout(longPressTimer);
    if (!stack) return;
    longPressTimer = setTimeout(() => openQuantityPopup(meta), 560);
  });
  button.addEventListener("pointerup", () => clearTimeout(longPressTimer));
  button.addEventListener("pointerleave", () => clearTimeout(longPressTimer));
  button.addEventListener("pointercancel", () => clearTimeout(longPressTimer));
  return button;
}

function moveInventoryStack(from, to) {
  if (from === to) return;
  const a = state.inventory[from];
  const b = state.inventory[to];
  if (a && b && compatibleStacks(a, b)) {
    const max = stackLimit(a);
    const move = Math.min(a.qty, max - b.qty);
    b.qty += move;
    a.qty -= move;
    if (a.qty <= 0) state.inventory[from] = null;
  } else {
    state.inventory[from] = b;
    state.inventory[to] = a;
  }
  syncUi();
}

function addItem(id, qty, origin = "fazenda") {
  const item = ITEMS[id];
  if (!item) return 0;
  const stack = normalizeStack({ id, qty, origin });
  if (!stack) return 0;
  let remaining = qty;
  for (const slot of state.inventory) {
    if (slot && compatibleStacks(slot, stack) && slot.qty < item.stack) {
      const add = Math.min(remaining, item.stack - slot.qty);
      slot.qty += add;
      remaining -= add;
      if (remaining <= 0) break;
    }
  }
  for (let i = 0; i < state.inventory.length && remaining > 0; i += 1) {
    if (!state.inventory[i]) {
      const add = Math.min(remaining, item.stack);
      state.inventory[i] = cloneStack(stack, add);
      remaining -= add;
    }
  }
  syncUi();
  return qty - remaining;
}

function removeItemFromSlot(slotIndex, qty = 1) {
  const slot = state.inventory[slotIndex];
  if (!slot || slot.qty < qty) return false;
  slot.qty -= qty;
  if (slot.qty <= 0) state.inventory[slotIndex] = null;
  syncUi();
  return true;
}

function selectedItem() {
  return activeSelection === "item" ? state.inventory[selectedSlot] : null;
}

function getContainer(meta) {
  if (meta.container === "inventory") return state.inventory;
  if (!activeStorage) return null;
  if (meta.container === "storage") return activeStorage.items;
  return null;
}

function handleDrop(from, to) {
  if (!state) return;
  if (from.container === "inventory" && to.container === "inventory") {
    moveInventoryStack(from.index, to.index);
    renderActiveViews();
    return;
  }
  if (!activeStorage) return;
  if (from.container === to.container) {
    moveWithinContainer(from.container, from.index, to.index);
  } else if (from.container === "inventory" && to.container === "storage") {
    transferInventoryToStorage(from.index);
  } else if (from.container === "storage" && to.container === "inventory") {
    transferStorageToInventory(from.index, to.index);
  }
  renderActiveViews();
}

function moveWithinContainer(containerName, fromIndex, toIndex) {
  const container = getContainer({ container: containerName });
  if (!container || fromIndex === toIndex) return;
  const source = container[fromIndex];
  const target = container[toIndex];
  if (!source) return;
  if (target && compatibleStacks(source, target)) {
    const moved = Math.min(source.qty, stackLimit(source) - target.qty);
    target.qty += moved;
    source.qty -= moved;
    if (source.qty <= 0) container[fromIndex] = null;
  } else {
    container[fromIndex] = target || null;
    container[toIndex] = source;
  }
  compactInfiniteStorage(containerName);
}

function transferInventoryToStorage(invIndex, qty = state.inventory[invIndex]?.qty) {
  const stack = state.inventory[invIndex];
  if (!stack || qty <= 0) return false;
  const moving = cloneStack(stack, Math.min(qty, stack.qty));
  const validation = validateStorageAccepts(activeStorage.type, moving);
  if (!validation.ok) {
    toast(validation.message);
    return false;
  }
  addStackToStorage(activeStorage.items, moving);
  stack.qty -= moving.qty;
  if (stack.qty <= 0) state.inventory[invIndex] = null;
  return true;
}

function transferStorageToInventory(storageIndex, invIndex, qty = activeStorage.items[storageIndex]?.qty) {
  const stack = activeStorage.items[storageIndex];
  if (!stack || qty <= 0) return false;
  const moving = cloneStack(stack, Math.min(qty, stack.qty));
  if (!canFitInventoryStackAt(moving, invIndex)) {
    toast("Inventário cheio.");
    return false;
  }
  const target = state.inventory[invIndex];
  if (!target) {
    state.inventory[invIndex] = moving;
    stack.qty -= moving.qty;
    if (stack.qty <= 0) activeStorage.items[storageIndex] = null;
  } else if (compatibleStacks(target, moving)) {
    target.qty += moving.qty;
    stack.qty -= moving.qty;
    if (stack.qty <= 0) activeStorage.items[storageIndex] = null;
  } else {
    if (moving.qty !== stack.qty) {
      toast("Inventário cheio.");
      return false;
    }
    state.inventory[invIndex] = cloneStack(stack);
    activeStorage.items[storageIndex] = target;
  }
  compactInfiniteStorage("storage");
  return true;
}

function addStackToStorage(storage, stack) {
  let remaining = stack.qty;
  for (const slot of storage) {
    if (slot && compatibleStacks(slot, stack) && slot.qty < stackLimit(slot)) {
      const add = Math.min(remaining, stackLimit(slot) - slot.qty);
      slot.qty += add;
      remaining -= add;
      if (remaining <= 0) return;
    }
  }
  while (remaining > 0) {
    const add = Math.min(remaining, stackLimit(stack));
    storage.push(cloneStack(stack, add));
    remaining -= add;
  }
}

function canFitInventoryStackAt(stack, index) {
  const target = state.inventory[index];
  if (!target) return stack.qty <= stackLimit(stack);
  if (compatibleStacks(target, stack)) return target.qty + stack.qty <= stackLimit(target);
  return true;
}

function addStackToInventoryAuto(stack) {
  let remaining = stack.qty;
  for (const slot of state.inventory) {
    if (slot && compatibleStacks(slot, stack) && slot.qty < stackLimit(slot)) {
      const add = Math.min(remaining, stackLimit(slot) - slot.qty);
      slot.qty += add;
      remaining -= add;
      if (remaining <= 0) return stack.qty;
    }
  }
  for (let i = 0; i < state.inventory.length && remaining > 0; i += 1) {
    if (!state.inventory[i]) {
      const add = Math.min(remaining, stackLimit(stack));
      state.inventory[i] = cloneStack(stack, add);
      remaining -= add;
    }
  }
  return stack.qty - remaining;
}

function validateStorageAccepts(type, stack) {
  const item = ITEMS[stack.id];
  if (type === "chest") return { ok: true };
  if (type === "fridge") {
    const ok = ["cultivo", "ingrediente", "comida"].includes(item.category);
    return { ok, message: "Esse item não pode ir para a geladeira." };
  }
  if (type === "sale") {
    const ok = isSellable(stack);
    return { ok, message: "Esse item não pode ser vendido." };
  }
  return { ok: false, message: "Ação inválida." };
}

function isSellable(stack) {
  const item = ITEMS[stack.id];
  return Boolean(item && item.sell > 0);
}

function inventoryCapacityForItem(id, origin = "construido") {
  const stack = normalizeStack({ id, qty: 1, origin });
  if (!stack) return 0;
  let capacity = 0;
  for (const slot of state.inventory) {
    if (!slot) capacity += stackLimit(stack);
    else if (compatibleStacks(slot, stack)) capacity += Math.max(0, stackLimit(slot) - slot.qty);
  }
  return capacity;
}

function compactInfiniteStorage(containerName) {
  if (containerName === "storage" && activeStorage) activeStorage.items = activeStorage.items.filter(Boolean);
  if (activeStorage?.type === "chest") state.chest = activeStorage.items;
  if (activeStorage?.type === "fridge") state.fridge = activeStorage.items;
  if (activeStorage?.type === "sale") state.saleCrate = activeStorage.items;
}

function selectedCropTile() {
  return worldToTile(player.position.x, player.position.z + 0.75);
}

function worldToTile(x, z) {
  return { x: Math.round(x), z: Math.round(z) };
}

function tileDistanceFromPlayer(tile) {
  return Math.hypot(tile.x - player.position.x, tile.z - player.position.z);
}

function cropAt(tile) {
  return state.crops.find((crop) => crop.x === tile.x && crop.z === tile.z);
}

function selectedConstructionItem() {
  const slot = selectedItem();
  return slot && ITEMS[slot.id]?.category === "construcao" ? slot : null;
}

function constructionTypeForItem(itemId) {
  if (itemId === "fence") return "placedFence";
  if (itemId === "path") return "stonePath";
  return null;
}

function isVisibleObjectForPlacement(obj) {
  if (isDeliveryBox(obj.type) && !hasPendingDelivery(obj.type)) return false;
  if (obj.type === "expansionSign" && !isExpansionVisible(obj.dir)) return false;
  return true;
}

function isPlacementOccupied(tile) {
  if (cropAt(tile)) return true;
  if (Math.hypot(player.position.x - tile.x, player.position.z - tile.z) < 0.65) return true;
  if (state.animals.some((animal) => Math.hypot(animal.x - tile.x, animal.z - tile.z) < (animal.type === "cow" ? 0.85 : 0.55))) return true;
  return state.objects.some((obj) => {
    if (!isVisibleObjectForPlacement(obj)) return false;
    const w = obj.w || 0.8;
    const d = obj.d || 0.8;
    return Math.abs(obj.x - tile.x) < w / 2 + 0.45 && Math.abs(obj.z - tile.z) < d / 2 + 0.45;
  });
}

function isOverviewMovable(obj) {
  if (!obj || !isVisibleObjectForPlacement(obj)) return false;
  if (obj.type === "chest") return true;
  if (obj.type === "workbench") return obj.repaired !== false;
  if (obj.type === "placedFence" || obj.type === "stonePath") return true;
  if (obj.type === "decor") return true;
  return false;
}

function overviewObjectName(obj) {
  const names = {
    chest: "Baú",
    workbench: "Bancada restaurada",
    workbenchBroken: "Bancada quebrada",
    placedFence: "Cerca",
    stonePath: "Caminho de Pedra",
    house: "Casa",
    silo: "Silo",
    coop: "Galinheiro",
    cowBarn: "Curral",
    phone: "Orelhão",
    saleCrate: "Caixote de Venda",
    seedBox: "Caixa de Sementes",
    ingredientBox: "Caixa de Ingredientes",
    recipeBox: "Caixa de Receitas",
    expansionSign: "Placa de expansão",
  };
  return names[obj?.type] || "Objeto";
}

function overviewObjectAt(point) {
  let best = null;
  for (const obj of state.objects) {
    if (!isVisibleObjectForPlacement(obj)) continue;
    if (obj.type === "grass" || obj.type === "branch" || obj.type === "smallRock" || obj.type === "bigRock" || obj.type === "tree" || obj.type === "log") continue;
    const w = obj.w || 0.8;
    const d = obj.d || 0.8;
    const dx = Math.abs(obj.x - point.x);
    const dz = Math.abs(obj.z - point.z);
    const hit = dx <= w / 2 + 0.35 && dz <= d / 2 + 0.35;
    const dist = Math.hypot(obj.x - point.x, obj.z - point.z);
    if (hit && (!best || dist < best.dist)) best = { obj, dist };
  }
  return best?.obj || null;
}

function isMovePlacementOccupied(obj, tile) {
  if (cropAt(tile)) return true;
  if (Math.hypot(player.position.x - tile.x, player.position.z - tile.z) < 0.65) return true;
  if (state.animals.some((animal) => Math.hypot(animal.x - tile.x, animal.z - tile.z) < (animal.type === "cow" ? 0.85 : 0.55))) return true;
  return state.objects.some((other) => {
    if (other.id === obj.id || !isVisibleObjectForPlacement(other)) return false;
    const w = (other.w || 0.8) / 2 + (obj.w || 0.8) / 2;
    const d = (other.d || 0.8) / 2 + (obj.d || 0.8) / 2;
    return Math.abs(other.x - tile.x) < w + 0.08 && Math.abs(other.z - tile.z) < d + 0.08;
  });
}

function validateOverviewPlacement(obj, tile) {
  if (!obj || state.mode !== "farm") return { ok: false, message: "Não pode colocar aqui." };
  const bounds = farmBounds();
  if (tile.x < bounds.minX + 0.5 || tile.x > bounds.maxX - 0.5 || tile.z < bounds.minZ + 0.5 || tile.z > bounds.maxZ - 0.5) {
    return { ok: false, message: "Não pode colocar aqui." };
  }
  if (!isInUnlockedFarmArea(tile.x, tile.z)) return { ok: false, message: "Não pode colocar aqui." };
  if (isMovePlacementOccupied(obj, tile)) return { ok: false, message: "Não pode colocar aqui." };
  return { ok: true };
}

function canPlaceConstruction(tile) {
  if (state.mode !== "farm") return { ok: false, message: "Não pode construir aqui." };
  const bounds = farmBounds();
  if (tile.x < bounds.minX + 0.5 || tile.x > bounds.maxX - 0.5 || tile.z < bounds.minZ + 0.5 || tile.z > bounds.maxZ - 0.5) {
    return { ok: false, message: "Não pode construir aqui." };
  }
  if (!isInUnlockedFarmArea(tile.x, tile.z)) return { ok: false, message: "Não pode construir aqui." };
  if (isPlacementOccupied(tile)) return { ok: false, message: "Não pode construir aqui." };
  return { ok: true };
}

function canTillTile(tile) {
  if (state.mode !== "farm") return false;
  if (!isInUnlockedFarmArea(tile.x, tile.z)) return false;
  if (cropAt(tile)) return false;
  return !isPlacementOccupied(tile);
}

function nearestTillableTile(origin = selectedCropTile(), range = 1.7) {
  const candidates = [];
  for (let dx = -2; dx <= 2; dx += 1) {
    for (let dz = -2; dz <= 2; dz += 1) {
      const tile = { x: Math.round(origin.x + dx), z: Math.round(origin.z + dz) };
      const playerDist = tileDistanceFromPlayer(tile);
      if (playerDist > range || !canTillTile(tile)) continue;
      candidates.push({ tile, originDist: Math.hypot(tile.x - origin.x, tile.z - origin.z), playerDist });
    }
  }
  candidates.sort((a, b) => a.originDist - b.originDist || a.playerDist - b.playerDist);
  return candidates[0]?.tile || null;
}

function tillSoilAt(tile, options = {}) {
  if (state.mode !== "farm") return false;
  if (Math.hypot(tile.x - player.position.x, tile.z - player.position.z) > 1.7) {
    toast("Você precisa chegar mais perto.");
    return true;
  }
  if (!canTillTile(tile)) {
    const fallback = options.allowFallback ? nearestTillableTile(tile) : null;
    if (!fallback) {
      toast("Ação inválida.");
      return true;
    }
    tile = fallback;
  }
  state.crops.push({ id: `crop${Date.now()}`, x: tile.x, z: tile.z, seedId: null, growth: 0, watered: false, ready: false, tilled: true });
  spawnParticles("dirt", new THREE.Vector3(tile.x, 0.35, tile.z));
  toast("Solo arado.");
  rebuildWorld();
  syncUi();
  return true;
}

function actionAtTile(tile) {
  if (state.mode !== "farm") return;
  if (Math.hypot(tile.x - player.position.x, tile.z - player.position.z) > 1.7) return toast("Você precisa chegar mais perto.");
  const currentCrop = cropAt(tile);
  const slot = selectedItem();
  if (currentCrop && !currentCrop.seedId && slot && ITEMS[slot.id]?.category === "semente") {
    return plantSeedAt(currentCrop, slot);
  }
  if (selectedTool === "hoe") {
    if (currentCrop) return toast("Ação inválida.");
    return tillSoilAt(tile);
  }
  if (selectedTool === "water") {
    if (!currentCrop) return toast("Não há solo ou planta para regar.");
    currentCrop.watered = true;
    spawnParticles("water", new THREE.Vector3(tile.x, 0.35, tile.z));
    toast("Canteiro regado.");
    rebuildWorld();
    return;
  }
  if (selectedTool === "pickaxe") {
    if (currentCrop && !currentCrop.seedId) {
      state.crops = state.crops.filter((crop) => crop.id !== currentCrop.id);
      spawnParticles("dirt", new THREE.Vector3(tile.x, 0.25, tile.z));
      toast("Solo removido.");
      rebuildWorld();
      return;
    }
  }
  if (selectedTool === "water") return;
  toast("Ação inválida.");
}

function quickAction() {
  if (!state || isPaused || overviewMode) return;
  ui.toolRadial.classList.remove("is-open");
  const slot = selectedItem();
  const tile = selectedCropTile();
  const crop = cropAt(tile);

  if (activeSelection === "tool" && (selectedTool === "hoe" || selectedTool === "water")) {
    return actionAtTile(tile);
  }

  const plantTarget = nearestPlantableSoil(1.7);
  if (slot && ITEMS[slot.id]?.category === "semente" && plantTarget) return plantSeedAt(plantTarget, slot);
  if (slot && ITEMS[slot.id]?.category === "construcao" && state.mode === "farm") return placeSelectedConstruction();

  if (activeSelection === "tool" && selectedTool === "build" && state.mode === "farm") return toast("Selecione um item de construção.");
  if (activeSelection === "tool" && selectedTool === "scythe" && state.mode === "farm") {
    const grass = nearestGrass(1.45);
    if (grass) return cutGrass(grass);
    if (nearestGrass(4)) return toast("Você precisa chegar mais perto.");
  }
  if (activeSelection === "tool" && selectedTool === "axe" && state.mode === "farm") {
    const target = nearestToolTarget(["tree", "log", "branch", "placedFence"], 1.55);
    if (target) return tryToolOnObject(target);
    if (nearestToolTarget(["tree", "log", "branch", "placedFence"], 4)) return toast("Você precisa chegar mais perto.");
  }
  if (activeSelection === "tool" && selectedTool === "pickaxe" && state.mode === "farm") {
    const target = nearestToolTarget(["smallRock", "bigRock", "stonePath"], 1.55);
    if (target) return tryToolOnObject(target);
    if (nearestToolTarget(["smallRock", "bigRock", "stonePath"], 4)) return toast("Você precisa chegar mais perto.");
  }
  if (crop && !crop.seedId && (!slot || ITEMS[slot.id]?.category !== "semente")) {
    return toast("Selecione uma semente.");
  }
  if (slot && ITEMS[slot.id]?.category === "semente" && crop && !crop.seedId) {
    return plantSeedAt(crop, slot);
  }
  if (slot && ITEMS[slot.id]?.category === "semente" && !crop) return toast("Você precisa de solo arado.");
  const harvestTarget = nearestReadyCrop(1.7);
  if (harvestTarget) return harvestCrop(harvestTarget);
  if (crop?.ready) return harvestCrop(crop);
  if (activeSelection === "tool" && ["axe", "pickaxe", "scythe"].includes(selectedTool)) return toast("Nada para fazer aqui.");
  toast("Nada para fazer aqui.");
}

function nearestInteractionByPriority() {
  const entries = [];
  for (const item of interactionObjects) {
    if (!isInteractionAvailable(item)) continue;
    const pos = item.group.position;
    const dist = Math.hypot(player.position.x - pos.x, player.position.z - pos.z);
    entries.push({ item, dist, priority: actionPriority(item) });
  }
  for (const animal of state.animals) {
    if (animal.petted) continue;
    const group = objects.get(animal.id);
    if (!group) continue;
    const dist = Math.hypot(player.position.x - group.position.x, player.position.z - group.position.z);
    entries.push({ item: { id: animal.id, type: "animal", group, animal }, dist, priority: 5 });
  }
  entries.sort((a, b) => a.priority - b.priority || a.dist - b.dist);
  return entries[0] || null;
}

function actionPriority(item) {
  if (item.type === "house" || item.type === "houseDoor") return 2;
  if (["chest", "fridge", "kitchen", "workbench", "workbenchBroken", "phone", "saleCrate", "bed", "seedBox", "ingredientBox", "recipeBox", "expansionSign", "newspaper", "silo"].includes(item.type)) return 3;
  if (item.type === "coop" || item.type === "cowBarn") return 4;
  if (item.type === "animal") return 5;
  return 9;
}

function nearestReadyCrop(range) {
  let best = null;
  let bestDist = Infinity;
  for (const crop of state.crops) {
    if (!crop.ready) continue;
    const dist = Math.hypot(crop.x - player.position.x, crop.z - player.position.z);
    if (dist <= range && dist < bestDist) {
      best = crop;
      bestDist = dist;
    }
  }
  return best;
}

function nearestPlantableSoil(range) {
  let best = null;
  let bestDist = Infinity;
  for (const crop of state.crops) {
    if (crop.seedId) continue;
    const dist = Math.hypot(crop.x - player.position.x, crop.z - player.position.z);
    if (dist <= range && dist < bestDist) {
      best = crop;
      bestDist = dist;
    }
  }
  return best;
}

function plantSeedAt(crop, slot) {
  if (!slot || ITEMS[slot.id]?.category !== "semente") return toast("Selecione uma semente.");
  if (!crop || crop.seedId) return toast("Você precisa de solo arado.");
  if (Math.hypot(crop.x - player.position.x, crop.z - player.position.z) > 1.7) return toast("Você precisa chegar mais perto.");
  const wasWatered = Boolean(crop.watered);
  crop.seedId = slot.id;
  crop.growth = 0;
  crop.watered = wasWatered || state.weather === "rain";
  crop.ready = false;
  removeItemFromSlot(selectedSlot, 1);
  spawnParticles("dirt", new THREE.Vector3(crop.x, 0.4, crop.z));
  toast("Semente plantada.");
  rebuildWorld();
}

function harvestCrop(crop) {
  if (!crop?.ready) return false;
  if (Math.hypot(crop.x - player.position.x, crop.z - player.position.z) > 1.7) return toast("Você precisa chegar mais perto.");
  const data = CROPS[crop.seedId];
  const gained = addItem(data.crop, 1, "fazenda");
  if (!gained) return toast("Inventário cheio.");
  recordStat("cropsHarvested", 1);
  spawnParticles("harvest", new THREE.Vector3(crop.x, 0.45, crop.z));
  if (data.regrow) {
    crop.growth = Math.max(0, data.days - data.regrow);
    crop.ready = false;
    crop.watered = false;
  } else {
    state.crops = state.crops.filter((item) => item.id !== crop.id);
    if (Math.random() < 0.25) state.crops.push({ id: `crop${Date.now()}`, x: crop.x, z: crop.z, seedId: null, growth: 0, watered: false, ready: false, tilled: true });
  }
  toast("Colheita guardada.");
  rebuildWorld();
  return true;
}

function nearestInteraction() {
  let best = null;
  for (const item of interactionObjects) {
    if (!isInteractionAvailable(item)) continue;
    const pos = item.group.position;
    const dist = Math.hypot(player.position.x - pos.x, player.position.z - pos.z);
    const score = dist - interactionPriority(item, dist);
    if (!best || score < best.score) best = { item, dist, score };
  }
  for (const animal of state.animals) {
    if (animal.petted) continue;
    const group = objects.get(animal.id);
    if (!group) continue;
    const dist = Math.hypot(player.position.x - group.position.x, player.position.z - group.position.z);
    const score = dist - 0.05;
    if (!best || score < best.score) best = { item: { id: animal.id, type: "animal", group, animal }, dist, score };
  }
  return best;
}

function interactionPriority(item, dist) {
  if (item.type === "house" && dist < 1.8) return 0.85;
  if (item.type === "houseDoor") return 0.85;
  if (item.type === "workbench" || item.type === "workbenchBroken" || item.type === "chest") return -0.1;
  return 0;
}

function interact(target) {
  const pos = target.group?.position || target.object || target;
  if (pos && Math.hypot(player.position.x - pos.x, player.position.z - pos.z) > 1.8) return toast("Você precisa chegar mais perto.");
  if (target.type === "house") return enterHouse();
  if (target.type === "houseDoor") return exitHouse();
  if (target.type === "bed") return confirmSleep();
  if (target.type === "phone") return openPhone();
  if (target.type === "seedBox" || target.type === "ingredientBox" || target.type === "recipeBox") return collectDelivery(target.type);
  if (target.type === "saleCrate") return openSaleCrate();
  if (target.type === "chest") return openStorage("Baú infinito", state.chest);
  if (target.type === "fridge") return openStorage("Geladeira", state.fridge, true);
  if (target.type === "kitchen") return openKitchen();
  if (target.type === "workbenchBroken" || target.type === "workbench") return openWorkbench(target.object);
  if (target.type === "coop") return collectAnimalProduct("chicken");
  if (target.type === "cowBarn") return collectAnimalProduct("cow");
  if (target.type === "silo") return transferInventoryHayToSilo();
  if (target.type === "expansionSign") return buyExpansion(target.object);
  if (target.type === "newspaper") return openNewspaper();
  if (target.type === "animal") return petAnimal(target.animal);
}

function enterHouse() {
  if (overviewMode) setOverviewMode(false);
  state.mode = "house";
  player.position.set(0, 0, 2.25);
  state.player = { x: 0, z: 2.25 };
  rebuildWorld();
  toast("Você entrou em casa.");
}

function exitHouse() {
  state.mode = "farm";
  player.position.set(-3.8, 0, -1.2);
  state.player = { x: -3.8, z: -1.2 };
  rebuildWorld();
}

function confirmSleep() {
  showModal(`
    <h2>Dormir até amanhã?</h2>
    <p>O jogo será salvo automaticamente.</p>
    <div class="modal-actions">
      <button id="cancelSleep">Cancelar</button>
      <button id="confirmSleep">Confirmar</button>
    </div>
  `);
  document.querySelector("#cancelSleep").addEventListener("click", () => closeModal());
  document.querySelector("#confirmSleep").addEventListener("click", (event) => {
    event.currentTarget.disabled = true;
    sleep();
  });
}

function sleep() {
  if (sleepingInProgress) return;
  sleepingInProgress = true;
  const completedCalendar = { ...state.calendar };
  const sales = processSales();
  processCropsBeforeWeather();
  processAnimals();
  processIncomingDeliveries();
  state.weather = randomWeather();
  if (state.weather === "rain") {
    for (const crop of state.crops) crop.watered = true;
  }
  processGrassRegrowth();
  finalizeDailyStats(completedCalendar);
  advanceCalendar();
  state.storesUsedToday = {};
  saveGame();
  applyWeather(state.weather);
  rebuildWorld();
  syncUi();
  const weatherName = WEATHER.find((item) => item.id === state.weather).name;
  const salesList = sales.soldStacks.length
    ? sales.soldStacks.map((item) => `<li>${item.name} x${item.qty} - ${formatMoney(item.value)}</li>`).join("")
    : "<li>Nada vendido.</li>";
  showModal(`
    <h2>Resumo do Dia</h2>
    <p><strong>Vendas:</strong></p>
    <ul class="summary-list">${salesList}</ul>
    <p>Total vendido: <strong>${formatMoney(sales.total)}</strong></p>
    <p>Clima de amanhã: <strong>${weatherName}</strong></p>
    <div class="modal-actions"><button id="wakeButton">Continuar</button></div>
  `);
  document.querySelector("#wakeButton").addEventListener("click", () => closeModal());
  sleepingInProgress = false;
}

function processSales() {
  let total = 0;
  let itemsSold = 0;
  const soldStacks = [];
  for (const stack of state.saleCrate) {
    if (!stack) continue;
    const item = ITEMS[stack.id];
    const value = saleValue(stack);
    if (value > 0) {
      soldStacks.push({ name: item.name, qty: stack.qty, value });
      itemsSold += stack.qty;
    }
    total += value;
  }
  state.saleCrate = [];
  state.money += total;
  recordStat("salesMoney", Number(total.toFixed(2)));
  recordStat("itemsSold", itemsSold);
  return { total: Number(total.toFixed(2)), soldStacks };
}

function processGrassRegrowth() {
  const animalCount = state.animals?.length || 0;
  const currentGrass = state.objects.filter((obj) => obj.type === "grass").length;
  const guaranteed = Math.max(0, animalCount - currentGrass);
  for (let i = 0; i < guaranteed; i += 1) {
    spawnDailyGrass(`daily_grass_${state.calendar.absoluteDay}_safe_${i}`);
  }
  const extraRolls = Math.max(2, animalCount + 1);
  for (let i = 0; i < extraRolls; i += 1) {
    if (Math.random() < 0.38) spawnDailyGrass(`daily_grass_${state.calendar.absoluteDay}_extra_${i}`);
  }
}

function spawnDailyGrass(id) {
  if (state.objects.some((obj) => obj.id === id)) return false;
  const tile = findNaturalSpawnTile(id);
  if (!tile) return false;
  state.objects.push(prepareWorldObject({
    id,
    type: "grass",
    x: tile.x,
    z: tile.z,
    w: 0.6,
    d: 0.6,
    hp: 1,
    dailySpawn: true,
  }));
  return true;
}

function findNaturalSpawnTile(seed) {
  const bounds = farmBounds();
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const x = Math.round(bounds.minX + 1 + stableNumber(`${seed}:x:${attempt}`, 0, bounds.maxX - bounds.minX - 2));
    const z = Math.round(bounds.minZ + 1 + stableNumber(`${seed}:z:${attempt}`, 0, bounds.maxZ - bounds.minZ - 2));
    const tile = { x, z };
    if (!isInUnlockedFarmArea(x, z)) continue;
    if (Math.abs(x) < 4 && Math.abs(z) < 4) continue;
    if (isPlacementOccupied(tile)) continue;
    return tile;
  }
  return null;
}

function finalizeDailyStats(completedCalendar) {
  recordStat("daysPlayed", 1);
  addStats(state.currentWeekStats, state.dailyStats);
  addStats(state.totalStats, state.dailyStats);
  if (completedCalendar.absoluteDay % 5 === 0) archiveCompletedWeek(completedCalendar);
  state.dailyStats = createStatsBucket();
  syncLegacyStats();
}

function archiveCompletedWeek(completedCalendar) {
  const weekNumber = Math.ceil(completedCalendar.absoluteDay / 5);
  if (state.weeklyHistory.some((week) => week.weekNumber === weekNumber)) return;
  const startDay = Math.max(1, completedCalendar.day - 4);
  const entry = {
    weekNumber,
    year: completedCalendar.year,
    month: completedCalendar.month,
    startDay,
    endDay: completedCalendar.day,
    stats: createStatsBucket(state.currentWeekStats),
  };
  state.weeklyHistory.push(entry);
  state.latestNewspaperWeek = weekNumber;
  state.pendingNewspaper = true;
  state.currentWeekStats = createStatsBucket();
}

function processCropsBeforeWeather() {
  for (const crop of state.crops) {
    if (crop.seedId && crop.watered) {
      crop.growth += 1;
      crop.ready = crop.growth >= CROPS[crop.seedId].days;
    }
    crop.watered = false;
  }
  state.crops = state.crops.filter((crop) => crop.seedId || Math.random() > 0.2);
}

function processAnimals() {
  const candidates = [...state.animals].sort(() => Math.random() - 0.5);
  for (const animal of candidates) {
    let ate = state.calendar.absoluteDay === 1;
    if (!ate && state.resources.hay > 0) {
      state.resources.hay -= 1;
      ate = true;
    }
    const hasAccess = true;
    animal.sad = animal.petted && (!ate || !hasAccess);
    if (animal.petted && ate && hasAccess && !animal.productReady) animal.productReady = true;
    animal.petted = false;
  }
}

function advanceCalendar() {
  state.calendar.absoluteDay += 1;
  state.calendar.day += 1;
  if (state.calendar.day > 20) {
    state.calendar.day = 1;
    state.calendar.month += 1;
  }
  if (state.calendar.month > 6) {
    state.calendar.month = 1;
    state.calendar.year += 1;
  }
}

function processIncomingDeliveries() {
  for (const key of ["seeds", "ingredients", "recipes"]) {
    if (!state.incomingDeliveries[key].length) continue;
    state.deliveries[key].push(...state.incomingDeliveries[key]);
    state.incomingDeliveries[key] = [];
  }
}

function petAnimal(animal) {
  if (animal.petted) return toast("Esse animal já recebeu carinho hoje.");
  animal.petted = true;
  spawnParticles("heart", objects.get(animal.id).position.clone().add(new THREE.Vector3(0, 0.7, 0)));
  toast("Carinho feito.");
}

function collectAnimalProduct(type) {
  const animal = state.animals.find((item) => item.type === type);
  if (!animal?.productReady) return toast(type === "chicken" ? "Nenhum ovo disponível." : "Nenhum leite disponível.");
  const id = type === "chicken" ? "egg" : "milk";
  if (!addItem(id, 1, "fazenda")) return toast("Inventário cheio.");
  animal.productReady = false;
  if (type === "chicken") recordStat("eggsCollected", 1);
  else recordStat("milkCollected", 1);
  toast(type === "chicken" ? "Ovo coletado." : "Leite coletado.");
}

function openNewspaper(index = Math.max(0, state.weeklyHistory.length - 1)) {
  if (!state.weeklyHistory.length) return toast("Ainda não há semanas completas.");
  state.pendingNewspaper = false;
  const safeIndex = clamp(index, 0, state.weeklyHistory.length - 1);
  const week = state.weeklyHistory[safeIndex];
  const stats = week.stats;
  showModal(`
    <h2>Jornal da Patrickolândia</h2>
    <section class="journal-section">
      <h3>Resumo da Semana</h3>
      <p><strong>Semana ${week.weekNumber}</strong> · Ano ${week.year} · Mês ${week.month}</p>
      <p>Período: Dia ${week.startDay} até Dia ${week.endDay}</p>
      ${journalStatsList(stats)}
    </section>
    <section class="journal-section">
      <h3>Recordes / Totais</h3>
      ${journalTotalsList(state.totalStats)}
    </section>
    <section class="journal-section">
      <h3>Histórico</h3>
      <p>${state.weeklyHistory.length ? `Mostrando ${safeIndex + 1} de ${state.weeklyHistory.length}` : "Ainda não há semanas completas."}</p>
      <div class="modal-actions">
        <button id="previousWeek" ${safeIndex <= 0 ? "disabled" : ""}>Semana anterior</button>
        <button id="nextWeek" ${safeIndex >= state.weeklyHistory.length - 1 ? "disabled" : ""}>Próxima semana</button>
      </div>
    </section>
    <div class="modal-actions"><button id="closeJournal">Fechar</button></div>
  `);
  document.querySelector("#closeJournal").addEventListener("click", () => closeModal());
  document.querySelector("#previousWeek").addEventListener("click", () => openNewspaper(safeIndex - 1));
  document.querySelector("#nextWeek").addEventListener("click", () => openNewspaper(safeIndex + 1));
}

function journalStatsList(stats) {
  const rows = [
    ["Vendas", formatMoney(stats.salesMoney)],
    ["Itens vendidos", stats.itemsSold],
    ["Plantações colhidas", stats.cropsHarvested],
    ["Ovos coletados", stats.eggsCollected],
    ["Leite coletado", stats.milkCollected],
    ["Receitas preparadas", stats.recipesPrepared],
    ["Árvores cortadas", stats.treesCut],
    ["Pedras quebradas", stats.stonesBroken],
    ["Madeira coletada", stats.woodCollected],
    ["Pedra coletada", stats.stoneCollected],
    ["Feno coletado", stats.hayCollected],
    ["Itens criados na bancada", stats.itemsCrafted],
    ["Construções colocadas", stats.constructionsPlaced],
    ["Expansões compradas", stats.expansionsBought],
  ];
  return `<dl class="journal-list">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>`;
}

function journalTotalsList(stats) {
  const rows = [
    ["Total vendido", formatMoney(stats.salesMoney)],
    ["Dias jogados", stats.daysPlayed],
    ["Total de plantações colhidas", stats.cropsHarvested],
    ["Total de ovos coletados", stats.eggsCollected],
    ["Total de leite coletado", stats.milkCollected],
    ["Total de receitas preparadas", stats.recipesPrepared],
    ["Total de árvores cortadas", stats.treesCut],
    ["Total de pedras quebradas", stats.stonesBroken],
    ["Total de madeira coletada", stats.woodCollected],
    ["Total de pedra coletada", stats.stoneCollected],
    ["Total de feno coletado", stats.hayCollected],
    ["Total de itens criados", stats.itemsCrafted],
    ["Total de construções colocadas", stats.constructionsPlaced],
    ["Total de expansões compradas", stats.expansionsBought],
  ];
  return `<dl class="journal-list">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>`;
}

function openPhone() {
  const shopButton = (key, title, desc) => `
    <button class="save-option ${state.storesUsedToday[key] ? "is-disabled" : ""}" data-shop="${key}" ${state.storesUsedToday[key] ? "disabled" : ""}>
      <strong>${title}</strong>
      <small>${state.storesUsedToday[key] ? "Será entregue amanhã." : desc}</small>
    </button>`;
  showModal(`
    <h2>Orelhão</h2>
    <p>Escolha uma loja para encomendar. A entrega chega amanhã.</p>
    <div class="save-list">
      ${shopButton("seeds", "Loja de Sementes", "Sementes de cultivo.")}
      ${shopButton("ingredients", "Loja de Ingredientes", "Ingredientes de conveniência.")}
      ${shopButton("recipes", "Loja de Receitas", "Receitas para a cozinha.")}
    </div>
    <div class="modal-actions"><button id="closePhone">Fechar</button></div>
  `);
  document.querySelector("#closePhone").addEventListener("click", () => closeModal());
  document.querySelectorAll("[data-shop]").forEach((button) => button.addEventListener("click", () => openShop(button.dataset.shop)));
}

function openShop(shop) {
  activeOrderCart = { shop, items: [] };
  if (state.storesUsedToday[shop]) return toast("Será entregue amanhã.");
  if (shop === "seeds") return openSeedShop();
  if (shop === "ingredients") return openIngredientShop();
  return openRecipeShop();
}

function openSeedShop() {
  renderCartShop("seeds");
}

function openIngredientShop() {
  renderCartShop("ingredients");
}

function openRecipeShop() {
  renderCartShop("recipes");
}

function shopRow(id, icon, name, detail) {
  return `<div class="shop-row"><span class="shop-icon">${icon}</span><div><strong>${name}</strong><small>${detail}</small></div><button data-select="${id}">Selecionar</button></div>`;
}
function renderCartShop(shop) {
  activeOrderCart.shop = shop;
  const title = shop === "seeds" ? "Loja de Sementes" : shop === "ingredients" ? "Loja de Ingredientes" : "Loja de Receitas";
  showModal(`
    <h2>${title}</h2>
    <div class="shop-list">${cartShopRows(shop)}</div>
    ${cartMarkup()}
    <div class="modal-actions">
      <button id="backPhone">Voltar</button>
      <button id="finishOrder">Finalizar pedido</button>
    </div>
  `);
  document.querySelector("#backPhone").addEventListener("click", () => {
    activeOrderCart = { shop: null, items: [] };
    openPhone();
  });
  wireCartControls();
}

function cartShopRows(shop) {
  if (shop === "seeds") {
    return SEED_SHOP.map((id) => {
      const crop = CROPS[id];
      const item = ITEMS[id];
      const growth = crop.regrow ? `Cresce em ${crop.days} dias, rebrota em ${crop.regrow}` : `Cresce em ${crop.days} dias`;
      const harvest = crop.regrow ? "Rebrota" : "Colheita única";
      return cartShopRow(id, item.iconKey, item.name, item.value, `${growth} · ${harvest}`, true);
    }).join("");
  }
  if (shop === "ingredients") {
    return INGREDIENT_SHOP.map(({ id, price }) => cartShopRow(id, ITEMS[id].iconKey, ITEMS[id].name, price, "", true)).join("");
  }
  return Object.entries(RECIPES).map(([id, recipe]) => {
    const status = recipeStatus(id);
    const inCart = activeOrderCart.items.some((item) => item.id === id);
    const disabled = status !== "Disponível" || inCart;
    const ingredients = Object.keys(recipe.ingredients).map((itemId) => ITEMS[itemId]?.name?.toLowerCase() || itemId).join(" + ");
    return `<div class="shop-row">
      <span class="shop-icon">${renderIcon(recipe.iconKey || "recipe_card")}</span>
      <div><strong>${recipe.name}</strong><small>${ingredients} · ${formatMoney(recipe.price)} · ${inCart ? "No pedido" : status}</small></div>
      <button data-add-recipe="${id}" ${disabled ? "disabled" : ""}>Adicionar ao pedido</button>
    </div>`;
  }).join("");
}

function cartShopRow(id, iconKey, name, price, detail, quantity) {
  const max = Math.max(1, Math.floor(Math.max(state.money, price) / price));
  return `<div class="shop-row">
    <span class="shop-icon">${renderIcon(iconKey || "unknown")}</span>
    <div><strong>${name}</strong><small>${formatMoney(price)}${detail ? ` · ${detail}` : ""}</small></div>
    <div class="shop-add">
      ${quantity ? `<input data-cart-qty="${id}" type="range" min="1" max="${max}" value="1" /><small>x<span data-cart-qty-text="${id}">1</span></small>` : ""}
      <button data-add-cart="${id}" data-price="${price}">Adicionar ao pedido</button>
    </div>
  </div>`;
}

function cartMarkup() {
  const total = cartTotal();
  const rows = activeOrderCart.items.length
    ? activeOrderCart.items.map((entry) => {
      const data = activeOrderCart.shop === "recipes" ? RECIPES[entry.id] : ITEMS[entry.id];
      return `<div class="cart-row"><span class="shop-icon mini">${renderIcon(data.iconKey || "recipe_card")}</span><strong>${data.name}</strong><small>x${entry.qty}</small><small>${formatMoney(entry.qty * entry.price)}</small><button data-remove-cart="${entry.id}">Remover</button></div>`;
    }).join("")
    : `<p class="storage-empty">Pedido vazio</p>`;
  return `<div class="cart-panel"><h3>Pedido atual</h3>${rows}<p>Total: <strong>${formatMoney(total)}</strong></p><p>Seu dinheiro: <strong>${formatMoney(state.money)}</strong></p>${total > state.money ? `<p class="warning-text">Dinheiro insuficiente.</p>` : ""}</div>`;
}

function wireCartControls() {
  document.querySelectorAll("[data-cart-qty]").forEach((slider) => {
    slider.addEventListener("input", () => {
      const label = document.querySelector(`[data-cart-qty-text="${slider.dataset.cartQty}"]`);
      if (label) label.textContent = slider.value;
    });
  });
  document.querySelectorAll("[data-add-cart]").forEach((button) => button.addEventListener("click", () => {
    const slider = document.querySelector(`[data-cart-qty="${button.dataset.addCart}"]`);
    addToCart(button.dataset.addCart, Number(slider?.value || 1), Number(button.dataset.price));
  }));
  document.querySelectorAll("[data-add-recipe]").forEach((button) => button.addEventListener("click", () => addToCart(button.dataset.addRecipe, 1, RECIPES[button.dataset.addRecipe].price)));
  document.querySelectorAll("[data-remove-cart]").forEach((button) => button.addEventListener("click", () => removeFromCart(button.dataset.removeCart)));
  const finish = document.querySelector("#finishOrder");
  if (finish) {
    finish.disabled = !activeOrderCart.items.length || cartTotal() > state.money;
    finish.addEventListener("click", finishCartOrder);
  }
}

function addToCart(id, qty, price) {
  const existing = activeOrderCart.items.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else activeOrderCart.items.push({ id, qty, price });
  renderCartShop(activeOrderCart.shop);
}

function removeFromCart(id) {
  activeOrderCart.items = activeOrderCart.items.filter((item) => item.id !== id);
  renderCartShop(activeOrderCart.shop);
}

function cartTotal() {
  return activeOrderCart.items.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function finishCartOrder() {
  const finishButton = document.querySelector("#finishOrder");
  if (finishButton?.disabled) return;
  if (finishButton) finishButton.disabled = true;
  const total = cartTotal();
  const shop = activeOrderCart.shop;
  if (!activeOrderCart.items.length) {
    if (finishButton) finishButton.disabled = false;
    return toast("Ação inválida.");
  }
  if (state.money < total) {
    if (finishButton) finishButton.disabled = false;
    return toast("Dinheiro insuficiente.");
  }
  state.money -= total;
  for (const item of activeOrderCart.items) {
    state.incomingDeliveries[shop].push({ id: item.id, qty: item.qty, origin: shop === "ingredients" ? "comprado" : undefined, deliveryDay: state.calendar.absoluteDay + 1, status: "pendente" });
  }
  state.storesUsedToday[shop] = true;
  activeOrderCart = { shop: null, items: [] };
  syncUi();
  toast(shop === "recipes" ? "Receita encomendada. Chega amanhã." : "Encomenda feita. Chega amanhã.");
  openPhone();
}
function openQuantityOrder(shop, id, unitPrice) {
  const max = Math.floor(state.money / unitPrice);
  const item = ITEMS[id];
  showModal(`
    <h2>${shop === "seeds" ? "Loja de Sementes" : "Loja de Ingredientes"}</h2>
    <div class="order-panel">
      <span class="shop-icon large">${renderIcon(item.iconKey || "unknown")}</span>
      <strong>${item.name}</strong>
      <p>Preço unitário: ${formatMoney(unitPrice)}</p>
      <p>Seu dinheiro: <strong>${formatMoney(state.money)}</strong></p>
      ${max > 0 ? `<input id="orderQty" type="range" min="1" max="${max}" value="1" /><p>Quantidade: <strong id="orderQtyText">1</strong></p><p>Total: <strong id="orderTotal">${formatMoney(unitPrice)}</strong></p>` : `<p class="warning-text">Dinheiro insuficiente.</p>`}
      <div class="modal-actions">
        <button id="backShop">Voltar</button>
        <button id="confirmOrder" ${max <= 0 ? "disabled" : ""}>Confirmar encomenda</button>
      </div>
    </div>
  `);
  document.querySelector("#backShop").addEventListener("click", () => shop === "seeds" ? openSeedShop() : openIngredientShop());
  const slider = document.querySelector("#orderQty");
  if (slider) {
    slider.addEventListener("input", () => {
      document.querySelector("#orderQtyText").textContent = slider.value;
      document.querySelector("#orderTotal").textContent = formatMoney(Number(slider.value) * unitPrice);
    });
  }
  document.querySelector("#confirmOrder").addEventListener("click", () => confirmItemOrder(shop, id, Number(slider?.value || 1), unitPrice));
}

function confirmItemOrder(shop, id, qty, unitPrice) {
  const total = qty * unitPrice;
  if (state.money < total) return toast("Dinheiro insuficiente.");
  state.money -= total;
  state.incomingDeliveries[shop].push({ id, qty, origin: shop === "ingredients" ? "comprado" : undefined, deliveryDay: state.calendar.absoluteDay + 1, status: "pendente" });
  state.storesUsedToday[shop] = true;
  syncUi();
  toast("Encomenda feita. Chega amanhã.");
  openPhone();
}

function confirmRecipeOrder(id) {
  const recipe = RECIPES[id];
  if (!recipe || recipeStatus(id) !== "Disponível") return toast("Ação inválida.");
  if (state.money < recipe.price) return toast("Dinheiro insuficiente.");
  state.money -= recipe.price;
  state.incomingDeliveries.recipes.push({ id, deliveryDay: state.calendar.absoluteDay + 1, status: "pendente" });
  state.storesUsedToday.recipes = true;
  syncUi();
  toast("Receita encomendada. Chega amanhã.");
  openPhone();
}

function recipeStatus(id) {
  if (state.unlockedRecipes.includes(id)) return "Já aprendida";
  const ordered = [...state.incomingDeliveries.recipes, ...state.deliveries.recipes].some((item) => item.id === id);
  return ordered ? "Encomendada" : "Disponível";
}

function collectDelivery(type) {
  const key = type === "seedBox" ? "seeds" : type === "ingredientBox" ? "ingredients" : "recipes";
  const delivery = state.deliveries[key];
  if (!delivery.length) return toast("Nenhuma entrega disponível.");
  if (key === "recipes") {
    for (const recipe of delivery) {
      if (!state.unlockedRecipes.includes(recipe.id)) state.unlockedRecipes.push(recipe.id);
    }
    state.deliveries[key] = [];
    rebuildWorld();
    return toast("Receita aprendida.");
  }
  const remaining = [];
  for (const item of delivery) {
    const added = addItem(item.id, item.qty, item.origin || "comprado");
    if (added < item.qty) remaining.push({ ...item, qty: item.qty - added });
  }
  state.deliveries[key] = remaining;
  rebuildWorld();
  toast(remaining.length ? "Inventário sem espaço suficiente." : "Entrega coletada.");
}

function openStorage(title, store, fridge = false) {
  openStorageScreen(fridge ? "fridge" : "chest");
}

function openSaleCrate() {
  openStorageScreen("sale");
}

function openStorageScreen(type) {
  const config = {
    chest: { title: "Baú", empty: "Baú vazio", items: state.chest },
    fridge: { title: "Geladeira", empty: "Geladeira vazia", items: state.fridge },
    sale: { title: "Caixote de Venda", empty: "Nada para vender", items: state.saleCrate },
  }[type];
  activeStorage = { type, ...config };
  isPaused = true;
  ui.toolRadial.classList.remove("is-open");
  ui.modal.innerHTML = `
    <div class="storage-window">
      <button class="storage-close" id="closeStorage" type="button" aria-label="Fechar">×</button>
      <div class="storage-column">
        <h2>Inventário</h2>
        <div class="storage-grid inventory-storage-grid" id="storageInventoryGrid"></div>
      </div>
      <div class="storage-column">
        <h2>${config.title}</h2>
        <div class="storage-grid" id="openedStorageGrid"></div>
        ${type === "chest" ? `
          <div class="chest-resources">
            <strong>Recursos do baú</strong>
            <div>Madeira: <span id="chestWood">${state.chestResources.wood}</span></div>
            <div>Pedra: <span id="chestStone">${state.chestResources.stone}</span></div>
            <div class="resource-actions">
              <button id="storeWood">Guardar madeira</button>
              <button id="takeWood">Retirar madeira</button>
              <button id="storeStone">Guardar pedra</button>
              <button id="takeStone">Retirar pedra</button>
            </div>
          </div>` : ""}
        <button class="auto-organize" id="autoOrganize" type="button">Organizar automaticamente</button>
      </div>
    </div>
  `;
  ui.modal.classList.add("is-active");
  renderActiveViews();
  document.querySelector("#closeStorage").addEventListener("click", closeStorageScreen);
  document.querySelector("#autoOrganize").addEventListener("click", openAutoOrganizeChoice);
  if (type === "chest") setupChestResourceButtons();
}

function closeStorageScreen() {
  activeStorage = null;
  closeModal();
  syncUi();
}

function renderActiveViews() {
  syncUi();
  if (!activeStorage) return;
  activeStorage.items = activeStorage.type === "chest" ? state.chest : activeStorage.type === "fridge" ? state.fridge : state.saleCrate;
  const invGrid = document.querySelector("#storageInventoryGrid");
  const storageGrid = document.querySelector("#openedStorageGrid");
  if (!invGrid || !storageGrid) return;
  invGrid.innerHTML = "";
  storageGrid.innerHTML = "";
  for (let i = 0; i < state.inventory.length; i += 1) {
    const slot = renderSlot(state.inventory[i], { container: "inventory", index: i, selected: activeSelection === "item" && selectedSlot === i });
    slot.addEventListener("click", () => {
      selectInventorySlot(i);
      renderActiveViews();
    });
    invGrid.append(slot);
  }
  const slotsToShow = Math.max(16, activeStorage.items.length + 4);
  for (let i = 0; i < slotsToShow; i += 1) {
    storageGrid.append(renderStorageSlot(activeStorage.items[i] || null, i));
  }
  if (!activeStorage.items.filter(Boolean).length) {
    const empty = document.createElement("p");
    empty.className = "storage-empty";
    empty.textContent = activeStorage.empty;
    storageGrid.append(empty);
  }
  updateChestResourceLabels();
}

function renderStorageSlot(stack, index) {
  const slot = renderSlot(stack, { container: "storage", index, selected: false });
  if (activeStorage?.type === "sale" && stack) {
    const value = saleValue(stack);
    const valueNode = document.createElement("b");
    valueNode.className = "sale-value";
    valueNode.textContent = formatMoney(value);
    slot.append(valueNode);
  }
  return slot;
}

function saleValue(stack) {
  const item = ITEMS[stack.id];
  const unit = item?.category === "comida" && stack.origin !== "fazenda"
    ? (item.mixedSell ?? Math.floor((item.sell || 0) * 0.6))
    : (item?.sell || 0);
  return Number((unit * stack.qty).toFixed(2));
}

function updateChestResourceLabels() {
  const wood = document.querySelector("#chestWood");
  const stone = document.querySelector("#chestStone");
  if (wood) wood.textContent = state.chestResources.wood;
  if (stone) stone.textContent = state.chestResources.stone;
}

function setupChestResourceButtons() {
  document.querySelector("#storeWood").addEventListener("click", () => moveResourceToChest("wood"));
  document.querySelector("#takeWood").addEventListener("click", () => moveResourceFromChest("wood"));
  document.querySelector("#storeStone").addEventListener("click", () => moveResourceToChest("stone"));
  document.querySelector("#takeStone").addEventListener("click", () => moveResourceFromChest("stone"));
}

function moveResourceToChest(type) {
  const amount = state.resources[type];
  if (amount <= 0) return toast(type === "wood" ? "Sem madeira para guardar." : "Sem pedra para guardar.");
  state.chestResources[type] += amount;
  state.resources[type] = 0;
  renderActiveViews();
}

function moveResourceFromChest(type) {
  const space = 20 - state.resources[type];
  const amount = Math.min(space, state.chestResources[type]);
  if (amount <= 0) return toast(type === "wood" ? "Madeira cheia." : "Pedra cheia.");
  state.resources[type] += amount;
  state.chestResources[type] -= amount;
  renderActiveViews();
}

function openAutoOrganizeChoice() {
  const choice = document.createElement("div");
  choice.className = "quantity-popover";
  choice.innerHTML = `
    <h3>Organizar automaticamente</h3>
    <button id="sortQty">Por quantidade</button>
    <button id="sortName">Por ordem alfabética</button>
    <button id="sortCancel">Cancelar</button>
  `;
  ui.modal.append(choice);
  choice.querySelector("#sortQty").addEventListener("click", () => {
    autoOrganizeStorage("qty");
    choice.remove();
  });
  choice.querySelector("#sortName").addEventListener("click", () => {
    autoOrganizeStorage("name");
    choice.remove();
  });
  choice.querySelector("#sortCancel").addEventListener("click", () => choice.remove());
}

function autoOrganizeStorage(mode) {
  const merged = [];
  for (const stack of activeStorage.items.filter(Boolean)) addStackToStorage(merged, stack);
  merged.sort((a, b) => {
    if (mode === "qty") return b.qty - a.qty || itemDisplayName(a).localeCompare(itemDisplayName(b), "pt-BR");
    return itemDisplayName(a).localeCompare(itemDisplayName(b), "pt-BR") || b.qty - a.qty;
  });
  activeStorage.items.length = 0;
  activeStorage.items.push(...merged);
  compactInfiniteStorage("storage");
  renderActiveViews();
}

function openQuantityPopup(meta) {
  const container = getContainer(meta);
  const stack = container?.[meta.index];
  if (!stack) return;
  const existing = document.querySelector(".quantity-popover");
  if (existing) existing.remove();

  if (!activeStorage) {
    const pop = document.createElement("div");
    pop.className = "quantity-popover";
    pop.innerHTML = `
      <h3>${itemDisplayName(stack)}</h3>
      <p>Quantidade: ${stack.qty}</p>
      ${itemOriginText(stack) ? `<p>${itemOriginText(stack)}</p>` : ""}
      <button id="closeItemInfo">Fechar</button>
    `;
    ui.modal.innerHTML = "";
    ui.modal.append(pop);
    ui.modal.classList.add("is-active");
    isPaused = true;
    pop.querySelector("#closeItemInfo").addEventListener("click", () => closeModal());
    return;
  }

  const direction = meta.container === "inventory" ? "toStorage" : "toInventory";
  const max = direction === "toStorage"
    ? maxTransferInventoryToStorage(meta.index)
    : maxTransferStorageToInventory(meta.index);
  if (max <= 0) {
    toast(direction === "toStorage" ? validateStorageAccepts(activeStorage.type, stack).message : "Inventário cheio.");
    return;
  }
  const pop = document.createElement("div");
  pop.className = "quantity-popover";
  pop.innerHTML = `
    <h3>${itemDisplayName(stack)}</h3>
    <p>Quantidade atual: ${stack.qty}</p>
    ${itemOriginText(stack) ? `<p>${itemOriginText(stack)}</p>` : ""}
    <input id="quantitySlider" type="range" min="1" max="${max}" value="${max}" />
    <strong id="quantityValue">${max}</strong>
    <div class="modal-actions">
      <button id="cancelQuantity">Cancelar</button>
      <button id="confirmQuantity">Confirmar</button>
    </div>
  `;
  ui.modal.append(pop);
  const slider = pop.querySelector("#quantitySlider");
  const value = pop.querySelector("#quantityValue");
  slider.addEventListener("input", () => value.textContent = slider.value);
  pop.querySelector("#cancelQuantity").addEventListener("click", () => pop.remove());
  pop.querySelector("#confirmQuantity").addEventListener("click", () => {
    const qty = Number(slider.value);
    const ok = direction === "toStorage"
      ? transferInventoryToStorage(meta.index, qty)
      : transferStorageToInventoryAuto(meta.index, qty);
    if (ok) pop.remove();
    renderActiveViews();
  });
}

function maxTransferInventoryToStorage(invIndex) {
  const stack = state.inventory[invIndex];
  if (!stack) return 0;
  const validation = validateStorageAccepts(activeStorage.type, stack);
  return validation.ok ? stack.qty : 0;
}

function maxTransferStorageToInventory(storageIndex) {
  const stack = activeStorage.items[storageIndex];
  if (!stack) return 0;
  return inventoryCapacityFor(stack);
}

function inventoryCapacityFor(stack) {
  let capacity = 0;
  for (const slot of state.inventory) {
    if (!slot) capacity += stackLimit(stack);
    else if (compatibleStacks(slot, stack)) capacity += Math.max(0, stackLimit(slot) - slot.qty);
  }
  return Math.min(capacity, stack.qty);
}

function transferStorageToInventoryAuto(storageIndex, qty) {
  const stack = activeStorage.items[storageIndex];
  if (!stack || qty <= 0) return false;
  const moving = cloneStack(stack, Math.min(qty, stack.qty));
  const added = addStackToInventoryAuto(moving);
  if (added <= 0) {
    toast("Inventário cheio.");
    return false;
  }
  stack.qty -= added;
  if (stack.qty <= 0) activeStorage.items[storageIndex] = null;
  compactInfiniteStorage("storage");
  return true;
}

function openKitchen() {
  showModal(`
    <h2>Cozinha</h2>
    <div class="recipe-list">
      ${Object.entries(RECIPES).map(([id, recipe]) => cookingRecipeCard(id, recipe)).join("")}
    </div>
    <div class="modal-actions"><button id="closeKitchen">Fechar</button></div>
  `);
  document.querySelector("#closeKitchen").addEventListener("click", () => closeModal());
  wireCookingControls();
}

function isRecipeUnlocked(recipeId) {
  return state.unlockedRecipes.includes(recipeId);
}

function cookingRecipeCard(recipeId, recipe) {
  const unlocked = isRecipeUnlocked(recipeId);
  const max = unlocked ? maxCookQuantity(recipeId) : 0;
  const ingredientLines = Object.entries(recipe.ingredients).map(([id, needed]) => {
    const available = availableIngredientQty(id);
    return `${ITEMS[id]?.name || id}: ${available}/${needed}`;
  }).join("<br>");
  const status = !unlocked ? "Não aprendida" : max <= 0 ? cookBlockReason(recipeId) : `Pode preparar até ${max}`;
  return `<article class="recipe-card ${unlocked ? "" : "is-locked"}">
    <span class="shop-icon">${renderIcon(ITEMS[recipe.output]?.iconKey || recipe.iconKey || "recipe_card")}</span>
    <div class="recipe-info">
      <strong>${recipe.name}</strong>
      <small>${ingredientLines}</small>
      <small>${status}</small>
      ${unlocked && max > 0 ? `<input data-cook-qty="${recipeId}" type="range" min="1" max="${max}" value="1" /><small>Quantidade: <span data-cook-qty-text="${recipeId}">1</span></small>` : ""}
    </div>
    <button data-cook="${recipeId}" ${!unlocked || max <= 0 ? "disabled" : ""}>Preparar</button>
  </article>`;
}

function cookBlockReason(recipeId) {
  const recipe = RECIPES[recipeId];
  if (maxCookByIngredients(recipe) <= 0) return "Ingredientes insuficientes.";
  return "Inventário cheio.";
}

function wireCookingControls() {
  document.querySelectorAll("[data-cook-qty]").forEach((slider) => {
    slider.addEventListener("input", () => {
      const label = document.querySelector(`[data-cook-qty-text="${slider.dataset.cookQty}"]`);
      if (label) label.textContent = slider.value;
    });
  });
  document.querySelectorAll("[data-cook]").forEach((button) => {
    button.addEventListener("click", () => {
      const recipeId = button.dataset.cook;
      const qty = Number(document.querySelector(`[data-cook-qty="${recipeId}"]`)?.value || 1);
      prepareRecipe(recipeId, qty);
    });
  });
}

function availableIngredientQty(itemId, fridge = state.fridge, inventory = state.inventory) {
  return [...fridge, ...inventory].reduce((sum, stack) => stack?.id === itemId ? sum + stack.qty : sum, 0);
}

function maxCookByIngredients(recipe) {
  return Math.min(...Object.entries(recipe.ingredients).map(([id, needed]) => Math.floor(availableIngredientQty(id) / needed)));
}

function maxCookQuantity(recipeId) {
  const recipe = RECIPES[recipeId];
  const byIngredients = maxCookByIngredients(recipe);
  let max = 0;
  for (let qty = 1; qty <= byIngredients; qty += 1) {
    const plan = planRecipeConsumption(recipeId, qty);
    if (!plan.ok) break;
    if (inventoryCapacityForItem(recipe.output, plan.outputOrigin) < qty) break;
    max = qty;
  }
  return max;
}

function planRecipeConsumption(recipeId, qty) {
  const recipe = RECIPES[recipeId];
  if (!recipe) return { ok: false, consumed: [], outputOrigin: "comprado" };
  const fridge = state.fridge.map((stack) => stack ? { ...stack } : null);
  const inventory = state.inventory.map((stack) => stack ? { ...stack } : null);
  const consumed = [];
  for (const [itemId, perUnit] of Object.entries(recipe.ingredients)) {
    let need = perUnit * qty;
    need = simulateConsumeFrom(fridge, itemId, need, consumed);
    need = simulateConsumeFrom(inventory, itemId, need, consumed);
    if (need > 0) return { ok: false, consumed, outputOrigin: "comprado" };
  }
  const allFarm = consumed.length > 0 && consumed.every((entry) => (entry.origin || ITEMS[entry.id]?.origin || "fazenda") === "fazenda");
  return { ok: true, consumed, outputOrigin: allFarm ? "fazenda" : "comprado" };
}

function simulateConsumeFrom(storage, itemId, need, consumed) {
  for (const stack of storage) {
    if (need <= 0) break;
    if (!stack || stack.id !== itemId) continue;
    const take = Math.min(stack.qty, need);
    stack.qty -= take;
    need -= take;
    consumed.push({ id: itemId, qty: take, origin: usesOrigin(itemId) ? (stack.origin || ITEMS[itemId]?.origin || "fazenda") : undefined });
  }
  return need;
}

function prepareRecipe(recipeId, requestedQty) {
  if (!isRecipeUnlocked(recipeId)) return toast("Ação inválida.");
  const recipe = RECIPES[recipeId];
  const max = maxCookQuantity(recipeId);
  if (max <= 0) return toast(cookBlockReason(recipeId));
  const qty = clamp(Math.floor(requestedQty || 1), 1, max);
  const plan = planRecipeConsumption(recipeId, qty);
  if (!plan.ok) return toast("Ingredientes insuficientes.");
  if (inventoryCapacityForItem(recipe.output, plan.outputOrigin) < qty) return toast("Inventário cheio.");
  const inventoryBefore = state.inventory.map((slot) => slot ? { ...slot } : null);
  const fridgeBefore = state.fridge.map((slot) => slot ? { ...slot } : null);
  consumeRecipeIngredients(recipe, qty);
  const added = addItem(recipe.output, qty, plan.outputOrigin);
  if (added !== qty) {
    state.inventory = inventoryBefore;
    state.fridge = fridgeBefore;
    syncUi();
    return toast("Inventário cheio.");
  }
  recordStat("recipesPrepared", qty);
  syncUi();
  toast(qty > 1 ? "Receitas preparadas." : "Receita preparada.");
  openKitchen();
}

function consumeRecipeIngredients(recipe, qty) {
  const consumed = [];
  for (const [itemId, perUnit] of Object.entries(recipe.ingredients)) {
    let need = perUnit * qty;
    need = consumeFromStorage(state.fridge, itemId, need, consumed);
    need = consumeFromStorage(state.inventory, itemId, need, consumed);
  }
  state.fridge = state.fridge.filter(Boolean);
  state.inventory = state.inventory.map((slot) => slot && slot.qty > 0 ? slot : null);
  return consumed;
}

function consumeFromStorage(storage, itemId, need, consumed) {
  for (let i = 0; i < storage.length && need > 0; i += 1) {
    const stack = storage[i];
    if (!stack || stack.id !== itemId) continue;
    const take = Math.min(stack.qty, need);
    stack.qty -= take;
    need -= take;
    consumed.push({ id: itemId, qty: take, origin: usesOrigin(itemId) ? (stack.origin || ITEMS[itemId]?.origin || "fazenda") : undefined });
    if (stack.qty <= 0) storage[i] = null;
  }
  return need;
}

function openWorkbench(obj) {
  if (!obj.repaired) {
    showModal(`
      <h2>Bancada quebrada</h2>
      <p>Restaurar por 10 Madeira?</p>
      <p>Madeira disponível: <strong>${state.resources.wood}/20</strong></p>
      ${state.resources.wood < 10 ? `<p class="warning-text">Madeira insuficiente.</p>` : ""}
      <div class="modal-actions">
        <button id="cancelWorkbenchRepair">Cancelar</button>
        <button id="confirmWorkbenchRepair" ${state.resources.wood < 10 ? "disabled" : ""}>Restaurar</button>
      </div>
    `);
    document.querySelector("#cancelWorkbenchRepair").addEventListener("click", () => closeModal());
    document.querySelector("#confirmWorkbenchRepair").addEventListener("click", () => repairWorkbench(obj.id));
    return;
  }
  showModal(`
    <h2>Bancada</h2>
    <div class="craft-list">
      ${craftingRecipeCard("path")}
      ${craftingRecipeCard("fence")}
    </div>
    <div class="modal-actions"><button id="closeWorkbench">Fechar</button></div>
  `);
  document.querySelector("#closeWorkbench").addEventListener("click", () => closeModal());
  wireCraftingControls();
}

function repairWorkbench(id) {
  const obj = state.objects.find((item) => item.id === id);
  if (!obj || obj.repaired || obj.type === "workbench") return toast("Ação inválida.");
  if (state.resources.wood < 10) return toast("Madeira insuficiente.");
  state.resources.wood -= 10;
  obj.repaired = true;
  obj.type = "workbench";
  obj.movable = true;
  closeModal(false);
  toast("Bancada restaurada.");
  rebuildWorld();
  syncUi();
  isPaused = false;
}

function craftingRecipeCard(recipeId) {
  const recipe = CRAFTING_RECIPES[recipeId];
  const item = ITEMS[recipe.output];
  const max = maxCraftQuantity(recipeId);
  const costText = Object.entries(recipe.costs).map(([res, amount]) => `${amount} ${ITEMS[res]?.name || res}`).join(" + ");
  const availableText = `Madeira: ${state.resources.wood}/20 · Pedra: ${state.resources.stone}/20`;
  const totalText = craftTotalCostText(recipeId, max > 0 ? 1 : 0);
  return `<article class="craft-card">
    <span class="shop-icon">${renderIcon(item.iconKey || "unknown")}</span>
    <div class="craft-info">
      <strong>${recipe.name}</strong>
      <small>Custo por unidade: ${costText}</small>
      <small>Disponível: ${availableText}</small>
      ${max > 0 ? `<input data-craft-qty="${recipeId}" type="range" min="1" max="${max}" value="1" />` : `<p class="warning-text">${inventoryCapacityForItem(recipe.output) <= 0 ? "Inventário cheio." : "Recursos insuficientes."}</p>`}
      <small data-craft-total="${recipeId}">Total: ${totalText}</small>
    </div>
    <button data-craft="${recipeId}" ${max <= 0 ? "disabled" : ""}>Criar</button>
  </article>`;
}

function craftTotalCostText(recipeId, qty) {
  const recipe = CRAFTING_RECIPES[recipeId];
  return Object.entries(recipe.costs).map(([res, amount]) => `${amount * qty} ${ITEMS[res]?.name || res}`).join(" + ");
}

function maxCraftQuantity(recipeId) {
  const recipe = CRAFTING_RECIPES[recipeId];
  const byResource = Math.min(...Object.entries(recipe.costs).map(([res, amount]) => Math.floor((state.resources[res] || 0) / amount)));
  const byInventory = inventoryCapacityForItem(recipe.output, "construido");
  return Math.max(0, Math.min(byResource, byInventory));
}

function wireCraftingControls() {
  document.querySelectorAll("[data-craft-qty]").forEach((slider) => {
    slider.addEventListener("input", () => {
      const label = document.querySelector(`[data-craft-total="${slider.dataset.craftQty}"]`);
      if (label) label.textContent = `Total: ${craftTotalCostText(slider.dataset.craftQty, Number(slider.value))}`;
    });
  });
  document.querySelectorAll("[data-craft]").forEach((button) => {
    button.addEventListener("click", () => {
      const recipeId = button.dataset.craft;
      const qty = Number(document.querySelector(`[data-craft-qty="${recipeId}"]`)?.value || 1);
      craft(recipeId, qty);
    });
  });
}

function craft(recipeId, qty) {
  const recipe = CRAFTING_RECIPES[recipeId];
  if (!recipe) return toast("Ação inválida.");
  const max = maxCraftQuantity(recipeId);
  if (max <= 0) return toast(inventoryCapacityForItem(recipe.output) <= 0 ? "Inventário cheio." : "Recursos insuficientes.");
  qty = clamp(Math.floor(qty || 1), 1, max);
  if (Object.entries(recipe.costs).some(([res, amount]) => state.resources[res] < amount * qty)) return toast("Recursos insuficientes.");
  if (inventoryCapacityForItem(recipe.output, "construido") < qty) return toast("Inventário cheio.");
  const added = addItem(recipe.output, qty, "construido");
  if (added !== qty) return toast("Inventário cheio.");
  for (const [res, amount] of Object.entries(recipe.costs)) state.resources[res] -= amount * qty;
  recordStat("itemsCrafted", qty);
  syncUi();
  toast(qty > 1 ? "Itens criados." : "Item criado.");
  const workbench = state.objects.find((item) => item.id === "workbench");
  if (workbench) openWorkbench(workbench);
}

function placeSelectedConstruction(tile = selectedCropTile()) {
  const stack = selectedConstructionItem();
  if (!stack) return toast("Selecione um item de construção.");
  if (tileDistanceFromPlayer(tile) > 1.7) return toast("Você precisa chegar mais perto.");
  const validation = canPlaceConstruction(tile);
  if (!validation.ok) return toast(validation.message);
  const type = constructionTypeForItem(stack.id);
  if (!type) return toast("Selecione um item de construção.");
  const placed = prepareWorldObject({
    id: `${type}${Date.now()}${Math.floor(Math.random() * 1000)}`,
    type,
    itemId: stack.id,
    x: tile.x,
    z: tile.z,
    w: type === "placedFence" ? 0.88 : 0.92,
    d: type === "placedFence" ? 0.22 : 0.92,
    hp: 1,
  });
  state.objects.push(placed);
  removeItemFromSlot(selectedSlot, 1);
  recordStat("constructionsPlaced", 1);
  spawnParticles("dirt", new THREE.Vector3(tile.x, 0.18, tile.z));
  rebuildWorld();
  syncUi();
}

function removePlacedConstruction(obj) {
  const itemId = obj.itemId || (obj.type === "stonePath" ? "path" : "fence");
  if (inventoryCapacityForItem(itemId, "construido") < 1) return toast("Inventário cheio.");
  const added = addItem(itemId, 1, "construido");
  if (added !== 1) return toast("Inventário cheio.");
  spawnParticles("impact", new THREE.Vector3(obj.x, 0.18, obj.z));
  removeWorldObject(obj.id);
  syncUi();
  return true;
}

function buyExpansion(obj) {
  if (state.expansions[obj.dir]) return toast("Área já comprada.");
  const price = nextExpansionPrice();
  const label = EXPANSION_LABELS[obj.dir] || obj.dir;
  showModal(`
    <h2>Placa ${label}</h2>
    <p>Comprar expansão para o ${label} por ${formatMoney(price)}?</p>
    <p>Seu dinheiro: <strong>${formatMoney(state.money)}</strong></p>
    ${state.money < price ? `<p class="warning-text">Dinheiro insuficiente.</p>` : ""}
    <div class="modal-actions">
      <button id="cancelExpansion">Cancelar</button>
      <button id="confirmExpansion" ${state.money < price ? "disabled" : ""}>Comprar</button>
    </div>
  `);
  document.querySelector("#cancelExpansion").addEventListener("click", () => closeModal());
  document.querySelector("#confirmExpansion").addEventListener("click", () => confirmExpansionPurchase(obj.dir));
}

function purchasedExpansionCount() {
  return Object.values(state.expansions || {}).filter(Boolean).length;
}

function nextExpansionPrice() {
  return EXPANSION_PRICES[Math.min(purchasedExpansionCount(), EXPANSION_PRICES.length - 1)];
}

function confirmExpansionPurchase(dir) {
  const confirmButton = document.querySelector("#confirmExpansion");
  if (confirmButton?.disabled) return;
  if (confirmButton) confirmButton.disabled = true;
  if (state.expansions[dir]) {
    if (confirmButton) confirmButton.disabled = false;
    return toast("Área já comprada.");
  }
  const price = nextExpansionPrice();
  if (state.money < price) {
    if (confirmButton) confirmButton.disabled = false;
    return toast("Dinheiro insuficiente.");
  }
  state.money -= price;
  state.expansions[dir] = true;
  state.expansionOrder ||= [];
  if (!state.expansionOrder.includes(dir)) state.expansionOrder.push(dir);
  generateExpansionArea(dir);
  recordStat("expansionsBought", 1);
  closeModal(false);
  toast("Expansão comprada.");
  rebuildWorld();
  syncUi();
  isPaused = false;
}

function expansionArea(dir) {
  const areas = {
    top: { minX: -8, maxX: 8, minZ: -32, maxZ: -16, corridor: (x, z) => Math.abs(x) < 2.2 && z > -18.5 },
    bottom: { minX: -8, maxX: 8, minZ: 16, maxZ: 32, corridor: (x, z) => Math.abs(x) < 2.2 && z < 18.5 },
    left: { minX: -32, maxX: -16, minZ: -8, maxZ: 8, corridor: (x, z) => Math.abs(z) < 2.2 && x > -18.5 },
    right: { minX: 16, maxX: 32, minZ: -8, maxZ: 8, corridor: (x, z) => Math.abs(z) < 2.2 && x < 18.5 },
  };
  return areas[dir];
}

function generateExpansionArea(dir) {
  if (state.objects.some((obj) => obj.expansionDir === dir)) return;
  const area = expansionArea(dir);
  if (!area) return;
  const generated = [];
  const types = [
    { id: "grass", w: 36 },
    { id: "tree", w: 16 },
    { id: "smallRock", w: 16 },
    { id: "bigRock", w: 8 },
    { id: "log", w: 10 },
    { id: "branch", w: 14 },
  ];
  for (let i = 0; i < 34; i += 1) {
    const type = weightedPick(types);
    let x;
    let z;
    let tries = 0;
    do {
      x = Math.round(area.minX + 1 + stableNumber(`${dir}:x:${i}:${tries}`, 0, area.maxX - area.minX - 2));
      z = Math.round(area.minZ + 1 + stableNumber(`${dir}:z:${i}:${tries}`, 0, area.maxZ - area.minZ - 2));
      tries += 1;
    } while ((area.corridor(x, z) || generated.some((obj) => Math.hypot(obj.x - x, obj.z - z) < 1.25)) && tries < 50);
    if (area.corridor(x, z)) continue;
    generated.push(prepareWorldObject({
      id: `exp_${dir}_${type}_${i}`,
      type,
      x,
      z,
      w: 0.6,
      d: 0.6,
      hp: type === "tree" || type === "bigRock" ? 3 : type === "log" ? 2 : 1,
      expansionDir: dir,
    }));
  }
  state.objects.push(...generated);
}

function setTool(tool, silent = false) {
  selectedTool = tool;
  state.selectedTool = tool;
  ui.toolRadial.classList.remove("is-open");
  ui.toolButton.innerHTML = TOOL_ICONS[tool] || "";
  setActiveSelection("tool");
  if (!silent) toast(`Ferramenta: ${TOOL_LABELS[tool] || "Ferramenta"}`);
}

function addResource(type, amount) {
  if (type === "hay") return collectHay(amount);
  const max = 20;
  const space = max - state.resources[type];
  const added = Math.max(0, Math.min(space, amount));
  state.resources[type] += added;
  if (added < amount) toast(type === "hay" ? "Silo cheio." : "Excesso guardado no baú.");
  syncUi();
  return added;
}

function resourceSpace(type) {
  return Math.max(0, 20 - (state.resources[type] || 0));
}

function collectHay(amount) {
  const siloSpace = 500 - state.resources.hay;
  const toSilo = Math.min(amount, Math.max(0, siloSpace));
  state.resources.hay += toSilo;
  let remaining = amount - toSilo;
  let toInventory = 0;
  if (remaining > 0) {
    toInventory = addItem("hay", remaining, "fazenda");
    remaining -= toInventory;
  }
  if (toSilo > 0) toast("Feno guardado no silo.");
  if (toInventory > 0 && toSilo === 0) toast("Silo cheio.");
  if (remaining > 0) toast("Silo cheio.");
  syncUi();
  return amount - remaining;
}

function transferInventoryHayToSilo() {
  const space = 500 - state.resources.hay;
  if (space <= 0) return toast("Silo cheio.");
  let moved = 0;
  for (const slot of state.inventory) {
    if (!slot || slot.id !== "hay") continue;
    const amount = Math.min(slot.qty, 500 - state.resources.hay);
    if (amount <= 0) break;
    slot.qty -= amount;
    state.resources.hay += amount;
    moved += amount;
  }
  state.inventory = state.inventory.map((slot) => slot && slot.qty > 0 ? slot : null);
  syncUi();
  toast(moved > 0 ? "Feno guardado no silo." : `Silo: ${state.resources.hay}/500 fenos.`);
}

function nearestGrass(range = Infinity) {
  let best = null;
  let bestDist = Infinity;
  for (const obj of state.objects) {
    if (obj.type !== "grass") continue;
    const dist = Math.hypot(obj.x - player.position.x, obj.z - player.position.z);
    if (dist <= range && dist < bestDist) {
      best = obj;
      bestDist = dist;
    }
  }
  return best;
}

function nearestToolTarget(types, range = Infinity) {
  let best = null;
  let bestDist = Infinity;
  for (const obj of state.objects) {
    if (!types.includes(obj.type)) continue;
    if (isDeliveryBox(obj.type) && !hasPendingDelivery(obj.type)) continue;
    const dist = Math.hypot(obj.x - player.position.x, obj.z - player.position.z);
    if (dist <= range && dist < bestDist) {
      best = obj;
      bestDist = dist;
    }
  }
  return best;
}

function cutGrass(obj) {
  const dist = Math.hypot(obj.x - player.position.x, obj.z - player.position.z);
  if (dist > 1.45) {
    toast("Você precisa chegar mais perto.");
    return true;
  }
  const added = addResource("hay", 1);
  if (!added) return true;
  recordStat("hayCollected", added);
  spawnParticles("grassCut", new THREE.Vector3(obj.x, 0.24, obj.z));
  removeWorldObject(obj.id);
  return true;
}

function tryToolOnObject(obj) {
  const woodTypes = ["tree", "log", "branch"];
  const stoneTypes = ["smallRock", "bigRock"];
  const requiredTool = obj.type === "grass" ? "scythe"
    : obj.type === "placedFence" ? "axe"
    : obj.type === "stonePath" ? "pickaxe"
    : woodTypes.includes(obj.type) ? "axe"
    : stoneTypes.includes(obj.type) ? "pickaxe"
    : null;
  if (!requiredTool) return false;
  const dist = Math.hypot(obj.x - player.position.x, obj.z - player.position.z);
  if (dist > 1.55) {
    toast("Você precisa chegar mais perto.");
    return true;
  }
  if (selectedTool !== requiredTool) {
    toast("Ferramenta errada.");
    return true;
  }
  if (obj.type === "grass") {
    return cutGrass(obj);
  }
  if (obj.type === "placedFence" || obj.type === "stonePath") {
    return removePlacedConstruction(obj);
  }
  if (woodTypes.includes(obj.type)) {
    const wood = resourceDropFor(obj);
    if ((obj.hp || 1) <= 1 && resourceSpace("wood") < wood) {
      toast(resourceSpace("wood") <= 0 ? "Madeira cheia." : "Madeira cheia.");
      return true;
    }
    obj.hp -= 1;
    spawnParticles("impact", objects.get(obj.id).position.clone().add(new THREE.Vector3(0, 0.35, 0)));
    if (obj.hp <= 0) {
      addResource("wood", wood);
      recordStat("woodCollected", wood);
      if (obj.type === "tree") recordStat("treesCut", 1);
      removeWorldObject(obj.id);
    }
    return true;
  }
  if (stoneTypes.includes(obj.type)) {
    const stone = resourceDropFor(obj);
    if ((obj.hp || 1) <= 1 && resourceSpace("stone") < stone) {
      toast(resourceSpace("stone") <= 0 ? "Pedra cheia." : "Pedra cheia.");
      return true;
    }
    obj.hp -= 1;
    spawnParticles("impact", objects.get(obj.id).position.clone().add(new THREE.Vector3(0, 0.25, 0)));
    if (obj.hp <= 0) {
      addResource("stone", stone);
      recordStat("stoneCollected", stone);
      recordStat("stonesBroken", 1);
      removeWorldObject(obj.id);
    }
    return true;
  }
  return false;
}

function removeWorldObject(id) {
  state.objects = state.objects.filter((item) => item.id !== id);
  rebuildWorld();
}

function handleGroundTap(event) {
  if (!state || isPaused || event.target !== ui.canvas) return;
  if (ui.toolRadial.classList.contains("is-open")) {
    ui.toolRadial.classList.remove("is-open");
    return;
  }
  if (overviewMode) return handleOverviewPointerDown(event);
  const point = pointerToGround(event);
  const interactionTarget = interactionAtPoint(point);
  if (interactionTarget) {
    const pos = interactionTarget.group?.position || interactionTarget.object || interactionTarget;
    if (Math.hypot(player.position.x - pos.x, player.position.z - pos.z) > 1.8) return walkToInteraction(interactionTarget);
    return interact(interactionTarget);
  }
  const clickedTile = worldToTile(point.x, point.z);
  const clickedCrop = cropAt(clickedTile);
  const clickedSlot = selectedItem();
  if (state.mode === "farm" && clickedSlot && ITEMS[clickedSlot.id]?.category === "semente") {
    if (clickedCrop && !clickedCrop.seedId) return plantSeedAt(clickedCrop, clickedSlot);
    return toast(clickedCrop ? "Ação inválida." : "Você precisa de solo arado.");
  }
  if (state.mode === "farm" && clickedSlot && ITEMS[clickedSlot.id]?.category === "construcao") {
    return placeSelectedConstruction(clickedTile);
  }
  if (state.mode === "farm" && activeSelection === "tool" && (selectedTool === "hoe" || selectedTool === "water" || selectedTool === "pickaxe")) {
    const tile = worldToTile(point.x, point.z);
    const hasToolTarget = selectedTool === "pickaxe" && nearestObjectTo(point, 0.65);
    if (!hasToolTarget && tileDistanceFromPlayer(tile) <= 1.7) return actionAtTile(tile);
  }
  if (state.mode === "farm" && activeSelection === "tool" && selectedTool === "build") return toast("Selecione um item de construção.");
  const nearbyObject = state.mode === "farm" ? nearestObjectTo(point, 0.65) : null;
  if (activeSelection === "tool" && nearbyObject && tryToolOnObject(nearbyObject)) return;
  pendingAutoInteraction = null;
  autoPath = buildPath(player.position, point);
}

function walkToInteraction(target) {
  if (!target?.group) return toast("Não consegui chegar lá.");
  const path = buildPath(player.position, target.group.position);
  if (!path.length) return;
  pendingAutoInteraction = target;
  autoPath = path;
}

function interactionAtPoint(point) {
  let best = null;
  for (const item of interactionObjects) {
    if (!isInteractionAvailable(item)) continue;
    const pos = item.group.position;
    const obj = item.object || {};
    const w = obj.w || 1;
    const d = obj.d || 1;
    const hit = Math.abs(pos.x - point.x) <= w / 2 + 0.45 && Math.abs(pos.z - point.z) <= d / 2 + 0.45;
    const dist = Math.hypot(pos.x - point.x, pos.z - point.z);
    if ((hit || dist <= 0.75) && (!best || actionPriority(item) < actionPriority(best) || dist < best.dist)) {
      best = { ...item, dist };
    }
  }
  for (const animal of state.animals) {
    if (animal.petted) continue;
    const group = objects.get(animal.id);
    if (!group) continue;
    const dist = Math.hypot(group.position.x - point.x, group.position.z - point.z);
    if (dist <= 0.65 && (!best || 5 < actionPriority(best) || dist < best.dist)) {
      best = { id: animal.id, type: "animal", group, animal, dist };
    }
  }
  return best;
}

function isInteriorDevMode() {
  return new URLSearchParams(window.location.search).get("devInterior") === "1";
}

function interiorDevValues() {
  if (!isInteriorDevMode()) return { ...interiorDevDefaults };
  if (interiorDevConfig) return interiorDevConfig;
  try {
    const saved = JSON.parse(localStorage.getItem("patrickolandiaInteriorDev") || "{}");
    interiorDevConfig = { ...interiorDevDefaults, ...saved };
  } catch {
    interiorDevConfig = { ...interiorDevDefaults };
  }
  return interiorDevConfig;
}

function saveInteriorDevValues() {
  if (!isInteriorDevMode()) return;
  localStorage.setItem("patrickolandiaInteriorDev", JSON.stringify(interiorDevValues()));
}

function applyInteriorDevValues() {
  if (!isInteriorDevMode() || !interiorDevConfig) return;
  const cfg = interiorDevValues();
  if (interiorDevRefs.peninsula) interiorDevRefs.peninsula.position.set(cfg.counterPeninsulaX, 0, cfg.counterPeninsulaZ);
  if (interiorDevRefs.counterReturn) interiorDevRefs.counterReturn.position.set(cfg.counterReturnX, 0, cfg.counterReturnZ);
  if (interiorDevRefs.innerPanel) interiorDevRefs.innerPanel.position.set(cfg.counterPeninsulaX + 0.38, 0.31, cfg.counterPeninsulaZ - 0.32);
  if (interiorDevRefs.cornerTop) interiorDevRefs.cornerTop.position.set(cfg.counterReturnX - 0.16, 0.685, cfg.counterReturnZ + 0.18);
  if (interiorDevRefs.counterLip) interiorDevRefs.counterLip.position.set(cfg.counterPeninsulaX, 0.765, cfg.counterPeninsulaZ + 0.76);
  for (const part of interiorDevRefs.nightstand) {
    part.position.set(cfg.nightstandX, part.position.y, cfg.nightstandZ);
  }
  const counterCollision = collisions.find((item) => item.id === "kitchenCounter");
  if (counterCollision) {
    counterCollision.x = cfg.counterPeninsulaX;
    counterCollision.z = cfg.counterPeninsulaZ;
  }
  const returnCollision = collisions.find((item) => item.id === "kitchenCounterReturn");
  if (returnCollision) {
    returnCollision.x = cfg.counterReturnX;
    returnCollision.z = cfg.counterReturnZ;
  }
}

function initInteriorDevPanel() {
  if (!isInteriorDevMode()) return;
  if (document.querySelector(".interior-dev-panel")) return;
  const cfg = interiorDevValues();
  const panel = document.createElement("section");
  panel.className = "interior-dev-panel";
  panel.innerHTML = `
    <strong>Editor de Interior</strong>
    <small>Só aparece com devInterior=1</small>
    ${interiorDevInput("counterPeninsulaX", "Balcão X", cfg.counterPeninsulaX)}
    ${interiorDevInput("counterPeninsulaZ", "Balcão Z", cfg.counterPeninsulaZ)}
    ${interiorDevInput("counterReturnX", "Braço do L X", cfg.counterReturnX)}
    ${interiorDevInput("counterReturnZ", "Braço do L Z", cfg.counterReturnZ)}
    ${interiorDevInput("nightstandX", "Criado X", cfg.nightstandX)}
    ${interiorDevInput("nightstandZ", "Criado Z", cfg.nightstandZ)}
    <div class="interior-dev-actions">
      <button id="copyInteriorDev" type="button">Copiar valores</button>
      <button id="resetInteriorDev" type="button">Resetar</button>
    </div>
    <textarea id="interiorDevOutput" readonly></textarea>
  `;
  document.body.append(panel);
  panel.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      cfg[input.dataset.key] = Number(input.value);
      const value = input.closest("label")?.querySelector("b");
      if (value) value.textContent = Number(input.value).toFixed(2);
      saveInteriorDevValues();
      applyInteriorDevValues();
      updateInteriorDevOutput();
    });
  });
  panel.querySelector("#copyInteriorDev").addEventListener("click", () => {
    updateInteriorDevOutput();
    const output = panel.querySelector("#interiorDevOutput");
    output.select();
    navigator.clipboard?.writeText(output.value);
  });
  panel.querySelector("#resetInteriorDev").addEventListener("click", () => {
    interiorDevConfig = { ...interiorDevDefaults };
    saveInteriorDevValues();
    panel.remove();
    initInteriorDevPanel();
    applyInteriorDevValues();
  });
  updateInteriorDevOutput();
}

function interiorDevInput(key, label, value) {
  return `
    <label>
      <span>${label} <b>${Number(value).toFixed(2)}</b></span>
      <input data-key="${key}" type="range" min="-4.1" max="3.8" step="0.05" value="${value}">
    </label>
  `;
}

function updateInteriorDevOutput() {
  const output = document.querySelector("#interiorDevOutput");
  if (!output) return;
  const cfg = interiorDevValues();
  output.value = JSON.stringify({
    counterPeninsulaX: Number(cfg.counterPeninsulaX.toFixed(2)),
    counterPeninsulaZ: Number(cfg.counterPeninsulaZ.toFixed(2)),
    counterReturnX: Number(cfg.counterReturnX.toFixed(2)),
    counterReturnZ: Number(cfg.counterReturnZ.toFixed(2)),
    nightstandX: Number(cfg.nightstandX.toFixed(2)),
    nightstandZ: Number(cfg.nightstandZ.toFixed(2)),
  }, null, 2);
}

function setOverviewMode(enabled) {
  if (!state || state.mode !== "farm") {
    if (enabled) toast("A visão geral só funciona na fazenda.");
    enabled = false;
  }
  overviewMode = enabled;
  autoPath = [];
  moveInput.set(0, 0, 0);
  if (ui.stick) ui.stick.style.transform = "translate(-50%, -50%)";
  if (enabled) {
    const bounds = farmBounds();
    overviewPan = { x: (bounds.minX + bounds.maxX) / 2, z: (bounds.minZ + bounds.maxZ) / 2 };
    overviewSelectionId = null;
    overviewMove = null;
    ui.toolRadial.classList.remove("is-open");
    document.body.classList.add("overview-active");
    toast("Visão Geral aberta.");
  } else {
    overviewSelectionId = null;
    overviewMove = null;
    overviewDrag = null;
    targetMarker.visible = false;
    document.body.classList.remove("overview-active");
    toast("Visão normal.");
  }
  renderOverviewPanel();
}

function renderOverviewPanel() {
  document.querySelector("#overviewPanel")?.remove();
  if (!overviewMode) return;
  const selected = state.objects.find((obj) => obj.id === overviewSelectionId);
  const moving = overviewMove && selected;
  const validity = moving ? validateOverviewPlacement(selected, overviewMove.candidate) : { ok: false };
  const panel = document.createElement("section");
  panel.id = "overviewPanel";
  panel.className = "overview-panel";
  panel.innerHTML = `
    <div class="overview-title">
      <strong>Visão Geral</strong>
      <button id="exitOverview" type="button">Sair da Visão Geral</button>
    </div>
    <p>${selected ? overviewObjectName(selected) : "Toque em um objeto para organizar."}</p>
    ${selected ? `<div class="overview-actions">
      ${moving ? `
        <button id="confirmOverviewMove" type="button" ${validity.ok ? "" : "disabled"}>Confirmar</button>
        <button id="cancelOverviewMove" type="button">Cancelar</button>
      ` : `
        <button id="startOverviewMove" type="button" ${isOverviewMovable(selected) ? "" : "disabled"}>Mover</button>
        <button id="cancelOverviewSelect" type="button">Cancelar</button>
      `}
    </div>` : ""}
  `;
  ui.floatLayer.append(panel);
  panel.querySelector("#exitOverview").addEventListener("click", () => setOverviewMode(false));
  panel.querySelector("#startOverviewMove")?.addEventListener("click", () => startOverviewMove(selected));
  panel.querySelector("#cancelOverviewMove")?.addEventListener("click", cancelOverviewMove);
  panel.querySelector("#confirmOverviewMove")?.addEventListener("click", confirmOverviewMove);
  panel.querySelector("#cancelOverviewSelect")?.addEventListener("click", () => {
    overviewSelectionId = null;
    updateOverviewMarker();
    renderOverviewPanel();
  });
}

function startOverviewMove(obj) {
  if (!isOverviewMovable(obj)) return toast("Este objeto não pode ser movido.");
  overviewMove = {
    id: obj.id,
    original: { x: obj.x, z: obj.z },
    candidate: worldToTile(obj.x, obj.z),
  };
  updateOverviewMarker();
  renderOverviewPanel();
}

function cancelOverviewMove() {
  overviewMove = null;
  updateOverviewMarker();
  renderOverviewPanel();
}

function confirmOverviewMove() {
  const obj = state.objects.find((item) => item.id === overviewMove?.id);
  if (!obj) return cancelOverviewMove();
  const valid = validateOverviewPlacement(obj, overviewMove.candidate);
  if (!valid.ok) return toast(valid.message || "Não pode colocar aqui.");
  obj.x = overviewMove.candidate.x;
  obj.z = overviewMove.candidate.z;
  prepareWorldObject(obj);
  overviewSelectionId = obj.id;
  overviewMove = null;
  rebuildWorld();
  updateOverviewMarker();
  renderOverviewPanel();
  toast("Objeto movido.");
}

function handleOverviewPointerDown(event) {
  if (event.target !== ui.canvas || state.mode !== "farm") return;
  event.preventDefault();
  const point = pointerToGround(event);
  if (overviewMove) {
    overviewMove.candidate = worldToTile(point.x, point.z);
    updateOverviewMarker();
    renderOverviewPanel();
    return;
  }
  const obj = overviewObjectAt(point);
  if (obj) {
    overviewSelectionId = obj.id;
    if (!isOverviewMovable(obj)) toast("Este objeto não pode ser movido.");
    updateOverviewMarker();
    renderOverviewPanel();
    return;
  }
  overviewSelectionId = null;
  overviewDrag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
  ui.canvas.setPointerCapture?.(event.pointerId);
  updateOverviewMarker();
  renderOverviewPanel();
}

function handleOverviewPointerMove(event) {
  if (!overviewMode || event.target !== ui.canvas) return;
  if (overviewMove) {
    const point = pointerToGround(event);
    overviewMove.candidate = worldToTile(point.x, point.z);
    updateOverviewMarker();
    renderOverviewPanel();
    return;
  }
  if (!overviewDrag || overviewDrag.pointerId !== event.pointerId) return;
  const dx = event.clientX - overviewDrag.x;
  const dy = event.clientY - overviewDrag.y;
  const scale = Math.max(0.03, overviewCameraBase() * 0.0028);
  overviewPan.x -= (dx - dy) * scale;
  overviewPan.z -= (dx + dy) * scale;
  const bounds = farmBounds();
  overviewPan.x = clamp(overviewPan.x, bounds.minX, bounds.maxX);
  overviewPan.z = clamp(overviewPan.z, bounds.minZ, bounds.maxZ);
  overviewDrag.x = event.clientX;
  overviewDrag.y = event.clientY;
}

function stopOverviewPointer(event) {
  if (overviewDrag?.pointerId === event.pointerId) overviewDrag = null;
}

function updateOverviewMarker() {
  if (!overviewMode) return;
  const selected = state.objects.find((obj) => obj.id === overviewSelectionId);
  if (!selected) {
    targetMarker.visible = false;
    return;
  }
  const tile = overviewMove ? overviewMove.candidate : worldToTile(selected.x, selected.z);
  const valid = overviewMove ? validateOverviewPlacement(selected, tile).ok : isOverviewMovable(selected);
  targetMarker.material.color.setHex(valid ? 0xb9f36a : 0xf06a5d);
  targetMarker.position.x = tile.x;
  targetMarker.position.z = tile.z;
  targetMarker.visible = true;
}

function overviewCameraBase() {
  const bounds = farmBounds();
  const width = bounds.maxX - bounds.minX;
  const depth = bounds.maxZ - bounds.minZ;
  return Math.max(18, Math.max(width, depth) * 0.56);
}

function pointerToGround(event) {
  const rect = ui.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const point = new THREE.Vector3();
  raycaster.ray.intersectPlane(groundPlane, point);
  const b = farmBounds();
  point.x = clamp(point.x, b.minX + 0.4, b.maxX - 0.4);
  point.z = clamp(point.z, b.minZ + 0.4, b.maxZ - 0.4);
  point.y = 0;
  return point;
}

function nearestObjectTo(point, range) {
  let best = null;
  let bestDist = Infinity;
  for (const obj of state.objects) {
    const dist = Math.hypot(obj.x - point.x, obj.z - point.z);
    if (dist <= range && dist < bestDist) {
      best = obj;
      bestDist = dist;
    }
  }
  return best;
}

function buildPath(from, target) {
  const start = { x: Math.round(from.x), z: Math.round(from.z) };
  const end = nearestValidTile(Math.round(target.x), Math.round(target.z));
  if (!end) {
    toast("Ação inválida.");
    return [];
  }
  const queue = [start];
  const came = new Map([[`${start.x},${start.z}`, null]]);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  while (queue.length) {
    queue.sort((a, b) => Math.hypot(a.x - end.x, a.z - end.z) - Math.hypot(b.x - end.x, b.z - end.z));
    const current = queue.shift();
    if (current.x === end.x && current.z === end.z) break;
    for (const [dx, dz] of dirs) {
      const next = { x: current.x + dx, z: current.z + dz };
      const key = `${next.x},${next.z}`;
      if (came.has(key) || !isWalkable(next.x, next.z)) continue;
      came.set(key, current);
      queue.push(next);
    }
  }
  const path = [];
  let cur = end;
  let guard = 0;
  while (cur && guard < 200) {
    path.unshift(new THREE.Vector3(cur.x, 0, cur.z));
    cur = came.get(`${cur.x},${cur.z}`);
    guard += 1;
  }
  if (!path.length || path[0].x !== start.x || path[0].z !== start.z) {
    toast("Não consegui chegar lá.");
    return [];
  }
  path.shift();
  return path;
}

function nearestValidTile(x, z) {
  if (isWalkable(x, z)) return { x, z };
  for (let r = 1; r <= 4; r += 1) {
    for (let dx = -r; dx <= r; dx += 1) {
      for (let dz = -r; dz <= r; dz += 1) {
        if (isWalkable(x + dx, z + dz)) return { x: x + dx, z: z + dz };
      }
    }
  }
  return null;
}

function isWalkable(x, z) {
  const b = farmBounds();
  if (x <= b.minX || x >= b.maxX || z <= b.minZ || z >= b.maxZ) return false;
  if (!isInUnlockedFarmArea(x, z)) return false;
  return !collidesAt(x, z, 0.25);
}

function movePlayer(dt) {
  if (!state || isPaused || overviewMode) return;
  let direction = new THREE.Vector3();
  if (moveInput.lengthSq() > 0) {
    autoPath = [];
    pendingAutoInteraction = null;
    direction.copy(moveInput).normalize();
  } else if (autoPath.length) {
    const target = autoPath[0];
    direction.subVectors(target, player.position);
    direction.y = 0;
    if (direction.length() < 0.12) {
      autoPath.shift();
      direction.set(0, 0, 0);
      if (!autoPath.length) finishPendingAutoInteraction();
    } else direction.normalize();
  }
  if (direction.lengthSq() === 0) {
    resetSustainedMove();
    return;
  }
  const moveDirection = direction.clone();
  const speedBoost = sustainedMoveMultiplier(moveDirection, dt);
  const standingCrop = cropAt(worldToTile(player.position.x, player.position.z));
  const speed = (standingCrop?.seedId ? 2.35 : 2.7) * speedBoost;
  const next = player.position.clone().add(moveDirection.clone().multiplyScalar(speed * dt));
  if (!collides(next.x, next.z)) {
    player.position.x = next.x;
    player.position.z = next.z;
    state.player = { x: player.position.x, z: player.position.z };
    player.rotation.y = Math.atan2(moveDirection.x, moveDirection.z);
  } else if (state.mode === "farm" && tryPushAnimal(next.x, next.z, moveDirection)) {
    if (!collides(next.x, next.z)) {
      player.position.x = next.x;
      player.position.z = next.z;
      state.player = { x: player.position.x, z: player.position.z };
    }
  }
}

function finishPendingAutoInteraction() {
  if (!pendingAutoInteraction || isPaused || overviewMode) return;
  const target = pendingAutoInteraction;
  pendingAutoInteraction = null;
  const pos = target.group?.position || target.object || target;
  if (!pos) return;
  if (Math.hypot(player.position.x - pos.x, player.position.z - pos.z) > 1.9) return toast("Você precisa chegar mais perto.");
  if (target.type !== "animal" && !isInteractionAvailable(target)) return;
  interact(target);
}

function resetSustainedMove() {
  sustainedMoveDirection = null;
  sustainedMoveTime = 0;
}

function sustainedMoveMultiplier(direction, dt) {
  if (!sustainedMoveDirection) {
    sustainedMoveDirection = direction.clone();
    sustainedMoveTime = 0;
    return 1;
  }
  sustainedMoveDirection.copy(direction);
  sustainedMoveTime += dt;
  return sustainedMoveTime >= 2 ? 1.5 : 1;
}

function tryPushAnimal(x, z, direction) {
  const animal = state.animals.find((item) => Math.hypot(item.x - x, item.z - z) < (item.type === "cow" ? 0.8 : 0.55));
  if (!animal) return false;
  const push = animal.type === "cow" ? 0.18 : 0.28;
  const next = { x: animal.x + direction.x * push, z: animal.z + direction.z * push };
  const collision = collisions.find((c) => c.id === animal.id);
  const old = { x: animal.x, z: animal.z, cx: collision?.x, cz: collision?.z };
  animal.x = next.x;
  animal.z = next.z;
  if (collision) {
    collision.x = next.x;
    collision.z = next.z;
  }
  if (animalBlocked(animal, next.x, next.z)) {
    animal.x = old.x;
    animal.z = old.z;
    if (collision) {
      collision.x = old.cx;
      collision.z = old.cz;
    }
    return false;
  }
  const group = objects.get(animal.id);
  if (group) group.position.set(animal.x, 0, animal.z);
  return true;
}

function animalBlocked(animal, x, z) {
  const b = farmBounds();
  if (x < b.minX + 0.35 || x > b.maxX - 0.35 || z < b.minZ + 0.35 || z > b.maxZ - 0.35) return true;
  if (!isInUnlockedFarmArea(x, z)) return true;
  if (collisions.some((c) => c.id !== animal.id && Math.abs(c.x - x) < (c.w || 0.8) / 2 + 0.25 && Math.abs(c.z - z) < (c.d || 0.8) / 2 + 0.25)) return true;
  return state.animals.some((other) => other.id !== animal.id && Math.hypot(other.x - x, other.z - z) < (other.type === "cow" ? 0.8 : 0.55));
}

function updateAnimalWander(dt) {
  if (!state || isPaused || overviewMode || state.mode !== "farm") return;
  for (const animal of state.animals) {
    animal.wanderTimer = Math.max(0, Number(animal.wanderTimer || 0) - dt);
    if (!animal.wanderTarget && animal.wanderTimer <= 0) {
      animal.wanderTarget = chooseAnimalWanderTarget(animal);
      animal.wanderTimer = animal.wanderTarget ? 0 : 1.8 + Math.random() * 2.2;
    }
    if (!animal.wanderTarget) continue;
    const dx = animal.wanderTarget.x - animal.x;
    const dz = animal.wanderTarget.z - animal.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.06) {
      animal.x = animal.wanderTarget.x;
      animal.z = animal.wanderTarget.z;
      animal.wanderTarget = null;
      animal.wanderTimer = 2.4 + Math.random() * 4.2;
      syncAnimalTransform(animal, null, false);
      continue;
    }
    const speed = animal.type === "cow" ? 0.24 : 0.34;
    const step = Math.min(dist, speed * dt);
    const nx = animal.x + (dx / dist) * step;
    const nz = animal.z + (dz / dist) * step;
    if (animalBlocked(animal, nx, nz) || Math.hypot(nx - animal.homeX, nz - animal.homeZ) > animalWanderRadius(animal)) {
      animal.wanderTarget = null;
      animal.wanderTimer = 1.6 + Math.random() * 2.8;
      continue;
    }
    animal.x = nx;
    animal.z = nz;
    syncAnimalTransform(animal, { x: dx / dist, z: dz / dist }, true);
  }
}

function chooseAnimalWanderTarget(animal) {
  const radius = animalWanderRadius(animal);
  for (let i = 0; i < 8; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 0.35 + Math.random() * (radius * 0.42);
    const x = animal.x + Math.cos(angle) * distance;
    const z = animal.z + Math.sin(angle) * distance;
    if (Math.hypot(x - animal.homeX, z - animal.homeZ) > radius) continue;
    if (!animalBlocked(animal, x, z)) return { x, z };
  }
  return null;
}

function animalWanderRadius(animal) {
  return animal.type === "cow" ? 2.4 : 1.9;
}

function syncAnimalTransform(animal, direction, walking) {
  const group = objects.get(animal.id);
  const collision = collisions.find((c) => c.id === animal.id);
  if (collision) {
    collision.x = animal.x;
    collision.z = animal.z;
  }
  if (!group) return;
  group.position.x = animal.x;
  group.position.z = animal.z;
  group.userData.walking = walking;
  if (direction) {
    const baseRotation = Math.atan2(direction.x, direction.z);
    group.userData.targetRotationY = animal.type === "cow" ? baseRotation - Math.PI / 2 : baseRotation;
  }
}

function collides(x, z) {
  const b = farmBounds();
  if (x < b.minX + 0.35 || x > b.maxX - 0.35 || z < b.minZ + 0.35 || z > b.maxZ - 0.35) return true;
  if (!isInUnlockedFarmArea(x, z)) return true;
  return collidesAt(x, z, 0.25);
}

function collidesAt(x, z, padding = 0.25) {
  if (collisions.some((c) => Math.abs(c.x - x) < (c.w || 0.8) / 2 + padding && Math.abs(c.z - z) < (c.d || 0.8) / 2 + padding)) return true;
  if (state?.mode === "farm") {
    return state.animals.some((animal) => Math.hypot(animal.x - x, animal.z - z) < (animal.type === "cow" ? 0.75 : 0.45));
  }
  return false;
}

function animate(time) {
  const dt = Math.min(0.05, (time - lastTime) / 1000 || 0.016);
  lastTime = time;
  resize();
  movePlayer(dt);
  updateAnimalWander(dt);
  animateScene(time);
  updateTargetMarker();
  updateActionButton();
  updateCamera();
  updateInteractionIcons();
  updateParticles();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function updateActionButton() {
  if (!ui.quickActionButton) return;
  const active = Boolean(state && !isPaused && !overviewMode && actionButtonHasTarget());
  const label = "Ação";
  ui.quickActionButton.classList.toggle("has-action", active);
  ui.quickActionButton.setAttribute("aria-label", label);
  ui.quickActionButton.innerHTML = `${ACTION_ICON}<span>${label}</span>`;
}

function actionButtonHasTarget() {
  if (!state) return false;
  if (state.mode !== "farm") return false;
  if (nearestReadyCrop(1.7)) return true;
  const item = selectedItem();
  if (item && ITEMS[item.id]?.category === "semente" && nearestPlantableSoil(1.7)) return true;
  if (item && ITEMS[item.id]?.category === "construcao") return true;
  if (activeSelection !== "tool") return false;
  if (selectedTool === "scythe" && nearestGrass(1.45)) return true;
  if (selectedTool === "axe" && nearestToolTarget(["tree", "log", "branch", "placedFence"], 1.55)) return true;
  if (selectedTool === "pickaxe" && (nearestToolTarget(["smallRock", "bigRock", "stonePath"], 1.55) || (cropAt(selectedCropTile()) && !cropAt(selectedCropTile()).seedId))) return true;
  if (selectedTool === "hoe" || selectedTool === "water") return true;
  return false;
}

function updateTargetMarker() {
  if (!state || isPaused || state.mode !== "farm") {
    targetMarker.visible = false;
    return;
  }
  if (overviewMode) {
    updateOverviewMarker();
    return;
  }
  let target = null;
  let valid = false;
  const tile = selectedCropTile();
  const crop = cropAt(tile);
  const slot = selectedItem();
  if (slot && ITEMS[slot.id]?.category === "semente" && crop && !crop.seedId) target = { x: crop.x, z: crop.z, dist: Math.hypot(crop.x - player.position.x, crop.z - player.position.z) };
  if (slot && ITEMS[slot.id]?.category === "construcao") {
    target = { x: tile.x, z: tile.z, dist: tileDistanceFromPlayer(tile) };
    valid = target.dist <= 1.7 && canPlaceConstruction(tile).ok;
  }
  if (activeSelection === "tool") {
    if (selectedTool === "scythe") target = nearestGrass(4);
    if (selectedTool === "axe") target = nearestToolTarget(["tree", "log", "branch", "placedFence"], 4);
    if (selectedTool === "pickaxe") target = nearestToolTarget(["smallRock", "bigRock", "stonePath"], 4) || (crop && !crop.seedId ? { x: crop.x, z: crop.z, dist: Math.hypot(crop.x - player.position.x, crop.z - player.position.z) } : null);
    if (selectedTool === "water" && crop) target = { x: crop.x, z: crop.z, dist: Math.hypot(crop.x - player.position.x, crop.z - player.position.z) };
    if (selectedTool === "hoe") target = { x: tile.x, z: tile.z, dist: Math.hypot(tile.x - player.position.x, tile.z - player.position.z) };
  }
  if (activeSelection !== "tool" && crop?.ready) target = { x: crop.x, z: crop.z, dist: Math.hypot(crop.x - player.position.x, crop.z - player.position.z) };
  if (!target) return targetMarker.visible = false;
  const targetDist = target.dist ?? Math.hypot(target.x - player.position.x, target.z - player.position.z);
  if (!valid) valid = targetDist <= 1.55;
  targetMarker.material.color.setHex(valid ? 0xb9f36a : 0xf06a5d);
  targetMarker.position.x = target.x;
  targetMarker.position.z = target.z;
  targetMarker.visible = true;
}

function animateScene(time) {
  const moving = moveInput.lengthSq() > 0 || autoPath.length > 0;
  player.position.y = moving ? Math.sin(time * 0.012) * 0.035 : Math.sin(time * 0.002) * 0.012;
  playerParts.leftLeg.rotation.x = moving ? Math.sin(time * 0.018) * 0.45 : 0;
  playerParts.rightLeg.rotation.x = moving ? -Math.sin(time * 0.018) * 0.45 : 0;
  for (const animal of state?.animals || []) {
    const group = objects.get(animal.id);
    if (!group) continue;
    const targetRotation = group.userData.targetRotationY ?? group.rotation.y;
    const rotationDelta = Math.atan2(Math.sin(targetRotation - group.rotation.y), Math.cos(targetRotation - group.rotation.y));
    group.rotation.y += rotationDelta * 0.12;
    const sway = Math.sin(time * (group.userData.walking ? 0.006 : 0.002) + animal.x);
    group.rotation.z = sway * (group.userData.walking ? 0.055 : 0.025);
    group.position.y = group.userData.walking ? Math.abs(Math.sin(time * 0.009 + animal.z)) * 0.035 : Math.sin(time * 0.003 + animal.z) * 0.018;
  }
}

function updateCamera() {
  const aspect = ui.canvas.clientWidth / Math.max(ui.canvas.clientHeight, 1);
  const base = overviewMode ? overviewCameraBase() : 8 / zoom;
  camera.left = -base * aspect;
  camera.right = base * aspect;
  camera.top = base;
  camera.bottom = -base;
  camera.updateProjectionMatrix();
  const focusX = overviewMode ? overviewPan.x : player.position.x * 0.32;
  const focusZ = overviewMode ? overviewPan.z : player.position.z * 0.32;
  camera.position.x += (focusX + 8 - camera.position.x) * 0.06;
  camera.position.y += ((overviewMode ? 22 : 9) - camera.position.y) * 0.06;
  camera.position.z += (focusZ + 8 - camera.position.z) * 0.06;
  camera.lookAt(focusX, 0, focusZ);
}

function resize() {
  renderer.setSize(ui.canvas.clientWidth, ui.canvas.clientHeight, false);
}

function updateInteractionIcons() {
  if (!state || isPaused || overviewMode) {
    ui.interactionIcons.innerHTML = "";
    return;
  }
  const icons = [];
  for (const item of interactionObjects) {
    const pos = item.group.position;
    const dist = Math.hypot(player.position.x - pos.x, player.position.z - pos.z);
    if (dist < 1.6) icons.push({ item, label: iconFor(item), pos: pos.clone().add(new THREE.Vector3(0, 1.25, 0)) });
  }
  for (const animal of state.animals) {
    const group = objects.get(animal.id);
    if (!group) continue;
    const dist = Math.hypot(player.position.x - group.position.x, player.position.z - group.position.z);
    if (animal.petted) {
      if (dist < 3.2) icons.push({ item: { type: "animal", animal, group, statusOnly: true }, label: heartIcon(true), heartState: "petted", pos: group.position.clone().add(new THREE.Vector3(0, 1.15, 0)) });
    } else if (dist < 1.4) {
      icons.push({ item: { type: "animal", animal, group }, label: heartIcon(false), heartState: "available", pos: group.position.clone().add(new THREE.Vector3(0, 1.15, 0)) });
    }
  }
  ui.interactionIcons.innerHTML = "";
  for (const icon of icons) {
    const p = screenPosition(icon.pos);
    const btn = document.createElement("button");
    btn.className = `interaction-button ${icon.heartState ? `heart-${icon.heartState}` : ""}`;
    btn.type = "button";
    btn.innerHTML = icon.label;
    btn.style.left = `${p.x}px`;
    btn.style.top = `${p.y}px`;
    if (icon.item.statusOnly) {
      btn.disabled = true;
      btn.setAttribute("aria-label", "Animal já recebeu carinho hoje");
    } else {
      btn.addEventListener("click", () => interact(icon.item));
    }
    ui.interactionIcons.append(btn);
  }
}

function heartIcon(filled) {
  return `<svg class="heart-status-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path d="M32 54C17 43 10 34 10 24c0-8 6-14 14-14 4 0 7 2 8 5 1-3 4-5 8-5 8 0 14 6 14 14 0 10-7 19-22 30z"
      ${filled ? 'fill="#e8464e" stroke="#c92f38"' : 'fill="rgba(255,255,255,0.45)" stroke="#e8464e"'} stroke-width="5" stroke-linejoin="round"/>
  </svg>`;
}

function iconFor(item) {
  if (item.type === "coop") return state.animals.find((a) => a.type === "chicken")?.productReady ? "Ovo" : "!";
  if (item.type === "cowBarn") return state.animals.find((a) => a.type === "cow")?.productReady ? "Leite" : "!";
  if (["seedBox", "ingredientBox", "recipeBox"].includes(item.type)) {
    const key = item.type === "seedBox" ? "seeds" : item.type === "ingredientBox" ? "ingredients" : "recipes";
    return state.deliveries[key].length ? (key === "recipes" ? "Livro" : key === "seeds" ? "Saco" : "Cesta") : "!";
  }
  return "!";
}

function screenPosition(worldPosition) {
  const projected = worldPosition.clone().project(camera);
  return {
    x: (projected.x * 0.5 + 0.5) * ui.canvas.clientWidth,
    y: (-projected.y * 0.5 + 0.5) * ui.canvas.clientHeight,
  };
}

function spawnParticles(kind, position) {
  const config = {
    dirt: [palette.soil, 12, 0.035],
    water: [palette.water, 14, 0.03],
    harvest: [palette.gold, 12, 0.04],
    heart: [0xff6b91, 8, 0.04],
    impact: [palette.stone, 9, 0.035],
    grassCut: [palette.leaf, 12, 0.035],
  }[kind];
  for (let i = 0; i < config[1]; i += 1) {
    const mesh = sphere(config[2] * (0.8 + Math.random() * 0.6), config[0], 8, 5);
    mesh.material = mesh.material.clone();
    mesh.material.transparent = true;
    mesh.position.copy(position);
    mesh.position.x += (Math.random() - 0.5) * 0.34;
    mesh.position.z += (Math.random() - 0.5) * 0.34;
    mesh.position.y += Math.random() * 0.25;
    world.add(mesh);
    particles.push({ mesh, life: 1, velocity: new THREE.Vector3((Math.random() - 0.5) * 0.035, 0.025 + Math.random() * 0.035, (Math.random() - 0.5) * 0.035) });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.life -= 0.025;
    p.velocity.y -= 0.0017;
    p.mesh.position.add(p.velocity);
    p.mesh.scale.setScalar(Math.max(p.life, 0.05));
    p.mesh.material.opacity = p.life;
    if (p.life <= 0) {
      world.remove(p.mesh);
      particles.splice(i, 1);
    }
  }
}

function spawnFloatText(text, worldPosition) {
  const pos = screenPosition(worldPosition);
  const node = document.createElement("span");
  node.className = "float-text";
  node.textContent = text;
  node.style.left = `${pos.x}px`;
  node.style.top = `${pos.y}px`;
  ui.floatLayer.append(node);
  setTimeout(() => node.remove(), 950);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function initUi() {
  migrateLegacySaveSlots();
  setupToolIcons();
  document.querySelector("#newGameButton").addEventListener("click", openNewGameFlow);
  document.querySelector("#loadGameButton").addEventListener("click", showLoadMenu);
  document.querySelector("#settingsButton").addEventListener("click", () => {
    showModal(`<h2>Configurações</h2><p>Calma aí, tchutchuco, essa versão é só um teste.</p><div class="modal-actions"><button id="settingsOk">Fechar</button></div>`);
    document.querySelector("#settingsOk").addEventListener("click", () => closeModal(false));
  });
  document.querySelector("#exitMenuButton").addEventListener("click", () => showMainMenu());
  document.querySelector("#cancelCreation").addEventListener("click", () => {
    ui.creationScreen.classList.remove("is-active");
    ui.mainMenu.classList.add("is-active");
  });
  ui.creationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startNewGame(pendingNewGameSlot);
  });
  document.querySelectorAll("[data-create]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.create;
      createAppearance[key] = Number(button.dataset.value);
      document.querySelectorAll(`[data-create="${key}"]`).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });
  ui.expandInventory.addEventListener("click", () => {
    expandedInventory = !expandedInventory;
    renderInventory();
  });
  ui.toolButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!state || isPaused || overviewMode) return;
    setActiveSelection("tool");
    ui.toolRadial.classList.toggle("is-open");
  });
  ui.toolRadial.querySelectorAll("[data-tool]").forEach((button) => button.addEventListener("click", () => setTool(button.dataset.tool)));
  ui.quickActionButton.addEventListener("click", quickAction);
  document.addEventListener("pointerdown", (event) => {
    if (!ui.toolRadial.classList.contains("is-open")) return;
    if (event.target.closest?.(".tool-radial") || event.target.closest?.("#toolButton")) return;
    ui.toolRadial.classList.remove("is-open");
  });
  document.querySelector("#pauseButton").addEventListener("click", openPauseMenu);
  ui.overviewButton.addEventListener("click", () => setOverviewMode(!overviewMode));
  document.querySelector("#zoomInButton").addEventListener("click", () => zoom = clamp(zoom + 0.15, 0.65, 1.65));
  document.querySelector("#zoomOutButton").addEventListener("click", () => zoom = clamp(zoom - 0.15, 0.65, 1.65));
  ui.canvas.addEventListener("pointerdown", handleGroundTap);
  ui.canvas.addEventListener("pointermove", handleOverviewPointerMove);
  ui.canvas.addEventListener("pointerup", stopOverviewPointer);
  ui.canvas.addEventListener("pointercancel", stopOverviewPointer);
  ui.canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom = clamp(zoom + (event.deltaY < 0 ? 0.1 : -0.1), 0.65, 1.65);
  }, { passive: false });
  setupJoystick();
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
}

function openNewGameFlow() {
  const slotButton = (slot) => {
    const recent = localStorage.getItem(saveKey(slot));
    return `
      <button class="save-option" data-new-slot="${slot}">
        <strong>Mundo ${slot}</strong>
        <span>${recent ? saveSummary(recent) : "Espaço vazio"}</span>
        <small>${recent ? "Criar novo jogo aqui apagará este mundo." : "Disponível para um novo jogo."}</small>
      </button>`;
  };
  showModal(`
    <h2>Novo Jogo</h2>
    <p>Escolha um espaço de mundo.</p>
    <div class="save-list">${SAVE_SLOTS.map(slotButton).join("")}</div>
    <div class="modal-actions"><button id="newSlotCancel">Cancelar</button></div>
  `);
  document.querySelector("#newSlotCancel").addEventListener("click", () => closeModal(false));
  document.querySelectorAll("[data-new-slot]").forEach((button) => {
    button.addEventListener("click", () => chooseNewGameSlot(Number(button.dataset.newSlot)));
  });
}

function chooseNewGameSlot(slot) {
  pendingNewGameSlot = slot;
  if (localStorage.getItem(saveKey(slot))) {
    showModal(`
      <h2>Novo Jogo</h2>
      <p>Criar um novo jogo no Mundo ${slot} apagará o progresso atual. Deseja continuar?</p>
      <div class="modal-actions"><button id="newCancel">Cancelar</button><button id="newContinue">Continuar</button></div>
    `);
    document.querySelector("#newCancel").addEventListener("click", openNewGameFlow);
    document.querySelector("#newContinue").addEventListener("click", () => {
      closeModal(false);
      ui.mainMenu.classList.remove("is-active");
      ui.creationScreen.classList.add("is-active");
    });
  } else {
    closeModal(false);
    ui.mainMenu.classList.remove("is-active");
    ui.creationScreen.classList.add("is-active");
  }
}

function setupToolIcons() {
  ui.toolRadial.querySelectorAll("[data-tool]").forEach((button) => {
    const tool = button.dataset.tool;
    button.innerHTML = `${TOOL_ICONS[tool] || ""}<span>${TOOL_LABELS[tool] || ""}</span>`;
  });
  ui.toolButton.innerHTML = TOOL_ICONS[selectedTool] || "";
  ui.quickActionButton.innerHTML = `${ACTION_ICON}<span>Ação</span>`;
}

function showLoadMenu() {
  const hasAnySave = SAVE_SLOTS.some((slot) => localStorage.getItem(saveKey(slot)) || localStorage.getItem(saveKey(slot, true)));
  const worldOption = (slot) => {
    const recent = localStorage.getItem(saveKey(slot));
    const old = localStorage.getItem(saveKey(slot, true));
    if (!recent && !old) {
      return `
        <div class="save-option is-disabled">
          <strong>Mundo ${slot}</strong>
          <span>Espaço vazio</span>
          <small>Use Novo Jogo para criar este mundo.</small>
        </div>`;
    }
    return `
      <div class="save-option world-save">
        <strong>Mundo ${slot}</strong>
        ${recent ? `<button data-load-slot="${slot}" data-load-version="recent"><span>Save mais recente</span><small>${saveSummary(recent)}</small></button>` : ""}
        ${old ? `<button data-load-slot="${slot}" data-load-version="old"><span>Save de dois dias anteriores</span><small>${saveSummary(old)}</small></button>` : ""}
      </div>`;
  };
  showModal(`
    <h2>Carregar Jogo</h2>
    ${hasAnySave ? "" : "<p>Nenhum mundo salvo ainda.</p>"}
    <div class="save-list">${SAVE_SLOTS.map(worldOption).join("")}</div>
    <div class="modal-actions"><button id="closeLoad">Fechar</button></div>
  `);
  document.querySelector("#closeLoad").addEventListener("click", () => closeModal(false));
  document.querySelectorAll("[data-load-slot]").forEach((button) => {
    button.addEventListener("click", () => loadGame(button.dataset.loadVersion, Number(button.dataset.loadSlot)));
  });
}

function openPauseMenu() {
  if (!state) return;
  showModal(`
    <h2>Pausa</h2>
    <div class="save-list">
      <button id="resumeGame">Continuar</button>
      <button id="backToMenu">Voltar ao menu principal</button>
      <button id="exitGame">Sair do jogo</button>
    </div>
  `);
  document.querySelector("#resumeGame").addEventListener("click", () => closeModal());
  document.querySelector("#backToMenu").addEventListener("click", () => showMainMenu());
  document.querySelector("#exitGame").addEventListener("click", () => {
    try { window.close(); } catch {}
    showMainMenu();
  });
}

function setupJoystick() {
  const center = () => {
    ui.stick.style.transform = "translate(-50%, -50%)";
    moveInput.set(0, 0, 0);
    resetSustainedMove();
    joystickPointer = null;
  };
  ui.joystick.addEventListener("pointerdown", (event) => {
    if (!state || isPaused || overviewMode) return;
    joystickPointer = event.pointerId;
    ui.joystick.setPointerCapture(event.pointerId);
    updateJoystick(event);
  });
  ui.joystick.addEventListener("pointermove", (event) => {
    if (event.pointerId === joystickPointer) updateJoystick(event);
  });
  ui.joystick.addEventListener("pointerup", center);
  ui.joystick.addEventListener("pointercancel", center);
}

function updateJoystick(event) {
  if (!state || isPaused || overviewMode) return;
  const rect = ui.joystick.getBoundingClientRect();
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  const len = Math.min(Math.hypot(dx, dy), 34);
  const angle = Math.atan2(dy, dx);
  const sx = Math.cos(angle) * len;
  const sy = Math.sin(angle) * len;
  ui.stick.style.transform = `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px))`;
  moveInput.set(Math.cos(angle), 0, Math.sin(angle));
  autoPath = [];
}

function handleKeyDown(event) {
  if (!state || isPaused) return;
  const key = event.key.toLowerCase();
  if (overviewMode) {
    if (key === "escape") setOverviewMode(false);
    return;
  }
  if (key === "w" || event.key === "ArrowUp") moveInput.z = -1;
  if (key === "s" || event.key === "ArrowDown") moveInput.z = 1;
  if (key === "a" || event.key === "ArrowLeft") moveInput.x = -1;
  if (key === "d" || event.key === "ArrowRight") moveInput.x = 1;
  if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) autoPath = [];
}

function handleKeyUp(event) {
  const key = event.key.toLowerCase();
  if ((key === "w" || event.key === "ArrowUp") && moveInput.z < 0) moveInput.z = 0;
  if ((key === "s" || event.key === "ArrowDown") && moveInput.z > 0) moveInput.z = 0;
  if ((key === "a" || event.key === "ArrowLeft") && moveInput.x < 0) moveInput.x = 0;
  if ((key === "d" || event.key === "ArrowRight") && moveInput.x > 0) moveInput.x = 0;
  if (moveInput.lengthSq() === 0) resetSustainedMove();
}

async function boot() {
  try {
    THREE = await loadThree();
    initThreeObjects();
    setupScene();
    initUi();
    showMainMenu();
  } catch (error) {
    console.error(error);
    ui.mainMenu.classList.add("is-active");
    const panel = ui.mainMenu.querySelector(".menu-panel");
    if (panel) {
      panel.insertAdjacentHTML("beforeend", `<p class="warning-text">Não foi possível carregar a biblioteca 3D. Verifique a conexão e recarregue.</p>`);
    }
  }
}

async function loadThree() {
  if (globalThis.THREE) return globalThis.THREE;
  const sources = [
    "https://unpkg.com/three@0.160.0/build/three.module.js",
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js",
    "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  ];
  let lastError;
  for (const source of sources) {
    try {
      return await import(source);
    } catch (error) {
      lastError = error;
    }
  }
  const scriptSources = [
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js",
    "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js",
    "https://unpkg.com/three@0.160.0/build/three.min.js",
  ];
  for (const source of scriptSources) {
    try {
      await loadScript(source);
      if (globalThis.THREE) return globalThis.THREE;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
    document.head.appendChild(script);
  });
}

boot();



