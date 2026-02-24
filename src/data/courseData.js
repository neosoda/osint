export const courseData = [
    {
        id: "m0",
        title: "Introduction & Cadre Légal",
        icon: "Gavel",
        lessons: [
            {
                id: "l0-1",
                title: "LOPMI & Règles d'Or",
                content: `
                    <div class="alert-box alert-error mb-6">
                        <i data-lucide="gavel" class="w-6 h-6 shrink-0"></i>
                        <div>
                            <h3 class="font-bold text-base mb-2">RÈGLE D'OR & CADRE LÉGAL (FRANCE)</h3>
                            <p class="text-sm">Ne jamais tester sans autorisation explicite écrite. La loi <strong>LOPMI du 24 janvier 2023</strong> a porté les peines pour accès frauduleux à un STAD à <strong>3 ans d'emprisonnement et 100 000 € d'amende</strong>. Toute opération nécessite une convention signée définissant le périmètre, la méthodologie et les délais.</p>
                        </div>
                    </div>
                    <h2>Bienvenue dans l'OSINT Lab</h2>
                    <p>Ce cours est conçu pour vous doter des compétences nécessaires en recherche en source ouverte (OSINT) et en ingénierie sociale (Social Engineering) dans un cadre strictement professionnel et défensif.</p>
                    <h3>Méthodologie d'Audit</h3>
                    <p>La méthodologie standard repose sur plusieurs phases strictes :</p>
                    <ol>
                        <li><strong>Isolement du Poste :</strong> Démarrage exclusif d'une VM Kali dédiée pour la mission. Le trafic est routé via VPN.</li>
                        <li><strong>Reconnaissance Passive :</strong> Utilisation exclusive de moteurs tiers (Google Dorks, Shodan). Pas de contact direct.</li>
                        <li><strong>Énumération :</strong> Exploitation des données (Holehe, Maigret).</li>
                        <li><strong>Chaîne de Preuves :</strong> Enregistrement cryptographiquement prouvable (ex: Hunchly).</li>
                    </ol>
                `,
                quiz: [
                    {
                        id: "q0-1-1",
                        question: "Selon la loi LOPMI (2023), quelle est la peine encourue pour un accès frauduleux à un STAD ?",
                        options: [
                            "1 an de prison et 15 000€ d'amende",
                            "3 ans de prison et 100 000€ d'amende",
                            "5 ans de prison et 300 000€ d'amende",
                            "C'est toléré dans le cadre de l'OSINT"
                        ],
                        correct: 1,
                        explanation: "La LOPMI a durci les peines pour atteindre 3 ans et 100k€ pour l'accès et le maintien frauduleux dans un Système de Traitement Automatisé de Données."
                    }
                ]
            }
        ]
    },
    {
        id: "m1",
        title: "Infrastructure de Base",
        icon: "Server",
        lessons: [
            {
                id: "l1-1",
                title: "Virtualisation & Systèmes Clés",
                content: `
                    <h2>Compartimentation de l'Environnement</h2>
                    <p>Un lab efficace repose sur trois piliers : OS spécialisés, virtualisation robuste et navigation durcie. La compartimentation est le maître-mot : chaque activité doit vivre dans sa propre VM jetable.</p>
                    
                    <h3>Systèmes Essentiels</h3>
                    <ul>
                        <li><strong>Kali Linux :</strong> Plateforme offensive de référence.</li>
                        <li><strong>Whonix :</strong> Architecture de sécurité isolant la Gateway (routage Tor) de la Workstation.</li>
                        <li><strong>Tails OS :</strong> Session live amnésique (The Amnesic Incognito Live System). Ne laisse aucune trace locale.</li>
                    </ul>

                    <h3>Tendances 2026 de l'écosystème</h3>
                    <ul>
                        <li><strong>L'IA Agentique :</strong> Automatisation du pivoting via LLM intégrés.</li>
                        <li><strong>Le Shadow IT Cloud :</strong> Explosion de la surface d'attaque sur des buckets non documentés.</li>
                    </ul>
                `,
                quiz: [
                    {
                        id: "q1-1-1",
                        question: "Quel système est spécifiquement conçu pour être amnésique (ne laisser aucune trace locale) ?",
                        options: ["Kali Linux", "Ubuntu", "Tails OS", "Whonix"],
                        correct: 2,
                        explanation: "Tails (The Amnesic Incognito Live System) efface complètement la RAM à l'extinction et fonctionne uniquement en live USB."
                    }
                ]
            },
            {
                id: "l1-2",
                title: "Outils d'Investigation",
                content: `
                    <h2>Le Répertoire de l'Analyste</h2>
                    <p>Voici les outils phares utilisés en investigation avancée :</p>
                    
                    <h3>Reconnaissance Web</h3>
                    <ul>
                        <li><strong>Maltego CE :</strong> Outil graphique d'analyse de liens surpuissant.</li>
                        <li><strong>Sherlock / Maigret :</strong> Recherche de pseudonymes à travers des centaines de réseaux.</li>
                        <li><strong>Shodan :</strong> Moteur de recherche pour l'IoT et les services exposés.</li>
                    </ul>
                    
                    <h3>SOCMINT (Social Media Intelligence)</h3>
                    <ul>
                        <li><strong>Telepathy :</strong> Extraction et archivage de canaux Telegram.</li>
                    </ul>
                    
                    <div class="alert-box alert-info">
                        <i data-lucide="shield-alert" class="w-5 h-5 shrink-0 mt-0.5"></i>
                        <div>
                            <h3 class="font-bold text-sm mb-1">Règle d'OPSEC</h3>
                            <p class="text-sm">Pour des requêtes API (comme Maltego ou Shodan), utilisez toujours un accès VPN pour masquer l'IP source de vos investigations.</p>
                        </div>
                    </div>
                `,
                lab: `
                    <h3>Setup de Base (Kali)</h3>
                    <p>Testez l'installation d'un outil CLI simple de reconnaissance :</p>
                    
                    <p>1. Cloner le repo Sherlock :</p>
                    <pre><code class="language-bash">git clone https://github.com/sherlock-project/sherlock.git
cd sherlock</code></pre>
                    
                    <p>2. Installer les dépendances :</p>
                    <pre><code class="language-bash">python3 -m pip install -r requirements.txt</code></pre>
                    
                    <p>3. Lancer une recherche basique :</p>
                    <pre><code class="language-bash">python3 sherlock.py user123 --print-all</code></pre>
                `
            }
        ]
    },
    {
        id: "m2",
        title: "Social Engineering",
        icon: "Users",
        lessons: [
            {
                id: "l2-1",
                title: "Attaques modernes & Phishing",
                content: `
                    <h2>L'évolution du Phishing : Adversary-in-the-Middle (AitM)</h2>
                    <p>Avec la prolifération du MFA (Multi-Factor Authentication), le phishing traditionnel (vol de login/mot de passe simple) est devenu moins efficace.</p>
                    
                    <h3>Evilginx</h3>
                    <p>Framework de phishing de nouvelle génération opérant en mode AitM. Conçu spécifiquement pour contourner les protections MFA/2FA en interceptant les tokens de session (cookies).</p>
                    
                    <h3>GoPhish</h3>
                    <p>Plateforme open-source robuste de simulation de campagnes de phishing. Inclut la gestion de listes de cibles et la création de landing pages.</p>
                    
                    <div class="alert-box alert-error">
                        <i data-lucide="alert-triangle" class="w-5 h-5 shrink-0 mt-0.5"></i>
                        <div>
                            <h3 class="font-bold text-sm mb-1">OPSEC Critique</h3>
                            <p class="text-sm">AitM est une technique extrêmement sensible. Le scope d'autorisation (RoE) doit être hyper strict. Détruire l'infrastructure VPS immédiatement après l'exercice.</p>
                        </div>
                    </div>
                `
            }
        ]
    }
];

// Helper to flatten lessons for linear navigation
export const flatLessons = courseData.flatMap(m => 
    m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title, moduleIcon: m.icon }))
);
