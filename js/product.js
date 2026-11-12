// All products live here. Add, edit or remove items and the Shop updates by itself.
// category must be one of: trays, bowls, coasters, clocks, islamic, jewellery
const products = [
  {
    id: 'royal-fleurie',
    name: 'Royal Fleurie',
    price: 7000,
    category: 'trays',
    description: 'Three-tier resin serving tray',
    image: 'images/royal%20fleurie%203%20tier/royal-fleurie-1.jpeg',
    images: [
      'images/royal%20fleurie%203%20tier/royal-fleurie-1.jpeg',
      'images/royal%20fleurie%203%20tier/royal-fleurie-2.jpeg',
      'images/royal%20fleurie%203%20tier/royal-fleurie-3.jpeg',
      'images/royal%20fleurie%203%20tier/royal-fleurie-4.jpeg'
    ]
  },
  {
    id: 'aurelia-glimmers-tray',
    name: 'Aurelia’s Glimmer Tray',
    price: 9500,
    category: 'trays',
    description: 'Handcrafted resin tray with a soft champagne shimmer.',
    image: 'images/Aurelia%27s%20Glimmer%20Tray/aurelia-glimmers-tray1.jpeg',
    images: [
      'images/Aurelia%27s%20Glimmer%20Tray/aurelia-glimmers-tray1.jpeg',
      'images/Aurelia%27s%20Glimmer%20Tray/aurelia-glimmers-tray2.jpeg',
      'images/Aurelia%27s%20Glimmer%20Tray/aurelia-glimmers-tray3.jpeg',
      'images/Aurelia%27s%20Glimmer%20Tray/aurelia-glimmers-tray4.jpeg'
    ]
  },
  {
    id: 'glided-cosmos',
    name: 'Glided Cosmos',
    price: 5000,
    category: 'trays',
    description: '10.5-inch resin tray.',
    image: 'images/Glided%20Cosmos/glided-cosmos-1.jpeg',
    images: [
      'images/Glided%20Cosmos/glided-cosmos-1.jpeg',
      'images/Glided%20Cosmos/glided-cosmos-2.jpeg',
      'images/Glided%20Cosmos/glided-cosmos-3.jpeg',
      'images/Glided%20Cosmos/glided-cosmos-4.jpeg'
    ]
  },
  {
    id: 'glided-drift',
    name: 'Glided Drift',
    price: 6000,
    category: 'trays',
    description: 'Glided Drift resin tray.',
    image: 'images/Glided%20Drift/glideddrift.jpeg',
    images: ['images/Glided%20Drift/glideddrift.jpeg']
  },
  {
    id: 'verdant-empire',
    name: 'Verdant Empire',
    price: 12000,
    category: 'trays',
    description: 'Handcrafted emerald resin tray with gold leaf.',
    image: 'images/Verdant%20Empire/verdantempire1.jpeg',
    images: [
      'images/Verdant%20Empire/verdantempire1.jpeg',
      'images/Verdant%20Empire/verdantempire2.jpeg',
      'images/Verdant%20Empire/verdantempire3.jpeg',
      'images/Verdant%20Empire/verdantempire4.jpeg',
      'images/Verdant%20Empire/verdantempire5.jpeg'
    ]
  },
  {
    id: 'gold-vein-bowl',
    name: 'Gold Vein Bowl',
    price: 2000,
    category: 'bowls',
    description: 'Handcrafted resin trinket bowl with striking gold veining, a refined statement piece for any space.',
    image: 'images/GOLD%20VEIN%20BOWL/goldenvein.jpeg',
    images: ['images/GOLD%20VEIN%20BOWL/goldenvein.jpeg']
  },
  {
    id: 'elysian-dish',
    name: 'The Elysian Dish',
    price: 6000,
    category: 'bowls',
    description: 'Ultimate Royal Premium Trinket Dish',
    image: 'images/The%20Elysian%20Dish/eleysian%20dish.jpeg',
    images: ['images/The%20Elysian%20Dish/eleysian%20dish.jpeg']
  },
  {
    id: 'maison-pearl',
    name: 'Maison Pearl',
    price: 6000,
    category: 'bowls',
    description: 'Showstopper Trinket Bowl (Customization Available)',
    image: 'images/Maison%20Pearl/maison_pearl.jpeg',
    images: ['images/Maison%20Pearl/maison_pearl.jpeg']
  },
  {
    id: 'golden-hour-clock',
    name: 'The Golden Hour',
    price: 8000,
    category: 'clocks',
    description: '14 and 18 Inch sizes Available.',
    image: 'images/The%20Golden%20Hour/goldenhour1.jpeg',
    images: [
      'images/The%20Golden%20Hour/goldenhour1.jpeg',
      'images/The%20Golden%20Hour/goldenhour2.jpeg',
      'images/The%20Golden%20Hour/goldenhour3.jpeg',
      'images/The%20Golden%20Hour/goldenhour4.jpeg'
    ]
  },
  {
    id: 'emerald-tide-chronicle',
    name: 'Emerald Tide Chronicle',
    price: 12500,
    category: 'clocks',
    description: '16-inch resin wall clock; 18-inch size available on request.',
    image: 'images/emerald%20tide%20chronicle/emerald-tide-chronicle-1.jpeg',
    images: [
      'images/emerald%20tide%20chronicle/emerald-tide-chronicle-1.jpeg',
      'images/emerald%20tide%20chronicle/emerald-tide-chronicle-2.jpeg',
      'images/emerald%20tide%20chronicle/emerald-tide-chronicle-3.jpeg',
      'images/emerald%20tide%20chronicle/emerald-tide-chronicle-4.jpeg'
    ]
  },
  {
    id: 'luminara-geode',
    name: 'Luminara Geode',
    price: 10000,
    category: 'clocks',
    description: '14-inch resin wall clock; 18-inch size available on request.',
    image: 'images/Luminara%20Geode/luminarageode1.jpeg',
    images: [
      'images/Luminara%20Geode/luminarageode1.jpeg',
      'images/Luminara%20Geode/luminarageode2.jpeg',
      'images/Luminara%20Geode/luminarageode3.jpeg'
    ]
  },
  {
    id: 'noor-e-nikkah',
    name: 'Noor-e-Nikkah',
    price: 16000,
    category: 'islamic',
    description: 'Bridal set with a pair of prayer mats, a bookmark, tasbeeh, Quran, Quran rehal, and Quran box.',
    image: 'images/NooreNikkah/noorenikkah1.jpeg',
    images: [
      'images/NooreNikkah/noorenikkah1.jpeg',
      'images/NooreNikkah/noorenikkah2.jpeg',
      'images/NooreNikkah/noorenikkah3.jpeg',
      'images/NooreNikkah/noorenikkah4.jpeg',
      'images/NooreNikkah/noorenikkah5.jpeg',
      'images/NooreNikkah/noorenikkah6.jpeg'
    ]
  },
  {
    id: 'emerald-serenity',
    name: 'The Emerald Serenity',
    price: 14000,
    category: 'islamic',
    description: 'Set of 3',
    image: 'images/The%20Emerald%20Serenity/emerald-serenity-cropped.jpg',
    images: ['images/The%20Emerald%20Serenity/emerald-serenity-cropped.jpg']
  },
  {
    id: 'celestial-ayat',
    name: 'Celestial Ayat',
    price: 9000,
    category: 'islamic',
    description: 'Islamic plaque',
    image: 'images/Celestial%20Ayat/Celestial.jfif',
    images: ['images/Celestial%20Ayat/Celestial.jfif']
  }
];

const categoryNames = {
  trays: 'Trays',
  bowls: 'Dishes',
  clocks: 'Clocks',
  islamic: 'Islamic Plaques'
};