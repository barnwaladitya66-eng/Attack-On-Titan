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
      quote: "To you, 2,000 years from now...",
      quoteJapanese: "「二千年後の君へ…」"
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
      quote: "If Eldia is to perish, I will accept it without resistance.",
      quoteJapanese: "「エルディアが滅びるというのなら、それを受け入れよう。」"
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
      quote: "On that day, mankind received a grim reminder. We lived in fear of the Titans and were disgraced to live in these cages we called walls.",
      quoteJapanese: "「その日 人類は思い出した ヤツらに支配されていた恐怖を…鳥籠の中に囚われていた屈辱を…」"
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
      quote: "If you don't fight, you can't win. Fight! Fight!",
      quoteJapanese: "「戦わなければ勝てない。戦え！戦え！」"
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
      quote: "My soldiers, rage! My soldiers, scream! My soldiers, fight!",
      quoteJapanese: "「我が兵士よ怒れ！我が兵士よ叫べ！我が兵士よ戦え！」"
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
      quote: "I will keep moving forward... until all my enemies are destroyed.",
      quoteJapanese: "「オレは進み続ける…敵を駆逐するまで。」"
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
      quote: "To you, 2,000 years... or... 20,000 years from now.",
      quoteJapanese: "「二千年…若しくは…二万年後の君へ…」"
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
      quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win. Tatakae! Tatakae!",
      quoteJapanese: "「勝てば生きる、負ければ死ぬ。戦わなければ勝てない。戦え！戦え！」",
      quoteRomanji: "Kateba ikiru, makeba shinu. Tatakawanakereba katenai. Tatakae! Tatakae!",
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
      quote: "This world is cruel, but it's also very beautiful. Even if the enemy is overwhelmingly stronger, I will fight.",
      quoteJapanese: "「この世界は残酷だ…そして、とても美しい。」",
      quoteRomanji: "Kono sekai wa zankoku da... Soshite, totemo utsukushii.",
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
      quote: "Someone who cannot sacrifice anything can never change anything. To defeat a monster, you must be willing to abandon your humanity.",
      quoteJapanese: "「何かを捨てることができない人には、何も変えることはできない。」",
      quoteRomanji: "Nanika o suteru koto ga dekinai hito ni wa, nanimo kaeru koto wa dekinai.",
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
      quote: "I'm fine playing the role of the lunatic who kills people like that. I've got to ensure the choices I make leave no regrets.",
      quoteJapanese: "「おい…ガキ共…心臓を捧げよ。悔いなき選択をしろ。」",
      quoteRomanji: "Oi... gaki-domo... Shinzō o sasageyo. Kuinaki sentaku o shiro.",
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
      quoteJapanese: "「我が兵士よ怒れ！我が兵士よ叫べ！我が兵士よ戦え！進撃せよ！」",
      quoteRomanji: "Waga heishi yo ikare! Waga heishi yo sakebe! Waga heishi yo tatakae! Shingeki seyo!",
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
      quoteJapanese: "「俺が鎧の巨人で、こいつが超大型巨人だ！戦士として最後まで責任を果たす！」",
      quoteRomanji: "Ore ga Yoroi no Kyojin de, koitsu ga Chōōgata Kyojin da! Senshi toshite saigo made sekinin o hatasu!",
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
      quoteJapanese: "「なんて…いい天気じゃないか。もっと早く気づいていれば…」",
      quoteRomanji: "Nante... ii tenki ja nai ka. Motto hayaku kizuite ireba...",
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
      quote: "I may be humanity's enemy, but I'm your friend, Eren. I can't be a good girl, and I don't want to be a god either.",
      quoteJapanese: "「私は人類の敵だけど、エレンの味方だよ。いい子にもなれないし、神様にもなりたくない。」",
      quoteRomanji: "Watashi wa jinrui no teki dakedo, Eren no mikata da yo.",
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
      quoteJapanese: "「やっぱり巨人って…本当に素晴らしいよ！」",
      quoteRomanji: "Yappari Kyojin tte... hontō ni subarashii yo!",
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
      quoteJapanese: "「私はただ、流されるような弱い人間でも、人間らしく生きたいだけ。」",
      quoteRomanji: "Watashi wa tada, nagasareru yō na yowai ningen demo, ningenrashiku ikitai dake.",
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
      quoteJapanese: "「オレは何をすべきか分かってる！もう誰の骨も燃えかすにしたくない！」",
      quoteRomanji: "Ore wa nani o subeki ka wakatteru! Mō dare no hone mo moekasu ni shitakunai!",
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
      quoteJapanese: "「私はマーレを信じてない。でも、共に戦った仲間を信じてる。」",
      quoteRomanji: "Watashi wa Māre o shinjitenai. Demo, tomo ni tatakatta nakama o shinjiteru.",
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
        radius: "480 km (Circumference ~3,000 km)",
        height: "50 meters",
        districts: ["Shiganshina (South Outskirt)", "Quinta (West Gate)", "Holst (North Gate)", "Dormer (East Gate)"],
        population: "Working-class agrarians, farming villages, livestock settlements",
        status: "Breached in 845 by Colossal & Armored Titans; Liberated in 850; Wall Titans unhardened in 854",
        description: "The outermost ring spanning vast fertile valleys. King Karl Fritz established bait districts at the cardinal points to attract roaming Pure Titans to fixed cannon bastions.",
        color: "#e63946",
        garrisonForce: "4,200 Soldiers (Prior to 845)",
        titanDensity: "High (External Roaming Swarms)"
      },
      {
        id: "wall-rose",
        name: "Wall Rose",
        radius: "380 km (100 km inward from Maria)",
        height: "50 meters",
        districts: ["Trost (South Barrier)", "Karanes (East Hub)", "Nedlay (North Stronghold)", "Utopia (West Valley)"],
        population: "Displaced refugees, tradesmen, manufacturing guilds, mid-tier military garrisons",
        status: "Breached in 850 by Colossal Titan; Sealed by Eren Yeager with a massive boulder; Unhardened in 854",
        description: "The middle ring of humanity's sanctuary. When Maria collapsed, Rose absorbed 250,000 starving refugees, triggering famine and severe internal unrest until the failed government reclamation campaign.",
        color: "#f77f00",
        garrisonForce: "7,800 Soldiers & Heavy Cannons",
        titanDensity: "Zero Internal (Defended perimeter)"
      },
      {
        id: "wall-sina",
        name: "Wall Sina",
        radius: "250 km (130 km inward from Rose)",
        height: "50 meters",
        districts: ["Mitras (Royal Capital & Throne)", "Stohess (East Hub & Crystal Prison)", "Hermiha (South Citadel)", "Yarckel (West Gate)", "Underground Slums"],
        population: "The King, wealthy nobility, high-ranking military brass, merchants, Church of the Walls",
        status: "Stohess damaged during Female Titan battle; Royal government overthrown in 850; Unhardened in 854",
        description: "The opulent, highly fortified center. Sheltered entirely from the terror of Titan attacks. Houses the lavish Palace of Mitras and the crime-ridden subterranean Underground District.",
        color: "#2a9d8f",
        garrisonForce: "12,000 Troops (Military Police & Garrison)",
        titanDensity: "Zero (Heavily Protected Sanctuary)"
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
          desc: "Compressed gas canisters fueled by refined Iceburst Stone mounted along hips providing high-velocity multidirectional thrust."
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
  },

  // FEATURE 1: INTERACTIVE "PATHS" (道) NETWORK DATA
  pathsTree: {
    center: {
      id: "founder-ymir",
      name: "Founder Ymir Fritz (The Trunk)",
      desc: "The nexus where all coordinate branches of light converge. A slave girl who spent 2,000 years sculpting Titans out of sand in timeless eternity.",
      memories: "2,000 years of bondage under the Fritz royal decree until Eren Yeager gave her the choice to be free."
    },
    nodes: [
      { id: "attack-branch", name: "Attack Titan", branch: "Freedom", inheritor: "Eren Yeager", power: "Future Memory Streams", memorySnippet: "Perceiving memories of the future to orchestrate the liberation of Eldia." },
      { id: "founder-branch", name: "Founding Titan", branch: "The Coordinate", inheritor: "Karl / Frieda / Eren", power: "Universal Eldian Command", memorySnippet: "Memory alteration and biological rewriting of all Subjects of Ymir." },
      { id: "colossal-branch", name: "Colossal Titan", branch: "Destruction", inheritor: "Bertholdt / Armin", power: "Nuclear Thermal Detonation", memorySnippet: "Sacrificing muscle tissue to generate devastating thermal screen explosions." },
      { id: "armored-branch", name: "Armored Titan", branch: "Fortress", inheritor: "Reiner Braun", power: "Hardened Bone Plating", memorySnippet: "Carrying the torment and trauma of Marley's child warrior program." },
      { id: "female-branch", name: "Female Titan", branch: "Adaptation", inheritor: "Annie Leonhart", power: "Selective Hardening & Roar", memorySnippet: "Versatile martial combat and sonic Titan aggregation roars." },
      { id: "beast-branch", name: "Beast Titan", branch: "Command", inheritor: "Zeke Yeager", power: "Spinal Fluid Roar & Artillery", memorySnippet: "Royal blood converting injected Eldians into subservient nocturnal Titans." },
      { id: "jaw-branch", name: "Jaw Titan", branch: "Agility", inheritor: "Porco / Falco", power: "Armor-Crushing Jaws & Flight", memorySnippet: "Manifesting avian wings via Zeke's Beast spinal fluid consumption." },
      { id: "cart-branch", name: "Cart Titan", branch: "Endurance", inheritor: "Pieck Finger", power: "Months-Long Shift Stamina", memorySnippet: "Mobile artillery mount support and rapid consecutive transformations." },
      { id: "warhammer-branch", name: "War Hammer Titan", branch: "Creation", inheritor: "Lara Tybur / Eren", power: "Subterranean Structural Hardening", memorySnippet: "Manipulating ground spikes and weaponry via remote crystal umbilical tether." }
    ]
  },

  // FEATURE 2: BATTLE MATCHUP SIMULATOR DATA
  battleMatrix: [
    {
      id: "levi-vs-beast",
      fighterA: "Levi Ackerman",
      fighterB: "Beast Titan (Zeke)",
      title: "Humanity's Strongest vs. Marley's War Chief",
      location: "Shiganshina District (850) & Giant Forest (854)",
      winRateA: 95,
      winRateB: 5,
      summary: "Levi utilizes smoke screens, blinding speed, and 3D rotational blade slices to slice the Beast Titan's optic nerves, tendons, and nape before Zeke can react.",
      tacticalFactor: "Ackerman awakened reaction speed nullifies Zeke's long-range rock artillery at close range.",
      canonOutcome: "Levi single-handedly shredded the Beast Titan twice, extracting Zeke from the nape in seconds."
    },
    {
      id: "eren-vs-reiner",
      fighterA: "Attack Titan (Eren)",
      fighterB: "Armored Titan (Reiner)",
      title: "Brawler of Freedom vs. The Shield of Marley",
      location: "Wall Rose, Shiganshina, Liberio, & Final War",
      winRateA: 75,
      winRateB: 25,
      summary: "While Reiner has superior armor, Eren combines martial grappling (learned from Annie) and diamond hardening on his fists to crack and shatter Reiner's armor plates.",
      tacticalFactor: "Thunder Spears and focused knuckle hardening render Reiner's passive bone armor obsolete.",
      canonOutcome: "Eren repeatedly defeated Reiner in hand-to-hand combat across all major battles."
    },
    {
      id: "armin-vs-marley-fleet",
      fighterA: "Colossal Titan (Armin)",
      fighterB: "Marley Naval Fleet (Liberio)",
      title: "Tactical Nuclear Transformation vs. Imperial Navy",
      location: "Liberio Port (854)",
      winRateA: 100,
      winRateB: 0,
      summary: "Armin triggers his transformation at point-blank range over the harbor, releasing a catastrophic kinetic fireball that disintegrates dozens of warships instantly.",
      tacticalFactor: "Colossal nuclear transformation shockwave generates impossible thermal kinetic energy.",
      canonOutcome: "Entire Marleyan imperial fleet wiped out in a single second."
    },
    {
      id: "eren-vs-warhammer",
      fighterA: "Attack Titan (Eren)",
      fighterB: "War Hammer Titan (Lara Tybur)",
      title: "Eren Yeager vs. Tybur Subterranean Cocoon",
      location: "Liberio Internment Plaza (854)",
      winRateA: 80,
      winRateB: 20,
      summary: "The War Hammer dominates initial clash with pikes and hammers, until Eren deduces the pilot is not in the nape, using the Jaw Titan's hardened jaws as a nutcracker.",
      tacticalFactor: "Remote cable vulnerability: severing the fleshy umbilical tether paralyzes the War Hammer.",
      canonOutcome: "Eren severed the cable and crushed Lara's crystal cocoon using Porco's Jaw Titan, devouring her."
    }
  ],

  // FEATURE 3: "INFORMATION AVAILABLE FOR PUBLIC DISCLOSURE" MID-EPISODE CARDS
  publicDisclosures: [
    {
      id: "iceburst-stone",
      title: "Iceburst Stone & Compressed Gas",
      japanese: "現在公開可能な情報 • 氷爆石",
      category: "Resource Technology",
      summary: "A unique volatile crystal formed deep within the volcanic caves of Paradis Island. When vaporized, it releases vast volumes of compressed gas utilized to fuel the high-pressure propulsion jets of ODM gear.",
      classification: "Classified Military Resource"
    },
    {
      id: "ultra-hard-steel",
      title: "Ultra-Hard Steel Blades",
      japanese: "現在公開可能な情報 • 超硬質ブレード",
      category: "Weapon Metallurgy",
      summary: "Forged in blast furnaces using rare Paradis iron and organic additives. The blades combine high elasticity and extreme diamond-dense hardness, designed specifically to slice Titan flesh without snapping under high tension.",
      classification: "Standard Issue Scout Weaponry"
    },
    {
      id: "curse-of-ymir",
      title: "The Curse of Ymir (13-Year Lifespan)",
      japanese: "現在公開可能な情報 • ユミルの呪い",
      category: "Biological Law",
      summary: "Because Founder Ymir died 13 years after awakening her Titan power, no subsequent inheritor of the Nine Titans may live past 13 years. In their final years, the inheritor's body rapidly weakens until death transfers the power to a newborn Eldian.",
      classification: "Biological Constraint of the Paths"
    },
    {
      id: "spinal-fluid-gas",
      title: "Zeke's Spinal Fluid Weaponization",
      japanese: "現在公開可能な情報 • 脊髄液ガス",
      category: "Chemical Superweapon",
      summary: "Zeke Yeager's royal Beast Titan spinal fluid was aerosolized into gas or mixed into military wine. Eldians who ingest it experience a temporary paralysis, followed by instant transformation into Titans upon Zeke's vocal roar.",
      classification: "Marley High Command Classified"
    },
    {
      id: "thunder-spears",
      title: "Thunder Spears (Anti-Titan Rockets)",
      japanese: "現在公開可能な情報 • 雷槍",
      category: "Ordnance Engineering",
      summary: "Invented by Hange Zoë and Scout engineers to counter the Armored Titan. Operates as a pole-mounted rocket carrying a shaped explosive charge that is driven into armor and detonated via wire cord.",
      classification: "Anti-Armor Special Munition"
    },
    {
      id: "wall-titan-hardening",
      title: "Wall Titan Encapsulation & Sunlight",
      japanese: "現在公開可能な情報 • 壁の巨人と日光",
      category: "Wall Architecture",
      summary: "The Three Walls are formed of millions of 50-meter Colossal Titans linked by hardened crystal skins. Without sunlight, these dormant Titans remain paralyzed, but will instantly reactivate if exposed to solar rays.",
      classification: "Secret of the Church of the Walls"
    }
  ],

  // FEATURE 4: TACTICAL MAP EXPLORER LOCATIONS
  tacticalMapLocations: [
    {
      id: "shiganshina",
      name: "Shiganshina District (Wall Maria South)",
      coords: "Grid South-01 • Paradis Outer Gate",
      importance: "Birthplace of Eren, Mikasa, & Armin. Site of the original 845 Breach and the climactic Return to Shiganshina in 850.",
      casualties: "Over 250,000 indirect civilian and military losses in 845.",
      keyEvent: "Erwin Smith's suicide cavalry charge against the Beast Titan and discovery of Grisha's basement truth."
    },
    {
      id: "giant-forest",
      name: "The Forest of Giant Trees",
      coords: "Paradis Interior Territory • Sector 04",
      importance: "Ancient forest featuring 80-meter trees, ideal for high-speed ODM 3D mobility maneuvers.",
      casualties: "Special Operations Squad (Petra, Oluo, Eld, Gunther) wiped out by the Female Titan.",
      keyEvent: "Commander Erwin's high-tension wire trap ambush against Annie Leonhart."
    },
    {
      id: "utgard-castle",
      name: "Utgard Castle Ruins",
      coords: "Wall Rose Perimeter • Sector 07",
      importance: "Ancient abandoned fortress where 104th Scout trainees were surrounded by nocturnal Titans commanded by the Beast Titan.",
      casualties: "Senior Scouts Gelgar and Nanaba killed.",
      keyEvent: "Ymir reveals her Jaw Titan form to defend Krista Lenz (Historia Reiss)."
    },
    {
      id: "reiss-cavern",
      name: "Reiss Underground Crystal Cavern",
      coords: "Beneath Chapel near Wall Rose • Sector 03",
      importance: "Sacred luminous subterranean cavern where the Reiss royal family passed down the Founding Titan across generations.",
      casualties: "Entire Reiss royal family (except Rod and Historia) slaughtered by Grisha Yeager.",
      keyEvent: "Historia defies her father, shattering the Titan serum syringe and freeing Eren."
    },
    {
      id: "liberio",
      name: "Liberio Internment Zone (Marley)",
      coords: "Mainland Marley • Eldian Ghetto Sector",
      importance: "Walled ghetto where Eldians in Marley are imprisoned. Site of Willy Tybur's declaration of war festival.",
      casualties: "Devastation of Marley military high command, destruction of naval fleet, loss of Sasha Braus.",
      keyEvent: "Eren's surprise Attack Titan ambush from beneath the stage and consumption of the War Hammer Titan."
    },
    {
      id: "fort-salta",
      name: "Fort Salta (The Final Clifftop)",
      coords: "Southern Marley Mountains • Final Line",
      importance: "The last remaining military stronghold of humanity where refugee airships and surviving Marleyan/Eldian soldiers witnessed the Rumbling.",
      casualties: "80% of global humanity eradicated before the march stopped.",
      keyEvent: "The Battle of Heaven and Earth: Mikasa Ackerman enters the Colossal Titan's mouth and decapitates Eren."
    }
  ],

  // FEATURE 5: SHIFTER LINEAGE FLOWCHART
  shifterLineages: [
    { titan: "Attack Titan", path: ["Eren Kruger ('The Owl')", "Grisha Yeager", "Eren Yeager"] },
    { titan: "Founding Titan", path: ["Founder Ymir", "King Karl Fritz", "Uri Reiss", "Frieda Reiss", "Grisha Yeager", "Eren Yeager"] },
    { titan: "Colossal Titan", path: ["Ancient Inheritors", "Bertholdt Hoover", "Armin Arlert"] },
    { titan: "Armored Titan", path: ["Ancient Inheritors", "Reiner Braun"] },
    { titan: "Female Titan", path: ["Ancient Inheritors", "Annie Leonhart"] },
    { titan: "Beast Titan", path: ["Tom Ksaver (Bighorn)", "Zeke Yeager (Ape)"] },
    { titan: "Jaw Titan", path: ["Marcel Galliard", "Ymir", "Porco Galliard", "Falco Grice (Winged)"] },
    { titan: "Cart Titan", path: ["Ancient Inheritors", "Pieck Finger"] },
    { titan: "War Hammer Titan", path: ["Tybur Family Ancestors", "Lara Tybur", "Eren Yeager"] }
  ],

  // FEATURE 7: "THE RUMBLING" GLOBAL IMPACT SIMULATOR
  rumblingSim: {
    totalWallTitans: "Millions of 50m Colossals",
    globalCasualtiesPct: 80,
    marchingSpeedKmH: 50,
    phases: [
      {
        hour: "00:00 - The Awakening",
        title: "All Walls Unhardened",
        desc: "Eren connects with Founder Ymir in the Paths. The hardened skins of Wall Maria, Rose, and Sina crumble simultaneously, releasing millions of dormant 50-meter Colossals."
      },
      {
        hour: "12:00 - Coastal Landfall",
        title: "Steam & Continental Advance",
        desc: "Wall Titans march through the oceans, boiling coastal waters and incinerating naval defense fleets through intense radiant steam clouds."
      },
      {
        hour: "48:00 - Mainland Obliteration",
        title: "Global Flattening",
        desc: "Titans trample cities, forests, and mountain ranges in synchronized columns, leaving behind barren flattened earth and thermal ash."
      },
      {
        hour: "96:00 - Fort Salta",
        title: "The Battle of Heaven and Earth",
        desc: "Surviving humanity and refugee airships make a final stand on the clifftops of Fort Salta before the alliance slays Eren and terminates Titan power forever."
      }
    ]
  },

  // 104TH CADET REGIMENT APTITUDE TEST
  aptitudeQuiz: [
    {
      q: "1. An Abnormal 15m Titan breaches the outer perimeter of the Giant Forest and targets your squad's vanguard. What is your tactical response?",
      options: [
        { text: "Fire acoustic flare, split into dual pincer formation, and target the nape from the tree canopies.", type: "scout", score: { scout: 3, mp: 0, garrison: 1, shifter: 1 } },
        { text: "Fall back to fortified tree barriers, deploy fixed cannon line, and hold defensive perimeter.", type: "garrison", score: { scout: 0, mp: 1, garrison: 3, shifter: 0 } },
        { text: "Withdraw to the inner wall district to safeguard civilian VIPs and leadership assets.", type: "mp", score: { scout: 0, mp: 3, garrison: 1, shifter: 0 } },
        { text: "Bite your hand, trigger incandescent lightning transformation, and eliminate the threat with pure Titan force.", type: "shifter", score: { scout: 1, mp: 0, garrison: 0, shifter: 4 } }
      ]
    },
    {
      q: "2. Your squad is low on ODM gas and blade cartridges behind enemy lines outside Wall Maria. What is your decision?",
      options: [
        { text: "Scavenge supply caches from fallen scout wagons and make a high-speed nocturnal push toward the ruin towers.", type: "scout", score: { scout: 3, mp: 0, garrison: 1, shifter: 1 } },
        { text: "Conserve remaining gas, climb to the highest wall parapet, and signal the supply corps with smoke rounds.", type: "garrison", score: { scout: 1, mp: 0, garrison: 3, shifter: 0 } },
        { text: "Establish an emergency stronghold in an abandoned stone fortress and await reinforcements.", type: "mp", score: { scout: 0, mp: 3, garrison: 2, shifter: 0 } },
        { text: "Channel Titan regeneration to repair fatigue and carry your squad on your armored shoulder plates.", type: "shifter", score: { scout: 1, mp: 0, garrison: 0, shifter: 4 } }
      ]
    },
    {
      q: "3. Commander Erwin orders a suicidal frontal decoy charge directly into the Beast Titan's boulder bombardment to create a blind spot for Captain Levi. Do you charge?",
      options: [
        { text: "DEVOTE YOUR HEART (心臓を捧げよ)! Ride forward screaming into the hellfire so Levi can strike the fatal blow.", type: "scout", score: { scout: 4, mp: 0, garrison: 0, shifter: 1 } },
        { text: "Coordinate with artillery units on the wall to lay down a suppressing mortar barrage first.", type: "garrison", score: { scout: 1, mp: 1, garrison: 3, shifter: 0 } },
        { text: "Deem the casualty rate unacceptable and seek strategic mediation with high command.", type: "mp", score: { scout: 0, mp: 4, garrison: 1, shifter: 0 } },
        { text: "Harden your fists with diamond crystal and intercept the supersonic boulder fragments directly.", type: "shifter", score: { scout: 2, mp: 0, garrison: 0, shifter: 4 } }
      ]
    },
    {
      q: "4. What is your personal philosophy regarding the eternal conflict of the world?",
      options: [
        { text: "Those who cannot sacrifice anything can never change anything. We will fight for freedom beyond the walls.", type: "scout", score: { scout: 4, mp: 0, garrison: 1, shifter: 2 } },
        { text: "Peace is maintained through disciplined defense, sturdy stone ramparts, and preserving ordinary human lives.", type: "garrison", score: { scout: 0, mp: 1, garrison: 4, shifter: 0 } },
        { text: "Order and stability inside the central territory must be preserved at all costs to prevent civil chaos.", type: "mp", score: { scout: 0, mp: 4, garrison: 1, shifter: 0 } },
        { text: "If we win, we live. If we lose, we die. If we don't fight, we cannot win. Fight. Fight (戦え、戦え)!", type: "shifter", score: { scout: 2, mp: 0, garrison: 0, shifter: 4 } }
      ]
    },
    {
      q: "5. When equipped with Ultra-Hard Steel Blades and Thunder Spears, what is your preferred weapon mastery?",
      options: [
        { text: "Acrobatic dual-blade spiral slashes executed at terminal velocity from 3D ODM anchors.", type: "scout", score: { scout: 4, mp: 0, garrison: 1, shifter: 0 } },
        { text: "Stationary double-barrel Wall Cannons and high-explosive grape-shot shells.", type: "garrison", score: { scout: 0, mp: 0, garrison: 4, shifter: 0 } },
        { text: "Anti-Personnel ODM Gear equipped with dual semi-automatic shotguns.", type: "mp", score: { scout: 0, mp: 4, garrison: 1, shifter: 0 } },
        { text: "Pure concentrated Titan bio-energy, localized crystallization hardening, and sonic roar commands.", type: "shifter", score: { scout: 1, mp: 0, garrison: 0, shifter: 4 } }
      ]
    }
  ],

  // GRISHA YEAGER'S SECRET BASEMENT JOURNALS
  basementJournals: [
    {
      id: "book-1",
      title: "Journal I: The Eldian Restorationists & The Owl",
      subtitle: "The secret rebellion in the Liberio Internment Zone",
      date: "Year 832 • Classified Marley Dossier",
      content: "Humanity has not perished beyond the walls. Across the ocean lies an industrialized continent called Marley. My sister Faye was murdered by Marleyan Public Security. In grief and fury, I joined the Eldian Restorationists guided by an undercover operative known only as 'The Owl' (Eren Kruger). When our movement was betrayed by my own son Zeke, we were sentenced to 'Paradise'—injected with Titan serum at the border wall. But Kruger revealed his true identity as the Attack Titan, destroyed the Marleyan cruiser, and passed his Titan power to me, instructing me to seek the Founding Titan inside the walls and protect Armin and Mikasa.",
      quote: "Whose memories are these? ...To save Mikasa, Armin, and everyone else, you must see this mission through.",
      quoteJapanese: "「ミカサやアルミン、みんなを救いたいなら、使命を全うしろ」"
    },
    {
      id: "book-2",
      title: "Journal II: The World Beyond the Sea & Technological Civilization",
      subtitle: "Airships, steam engines, and the ocean photograph",
      date: "Year 844 • Recovered from Shiganshina Basement",
      content: "This is a photograph. It is not an illustration. It was produced by letting light react with a special emulsion plate. Humanity outside the walls enjoys advanced technology: naval ironclads, wireless radio communication, steam locomotives, and massive airships that rule the skies. Paradis Island is not the last bastion of human life, but a solitary resource-rich prison island isolated by the 145th King Karl Fritz, who locked his subjects inside memory-wiped walls while the rest of the planet advanced a century ahead.",
      quote: "Humanity has not perished. The world is vast and filled with marvels.",
      quoteJapanese: "「人類は滅んでなどいない」"
    },
    {
      id: "book-3",
      title: "Journal III: The Paths & The Curse of Ymir",
      subtitle: "Metaphysical biology of the Nine Titans",
      date: "Year 845 • The Secret Manuscript",
      content: "All Subjects of Ymir are connected across invisible channels that transcend time and space: The Paths (道). At the center of these Paths stands the Coordinate—the Founding Titan. Flesh, bones, and memories travel instantaneously through these paths when a Titan manifests. However, no human who inherits the power of the Nine Titans may live beyond 13 years from their awakening—The Curse of Ymir. To safeguard the future, the Founding Titan must be wrestled from the royal bloodline who are bound by the pacifist King's vow.",
      quote: "From this moment forward, the Attack Titan moves ever forward, seeking freedom in every era.",
      quoteJapanese: "「いついかなる時代においても、その巨人は自由を求めて進み続けた」"
    }
  ],

  // TITAN BIOLOGICAL ANATOMY & WEAK-POINT SPECIFICATIONS
  titanAnatomy: {
    "attack-titan": {
      name: "Attack Titan (進撃の巨人)",
      napeDepth: "1.0m × 10cm (Human pilot seated at C3–C7 vertebrae)",
      pilotCapsule: "Enclosed in fibrous spinal neural tissue; high synchronization rate with memories of future successors.",
      hardeningNodes: "Selective localized crystallization on knuckles, elbows, and heels.",
      combatVulnerability: "High stamina recovery, but vulnerable to continuous Thunder Spear decapitation."
    },
    "colossal-titan": {
      name: "Colossal Titan (超大型巨人)",
      napeDepth: "3.0m deep within 60-meter muscular dorsal trunk",
      pilotCapsule: "Pilot suspended in high-temperature core; protected by 600°C scalding steam venting from skin pores.",
      hardeningNodes: "None; relies on thermal pressure waves and atomic-yield transformation explosion.",
      combatVulnerability: "Extreme energy exhaustion; rapid muscular mass evaporation during continuous steam output."
    },
    "armored-titan": {
      name: "Armored Titan (鎧の巨人)",
      napeDepth: "Protected under 30cm segmented interlocking organic steel plates",
      pilotCapsule: "Pilot can transfer consciousness across secondary nervous system along the lower spine.",
      hardeningNodes: "Full body plating; joint crevices at knees, armpits, and jaw remain unarmored for mobility.",
      combatVulnerability: "Susceptible to Anti-Titan artillery, Thunder Spear penetrations, and War Hammer spikes."
    }
  }
};

