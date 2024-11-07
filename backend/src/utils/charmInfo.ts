export interface Charm {
  name: string;
  notchCost: number;
  img: string;
}

export const CharmList = () => {
  const charms: Charm[] = [
    {
      name: "Wayward Compass",
      notchCost: 1,
      img: "/charms/Wayward_Compass.webp",
    },
    {
      name: "Gathering Swarm",
      notchCost: 1,
      img: "/charms/Gathering_Swarm.webp",
    },
    {
      name: "Stalwart Shell",
      notchCost: 2,
      img: "/charms/Stalwart_Shell.webp",
    },
    {
      name: "Soul Catcher",
      notchCost: 2,
      img: "/charms/Soul_Catcher.webp",
    },
    {
      name: "Shaman Stone",
      notchCost: 3,
      img: "/charms/Shaman_Stone.webp",
    },
    {
      name: "Soul Eater",
      notchCost: 4,
      img: "/charms/Soul_Eater.webp",
    },
    {
      name: "Dashmaster",
      notchCost: 2,
      img: "/charms/Dashmaster.webp",
    },
    {
      name: "Sprintmaster",
      notchCost: 1,
      img: "/charms/Sprintmaster.webp",
    },
    {
      name: "Grubsong",
      notchCost: 1,
      img: "/charms/Grubsong.webp",
    },
    {
      name: "Grubberfly's Elegy",
      notchCost: 3,
      img: "/charms/Grubberflys_Elegy.webp",
    },
    {
      name: "Fragile/Unbreakable Heart",
      notchCost: 2,
      img: "/charms/Unbreakable_Heart.webp",
    },
    {
      name: "Fragile/Unbreakable Greed",
      notchCost: 2,
      img: "/charms/Unbreakable_Greed.webp",
    },
    {
      name: "Fragile/Unbreakable Strength",
      notchCost: 3,
      img: "/charms/Unbreakable_Strength.webp",
    },
    {
      name: "Spell Twister",
      notchCost: 2,
      img: "/charms/Spell_Twister.webp",
    },
    {
      name: "Steady Body",
      notchCost: 1,
      img: "/charms/Steady_Body.webp",
    },
    {
      name: "Heavy Blow",
      notchCost: 2,
      img: "/charms/Heavy_Blow.webp",
    },
    {
      name: "Quick Slash",
      notchCost: 3,
      img: "/charms/Quick_Slash.webp",
    },
    {
      name: "Longnail",
      notchCost: 2,
      img: "/charms/Longnail.webp",
    },
    {
      name: "Mark of Pride",
      notchCost: 3,
      img: "/charms/Mark_of_Pride.webp",
    },
    {
      name: "Fury of the Fallen",
      notchCost: 2,
      img: "/charms/Fury_of_the_Fallen.webp",
    },
    {
      name: "Thorns of Agony",
      notchCost: 1,
      img: "/charms/Thorns_of_Agony.webp",
    },
    {
      name: "Baldur Shell",
      notchCost: 2,
      img: "/charms/Baldur_Shell.webp",
    },
    {
      name: "Flukenest",
      notchCost: 3,
      img: "/charms/Flukenest.webp",
    },
    {
      name: "Defender's Crest",
      notchCost: 1,
      img: "/charms/Defenders_Crest.webp",
    },
    {
      name: "Glowing Womb",
      notchCost: 2,
      img: "/charms/Glowing_Womb.webp",
    },
    {
      name: "Quick Focus",
      notchCost: 3,
      img: "/charms/Quick_Focus.webp",
    },
    {
      name: "Deep Focus",
      notchCost: 4,
      img: "/charms/Deep_Focus.webp",
    },
    {
      name: "Lifeblood Heart",
      notchCost: 2,
      img: "/charms/Lifeblood_Heart.webp",
    },
    {
      name: "Lifeblood Core",
      notchCost: 3,
      img: "/charms/Lifeblood_Core.webp",
    },
    {
      name: "Joni's Blessing",
      notchCost: 4,
      img: "/charms/Jonis_Blessing.webp",
    },
    {
      name: "Hiveblood",
      notchCost: 4,
      img: "/charms/Hiveblood.webp",
    },
    {
      name: "Spore Shroom",
      notchCost: 1,
      img: "/charms/Spore_Shroom.webp",
    },
    {
      name: "Sharp Shadow",
      notchCost: 2,
      img: "/charms/Sharp_Shadow.webp",
    },
    {
      name: "Shape of Unn",
      notchCost: 2,
      img: "/charms/Shape_of_Unn.webp",
    },
    {
      name: "Nailmaster's Glory",
      notchCost: 1,
      img: "/charms/Nailmasters_Glory.webp",
    },
    {
      name: "Weaversong",
      notchCost: 2,
      img: "/charms/Weaversong.webp",
    },
    {
      name: "Dream Wielder",
      notchCost: 1,
      img: "/charms/Dream_Wielder.webp",
    },
    {
      name: "Dreamshield",
      notchCost: 3,
      img: "/charms/Dreamshield.webp",
    },
    {
      name: "Grimmchild",
      notchCost: 2,
      img: "/charms/Grimmchild.webp",
    },
    {
      name: "Carefree Melody",
      notchCost: 3,
      img: "/charms/Carefree_Melody.webp",
    },
    {
      name: "Kingsoul",
      notchCost: 5,
      img: "/charms/Kingsoul.webp",
    },
  ];
  return charms;
};
