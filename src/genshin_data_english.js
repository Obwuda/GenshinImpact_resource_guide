// Characters (5 star) names
export const chars = {
  diluc: "Diluc",
  jean: "Jean",
  keqing: "Keqing",
  mona: "Mona",
  qiqi: "Qiqi",
  venti: "Venti"
};

//materials
export const mat_gems = {
  // gemstones levels
  sliver: "sliver",
  fragment: "fragment",
  chunk: "chunk",
  gemstone: "gemstone"
  // gemstones types
};

// boss_drop
export const mat_bosses = {
  flame_seed: {
    boss: "Pyrovine",
    name: "Everflame seed",
    img:
      "https://img.game8.jp/5076739/2d827200c58086c269727c55977cb475.jpeg/show"
  },
  agate: {
    boss: "Pyrovine",
    name: "Agnidus Agate ",
    img: {
      sliver:
        "https://img.game8.jp/5077038/4291bec7a83d84e05cb1459c1bdf7094.jpeg/show",
      fragment:
        "https://img.game8.jp/5077062/994ea731bc0b936fbe008ede5550347f.jpeg/show",
      chunk:
        "https://img.game8.jp/5077057/c941afbe0615027af907f8f3c33f0b7d.jpeg/show",
      gemstone:
        "https://img.game8.jp/5077058/7db359241a916e8077ccc2e83c555cee.jpeg/show"
    }
  }
};

//local specials
export const mat_local = {
  lamp_grass: "Small Lamp Grass"
};

// mob drops
export const mat_mobs = {
  insignia: {
    mob: ["skirmishers", "agents", "electro cicin mages"],
    name: "Insignia",
    img: {
      lv1:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Recruit%27s_Insignia.png/revision/latest/scale-to-width-down/45?cb=20201009090211",
      lv2:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Sergeant%27s_Insignia.png/revision/latest/scale-to-width-down/45?cb=20201009090540",
      lv3:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/d/db/Item_Lieutenant%27s_Insignia.png/revision/latest/scale-to-width-down/45?cb=20201009090946"
    }
  }
};

const talent_mats = {
  level1: "Teachings of",
  level2: "Guide to",
  level3: "Philosophies of",
  resistance: "Resistance",
  freedom: "Freedom",
  ballad: "Ballad"
};

//===== end of lang specific

// ascention and talent mats
export const char_info = {
  diluc: {
    asc: {
      gemstone: "agate",
      boss_drop: "flame_seed",
      local_spe: "lamp_grass",
      mob_drop: "insignia"
    },
    talents: {
      tal_mat: talent_mats.resistance
    }
  }
};
