// BARISTAS — Mohammedia Menu (from the provided PDF)
// Edit this file to add/remove items or categories.

const menuCategories = [
  "Petit Déjeuner",
  "À la carte",
  "Salades",
  "Poké Bowl",
  "Tapas",
  "Pizza",
  "Pâtes",
  "Risotto Arborio",
  "Sandwichs",
  "Viandes",
  "Poissons",
  "Chocolat Chaud",
  "Café & Thé",
  "Thé",
  "Eaux & Soft"
];

const menuItems = [
  // ---------------- PETIT DEJEUNER ----------------
  { category: "Petit Déjeuner", name: "Express", desc: "Boisson chaude + jus d’orange ou jus de carotte", price: "40 dh" },
  { category: "Petit Déjeuner", name: "Le Gourmand", desc: "Boisson chaude + jus d’orange ou jus de carotte + œufs brouillés + corbeille de pain (beurre, miel, confiture) + trois minis viennoiseries", price: "59 dh" },
  { category: "Petit Déjeuner", name: "Nice", desc: "Boisson chaude + jus d’orange ou jus de carotte + œufs brouillés + jambon et fromage + French toasts + fruits au miel + yaourt muesli + pommes de terre nouvelles au four", price: "65 dh" },
  { category: "Petit Déjeuner", name: "Fassi", desc: "Boisson chaude + jus d’orange ou jus de carotte + œufs au khlii + corbeille de pain (beurre & miel) + huile d’olive + aïril khtit + r. d. nature + 3 marocains (msemen, harcha, baghrir)", price: "65 dh" },
  { category: "Petit Déjeuner", name: "L’Américain", desc: "Boisson chaude + jus + 3 œufs au plat + 3 tranches de fromage + 3 saucisses de bœuf + salade de fruits + yaourt muesli + pommes de terre nouvelles au four + 2 minis pancakes + au chocolat", price: "79 dh" },
  { category: "Petit Déjeuner", name: "Healthy", desc: "Boisson chaude + jus + pain bagel (cream cheese, avocat, saumon fumé, œuf brouillé, roquette) + yaourt aux graines de chia + fruits de saison + fruits secs + 2 minis pancakes + au chocolat", price: "87 dh" },
  { category: "Petit Déjeuner", name: "Petit Déj. Enfants", desc: "Chocolat chaud + jus d’orange ou jus de carotte + salade de fruits + 2 pancakes au chocolat", price: "39 dh" },

  // ---------------- A LA CARTE ----------------
  { category: "À la carte", name: "Omelette nature", price: "20 dh" },
  { category: "À la carte", name: "Omelette au choix", desc: "Charcuterie / fromage / champignons", price: "24 dh" },
  { category: "À la carte", name: "Œuf au khlii", price: "28 dh" },
  { category: "À la carte", name: "Assortiments marocains", desc: "Msemen, harcha, baghrir", price: "23 dh" },
  { category: "À la carte", name: "Toast fromage fondu", price: "25 dh" },
  { category: "À la carte", name: "Trois minis viennoiseries", price: "20 dh" },

  // ---------------- SALADES ----------------
  { category: "Salades", name: "Caesar", desc: "Salade romaine, poulet croustillant, croûtons, parmesan", price: "65 dh" },
  { category: "Salades", name: "Baristas", desc: "Salade frisée, champignons, légumes grillés, fromage feta, tataki de thon", price: "70 dh" },
  { category: "Salades", name: "Carpaccio de bœuf", price: "75 dh" },
  { category: "Salades", name: "Carpaccio de daurade", desc: "Citron, truffe, fleur de sel", price: "70 dh" },
  { category: "Salades", name: "Caprese", desc: "Roquette, mozzarella, tomates, basilic, croûtons", price: "55 dh" },
  { category: "Salades", name: "Chèvre", desc: "Chèvre toasté, œuf, salade frisée, oignons confits, croûtons", price: "65 dh" },
  { category: "Salades", name: "Tartare de loup", price: "70 dh" },

  // ---------------- POKE BOWL ----------------
  { category: "Poké Bowl", name: "Poké Bowl Saumon", desc: "Quinoa, saumon frais, avocat, carottes, betterave, chou rouge, concombre", price: "75 dh" },
  { category: "Poké Bowl", name: "Poké Bowl Poulet", desc: "Quinoa, poulet, avocat, carottes, betterave, chou, concombre", price: "70 dh" },
  { category: "Poké Bowl", name: "Poké Bowl Gamba", desc: "Quinoa, gamba, avocat, carottes, betterave, chou rouge, concombre", price: "75 dh" },

  // ---------------- TAPAS ----------------
  { category: "Tapas", name: "Croquettes de fruits de mer", price: "65 dh" },
  { category: "Tapas", name: "Gambas el pil pil", price: "60 dh" },
  { category: "Tapas", name: "Poulpe et gambas provençal", price: "75 dh" },
  { category: "Tapas", name: "Poulpe pil pil", price: "60 dh" },
  { category: "Tapas", name: "Calamar Romana", price: "75 dh" },
  { category: "Tapas", name: "Patatras bravas", price: "30 dh" },

  // ---------------- PIZZA ----------------
  { category: "Pizza", name: "Napolitaine", desc: "Pomodoro, anchois, olive", price: "60 dh" },
  { category: "Pizza", name: "Margarita", desc: "Mozza, pomodoro, basilic, huile d’olive", price: "65 dh" },
  { category: "Pizza", name: "Végétarienne", desc: "Mozza, poivrons, champignons, tomates, légumes grillés, roquette, pesto", price: "70 dh" },
  { category: "Pizza", name: "Thon", desc: "Mozza, tomate, thon, câpres, olive, oignon rouge, roquette", price: "75 dh" },
  { category: "Pizza", name: "4 Fromages", desc: "Mozza, crème, gorgonzola, parmesan, ricotta, chèvre, poire", price: "70 dh" },
  { category: "Pizza", name: "Viandarde", desc: "Mozza, pomodoro, viande hachée, jambon fumé, aubergine, courgette, poivrons", price: "80 dh" },
  { category: "Pizza", name: "Fruits de mer", desc: "Mozza, pomodoro, gambas, seiche, moules, roquette", price: "85 dh" },

  // ---------------- PÂTES ----------------
  { category: "Pâtes", name: "Bolognaise", desc: "Viande hachée", price: "65 dh" },
  { category: "Pâtes", name: "Carbonara", desc: "Sauce crème, jambon fumé, œuf, parmesan", price: "60 dh" },
  { category: "Pâtes", name: "Terra et mare", desc: "Sauce à la crème, fruits de mer, champignons de Paris", price: "80 dh" },
  { category: "Pâtes", name: "Alfredo", desc: "Sauce à la crème, poulet braisé, champignons de Paris", price: "65 dh" },
  { category: "Pâtes", name: "Tartufe", desc: "Sauce à la crème, truffe noire, champignons de Paris", price: "80 dh" },

  // ---------------- RISOTTO ----------------
  { category: "Risotto Arborio", name: "Pollo-Funghi", desc: "Sauce Alfredo, poulet, champignons, basilic, parmesan", price: "65 dh" },
  { category: "Risotto Arborio", name: "Risotto Gamberoni", desc: "Crème fraîche, basilic, champignons, parmesan", price: "75 dh" },
  { category: "Risotto Arborio", name: "Risotto Frutti di Mare", desc: "Crème fraîche, crevette, calamar, basilic, parmesan", price: "80 dh" },

  // ---------------- SANDWICHS ----------------
  { category: "Sandwichs", name: "Panozzo bœuf", price: "60 dh" },
  { category: "Sandwichs", name: "Panozzo viande hachée", price: "50 dh" },
  { category: "Sandwichs", name: "Panozzo pollo funghi", price: "50 dh" },
  { category: "Sandwichs", name: "Panozzo poulet croustillant", price: "50 dh" },
  { category: "Sandwichs", name: "Panozzo fruits de mer", price: "60 dh" },
  { category: "Sandwichs", name: "Panozzo végétarienne", price: "35 dh" },
  { category: "Sandwichs", name: "Burger Crespy chiken & cheddar", price: "50 dh" },
  { category: "Sandwichs", name: "Burger cheese & becan", price: "50 dh" },

  // ---------------- VIANDES ----------------
  { category: "Viandes", name: "Cœur de filet de bœuf mariné et grillé", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "155 dh" },
  { category: "Viandes", name: "Entrecôte marinée et grillée", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "140 dh" },
  { category: "Viandes", name: "Brochettes kefta marinées et grillées", desc: "Légumes sautés, frites", price: "75 dh" },
  { category: "Viandes", name: "Brochettes de poulet fermier marinées et grillé", desc: "Légumes sautés, frites", price: "75 dh" },
  { category: "Viandes", name: "Côte de bœuf marinée et grillée", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "210 dh" },
  { category: "Viandes", name: "Côtelettes d’agneau", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "110 dh" },
  { category: "Viandes", name: "Épaule d’agneau", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "210 dh" },
  { category: "Viandes", name: "Souris d’agneau confite", desc: "Carottes à la charmola, pommes purée", price: "170 dh" },
  { category: "Viandes", name: "Milanaise", desc: "Escalope de poulet, frites, mesclun", price: "65 dh" },
  { category: "Viandes", name: "Cordon-bleu", desc: "De poulet, emmental, jambon, frites, mesclun", price: "85 dh" },
  { category: "Viandes", name: "Saucisse de foie", desc: "Taktouka, frites", price: "70 dh" },
  { category: "Viandes", name: "Assortiment de viandes grillées", desc: "Pommes purée, légumes sautés, sauce poivre ou champignons, frites", price: "175 dh" },

  // ---------------- POISSONS ----------------
  { category: "Poissons", name: "Saumon frais mariné et grillé", desc: "Pomme écrasée, légumes sautés, sauce beurre blanc", price: "130 dh" },
  { category: "Poissons", name: "Saint pierre mariné et grillé", desc: "Pomme écrasée, légumes sautés, sauce moutarde miel", price: "115 dh" },
  { category: "Poissons", name: "Sole meunière", desc: "Pomme écrasée, légumes sautés", price: "130 dh" },
  { category: "Poissons", name: "Poulpe mariné et grillé", desc: "Pomme écrasée, légumes sautés, sauce vierge", price: "130 dh" },
  { category: "Poissons", name: "Espadon", desc: "Pomme écrasée, légumes sautés, sauce persillade", price: "120 dh" },
  { category: "Poissons", name: "Fish and Chips", desc: "Colin croustillant, pomme frites, sauce tartare et aioli", price: "75 dh" },

  // ---------------- CHOCOLAT CHAUD ----------------
  { category: "Chocolat Chaud", name: "Chocolat chaud", price: "40 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud blanc", price: "40 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud belge", price: "45 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud saveur menthe", price: "45 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud caramel", price: "45 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud à l’ancienne", price: "50 dh" },
  { category: "Chocolat Chaud", name: "Chocolat chaud noisette", price: "45 dh" },

  // ---------------- CAFE ET THE ----------------
  { category: "Café & Thé", name: "Expresso solo", price: "24 dh" },
  { category: "Café & Thé", name: "Expresso doppio", price: "34 dh" },
  { category: "Café & Thé", name: "Expresso macchiato", price: "26 dh" },
  { category: "Café & Thé", name: "Expresso compana", price: "26 dh" },
  { category: "Café & Thé", name: "Café americano", price: "26 dh" },
  { category: "Café & Thé", name: "Café con leche", price: "30 dh" },
  { category: "Café & Thé", name: "Café caramel macchiato", price: "35 dh" },
  { category: "Café & Thé", name: "Café mochaccino", price: "35 dh" },
  { category: "Café & Thé", name: "Latte classique", price: "30 dh" },
  { category: "Café & Thé", name: "Latte lotus / crème brûlée / oreo", price: "35 dh" },
  { category: "Café & Thé", name: "Affogato", price: "38 dh" },
  { category: "Café & Thé", name: "Spanish latte", price: "40 dh" },
  { category: "Café & Thé", name: "Cortado", price: "30 dh" },
  { category: "Café & Thé", name: "Latte caramel salé", price: "38 dh" },

  // ---------------- THE ----------------
  { category: "Thé", name: "Thé artisanal", price: "30 dh" },
  { category: "Thé", name: "Thé au lait", price: "30 dh" },
  { category: "Thé", name: "Thé marocain", price: "22 dh" },

  // ---------------- EAUX & SOFT ----------------
  { category: "Eaux & Soft", name: "Eau minérale", price: "14 dh" },
  { category: "Eaux & Soft", name: "Eau gazeuse", price: "18 dh" },
  { category: "Eaux & Soft", name: "Soda", price: "18 dh" }
];
