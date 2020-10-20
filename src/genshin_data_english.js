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
  gemstone: "gemstone",
  // gemstones types
  agate: {
    mob: "Pyrovine",
    name: "Agnidus Agate ",
    img: {
      sliver:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png/revision/latest/scale-to-width-down/45?cb=20200626005216",
      fragment:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png/revision/latest/scale-to-width-down/26?cb=20200626005739",
      chunk:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png/revision/latest/scale-to-width-down/33?cb=20200626010206",
      gemstone:
        "https://vignette.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png/revision/latest/scale-to-width-down/38?cb=20200625214349"
    }
  }
};

// boss_drop
export const mat_bosses = {
  flame_seed: {
    name: "Everflame seed",
    img: ""
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
