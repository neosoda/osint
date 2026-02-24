// PHASE 0 — Mentalité, Éthique et Cadre Légal
export const phase0 = {
    id: "m0",
    title: "Phase 0 — Mentalité, Éthique & Cadre Légal",
    icon: "Gavel",
    lessons: [
        {
            id: "l0-1",
            title: "Ce qu'est réellement l'OSINT",
            content: `
<div class="alert-box alert-info mb-6"><div><h3 class="font-bold text-base mb-2">🎯 Objectif du chapitre</h3><p class="text-sm">Définir précisément ce qu'est l'OSINT, dissiper les mythes, et comprendre pourquoi c'est une discipline de renseignement à part entière — pas un hobby de curieux.</p></div></div>

<h2>Définition Opérationnelle</h2>
<p><strong>OSINT (Open-Source Intelligence)</strong> désigne le renseignement produit à partir de sources accessibles au public. Le mot clé n'est pas "ouvert" — c'est <strong>"intelligence"</strong>. L'OSINT n'est pas la collecte brute de données. C'est le <em>processus analytique</em> qui transforme une masse d'informations publiques en connaissance exploitable pour la prise de décision.</p>

<p>L'OTAN définit l'OSINT comme :</p>
<blockquote>"Le renseignement dérivé d'informations publiquement disponibles, collecté, exploité et diffusé en temps utile à un public approprié, dans le but de répondre à un besoin spécifique en renseignement."</blockquote>

<h3>Ce que l'OSINT est</h3>
<ul>
<li><strong>Une discipline du cycle du renseignement :</strong> Elle s'inscrit dans un processus structuré : planification → collecte → traitement → analyse → diffusion. Sans ce cycle, vous faites de la recherche, pas du renseignement.</li>
<li><strong>Un outil de réduction d'incertitude :</strong> L'objectif n'est jamais de tout savoir, mais de réduire suffisamment l'incertitude pour permettre une décision éclairée.</li>
<li><strong>Un processus reproductible :</strong> Toute conclusion doit pouvoir être vérifiée par un pair en suivant la même méthodologie, avec les mêmes sources.</li>
<li><strong>Un travail d'hypothèse et de falsification :</strong> On ne cherche pas à confirmer ce qu'on croit. On cherche à réfuter ce qu'on suppose.</li>
</ul>

<h3>Ce que l'OSINT n'est PAS</h3>
<ul>
<li><strong>Du stalking :</strong> Traquer une personne sans finalité légitime n'est pas de l'OSINT, c'est du harcèlement. L'intention et le cadre légal font toute la différence.</li>
<li><strong>Du hacking :</strong> L'OSINT ne franchit jamais la barrière de l'accès non autorisé. Si vous devez contourner une authentification, vous n'êtes plus dans l'OSINT.</li>
<li><strong>Une collection d'outils :</strong> Connaître 300 sites web ne fait pas de vous un analyste. Un expert avec un navigateur et un cerveau battra toujours un débutant avec 50 scripts automatisés.</li>
<li><strong>Du copier-coller de résultats :</strong> Restituer le dump d'un outil sans analyse critique produit du bruit, pas de l'intelligence.</li>
</ul>

<h3>Les 5 disciplines du renseignement en sources ouvertes</h3>
<p>L'OSINT se décline en plusieurs sous-disciplines selon le type de source :</p>
<table>
<thead><tr><th>Discipline</th><th>Source</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>OSINT classique</strong></td><td>Web, documents publics</td><td>Registre du commerce, WHOIS, brevets</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Réseaux sociaux</td><td>LinkedIn, X/Twitter, Telegram</td></tr>
<tr><td><strong>GEOINT</strong></td><td>Imagerie géospatiale</td><td>Google Earth, Sentinel Hub, photos géolocalisées</td></tr>
<tr><td><strong>SIGINT-adjacent</strong></td><td>Signaux radio/Wi-Fi publics</td><td>Wigle.net, ADS-B (FlightRadar24)</td></tr>
<tr><td><strong>FININT</strong></td><td>Données financières</td><td>SEC filings, blockchain explorers, Panama Papers</td></tr>
</tbody>
</table>

<h3>L'état d'esprit de l'analyste OSINT</h3>
<p>Un bon analyste cultive trois qualités fondamentales :</p>
<ol>
<li><strong>La curiosité structurée :</strong> Être curieux de tout, mais savoir quand arrêter de creuser un fil qui ne mène nulle part. Chaque minute passée sur une piste stérile est une minute volée à l'investigation réelle.</li>
<li><strong>L'humilité intellectuelle :</strong> Accepter qu'on puisse se tromper. Le biais de confirmation est l'ennemi numéro un de l'analyste. Si toutes vos découvertes confirment votre hypothèse initiale, c'est probablement que vous cherchez mal.</li>
<li><strong>La rigueur documentaire :</strong> Tout ce qui n'est pas documenté n'existe pas. Un résultat sans source, sans timestamp, sans contexte, est inutilisable dans un rapport professionnel.</li>
</ol>

<div class="alert-box alert-error mt-6"><div><h3 class="font-bold text-sm mb-1">💡 Pensée clé</h3><p class="text-sm">"La plupart des gens veulent des outils. Les experts veulent une méthode. Un bon OSINT n'est pas celui qui connaît 200 sites — c'est celui qui sait poser la bonne hypothèse et éliminer 90% du bruit."</p></div></div>
      `,
            quiz: [
                { id: "q0-1-1", question: "Quelle est la meilleure définition de l'OSINT ?", options: ["Un ensemble d'outils de recherche en ligne", "Le renseignement produit à partir de sources publiques via un processus analytique structuré", "Une technique de hacking éthique basée sur les moteurs de recherche", "La collecte massive de données personnelles sur Internet"], correct: 1, explanation: "L'OSINT est défini par son processus analytique (cycle du renseignement), pas par les outils utilisés. C'est la transformation d'information publique en intelligence exploitable." },
                { id: "q0-1-2", question: "Parmi ces actions, laquelle ne relève PAS de l'OSINT ?", options: ["Consulter le registre du commerce pour identifier les dirigeants d'une entreprise", "Analyser les métadonnées EXIF d'une photo publiée sur un réseau social", "Se connecter à un compte email en utilisant un mot de passe trouvé dans une fuite de données", "Utiliser les Google Dorks pour trouver des documents indexés par erreur"], correct: 2, explanation: "Se connecter à un compte tiers constitue un accès non autorisé, ce qui sort du périmètre OSINT (sources ouvertes uniquement) et constitue une infraction pénale." },
                { id: "q0-1-3", question: "Que signifie l'acronyme SOCMINT ?", options: ["Social Computing Intelligence", "Social Media Intelligence", "Society Monitoring Intelligence", "Source of Community Information Technology"], correct: 1, explanation: "SOCMINT (Social Media Intelligence) est la discipline OSINT spécialisée dans l'analyse des réseaux sociaux comme source de renseignement." }
            ]
        },
        {
            id: "l0-2",
            title: "Intelligence vs Information",
            content: `
<h2>La différence qui sépare l'amateur de l'expert</h2>
<p>C'est ici que se joue 80% de la valeur ajoutée d'un analyste. La confusion entre <strong>information</strong> et <strong>intelligence</strong> est l'erreur la plus courante et la plus coûteuse dans le domaine du renseignement en sources ouvertes.</p>

<h3>Définitions opérationnelles</h3>
<table>
<thead><tr><th>Concept</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Donnée (Data)</strong></td><td>Un fait brut, sans contexte</td><td>L'adresse IP 185.199.108.153</td></tr>
<tr><td><strong>Information</strong></td><td>Une donnée mise en contexte</td><td>Cette IP appartient à GitHub Pages et héberge le site example.com</td></tr>
<tr><td><strong>Intelligence</strong></td><td>Une information analysée, en réponse à un besoin</td><td>L'entreprise cible utilise GitHub Pages, ce qui révèle un shadow IT non géré par la DSI — vecteur d'attaque potentiel pour du phishing via un sous-domaine similaire</td></tr>
</tbody>
</table>

<h3>La Pyramide DIKW</h3>
<p>Le modèle <strong>Data → Information → Knowledge → Wisdom</strong> (DIKW) illustre cette progression :</p>
<ul>
<li><strong>Data :</strong> "Jean Dupont, 42 ans, Paris"</li>
<li><strong>Information :</strong> "Jean Dupont est DSI de l'entreprise AcmeCorp depuis 2019 et publie activement sur LinkedIn"</li>
<li><strong>Knowledge :</strong> "Dupont dévoile régulièrement des détails sur l'infrastructure d'AcmeCorp dans ses posts LinkedIn, permettant d'identifier qu'ils utilisent Microsoft 365 E5 et un firewall Palo Alto PA-400"</li>
<li><strong>Wisdom :</strong> "Recommandation : AcmeCorp devrait mettre en place une politique de communication externe plus stricte. Le DSI constitue involontairement le maillon faible de leur OPSEC. Un attaquant pourrait utiliser ces informations pour construire un pretexting ciblé."</li>
</ul>

<h3>Le piège du "Data Dump"</h3>
<p>Le syndrome du data dump est la pathologie la plus fréquente chez les analystes débutants. Il consiste à livrer au commanditaire un rapport de 200 pages contenant tout ce qu'on a trouvé, sans hiérarchisation ni analyse.</p>
<p>Un rapport OSINT professionnel ne livre pas des données. Il répond à une question précise, formulée en amont : le <strong>PIR (Priority Intelligence Requirement)</strong>.</p>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">Exemple de PIR</h3><p class="text-sm"><strong>Mauvais PIR :</strong> "Trouvez tout ce que vous pouvez sur l'entreprise XYZ."<br/><strong>Bon PIR :</strong> "Identifiez les vecteurs d'exposition de l'entreprise XYZ qui pourraient être exploités lors d'une campagne de phishing ciblant le département financier."</p></div></div>

<h3>Les 4 critères de qualité de l'intelligence</h3>
<ol>
<li><strong>Pertinence :</strong> L'information répond-elle directement au PIR ? Si non, c'est du bruit.</li>
<li><strong>Fiabilité :</strong> La source est-elle crédible ? Vérifiable ? Peut-on croiser avec une source indépendante ?</li>
<li><strong>Temporalité :</strong> L'information est-elle encore valide ? Une adresse email de 2018 peut être obsolète.</li>
<li><strong>Actionnabilité :</strong> Le destinataire peut-il prendre une décision ou une action concrète grâce à cette information ?</li>
</ol>

<h3>Le système de notation Admiralty (NATO)</h3>
<p>Utilisé par les services de renseignement occidentaux, ce système évalue séparément la <strong>fiabilité de la source</strong> (A à F) et la <strong>crédibilité de l'information</strong> (1 à 6) :</p>
<table>
<thead><tr><th>Source (A-F)</th><th>Information (1-6)</th></tr></thead>
<tbody>
<tr><td>A — Totalement fiable</td><td>1 — Confirmée par d'autres sources</td></tr>
<tr><td>B — Habituellement fiable</td><td>2 — Probablement vraie</td></tr>
<tr><td>C — Assez fiable</td><td>3 — Possiblement vraie</td></tr>
<tr><td>D — Pas habituellement fiable</td><td>4 — Douteuse</td></tr>
<tr><td>E — Source non fiable</td><td>5 — Improbable</td></tr>
<tr><td>F — Fiabilité non évaluable</td><td>6 — Véracité non évaluable</td></tr>
</tbody>
</table>
<p>Exemple : Une information notée <strong>B2</strong> provient d'une source habituellement fiable et est probablement vraie. Une notation <strong>F6</strong> indique qu'on ne peut rien évaluer — c'est un signal à traiter avec la plus grande prudence.</p>
      `,
            quiz: [
                { id: "q0-2-1", question: "Quelle est la différence fondamentale entre 'information' et 'intelligence' ?", options: ["L'intelligence est plus récente que l'information", "L'intelligence est une information analysée en réponse à un besoin spécifique de décision", "L'intelligence utilise des outils automatisés, l'information est manuelle", "Il n'y a pas de différence, ce sont des synonymes"], correct: 1, explanation: "L'intelligence (renseignement) est le produit d'un processus analytique qui transforme l'information brute en connaissance exploitable répondant à un PIR (Priority Intelligence Requirement)." },
                { id: "q0-2-2", question: "Dans le système de notation Admiralty (OTAN), que signifie la notation 'B3' ?", options: ["Source non fiable, information confirmée", "Source habituellement fiable, information possiblement vraie", "Source totalement fiable, information douteuse", "Source assez fiable, information probablement vraie"], correct: 1, explanation: "B = Source habituellement fiable, 3 = Information possiblement vraie. Ce système permet d'évaluer séparément la crédibilité de la source et celle de l'information elle-même." }
            ]
        },
        {
            id: "l0-3",
            title: "Cadre Légal Complet",
            content: `
<div class="alert-box alert-error mb-6"><div><h3 class="font-bold text-base mb-2">⚖️ AVERTISSEMENT JURIDIQUE</h3><p class="text-sm">Ce chapitre présente le cadre légal à titre informatif et pédagogique dans un contexte de formation Red Team / Cyber-Défense. Il ne constitue pas un conseil juridique. Consultez toujours un avocat spécialisé avant toute opération sensible.</p></div></div>

<h2>Le Cadre Pénal Français</h2>
<p>La France possède l'un des arsenaux juridiques les plus stricts d'Europe en matière de cybercriminalité. L'OSINT opère dans une zone grise qu'il faut comprendre avec précision.</p>

<h3>Articles clés du Code Pénal</h3>

<h4>Articles 323-1 à 323-7 : Atteintes aux STAD</h4>
<ul>
<li><strong>Art. 323-1 :</strong> Accès ou maintien frauduleux dans un STAD — <strong>3 ans d'emprisonnement et 100 000 € d'amende</strong> (aggravé par la LOPMI 2023). Les peines sont portées à 5 ans et 150 000 € si l'accès entraîne une modification ou suppression de données.</li>
<li><strong>Art. 323-3 :</strong> Introduction frauduleuse de données, extraction, reproduction ou transmission — <strong>5 ans et 150 000 €</strong>.</li>
<li><strong>Art. 323-3-1 :</strong> Détention ou mise à disposition d'outils d'attaque informatique — <strong>5 ans et 150 000 €</strong>. Attention : cet article peut potentiellement s'appliquer à certains outils OSINT offensifs.</li>
</ul>

<h4>Usurpation d'identité (Art. 226-4-1)</h4>
<p>L'usurpation d'identité numérique est punie d'<strong>1 an d'emprisonnement et 15 000 € d'amende</strong>. Cela inclut la création de faux profils sociaux (sock puppets) à des fins malveillantes. <em>Dans un cadre de Red Team contractuel, la création de personas est encadrée par les RoE (Rules of Engagement).</em></p>

<h4>Atteintes à la vie privée (Art. 226-1 à 226-7)</h4>
<p>Capter, enregistrer ou transmettre des paroles ou images d'une personne sans son consentement : <strong>1 an et 45 000 €</strong>. La collecte systématique de données personnelles depuis des profils publics peut constituer une atteinte si elle est disproportionnée.</p>

<h3>Le RGPD (Règlement Général sur la Protection des Données)</h3>
<p>Le RGPD s'applique dès qu'on traite des données personnelles de résidents européens, même si ces données sont publiquement accessibles.</p>

<h4>Principes fondamentaux applicables à l'OSINT</h4>
<ul>
<li><strong>Licéité :</strong> Vous devez avoir une base légale pour traiter les données (intérêt légitime, consentement, obligation légale).</li>
<li><strong>Minimisation :</strong> Ne collecter que les données strictement nécessaires à l'objectif défini.</li>
<li><strong>Limitation de conservation :</strong> Les données ne doivent pas être conservées au-delà de la durée nécessaire.</li>
<li><strong>Transparence :</strong> En théorie, les personnes concernées doivent être informées du traitement.</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">📌 Exception pour la sécurité</h3><p class="text-sm">L'article 6(1)(f) du RGPD autorise le traitement basé sur l'<strong>intérêt légitime</strong>, ce qui peut couvrir les audits de sécurité contractualisés. Cependant, cet intérêt doit être documenté et proportionné dans un registre de traitements.</p></div></div>

<h3>Cadre contractuel obligatoire (Red Team)</h3>
<p>Avant toute opération impliquant de l'OSINT actif ou de l'ingénierie sociale :</p>
<ol>
<li><strong>Lettre de mission / Convention d'audit :</strong> Document signé par le donneur d'ordre définissant le périmètre exact (RoE).</li>
<li><strong>Scope technique :</strong> Liste blanche des domaines, IPs, et personnes pouvant être ciblées.</li>
<li><strong>Clause d'exonération :</strong> Protection juridique de l'auditeur dans le cadre de la mission.</li>
<li><strong>Point de contact d'urgence :</strong> Numéro direct d'un responsable habilité en cas de découverte critique.</li>
<li><strong>Clause de destruction :</strong> Engagement de destruction des données collectées après livraison du rapport.</li>
</ol>

<h3>Cas pratiques de jurisprudence</h3>
<ul>
<li><strong>Affaire Bluetouff (2015) :</strong> Condamné pour maintien frauduleux dans un STAD après avoir téléchargé des documents d'une agence publique accessibles sans mot de passe mais non destinés au public. <em>Leçon : "Accessible" ne signifie pas "autorisé".</em></li>
<li><strong>Scraping LinkedIn :</strong> Bien que le scraping de données publiques ait été jugé légal aux USA (hiQ Labs v. LinkedIn), la situation reste plus restrictive en Europe sous le prisme du RGPD.</li>
</ul>
      `,
            quiz: [
                { id: "q0-3-1", question: "Selon la LOPMI (2023), quelle est la peine maximale pour un accès frauduleux simple à un STAD ?", options: ["1 an et 15 000 €", "2 ans et 60 000 €", "3 ans et 100 000 €", "5 ans et 150 000 €"], correct: 2, explanation: "La LOPMI a durci les peines : l'article 323-1 prévoit désormais 3 ans d'emprisonnement et 100 000 € d'amende pour l'accès ou le maintien frauduleux dans un STAD." },
                { id: "q0-3-2", question: "Dans le cadre du RGPD, les données personnelles publiquement accessibles sur un réseau social :", options: ["Peuvent être collectées librement car elles sont publiques", "Restent protégées par le RGPD et nécessitent une base légale de traitement", "Sont exclues du champ d'application du RGPD", "Ne peuvent être collectées que par les forces de l'ordre"], correct: 1, explanation: "Le RGPD protège toutes les données personnelles des résidents européens, y compris celles publiées volontairement sur les réseaux sociaux. Une base légale (intérêt légitime, consentement, etc.) reste nécessaire." }
            ]
        },
        {
            id: "l0-4",
            title: "Éthique, Responsabilité & Biais Cognitifs",
            content: `
<h2>L'Éthique comme compétence opérationnelle</h2>
<p>L'éthique en OSINT n'est pas un supplément d'âme — c'est une <strong>compétence opérationnelle</strong>. Un analyste sans éthique produit du renseignement biaisé, illégal ou dangereux. Un analyste éthique produit du renseignement fiable, défendable et actionnable.</p>

<h3>Les 10 Principes de l'Analyste Responsable</h3>
<ol>
<li><strong>Nécessité :</strong> Ne collecter que ce qui est strictement nécessaire au PIR.</li>
<li><strong>Proportionnalité :</strong> Les moyens employés doivent être proportionnels à l'objectif.</li>
<li><strong>Légalité :</strong> Chaque action doit être conforme au cadre juridique applicable.</li>
<li><strong>Traçabilité :</strong> Chaque recherche doit être documentable et reproductible.</li>
<li><strong>Minimisation :</strong> Réduire au minimum la collecte de données collatérales.</li>
<li><strong>Confidentialité :</strong> Les résultats ne sont partagés qu'avec les personnes habilitées.</li>
<li><strong>Intégrité :</strong> Ne jamais altérer, fabriquer ou omettre intentionnellement des données.</li>
<li><strong>Réversibilité :</strong> Pouvoir annuler ou détruire les données collectées.</li>
<li><strong>Transparence :</strong> Être clair sur les limites de ses conclusions.</li>
<li><strong>Responsabilité :</strong> Assumer les conséquences de ses découvertes et de leur diffusion.</li>
</ol>

<h3>Les Biais Cognitifs : l'ennemi intérieur</h3>
<p>Le plus grand obstacle à un renseignement de qualité n'est pas technique — il est <strong>psychologique</strong>. Les biais cognitifs sont des raccourcis mentaux qui déforment notre jugement. En OSINT, ils peuvent transformer une analyse rigoureuse en château de cartes.</p>

<h4>Les 8 biais les plus dangereux pour l'analyste</h4>
<table>
<thead><tr><th>Biais</th><th>Description</th><th>Piège OSINT</th></tr></thead>
<tbody>
<tr><td><strong>Confirmation</strong></td><td>Chercher uniquement les informations qui confirment notre hypothèse</td><td>Ignorer un résultat Sherlock négatif parce qu'on "sait" que le pseudo existe</td></tr>
<tr><td><strong>Ancrage</strong></td><td>S'accrocher à la première information trouvée</td><td>Baser toute l'enquête sur un profil LinkedIn qui pourrait être faux</td></tr>
<tr><td><strong>Disponibilité</strong></td><td>Surévaluer l'importance des infos facilement accessibles</td><td>Ne vérifier que les réseaux sociaux grand public en ignorant les forums spécialisés</td></tr>
<tr><td><strong>Dunning-Kruger</strong></td><td>Surestimer ses compétences quand on est débutant</td><td>Rédiger des conclusions fermes sans vérification croisée</td></tr>
<tr><td><strong>Miroir</strong></td><td>Projeter ses propres valeurs/comportements sur la cible</td><td>Supposer que la cible utilise les mêmes réseaux que soi</td></tr>
<tr><td><strong>Narratif</strong></td><td>Construire une histoire cohérente à partir de données fragmentaires</td><td>Relier des comptes qui appartiennent en réalité à des homonymes</td></tr>
<tr><td><strong>Survivant</strong></td><td>Se concentrer sur les succès en oubliant les échecs</td><td>Ne rapporter que les corrélations réussies dans le rapport</td></tr>
<tr><td><strong>Cadrage</strong></td><td>Juger selon la façon dont l'info est présentée</td><td>Interpréter différemment une même donnée selon la source (site pro vs forum)</td></tr>
</tbody>
</table>

<h3>Techniques de débiaisage</h3>
<ul>
<li><strong>Analysis of Competing Hypotheses (ACH) :</strong> Formuler délibérément des hypothèses alternatives et tester chacune contre les preuves disponibles.</li>
<li><strong>Red Team / Devil's Advocate :</strong> Demander à un collègue de chercher activement à réfuter vos conclusions.</li>
<li><strong>Structured Analytic Techniques (SATs) :</strong> Utiliser des matrices formelles (comme la matrice ACH) pour objectiver l'évaluation.</li>
<li><strong>Pre-Mortem :</strong> Avant de livrer vos conclusions, imaginez qu'elles sont fausses. Comment auraient-elles pu l'être ? Quelles preuves avez-vous peut-être ignorées ?</li>
</ul>
      `,
            quiz: [
                { id: "q0-4-1", question: "Quel biais cognitif pousse un analyste à ne chercher que les informations qui confirment son hypothèse initiale ?", options: ["Biais d'ancrage", "Biais de confirmation", "Biais de disponibilité", "Biais du narratif"], correct: 1, explanation: "Le biais de confirmation est le plus dangereux en OSINT : il pousse à sélectionner inconsciemment les données qui confirment ce qu'on croit déjà, en ignorant les preuves contraires." },
                { id: "q0-4-2", question: "Qu'est-ce que la méthode ACH (Analysis of Competing Hypotheses) ?", options: ["Une technique de hacking avancé", "Un outil de scan réseau automatisé", "Une méthode structurée qui teste plusieurs hypothèses rivales contre les preuves disponibles", "Un algorithme de clustering de données OSINT"], correct: 2, explanation: "L'ACH est une technique analytique structurée qui consiste à formuler plusieurs hypothèses concurrentes et à évaluer systématiquement chacune contre les preuves collectées, réduisant ainsi l'impact des biais cognitifs." }
            ]
        },
        {
            id: "l0-5",
            title: "OPSEC Personnelle",
            content: `
<div class="alert-box alert-error mb-6"><div><h3 class="font-bold text-base mb-2">🛡️ Règle d'Or OPSEC</h3><p class="text-sm">Ne jamais devenir sa propre cible. Si vous pouvez retrouver quelqu'un en 30 minutes, quelqu'un peut vous retrouver en 30 minutes. L'OPSEC n'est pas une option — c'est un prérequis.</p></div></div>

<h2>Pourquoi l'OPSEC est vitale</h2>
<p><strong>OPSEC (Operations Security)</strong> est le processus de protection de vos propres informations sensibles pendant une investigation. C'est l'art de ne laisser aucune trace qui pourrait relier votre activité de recherche à votre identité réelle.</p>

<h3>Les 5 couches de l'OPSEC de l'analyste</h3>

<h4>Couche 1 : Séparation des identités</h4>
<ul>
<li>Ne <strong>jamais</strong> utiliser vos comptes personnels pour une investigation.</li>
<li>Créer des <strong>sock puppets</strong> (identités fictives) dédiés avec des historiques crédibles.</li>
<li>Utiliser des emails jetables (ProtonMail, Tutanota) pour chaque persona.</li>
<li>Chaque persona a son propre navigateur, ses propres cookies, son propre fingerprint.</li>
</ul>

<h4>Couche 2 : Isolation technique</h4>
<ul>
<li><strong>VM dédiée :</strong> Toute investigation se fait dans une VM snapshottée et jetable.</li>
<li><strong>VPN :</strong> Mullvad ou ProtonVPN (paiement anonyme, politique no-log auditée).</li>
<li><strong>Tor :</strong> Pour les recherches à haut risque, combiner VPN + Tor (VPN → Tor, pas l'inverse).</li>
<li><strong>Navigateur durci :</strong> Firefox avec uBlock Origin, NoScript, et Multi-Account Containers.</li>
</ul>

<h4>Couche 3 : Hygiène de navigation</h4>
<ul>
<li>Désactiver JavaScript par défaut (NoScript).</li>
<li>Purger cookies, cache et historique après chaque session.</li>
<li>Utiliser un profil navigateur dédié par investigation.</li>
<li>Vérifier régulièrement votre empreinte via <code>amiunique.org</code> et <code>browserleaks.com</code>.</li>
</ul>

<h4>Couche 4 : Discipline comportementale</h4>
<ul>
<li>Ne jamais cliquer sur un lien suspect directement — utiliser <strong>SquareX</strong> (RBI) ou <code>urlscan.io</code>.</li>
<li>Ne jamais télécharger un fichier suspect sur votre machine hôte.</li>
<li>Ne pas consulter vos emails/réseaux personnels pendant une investigation.</li>
<li>Stopper immédiatement si vous sentez que vous avez été détecté (IP flaggée, CAPTCHA récurrents).</li>
</ul>

<h4>Couche 5 : Chiffrement et stockage</h4>
<ul>
<li>Stocker les résultats d'investigation dans un volume <strong>VeraCrypt</strong> chiffré.</li>
<li>Sauvegardes chiffrées sur support externe déconnecté.</li>
<li>Ne <strong>jamais</strong> synchroniser des données d'enquête sur un cloud (iCloud, Google Drive, OneDrive).</li>
<li>Utiliser <strong>Hunchly</strong> pour l'archivage horodaté et prouvable de chaque page visitée.</li>
</ul>

<h3>Checklist OPSEC avant investigation</h3>
<pre><code class="language-text">□ VM dédiée démarrée (snapshot propre)
□ VPN activé et vérifié (vérifier IP via whatismyipaddress.com)
□ Navigateur durci configuré (uBlock + NoScript)
□ Aucun compte personnel connecté (Gmail, LinkedIn, etc.)
□ Sock puppet identité prête (email, nom, photo AI)
□ Outil de capture d'écran/archivage prêt (Hunchly ou Flameshot)
□ Volume chiffré monté pour le stockage des résultats
□ Timer de session activé (limiter les sessions longues)
□ Buddy system : un collègue sait que vous êtes en investigation</code></pre>

<div class="alert-box alert-info mt-6"><div><h3 class="font-bold text-sm mb-1">🎭 Création d'un Sock Puppet crédible</h3><p class="text-sm">Un bon sock puppet n'est pas un profil vide créé la veille. Il doit avoir 3 à 6 mois d'historique, des interactions régulières avec du contenu neutre, une photo générée par IA (thispersondoesnotexist.com), et un comportement de navigation cohérent avec la couverture choisie.</p></div></div>
      `,
            quiz: [
                { id: "q0-5-1", question: "Quel est l'ordre correct pour combiner VPN et Tor dans une investigation à haut risque ?", options: ["Tor → VPN (se connecter à Tor puis activer le VPN)", "VPN → Tor (activer le VPN puis se connecter à Tor)", "Les deux se valent, l'ordre n'importe pas", "Il ne faut jamais combiner VPN et Tor"], correct: 1, explanation: "L'ordre VPN → Tor signifie que votre FAI voit uniquement la connexion VPN (pas Tor), et le noeud d'entrée Tor voit l'IP du VPN (pas la vôtre). C'est la configuration la plus protectrice pour la plupart des scénarios." },
                { id: "q0-5-2", question: "Pourquoi ne faut-il JAMAIS synchroniser les données d'une investigation sur un cloud ?", options: ["Les services cloud sont trop lents pour les fichiers volumineux", "Les fournisseurs cloud peuvent accéder aux données, les transmettre aux autorités, ou subir une fuite", "Les fichiers sont automatiquement compressés et perdent en qualité", "Le cloud ne supporte pas les fichiers chiffrés"], correct: 1, explanation: "Les fournisseurs cloud (Google, Apple, Microsoft) peuvent accéder à vos données, répondre à des réquisitions judiciaires, ou être la cible de fuites. Les données d'investigation doivent rester sur des supports chiffrés contrôlés localement." }
            ]
        }
    ]
};
