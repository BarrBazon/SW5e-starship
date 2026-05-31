// ============================================================
//  SW5e Starship — каталог даних (статичний, у код, НЕ синхронізується)
//  Джерело: Starships of the Galaxy. Тут лише функціональні дані
//  (назви, категорії, ігрові вартості) — без передруку описів із книги.
//  Ефекти модифікацій дивись у книзі; для нотаток є окреме поле.
//  Розширювати просто: додай рядок у відповідний масив.
// ============================================================

// --- Класи корпусів (розміри). costMod — множник вартості модифікацій за розміром.
// Tiny/Small/Medium підтверджені книгою (x0.5 / x1 / x2); Large+ — стандартне подвоєння,
// звір із книгою якщо потрібна абсолютна точність.
export const CHASSIS = {
  tiny:       { label: "Tiny (Крихітний)",        hullDice: "1d4",  shieldDice: "1d4",  baseModCapacity: 10, maxSuites: "—",               costMod: 0.5 },
  small:      { label: "Small (Малий)",            hullDice: "3d6",  shieldDice: "3d6",  baseModCapacity: 20, maxSuites: "-1 + Con",        costMod: 1 },
  medium:     { label: "Medium (Середній)",        hullDice: "5d8",  shieldDice: "5d8",  baseModCapacity: 30, maxSuites: "3 + Con",         costMod: 2 },
  large:      { label: "Large (Великий)",          hullDice: "7d10", shieldDice: "7d10", baseModCapacity: 50, maxSuites: "3 + 2×Con",       costMod: 4 },
  huge:       { label: "Huge (Величезний)",        hullDice: "9d12", shieldDice: "9d12", baseModCapacity: 60, maxSuites: "6 + 3×Con",       costMod: 8 },
  gargantuan: { label: "Gargantuan (Гігантський)", hullDice: "11d20",shieldDice: "11d20",baseModCapacity: 70, maxSuites: "10 + 4×Con",      costMod: 16 },
};

// --- Базові вартості категорій модифікацій (підтверджено книгою). cr = кредити.
export const MOD_CATEGORIES = {
  engineering: { label: "Engineering",  baseCost: 3500 },
  operation:   { label: "Operation",    baseCost: 3500 },
  suite:       { label: "Suite",        baseCost: 5000 },
  universal:   { label: "Universal",    baseCost: 4000 },
  weapon:      { label: "Weapon",       baseCost: 3000 },
};

// --- Повний список модифікацій за категоріями (назви з книги).
export const MODIFICATIONS = {
  engineering: [
    "Advanced SLAM", "Alternative Fuel Converter", "Automated Protocols", "Boarding Harpoon",
    "Buzz Droid Cloud", "Carbonite Launcher, Mk I", "Carbonite Launcher, Mk II", "Carbonite Launcher, Mk III",
    "Carbonite Launcher, Mk IV", "Carbonite Launcher, Mk V", "Countermeasures", "Damage Control System",
    "Electrical Dischargers", "Electromagnetic Scrambler, Mk II", "Electromagnetic Scrambler, Mk III",
    "Electromagnetic Scrambler, Mk IV", "Electromagnetic Scrambler, Mk V", "Emergency Generator",
    "Flare Pods", "Hardened Prow", "Improved Countermeasures", "Interdiction Drive", "Invulnerability Drive",
    "Nano-Droid Distributor", "Power Backup", "Power Harpoon", "Self-Destruct Mechanism", "Shield Bleedthrough",
    "Ship Slicer, Mk I", "Ship Slicer, Mk III", "Ship Slicer, Mk IV", "Ship Slicer, Mk V",
    "Shock Absorbers", "Tibanna Gas Projector, Mk I", "Tibanna Gas Projector, Mk II",
  ],
  operation: [
    "Active Camouflage", "Astromech Socket", "Backup Hyperdrive", "Cloaking Device",
    "Comms Package, Premium", "Comms Package, Prototype", "Comms Package, Renowned",
    "Communications Suppressor, Premium", "Communications Suppressor, Prototype", "Communications Suppressor, Renowned",
    "Electronic Baffle", "EMP Device", "Flight Computer", "Gravity Well Projector", "Hyperdrive Slot",
    "Navcomputer", "Navcomputer, Mark III", "Navcomputer, Mark IV", "Navcomputer, Mark V",
    "Scanner, Premium", "Scanner, Prototype", "Scanner, Renowned", "Secondary Transponder Code",
    "Sensor Dampener", "Shield Disruptor", "Super-Heavy Ion Cannon", "Threat Tracker", "Tractor Beam",
  ],
  suite: [
    "Armory", "Barracks", "Boarding Pods", "Casino", "Command Center", "Crew Expansion", "Docking Bay",
    "Droid Storage", "Equipment Room", "Escape Pods", "External Docking System", "Fuel Storage",
    "Hidden Storage", "Holding Cells", "Hydroponics Garden", "Interrogation Chamber", "Investigation Suite",
    "Laboratory", "Living Quarters", "Luxury Quarters", "Meditation Chamber", "Mess Hall", "Recreation",
    "Security Suite", "Slave Pens", "Storage Compartment", "Supercharger Station", "Transportation",
    "Vault", "Workshop",
  ],
  universal: [
    "Ablative Plating Layer", "Absorptive Shielding", "Adaptive Ailerons", "Amphibious Systems",
    "Anti-Boarding System",
    "Central Computer, Makeshift", "Central Computer, Mark I", "Central Computer, Mark II",
    "Central Computer, Mark III", "Central Computer, Mark IV", "Central Computer, Mark V",
    "Cryogenic Capacitor", "Cryogenic Capacitor, Premium",
    "Data Core, Makeshift", "Data Core, Mark I", "Data Core, Mark II", "Data Core, Mark III",
    "Data Core, Mark IV", "Data Core, Mark V",
    "Droid Brain, Makeshift", "Droid Brain, Mark I", "Droid Brain, Mark II", "Droid Brain, Mark III",
    "Droid Brain, Mark IV", "Droid Brain, Mark V",
    "Frame, Mark III",
  ],
};

// --- Типи озброєння (категорії + поширені приклади). Вільне введення теж доступне.
export const WEAPON_TYPES = {
  primary:    { label: "Primary (лазерні гармати)",      examples: ["Laser Cannon", "Ion Cannon", "Light Laser Cannon", "Heavy Laser Cannon"] },
  secondary:  { label: "Secondary (рейлгани/турболазери)", examples: ["Railgun", "Turbolaser", "Turbolaser Battery"] },
  tertiary:   { label: "Tertiary (ракети/торпеди)",        examples: ["Proton Torpedo", "Concussion Missile", "Rocket Pod"] },
  quaternary: { label: "Quaternary (бомби/спецозброєння)", examples: ["Proton Bomb", "Mag Pulse Warhead"] },
};
