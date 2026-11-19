/**
 * Akshaya Milk Products - Shared Data & State Management
 * Samalkot, Andhra Pradesh
 * Local-First Dairy Store Engine with LocalStorage Sync
 * Palleturi Pachallu E-Commerce Architecture Edition
 */

const STORAGE_KEYS = {
  PRODUCTS: 'AMP_PRODUCTS_V2',
  ORDERS: 'AMP_ORDERS_V2',
  CATEGORIES: 'AMP_CATEGORIES_V2',
  STORE_STATUS: 'AMP_STORE_STATUS_V2',
  CART: 'AMP_CART_V2',
  CUSTOMER_ORDERS: 'AMP_CUSTOMER_ORDERS_V2'
};

// Clean SVG Fallback Illustrations for Dairy Products
const SVG_FALLBACKS = {
  milk: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23EFF6FF"/><path d="M75 55C75 48 80 42 88 42H112C120 42 125 48 125 55V70H75V55Z" fill="%231E3A8A"/><rect x="85" y="32" width="30" height="12" rx="4" fill="%2316A34A"/><path d="M68 70C68 66 71 63 75 63H125C129 63 132 66 132 70L140 160C140 166 135 170 129 170H71C65 170 60 166 60 160L68 70Z" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="3"/><path d="M72 105C85 100 115 115 128 108L130 135C118 140 88 125 70 132L72 105Z" fill="%23DBEAFE"/><circle cx="100" cy="118" r="16" fill="%231E3A8A"/><path d="M100 108C96 114 93 118 93 121C93 125 96 128 100 128C104 128 107 125 107 121C107 118 104 114 100 108Z" fill="%23FFFFFF"/><text x="100" y="155" font-family="sans-serif" font-size="11" font-weight="700" fill="%231E3A8A" text-anchor="middle">PURE MILK</text></svg>`,
  curd: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23F0FDF4"/><path d="M45 100C45 75 70 65 100 65C130 65 155 75 155 100C155 135 135 165 100 165C65 165 45 135 45 100Z" fill="%23B45309" stroke="%2392400E" stroke-width="3"/><ellipse cx="100" cy="90" rx="50" ry="22" fill="%23FEF3C7"/><ellipse cx="100" cy="88" rx="46" ry="19" fill="%23FFFFFF"/><path d="M80 88C85 82 115 82 120 88C115 92 85 92 80 88Z" fill="%23F1F5F9"/><text x="100" y="145" font-family="sans-serif" font-size="11" font-weight="700" fill="%23FFFFFF" text-anchor="middle">FARM CURD</text></svg>`,
  paneer: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23FEF2F2"/><rect x="50" y="80" width="70" height="60" rx="6" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="3"/><path d="M50 80L80 55H150L120 80H50Z" fill="%23F8FAFC" stroke="%23CBD5E1" stroke-width="2"/><rect x="110" y="115" width="40" height="35" rx="4" fill="%23FFFFFF" stroke="%2394A3B8" stroke-width="2"/><text x="100" y="172" font-family="sans-serif" font-size="11" font-weight="700" fill="%231E3A8A" text-anchor="middle">MALAI PANEER</text></svg>`,
  butter: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23FFFBEB"/><path d="M50 105C50 90 70 80 100 80C130 80 150 90 150 105C150 125 128 145 100 145C72 145 50 125 50 105Z" fill="%23FEF08A" stroke="%23F59E0B" stroke-width="3"/><ellipse cx="100" cy="98" rx="45" ry="18" fill="%23FEF9C3"/><text x="100" y="172" font-family="sans-serif" font-size="11" font-weight="700" fill="%2392400E" text-anchor="middle">WHITE BUTTER</text></svg>`,
  ghee: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23FFFBEB"/><rect x="70" y="54" width="60" height="16" fill="%23F59E0B"/><path d="M60 70C60 65 65 62 70 62H130C135 62 140 65 140 70V145C140 155 132 165 120 165H80C68 165 60 155 60 145V70Z" fill="%23FEF08A" stroke="%23D97706" stroke-width="3"/><path d="M62 100H138V155C138 160 130 163 120 163H80C70 163 62 160 62 155V100Z" fill="%23FBBF24"/><text x="100" y="152" font-family="sans-serif" font-size="10" font-weight="800" fill="%2378350F" text-anchor="middle">DESI GHEE</text></svg>`,
  cream: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23F8FAFC"/><ellipse cx="100" cy="140" rx="55" ry="20" fill="%23E2E8F0"/><path d="M55 105C55 85 75 75 100 75C125 75 145 85 145 105C145 125 125 145 100 145C75 145 55 125 55 105Z" fill="%23FFFFFF" stroke="%231E3A8A" stroke-width="3"/><text x="100" y="170" font-family="sans-serif" font-size="11" font-weight="700" fill="%231E3A8A" text-anchor="middle">RICH MALAI</text></svg>`,
  beverages: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23F0FDF4"/><path d="M72 65L78 155C78 160 83 165 90 165H110C117 165 122 160 122 155L128 65H72Z" fill="%23FFFFFF" stroke="%2316A34A" stroke-width="3"/><text x="100" y="180" font-family="sans-serif" font-size="11" font-weight="700" fill="%2316A34A" text-anchor="middle">MAJJIGA / LASSI</text></svg>`,
  sweets: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23FEF2F2"/><ellipse cx="100" cy="135" rx="65" ry="24" fill="%23CBD5E1"/><circle cx="80" cy="115" r="18" fill="%23F59E0B"/><circle cx="120" cy="115" r="18" fill="%23D97706"/><circle cx="100" cy="95" r="18" fill="%23FCD34D"/><text x="100" y="172" font-family="sans-serif" font-size="11" font-weight="700" fill="%23991B1B" text-anchor="middle">DAIRY SWEETS</text></svg>`,
  general: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="16" fill="%23EFF6FF"/><circle cx="100" cy="90" r="42" fill="%23DBEAFE"/><path d="M100 60C92 75 80 88 80 98C80 109 89 118 100 118C111 118 120 109 120 98C120 88 108 75 100 60Z" fill="%231E3A8A"/><text x="100" y="155" font-family="sans-serif" font-size="12" font-weight="800" fill="%231E3A8A" text-anchor="middle">AKSHAYA DAIRY</text></svg>`
};

// 11 Specific Collections requested in Section 2 (Replacing Pickle Categories)
const INITIAL_CATEGORIES = [
  'All',
  'Milk',
  'Curd',
  'Cheese & Paneer',
  'Butter',
  'Ghee',
  'Cream',
  'Dairy Beverages',
  'Traditional Sweet Bases',
  'Indian Sweets',
  'Frozen Dairy Products',
  'Canned Dairy Products'
];

// Rich Collection Cards Metadata for the Collections Section
const DAIRY_COLLECTIONS = [
  {
    name: 'Milk',
    title: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    fallback: 'milk',
    desc: 'Morning buffalo & cow milk fresh from Samalkot farms'
  },
  {
    name: 'Curd',
    title: 'Farm Curd (Perugu)',
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80',
    fallback: 'curd',
    desc: 'Dense, naturally set probiotic curd for your family'
  },
  {
    name: 'Cheese & Paneer',
    title: 'Malai Paneer & Cheese',
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=600&q=80',
    fallback: 'paneer',
    desc: 'Soft, moist artisan malai cottage cheese & ricotta'
  },
  {
    name: 'Butter',
    title: 'Hand-Churned Butter',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    fallback: 'butter',
    desc: 'Cultured unsalted white butter churned the bilona way'
  },
  {
    name: 'Ghee',
    title: 'Desi Buffalo Ghee (Neyyi)',
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=600&q=80',
    fallback: 'ghee',
    desc: 'Golden granular aroma slow-simmered in brass cauldrons'
  },
  {
    name: 'Cream',
    title: 'Fresh Malai / Cream',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    fallback: 'cream',
    desc: 'Rich, thick layer of fresh clotted cream (Meegada)'
  },
  {
    name: 'Dairy Beverages',
    title: 'Majjiga & Lassi',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    fallback: 'beverages',
    desc: 'Spiced buttermilk and thick chilled sweet lassi'
  },
  {
    name: 'Traditional Sweet Bases',
    title: 'Mawa / Pure Kova',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    fallback: 'sweets',
    desc: 'Unsweetened evaporated milk solids for festive sweets'
  },
  {
    name: 'Indian Sweets',
    title: 'Artisan Dairy Sweets',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    fallback: 'sweets',
    desc: 'Samalkot Palakova, Shrikhand, Peda, Kalakand, & Rasmalai'
  },
  {
    name: 'Frozen Dairy Products',
    title: 'Matka Malai Kulfi',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    fallback: 'sweets',
    desc: 'Traditional clay-pot frozen rabdi kulfi with saffron'
  },
  {
    name: 'Canned Dairy Products',
    title: 'Condensed Milk & Canned',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    fallback: 'milk',
    desc: 'Concentrated sweetened rich dairy for dessert preparation'
  }
];

// Product Catalog: All Best Sellers + New Arrivals
const INITIAL_PRODUCTS = [
  // --- BEST SELLERS (Section 3) ---
  {
    id: 'amp-101',
    name: 'Taaja Paalu',
    regionalName: 'తాజా పాలు (Fresh Buffalo Milk)',
    category: 'Milk',
    price: 65,
    mrp: 75,
    unit: '1L',
    stock: 50,
    featured: true,
    isBestSeller: true,
    badgeText: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'milk',
    description: 'Fresh whole buffalo milk collected every morning from certified pastoral farmers in Samalkot and the Godavari basin. Pasteurized and hygienically packed with rich 6.5% natural milk fat.',
    ingredients: '100% Pure Fresh Buffalo Milk. Standardized & Pasteurized. Zero synthetic preservatives.',
    storage: 'Keep refrigerated below 4°C. Consume within 48 hours of delivery.'
  },
  {
    id: 'amp-102',
    name: 'Perugu',
    regionalName: 'చిక్కటి పెరుగు (Thick Farm Curd)',
    category: 'Curd',
    price: 40,
    mrp: 45,
    unit: '500g',
    stock: 45,
    featured: true,
    isBestSeller: true,
    badgeText: 'BESTSELLER',
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'curd',
    description: 'Dense, naturally set curd crafted from whole farm milk with active probiotic cultures. Creamy non-sour texture ideal for curd rice and traditional Andhra meals.',
    ingredients: 'Pasteurized Full Cream Milk, Active Lactic Probiotic Cultures.',
    storage: 'Store chilled between 2°C to 5°C. Best enjoyed within 4 days.'
  },
  {
    id: 'amp-103',
    name: 'Paneer',
    regionalName: 'మలై పన్నీర్ (Fresh Malai Paneer)',
    category: 'Cheese & Paneer',
    price: 90,
    mrp: 100,
    unit: '200g',
    stock: 35,
    featured: true,
    isBestSeller: true,
    badgeText: 'HOT',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'paneer',
    description: 'Soft, melt-in-the-mouth cottage cheese prepared from pure buffalo milk. Retains superior moisture and softness in curries, tikkas, and paneer butter masala.',
    ingredients: 'Pure Pasteurized Buffalo Milk, Citric Acid (food grade coagulant).',
    storage: 'Keep refrigerated at 2°C. Submerge in lukewarm water for 10 mins before cooking.'
  },
  {
    id: 'amp-104',
    name: 'Venna',
    regionalName: 'స్వచ్ఛమైన వెన్న (Hand-churned White Butter)',
    category: 'Butter',
    price: 60,
    mrp: 70,
    unit: '200g',
    stock: 30,
    featured: false,
    isBestSeller: true,
    badgeText: 'TRADITIONAL',
    rating: 4.7,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'butter',
    description: 'Traditional unsalted white butter hand-churned directly from cultured cream. Creamy authentic aroma, beloved with hot Andhra upma, rotis, and dosas.',
    ingredients: 'Cultured Fresh Cream. No added salt or artificial coloring.',
    storage: 'Refrigerate at 4°C. Keeps fresh for 12 days.'
  },
  {
    id: 'amp-105',
    name: 'Neyyi',
    regionalName: 'గోదావరి స్వచ్ఛమైన నెయ్యి (Desi Ghee)',
    category: 'Ghee',
    price: 350,
    mrp: 390,
    unit: '500ml',
    stock: 60,
    featured: true,
    isBestSeller: true,
    badgeText: 'BESTSELLER',
    rating: 5.0,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'ghee',
    description: 'Golden granular desi ghee slowly simmered from cultured butter in traditional brass cauldrons. Intensely aromatic with the authentic flavor of Godavari heritage.',
    ingredients: '100% Clarified Butter Fat (Desi Milk Fat). Zero palm oil, zero synthetic essence.',
    storage: 'Store in a cool dry place. Do not refrigerate. Shelf life: 9 months.'
  },
  {
    id: 'amp-106',
    name: 'Meegada',
    regionalName: 'మీగడ (Fresh Malai / Clotted Cream)',
    category: 'Cream',
    price: 80,
    mrp: 90,
    unit: '200ml',
    stock: 20,
    featured: false,
    isBestSeller: true,
    badgeText: 'LIMITED',
    rating: 4.8,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'cream',
    description: 'Luscious, thick layer of fresh cream collected from slow-boiled morning milk. Essential for royal sweets, gravies, or savoring with hot rice and jaggery.',
    ingredients: 'Pure Clotted Milk Fat (Minimum 45% fat).',
    storage: 'Strictly keep refrigerated under 4°C. Consume within 3 days.'
  },
  {
    id: 'amp-107',
    name: 'Majjiga',
    regionalName: 'మసాలా మజ్జిగ (Spiced Buttermilk)',
    category: 'Dairy Beverages',
    price: 20,
    mrp: 25,
    unit: '500ml',
    stock: 65,
    featured: true,
    isBestSeller: true,
    badgeText: 'COOLING',
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'beverages',
    description: 'Refreshing Andhra style spiced buttermilk infused with crushed ginger, fresh green chillies, curry leaves, and roasted cumin. The ultimate natural digestive.',
    ingredients: 'Diluted Fresh Curd, Filtered Water, Salt, Ginger, Green Chilli, Curry Leaves, Cumin.',
    storage: 'Serve chilled. Keep refrigerated.'
  },
  {
    id: 'amp-108',
    name: 'Lassi',
    regionalName: 'చిక్కని లస్సీ (Sweet Cream Lassi)',
    category: 'Dairy Beverages',
    price: 35,
    mrp: 40,
    unit: '400ml',
    stock: 40,
    featured: true,
    isBestSeller: true,
    badgeText: 'POPULAR',
    rating: 4.8,
    reviewsCount: 115,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'beverages',
    description: 'Thick, creamy sweet lassi churned from full cream curd with aromatic green cardamom and rose essence, topped with a dollop of fresh malai.',
    ingredients: 'Cultured Whole Milk Curd, Sugar, Green Cardamom, Rose Essence, Saffron.',
    storage: 'Keep refrigerated between 1°C to 4°C. Shake well before drinking.'
  },
  {
    id: 'amp-109',
    name: 'Kova',
    regionalName: 'పచ్చి కోవా (Unsweetened Mawa / Khoya)',
    category: 'Traditional Sweet Bases',
    price: 120,
    mrp: 140,
    unit: '250g',
    stock: 28,
    featured: false,
    isBestSeller: true,
    badgeText: 'ARTISANAL',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Pure evaporated milk solids slowly reduced over firewood heat. Dense, granular, and free from any added starch or flour. Perfect foundation for homemade sweets.',
    ingredients: '100% Buffalo Milk Solids. Unsweetened.',
    storage: 'Keep refrigerated. Consume within 7 days or freeze for up to 30 days.'
  },
  {
    id: 'amp-110',
    name: 'Shrikhand',
    regionalName: 'కేసర్ ఏలకుల శ్రీఖండ్ (Kesar Cardamom Shrikhand)',
    category: 'Indian Sweets',
    price: 75,
    mrp: 85,
    unit: '250g',
    stock: 35,
    featured: true,
    isBestSeller: true,
    badgeText: 'FESTIVE',
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Velvety dessert prepared from strained hung curd, flavored with Kashmiri saffron strands, green cardamom, and crunchy slivered pistachios.',
    ingredients: 'Strained Curd (Chakka), Sugar, Saffron, Green Cardamom, Almonds, Pistachios.',
    storage: 'Keep chilled below 4°C. Best served chilled.'
  },

  // --- NEW ARRIVALS (Section 4) ---
  {
    id: 'amp-111',
    name: 'Milk Kova',
    regionalName: 'పాలకోవా (Traditional Sweetened Milk Kova)',
    category: 'Traditional Sweet Bases',
    price: 120,
    mrp: 135,
    unit: '250g',
    stock: 30,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Caramelized reduced buffalo milk delicacy slowly cooked with raw sugar and touch of desi ghee.',
    ingredients: 'Whole Buffalo Milk, Fine Sugar, Pure Ghee.',
    storage: 'Store in cool dry place. Shelf life: 10 days.'
  },
  {
    id: 'amp-112',
    name: 'Milk Kova Roll',
    regionalName: 'పాలకోవా రోల్ (Kova Roll with Dry Fruits)',
    category: 'Indian Sweets',
    price: 140,
    mrp: 160,
    unit: '250g',
    stock: 25,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 5.0,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Rolled sheets of sweet kova stuffed with crushed pistachios, cashews, and aromatic cardamom.',
    ingredients: 'Milk Solids, Sugar, Pistachio, Cashew, Cardamom.',
    storage: 'Keep in dry air-tight box. Shelf life: 12 days.'
  },
  {
    id: 'amp-113',
    name: 'Palakova',
    regionalName: 'సామర్లకోట పాలకోవా (Samalkot Special Palakova)',
    category: 'Indian Sweets',
    price: 150,
    mrp: 170,
    unit: '250g',
    stock: 40,
    featured: true,
    isNewArrival: true,
    badgeText: 'SAMALKOT SPECIAL',
    rating: 5.0,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'The legendary caramelized milk sweet of Samalkot! Unmatched rich dairy taste with delicate texture.',
    ingredients: 'Whole Milk, Sugar, Desi Ghee.',
    storage: 'Store at room temperature. Shelf life: 14 days.'
  },
  {
    id: 'amp-114',
    name: 'Matka Kulfi',
    regionalName: 'మట్కా మలై కుల్ఫీ (Earthen Pot Malai Kulfi)',
    category: 'Frozen Dairy Products',
    price: 50,
    mrp: 60,
    unit: '100g',
    stock: 35,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.9,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Slow-cooked condensed milk frozen in traditional porous clay pots with rabdi, saffron, and nuts.',
    ingredients: 'Whole Milk, Cream, Sugar, Pistachio, Almond, Cardamom.',
    storage: 'Store frozen at -18°C.'
  },
  {
    id: 'amp-115',
    name: 'Mishti Doi',
    regionalName: 'బెల్లం తీపి పెరుగు (Caramelized Baked Curd)',
    category: 'Curd',
    price: 60,
    mrp: 70,
    unit: '200g',
    stock: 24,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.8,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'curd',
    description: 'Traditional fermented sweet curd slow-baked with golden jaggery caramel in porous earthen cups.',
    ingredients: 'Milk, Jaggery, Natural Yogurt Culture.',
    storage: 'Keep refrigerated at 4°C.'
  },
  {
    id: 'amp-116',
    name: 'Condensed Milk',
    regionalName: 'చిక్కటి పాల రసం (Sweetened Condensed Milk)',
    category: 'Canned Dairy Products',
    price: 145,
    mrp: 160,
    unit: '400g',
    stock: 22,
    featured: false,
    isNewArrival: true,
    badgeText: 'CANNED',
    rating: 4.7,
    reviewsCount: 40,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'milk',
    description: 'Concentrated whole milk solids and pure sugar. Ideal for festive payasam, cakes, and kulfis.',
    ingredients: 'Concentrated Milk Solids, Sugar.',
    storage: 'Store at room temperature. Refrigerate after opening.'
  },
  {
    id: 'amp-117',
    name: 'Ricotta',
    regionalName: 'ఫ్రెష్ రికోట్టా చీజ్ (Fresh Whey Ricotta)',
    category: 'Cheese & Paneer',
    price: 180,
    mrp: 200,
    unit: '250g',
    stock: 18,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.8,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'paneer',
    description: 'Creamy, fine curd cheese crafted from fresh dairy whey with delicate sweet notes.',
    ingredients: 'Pasteurized Milk Whey, Whole Milk, Vinegar.',
    storage: 'Refrigerate under 4°C.'
  },
  {
    id: 'amp-118',
    name: 'Kalakand',
    regionalName: 'కళాకండ్ (Moist Milk Cake)',
    category: 'Indian Sweets',
    price: 160,
    mrp: 180,
    unit: '250g',
    stock: 26,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Traditional granular soft milk cake simmered patiently and topped with slivered pistachios.',
    ingredients: 'Whole Milk, Chhena, Sugar, Cardamom, Pistachio.',
    storage: 'Keep refrigerated. Shelf life: 7 days.'
  },
  {
    id: 'amp-119',
    name: 'Malai Peda',
    regionalName: 'మలై పేడా (Traditional Mathura Peda)',
    category: 'Indian Sweets',
    price: 130,
    mrp: 150,
    unit: '250g',
    stock: 30,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.8,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Slow-cooked milk pedas shaped by hand with pure ghee and dusted with green cardamom.',
    ingredients: 'Milk Khoya, Fine Sugar, Ghee, Cardamom.',
    storage: 'Store in cool dry place.'
  },
  {
    id: 'amp-120',
    name: 'Rasmalai',
    regionalName: 'రసమలై (Soft Chhena in Saffron Milk)',
    category: 'Indian Sweets',
    price: 140,
    mrp: 160,
    unit: '2 pcs',
    stock: 20,
    featured: true,
    isNewArrival: true,
    badgeText: 'ROYAL',
    rating: 5.0,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Spongy cottage cheese patties steeped in creamy condensed saffron milk with almond flakes.',
    ingredients: 'Cottage Cheese, Thick Milk, Saffron, Sugar, Pistachio.',
    storage: 'Keep refrigerated below 4°C. Serve chilled.'
  },
  {
    id: 'amp-121',
    name: 'Rasgulla',
    regionalName: 'రసగుల్లా (Juicy Chhena Balls)',
    category: 'Indian Sweets',
    price: 110,
    mrp: 130,
    unit: '500g',
    stock: 25,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.8,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Spongy chhena dumplings soaked in delicate cardamom-infused sugar syrup.',
    ingredients: 'Fresh Cow Milk Chhena, Sugar, Cardamom.',
    storage: 'Refrigerate after opening.'
  },
  {
    id: 'amp-122',
    name: 'Gulab Jamun',
    regionalName: 'గులాబ్ జామూన్ (Soft Milk Solids Jamun)',
    category: 'Indian Sweets',
    price: 120,
    mrp: 140,
    unit: '500g',
    stock: 30,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.9,
    reviewsCount: 71,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'sweets',
    description: 'Golden fried khoya dumplings simmered in warm saffron and rose water sugar syrup.',
    ingredients: 'Mawa, Chenna, Desi Ghee, Sugar Syrup, Rose Essence.',
    storage: 'Store at room temperature or warm before serving.'
  },
  {
    id: 'amp-123',
    name: 'Basundi',
    regionalName: 'బాసుంది (Slow-reduced Sweet Cream Milk)',
    category: 'Indian Sweets',
    price: 95,
    mrp: 110,
    unit: '250ml',
    stock: 22,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.9,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'milk',
    description: 'Whole milk gently reduced to half its volume, infused with nutmeg, saffron, and almonds.',
    ingredients: 'Full Cream Milk, Sugar, Nutmeg, Saffron, Charoli, Almonds.',
    storage: 'Keep refrigerated below 4°C.'
  },
  {
    id: 'amp-124',
    name: 'Rabri',
    regionalName: 'రబ్రీ (Traditional Lacchedar Malai Rabri)',
    category: 'Indian Sweets',
    price: 110,
    mrp: 130,
    unit: '250g',
    stock: 20,
    featured: true,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 5.0,
    reviewsCount: 58,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'cream',
    description: 'Layers of gathered cream malai folded into thick sweetened milk with crushed dry fruits.',
    ingredients: 'Buffalo Milk Cream, Sugar, Cardamom, Pistachio.',
    storage: 'Keep refrigerated.'
  },
  {
    id: 'amp-125',
    name: 'Payasam',
    regionalName: 'పాల పాయసం (Temple-style Milk Payasam)',
    category: 'Indian Sweets',
    price: 80,
    mrp: 95,
    unit: '300ml',
    stock: 25,
    featured: false,
    isNewArrival: true,
    badgeText: 'NEW',
    rating: 4.8,
    reviewsCount: 36,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    fallbackType: 'milk',
    description: 'Traditional Andhra rice pudding slow-simmered in rich buffalo milk with ghee-roasted cashews and raisins.',
    ingredients: 'Whole Milk, Fragrant Rice, Sugar, Ghee, Cashews, Raisins, Cardamom.',
    storage: 'Serve warm or chilled.'
  }
];

// Initial Demo Orders
const INITIAL_ORDERS = [
  {
    id: 'AMP-84912',
    customer: {
      name: 'Venkata Rao K.',
      phone: '98480 34567',
      address: 'Plot 42, Temple Street',
      landmark: 'Near Siva Temple',
      pincode: '533440'
    },
    items: [
      { id: 'amp-101', name: 'Taaja Paalu', unit: '1L', price: 65, qty: 2 },
      { id: 'amp-105', name: 'Neyyi (Desi Ghee)', unit: '500ml', price: 350, qty: 1 }
    ],
    amount: 480,
    paymentMethod: 'UPI (PhonePe)',
    paymentStatus: 'Paid (Online)',
    status: 'Delivered',
    date: '2026-11-19 09:15 AM'
  },
  {
    id: 'AMP-84913',
    customer: {
      name: 'Lakshmi Prasanna',
      phone: '94401 88219',
      address: 'Flat 3B, Sri Sai Enclave, Station Road',
      landmark: 'Opp. RTC Bus Stand',
      pincode: '533440'
    },
    items: [
      { id: 'amp-102', name: 'Perugu', unit: '500g', price: 40, qty: 2 },
      { id: 'amp-103', name: 'Paneer', unit: '200g', price: 90, qty: 2 },
      { id: 'amp-107', name: 'Majjiga', unit: '500ml', price: 20, qty: 3 }
    ],
    amount: 320,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending (Collect on Delivery)',
    status: 'Shipped',
    date: '2026-11-19 11:40 AM'
  },
  {
    id: 'AMP-84914',
    customer: {
      name: 'Ramesh Varma',
      phone: '98492 11029',
      address: 'Main Bazar, Peddapuram Road',
      landmark: 'Near Gandhi Statue',
      pincode: '533440'
    },
    items: [
      { id: 'amp-105', name: 'Neyyi (Desi Ghee)', unit: '500ml', price: 350, qty: 2 },
      { id: 'amp-113', name: 'Palakova', unit: '250g', price: 150, qty: 2 }
    ],
    amount: 1000,
    paymentMethod: 'UPI (Google Pay)',
    paymentStatus: 'Paid (Online)',
    status: 'Confirmed',
    date: '2026-11-19 02:20 PM'
  }
];

// Storage Engine
const _memStore = {};
const safeStorage = {
  getItem: (key) => {
    if (typeof localStorage !== 'undefined') {
      try { return localStorage.getItem(key); } catch (e) { return _memStore[key] || null; }
    }
    return _memStore[key] || null;
  },
  setItem: (key, val) => {
    if (typeof localStorage !== 'undefined') {
      try { localStorage.setItem(key, val); } catch (e) { _memStore[key] = String(val); }
    } else {
      _memStore[key] = String(val);
    }
  }
};

function safeDispatch(name, detail) {
  if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }
}

// Akshaya Store API
const AkshayaStore = {
  init() {
    if (!safeStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
      safeStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!safeStorage.getItem(STORAGE_KEYS.ORDERS)) {
      safeStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
    }
    if (!safeStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      safeStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    }
    if (safeStorage.getItem(STORAGE_KEYS.STORE_STATUS) === null) {
      safeStorage.setItem(STORAGE_KEYS.STORE_STATUS, 'online');
    }
    if (!safeStorage.getItem(STORAGE_KEYS.CART)) {
      safeStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    }
  },

  getProducts() {
    this.init();
    try {
      let products = JSON.parse(safeStorage.getItem(STORAGE_KEYS.PRODUCTS)) || INITIAL_PRODUCTS;
      let needsSave = false;
      // Safe migration for Selling Price and MRP
      products = products.map(p => {
        const sellingPrice = parseFloat(p.price !== undefined ? p.price : (p.sellingPrice !== undefined ? p.sellingPrice : 0));
        let mrp = (p.mrp !== undefined && p.mrp !== null && p.mrp !== '') ? parseFloat(p.mrp) : sellingPrice;
        if (isNaN(mrp) || mrp < sellingPrice) {
          mrp = sellingPrice;
          needsSave = true;
        }
        if (p.price !== sellingPrice || p.mrp !== mrp) {
          needsSave = true;
        }
        return {
          ...p,
          price: sellingPrice,
          sellingPrice: sellingPrice,
          mrp: mrp
        };
      });
      if (needsSave) {
        safeStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
      }
      return products;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  },

  getBestSellers() {
    const products = this.getProducts();
    return products.filter(p => p.isBestSeller);
  },

  getNewArrivals() {
    const products = this.getProducts();
    return products.filter(p => p.isNewArrival);
  },

  getCollections() {
    return DAIRY_COLLECTIONS;
  },

  saveProducts(products) {
    safeStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    safeDispatch('akshaya:productsUpdated', products);
  },

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  },

  calculateDiscount(mrp, sellingPrice) {
    const m = parseFloat(mrp);
    const s = parseFloat(sellingPrice);
    if (m && s && m > s) {
      return Math.round(((m - s) / m) * 100);
    }
    return 0;
  },

  addProduct(product) {
    const products = this.getProducts();
    const sellingPrice = parseFloat(product.price !== undefined ? product.price : (product.sellingPrice || 0));
    let mrp = (product.mrp !== undefined && product.mrp !== null && product.mrp !== '') ? parseFloat(product.mrp) : sellingPrice;
    if (isNaN(mrp) || mrp < sellingPrice) mrp = sellingPrice;

    const newProduct = {
      ...product,
      id: 'amp-' + (Date.now() % 100000),
      price: sellingPrice,
      sellingPrice: sellingPrice,
      mrp: mrp,
      rating: 4.8,
      reviewsCount: 1,
      fallbackType: this.guessFallback(product.category)
    };
    products.unshift(newProduct);
    this.saveProducts(products);
    return newProduct;
  },

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
      let sellingPrice = products[idx].price;
      if (updatedFields.price !== undefined) sellingPrice = parseFloat(updatedFields.price);
      else if (updatedFields.sellingPrice !== undefined) sellingPrice = parseFloat(updatedFields.sellingPrice);

      let mrp = products[idx].mrp;
      if (updatedFields.mrp !== undefined && updatedFields.mrp !== null && updatedFields.mrp !== '') {
        mrp = parseFloat(updatedFields.mrp);
      }
      if (isNaN(mrp) || mrp < sellingPrice) mrp = sellingPrice;

      products[idx] = {
        ...products[idx],
        ...updatedFields,
        price: sellingPrice,
        sellingPrice: sellingPrice,
        mrp: mrp
      };
      this.saveProducts(products);
      return products[idx];
    }
    return null;
  },

  deleteProduct(id) {
    let products = this.getProducts();
    products = products.filter(p => p.id !== id);
    this.saveProducts(products);
  },

  getCategories() {
    this.init();
    try {
      return JSON.parse(safeStorage.getItem(STORAGE_KEYS.CATEGORIES)) || INITIAL_CATEGORIES;
    } catch (e) {
      return INITIAL_CATEGORIES;
    }
  },

  saveCategories(categories) {
    safeStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    safeDispatch('akshaya:categoriesUpdated', categories);
  },

  getOrders() {
    this.init();
    try {
      return JSON.parse(safeStorage.getItem(STORAGE_KEYS.ORDERS)) || INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  },

  saveOrders(orders) {
    safeStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    safeDispatch('akshaya:ordersUpdated', orders);
  },

  createOrder(orderData) {
    const orders = this.getOrders();
    const orderId = 'AMP-' + Math.floor(10000 + Math.random() * 90000);
    const paymentMethodStr = orderData.paymentMethod || 'UPI';
    const isCod = paymentMethodStr.toLowerCase().includes('cash') || paymentMethodStr.toLowerCase().includes('cod');
    const paymentStatus = orderData.paymentStatus || (isCod ? 'Pending (Collect on Delivery)' : 'Paid (Online)');

    const customer = {
      ...(orderData.customer || {}),
      pincode: (orderData.customer && orderData.customer.pincode) || '533440'
    };

    const newOrder = {
      id: orderId,
      ...orderData,
      customer: customer,
      paymentMethod: paymentMethodStr,
      paymentStatus: paymentStatus,
      status: 'Confirmed',
      date: new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    orders.unshift(newOrder);
    this.saveOrders(orders);

    // Deduct stock
    const products = this.getProducts();
    (orderData.items || []).forEach(item => {
      const p = products.find(prod => prod.id === item.id);
      if (p) {
        p.stock = Math.max(0, (p.stock || 0) - item.qty);
      }
    });
    this.saveProducts(products);

    // Save to customer's order history
    const customerOrders = this.getCustomerOrders();
    customerOrders.unshift(newOrder);
    safeStorage.setItem(STORAGE_KEYS.CUSTOMER_ORDERS, JSON.stringify(customerOrders));

    return newOrder;
  },

  updateOrderStatus(orderId, newStatus) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveOrders(orders);
      return order;
    }
    return null;
  },

  getCustomerOrders() {
    try {
      return JSON.parse(safeStorage.getItem(STORAGE_KEYS.CUSTOMER_ORDERS)) || [];
    } catch (e) {
      return [];
    }
  },

  getCart() {
    this.init();
    try {
      return JSON.parse(safeStorage.getItem(STORAGE_KEYS.CART)) || [];
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    safeStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    safeDispatch('akshaya:cartUpdated', cart);
  },

  addToCart(productId, qty = 1) {
    const product = this.getProductById(productId);
    if (!product) return;

    const cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        regionalName: product.regionalName,
        price: product.price,
        mrp: product.mrp,
        unit: product.unit,
        image: product.image,
        category: product.category,
        fallbackType: product.fallbackType || 'milk',
        qty: qty
      });
    }
    this.saveCart(cart);
    return cart;
  },

  updateCartQty(productId, delta) {
    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += delta;
      if (existing.qty <= 0) {
        cart = cart.filter(item => item.id !== productId);
      }
    }
    this.saveCart(cart);
    return cart;
  },

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
    return cart;
  },

  clearCart() {
    this.saveCart([]);
  },

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.qty, 0);
  },

  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  getCartSavings() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + ((item.mrp || item.price) - item.price) * item.qty, 0);
  },

  isStoreOnline() {
    this.init();
    return safeStorage.getItem(STORAGE_KEYS.STORE_STATUS) !== 'offline';
  },

  setStoreOnline(isOnline) {
    safeStorage.setItem(STORAGE_KEYS.STORE_STATUS, isOnline ? 'online' : 'offline');
    safeDispatch('akshaya:statusChanged', isOnline);
  },

  getFallbackSvg(type) {
    return SVG_FALLBACKS[type] || SVG_FALLBACKS.milk || SVG_FALLBACKS.general;
  },

  guessFallback(category) {
    const cat = (category || '').toLowerCase();
    if (cat.includes('milk') || cat.includes('canned')) return 'milk';
    if (cat.includes('curd')) return 'curd';
    if (cat.includes('cheese') || cat.includes('paneer')) return 'paneer';
    if (cat.includes('butter')) return 'butter';
    if (cat.includes('ghee')) return 'ghee';
    if (cat.includes('cream')) return 'cream';
    if (cat.includes('beverage') || cat.includes('lassi') || cat.includes('majjiga')) return 'beverages';
    if (cat.includes('sweet') || cat.includes('frozen') || cat.includes('kova') || cat.includes('kulfi')) return 'sweets';
    return 'general';
  },

  resetDefaults() {
    safeStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    safeStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    safeStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
    safeStorage.setItem(STORAGE_KEYS.STORE_STATUS, 'online');
    safeStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    safeDispatch('akshaya:reset');
  }
};

// Initialize immediately
AkshayaStore.init();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AkshayaStore, STORAGE_KEYS, INITIAL_PRODUCTS, INITIAL_CATEGORIES, DAIRY_COLLECTIONS };
}
