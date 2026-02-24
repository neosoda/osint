// Auto-generated toolkit data from Excel

export const toolkitData = [
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "VirtualBox / VMware Workstation",
    "Description": "Hyperviseur hôte standard pour isoler toutes les activités en VM. Cross-platform, facile à distribuer et réinitialiser. Images 'golden' figées pour les ateliers.",
    "Difficulté": "Facile",
    "OPSEC": "Réseau VM en NAT/host-only selon scénario ; snapshots avant atelier ; jamais de secrets durables dans l'image.",
    "Lien": "https://www.virtualbox.org",
    "Type": "Hyperviseur lab",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Proxmox VE 8.1",
    "Description": "Gestion centralisée de VMs : ISO, snapshots, permissions utilisateurs. Facilite le déploiement de labs éphémères par étudiant ou par scénario.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Déployer des labs isolés par étudiant ; purger les snapshots après chaque session.",
    "Lien": "https://www.proxmox.com",
    "Type": "Hyperviseur lab",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Qubes OS 4.2",
    "Description": "OS 'workstation' avec compartimentation native via hyperviseur Xen. Domaines isolés codés par couleur (travail, perso, non fiable). Compromis d'une VM n'implique pas les autres.",
    "Difficulté": "Avancé",
    "OPSEC": "Installer sur matériel de confiance (pas de nested virt) ; Disposable VMs pour chaque session de recherche ; séparer qubes recherche/admin/mail.",
    "Lien": "https://www.qubes-os.org",
    "Type": "OS / Isolation",
    "Niveau": "Avancé",
    "Source": "Doc.2+3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Kali Linux 2026",
    "Description": "OS pentest complet, pré-installé avec des centaines d'outils. Standard de la formation en sécurité offensive.",
    "Difficulté": "Facile",
    "OPSEC": "Jamais en dual-boot sur machine perso ; toujours en VM chiffrée ; mettre à jour avant chaque atelier.",
    "Lien": "https://www.kali.org",
    "Type": "OS / Pentest",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Tails OS",
    "Description": "OS amnésique live system routant tout via Tor. Zéro trace sur disque. Idéal pour démos publiques et ateliers BYOD.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Ne pas stocker de données sensibles sans persistance chiffrée ; anonymat ≠ permission ; respecter RGPD.",
    "Lien": "https://tails.boum.org",
    "Type": "OS / Anonymat",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Whonix",
    "Description": "OS en deux VMs : Gateway Tor + Workstation isolée. Fuite d'IP physiquement impossible. Alternative à Tails pour investigations longues nécessitant persistance.",
    "Difficulté": "Avancé",
    "OPSEC": "Utiliser sur matériel dédié ; combiner avec Proxmox pour labs multi-étudiants.",
    "Lien": "https://www.whonix.org",
    "Type": "OS / Anonymat",
    "Niveau": "Avancé",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Docker / Dockerfile",
    "Description": "Conteneurisation et standardisation des outils OSINT. Persistance via BIND mount. Facilite le déploiement reproductible en formation.",
    "Difficulté": "Facile",
    "OPSEC": "Images sans privilèges root ; ne pas exposer les ports hôte inutilement ; nettoyer les volumes après usage.",
    "Lien": "https://www.docker.com",
    "Type": "Conteneurisation",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "SquareX",
    "Description": "Isolation de navigateur à distance (RBI) : liens suspects ouverts dans onglets jetables cloud. Protège l'IP et les ressources locales.",
    "Difficulté": "Facile",
    "OPSEC": "Utiliser pour chaque lien externe non vérifié ; idéal pour ouvrir des fichiers suspects en démo.",
    "Lien": "https://sqrx.com",
    "Type": "Isolation navigateur",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Tor Browser",
    "Description": "Navigateur anti-tracking/anti-fingerprinting via réseau Tor. Enseigne concrètement l'acheminement onion et les risques de désanonymisation.",
    "Difficulté": "Facile",
    "OPSEC": "Ne jamais mélanger identités ; ne pas se loguer avec comptes réels de l'organisation ; isoler de tout compte réel.",
    "Lien": "https://www.torproject.org",
    "Type": "Navigateur anonymat",
    "Niveau": "Débutant",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Firefox Multi-Account Containers",
    "Description": "Cloisonne cookies et sessions par conteneur (persona OSINT, démo, comptes de test) sans multiplier les profils Firefox.",
    "Difficulté": "Facile",
    "OPSEC": "Conteneurs dédiés par usage ; nettoyage post-séance ; ne pas mélanger recherches 'sales' et services sensibles.",
    "Lien": "https://addons.mozilla.org/firefox/addon/multi-account-containers/",
    "Type": "Extension navigateur",
    "Niveau": "Débutant",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "uBlock Origin",
    "Description": "Filtrage agressif des publicités et trackers pendant les ateliers OSINT. Réduit le bruit et protège l'empreinte navigateur.",
    "Difficulté": "Facile",
    "OPSEC": "Rester en configuration simple par défaut ; éviter d'empiler des bloqueurs (conflits) ; désactiver filtrage cosmétique pour éviter détection bots.",
    "Lien": "https://github.com/gorhill/uBlock",
    "Type": "Extension navigateur",
    "Niveau": "Débutant",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "NoScript",
    "Description": "Blocage préventif de JavaScript : démontre l'impact du JS sur tracking, XSS, fingerprinting. Composant clé de Tor Browser.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Whitelists minimales ; documenter clairement que ça casse des sites (c'est le but pédagogique).",
    "Lien": "https://noscript.net",
    "Type": "Extension navigateur",
    "Niveau": "Intermédiaire",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "LayerX",
    "Description": "Gouvernance des données entre navigateur et SaaS. Virtualisation du moteur JS bloquant les payloads retardés (extensions Sleeper).",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Surveiller les flux de données sortants en temps réel ; efficace contre les extensions malveillantes à déclenchement différé.",
    "Lien": "https://layerxsecurity.com",
    "Type": "Extension navigateur",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Wappalyzer",
    "Description": "Fingerprinting technologique d'un site en 1 clic : CMS, frameworks JS, CDN, analytics. Résultat immédiat sans interaction avec la cible.",
    "Difficulté": "Facile",
    "OPSEC": "Passif — résultat basé sur analyse du code source public.",
    "Lien": "https://www.wappalyzer.com",
    "Type": "Extension navigateur",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🖥️  Infrastructure & Navigateur",
    "Outil": "Mitaka",
    "Description": "Extension d'accélération OSINT inline depuis le navigateur : enrichit automatiquement IPs, domaines, hashes sélectionnés.",
    "Difficulté": "Facile",
    "OPSEC": "Limiter les recherches automatiques pour éviter le rate limiting des APIs.",
    "Lien": "https://github.com/ninoseki/mitaka",
    "Type": "Extension navigateur",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "SpiderFoot",
    "Description": "Point d'entrée débutant→intermédiaire : collecte/corrélation automatisée depuis domaine, IP, ASN, email ou nom. 200+ sources, interface web + export JSON/CSV.",
    "Difficulté": "Facile → Intermédiaire",
    "OPSEC": "VM dédiée pour les requêtes ; clés API 'lab' séparées des clés perso ; journaliser ce qui est interrogé ; minimiser la collecte.",
    "Lien": "https://www.spiderfoot.net",
    "Type": "Automatisation OSINT",
    "Niveau": "Débutant",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Recon-ng",
    "Description": "Framework modulaire et scriptable (inspiré Metasploit) pour OSINT web. Workspaces reproductibles, resource files, interface recon-web pour le reporting.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Surveiller les modules qui 'cassent' (sources web volatiles) ; documenter quelles sources sont requêtées ; ne pas exécuter depuis des postes perso.",
    "Lien": "https://github.com/lanmaster53/recon-ng",
    "Type": "Framework recon",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "theHarvester",
    "Description": "Reconnaissance domain-centric : noms, emails, IPs, sous-domaines en interrogeant Bing, DuckDuckGo, Shodan, HIBP, Censys, crt.sh…",
    "Difficulté": "Facile → Intermédiaire",
    "OPSEC": "Cloisonner les clés API ; éviter de requêter des identifiants réels d'employés en atelier ; préférer des domaines lab.",
    "Lien": "https://github.com/laramies/theHarvester",
    "Type": "Énumération domaine",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Sherlock",
    "Description": "Recherche d'un pseudo sur 400+ plateformes simultanément. Très 'straight to the point', packaging simple, idéal comme première démonstration.",
    "Difficulté": "Facile",
    "OPSEC": "Passer par un proxy/Tor ; ne pas industrialiser ; accepter et enseigner les faux positifs.",
    "Lien": "https://github.com/sherlock-project/sherlock",
    "Type": "Recherche pseudonymes",
    "Niveau": "Débutant",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Maigret",
    "Description": "Successeur de Sherlock : rapport détaillé avec liens entre comptes et enrichissement automatique. Export HTML/PDF utile comme livrable pédagogique.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Utiliser l'option --tor ; limiter le débit pour éviter les bans ; valider manuellement les résultats (faux positifs).",
    "Lien": "https://github.com/soxoj/maigret",
    "Type": "Recherche pseudonymes",
    "Niveau": "Débutant",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Holehe",
    "Description": "Vérifie si une adresse email est enregistrée sur 120+ services via les flux 'mot de passe oublié'. Très parlant en formation.",
    "Difficulté": "Facile",
    "OPSEC": "Utiliser uniquement sur adresses de test ou dans cadre contractuel ; éviter IP sensibles ; archiver les résultats comme PII.",
    "Lien": "https://github.com/megadose/holehe",
    "Type": "Vérification email",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Hunter.io",
    "Description": "Identification des structures d'emails professionnels d'une organisation (format, domaine, employés).",
    "Difficulté": "Facile",
    "OPSEC": "Respecter les limites de requêtes pour éviter le blocage ; ne pas spammer les adresses découvertes.",
    "Lien": "https://hunter.io",
    "Type": "Énumération email",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Epieos",
    "Description": "Recherche passive sur les comptes Google à partir d'un email : photo profil, avis Google Maps, informations d'agenda. Zéro notification côté cible.",
    "Difficulté": "Facile",
    "OPSEC": "Technique totalement passive — aucune alerte générée ; traiter les résultats comme PII.",
    "Lien": "https://epieos.com",
    "Type": "Google OSINT",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Have I Been Pwned (HIBP)",
    "Description": "Référence pour le breach-checking (emails, mots de passe via k-anonymity). API documentée, règles d'usage explicites, connue des apprenants.",
    "Difficulté": "Facile → Intermédiaire",
    "OPSEC": "Ne jamais faire de bulk lookups avec emails réels en classe ; anonymiser/agréger ; respecter rate limiting et clés API.",
    "Lien": "https://haveibeenpwned.com",
    "Type": "Fuites de données",
    "Niveau": "Débutant",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "DeHashed",
    "Description": "Moteur de recherche multi-champs sur données compromises (email, username, hash, IP). Utile pédagogiquement pour illustrer les requêtes ciblées vs le bruit.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Accès restreint avec comptes nominaux ; journaux d'audit obligatoires ; chiffrement au repos ; usage hors cadre contractuel = illégal.",
    "Lien": "https://dehashed.com",
    "Type": "Fuites de données",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2+3"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Intelligence X",
    "Description": "Recherche dans les archives, dark web (Tor, I2P) et sites désactivés. Inclut tokens OAuth et secrets CI/CD exposés.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "L'accès à certaines données peut être restreint légalement ; traiter comme données hautement sensibles.",
    "Lien": "https://intelx.io",
    "Type": "Dark Web / Archives",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔍  OSINT Web & Personnes",
    "Outil": "Wayback Machine",
    "Description": "Récupération de pages supprimées, d'anciennes configurations ou d'informations effacées. Source totalement passive.",
    "Difficulté": "Facile",
    "OPSEC": "Totalement passif — aucune interaction avec le site cible. Croiser avec d'autres sources pour valider.",
    "Lien": "https://web.archive.org",
    "Type": "Archives web",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Instaloader",
    "Description": "Collecte de médias/metadata publics Instagram (followers, hashtags, photos taguées, stories). CLI ou module Python pour pipelines.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Éviter toute auth avec comptes réels ; limiter au contenu public autorisé ; documenter l'impact ToS et le risque de blocage de compte.",
    "Lien": "https://github.com/instaloader/instaloader",
    "Type": "Instagram",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Osintgram",
    "Description": "Extraction programmatique de métadonnées Instagram : followers, hashtags, photos taguées, commentaires. Interface CLI interactive.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Compte sock puppet âgé et crédible obligatoire ; ne jamais utiliser son compte réel.",
    "Lien": "https://github.com/Datalux/Osintgram",
    "Type": "Instagram",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "WhatsMyName.app",
    "Description": "Recherche cross-plateformes de pseudonyme avec tableau de bord visuel. Complète Sherlock/Maigret avec une interface web accessible.",
    "Difficulté": "Facile",
    "OPSEC": "Passif — interroge les plateformes sans authentification. Source de validation croisée.",
    "Lien": "https://whatsmyname.app",
    "Type": "Multi-plateformes",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Linkedin2Username / LinkedIn API",
    "Description": "Génère des listes d'employés d'une entreprise pour simulations Red Team. L'API officielle est la seule voie légale pour des intégrations déclarées.",
    "Difficulté": "Avancé",
    "OPSEC": "Compte sandbox approuvé ; minimisation stricte des données ; jamais de compte réel pour le scraping.",
    "Lien": "https://github.com/initstring/linkedin2username",
    "Type": "LinkedIn",
    "Niveau": "Avancé",
    "Source": "Doc.1+2+3"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Telethon",
    "Description": "Lib Python MTProto pour Telegram : extraction de messages/metadata de canaux publics autorisés, construction de timelines et cartographie de relations.",
    "Difficulté": "Avancé",
    "OPSEC": "Comptes de test uniquement ; isoler sessions/jetons ; ne jamais manipuler d'identifiants personnels en clair dans des notebooks.",
    "Lien": "https://github.com/LonamiWebs/Telethon",
    "Type": "Telegram / API",
    "Niveau": "Avancé",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Telerecon",
    "Description": "Framework complet Telegram : mapping de relations entre utilisateurs, surveillance de canaux. Synchronisation contacts via sock puppet pour démasquer des numéros.",
    "Difficulté": "Avancé",
    "OPSEC": "Toujours passer par un VPN durci ou Tor ; compte sock puppet Telegram obligatoire.",
    "Lien": "https://github.com/xngsta/telerecon",
    "Type": "Telegram",
    "Niveau": "Avancé",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "X API v2 (officielle)",
    "Description": "Collecte structurée X/Twitter (posts, users, tendances) via API officielle avec quotas et conformité. Plus stable qu'un scraping non contractuel.",
    "Difficulté": "Intermédiaire → Avancé",
    "OPSEC": "Clés dédiées au lab, rotation et révocation, stockage chiffré ; enseigner la différence API contractuelle vs scraping fragile.",
    "Lien": "https://developer.x.com",
    "Type": "Twitter/X API",
    "Niveau": "Intermédiaire",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "Twint-docker",
    "Description": "Scraping historique de tweets sans API — instance dockerisée isolée pour contourner les restrictions du paywall X.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Instances isolées et proxies rotatifs pour éviter le bannissement d'IP ; résultats à traiter comme PII.",
    "Lien": "https://github.com/twintproject/twint",
    "Type": "Twitter/X",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "SMAT",
    "Description": "Analyse de tendances et visualisation de propagation de contenus sur plateformes alternatives (Reddit, Telegram, Gab…).",
    "Difficulté": "Facile",
    "OPSEC": "Service web — passif. Idéal pour étudier la propagation désinformation sans créer de compte.",
    "Lien": "https://www.smat-app.com",
    "Type": "Multi-plateformes",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "📱  SOCMINT — Réseaux Sociaux",
    "Outil": "SnapIntel",
    "Description": "Recherche d'informations sur les utilisateurs Snapchat (profils, liens, métadonnées publiques).",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Attention aux notifications de capture d'écran sur Snapchat ; compte sock puppet dédié.",
    "Lien": "—",
    "Type": "Snapchat",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "Shodan",
    "Description": "Moteur de recherche pour l'infrastructure internet : périphériques exposés, services, bannières, caméras, systèmes industriels. Fonction Shodan Monitor pour alertes continues.",
    "Difficulté": "Facile → Intermédiaire",
    "OPSEC": "Privilégier l'interprétation (risques, remédiations) plutôt que l'énumération de cibles ; ne pas 'pointer' des systèmes tiers en live devant une classe.",
    "Lien": "https://www.shodan.io",
    "Type": "Scanner Internet",
    "Niveau": "Débutant",
    "Source": "Doc.1+2+3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "Censys",
    "Description": "Alternative à Shodan spécialisée dans les certificats TLS/SSL et services exposés. Pivots IP↔domain↔cert↔service, vues historiques, détection Shadow IT cloud.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Entièrement passif ; comptes/clefs lab séparés ; démontrer sur périmètre appartenant à l'organisation.",
    "Lien": "https://search.censys.io",
    "Type": "Scanner Internet",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+2+3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "OWASP Amass",
    "Description": "Énumération avancée de sous-domaines (OWASP) : combine 50+ sources passives et techniques actives de brute-force DNS. Standard de la cartographie de surface d'attaque.",
    "Difficulté": "Avancé",
    "OPSEC": "En démo, mode passif uniquement (amass enum -passive) ; exécuter uniquement sur périmètres autorisés ; nombreuses clés API nécessaires.",
    "Lien": "https://github.com/owasp-amass/amass",
    "Type": "DNS / Sous-domaines",
    "Niveau": "Avancé",
    "Source": "Doc.1+2+3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "subfinder",
    "Description": "Énumération passive rapide de sous-domaines 'passive-first' : CT, APIs publiques, sans jamais contacter directement la cible. Intègre bien avec Amass et reNgine-ng.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Clés API 'lab' dédiées (pas celles de prod) ; filtrage et validation systématiques avant toute action sur les résultats.",
    "Lien": "https://github.com/projectdiscovery/subfinder",
    "Type": "DNS / Sous-domaines",
    "Niveau": "Intermédiaire",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "crt.sh / Certificate Transparency",
    "Description": "Découverte de sous-domaines via logs CT publics. 'Vos certifs racontent votre infra' sans requêter la cible. Source externe 100% passive.",
    "Difficulté": "Facile",
    "OPSEC": "Recouper avec d'autres sources (wildcards, certs anciens peuvent induire en erreur). Outil de confirmation, pas de preuve unique.",
    "Lien": "https://crt.sh",
    "Type": "Certificate Transparency",
    "Niveau": "Intermédiaire",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "DNSDumpster",
    "Description": "Visualisation graphique des enregistrements DNS et cartographie des sous-domaines. Interface web accessible, aucune installation requise.",
    "Difficulté": "Facile",
    "OPSEC": "Totalement passif — aucun risque de détection par la cible. Bon outil de première exploration pédagogique.",
    "Lien": "https://dnsdumpster.com",
    "Type": "DNS / Cartographie",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "dnstwist",
    "Description": "Génère des variantes de domaine (typosquatting, homographes, permutations) pour détecter les domaines d'usurpation de marque et de phishing.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Usage défensif uniquement (monitoring de sa propre marque/organisation) ; prudence sur résolutions massives (charge DNS).",
    "Lien": "https://github.com/elceef/dnstwist",
    "Type": "Brand monitoring / Typosquatting",
    "Niveau": "Intermédiaire",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "Web-Check",
    "Description": "Analyse complète d'un domaine en une vue : DNS, WHOIS, certificats, headers HTTP, redirections, technologies. Aucune installation.",
    "Difficulté": "Facile",
    "OPSEC": "100% passif — interroge uniquement les DNS publics et données ouvertes.",
    "Lien": "https://web-check.xyz",
    "Type": "Analyse domaine",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "BuiltWith",
    "Description": "Identification du stack technologique d'un site (CMS, frameworks JS, CDN, analytics, hébergeur). Données historiques disponibles.",
    "Difficulté": "Facile",
    "OPSEC": "Service web tiers — l'opérateur n'interagit pas avec la cible. Passif.",
    "Lien": "https://builtwith.com",
    "Type": "Fingerprinting tech",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "WHOIS / DomainTools",
    "Description": "Historique d'enregistrement de domaines, pivot sur registrants, informations de contact (souvent masquées mais pivotables).",
    "Difficulté": "Facile",
    "OPSEC": "Passif ; certains registrars peuvent logger les requêtes WHOIS massives. Combiner avec Censys pour l'attribution infra.",
    "Lien": "https://whois.domaintools.com",
    "Type": "WHOIS / Registrant",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "Nmap",
    "Description": "Scanning de ports, empreinte d'OS et détection de services. Standard de facto pour l'audit réseau. Exclusivement sur lab interne contrôlé.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "ATTENTION : Scan actif = action intrusive. Séparer strictement les démos dans un range isolé (JAMAIS sur Internet/tiers sans autorisation écrite).",
    "Lien": "https://nmap.org",
    "Type": "Scanner réseau",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2+3"
  },
  {
    "Catégorie": "🌐  Infrastructure Technique",
    "Outil": "reNgine-ng",
    "Description": "Pipeline web-recon avec moteurs configurables, corrélation des résultats, monitoring continu de surface d'attaque applicative et UI web.",
    "Difficulté": "Avancé",
    "OPSEC": "Exécuter uniquement sur cibles internes autorisées ; documenter les limites des scanners et les faux positifs.",
    "Lien": "https://github.com/yogeshojha/rengine",
    "Type": "Recon web / Pipeline",
    "Niveau": "Avancé",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "GoPhish",
    "Description": "Framework open-source de simulation de phishing avec dashboard complet : templates HTML, campagnes, suivi (ouverture, clic, credential submission).",
    "Difficulté": "Intermédiaire → Avancé",
    "OPSEC": "Infra dédiée totalement isolée ; domaines et boîtes mail de test ; désactiver toute collecte de secrets réels ; landing pages pédagogiques avec message d'avertissement.",
    "Lien": "https://getgophish.com",
    "Type": "Phishing simulation",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "Microsoft Defender — Attack Simulation Training",
    "Description": "Campagnes de simulation réalistes mais inoffensives (phishing, QR code, vishing) intégrées au portail Defender avec reporting et modules de formation.",
    "Difficulté": "Facile → Intermédiaire",
    "OPSEC": "Réduire les permissions au strict nécessaire (moindre privilège) ; groupes pilotes ; métriques traitées comme données RH sensibles (accès limité).",
    "Lien": "https://security.microsoft.com",
    "Type": "Phishing simulation SaaS",
    "Niveau": "Débutant",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "SET — Social-Engineer Toolkit",
    "Description": "Suite complète TrustedSec : spear-phishing, clonage de site web, vecteurs USB, harvesting de credentials. Framework de référence en pentest SE.",
    "Difficulté": "Avancé",
    "OPSEC": "Toujours dans un réseau lab isolé ; les payloads générés sont détectés par les AV — idéal pour démontrer pourquoi l'AV est nécessaire.",
    "Lien": "https://github.com/trustedsec/social-engineer-toolkit",
    "Type": "Framework SE",
    "Niveau": "Avancé",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "Evilginx (Pro 4.x)",
    "Description": "Reverse proxy MitM qui capture sessions authentifiées et contourne MFA/2FA en temps réel. Démonstration critique pour sensibiliser aux limites du MFA par SMS.",
    "Difficulté": "Avancé",
    "OPSEC": "Infrastructure dédiée obligatoire ; domaine sous identité de test ; contrat signé impératif ; jamais hors contexte contractuel.",
    "Lien": "https://github.com/kgretzky/evilginx2",
    "Type": "MFA Bypass / AiTM",
    "Niveau": "Avancé",
    "Source": "Doc.1+2"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "ElevenLabs",
    "Description": "Clonage vocal par IA pour créer des démos de vishing. Illustre concrètement les attaques deepfake audio sur les employés (faux dirigeant ordonnant un virement).",
    "Difficulté": "Facile",
    "OPSEC": "Obtenir le consentement de la personne dont la voix est clonée ; usage démo uniquement ; présenter systématiquement les contre-mesures.",
    "Lien": "https://elevenlabs.io",
    "Type": "Deepfake vocal",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "USB Rubber Ducky (Hak5)",
    "Description": "Clé USB HID simulant un clavier — injection de commandes à vitesse surhumaine. Démontre le risque des vecteurs physiques.",
    "Difficulté": "Facile",
    "OPSEC": "Utiliser uniquement des scripts affichant des messages inoffensifs (calculatrice, alerte) pour prouver la vulnérabilité sans causer de dommages.",
    "Lien": "https://hak5.org",
    "Type": "Vecteur physique HID",
    "Niveau": "Intermédiaire",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🎭  Ingénierie Sociale",
    "Outil": "EvilGoPhish",
    "Description": "Combine GoPhish (tracking) + Evilginx3 (MiTM MFA bypass) pour une campagne complète avec statistiques détaillées.",
    "Difficulté": "Avancé",
    "OPSEC": "Niveau Red Team senior uniquement ; périmètre contractuel obligatoire ; infra dédiée.",
    "Lien": "https://www.evilgophish.com",
    "Type": "Campagne Red Team",
    "Niveau": "Avancé",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "⚙️  Automatisation & Visualisation",
    "Outil": "Maltego CE",
    "Description": "Visualisation graphique de relations entre entités (personnes, domaines, IPs, emails) via transforms automatisées. Suggestions pilotées par IA en 2026.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Importer uniquement des données minimisées ; censurer/masquer avant projection ; séparer les clés API data providers du lab. Attention aux appels API qui peuvent trahir les recherches.",
    "Lien": "https://www.maltego.com",
    "Type": "Visualisation / Graphe",
    "Niveau": "Débutant",
    "Source": "Doc.1+2+3"
  },
  {
    "Catégorie": "⚙️  Automatisation & Visualisation",
    "Outil": "Hunchly",
    "Description": "Extension Chrome qui archive et horodate automatiquement chaque page visitée pendant une investigation. Essentiel pour la chaîne de preuves légale.",
    "Difficulté": "Facile",
    "OPSEC": "Stocker les archives sur volume chiffré (VeraCrypt) ; ne jamais synchroniser sur le cloud en contexte sensible.",
    "Lien": "https://www.hunch.ly",
    "Type": "Documentation / Preuves",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+3"
  },
  {
    "Catégorie": "⚙️  Automatisation & Visualisation",
    "Outil": "Obsidian + plugin OSINT",
    "Description": "Prise de notes liée en graphe (Zettelkasten) pour documenter les pivots d'une investigation. Vault 100% local.",
    "Difficulté": "Facile",
    "OPSEC": "Vault 100% local ; aucune synchronisation cloud en contexte sensible. Exporter uniquement des datasets anonymisés pour les supports.",
    "Lien": "https://obsidian.md",
    "Type": "Documentation",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "⚙️  Automatisation & Visualisation",
    "Outil": "OSINT Framework",
    "Description": "Répertoire interactif de centaines d'outils classés par type de donnée. Boussole méthodologique indispensable pour structurer une investigation.",
    "Difficulté": "Facile",
    "OPSEC": "Outil de référencement uniquement — aucune collecte directe. Point de départ idéal pour les apprenants.",
    "Lien": "https://osintframework.com",
    "Type": "Référentiel",
    "Niveau": "Débutant",
    "Source": "Doc.1"
  },
  {
    "Catégorie": "⚙️  Automatisation & Visualisation",
    "Outil": "SL Crimewall",
    "Description": "Plateforme collaborative tout-en-un pour gestion d'enquêtes complexes en équipe SOC. Graphes, timeline, gestion des sources.",
    "Difficulté": "Avancé",
    "OPSEC": "Solution pour centres opérationnels ; attention aux données sensibles partagées en cloud ; RBAC strict.",
    "Lien": "https://sociallinks.io",
    "Type": "Plateforme SOC",
    "Niveau": "Avancé",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🛡️  CTI & Threat Intelligence",
    "Outil": "OpenCTI",
    "Description": "Plateforme CTI/STIX2 : centralise observables, sources, 'first/last seen'. Produit des dossiers pédagogiques structurés. API GraphQL + connecteurs MISP/ATT&CK.",
    "Difficulté": "Avancé",
    "OPSEC": "Gouvernance RBAC, chiffrement, backups ; triage strict des données importées — jamais de dumps PII bruts dans la plateforme.",
    "Lien": "https://www.opencti.io",
    "Type": "Threat Intelligence / CTI",
    "Niveau": "Avancé",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🛡️  CTI & Threat Intelligence",
    "Outil": "MISP",
    "Description": "Plateforme mature de partage d'IOCs : ingestion, corrélation, export STIX. Ateliers CERT/SOC autour du cycle du signal au partage.",
    "Difficulté": "Avancé",
    "OPSEC": "Séparer environnements lab vs prod ; contrôler taxonomies et diffusion ; registre des sources obligatoire ; politique de partage documentée.",
    "Lien": "https://www.misp-project.org",
    "Type": "Threat Intelligence / IOC",
    "Niveau": "Avancé",
    "Source": "Doc.3"
  },
  {
    "Catégorie": "🔒  OPSEC & Anonymisation",
    "Outil": "Mullvad VPN",
    "Description": "VPN audité à politique de non-journalisation, paiement anonyme accepté (crypto, cash). Première couche de défense pour les ateliers.",
    "Difficulté": "Facile",
    "OPSEC": "Ne pas utiliser sur machine personnelle non isolée ; combiner avec Tor pour les recherches à haut risque.",
    "Lien": "https://mullvad.net",
    "Type": "VPN",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔒  OPSEC & Anonymisation",
    "Outil": "ProtonVPN",
    "Description": "VPN open-source audité, basé en Suisse, politique zéro-log vérifiée. Bon équilibre facilité d'usage et niveau de confiance.",
    "Difficulté": "Facile",
    "OPSEC": "Combiner avec Tor pour les recherches sensibles (VPN over Tor). Clés et comptes dédiés au lab.",
    "Lien": "https://protonvpn.com",
    "Type": "VPN",
    "Niveau": "Débutant",
    "Source": "Doc.2"
  },
  {
    "Catégorie": "🔒  OPSEC & Anonymisation",
    "Outil": "Sock Puppet Framework",
    "Description": "Création de faux personas cohérents : historique crédible, photo neutre (StyleGAN pour éviter le reverse image searching), activité numérique régulière, IP locale à la cible.",
    "Difficulté": "Intermédiaire",
    "OPSEC": "Ne jamais utiliser son compte réel même pour consulter des profils ; navigateur + IP dédiés par persona ; historique à construire avant utilisation.",
    "Lien": "—",
    "Type": "Gestion d'identité",
    "Niveau": "Intermédiaire",
    "Source": "Doc.1+2"
  }
];

export const methodologyData = [
  {
    "Etape": "1",
    "Titre": "🖥️ Isolation",
    "Description": "VM Kali dédiée + snapshot initial propre — jamais depuis la machine hôte personnelle"
  },
  {
    "Etape": "2",
    "Titre": "🔎 Reco Passive",
    "Description": "Shodan, Censys, WHOIS, Wayback Machine, crt.sh — zéro contact avec la cible"
  },
  {
    "Etape": "3",
    "Titre": "👤 Énumération Identités",
    "Description": "theHarvester + Holehe + Maigret — pivot email → pseudo → comptes → infrastructure"
  },
  {
    "Etape": "4",
    "Titre": "📱 SOCMINT",
    "Description": "WhatsMyName, Instaloader, Telethon, X API v2 selon la plateforme cible"
  },
  {
    "Etape": "5",
    "Titre": "🔗 Corrélation",
    "Description": "SpiderFoot ou Maltego pour lier tous les points collectés en graphe"
  },
  {
    "Etape": "6",
    "Titre": "🎭 Simulation SE",
    "Description": "GoPhish ou MS Defender en environnement fermé pour démontrer les vecteurs d'attaque"
  },
  {
    "Etape": "7",
    "Titre": "📝 Documentation",
    "Description": "Hunchly (archive horodatée) + Obsidian (graphe de notes) pour restitution avec preuves"
  },
  {
    "Etape": null,
    "Titre": null,
    "Description": null
  },
  {
    "Etape": "⚡  MENACES & TENDANCES 2026",
    "Titre": null,
    "Description": null
  },
  {
    "Etape": "  ⚡",
    "Titre": "IA Agentique",
    "Description": "Maltego AI + SpiderFoot avec LLM intégrés : automatisation du pivoting et recommandations d'investigation"
  },
  {
    "Etape": "  ⚡",
    "Titre": "Deepfake & Vishing",
    "Description": "Clonage vocal (ElevenLabs) en forte hausse — 16 Mrd identifiants exposés en juin 2025"
  },
  {
    "Etape": "  ⚡",
    "Titre": "MFA Bypass (AiTM)",
    "Description": "Evilginx3 capture cookies de session en temps réel — le MFA SMS seul ne suffit plus"
  },
  {
    "Etape": "  ⚡",
    "Titre": "Extensions Sleeper",
    "Description": "Outils d'apparence légitime activant des payloads malveillants des semaines après installation"
  },
  {
    "Etape": "  ⚡",
    "Titre": "ClickFix Attacks",
    "Description": "Injection de commandes via faux CAPTCHA ou prompts PowerShell — vecteur en très forte hausse"
  },
  {
    "Etape": "  ⚡",
    "Titre": "Shadow IT Cloud",
    "Description": "Services non approuvés détectables via Censys (certificats TLS non référencés dans l'inventaire)"
  },
  {
    "Etape": "  ⚡",
    "Titre": "Tokens OAuth exposés",
    "Description": "Les fuites en 2026 incluent tokens OAuth et secrets CI/CD — réutilisables pour mouvements latéraux"
  },
  {
    "Etape": null,
    "Titre": null,
    "Description": null
  },
  {
    "Etape": "⚠️  RAPPEL LÉGAL : Même la collecte passive de données personnelles peut constituer une violation du RGPD sans finalité légitime documentée. Contrat signé + périmètre défini obligatoires avant tout engagement Red Team réel.",
    "Titre": null,
    "Description": null
  }
];

export const stackData = [
  {
    "Niveau": "Niveau",
    "Domaine": "Domaine",
    "Outil": "Outil / Stack recommandée",
    "Priorité": "Priorité"
  },
  {
    "Niveau": "   Prise en main, OSINT passif, premiers graphes",
    "Domaine": null,
    "Outil": null,
    "Priorité": null
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Infrastructure",
    "Outil": "VirtualBox + Docker + SquareX + Tor Browser",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Navigateur",
    "Outil": "Firefox + Multi-Account Containers + uBlock Origin + Wappalyzer",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "OSINT Automatisé",
    "Outil": "SpiderFoot (interface web) — 200+ sources, dashboard intégré",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Recherche Pseudos",
    "Outil": "Sherlock + Maigret + WhatsMyName.app",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Breach Checking",
    "Outil": "Have I Been Pwned (HIBP) — API k-anonymity",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Internet Exposure",
    "Outil": "Shodan (UI) — comprendre l'asset exposure",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Web-Check / WHOIS",
    "Outil": "Web-Check + DNSDumpster + BuiltWith",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Simulation Phishing",
    "Outil": "Microsoft Defender Attack Simulation (SaaS, inoffensif)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Visualisation",
    "Outil": "Maltego CE — graphes de relations, premiers pivots",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "Documentation",
    "Outil": "OSINT Framework (boussole) + Hunchly (chaîne de preuves)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": "VPN",
    "Outil": "Mullvad ou ProtonVPN — première couche d'anonymisation",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟢 DÉBUTANT",
    "Domaine": null,
    "Outil": null,
    "Priorité": null
  },
  {
    "Niveau": "   Enrichissement, SOCMINT, infrastructure avancée",
    "Domaine": null,
    "Outil": null,
    "Priorité": null
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Recon Framework",
    "Outil": "theHarvester + Recon-ng (workspaces, resource files)",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Email Discovery",
    "Outil": "Holehe + Hunter.io + Epieos",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Fuites Avancées",
    "Outil": "DeHashed + Intelligence X (cadre contractuel)",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "SOCMINT Instagram",
    "Outil": "Instaloader + Osintgram (comptes sandbox)",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "SOCMINT Twitter/X",
    "Outil": "X API v2 officielle (clés lab dédiées)",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "SOCMINT Multi",
    "Outil": "SMAT (Reddit, Telegram, Gab) — tendances passives",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "DNS Passif",
    "Outil": "subfinder + crt.sh (Certificate Transparency)",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "DNS Avancé",
    "Outil": "dnstwist (typosquatting) + DNSDumpster",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Infrastructure",
    "Outil": "Censys (pivots IP↔cert↔service) + Nmap (lab isolé)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "OS Anonymat",
    "Outil": "Tails OS (sessions amnésiques) + Firefox Containers",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Simulation Phishing",
    "Outil": "GoPhish (self-hosted, infra isolée, landing pages factices)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": "Personas",
    "Outil": "Sock Puppet Framework (personas cohérents, IP locale cible)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🟠 INTERMÉDIAIRE",
    "Domaine": null,
    "Outil": null,
    "Priorité": null
  },
  {
    "Niveau": "   Isolation maximale, CTI structurée, Red Team complet",
    "Domaine": null,
    "Outil": null,
    "Priorité": null
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "OS Workstation",
    "Outil": "Qubes OS 4.2 — compartimentalisation Xen, Disposable VMs",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Gestion Lab",
    "Outil": "Proxmox VE 8.1 — labs éphémères par étudiant",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Anonymat Max",
    "Outil": "Whonix (Gateway Tor + Workstation isolée)",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "DNS Complet",
    "Outil": "OWASP Amass — cartographie surface d'attaque (périmètres autorisés)",
    "Priorité": "🔑 Essentiel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Web Recon Pipeline",
    "Outil": "reNgine-ng — pipeline configurable, corrélation, monitoring",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "SOCMINT Telegram",
    "Outil": "Telethon + Telerecon (canaux publics, timelines)",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "LinkedIn",
    "Outil": "LinkedIn API officielle (sandbox approuvé, minimisation)",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Threat Intelligence",
    "Outil": "OpenCTI — observables STIX2, dossiers structurés",
    "Priorité": "➕ Recommandé"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "IOC Sharing",
    "Outil": "MISP — ingestion/partage IOCs, moteur corrélation, STIX",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "MFA Demo",
    "Outil": "Evilginx3 — démo AiTM/bypass MFA (contrat obligatoire)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Campagne Red Team",
    "Outil": "GoPhish + EvilGoPhish (infrastructure dédiée, contrat signé)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Vishing / Deepfake",
    "Outil": "ElevenLabs + USB Rubber Ducky (scénarios avec consentement)",
    "Priorité": "🔧 Optionnel"
  },
  {
    "Niveau": "🔴 AVANCÉ",
    "Domaine": "Visualisation SOC",
    "Outil": "SL Crimewall + Maltego avancé",
    "Priorité": "🔧 Optionnel"
  }
];
