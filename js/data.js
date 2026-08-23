// Attack on Titan Compendium - Complete Structured Knowledge Base
const AOT_DATA = {
  stats: {
    wallsCount: 3,
    nineTitansCount: 9,
    timelineSpan: "2,000+ Years",
    totalCharacters: 12,
    activeRegiments: 3
  },
  
  timeline: [
    {
      id: "ancient-history",
      era: "ancient",
      year: "2,000 Years Ago",
      title: "Ancient History & The Genesis of Titans",
      subtitle: "The pact of Ymir Fritz and the dawn of Eldian dominance",
      summary: "A slave girl named Ymir bonds with a mysterious organic anomaly beneath a giant tree, acquiring the power of the Titans. King Fritz exploits her power to crush Marley and build the Eldian Empire.",
      details: "Upon Ymir's death defending King Fritz from an assassin's spear, Fritz forces her daughters—Maria, Rose, and Sheena—to cannibalize their mother's corpse. This splits Ymir's single Titan power into the Nine Titans passed through generations of the Subjects of Ymir via spinal fluid and the metaphysical dimension known as the Paths.",
      impact: "Birth of the Nine Titans, absolute Eldian imperial rule, and centuries of global subjugation.",
      keyFigures: ["Ymir Fritz", "King Fritz (1st)", "Maria", "Rose", "Sheena"],
      badge: "Origin Era",
      quote: "To you, 2,000 years from now..."
    },
    {
      id: "great-titan-war",
      era: "pre-fall",
      year: "100 Years Ago (c. 743)",
      title: "The Great Titan War & Wall Creation",
      subtitle: "The collapse of Eldia and retreat to Paradis Island",
      summary: "King Karl Fritz, burdened with remorse over Eldia's violent past, secretly conspires with the Tybur family to orchestrate Eldia's internal collapse and downfall.",
      details: "Karl Fritz abandons the mainland and retreats to Paradis Island with millions of Eldians. Using the Founding Titan, he commands millions of Colossal Titans to crystallize into three concentric walls—Maria, Rose, and Sina. He then erases his people's memories of the outside world, creating a fragile false paradise under his 'Vow Renouncing War'.",
      impact: "Creation of the Three Walls, isolation of Paradis, and Marley's weaponization of the remaining seven Titan powers.",
      keyFigures: ["King Karl Fritz (145th King)", "Tybur Family Ancestor", "Wall Titans"],
      badge: "Cataclysm",
      quote: "If Eldia is to perish, I will accept it without resistance."
    },
    {
      id: "fall-of-shiganshina",
      era: "paradis",
      year: "Year 845",
      title: "The Fall of Shiganshina & Wall Maria Breach",
      subtitle: "The day humanity received a grim reminder",
      summary: "Marley dispatches child warrior candidates to retake the Founding Titan. The Colossal Titan (Bertholdt) and Armored Titan (Reiner) breach the outer gates of Shiganshina and Wall Maria.",
      details: "Titans flood the human territory, forcing humanity to abandon Wall Maria and retreat behind Wall Rose, losing one-third of their territory and 20% of the population. Carla Yeager is devoured by the Smiling Titan. Grisha Yeager massacres the Reiss royal family to steal the Founding Titan, subsequently injecting young Eren with Titan spinal fluid before having Eren devour him.",
      impact: "Loss of Wall Maria, 250,000 Eldian casualties in the reclamation attempt, and Eren's sacred vow to exterminate every last Titan.",
      keyFigures: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Bertholdt Hoover", "Reiner Braun", "Grisha Yeager", "Carla Yeager"],
      badge: "The Breach",
      quote: "On that day, mankind received a grim reminder. We lived in fear of the Titans and were disgraced to live in these cages we called walls."
    },
    {
      id: "trost-and-female-titan",
      era: "paradis",
      year: "Year 850",
      title: "The Struggle for Trost & Female Titan Expedition",
      subtitle: "First human victory and the traitor within the walls",
      summary: "The Colossal Titan reappears at Trost District. During combat, Eren is swallowed by a Titan but unlocks his Attack Titan form for the first time.",
      details: "Eren's Titan form is utilized by Commander Dot Pyxis to seal the gate of Trost with a colossal boulder, securing humanity's first military victory over Titans. Later, the 57th Exterior Scouting Mission is ambushed by the intelligent Female Titan (Annie Leonhart). After a brutal battle in Stohess District inside Wall Sina, Annie is exposed and encases herself in an impenetrable crystal.",
      impact: "Discovery of Titan Shifters within the military ranks, establishment of Special Operations Squad (Levi), and revelation of Titans inside the walls.",
      keyFigures: ["Eren Yeager", "Levi Ackerman", "Annie Leonhart", "Erwin Smith", "Dot Pyxis", "Hange Zoë"],
      badge: "First Victory",
      quote: "If you don't fight, you can't win. Fight! Fight!"
    },
    {
      id: "uprising-and-shiganshina",
      era: "paradis",
      year: "Year 850",
      title: "Uprising Arc & Return to Shiganshina",
      subtitle: "Overthrow of the crown and unlocking the truth in the basement",
      summary: "The Survey Corps executes a bloodless coup d'état against the corrupt puppet royal government, crowning Historia Reiss as the true Queen of the Walls.",
      details: "The Scouts launch Operation Return to Shiganshina to seal Wall Maria. They engage the Armored, Colossal, and Beast Titans in a catastrophic battle. Commander Erwin leads a suicidal cavalry charge against the Beast Titan. Armin sacrifices himself to defeat Bertholdt and is revived using Titan serum, inheriting the Colossal Titan. Reaching Grisha's basement, Eren and the Scouts discover photographs and records exposing that humanity has not perished—the outside world thrives, and Marley is their enemy.",
      impact: "Liberation of Wall Maria, extermination of almost the entire Survey Corps (9 survivors), Armin gains Colossal Titan, and the reality of the global conflict is revealed.",
      keyFigures: ["Erwin Smith", "Levi Ackerman", "Historia Reiss", "Kenny Ackerman", "Zeke Yeager", "Armin Arlert", "Eren Yeager"],
      badge: "The Truth",
      quote: "My soldiers, rage! My soldiers, scream! My soldiers, fight!"
    },
    {
      id: "marley-and-war-for-paradis",
      era: "marley",
      year: "Year 854",
      title: "The Raid on Liberio & War for Paradis",
      subtitle: "Eren's rogue attack on Marley and the rise of the Yeagerists",
      summary: "Infiltrating Marley as a wounded soldier, Eren executes a devastating preemptive attack during Willy Tybur's festival in the Liberio Internment Zone.",
      details: "Eren devours Lara Tybur to claim the War Hammer Titan, while Armin obliterates Marley's naval fleet with the Colossal Titan. Returning to Paradis, Eren breaks away from the military high command, forming the radical 'Yeagerist' faction. Marley launches a surprise counter-invasion on Paradis Island, culminating in a three-way war between Paradis, Marley, and the Yeagerists.",
      impact: "Paradis seizes the War Hammer Titan, death of Sasha Braus, military leadership paralyzed by spinal fluid wine, and Eren and Zeke establishing physical contact to enter the Paths.",
      keyFigures: ["Eren Yeager", "Reiner Braun", "Zeke Yeager", "Lara Tybur", "Pieck Finger", "Floch Forster", "Sasha Braus"],
      badge: "Global War",
      quote: "I will keep moving forward... until all my enemies are destroyed."
    },
    {
      id: "the-rumbling",
      era: "marley",
      year: "Year 854",
      title: "The Rumbling & The Final Battle of Heaven and Earth",
      subtitle: "The cataclysmic march of the Colossal Titans and the end of Titan power",
      summary: "Eren frees Founder Ymir from 2,000 years of enslavement, unlocking the full power of the Founding Titan and rejecting Zeke's Euthanasia Plan.",
      details: "Eren transforms into the colossal skeletal Doomsday Titan and unhardens all three walls, unleashing millions of Colossal Titans in 'The Rumbling' to trample 80% of the world's population. An allied coalition of Eldian Scouts and Marleyan Warriors pursues Eren to the coast of Fort Salta. In the epic Battle of Heaven and Earth, Mikasa Ackerman decapitates Eren, and Founder Ymir finds release, causing the power of the Titans and the Curse of Ymir to permanently vanish from the world.",
      impact: "80% of global humanity eradicated, eradication of Titan power from the world, Paradis transitions into a militarized nation, and Eren's friends are granted long lives.",
      keyFigures: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman", "Reiner Braun", "Founder Ymir"],
      badge: "The Finale",
      quote: "To you, 2,000 years... or... 20,000 years from now."
    }
  ],

  titans: [
    {
      id: "founding-titan",
      category: "nine",
      name: "Founding Titan",
      japanese: "始祖の巨人 (Shiso no Kyojin)",
      heightMeters: 500,
      heightDisplay: "Varies (Up to 500m+ Doomsday)",
      threatLevel: "Extinction Level (Cataclysmic)",
      inheritors: ["Ymir Fritz", "Karl Fritz", "Uri Reiss", "Frieda Reiss", "Grisha Yeager", "Eren Yeager"],
      primaryAbilities: [
        "The Coordinate: Absolute command over all non-shifter Titans and Eldians",
        "Memory Alteration: Can wipe, rewrite, or restore memories of the Subjects of Ymir",
        "Biological Reconstruction: Can modify the anatomy, immunity, and genetics of Eldians",
        "Paths Conduit: Direct spiritual connection to all Subjects of Ymir across time and space"
      ],
      description: "The apex and genesis of all Titan powers. It is the connection point where the Paths intersect. Bound by Karl Fritz's 'Vow Renouncing War' when possessed by royal blood until Eren Yeager liberated Founder Ymir.",
      combatRole: "Command & Control / Supreme Tactical Supremacy",
      iconColor: "#9b5de5",
      badge: "Apex Titan"
    },
    {
      id: "attack-titan",
      category: "nine",
      name: "Attack Titan",
      japanese: "進撃の巨人 (Shingeki no Kyojin)",
      heightMeters: 15,
      heightDisplay: "15 meters",
      threatLevel: "Ultra-High",
      inheritors: ["Eren Kruger ('The Owl')", "Grisha Yeager", "Eren Yeager"],
      primaryAbilities: [
        "Future Memory Perception: Can access memories of both past and future inheritors",
        "Relentless Will: High combat resilience, regenerative speed, and unyielding drive",
        "Hardening: Concentrated structural crystal hardening on knuckles and body",
        "Berserk Drive: Intense offensive pressure capable of overpowering heavier Titans"
      ],
      description: "Throughout centuries and under any regime, the Attack Titan has constantly moved forward, striving for freedom. Possesses the unique temporal capability to perceive future memories.",
      combatRole: "Frontline Vanguard / Brawler / Temporal Instigator",
      iconColor: "#00f5d4",
      badge: "Vanguard of Freedom"
    },
    {
      id: "colossal-titan",
      category: "nine",
      name: "Colossal Titan",
      japanese: "超大型巨人 (Chōōgata Kyojin)",
      heightMeters: 60,
      heightDisplay: "60 meters",
      threatLevel: "Catastrophic (City Destroyer)",
      inheritors: ["Bertholdt Hoover", "Armin Arlert"],
      primaryAbilities: [
        "Nuclear Explosion Transformation: Detonation upon shifting capable of wiping entire districts",
        "Extreme Heat & Steam Emission: Sacrifices muscular tissue to generate lethal scalding steam screens",
        "Massive Physical Destruction: Crushes stone fortifications and gates effortlessly under its colossal weight",
        "Imposing Reach: Unassailable 60-meter stature over ordinary wall fortifications"
      ],
      description: "Known as humanity's God of Destruction. Its sheer mass enables it to decimate fortified gates with a single kick, though prolonged combat burns muscle mass and depletes stamina.",
      combatRole: "Siege Breaker / Tactical Nuclear Strike",
      iconColor: "#ff0054",
      badge: "God of Destruction"
    },
    {
      id: "armored-titan",
      category: "nine",
      name: "Armored Titan",
      japanese: "鎧の巨人 (Yoroi no Kyojin)",
      heightMeters: 15,
      heightDisplay: "15 meters",
      threatLevel: "Very High",
      inheritors: ["Reiner Braun"],
      primaryAbilities: [
        "Organic Hardened Armor Plates: Entire body encased in thick, diamond-dense bone armor",
        "Battering Ram Charge: Devastating kinetic momentum capable of shattering reinforced steel gates",
        "Armor Shedding: Can selectively shed joint armor for explosive bursts of agility",
        "Immense Impact Resistance: Withstands conventional artillery and standard blade strikes"
      ],
      description: "The premier shield of Marley's military might. Reiner's Armored Titan spearheaded the breach of Wall Maria's inner gate. Extremely durable, but vulnerable to Thunder Spears.",
      combatRole: "Heavy Tank / Breaching Ram / Defensive Fortress",
      iconColor: "#f15bb5",
      badge: "Impenetrable Shield"
    },
    {
      id: "female-titan",
      category: "nine",
      name: "Female Titan",
      japanese: "女型の巨人 (Megata no Kyojin)",
      heightMeters: 14,
      heightDisplay: "14 meters",
      threatLevel: "Very High",
      inheritors: ["Annie Leonhart"],
      primaryAbilities: [
        "Titan Attraction Scream: Emits high-frequency sonic roars that draw Pure Titans from kilometers away",
        "Selective Crystal Hardening: Concentrates diamond-hard armor on high-impact strike points",
        "Superior Mobility & Stamina: Exceptional endurance for prolonged high-speed pursuits",
        "Martial Arts Adaptability: Seamlessly integrates human close-quarters combat mastery"
      ],
      description: "An all-around unit with unmatched versatility. Annie Leonhart weaponized the Female Titan's agility and hardening with lethal Muay Thai martial arts.",
      combatRole: "Multi-Role Strike Specialist / Infiltration",
      iconColor: "#00bbf9",
      badge: "Versatile Striker"
    },
    {
      id: "beast-titan",
      category: "nine",
      name: "Beast Titan",
      japanese: "獣の巨人 (Kemono no Kyojin)",
      heightMeters: 17,
      heightDisplay: "17 meters",
      threatLevel: "Catastrophic (Artillery Supremacy)",
      inheritors: ["Tom Ksaver (Bighorn Sheep)", "Zeke Yeager (Ape)"],
      primaryAbilities: [
        "Artillery-Grade Projectile Throwing: Elongated arms crush boulders into supersonic shrapnel clouds",
        "Titan Creation & Vocal Command (Royal Blood): Transforms Eldians injected with spinal fluid via vocal roar",
        "Remote Strategic Command: Coordinates armies of Pure Titans across vast battlefronts",
        "Animalistic Morphologies: Manifests unique animal phenotypes depending on the inheritor"
      ],
      description: "Under Zeke Yeager, the Beast Titan became a long-range apocalyptic artillery piece. His royal blood allowed him to convert entire civilian populations into Titans.",
      combatRole: "Long-Range Siege Artillery / Tactical Titan Commander",
      iconColor: "#fee440",
      badge: "Artillery King"
    },
    {
      id: "jaw-titan",
      category: "nine",
      name: "Jaw Titan",
      japanese: "顎の巨人 (Agito no Kyojin)",
      heightMeters: 5,
      heightDisplay: "5 meters",
      threatLevel: "High",
      inheritors: ["Marcel Galliard", "Ymir", "Porco Galliard", "Falco Grice"],
      primaryAbilities: [
        "Crushing Diamond Jaws & Claws: Jaws powerful enough to shatter hardened Titan crystal and heavy armor",
        "Extreme Omnidirectional Speed: Unsurpassed agility and climbing ability in urban and forest terrains",
        "Rapid Ambush Strikes: Flanks and assassinates heavier targets before they can react",
        "Avian Hybridization (Falco): Manifested feathered wings and tail enabling sustained aerial flight"
      ],
      description: "The smallest and fastest of the Nine Titans. Its hardened jaws and claws can shred hardened Titan crystal. Falco's transformation granted humanity its only flying Titan in history.",
      combatRole: "High-Speed Interceptor / Armor Piercer / Aerial Recon",
      iconColor: "#fb5607",
      badge: "Swift Predator"
    },
    {
      id: "cart-titan",
      category: "nine",
      name: "Cart Titan",
      japanese: "車力の巨人 (Shariki no Kyojin)",
      heightMeters: 4,
      heightDisplay: "4 meters (Quadrupedal)",
      threatLevel: "Medium-High (Logistical Titan)",
      inheritors: ["Pieck Finger"],
      primaryAbilities: [
        "Unrivaled Stamina & Transformation Duration: Can remain continuously transformed for months at a time",
        "Heavy Armament Platform: Equipped with motorized quadruple machine-gun turrets or anti-Titan armor",
        "High-Speed Quadrupedal Transport: Rapid supply runner and casualty evacuation platform",
        "Frequent Reshifting: Capable of hundreds of consecutive shifts without exhausting stamina"
      ],
      description: "A quadrupedal logistical powerhouse. Pieck Finger's quick wits and tactical acumen made the Cart Titan an indispensable mobile weapons platform.",
      combatRole: "Mobile Fire-Support Platform / Logistical Backbone",
      iconColor: "#06d6a0",
      badge: "Mobile Armory"
    },
    {
      id: "war-hammer-titan",
      category: "nine",
      name: "War Hammer Titan",
      japanese: "戦鎚の巨人 (Sentsui no Kyojin)",
      heightMeters: 15,
      heightDisplay: "15 meters",
      threatLevel: "Very High",
      inheritors: ["Lara Tybur", "Eren Yeager"],
      primaryAbilities: [
        "Structural Flesh Hardening: Creates massive warhammers, pikes, crossbows, and ground spikes from Titan flesh",
        "Remote Cable Control: Operator encases themselves in a subterranean crystal cocoon linked via fleshy cable",
        "Instant Terrain Manipulation: Generates entire forests of deadly piercing ground spikes",
        "Impenetrable Crystal Cocoon: Protects the pilot from conventional Titan strikes and blades"
      ],
      description: "Held by the aristocratic Tybur family for over a century. Unlike other Titans, its pilot operates from an underground crystal cocoon connected by a fleshy tether.",
      combatRole: "Weapon Creator / Remote Control Heavy Ordnance",
      iconColor: "#e63946",
      badge: "Architect of War"
    },
    // Pure & Abnormal Titans
    {
      id: "smiling-titan",
      category: "pure",
      name: "The Smiling Titan (Dina Fritz)",
      japanese: "ダイナ・フリッツ",
      heightMeters: 14,
      heightDisplay: "14 meters",
      threatLevel: "Special Pivotal Threat",
      inheritors: ["Dina Fritz (Pure Form)"],
      primaryAbilities: [
        "Constant eerie grimace and fixation on Grisha's household",
        "Devoured Carla Yeager and Thomas Wagner",
        "Royal blood trigger: Contact with Eren activated the Founding Titan's Coordinate"
      ],
      description: "Dina Fritz, the first wife of Grisha Yeager and a royal descendant, was transformed into a Pure Titan by Marley. Wandered to Shiganshina in 845, killing Carla Yeager, and later catalyzed Eren's first activation of the Coordinate.",
      combatRole: "Catalyst of the Coordinate",
      iconColor: "#e76f51",
      badge: "Abnormal Royal"
    },
    {
      id: "rod-reiss-titan",
      category: "pure",
      name: "Rod Reiss' Titan (The Turkey Titan)",
      japanese: "ロッド・レイス巨人",
      heightMeters: 120,
      heightDisplay: "120 meters (Colossal Abnormal)",
      threatLevel: "Extinction Threat",
      inheritors: ["Rod Reiss"],
      primaryAbilities: [
        "Colossal 120-meter size—twice the height of the Colossal Titan",
        "Lethal scalding ambient heat capable of setting surrounding forests on fire",
        "Crawled along the earth on its stomach, grinding away its face and abdomen"
      ],
      description: "Created when Rod Reiss ingested abnormal Titan serum off the cavern floor. Due to its gargantuan weight and malformed limbs, it dragged its chest and face across the terrain toward Orvud District.",
      combatRole: "Gargantuan Abnormal Siege",
      iconColor: "#d00000",
      badge: "Gargantuan Abnormal"
    },
    {
      id: "wall-titans",
      category: "pure",
      name: "The Wall Titans (Colossal Swarm)",
      japanese: "壁の巨人 (Kabe no Kyojin)",
      heightMeters: 50,
      heightDisplay: "50 meters (Millions)",
      threatLevel: "Global Extinction (The Rumbling)",
      inheritors: ["Karl Fritz's Subjects of Ymir"],
      primaryAbilities: [
        "Millions of synchronized Colossal Titans encased inside the three walls",
        "Massive ambient steam and thermal waves",
        "Unstoppable continental march flattening all civilizations in their path"
      ],
      description: "Millions of 50-meter Colossal Titans encased within Wall Maria, Rose, and Sina for 100 years. Unhardened by Eren Yeager, they trampled 80% of humanity.",
      combatRole: "The Rumbling Horde",
      iconColor: "#9d0208",
      badge: "The Rumbling Swarm"
    },
    {
      id: "eren-doomsday-titan",
      category: "special",
      name: "Eren's Doomsday Founding Titan",
      japanese: "終尾の巨人 (Shūbi no Kyojin)",
      heightMeters: 500,
      heightDisplay: "500+ meters (Skeletal Colossus)",
      threatLevel: "Global Apocalypse",
      inheritors: ["Eren Yeager"],
      primaryAbilities: [
        "Skeletal ribcage stretching hundreds of meters into the sky",
        "Resurrects and controls past generations of the Nine Titans along its spine",
        "Direct conduit to the Hallucigenia entity and Founder Ymir's absolute power"
      ],
      description: "Manifested after Eren reconnected with the spinal hallucigenia entity. A titanic skeletal leviathan that commanded the Rumbling and served as the battlefield for the final conflict.",
      combatRole: "Apocalyptic Leviathan",
      iconColor: "#370617",
      badge: "End of Days"
    }
  ],

  characters: [
    {
      id: "eren-yeager",
      name: "Eren Yeager",
      japanese: "エレン・イェーガー",
      allegiance: "Yeagerists / Survey Corps",
      role: "Protagonist & Usurper of the Founder",
      status: "Deceased (Year 854)",
      titansHeld: ["Attack Titan", "Founding Titan", "War Hammer Titan"],
      combatStats: { combat: 98, intellect: 92, agility: 90, ruthlessness: 99 },
      quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win. Tatakae!",
      bio: "Born in Shiganshina District, Eren witnessed his mother eaten during the fall of Wall Maria. Fueled by boundless hatred for Titans, he enlisted in the 104th Training Corps. Upon learning the true nature of the world, his drive evolved from exterminating Titans to annihilating all threats against the island of Paradis through the Rumbling.",
      pivotalMoments: [
        "Sealing the Trost District breach with a giant boulder (850)",
        "Defeating Reiner in Shiganshina and discovering Grisha's basement photos",
        "Raiding Liberio and devouring the War Hammer Titan (854)",
        "Activating the Rumbling in the Paths alongside Founder Ymir"
      ],
      badge: "The Liberator / Destroyer",
      icon: "fa-fire"
    },
    {
      id: "mikasa-ackerman",
      name: "Mikasa Ackerman",
      japanese: "ミカサ・アッカーマン",
      allegiance: "Survey Corps",
      role: "Elite Scout & Ackerman Bloodline Heir",
      status: "Alive",
      titansHeld: ["None (Ackerman Combat Power)"],
      combatStats: { combat: 99, intellect: 82, agility: 98, ruthlessness: 85 },
      quote: "The world is cruel, but it's also very beautiful.",
      bio: "After Eren saved her from human traffickers in childhood, Mikasa dedicated her life to protecting him. As a member of the awakened Ackerman clan, she possesses instincts and physical prowess equivalent to a Titan in human form. Ranked 1st in the 104th Training Corps, she ultimately made the agonizing choice to kill Eren to save humanity.",
      pivotalMoments: [
        "Solo neutralization of multiple Titans during the defense of Trost",
        "Disabling the Female Titan to rescue Eren in the Titan Forest",
        "Decapitating Eren inside the Colossal Titan's mouth to end the Titan curse"
      ],
      badge: "Humanity's Champion",
      icon: "fa-shield-halved"
    },
    {
      id: "armin-arlert",
      name: "Armin Arlert",
      japanese: "アルミン・アルレルト",
      allegiance: "Survey Corps",
      role: "15th Commander of Survey Corps & Colossal Titan",
      status: "Alive",
      titansHeld: ["Colossal Titan"],
      combatStats: { combat: 78, intellect: 100, agility: 80, ruthlessness: 75 },
      quote: "Someone who cannot sacrifice anything can never change anything.",
      bio: "A frail but brilliant boy who showed Eren a book about the outside world. Armin's tactical deductions repeatedly saved humanity—deducing the identities of the Female, Armored, and Colossal Titans. After inheriting the Colossal Titan, he succeeded Hange as the 15th Commander of the Survey Corps.",
      pivotalMoments: [
        "Deducing Annie Leonhart's identity as the Female Titan",
        "Devising the strategy to capture Bertholdt Hoover at the cost of being incinerated",
        "Annihilating the Marleyan fleet at Liberio port with a single transformation blast",
        "Rallying past Titan shifters in the Paths during the Battle of Heaven and Earth"
      ],
      badge: "Supreme Strategist",
      icon: "fa-brain"
    },
    {
      id: "levi-ackerman",
      name: "Levi Ackerman",
      japanese: "リヴァイ・アッカーマン",
      allegiance: "Survey Corps (Special Operations Squad)",
      role: "Humanity's Strongest Soldier",
      status: "Alive (Severely Injured)",
      titansHeld: ["None (Ackerman Bloodline Awakening)"],
      combatStats: { combat: 100, intellect: 90, agility: 100, ruthlessness: 94 },
      quote: "I want to put an end to that recurring nightmare, right now. I'm fine playing the role of the lunatic who kills people like that.",
      bio: "Born in the Underground District, Levi was trained in combat by his uncle Kenny Ackerman before being recruited by Erwin Smith. Revered as humanity's strongest soldier, a single squad under his command is said to equal an entire brigade. Levi neutralized the Beast Titan multiple times and fulfilled his oath to Erwin.",
      pivotalMoments: [
        "Annihilating the Female Titan's muscle structure in seconds",
        "Solo shredding of the Beast Titan during the suicide charge in Shiganshina",
        "Surviving a Thunder Spear explosion and decapitating Zeke in the final battle"
      ],
      badge: "Humanity's Strongest",
      icon: "fa-khanda"
    },
    {
      id: "erwin-smith",
      name: "Erwin Smith",
      japanese: "エルヴィン・スミス",
      allegiance: "Survey Corps",
      role: "13th Commander of the Survey Corps",
      status: "Deceased (Year 850)",
      titansHeld: ["None"],
      combatStats: { combat: 90, intellect: 99, agility: 86, ruthlessness: 96 },
      quote: "My soldiers, do not buckle or yield when facing the cruelty of this world! My soldiers, rage! My soldiers, scream! My soldiers, fight!",
      bio: "A visionary commander who revolutionized Scout tactics with the Long-Distance Scouting Formation. Driven by his father's theory that humanity's memories were manipulated, Erwin gambled his life and his troops' lives to uncover the truth of the world. He led the legendary suicidal charge into the Beast Titan's bombardment.",
      pivotalMoments: [
        "Orchestrating the trap to capture the Female Titan in the Titan Forest",
        "Losing his right arm to a Titan yet still commanding: 'ADVANCE!'",
        "Leading the legendary suicide charge against the Beast Titan in Shiganshina"
      ],
      badge: "The Visionary Commander",
      icon: "fa-chess-king"
    },
    {
      id: "reiner-braun",
      name: "Reiner Braun",
      japanese: "ライナー・ブラウン",
      allegiance: "Marley Warriors / Alliance",
      role: "The Armored Titan & Vice Captain",
      status: "Alive",
      titansHeld: ["Armored Titan"],
      combatStats: { combat: 91, intellect: 83, agility: 82, ruthlessness: 84 },
      quote: "I don't know what's right anymore... But the only choice for me now is to face the consequences of my actions and fulfill my duty as a warrior!",
      bio: "Sent to Paradis as a child warrior to breach the walls. Years of living among the Eldians as a 'soldier' fractured his psyche into dual identities: the loyal protector soldier and the guilt-ridden Marleyan warrior. Haunted by severe PTSD, he fought tenaciously to protect the younger generation.",
      pivotalMoments: [
        "Breaching Wall Maria's inner gate at Shiganshina in 845",
        "Casually revealing his identity to Eren atop Wall Rose",
        "Holding off the Hallucigenia entity in the Battle of Heaven and Earth"
      ],
      badge: "The Tormented Warrior",
      icon: "fa-shield-virus"
    },
    {
      id: "zeke-yeager",
      name: "Zeke Yeager",
      japanese: "ジーク・イェーガー",
      allegiance: "Marley Warriors / Anti-Marley",
      role: "The Beast Titan & War Chief",
      status: "Deceased (Year 854)",
      titansHeld: ["Beast Titan"],
      combatStats: { combat: 94, intellect: 98, agility: 75, ruthlessness: 95 },
      quote: "What a beautiful day it is. If only I had realized that earlier... Well, considering the life I've lived, asking for that much is greedy.",
      bio: "Son of Grisha Yeager and Dina Fritz, bearing royal blood. Betraying his parents to save himself and his grandparents, he rose to become Marley's War Chief. Zeke secretly formulated the 'Euthanasia Plan' to painlessly sterilize the Eldian race, but was outmaneuvered by Eren in the Paths.",
      pivotalMoments: [
        "Transforming the entire village of Ragako into Titans with gas",
        "Obliterating the Scout regiment with crushed rock artillery in Shiganshina",
        "Summoning Eren into the Paths and attempting to enforce the Euthanasia Plan"
      ],
      badge: "War Chief of Marley",
      icon: "fa-meteor"
    },
    {
      id: "historia-reiss",
      name: "Historia Reiss",
      japanese: "ヒストリア・レイス",
      allegiance: "Royal Family of the Walls",
      role: "True Queen of the Walls",
      status: "Alive",
      titansHeld: ["None"],
      combatStats: { combat: 80, intellect: 88, agility: 85, ruthlessness: 80 },
      quote: "I may be humanity's enemy, but I'm your friend, Eren.",
      bio: "The illegitimate daughter of nobleman Rod Reiss. Originally hiding under the false identity 'Krista Lenz', she embraced her true identity under Ymir's influence. She rejected her father's demand to eat Eren, struck the final blow against Rod Reiss' 120-meter Titan, and ascended as Queen of the Walls.",
      pivotalMoments: [
        "Shattering the syringe and defying her father in the Crystal Caverns",
        "Striking the killing blow against Rod Reiss' Titan before the citizens of Orvud",
        "Reigning as Queen through the Rumbling era and securing the future of the island"
      ],
      badge: "True Queen of the Walls",
      icon: "fa-crown"
    },
    {
      id: "hange-zoe",
      name: "Hange Zoë",
      japanese: "ハンジ・ゾエ",
      allegiance: "Survey Corps",
      role: "14th Commander of Survey Corps & Titan Scientist",
      status: "Deceased (Year 854)",
      titansHeld: ["None"],
      combatStats: { combat: 90, intellect: 98, agility: 92, ruthlessness: 82 },
      quote: "Titans are really incredible! There is so much we don't know about them!",
      bio: "An eccentric genius driven by an obsessive curiosity regarding Titan biology. Hange invented the executioner artillery and Thunder Spears. Succeeded Erwin as 14th Commander and sacrificed their life in a blaze of glory holding off the Wall Titans so the flying boat could launch.",
      pivotalMoments: [
        "Breakthrough experiments on captured Titans Sawney and Bean",
        "Developing Thunder Spears that penetrated Armored Titan plating",
        "Solo rear-guard stand against the Rumbling swarm, burning to ashes in flight"
      ],
      badge: "The Titan Savant",
      icon: "fa-flask"
    },
    {
      id: "annie-leonhart",
      name: "Annie Leonhart",
      japanese: "アニ・レオンハート",
      allegiance: "Marley Warriors / Alliance",
      role: "The Female Titan",
      status: "Alive",
      titansHeld: ["Female Titan"],
      combatStats: { combat: 96, intellect: 90, agility: 95, ruthlessness: 86 },
      quote: "I just want the weak who do get swept along with the flow to be considered human too.",
      bio: "Raised by her adoptive father in Liberio to be a lethal martial artist. Annie infiltrated the Military Police inside Wall Sina. After being captured by the Scouts, she encased herself in hardened crystal for four years until the Rumbling unhardened all titan crystal.",
      pivotalMoments: [
        "Decimating Levi's Special Operations Squad in the Giant Forest",
        "Crystallizing in Stohess to prevent extraction of military intelligence",
        "Awakening from crystal sleep in 854 and fighting in the port battle"
      ],
      badge: "Deadly Infiltrator",
      icon: "fa-gem"
    },
    {
      id: "jean-kirstein",
      name: "Jean Kirstein",
      japanese: "ジャン・キルシュタイン",
      allegiance: "Survey Corps",
      role: "Field Squad Leader",
      status: "Alive",
      titansHeld: ["None"],
      combatStats: { combat: 89, intellect: 94, agility: 90, ruthlessness: 79 },
      quote: "I know what my duty is! I won't let another one of my comrades die in vain!",
      bio: "Initially aiming for a comfortable life in the Military Police, Marco Bott's death inspired Jean to join the Survey Corps. He developed into an exceptional tactical field leader with an acute understanding of human vulnerability and battle conditions.",
      pivotalMoments: [
        "Leading the diversion against the Armored Titan in Shiganshina",
        "Refusing to execute Falco and guiding the alliance through moral conflict",
        "Detonating explosives around the Doomsday Titan's neck"
      ],
      badge: "Field Commander",
      icon: "fa-crosshairs"
    },
    {
      id: "pieck-finger",
      name: "Pieck Finger",
      japanese: "ピーク・フィンガー",
      allegiance: "Marley Warriors",
      role: "The Cart Titan",
      status: "Alive",
      titansHeld: ["Cart Titan"],
      combatStats: { combat: 85, intellect: 97, agility: 91, ruthlessness: 80 },
      quote: "I don't trust Marley. But I trust the comrades who have fought alongside me.",
      bio: "Highly intelligent and observant, Pieck served as the tactical spine of the Marleyan Warrior unit. Her mastery of the Cart Titan allowed multiple rapid shifts and lethal coordination with Marley's heavy artillery units.",
      pivotalMoments: [
        "Rescuing Zeke and Reiner from Levi's blades in Shiganshina",
        "Infiltrating Paradis disguised as an Eldian soldier and cornering Eren",
        "Chaining dozens of consecutive Titan transformations in the final battle"
      ],
      badge: "Tactical Specialist",
      icon: "fa-truck-monster"
    }
  ],

  worldbuilding: {
    walls: [
      {
        id: "wall-maria",
        name: "Wall Maria",
        radius: "480 km",
        height: "50 meters",
        districts: ["Shiganshina District (South)", "Quinta District (West)", "Holst District (North)", "Dormer District (East)"],
        population: "Working class, farmers, pastoral communities",
        status: "Breached in 845 by Colossal & Armored Titans; Liberated in 850; Unhardened in 854",
        description: "The outermost perimeter protecting human civilization. It enclosed vast fertile lands, agricultural settlements, and outer gate bait-districts designed to lure Titans toward fixed artillery bastions.",
        color: "#e63946"
      },
      {
        id: "wall-rose",
        name: "Wall Rose",
        radius: "380 km (100 km inward from Maria)",
        height: "50 meters",
        districts: ["Trost District (South)", "Karanes District (East)", "Nedlay District (North)", "Utopia District (West)"],
        population: "Tradesmen, middle-tier merchants, military garrisons, displaced refugees",
        status: "Breached in 850 at Trost (Sealed by Eren Yeager); Unhardened in 854",
        description: "The middle ring of defense. When Wall Maria fell, Wall Rose absorbed hundreds of thousands of refugees, causing severe food shortages until the failed reclamation campaign.",
        color: "#f77f00"
      },
      {
        id: "wall-sina",
        name: "Wall Sina",
        radius: "250 km (130 km inward from Rose)",
        height: "50 meters",
        districts: ["Stohess District (East)", "Mitras (Royal Capital)", "Hermiha District (South)", "Yarckel District (West)", "Underground City"],
        population: "The King, elite nobility, wealthy merchants, high military brass, Church of the Walls",
        status: "Stohess damaged during Female Titan battle; Entire wall unhardened during Rumbling",
        description: "The innermost sanctum. Highly protected, affluent, and sheltered from the horrors of Titan incursions. Contains the lavish Royal Capital of Mitras and the grim Underground District.",
        color: "#2a9d8f"
      }
    ],

    regiments: [
      {
        id: "survey-corps",
        name: "The Survey Corps (Scouts)",
        japanese: "調査兵団 (Chōsa Heidan)",
        insignia: "Wings of Freedom (White & Blue overlapping wings)",
        duty: "Direct expedition outside the walls, expansion of human territory, offensive Titan combat, deep tactical recon",
        casualtyRate: "Over 70% per expedition before 850",
        motto: "Dedicate your hearts! (Shinzo wo Sasageyo!)",
        notableMembers: ["Erwin Smith", "Levi Ackerman", "Hange Zoë", "Eren Yeager", "Mikasa Ackerman", "Armin Arlert"],
        gearSpecialty: "Thunder Spears, Dual Ultra-Hard Steel Blades, Specialized Flare Guns, Long-Distance Scouting Matrix",
        color: "#1d3557"
      },
      {
        id: "garrison",
        name: "The Garrison Regiment",
        japanese: "駐屯兵団 (Chūton Heidan)",
        insignia: "Twin Roses",
        duty: "Manning wall defenses, maintaining stationary artillery cannons, civil patrol, urban evacuation drills",
        casualtyRate: "Moderate to High during breaches",
        motto: "The Shield of the People",
        notableMembers: ["Dot Pyxis", "Hannes", "Kitz Woermann", "Rico Brzenska"],
        gearSpecialty: "Heavy Wall Cannons, Fixed Ballistas, Fortification Engineering, Anti-Personnel Barricades",
        color: "#d90429"
      },
      {
        id: "military-police",
        name: "The Military Police Brigade",
        japanese: "憲兵団 (Kempeidan)",
        insignia: "Green Unicorn",
        duty: "Maintaining civil order inside Wall Sina, royal guard for the King, tax collection, internal security",
        casualtyRate: "Near Zero (Extremely safe under peacetime)",
        motto: "In Service of the Crown",
        notableMembers: ["Nile Dok", "Kenny Ackerman", "Hitch Dreyse", "Boris Feulner", "Marlo Freudenberg"],
        gearSpecialty: "Muskets, Anti-Personnel ODM Gear (Interior Squad), Court Tribunal Authority",
        color: "#2b9348"
      }
    ],

    odmGear: {
      name: "Omni-Directional Mobility (ODM) Gear",
      japanese: "立体機動装置 (Rittai Kidō Sōchi)",
      components: [
        {
          part: "Gas Propulsion Cylinders",
          desc: "Compressed gas canisters mounted along hips providing high-velocity multidirectional thrust and mid-air maneuvering."
        },
        {
          part: "Grappling Hook Anchors & Wire Drums",
          desc: "Twin turbine-powered winches capable of shooting and rewinding ultra-tensile steel cables at extreme speeds."
        },
        {
          part: "Handle Control Grips & Blade Mounts",
          desc: "Trigger-activated throttles for wire steering, air release, and instantaneous ejection/replacement of disposable blades."
        },
        {
          part: "Ultra-Hard Steel Blades",
          desc: "Flexible, diamond-edged multi-segmented blades forged in blast furnaces to carve through dense Titan flesh without snapping."
        },
        {
          part: "Thunder Spears (Anti-Armor Extension)",
          desc: "Rocket-propelled shaped charges designed specifically to shatter hardened Titan armor, crystal casings, and defensive fortifications."
        }
      ],
      titanWeakPoint: {
        location: "The Nape of the Neck (Cervical Spine)",
        dimensions: "1 meter vertically by 10 centimeters horizontally",
        lethality: "Severing this specific tissue volume severs the central human nervous hub, immediately killing the Titan before cell regeneration can trigger."
      }
    }
  }
};
