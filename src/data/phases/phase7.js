// PHASE 7 — OSINT Avancé
export const phase7 = {
    id: "m7",
    title: "Phase 7 — OSINT Avancé",
    icon: "Telescope",
    lessons: [
        {
            id: "l7-1",
            title: "GEOINT avancé",
            content: `
<h2>Géolocalisation de précision</h2>
<p>Le GEOINT avancé va au-delà de la lecture de panneaux. Il utilise les ombres, la météo, l'astronomie et l'imagerie satellite pour localiser et dater une image ou vidéo avec une précision chirurgicale.</p>

<h3>Analyse des ombres</h3>
<ul>
<li><strong>Longueur :</strong> L'angle du soleil détermine la longueur des ombres → latitude + saison</li>
<li><strong>Direction :</strong> Le soleil se déplace d'Est en Ouest → l'ombre indique l'heure</li>
<li><strong>SunCalc.org :</strong> Simulateur de position solaire pour vérifier la cohérence date/heure/lieu</li>
</ul>
<pre><code class="language-text">Workflow de datation par ombre :
1. Mesurer l'angle de l'ombre (rapport taille objet / longueur ombre)
2. Estimer la direction de l'ombre par rapport au Nord
3. Sur SunCalc : tester différentes dates/heures pour un lieu candidat
4. La combinaison qui correspond = date/heure probable</code></pre>

<h3>Analyse météorologique rétroactive</h3>
<p>Les conditions météo visibles dans une image (ciel couvert, neige, feuillage) peuvent être croisées avec les données historiques :</p>
<ul>
<li><strong>Weather Underground :</strong> Historique météo mondial par jour et par ville</li>
<li><strong>Sentinel Hub :</strong> Imagerie satellite Copernicus (couverture nuageuse, végétation)</li>
<li>Si une photo montre de la neige → vérifier les dates de neige dans le lieu candidat</li>
</ul>

<h3>Imagerie satellite avancée</h3>
<table>
<thead><tr><th>Source</th><th>Résolution</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><strong>Google Earth Pro</strong></td><td>15-30cm</td><td>Imagerie historique, timeline, mesures</td></tr>
<tr><td><strong>Sentinel Hub</strong></td><td>10m (optique)</td><td>Changements de végétation, construction, inondations</td></tr>
<tr><td><strong>Planet</strong></td><td>3m quotidien</td><td>Monitoring haute fréquence (commercial)</td></tr>
<tr><td><strong>Maxar</strong></td><td>30cm</td><td>Détails très fins (commercial)</td></tr>
</tbody>
</table>

<h3>Exercice de chronolocation</h3>
<p>La <strong>chronolocation</strong> consiste à déterminer quand une photo a été prise, même sans métadonnées. Indices exploitables : ombres, saison (végétation, neige), événements visibles (affiche, chantier), vêtements des personnes, luminosité.</p>
      `,
            quiz: [
                { id: "q7-1-1", question: "Quel outil gratuit permet de simuler la position du soleil à une date, heure et lieu donnés ?", options: ["Google Maps", "SunCalc.org", "Stellarium", "Weather Underground"], correct: 1, explanation: "SunCalc.org affiche la position exacte du soleil (azimut, élévation) pour n'importe quelle date, heure et coordonnées GPS. Il permet de vérifier si les ombres d'une photo sont cohérentes avec un lieu et une date revendiqués." }
            ]
        },
        {
            id: "l7-2",
            title: "Analyse de photos & vidéos (deepfakes)",
            content: `
<h2>L'ère des médias synthétiques</h2>
<p>Les deepfakes et manipulations visuelles sont une menace croissante pour l'OSINT. Un analyste doit savoir détecter les altérations et évaluer l'authenticité d'un média.</p>

<h3>Types de manipulation</h3>
<table>
<thead><tr><th>Type</th><th>Description</th><th>Difficulté de détection</th></tr></thead>
<tbody>
<tr><td><strong>Recadrage</strong></td><td>Découper l'image pour changer le contexte</td><td>Facile (reverse image search)</td></tr>
<tr><td><strong>Clonage</strong></td><td>Dupliquer des éléments pour cacher ou ajouter</td><td>Moyen (ELA, détection de patterns)</td></tr>
<tr><td><strong>Face swap</strong></td><td>Remplacer un visage par un autre</td><td>Moyen (artefacts, cohérence de lumière)</td></tr>
<tr><td><strong>Deepfake vidéo</strong></td><td>Synthèse complète d'une vidéo avec IA</td><td>Difficile (en constante amélioration)</td></tr>
<tr><td><strong>Audio deepfake</strong></td><td>Synthèse vocale imitant une personne</td><td>Très difficile</td></tr>
<tr><td><strong>GANs (images)</strong></td><td>Photos de personnes inexistantes</td><td>Moyen (yeux, oreilles, arrière-plan)</td></tr>
</tbody>
</table>

<h3>Outils de détection</h3>
<ul>
<li><strong>FotoForensics :</strong> Error Level Analysis (ELA) — les zones modifiées ont un taux de compression différent</li>
<li><strong>InVID/WeVerify :</strong> Plugin navigateur pour décomposer les vidéos en keyframes et vérifier chacune</li>
<li><strong>This Person Does Not Exist (TPDNE) :</strong> Pour comprendre les artefacts des GANs (oreilles asymétriques, arrière-plan incohérent, reflets aberrants dans les yeux)</li>
<li><strong>Deepware Scanner :</strong> Détection automatisée de deepfake vidéo</li>
</ul>

<h3>Indices de deepfake vidéo</h3>
<ul>
<li>Clignement des yeux anormal (trop ou pas assez)</li>
<li>Contour du visage flou ou instable</li>
<li>Incohérence d'éclairage entre le visage et le fond</li>
<li>Artefacts aux transitions (lorsque la tête bouge vite)</li>
<li>Texture de peau trop lisse ou trop uniforme</li>
<li>Bijoux/lunettes qui scintillent de manière non naturelle</li>
</ul>
      `,
            quiz: [
                { id: "q7-2-1", question: "Qu'est-ce que l'Error Level Analysis (ELA) permet de détecter ?", options: ["Les virus dans les fichiers image", "Les zones modifiées d'une image qui ont un taux de compression différent du reste", "La résolution originale d'une photo", "Le modèle d'appareil photo utilisé"], correct: 1, explanation: "L'ELA (Error Level Analysis) compare les niveaux de compression JPEG à travers l'image. Les zones modifiées (ajoutées, clonées, effacées) ont souvent un taux de compression différent du reste de l'image, ce qui les rend détectables." }
            ]
        },
        {
            id: "l7-3",
            title: "Analyse financière & flux économiques",
            content: `
<h2>Suivre l'argent</h2>
<p>"Follow the money" est un adage du renseignement financier (FININT). Les flux financiers laissent des traces même quand on essaie de les cacher — et ces traces sont souvent publiques.</p>

<h3>Sources de données financières ouvertes</h3>
<table>
<thead><tr><th>Source</th><th>Données</th><th>Usage OSINT</th></tr></thead>
<tbody>
<tr><td><strong>Infogreffe / Pappers</strong></td><td>Bilans, comptes de résultat (FR)</td><td>Santé financière, taille réelle, dettes</td></tr>
<tr><td><strong>SEC EDGAR</strong></td><td>10-K, 10-Q, proxy statements (US)</td><td>Rémunération dirigeants, risques, litiges</td></tr>
<tr><td><strong>OpenCorporates</strong></td><td>Registre mondial d'entreprises</td><td>Liens capitalistiques, filiales offshore</td></tr>
<tr><td><strong>ICIJ Offshore Leaks</strong></td><td>Panama Papers, Paradise Papers</td><td>Sociétés écrans, bénéficiaires effectifs</td></tr>
<tr><td><strong>Blockchain explorers</strong></td><td>Transactions Bitcoin, Ethereum</td><td>Traçage de flux crypto</td></tr>
</tbody>
</table>

<h3>Analyse blockchain</h3>
<p>Contrairement à la croyance populaire, les blockchains publiques (Bitcoin, Ethereum) ne sont PAS anonymes — elles sont <strong>pseudonymes</strong>. Chaque transaction est enregistrée publiquement et définitivement.</p>
<pre><code class="language-text"># Outils de traçage blockchain
- blockchain.com/explorer : Explorateur Bitcoin simple
- etherscan.io : Explorateur Ethereum
- Chainalysis : Traçage professionnel (forensics)
- OXT.me : Visualisation graphique des flux Bitcoin</code></pre>

<h3>Schémas de blanchiment à détecter</h3>
<ul>
<li><strong>Layering :</strong> Multiplication de transactions pour obscurcir l'origine</li>
<li><strong>Mixing/Tumbling :</strong> Services qui mélangent les crypto de multiples utilisateurs</li>
<li><strong>Chain-hopping :</strong> Conversion entre différentes cryptomonnaies</li>
<li><strong>Sociétés écrans :</strong> Entités juridiques sans activité réelle dans des juridictions opaques</li>
</ul>
      `,
            quiz: [
                { id: "q7-3-1", question: "Les transactions Bitcoin sont-elles réellement anonymes ?", options: ["Oui, totalement anonymes et intraçables", "Non, elles sont pseudonymes — chaque transaction est publiquement enregistrée sur la blockchain", "Oui, si on utilise un VPN", "Seulement quand on utilise des mixers"], correct: 1, explanation: "Les transactions Bitcoin sont pseudonymes, pas anonymes. Elles sont toutes enregistrées publiquement et définitivement sur la blockchain. Des outils de traçage comme Chainalysis peuvent relier des adresses Bitcoin à des identités réelles via des échanges KYC." }
            ]
        },
        {
            id: "l7-4",
            title: "Recherche sur le Dark Web",
            content: `
<h2>Naviguer dans les profondeurs</h2>
<p>Le dark web est un espace essentiel pour le Cyber Threat Intelligence (CTI). Les groupes APT, les marchands de données volées, et les forums de cybercriminalité s'y retrouvent.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚠️ OPSEC maximale requise</h3><p class="text-sm">Toute navigation sur le dark web doit se faire avec une OPSEC renforcée : VM dédiée (Whonix ou Tails), VPN → Tor, aucune donnée personnelle accessible, aucun téléchargement de fichier suspect. Le risque de compromission est réel.</p></div></div>

<h3>Accès et navigation</h3>
<ul>
<li><strong>Tor Browser :</strong> Navigateur dédié pour les sites .onion</li>
<li><strong>Tails OS :</strong> Système live amnésique routant tout le trafic via Tor</li>
<li><strong>Whonix :</strong> VM Gateway + Workstation pour isolation complète</li>
<li><strong>Ne JAMAIS :</strong> Se connecter à un compte personnel, activer JavaScript, télécharger des fichiers</li>
</ul>

<h3>Sources utiles pour la CTI</h3>
<ul>
<li><strong>Forums de hackers :</strong> Discussions sur des vulnérabilités, PoC, outils d'attaque</li>
<li><strong>Paste sites (.onion) :</strong> Fuites de données publiées par les attaquants</li>
<li><strong>Marketplaces :</strong> Vente de credentials volés, accès VPN compromis, bases de données</li>
<li><strong>Canaux de communication APT :</strong> Revendications d'attaques, négociations de rançon</li>
</ul>

<h3>Moteurs de recherche dark web</h3>
<table>
<thead><tr><th>Moteur</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Ahmia</strong></td><td>Moteur de recherche pour les services .onion (filtre le contenu illégal évident)</td></tr>
<tr><td><strong>Torch</strong></td><td>Un des plus anciens moteurs de recherche Tor</td></tr>
<tr><td><strong>DarkSearch</strong></td><td>Moteur avec API pour l'automatisation CTI</td></tr>
<tr><td><strong>Intelligence X</strong></td><td>Recherche dans le dark web et les fuites de données (surface + dark)</td></tr>
</tbody>
</table>

<h3>Ce qu'il faut chercher (et ne PAS chercher)</h3>
<ul>
<li>✅ Mentions de votre organisation dans des forums de vente de données</li>
<li>✅ Accès VPN ou RDP de votre entreprise en vente</li>
<li>✅ Discussions sur des vulnérabilités affectant votre stack technique</li>
<li>✅ Revendications d'attaques par des groupes APT dans votre secteur</li>
<li>❌ Contenu illégal (CSAM, armes) — crime de consultation dans de nombreuses juridictions</li>
</ul>
      `,
            quiz: [
                { id: "q7-4-1", question: "Quel système d'exploitation est recommandé pour une navigation sécurisée sur le dark web ?", options: ["Windows 11 avec antivirus", "macOS avec Safari", "Tails OS (système live amnésique)", "Ubuntu standard"], correct: 2, explanation: "Tails OS est un système d'exploitation live qui route tout le trafic via Tor et ne laisse aucune trace sur la machine hôte. Il est conçu spécifiquement pour l'anonymat et s'efface complètement de la RAM à l'extinction." }
            ]
        },
        {
            id: "l7-5",
            title: "Automatisation OSINT",
            content: `
<h2>De l'artisan à l'industriel</h2>
<p>L'automatisation est ce qui permet de passer de l'investigation ponctuelle à la veille continue et au traitement de masse.</p>

<h3>Python pour l'OSINT — les fondamentaux</h3>
<pre><code class="language-python"># Script de base : résolution DNS d'une liste de domaines
import dns.resolver

domains = ["example.com", "test.com", "target.org"]

for domain in domains:
    try:
        answers = dns.resolver.resolve(domain, 'A')
        for rdata in answers:
            print(f"{domain} -> {rdata.address}")
    except Exception as e:
        print(f"{domain} -> ERREUR: {e}")</code></pre>

<h3>APIs OSINT essentielles</h3>
<pre><code class="language-python"># Shodan API — Scanner une cible
import shodan

api = shodan.Shodan('VOTRE_CLE_API')
results = api.host('185.199.108.153')
print(f"IP: {results['ip_str']}")
print(f"Org: {results.get('org', 'N/A')}")
for item in results['data']:
    print(f"Port {item['port']}: {item.get('product', 'unknown')}")</code></pre>

<pre><code class="language-python"># crt.sh — Énumération de sous-domaines
import requests

def get_subdomains(domain):
    url = f"https://crt.sh/?q=%25.{domain}&output=json"
    response = requests.get(url)
    if response.ok:
        data = response.json()
        subdomains = set()
        for cert in data:
            for name in cert['name_value'].split('\\n'):
                subdomains.add(name.strip())
        return sorted(subdomains)
    return []

for sub in get_subdomains("example.com"):
    print(sub)</code></pre>

<h3>Frameworks d'automatisation OSINT</h3>
<table>
<thead><tr><th>Outil</th><th>Spécialité</th></tr></thead>
<tbody>
<tr><td><strong>SpiderFoot</strong></td><td>Reconnaissance automatisée multi-sources (200+ modules)</td></tr>
<tr><td><strong>Recon-ng</strong></td><td>Framework modulaire inspiré de Metasploit, pour la reconnaissance</td></tr>
<tr><td><strong>theHarvester</strong></td><td>Collecte d'emails, sous-domaines, IPs, noms</td></tr>
<tr><td><strong>Photon</strong></td><td>Crawler intelligent de sites web</td></tr>
</tbody>
</table>

<h3>Bonnes pratiques d'automatisation</h3>
<ul>
<li>Toujours respecter les rate limits des APIs</li>
<li>Logger chaque requête (timestamp, source, résultat) pour la traçabilité</li>
<li>Stocker les résultats de manière structurée (JSON, SQLite)</li>
<li>Ne JAMAIS automatiser du scraping agressif sur des cibles sans autorisation</li>
<li>Utiliser des proxies et rotations pour les opérations longues</li>
</ul>
      `,
            quiz: [
                { id: "q7-5-1", question: "Quel framework d'automatisation OSINT possède plus de 200 modules de reconnaissance ?", options: ["Recon-ng", "SpiderFoot", "theHarvester", "Photon"], correct: 1, explanation: "SpiderFoot est un framework d'automatisation OSINT avec plus de 200 modules couvrant la reconnaissance de domaines, emails, IPs, réseaux sociaux, dark web, et plus encore." }
            ]
        },
        {
            id: "l7-6",
            title: "OSINT & Intelligence Artificielle",
            content: `
<h2>L'analyste augmenté</h2>
<p>L'IA transforme l'OSINT en permettant de traiter des volumes de données impossibles pour un humain seul. Mais elle ne remplace jamais le jugement analytique.</p>

<h3>Applications de l'IA en OSINT</h3>
<table>
<thead><tr><th>Domaine</th><th>Application IA</th><th>Outil</th></tr></thead>
<tbody>
<tr><td><strong>NLP</strong></td><td>Analyse de sentiment, extraction d'entités, résumé de textes</td><td>spaCy, GPT-4, BERT</td></tr>
<tr><td><strong>Vision</strong></td><td>Analyse d'image, OCR, détection d'objets</td><td>YOLO, Tesseract, Google Vision</td></tr>
<tr><td><strong>Clustering</strong></td><td>Regroupement de comptes similaires, détection de bots</td><td>scikit-learn, DBSCAN</td></tr>
<tr><td><strong>Graphes</strong></td><td>Détection de communautés, prédiction de liens</td><td>Neo4j, NetworkX, Gephi</td></tr>
<tr><td><strong>LLMs</strong></td><td>Synthèse de rapports, génération d'hypothèses, analyse de code</td><td>GPT-4, Claude, Mistral</td></tr>
</tbody>
</table>

<h3>LLMs comme assistants d'analyse</h3>
<p>Les grands modèles de langage (LLMs) excellent pour :</p>
<ul>
<li><strong>Résumer des volumes :</strong> Synthétiser 500 posts Reddit en 5 points clés</li>
<li><strong>Pivoter :</strong> "À partir de cet email, quelles hypothèses de recherche proposes-tu ?"</li>
<li><strong>Rédiger :</strong> Générer un premier draft de rapport structuré</li>
<li><strong>Analyser du code :</strong> Comprendre un script trouvé dans un repo GitHub</li>
</ul>

<h3>Limites critiques de l'IA en OSINT</h3>
<ul>
<li><strong>Hallucinations :</strong> Les LLMs inventent des faits. Tout OUTPUT doit être vérifié.</li>
<li><strong>Biais :</strong> Les modèles reproduisent les biais de leurs données d'entraînement</li>
<li><strong>OPSEC :</strong> Ne JAMAIS soumettre des données sensibles d'investigation à un LLM cloud</li>
<li><strong>Jugement :</strong> L'IA ne peut pas évaluer la crédibilité d'une source avec le contexte humain</li>
<li><strong>Éthique :</strong> L'automatisation amplifie les erreurs — une corrélation fausse propagée automatiquement peut ruiner une réputation</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🧠 L'IA est un outil, pas un analyste</h3><p class="text-sm">L'IA amplifie vos capacités mais ne remplace pas votre jugement. C'est un multiplicateur de force pour un bon analyste — et un multiplicateur d'erreurs pour un mauvais. La responsabilité de l'analyse reste <strong>toujours</strong> humaine.</p></div></div>
      `,
            quiz: [
                { id: "q7-6-1", question: "Pourquoi ne faut-il JAMAIS soumettre des données d'investigation sensibles à un LLM cloud (ChatGPT, Claude, etc.) ?", options: ["Les LLMs ne peuvent pas analyser des données structurées", "Les données soumises peuvent être stockées, utilisées pour l'entraînement, ou exposées à des tiers", "Les LLMs sont trop lents pour l'analyse OSINT", "Les LLMs ne comprennent pas le français"], correct: 1, explanation: "Les données soumises aux LLMs cloud peuvent être stockées par le fournisseur, utilisées pour l'entraînement futur, et potentiellement accessibles à des employés ou via des failles. Des données d'investigation sensibles (noms, IP, fuites) ne doivent jamais quitter un environnement contrôlé." }
            ]
        }
    ]
};
