// PHASE 1 — Les Fondamentaux de la Recherche
export const phase1 = {
    id: "m1",
    title: "Phase 1 — Fondamentaux de la Recherche",
    icon: "Search",
    lessons: [
        {
            id: "l1-1",
            title: "Anatomie d'Internet",
            content: `
<h2>Les trois couches d'Internet</h2>
<p>Internet n'est pas un monolithe. C'est un empilement de couches, chacune avec ses règles d'accès, ses risques, et ses trésors informationnels pour l'analyste OSINT.</p>

<h3>Surface Web (Web de surface)</h3>
<p>C'est l'Internet que vous utilisez quotidiennement. Les pages indexées par Google, Bing, Yandex. Environ <strong>5 à 10%</strong> du contenu total d'Internet.</p>
<ul>
<li>Pages web publiques, articles de presse, réseaux sociaux ouverts</li>
<li>Registres publics (societe.com, Infogreffe, SEC EDGAR)</li>
<li>Moteurs de recherche spécialisés (Google Scholar, Shodan, Censys)</li>
</ul>

<h3>Deep Web (Web profond)</h3>
<p>Tout ce qui n'est <strong>pas indexé</strong> par les moteurs de recherche mais reste légalement accessible. Représente <strong>~90%</strong> du contenu.</p>
<ul>
<li>Bases de données académiques derrière un formulaire de recherche</li>
<li>Intranets d'entreprises, webmail, portails bancaires</li>
<li>Contenu dynamique généré à la demande (résultats de recherche)</li>
<li>Pages protégées par robots.txt (N.B. : robots.txt est une suggestion, pas une barrière technique — mais le respecter est une question d'éthique et parfois de légalité)</li>
</ul>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">⚡ Astuce OSINT</h3><p class="text-sm">Le fichier <code>robots.txt</code> d'un site est en lui-même une source OSINT précieuse. Il révèle souvent des répertoires que l'administrateur souhaite cacher : <code>/admin/</code>, <code>/backup/</code>, <code>/staging/</code>. Consultez <code>site.com/robots.txt</code> systématiquement.</p></div></div>

<h3>Dark Web (Web sombre)</h3>
<p>Réseau superposé nécessitant un logiciel spécifique (navigateur Tor pour les sites <code>.onion</code>, ou I2P pour les <code>.i2p</code>). Ce n'est <strong>pas</strong> intrinsèquement criminel.</p>
<ul>
<li><strong>Usages légitimes :</strong> Communication pour journalistes (SecureDrop), dissidents politiques, protection de la vie privée</li>
<li><strong>Usages criminels :</strong> Marketplaces (drogues, armes), forums de cybercriminalité, vente de données volées</li>
<li><strong>Intérêt OSINT :</strong> Fuites de données, forums de hackers (pour du CTI — Cyber Threat Intelligence), communications de groupes APT</li>
</ul>

<h3>L'architecture technique en bref</h3>
<pre><code class="language-text">┌──────────────────────────────────────┐
│         SURFACE WEB (~5-10%)         │
│  Google-indexé, publiquement visible │
├──────────────────────────────────────┤
│          DEEP WEB (~90%)             │
│  Non-indexé mais légalement          │
│  accessible (BDD, intranets, etc.)   │
├──────────────────────────────────────┤
│          DARK WEB (<1%)              │
│  Réseaux overlay (.onion, .i2p)      │
│  Nécessite logiciel spécifique       │
└──────────────────────────────────────┘</code></pre>

<h3>Protocoles fondamentaux à comprendre</h3>
<table>
<thead><tr><th>Protocole</th><th>Rôle</th><th>Intérêt OSINT</th></tr></thead>
<tbody>
<tr><td><strong>DNS</strong></td><td>Traduit les noms de domaine en IP</td><td>Cartographie d'infrastructure, historique DNS</td></tr>
<tr><td><strong>HTTP/HTTPS</strong></td><td>Transfert de pages web</td><td>Headers HTTP révèlent le serveur, le framework</td></tr>
<tr><td><strong>SMTP</strong></td><td>Envoi d'emails</td><td>Enregistrements MX, SPF, DKIM, DMARC</td></tr>
<tr><td><strong>BGP</strong></td><td>Routage inter-AS (opérateurs)</td><td>Attribution d'IP, ASN, localisation infra</td></tr>
<tr><td><strong>TLS/SSL</strong></td><td>Chiffrement des connexions</td><td>Certificate Transparency logs (crt.sh)</td></tr>
</tbody>
</table>
      `,
            quiz: [
                { id: "q1-1-1", question: "Quelle proportion approximative d'Internet représente le 'Surface Web' indexé par les moteurs de recherche ?", options: ["~50%", "~30%", "~5-10%", "~80%"], correct: 2, explanation: "Le Surface Web ne représente qu'environ 5 à 10% du contenu total d'Internet. La majorité est du Deep Web (contenu non indexé mais accessible)." },
                { id: "q1-1-2", question: "Pourquoi le fichier robots.txt est-il une source OSINT précieuse ?", options: ["Il contient les mots de passe administrateur", "Il révèle les répertoires que l'admin souhaite cacher de l'indexation", "Il liste tous les utilisateurs du site", "Il permet d'accéder au Dark Web"], correct: 1, explanation: "Le robots.txt est une suggestion aux crawlers de ne pas indexer certains répertoires. Ces répertoires (/admin/, /backup/, /staging/) révèlent souvent la structure interne du site." }
            ]
        },
        {
            id: "l1-2",
            title: "Moteurs de Recherche & Indexation",
            content: `
<h2>Comment fonctionne un moteur de recherche</h2>
<p>Pour maîtriser les Google Dorks et la recherche avancée, il faut d'abord comprendre <strong>comment</strong> Google trouve et classe l'information. Sans cette compréhension, on utilise les outils en aveugle.</p>

<h3>Les trois piliers d'un moteur de recherche</h3>

<h4>1. Le Crawling (Exploration)</h4>
<p>Des robots (Googlebot, Bingbot) parcourent le web en suivant les liens hypertextes de page en page. Ils respectent (généralement) les directives de <code>robots.txt</code> et les balises <code>meta robots</code>.</p>

<h4>2. L'Indexation</h4>
<p>Les pages crawlées sont analysées, leur contenu est extrait, et elles sont stockées dans un index géant. C'est cet index que vous interrogez quand vous faites une recherche. Une page non indexée est invisible pour le moteur.</p>

<h4>3. Le Ranking (Classement)</h4>
<p>Quand vous lancez une requête, le moteur classe les résultats par pertinence selon des centaines de signaux (mots-clés, autorité du domaine, fraîcheur, liens entrants, etc.).</p>

<h3>Moteurs alternatifs pour l'OSINT</h3>
<table>
<thead><tr><th>Moteur</th><th>Spécialité</th><th>Intérêt</th></tr></thead>
<tbody>
<tr><td><strong>Google</strong></td><td>Index le plus large</td><td>Dorks avancés, cache, opérateurs booléens</td></tr>
<tr><td><strong>Bing</strong></td><td>Bon sur les IPs et domaines</td><td>Opérateur <code>ip:</code> pour trouver tous les sites sur une IP</td></tr>
<tr><td><strong>Yandex</strong></td><td>Meilleur pour l'espace russophone</td><td>Reverse image search supérieur à Google Images</td></tr>
<tr><td><strong>DuckDuckGo</strong></td><td>Agrégateur sans tracking</td><td>Bangs (!g, !s) pour pivoter entre moteurs</td></tr>
<tr><td><strong>Shodan</strong></td><td>Moteur IoT / services exposés</td><td>Bannières de services, webcams, SCADA</td></tr>
<tr><td><strong>Censys</strong></td><td>Certificats TLS et services</td><td>Pivots IP↔certificat↔domaine</td></tr>
<tr><td><strong>Wigle.net</strong></td><td>Points d'accès Wi-Fi géolocalisés</td><td>Corrélation adresse physique / réseau</td></tr>
</tbody>
</table>

<h3>Les opérateurs de recherche essentiels</h3>
<pre><code class="language-text">Opérateur          Fonction                          Exemple
─────────────────────────────────────────────────────────────────
"mot exact"        Recherche exacte                  "John Smith" LinkedIn
site:              Limiter à un domaine              site:linkedin.com CFO
filetype:          Chercher un type de fichier       filetype:pdf confidentiel
intitle:           Mot dans le titre                 intitle:"index of" backup
inurl:             Mot dans l'URL                    inurl:admin login
intext:            Mot dans le corps de page         intext:"mot de passe"
cache:             Version en cache Google           cache:example.com
-                  Exclure un terme                  jaguar -voiture
*                  Wildcard (joker)                  "directeur * de AcmeCorp"
OR (|)             Opérateur OU                      CEO OR PDG site:linkedin.com
AROUND(X)          Proximité de X mots               OSINT AROUND(3) formation
before: / after:   Filtrer par date                  site:pastebin.com after:2024-01-01</code></pre>
      `,
            quiz: [
                { id: "q1-2-1", question: "Quel moteur de recherche est considéré comme supérieur à Google pour la recherche d'images inversée ?", options: ["Bing", "DuckDuckGo", "Yandex", "Shodan"], correct: 2, explanation: "Yandex dispose d'un algorithme de recherche d'images inversée particulièrement puissant, souvent capable de trouver des résultats que Google Images manque, surtout dans l'espace européen et russophone." },
                { id: "q1-2-2", question: "Que fait l'opérateur Google AROUND(X) ?", options: ["Recherche les sites autour d'une position GPS", "Trouve les pages contenant deux termes séparés par X mots maximum", "Limite les résultats aux X premiers", "Cherche dans un rayon de X km"], correct: 1, explanation: "AROUND(X) est un opérateur de proximité : il retourne les pages où deux termes apparaissent à maximum X mots l'un de l'autre, ce qui est très utile pour affiner les résultats." }
            ]
        },
        {
            id: "l1-3",
            title: "Google Dorks Avancés",
            content: `
<h2>L'art du Google Dorking</h2>
<p>Les Google Dorks sont des requêtes de recherche avancées qui exploitent les opérateurs de Google pour découvrir des informations que les administrateurs n'avaient pas l'intention de rendre publiques. C'est l'une des techniques OSINT les plus puissantes et les plus sous-estimées.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚠️ Cadre légal</h3><p class="text-sm">Les Google Dorks exploitent uniquement des données <em>indexées publiquement</em>. Cependant, accéder à un fichier sensible trouvé via un Dork peut constituer un "maintien frauduleux" si le contenu n'était clairement pas destiné au public (cf. Affaire Bluetouff). Restez dans le cadre contractuel.</p></div></div>

<h3>Dorks de reconnaissance d'infrastructure</h3>
<pre><code class="language-text"># Trouver les sous-domaines indexés d'une cible
site:*.example.com -www

# Pages d'administration exposées
site:example.com inurl:admin OR inurl:login OR inurl:dashboard

# Répertoires ouverts (directory listing)
intitle:"index of" site:example.com

# Fichiers de configuration exposés
site:example.com filetype:env OR filetype:ini OR filetype:conf

# Fichiers de backup
site:example.com filetype:bak OR filetype:old OR filetype:sql</code></pre>

<h3>Dorks de fuite d'informations</h3>
<pre><code class="language-text"># Documents internes indexés par erreur
site:example.com filetype:pdf "confidentiel" OR "internal" OR "ne pas diffuser"

# Feuilles de calcul avec des données sensibles
site:example.com filetype:xlsx OR filetype:csv "password" OR "mot de passe"

# Clés API et tokens exposés dans du code
site:github.com "example.com" "API_KEY" OR "SECRET" OR "token"

# Documents Google Docs/Sheets partagés publiquement
site:docs.google.com "example.com"

# Fichiers robots.txt révélateurs
site:example.com filetype:txt "disallow" "admin"</code></pre>

<h3>Dorks SOCMINT (Réseaux sociaux)</h3>
<pre><code class="language-text"># Profils LinkedIn d'une entreprise cible
site:linkedin.com/in "example company" "directeur" OR "CEO" OR "DSI"

# Posts Twitter/X mentionnant une infrastructure
site:twitter.com "example.com" "serveur" OR "panne" OR "maintenance"

# Présentations partagées publiquement
site:slideshare.net OR site:speakerdeck.com "example company"

# Offres d'emploi révélant la stack technique
site:indeed.fr OR site:welcometothejungle.com "example company" "kubernetes" OR "AWS"</code></pre>

<h3>GHDB — Google Hacking Database</h3>
<p>La <strong>Google Hacking Database</strong> (exploit-db.com/google-hacking-database) est un référentiel communautaire de milliers de Dorks classés par catégorie. C'est votre bibliothèque de référence.</p>

<h3>Méthodologie : le Dorking systématique</h3>
<ol>
<li><strong>Définir le périmètre :</strong> Quels domaines, quelles filiales, quels mots-clés métier ?</li>
<li><strong>Commencer large :</strong> <code>site:example.com</code> pour évaluer l'empreinte indexée.</li>
<li><strong>Affiner par type :</strong> Documents (<code>filetype:</code>), pages admin (<code>inurl:</code>), contenu sensible (<code>intext:</code>).</li>
<li><strong>Pivoter vers les satellites :</strong> GitHub, Pastebin, Google Docs, SlideShare.</li>
<li><strong>Documenter chaque trouvaille :</strong> URL, timestamp, capture d'écran, notation Admiralty.</li>
</ol>
      `,
            quiz: [
                { id: "q1-3-1", question: "Quel Google Dork permet de trouver des répertoires de fichiers ouverts (directory listing) sur un domaine ?", options: ["site:example.com filetype:dir", "intitle:\"index of\" site:example.com", "inurl:directory site:example.com", "site:example.com type:folder"], correct: 1, explanation: "Le Dork intitle:\"index of\" cible les pages dont le titre contient 'index of', ce qui est la signature typique d'un serveur web avec le directory listing activé." },
                { id: "q1-3-2", question: "Pourquoi est-il pertinent de chercher les offres d'emploi d'une entreprise cible via Dorks ?", options: ["Pour postuler et infiltrer l'entreprise", "Car les offres révèlent souvent la stack technique utilisée (technologies, outils, infrastructure)", "Pour savoir si l'entreprise recrute des analystes OSINT", "Les offres d'emploi contiennent les mots de passe des systèmes internes"], correct: 1, explanation: "Les offres d'emploi techniques sont une mine d'or OSINT : elles révèlent les technologies utilisées (AWS, Kubernetes, Palo Alto), les outils internes, et parfois même la structure organisationnelle de la DSI." }
            ],
            lab: `
<h3>🔬 Lab : Dorking d'un domaine fictif</h3>
<p>Dans ce lab, vous allez pratiquer le Google Dorking de manière systématique sur un périmètre autorisé.</p>

<p><strong>Cible :</strong> Utilisez le domaine <code>example.com</code> (domaine réservé par l'IANA pour les tests) ou un domaine que vous possédez.</p>

<p>1. Évaluez l'empreinte indexée :</p>
<pre><code class="language-text">site:example.com</code></pre>

<p>2. Cherchez des fichiers sensibles :</p>
<pre><code class="language-text">site:example.com filetype:pdf OR filetype:xlsx OR filetype:docx</code></pre>

<p>3. Identifiez les pages d'administration :</p>
<pre><code class="language-text">site:example.com inurl:admin OR inurl:login OR inurl:cpanel</code></pre>

<p>4. Cherchez des fuites dans les satellites :</p>
<pre><code class="language-text">site:github.com "example.com"
site:pastebin.com "example.com"</code></pre>

<p>5. Documentez vos trouvailles dans un tableau (URL, type, gravité, timestamp).</p>
      `
        },
        {
            id: "l1-4",
            title: "Métadonnées : ce que les fichiers révèlent",
            content: `
<h2>Les métadonnées : l'invisible qui parle</h2>
<p>Chaque fichier numérique transporte des métadonnées — des informations <em>sur</em> l'information. Un document PDF innocent peut révéler le nom de son auteur, le logiciel utilisé, la date de création, et parfois même le chemin complet du fichier sur le disque dur du créateur.</p>

<h3>Types de métadonnées par format</h3>

<h4>Images (EXIF)</h4>
<p>Le format EXIF (Exchangeable Image File Format) embarque dans chaque photo :</p>
<ul>
<li><strong>Coordonnées GPS</strong> (latitude, longitude, altitude) — si la géolocalisation n'a pas été désactivée</li>
<li><strong>Date et heure</strong> de la prise de vue (avec fuseau horaire)</li>
<li><strong>Modèle de l'appareil</strong> (marque, modèle, numéro de série parfois)</li>
<li><strong>Paramètres de prise de vue</strong> (focale, ouverture, ISO, flash)</li>
<li><strong>Logiciel de retouche</strong> utilisé (Photoshop, Lightroom, GIMP)</li>
<li><strong>Thumbnail embarquée</strong> (parfois la version originale non recadrée !)</li>
</ul>

<h4>Documents Office / PDF</h4>
<ul>
<li><strong>Auteur :</strong> Nom complet de l'utilisateur (souvent prénom.nom de la session Windows)</li>
<li><strong>Organisation :</strong> Nom de l'entreprise enregistré dans la licence Office</li>
<li><strong>Chemin du fichier :</strong> <code>C:\\Users\\jdupont\\Desktop\\Projet_Confidentiel\\rapport_final.docx</code></li>
<li><strong>Historique des révisions :</strong> Noms des contributeurs successifs</li>
<li><strong>Commentaires et annotations</strong> oubliés dans le document</li>
<li><strong>Imprimante :</strong> Nom de l'imprimante réseau utilisée</li>
</ul>

<h3>Outils d'extraction de métadonnées</h3>

<h4>ExifTool (CLI — outil de référence)</h4>
<pre><code class="language-bash"># Extraire toutes les métadonnées d'un fichier
exiftool document.pdf

# Extraire les coordonnées GPS d'une photo
exiftool -GPSLatitude -GPSLongitude photo.jpg

# Extraction récursive sur un dossier entier
exiftool -r -csv -ext pdf -ext docx ./documents/ > metadata.csv

# Supprimer toutes les métadonnées (sanitisation)
exiftool -all= document.pdf</code></pre>

<h4>FOCA (Framework for Organization Content Aggregation)</h4>
<p>FOCA automatise le téléchargement et l'analyse de tous les documents publics d'un domaine :</p>
<ol>
<li>Crawle le domaine cible et identifie tous les documents indexés</li>
<li>Télécharge et extrait les métadonnées de chaque fichier</li>
<li>Cartographie les noms d'utilisateurs, logiciels, serveurs, imprimantes</li>
<li>Produit un rapport d'exposition organisationnelle</li>
</ol>

<h3>Scénario d'investigation réel</h3>
<p>Un rapport PDF anodin publié sur le site d'une entreprise peut révéler :</p>
<pre><code class="language-text">Auteur    : jean.dupont
Créateur  : Microsoft Word 2019
Société   : AcmeCorp SARL
Chemin    : \\\\serveur-fichiers\\DRH\\Recrutement\\2024\\rapport_audit.pdf
Imprimante: HP LaserJet MFP M227 (192.168.1.45)
Créé le   : 2024-03-15 14:32:07+01:00
Modifié   : 2024-03-18 09:15:22+01:00</code></pre>
<p>En 5 secondes, un analyste sait : le nom d'un employé, la structure réseau interne (serveur de fichiers nommé, IP d'imprimante), le département d'où provient le document, et les horaires de travail.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🛡️ Recommandation défensive</h3><p class="text-sm">Avant toute publication en ligne, passez systématiquement vos documents dans un outil de nettoyage de métadonnées. <code>exiftool -all= fichier.pdf</code> est votre meilleur ami. Les entreprises devraient intégrer cette étape dans leur workflow de publication.</p></div></div>
      `,
            quiz: [
                { id: "q1-4-1", question: "Quelle commande ExifTool permet d'extraire les coordonnées GPS d'une photo ?", options: ["exiftool -gps photo.jpg", "exiftool -GPSLatitude -GPSLongitude photo.jpg", "exiftool --extract-location photo.jpg", "exiftool -all photo.jpg"], correct: 1, explanation: "Les tags EXIF pour la géolocalisation sont GPSLatitude et GPSLongitude. La commande exiftool -GPSLatitude -GPSLongitude retourne spécifiquement ces champs." },
                { id: "q1-4-2", question: "Pourquoi le champ 'Auteur' d'un document PDF est-il important en OSINT ?", options: ["Il contient toujours un mot de passe", "Il révèle souvent le nom réel de l'employé qui a créé le document, parfois son login réseau", "Il indique si le document est classifié", "Il n'a aucune utilité en OSINT"], correct: 1, explanation: "Le champ Auteur d'un document Office/PDF est souvent rempli automatiquement avec le nom d'utilisateur de la session Windows (ex: jean.dupont), révélant une identité et potentiellement un format de login à l'entreprise." }
            ]
        },
        {
            id: "l1-5",
            title: "Archives Web & Récupération d'Historique",
            content: `
<h2>Le Web n'oublie jamais (si on sait où chercher)</h2>
<p>L'un des principes les plus puissants de l'OSINT : <strong>même supprimé, un contenu a probablement été capturé quelque part</strong>. Les services d'archivage et de cache sont les "mémoires" d'Internet.</p>

<h3>Wayback Machine (web.archive.org)</h3>
<p>Le plus grand service d'archivage au monde. Depuis 1996, l'Internet Archive capture régulièrement des snapshots de millions de sites web.</p>
<ul>
<li><strong>Recherche directe :</strong> <code>web.archive.org/web/*/example.com</code></li>
<li><strong>Version spécifique :</strong> <code>web.archive.org/web/20230615/example.com</code></li>
<li><strong>Recherche de pages supprimées :</strong> Comparer les snapshots avant/après une suppression</li>
<li><strong>100% passif :</strong> Aucune interaction avec le site cible actuel</li>
</ul>

<h4>Cas d'usage concrets</h4>
<ul>
<li>Récupérer une page "À propos" supprimée révélant l'ancienne équipe dirigeante</li>
<li>Retrouver un article de blog compromettant effacé</li>
<li>Identifier les évolutions d'un site (technologies utilisées, contenus supprimés)</li>
<li>Vérifier les claims d'une personne ("J'ai toujours été dans ce secteur")</li>
</ul>

<h3>Google Cache</h3>
<pre><code class="language-text"># Voir la version en cache d'une page
cache:example.com/page-supprimée

# Via URL directe
webcache.googleusercontent.com/search?q=cache:example.com</code></pre>
<p>Le cache Google est souvent plus récent que la Wayback Machine mais ne conserve qu'un seul snapshot à la fois (le plus récent crawl). Si Google n'a pas re-crawlé la page depuis sa suppression, le cache contient encore l'ancienne version.</p>

<h3>Autres sources d'archivage</h3>
<table>
<thead><tr><th>Service</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>archive.today</strong></td><td>Archivage à la demande — vous pouvez soumettre une URL et obtenir un snapshot permanent</td></tr>
<tr><td><strong>CachedView</strong></td><td>Agrégateur de caches (Google, Bing, Wayback)</td></tr>
<tr><td><strong>CommonCrawl</strong></td><td>Dataset ouvert de crawls web mensuels (pétaoctets de données brutes)</td></tr>
<tr><td><strong>Bing Cache</strong></td><td>Similaire au cache Google, accessible via Bing</td></tr>
</tbody>
</table>

<h3>Technique avancée : reconstruction de site supprimé</h3>
<p>En combinant Wayback Machine + Google Cache + archive.today, il est souvent possible de reconstruire une version quasi-complète d'un site entièrement supprimé :</p>
<ol>
<li>Identifier toutes les URLs archivées via <code>web.archive.org/cdx/search/cdx?url=example.com/*&output=text</code></li>
<li>Pour chaque URL, récupérer le snapshot le plus récent</li>
<li>Reconstituer l'arborescence et les liens internes</li>
<li>Extraire les métadonnées des documents archivés</li>
</ol>
      `,
            quiz: [
                { id: "q1-5-1", question: "Quel service d'archivage web stocke des snapshots depuis 1996 et est 100% passif (aucune interaction avec la cible) ?", options: ["Google Cache", "archive.today", "Wayback Machine", "CommonCrawl"], correct: 2, explanation: "La Wayback Machine (web.archive.org) de l'Internet Archive capture des snapshots du web depuis 1996. Consulter ses archives est totalement passif — aucune requête n'atteint le site cible actuel." }
            ]
        },
        {
            id: "l1-6",
            title: "Formats de données critiques : WHOIS, DNS, ASN, SSL",
            content: `
<h2>Les fondations techniques d'Internet</h2>
<p>Avant de cartographier une infrastructure, il faut comprendre les briques élémentaires qui la composent. Ces formats de données sont le pain quotidien de l'analyste OSINT.</p>

<h3>WHOIS — L'annuaire des domaines</h3>
<p>WHOIS est un protocole qui permet d'interroger la base d'enregistrement d'un domaine. Il révèle (quand non masqué par un service de protection de la vie privée) :</p>
<ul>
<li>Le nom du registrant (propriétaire)</li>
<li>L'adresse email et postale de contact</li>
<li>Les dates de création, mise à jour et expiration du domaine</li>
<li>Les serveurs de noms (nameservers) — révèlent l'hébergeur DNS</li>
<li>Le registrar (bureau d'enregistrement)</li>
</ul>
<pre><code class="language-bash"># Requête WHOIS en ligne de commande
whois example.com

# Alternatives web : whois.domaintools.com, who.is
</code></pre>

<h3>DNS — Le système nerveux d'Internet</h3>
<p>Le DNS (Domain Name System) traduit les noms de domaine en adresses IP. Les enregistrements DNS sont une mine d'or pour la cartographie d'infrastructure :</p>
<table>
<thead><tr><th>Type</th><th>Rôle</th><th>Intérêt OSINT</th></tr></thead>
<tbody>
<tr><td><strong>A / AAAA</strong></td><td>Associe domaine → IP (v4/v6)</td><td>Identifier le serveur d'hébergement</td></tr>
<tr><td><strong>MX</strong></td><td>Serveurs de messagerie</td><td>Identifier le provider email (Google Workspace, Exchange)</td></tr>
<tr><td><strong>NS</strong></td><td>Serveurs de noms</td><td>Identifier l'hébergeur DNS</td></tr>
<tr><td><strong>TXT</strong></td><td>Texte libre (SPF, DKIM, vérifications)</td><td>Révèle les services tiers (Google, Salesforce, etc.)</td></tr>
<tr><td><strong>CNAME</strong></td><td>Alias vers un autre domaine</td><td>Identifier les sous-domaines et les services</td></tr>
<tr><td><strong>SOA</strong></td><td>Autorité de la zone</td><td>Email de l'admin, serial pour détecter les changements</td></tr>
</tbody>
</table>
<pre><code class="language-bash"># Interroger les enregistrements DNS
dig example.com ANY
nslookup -type=any example.com

# Enregistrements MX (serveurs mail)
dig example.com MX

# Enregistrements TXT (SPF, DKIM, etc.)
dig example.com TXT</code></pre>

<h3>ASN — Autonomous System Number</h3>
<p>Chaque réseau d'opérateur ou d'entreprise connecté à Internet possède un numéro d'AS (ASN). Identifier l'ASN d'une cible permet de cartographier l'ensemble de ses plages IP.</p>
<pre><code class="language-bash"># Trouver l'ASN d'une IP
whois -h whois.radb.net -- '-i origin 185.199.108.153'

# Explorer un ASN complet
# bgp.he.net — Interface web de Hurricane Electric</code></pre>

<h3>SSL/TLS & Certificate Transparency</h3>
<p>Depuis 2018, tous les certificats SSL/TLS émis doivent être enregistrés dans des logs publics de transparence (Certificate Transparency). Ces logs sont une source OSINT formidable :</p>
<ul>
<li><strong>crt.sh :</strong> Moteur de recherche dans les CT logs. Permet de découvrir TOUS les sous-domaines pour lesquels un certificat a été émis.</li>
<li><strong>Pivots possibles :</strong> Organisation dans le certificat, email de contact, dates d'émission</li>
</ul>
<pre><code class="language-bash"># Rechercher les certificats d'un domaine
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq '.[].name_value' | sort -u

# Résultat typique : liste de sous-domaines
# mail.example.com
# vpn.example.com 
# staging.example.com  ← intéressant !
# jenkins.example.com  ← très intéressant !</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Technique de pivot</h3><p class="text-sm">Les sous-domaines découverts via crt.sh révèlent souvent des services non documentés : <code>staging</code>, <code>dev</code>, <code>jenkins</code>, <code>gitlab</code>, <code>vpn</code>. Ce sont les premières cibles d'un audit de surface d'attaque.</p></div></div>
      `,
            quiz: [
                { id: "q1-6-1", question: "Quel enregistrement DNS révèle le fournisseur de messagerie d'une organisation ?", options: ["A", "CNAME", "MX", "NS"], correct: 2, explanation: "Les enregistrements MX (Mail eXchange) pointent vers les serveurs de messagerie du domaine, révélant si l'organisation utilise Google Workspace, Microsoft 365, un serveur mail interne, etc." },
                { id: "q1-6-2", question: "Pourquoi les logs Certificate Transparency (CT) sont-ils précieux en OSINT ?", options: ["Ils contiennent les clés privées des certificats", "Ils révèlent tous les sous-domaines pour lesquels un certificat a été émis", "Ils permettent de déchiffrer le trafic HTTPS", "Ils listent les vulnérabilités des serveurs"], correct: 1, explanation: "Les CT logs publics enregistrent chaque certificat SSL émis. En cherchant sur crt.sh, on peut découvrir tous les sous-domaines d'une organisation, y compris ceux non destinés à être publics (staging, dev, vpn, jenkins...)." }
            ]
        }
    ]
};
