/**
 * BakeTech Commercial Systems - Comprehensive Products Catalog Data
 * 22 Commercial Bakery Machines across 12 Required Categories
 * All images are unique and authentic commercial bakery machinery photos
 */

const BAKERY_PRODUCTS = [
  // 1. Commercial Bakery Ovens
  {
    id: "deck-oven-3deck",
    name: "Vulcano Pro Modular 3-Deck Stone Hearth Oven",
    category: "deck-ovens",
    categoryName: "Deck Ovens",
    badge: "Best Seller",
    shortDesc: "Triple-chamber modular electric deck oven with independent refractory stone baking hearths and heavy-duty steam generators.",
    image: "assets/images/products/prod-deck-oven-3deck.jpg",
    specs: {
      capacity: "6 Standard Bakery Trays (600x400mm)",
      power: "18.5 kW / 208-240V 3-Phase",
      tempRange: "50°C – 350°C (122°F – 662°F)",
      deckHeight: "220mm per deck",
      weight: "680 kg",
      hearthMaterial: "Natural Volcanic Refractory Stone"
    },
    applications: ["Artisan Sourdough", "Baguettes & Crusty Bread", "Ciabatta", "Specialty Pastries"],
    features: [
      "Independent top and bottom heat regulation per deck",
      "Built-in high-pressure steam injectors with fast recovery",
      "Natural refractory stone hearth for deep crust caramelization",
      "Microprocessor control with 99 programmable baking profiles",
      "Double-glazed tempered glass inspection doors with interior halogen illumination"
    ],
    gallery: [
      "assets/images/products/prod-deck-oven-3deck.jpg",
      "assets/images/products/detail-deck-control-panel.jpg",
      "assets/images/products/detail-deck-interior-hearth.jpg",
      "assets/images/products/detail-deck-steam-injector.jpg"
    ]
  },
  {
    id: "deck-oven-4deck",
    name: "MasterBake High-Capacity 4-Deck Gas Hearth Oven",
    category: "deck-ovens",
    categoryName: "Deck Ovens",
    badge: "High Output",
    shortDesc: "Natural gas / LPG powered 4-chamber stone hearth deck oven designed for high-volume artisan bakeries needing supreme crust quality.",
    image: "assets/images/products/prod-deck-oven-4deck.jpg",
    specs: {
      capacity: "12 Sheet Pans (400x600mm)",
      power: "110,000 BTU/hr (Gas) + 1.2 kW Electric Controls",
      tempRange: "60°C – 320°C (140°F – 608°F)",
      deckHeight: "200mm per deck",
      weight: "1,150 kg",
      hearthMaterial: "25mm Cordierite Refractory Stone"
    },
    applications: ["High-Volume Artisan Breads", "European Rye Loaves", "Rustic Rolls"],
    features: [
      "High-efficiency low-emission modulating gas burner system",
      "Individual deck steam control with instant thermal recovery",
      "Heavy counterbalanced drop-down stainless steel doors",
      "Digital humidity and exhaust damper timers"
    ],
    gallery: [
      "assets/images/products/prod-deck-oven-4deck.jpg",
      "assets/images/products/detail-deck-interior-hearth.jpg",
      "assets/images/products/detail-deck-control-panel.jpg"
    ]
  },
  {
    id: "convection-turbofan",
    name: "AeroBake 10-Tray Commercial Turbofan Convection Oven",
    category: "convection-ovens",
    categoryName: "Convection Ovens",
    badge: "Versatile",
    shortDesc: "Bi-directional twin-fan commercial convection oven for uniform baking of delicate pastries, croissants, cookies, and rolls.",
    image: "assets/images/products/prod-convection-turbofan.jpg",
    specs: {
      capacity: "10 Full-Size Sheet Pans (18\" x 26\")",
      power: "14.2 kW / 208V 3-Phase",
      tempRange: "30°C – 280°C (86°F – 536°F)",
      traySpacing: "80mm pitch",
      weight: "210 kg",
      fanSpeed: "Dual-speed auto-reversing fans"
    },
    applications: ["Viennoiserie & Croissants", "Choux Pastry", "Cookies & Sponge Cakes", "Cafe Baking"],
    features: [
      "Bi-directional auto-reversing fan system eliminates hot spots",
      "Direct water injection pulse steam system for gloss and volume",
      "7-inch full-color capacitive touchscreen with multi-timer",
      "Cool-touch double-pane inspection door with easy-clean inner glass"
    ],
    gallery: [
      "assets/images/products/prod-convection-turbofan.jpg",
      "assets/images/categories/cat-convection-ovens.jpg"
    ]
  },
  {
    id: "convection-steam",
    name: "SteamPro 6-Tray Compact Convection Oven",
    category: "convection-ovens",
    categoryName: "Convection Ovens",
    badge: "Compact Line",
    shortDesc: "Space-saving commercial convection oven with integrated steam boiler, perfect for cafes, hotel pastry kitchens, and satellite bakehouses.",
    image: "assets/images/products/prod-convection-steam.jpg",
    specs: {
      capacity: "6 Half-Size Sheet Pans (13\" x 18\")",
      power: "7.5 kW / 220V Single-Phase or 3-Phase",
      tempRange: "40°C – 260°C",
      traySpacing: "75mm pitch",
      weight: "125 kg",
      fanSpeed: "Variable speed motor (1-10 levels)"
    },
    applications: ["Boutique Cafes", "Pastry Boutiques", "Restaurant Dessert Stations"],
    features: [
      "Integrated micro-boiler generates saturated steam in seconds",
      "Stackable configuration with matching proofer base",
      "Pre-programmed 50-step baking cycles for repeatable consistency"
    ],
    gallery: [
      "assets/images/products/prod-convection-steam.jpg"
    ]
  },
  {
    id: "rotary-rack-single",
    name: "RotoMaster Single Rack Industrial Rotary Oven",
    category: "rotary-rack-ovens",
    categoryName: "Rotary Rack Ovens",
    badge: "High Volume",
    shortDesc: "Single-trolley rotating rack oven engineered for continuous 24/7 baking of sandwich breads, baguettes, buns, and soft rolls.",
    image: "assets/images/products/prod-rotary-rack-single.jpg",
    specs: {
      capacity: "One 16-18 Tray Rolling Rack (600x800mm or 18\"x26\")",
      power: "Gas 145,000 BTU/hr or Electric 38 kW",
      tempRange: "Up to 300°C (572°F)",
      rackRotation: "Overhead ceiling hook with mechanical turntable option",
      weight: "1,450 kg",
      exhaust: "Powered draft inducer damper"
    },
    applications: ["Wholesale Bakeries", "Supermarket Central Kitchens", "Toast & Bun Production"],
    features: [
      "Triple cascade steam system with massive cast iron heat accumulators",
      "Dynamic airflow adjustment dampers for perfectly uniform top-to-bottom crusting",
      "Heavy-duty stainless steel exterior and baking chamber AISI 304",
      "Zero-threshold floor ramp for effortless rack loading"
    ],
    gallery: [
      "assets/images/products/prod-rotary-rack-single.jpg",
      "assets/images/categories/cat-rotary-rack-ovens.jpg"
    ]
  },
  {
    id: "rotary-rack-double",
    name: "TitanBake Double Rack Industrial Rotary Oven",
    category: "rotary-rack-ovens",
    categoryName: "Rotary Rack Ovens",
    badge: "Industrial Heavyweight",
    shortDesc: "Double-trolley industrial rotary oven accommodating two standard rolling racks simultaneously for maximum production output.",
    image: "assets/images/products/prod-rotary-rack-double.jpg",
    specs: {
      capacity: "Two 18-Tray Rolling Racks (36 Sheet Pans Total)",
      power: "Gas 260,000 BTU/hr / 480V 3-Phase",
      tempRange: "Up to 300°C",
      rackRotation: "Heavy-duty bevel gear motorized overhead suspension",
      weight: "2,350 kg",
      exhaust: "Integrated high-volume steam exhaust hood"
    },
    applications: ["Industrial Bakeries", "Frozen Dough Production", "Commercial Burger Bun Plants"],
    features: [
      "Dual high-capacity heat exchangers with 92% thermal efficiency",
      "Programmable multi-stage baking curve with motorized exhaust damper",
      "Stainless steel double-insulated door with perimeter silicone gasket"
    ],
    gallery: [
      "assets/images/products/prod-rotary-rack-double.jpg"
    ]
  },

  // 2. Mixers (Spiral & Planetary)
  {
    id: "spiral-mixer-80l",
    name: "Forza Pro 80L Heavy-Duty Spiral Dough Mixer",
    category: "spiral-mixers",
    categoryName: "Spiral Mixers",
    badge: "Bakery Essential",
    shortDesc: "Fixed-bowl two-speed commercial spiral dough mixer engineered for gentle gluten development in artisan and high-hydration doughs.",
    image: "assets/images/products/prod-spiral-mixer-80l.jpg",
    specs: {
      bowlCapacity: "80 Liters (50 kg Dough / 30 kg Flour)",
      power: "3.5 kW Dual Motor / 220V 3-Phase",
      speeds: "Two speeds with reverse bowl rotation",
      timers: "Dual electromechanical precision timers",
      weight: "340 kg",
      bowlMaterial: "Solid Stainless Steel AISI 304"
    },
    applications: ["Artisan Sourdough", "Pizza & Focaccia", "Bagels", "French Breads"],
    features: [
      "Separate motors for spiral tool and rotating stainless steel bowl",
      "Heavy center breaker bar for optimal dough oxygenation without heat friction",
      "Safety wire cage with automatic cut-off and ingredient pouring chute",
      "High-torque belt transmission for whisper-quiet vibration-free operation"
    ],
    gallery: [
      "assets/images/products/prod-spiral-mixer-80l.jpg",
      "assets/images/categories/cat-spiral-mixers.jpg"
    ]
  },
  {
    id: "spiral-mixer-120kg",
    name: "TitanSpiral 120kg Removable Bowl Industrial Mixer",
    category: "spiral-mixers",
    categoryName: "Spiral Mixers",
    badge: "Industrial Series",
    shortDesc: "Hydraulic removable bowl spiral mixer with automatic bowl trolley locking and optional hydraulic bowl tipper compatibility.",
    image: "assets/images/products/prod-spiral-mixer-120kg.jpg",
    specs: {
      bowlCapacity: "180 Liters (120 kg Dough / 75 kg Flour)",
      power: "7.5 kW Spiral Motor + 1.5 kW Bowl Motor / 480V 3-Phase",
      speeds: "Infinitely variable speed inverter control",
      weight: "920 kg (Mixer base + Trolley)",
      tipperCompatible: "Yes, compatible with BakeTech Bowl Tipper"
    },
    applications: ["Wholesale Bread Production", "High-Volume Bagel Plants", "Crust & Dough Manufacturers"],
    features: [
      "Automatic hydraulic head lift and motorized bowl clamping system",
      "Digital programmable PLC with infrared dough temperature sensor",
      "Heavy reinforced spiral tool forged from specialized high-tensile alloy"
    ],
    gallery: [
      "assets/images/products/prod-spiral-mixer-120kg.jpg"
    ]
  },
  {
    id: "planetary-mixer-40l",
    name: "Crown Series 40L Variable Speed Planetary Mixer",
    category: "planetary-mixers",
    categoryName: "Planetary Mixers",
    badge: "Pastry Workhorse",
    shortDesc: "Commercial 40-liter planetary mixer with mechanical 3-speed gear transmission, complete with whisk, hook, and paddle attachments.",
    image: "assets/images/products/prod-planetary-mixer-40l.jpg",
    specs: {
      bowlCapacity: "40 Liters",
      power: "2.2 kW / 220V Single-Phase or 3-Phase",
      speeds: "3 Preset Speeds (95 / 175 / 320 RPM)",
      bowlLift: "Manual lever with assisted spring lock",
      weight: "180 kg",
      attachments: "Stainless Steel Bowl, Spiral Hook, Flat Beater, Wire Whip"
    },
    applications: ["Pastry Creams & Meringues", "Sponge Cakes & Batters", "Cookie Dough", "Icings & Fillings"],
    features: [
      "Precision alloy gears hardened and lubricated in sealed oil bath",
      "Stainless steel safety guard with microswitch protection",
      "Heavy cast-iron base dampens vibration under maximum load"
    ],
    gallery: [
      "assets/images/products/prod-planetary-mixer-40l.jpg",
      "assets/images/categories/cat-planetary-mixers.jpg"
    ]
  },
  {
    id: "planetary-mixer-60l",
    name: "Imperial 60L Touchscreen Planetary Mixer with Auto Bowl Lift",
    category: "planetary-mixers",
    categoryName: "Planetary Mixers",
    badge: "Touchscreen Pro",
    shortDesc: "Commercial floor-model 60-liter planetary mixer featuring motorized bowl lift and digital electronic speed regulation.",
    image: "assets/images/products/prod-planetary-mixer-60l.jpg",
    specs: {
      bowlCapacity: "60 Liters",
      power: "4.0 kW Inverter Drive / 208-240V 3-Phase",
      speeds: "Electronic variable speed (40 to 380 RPM)",
      bowlLift: "Automatic motorized push-button lift",
      weight: "275 kg"
    },
    applications: ["Hotel Bakery Central Kitchens", "Commercial Cake Production", "Mousse & Custard Batters"],
    features: [
      "Programmable multi-step speed transitions for delicate emulsification",
      "Digital batch timer with automatic cycle stop",
      "Integrated bowl lighting for visual inspection during mixing"
    ],
    gallery: [
      "assets/images/products/prod-planetary-mixer-60l.jpg"
    ]
  },

  // 3. Dough Sheeters
  {
    id: "dough-sheeter-floor",
    name: "RollBake 650 Heavy-Duty Reversible Floor Dough Sheeter",
    category: "dough-sheeters",
    categoryName: "Dough Sheeters",
    badge: "Top Rated",
    shortDesc: "Floor-standing reversible conveyor dough sheeter with 650mm wide belts, fold-up tables, and calibrated roller thickness lever.",
    image: "assets/images/products/prod-dough-sheeter-floor.jpg",
    specs: {
      rollerWidth: "650 mm (25.6 inches)",
      tableLength: "1,400 mm each wing (2,800 mm total conveyor)",
      rollerGap: "0.5 mm to 45 mm micro-adjustment",
      power: "1.1 kW / 220V 3-Phase or 1-Phase",
      weight: "260 kg",
      safety: "Safety guards with electrical cut-out"
    },
    applications: ["Laminated Croissant Dough", "Puff Pastry & Danish", "Fondant & Pie Crusts"],
    features: [
      "Hard chrome-plated precision ground rollers prevent dough sticking",
      "Fold-up conveyor wings with gas strut assists to save floor space",
      "Dual foot pedal and joystick reverse direction controls",
      "Flour dusting basin and removable dough scrapers for fast sanitation"
    ],
    gallery: [
      "assets/images/products/prod-dough-sheeter-floor.jpg",
      "assets/images/categories/cat-dough-sheeters.jpg"
    ]
  },
  {
    id: "dough-sheeter-bench",
    name: "RollBake 500 Compact Tabletop Dough Sheeter",
    category: "dough-sheeters",
    categoryName: "Dough Sheeters",
    badge: "Countertop Line",
    shortDesc: "Space-saving commercial benchtop reversible dough sheeter designed for boutique pastry shops, restaurants, and small artisan bakeries.",
    image: "assets/images/products/prod-dough-sheeter-bench.jpg",
    specs: {
      rollerWidth: "500 mm (19.7 inches)",
      tableLength: "950 mm each wing",
      rollerGap: "0.5 mm to 38 mm",
      power: "0.75 kW / 110V or 220V Single-Phase",
      weight: "145 kg"
    },
    applications: ["Boutique Patisseries", "Restaurant Kitchens", "Pasta & Fondant Rolling"],
    features: [
      "Detachable conveyor belts for effortless cleaning and maintenance",
      "Quiet synchronous belt drive transmission",
      "Precision thickness gauge with lockable repeat stop"
    ],
    gallery: [
      "assets/images/products/prod-dough-sheeter-bench.jpg"
    ]
  },

  // 4. Dough Dividers and Rounders
  {
    id: "divider-rounder-auto",
    name: "AutoPortion 30-Piece Automatic Divider & Rounder",
    category: "dough-dividers",
    categoryName: "Dough Dividers and Rounders",
    badge: "Precision",
    shortDesc: "Fully automatic hydraulic dough divider and rounder capable of sectioning and rounding 30 equal dough portions in one 12-second cycle.",
    image: "assets/images/products/prod-divider-rounder-auto.jpg",
    specs: {
      divisions: "30 Portions",
      portionWeight: "30 grams to 110 grams (1 oz to 3.8 oz)",
      outputCapacity: "Up to 3,600 pieces per hour",
      power: "1.5 kW / 220V 3-Phase",
      weight: "360 kg",
      plates: "Includes 3 synthetic rounding plates"
    },
    applications: ["Burger Buns", "Brioche", "Dinner Rolls", "Confectionery Doughs"],
    features: [
      "Single-button automatic cycle: hydraulic press, knife cut, and oscillating round",
      "Adjustable pressing and rounding timers for varied dough stiffness",
      "Teflon-coated dividing ring and stainless steel blades for zero dough tearing"
    ],
    gallery: [
      "assets/images/products/prod-divider-rounder-auto.jpg",
      "assets/images/categories/cat-dough-dividers.jpg"
    ]
  },
  {
    id: "hydraulic-divider",
    name: "HydroCut 20-Part Rectangular Hydraulic Dough Divider",
    category: "dough-dividers",
    categoryName: "Dough Dividers and Rounders",
    badge: "Artisan Friendly",
    shortDesc: "Heavy hydraulic bulk dough divider engineered for gently dividing high-hydration sourdough and baguette doughs without degasification.",
    image: "assets/images/products/prod-hydraulic-divider.jpg",
    specs: {
      divisions: "20 Rectangular Portions",
      portionWeight: "150 grams to 950 grams",
      tankCapacity: "Up to 16 kg bulk dough batch",
      power: "1.8 kW Hydraulic Unit / 220V 3-Phase",
      weight: "280 kg"
    },
    applications: ["Artisan Ciabatta", "French Baguettes", "Rustic Country Loaves"],
    features: [
      "Gentle low-pressure hydraulic ram protects delicate dough crumb structure",
      "Food-grade aluminum alloy tank with stainless steel cutting grid",
      "Flour collection tray catches excess dusting during division"
    ],
    gallery: [
      "assets/images/products/prod-hydraulic-divider.jpg"
    ]
  },

  // 5. Dough Proofers and Retarders
  {
    id: "retarder-proofer-2door",
    name: "ClimaControl 2-Door Touchscreen Retarder Proofer",
    category: "proofers-retarders",
    categoryName: "Dough Proofers and Retarders",
    badge: "Climate Tech",
    shortDesc: "Microprocessor-controlled 2-door commercial retarder proofer with automated cold retarding, warming, and proofing cycles for overnight baking schedules.",
    image: "assets/images/products/prod-retarder-proofer-2door.jpg",
    specs: {
      capacity: "Two 20-Tray Rolling Racks (40 Trays 600x400mm)",
      tempRange: "-5°C to +40°C (23°F to 104°F)",
      humidityRange: "60% to 95% Relative Humidity",
      power: "3.2 kW / 220V Single-Phase or 3-Phase",
      refrigerant: "Eco-Friendly R452A",
      weight: "380 kg"
    },
    applications: ["Overnight Sourdough Proofing", "Viennoiserie Retardation", "Controlled Morning Bake Schedules"],
    features: [
      "Programmable 5-stage automated fermentation cycle (Cool -> Hold -> Warm -> Proof -> Ready)",
      "Ultrasonic steam humidity injection ensures fine non-condensing mist",
      "Soft indirect airflow circulation prevents skinning on delicate doughs",
      "7-inch industrial touchscreen with remote Wi-Fi status monitoring"
    ],
    gallery: [
      "assets/images/products/prod-retarder-proofer-2door.jpg",
      "assets/images/categories/cat-proofers-retarders.jpg"
    ]
  },
  {
    id: "climate-proofer-cabinet",
    name: "AeroProof 16-Pan Insulated Holding Proofer Cabinet",
    category: "proofers-retarders",
    categoryName: "Dough Proofers and Retarders",
    badge: "Direct Proofing",
    shortDesc: "Stainless steel single-door commercial proofing cabinet with dedicated dry heat and moist humidity dials, ideal for continuous daily proofing.",
    image: "assets/images/products/prod-climate-proofer-cabinet.jpg",
    specs: {
      capacity: "16 Full-Size Sheet Pans (18\" x 26\")",
      tempRange: "Ambient up to 50°C (122°F)",
      humidity: "Up to 90% RH with water basin element",
      power: "2.0 kW / 110V or 220V",
      weight: "115 kg",
      mobility: "4 heavy-duty swivel casters with front brakes"
    },
    applications: ["Pastry Kitchens", "Donut Proofing", "Soft Bread & Bun Proofing"],
    features: [
      "High-density polyurethane injected insulation maintains stable internal temperature",
      "Lexan clear polycarbonate door for constant visual proofing checks",
      "Removable stainless steel slide racks for rapid wash-down"
    ],
    gallery: [
      "assets/images/products/prod-climate-proofer-cabinet.jpg"
    ]
  },

  // 6. Bread Slicers
  {
    id: "bread-slicer-gravity",
    name: "PrecisionCut Heavy-Duty Floor Bread Slicer",
    category: "bread-slicers",
    categoryName: "Bread Slicers",
    badge: "High Durability",
    shortDesc: "Floor-standing commercial bread slicer with gravity feed chute and 32 precision oscillating stainless steel blades for clean crusty loaf cutting.",
    image: "assets/images/products/prod-bread-slicer-gravity.jpg",
    specs: {
      sliceThickness: "12 mm standard (Optional 10mm, 14mm, 16mm)",
      loafCapacity: "Loaves up to 380 mm length x 160 mm height",
      outputSpeed: "Up to 250 loaves per hour",
      power: "0.55 kW / 110V or 220V Single-Phase",
      weight: "135 kg",
      blades: "32 High-Tensile Stainless Steel Serrated Blades"
    },
    applications: ["Retail Bakeries", "Supermarket Deli Counters", "Artisan Bread Slicing"],
    features: [
      "Gentle gravity-assisted loaf feeding mechanism prevents bread crushing",
      "Integrated crumb collection drawer with front access",
      "Stainless steel loaf packaging bagging horn included"
    ],
    gallery: [
      "assets/images/products/prod-bread-slicer-gravity.jpg",
      "assets/images/categories/cat-bread-slicers.jpg"
    ]
  },
  {
    id: "bread-slicer-variable",
    name: "OptiSlice Automatic Circular Blade Variable Slicer",
    category: "bread-slicers",
    categoryName: "Bread Slicers",
    badge: "Variable Thickness",
    shortDesc: "Touchscreen automated bread slicer with Teflon-coated circular blade and digital slice thickness adjustment from 4mm to 30mm.",
    image: "assets/images/products/prod-bread-slicer-variable.jpg",
    specs: {
      sliceThickness: "Adjustable 4 mm to 30 mm in 1mm increments",
      bladeType: "Circular Teflon-coated sickle blade with auto-oil lubrication",
      loafLength: "Up to 420 mm max length",
      power: "1.1 kW / 220V Single-Phase",
      weight: "175 kg"
    },
    applications: ["Specialty Sourdough Bakeries", "Artisan Rye Breads", "Hotel Breakfast Buffets"],
    features: [
      "Automatic loaf gripper holds round or oval rustic loaves securely",
      "Cuts warm and dense rye breads without blade adhesion",
      "Half-loaf and continuous slicing modes"
    ],
    gallery: [
      "assets/images/products/prod-bread-slicer-variable.jpg"
    ]
  },

  // 7. Bakery Display Cabinets
  {
    id: "display-curved-glass",
    name: "CrystalView 1500 Curved Glass Refrigerated Pastry Showcase",
    category: "display-cabinets",
    categoryName: "Bakery Display Cabinets",
    badge: "Showcase Premium",
    shortDesc: "Curved panoramic glass refrigerated display case with warm LED interior lighting, dual tempered double-glass, and humidity maintenance for cakes and desserts.",
    image: "assets/images/products/prod-display-curved-glass.jpg",
    specs: {
      length: "1,500 mm (59 inches) - 3 Shelves + Base",
      tempRange: "+2°C to +8°C (35.6°F to 46.4°F)",
      refrigerant: "R290 Eco-Friendly Natural Gas",
      power: "0.85 kW / 110V or 220V",
      illumination: "High-CRI Warm Bakery LED strips on each tier",
      weight: "240 kg"
    },
    applications: ["Patisseries", "High-End Bakeries", "Cafe Display Lines", "Hotel Lounges"],
    features: [
      "Front glass hydraulic tilt-forward system for effortless daily cleaning",
      "Rear mirrored sliding doors with magnetic seals",
      "Ventilated cooling system maintains delicate humidity to prevent pastry drying"
    ],
    gallery: [
      "assets/images/products/prod-display-curved-glass.jpg",
      "assets/images/categories/cat-display-cabinets.jpg"
    ]
  },
  {
    id: "display-tower-case",
    name: "EuroTower 4-Sided Glass Rotating Cake Display Showcase",
    category: "display-cabinets",
    categoryName: "Bakery Display Cabinets",
    badge: "360° Visibility",
    shortDesc: "Vertical 4-sided glass illuminated refrigerated display column with rotating circular glass tiers for high-impact visual cake merchandising.",
    image: "assets/images/products/prod-display-tower-case.jpg",
    specs: {
      capacity: "450 Liters / 5 Rotating Glass Shelves (450mm diameter)",
      tempRange: "+4°C to +10°C",
      power: "0.65 kW / 110V or 220V",
      weight: "160 kg",
      dimensions: "650 x 650 x 1850 mm"
    },
    applications: ["Custom Wedding Cake Studios", "Specialty Dessert Parlors", "Fine Dining Restaurants"],
    features: [
      "Smooth motorized rotation with instant stop on door opening",
      "360-degree double-glazed argon-filled insulated glass panels",
      "Precision digital thermostat with automatic defrost cycle"
    ],
    gallery: [
      "assets/images/products/prod-display-tower-case.jpg"
    ]
  },

  // 8. Industrial Bakery Equipment
  {
    id: "industrial-makeup-line",
    name: "MegaLine Automated Bread Make-Up & Stamping Line",
    category: "industrial-equipment",
    categoryName: "Industrial Bakery Equipment",
    badge: "Automation",
    shortDesc: "High-speed modular industrial dough sheeting, longitudinal cutting, rolling, and automated panning system for commercial bread production.",
    image: "assets/images/products/prod-industrial-makeup-line.jpg",
    specs: {
      beltWidth: "800 mm",
      outputSpeed: "Up to 3,500 pieces per hour",
      power: "8.5 kW / 480V 3-Phase",
      lineLength: "7.5 meters modular configuration",
      controlSystem: "Siemens PLC with 12-inch touchscreen",
      weight: "1,850 kg"
    },
    applications: ["Wholesale Toast Bread", "Baguette Production", "Ciabatta Lines", "Industrial Bread Plants"],
    features: [
      "Stress-free continuous dough sheet reduction rollers preserve gas cells",
      "Automated servo-driven guillotine cutting and rotary stamping units",
      "Integrated flour duster and automated tray dispensing indexing conveyor"
    ],
    gallery: [
      "assets/images/products/prod-industrial-makeup-line.jpg",
      "assets/images/categories/cat-industrial-equipment.jpg"
    ]
  },
  {
    id: "industrial-tunnel-oven",
    name: "CycloTherm Industrial Continuous Tunnel Baking Oven",
    category: "industrial-equipment",
    categoryName: "Industrial Bakery Equipment",
    badge: "Mass Production",
    shortDesc: "Continuous industrial tunnel oven with cyclothermic indirect radiant heating, wire mesh or stone conveyor hearth, and multi-zone climate control.",
    image: "assets/images/products/prod-industrial-tunnel-oven.jpg",
    specs: {
      bakingWidth: "1,200 mm to 2,500 mm options",
      bakingLength: "18 meters to 36 meters modular sections",
      heatSource: "Natural Gas / Dual Fuel Indirect Radiating Tubes",
      temperatureZones: "3 to 6 independent PID temperature zones",
      outputCapacity: "Up to 4,000 kg baked product per hour"
    },
    applications: ["Large Wholesale Baking Plants", "Industrial Toast Loaf Lines", "High-Volume Cracker & Biscuit Plants"],
    features: [
      "Zoned steam injection with automated moisture extraction exhaust hoods",
      "Heavy stone or steel hinge plate conveyor belts",
      "Central SCADA supervisory interface with predictive maintenance sensors"
    ],
    gallery: [
      "assets/images/products/prod-industrial-tunnel-oven.jpg"
    ]
  },
  {
    id: "industrial-cooling-tower",
    name: "AutoCool Spiral Ambient Cooling Tower System",
    category: "industrial-equipment",
    categoryName: "Industrial Bakery Equipment",
    badge: "Continuous Flow",
    shortDesc: "High-capacity multi-tier spiral conveyor cooling tower engineered for ambient and conditioned depanning-to-packaging bread cooling.",
    image: "assets/images/products/prod-industrial-cooling-tower.jpg",
    specs: {
      tierCount: "6 Spiral Tiers (180m Total Belt)",
      beltWidth: "650 mm Intralox Plastic Modular Mesh",
      throughput: "Up to 3,200 loaves per hour",
      coolingTime: "Adjustable 25 to 65 minutes retention",
      footprint: "4.8m x 4.8m x 3.6m Height",
      drivePower: "5.5 kW Inverter Direct Drum Drive"
    },
    applications: ["Continuous Loaf Cooling", "Burger Bun Lines", "Croissant Pastry Rest Staging"],
    features: [
      "Gentle tensionless spiral transport prevents loaf deformation",
      "Clean-in-place (CIP) automated high-pressure spray belt wash system",
      "Sanitary stainless steel frame with sealed bearing housings"
    ],
    gallery: [
      "assets/images/products/prod-industrial-cooling-tower.jpg"
    ]
  },
  {
    id: "industrial-sponge-dough-mixer",
    name: "BatchMaster 500kg Automatic Industrial Dough Station",
    category: "industrial-equipment",
    categoryName: "Industrial Bakery Equipment",
    badge: "High Capacity",
    shortDesc: "Heavy industrial high-volume automated batch dough mixing and bottom-discharge fermentation hopper station for wholesale plants.",
    image: "assets/images/products/prod-industrial-sponge-dough-mixer.jpg",
    specs: {
      batchCapacity: "500 kg Finished Dough (320 kg Flour)",
      motorPower: "37 kW Variable Frequency Drive / 480V",
      bowlDesign: "Jacketed Stainless Steel for Chilled Glycol Cooling",
      discharge: "Pneumatic Bottom Slide Gate directly to Dough Pump",
      controlInterface: "Allen-Bradley GuardLogix PLC Touchscreen"
    },
    applications: ["High-Volume Toast Bread", "Continuous Dough Extrusion", "Commercial Bun Plants"],
    features: [
      "Chilled glycol bowl cooling jacket controls dough friction temperature",
      "Automated flour pneumatic injection and micro-metered liquid dosing ports",
      "Heavy dual-spiral forged high-tensile kneading tools with zero dough creeping"
    ],
    gallery: [
      "assets/images/products/prod-industrial-sponge-dough-mixer.jpg"
    ]
  }
];

// Helper functions for catalog queries
function getAllProducts() {
  return BAKERY_PRODUCTS;
}

function getProductById(id) {
  return BAKERY_PRODUCTS.find(p => p.id === id) || BAKERY_PRODUCTS[0];
}

function getProductsByCategory(category) {
  if (!category || category === "all") return BAKERY_PRODUCTS;
  return BAKERY_PRODUCTS.filter(p => p.category === category);
}

function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  const others = BAKERY_PRODUCTS.filter(p => p.id !== currentId);
  // Sort matching same category first, then others
  others.sort((a, b) => (b.category === current.category ? 1 : 0) - (a.category === current.category ? 1 : 0));
  return others.slice(0, limit);
}

