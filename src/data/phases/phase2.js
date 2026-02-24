// PHASE 2 — OSINT Humain (Personnes physiques)
export const phase2 = {
    id: "m2",
    title: "Phase 2 — OSINT Humain",
    icon: "UserSearch",
    lessons: [
        {
            id: "l2-1",
            title: "Identité numérique : empreinte & persistance",
            content: `
<h2>L'empreinte numérique : vous êtes la somme de vos traces</h2>
<p>Chaque interaction avec le monde numérique laisse une trace — volontaire ou non. L'OSINT humain consiste à reconstituer un profil cohérent à partir de ces fragments dispersés.</p>

<h3>Empreinte active vs passive</h3>
<table>
<thead><tr><th>Type</th><th>Définition</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Active</strong></td><td>Données publiées volontairement</td><td>Posts LinkedIn, tweets, photos Instagram, commentaires, CV en ligne</td></tr>
<tr><td><strong>Passive</strong></td><td>Données générées automatiquement</td><td>Logs de connexion, métadonnées EXIF, cookies, empreinte navigateur</td></tr>
<tr><td><strong>Héritée</strong></td><td>Données publiées par des tiers</td><td>Mention dans un article, tag sur une photo, listing dans un annuaire</td></tr>
</tbody>
</table>

<h3>La persistance des données</h3>
<p>L'adage "Internet n'oublie jamais" n'est pas une métaphore — c'est une réalité technique :</p>
<ul>
<li><strong>Wayback Machine :</strong> Archive des snapshots depuis 1996</li>
<li><strong>Google Cache :</strong> Conserve la dernière version crawlée</li>
<li><strong>Fuites de données :</strong> Un mot de passe compromis en 2015 circule encore en 2026</li>
<li><strong>Réseaux sociaux :</strong> Même "supprimé", un post peut avoir été screenshoté, archivé, ou indexé</li>
<li><strong>Forums / Usenet :</strong> Des posts des années 2000 sont encore accessibles via Google Groups</li>
</ul>

<h3>Les pivots d'identification</h3>
<p>Un <strong>pivot</strong> est un point de données qui permet de passer d'un monde d'information à un autre :</p>
<pre><code class="language-text">Email → Pseudo (via Holehe, HIBP)
      → Nom réel (via LinkedIn, registres)
      → Autres comptes (via Sherlock, Maigret)
      → Localisation (via posts géolocalisés)
      → Employeur (via LinkedIn, societe.com)
      → Infrastructure (via WHOIS, DNS)

Pseudo → Email (via data breaches)
       → Autres plateformes (via Sherlock)
       → Comportement (via analyse de posts)
       → Horaires d'activité (via timestamps)
       → Cercle social (via interactions)</code></pre>

<h3>Graphe identitaire</h3>
<p>L'objectif final est de construire un <strong>graphe identitaire</strong> complet reliant toutes les traces à une entité unique. Maltego excelle dans cette visualisation. Chaque noeud (email, pseudo, IP, numéro de téléphone) connecté par des arêtes (utilise, possède, publie sur) forme un réseau exploitable.</p>
      `,
            quiz: [
                { id: "q2-1-1", question: "Qu'est-ce qu'un 'pivot' en OSINT ?", options: ["Un mouvement de rotation de la caméra de surveillance", "Un point de données permettant de passer d'un domaine d'information à un autre", "Un outil de hacking réseau", "La rotation des clés API"], correct: 1, explanation: "En OSINT, un pivot est un élément d'information (email, pseudo, IP) qui sert de pont pour découvrir de nouvelles informations dans un domaine différent." }
            ]
        },
        {
            id: "l2-2",
            title: "Recherche d'emails, pseudos & corrélations",
            content: `
<h2>La traque méthodique des identifiants</h2>
<p>L'email et le pseudo sont les deux identifiants les plus utilisés pour relier une personne à ses activités en ligne. La plupart des gens réutilisent les mêmes — c'est leur plus grande vulnérabilité.</p>

<h3>Outils de recherche d'email</h3>

<h4>Holehe — Vérification d'inscription email</h4>
<p>Holehe vérifie si une adresse email est enregistrée sur 120+ services en exploitant les flux "mot de passe oublié". Totalement passif, la cible ne reçoit aucune notification.</p>
<pre><code class="language-bash"># Installation
pip3 install holehe

# Recherche sur une adresse
holehe cible@example.com

# Résultat typique :
# [+] instagram.com : Email utilisé
# [+] spotify.com : Email utilisé
# [+] twitter.com : Email utilisé
# [-] facebook.com : Email non trouvé</code></pre>

<h4>Hunter.io — Structure email d'entreprise</h4>
<p>Hunter identifie le pattern email d'une organisation (prenom.nom@, p.nom@, etc.) et liste les emails indexés publiquement.</p>

<h4>Epieos — OSINT Google passif</h4>
<p>Epieos explore les services Google associés à un email : photo de profil, avis Google Maps, calendrier public. Zéro alerte côté cible.</p>

<h3>Recherche de pseudonymes</h3>

<h4>Sherlock</h4>
<pre><code class="language-bash"># Recherche sur 400+ plateformes
python3 sherlock user123 --print-all

# Avec proxy Tor
python3 sherlock user123 --tor</code></pre>

<h4>Maigret</h4>
<pre><code class="language-bash"># Rapport HTML détaillé
maigret user123 --html

# Avec Tor
maigret user123 --tor</code></pre>
<p>Maigret va plus loin que Sherlock : il tente d'extraire des informations de chaque profil trouvé et génère un rapport enrichi avec liens entre comptes.</p>

<h3>Technique de corrélation croisée</h3>
<p>La puissance de l'OSINT humain réside dans la <strong>triangulation</strong> :</p>
<ol>
<li><strong>Point de départ :</strong> Un email (jean.dupont@gmail.com)</li>
<li><strong>Holehe :</strong> Révèle que l'email est inscrit sur Twitter, Instagram, Spotify</li>
<li><strong>HIBP :</strong> L'email apparaît dans 3 fuites → on récupère un pseudo associé (jdupont42)</li>
<li><strong>Sherlock :</strong> Le pseudo jdupont42 existe sur GitHub, Reddit, Steam</li>
<li><strong>GitHub :</strong> Le profil contient un repo avec un fichier de config révélant une adresse IP perso</li>
<li><strong>Reddit :</strong> L'historique de posts révèle la ville de résidence et des centres d'intérêt</li>
</ol>
<p>En 6 étapes, à partir d'un seul email, on a reconstitué : identité, présence multi-plateforme, localisation approximative, centres d'intérêt, et potentiellement des données techniques.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚠️ Faux positifs</h3><p class="text-sm">Attention aux homonymes. Le pseudo "jdupont42" peut appartenir à plusieurs personnes. Toute corrélation doit être <strong>vérifiée par au moins deux sources indépendantes</strong> avant d'être validée.</p></div></div>
      `,
            quiz: [
                { id: "q2-2-1", question: "Comment fonctionne l'outil Holehe pour vérifier les inscriptions d'un email ?", options: ["Il contacte directement les serveurs des plateformes avec des identifiants volés", "Il exploite les flux 'mot de passe oublié' des services pour vérifier si l'email est enregistré", "Il analyse les fuites de données pour trouver l'email", "Il envoie un email de test à l'adresse pour voir les réponses automatiques"], correct: 1, explanation: "Holehe utilise les formulaires de récupération de mot de passe des services web. Si le service répond 'Un email de réinitialisation a été envoyé', c'est que l'adresse est enregistrée." },
                { id: "q2-2-2", question: "Combien de sources indépendantes minimum faut-il pour valider une corrélation d'identité ?", options: ["1 suffit si elle est fiable", "2 sources indépendantes minimum", "5 sources minimum", "La corrélation est toujours fiable si l'outil est bon"], correct: 1, explanation: "La règle d'or en OSINT analytique : toute corrélation doit être confirmée par au moins 2 sources indépendantes pour éliminer les faux positifs (homonymes, usurpation...)." }
            ]
        },
        {
            id: "l2-3",
            title: "Fuites de données & Breach Analysis",
            content: `
<h2>L'océan des données compromises</h2>
<p>Les fuites de données (data breaches) sont l'une des sources les plus puissantes et les plus sensibles de l'OSINT. En 2025, plus de <strong>16 milliards d'identifiants</strong> ont été exposés. Ces bases circulent sur les forums spécialisés et constituent un risque majeur pour les organisations.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Cadre légal strict</h3><p class="text-sm">La consultation de bases de données volées est une zone grise juridique. Dans un cadre Red Team contractuel, l'accès aux données de breach est autorisé par les RoE. Hors cadre contractuel, la détention et l'exploitation de données volées peut constituer un recel (Art. 321-1 du Code Pénal).</p></div></div>

<h3>Sources légitimes de vérification</h3>

<h4>Have I Been Pwned (HIBP)</h4>
<p>Service de référence créé par Troy Hunt. Utilise la technique de <strong>k-anonymity</strong> pour vérifier si un email/mot de passe a été compromis sans révéler l'entrée complète.</p>
<pre><code class="language-bash"># Vérifier un email via l'API
curl "https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com" \\
  -H "hibp-api-key: VOTRE_CLE_API"

# Vérifier un password hash via k-anonymity (les 5 premiers chars du SHA-1)
# Exemple pour "password123" : SHA1 = CBFDAC6008F9CAB4083784CBD1874F76618D2A97
curl "https://api.pwnedpasswords.com/range/CBFDA"</code></pre>

<h4>DeHashed</h4>
<p>Moteur de recherche multi-champs sur données compromises (email, username, hash, IP, nom, téléphone). Utile pédagogiquement pour illustrer les requêtes ciblées. Accès commercial avec journaux d'audit.</p>

<h4>Intelligence X</h4>
<p>Recherche dans les archives, dark web (Tor, I2P) et sites désactivés. Inclut tokens OAuth et secrets CI/CD exposés dans les fuites récentes.</p>

<h3>Analyse d'une fuite de données : méthodologie</h3>
<ol>
<li><strong>Identification :</strong> Quelles données sont présentes ? (emails, mots de passe en clair/hashés, numéros de téléphone, adresses)</li>
<li><strong>Scope :</strong> La fuite concerne-t-elle notre périmètre d'audit ? Combien d'employés sont touchés ?</li>
<li><strong>Criticité :</strong> Les mots de passe sont-ils en clair ou hashés ? Quel algorithme ? (MD5 est trivial à casser, bcrypt résiste)</li>
<li><strong>Réutilisation :</strong> Les identifiants compromis sont-ils encore valides ? (credential stuffing)</li>
<li><strong>Corrélation :</strong> Les mêmes identifiants apparaissent-ils dans d'autres fuites ?</li>
</ol>

<h3>Password hash cracking (contexte défensif)</h3>
<p>Dans un audit, identifier les mots de passe faibles permet de recommander des politiques de sécurité :</p>
<pre><code class="language-bash"># Hashcat — GPU-accelerated password recovery
# Attaque par dictionnaire
hashcat -m 0 hashes.txt rockyou.txt

# Attaque par règles (mutation de mots de passe)
hashcat -m 0 hashes.txt rockyou.txt -r rules/best64.rule

# Types de hash courants :
# -m 0    : MD5
# -m 100  : SHA1
# -m 1000 : NTLM
# -m 3200 : bcrypt</code></pre>
      `,
            quiz: [
                { id: "q2-3-1", question: "Qu'est-ce que la technique de k-anonymity utilisée par Have I Been Pwned ?", options: ["Un chiffrement des résultats de recherche", "Une méthode qui permet de vérifier si un mot de passe a fuité sans envoyer le mot de passe complet au serveur", "Un proxy anonymisant les requêtes API", "Un algorithme de suppression des données personnelles"], correct: 1, explanation: "La k-anonymity de HIBP fonctionne ainsi : on envoie seulement les 5 premiers caractères du hash SHA-1 du mot de passe. Le serveur retourne tous les hashes correspondants, et la vérification se fait localement. Le mot de passe complet n'est jamais transmis." }
            ]
        },
        {
            id: "l2-4",
            title: "Corrélation multi-plateformes",
            content: `
<h2>L'art de relier les points</h2>
<p>La corrélation multi-plateformes est le coeur de l'OSINT humain. C'est la capacité à relier des fragments d'identité dispersés sur différents services pour construire un profil complet.</p>

<h3>Indicateurs de corrélation</h3>
<table>
<thead><tr><th>Indicateur</th><th>Force</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Même email</td><td>🟢 Fort</td><td>Même adresse Gmail sur LinkedIn et GitHub</td></tr>
<tr><td>Même pseudo</td><td>🟠 Moyen</td><td>Pseudo identique sur Twitter et Reddit (mais homonymes possibles)</td></tr>
<tr><td>Même photo</td><td>🟢 Fort</td><td>Même avatar sur Discord et Telegram (vérifiable par reverse image search)</td></tr>
<tr><td>Même style d'écriture</td><td>🟠 Moyen</td><td>Tics de langage, fautes récurrentes, expressions favorites</td></tr>
<tr><td>Mêmes horaires</td><td>🟡 Faible</td><td>Activité sur Reddit et Twitter aux mêmes heures</td></tr>
<tr><td>Mêmes centres d'intérêt</td><td>🟡 Faible</td><td>Subreddit + hashtags Twitter cohérents</td></tr>
<tr><td>Même IP (dans breach)</td><td>🟢 Fort</td><td>Même IP de connexion dans deux fuites différentes</td></tr>
</tbody>
</table>

<h3>Reverse Image Search — la photo qui trahit</h3>
<p>La recherche d'image inversée permet de retrouver toutes les occurrences d'une photo sur le web :</p>
<ul>
<li><strong>Google Images :</strong> Upload ou URL de la photo → résultats similaires</li>
<li><strong>Yandex Images :</strong> Souvent supérieur à Google pour les visages</li>
<li><strong>TinEye :</strong> Spécialisé dans le suivi de propagation d'images</li>
<li><strong>PimEyes :</strong> Reconnaissance faciale (usage très encadré légalement en UE)</li>
</ul>

<h3>Méthodologie de corrélation en 5 étapes</h3>
<ol>
<li><strong>Collecte :</strong> Rassembler tous les identifiants connus (emails, pseudos, numéros, photos)</li>
<li><strong>Expansion :</strong> Pour chaque identifiant, chercher les comptes associés (Holehe, Sherlock, Maigret)</li>
<li><strong>Croisement :</strong> Identifier les points de recoupement entre les comptes trouvés</li>
<li><strong>Validation :</strong> Confirmer chaque corrélation par au minimum 2 indicateurs indépendants</li>
<li><strong>Cartographie :</strong> Visualiser les liens dans un graphe (Maltego, Obsidian, ou simple tableau)</li>
</ol>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🧠 Pensée critique requise</h3><p class="text-sm">La corrélation n'est pas la causalité. Deux profils avec le même pseudo peuvent appartenir à deux personnes différentes. Documentez le <strong>niveau de confiance</strong> de chaque lien : confirmé, probable, possible, non vérifié.</p></div></div>
      `,
            quiz: [
                { id: "q2-4-1", question: "Quel indicateur de corrélation a la force probante la plus élevée ?", options: ["Mêmes horaires de connexion", "Mêmes centres d'intérêt", "Même adresse email utilisée sur deux plateformes", "Même pseudo"], correct: 2, explanation: "L'email est un identifiant quasi-unique. Si la même adresse email est utilisée sur LinkedIn et GitHub, c'est presque certainement la même personne (sauf si le compte a été compromis)." }
            ]
        },
        {
            id: "l2-5",
            title: "Analyse comportementale à partir de traces",
            content: `
<h2>Lire entre les lignes numériques</h2>
<p>Au-delà de l'identification, l'OSINT humain permet de comprendre le <strong>comportement</strong>, les <strong>habitudes</strong> et la <strong>psychologie</strong> d'une personne à travers ses traces numériques. C'est la dimension analytique qui transforme des données en intelligence.</p>

<h3>Analyse temporelle — les horaires qui parlent</h3>
<p>Les timestamps des publications révèlent :</p>
<ul>
<li><strong>Fuseau horaire :</strong> Si quelqu'un tweete régulièrement entre 9h et 18h UTC+1, il est probablement en Europe occidentale</li>
<li><strong>Routine :</strong> Publications le matin = routine professionnelle. Publications à 3h du matin = insomnie, quart de nuit, ou fuseau différent</li>
<li><strong>Période d'inactivité :</strong> Absence pendant les heures de bureau → emploi sans accès au téléphone. Absence le week-end → professionnel strict</li>
</ul>

<h3>Analyse linguistique</h3>
<ul>
<li><strong>Langue et dialecte :</strong> Expressions régionales, argot, anglicismes</li>
<li><strong>Niveau d'éducation :</strong> Vocabulaire, structure syntaxique, orthographe</li>
<li><strong>Domaine d'expertise :</strong> Jargon technique récurrent</li>
<li><strong>Émotions récurrentes :</strong> Tonalité des posts (colère, enthousiasme, cynisme)</li>
<li><strong>Tics d'écriture :</strong> Utilisation de "...", majuscules excessives, émojis récurrents</li>
</ul>

<h3>Analyse des interactions sociales</h3>
<ul>
<li><strong>Qui répond à qui ?</strong> Les interactions fréquentes révèlent le cercle proche</li>
<li><strong>Qui retweet/partage quoi ?</strong> Affinités idéologiques et politiques</li>
<li><strong>Groupes et communautés :</strong> Appartenance à des groupes Facebook, subreddits, serveurs Discord</li>
<li><strong>Ton des échanges :</strong> Formel (relations professionnelles) vs informel (amis, famille)</li>
</ul>

<h3>Construction du profil psychologique</h3>
<p>Le modèle OCEAN (Big Five) peut être approximé à partir des traces numériques :</p>
<table>
<thead><tr><th>Trait</th><th>Indicateurs numériques</th></tr></thead>
<tbody>
<tr><td><strong>Ouverture</strong></td><td>Variété des sujets abordés, curiosité intellectuelle visible dans les posts</td></tr>
<tr><td><strong>Conscienciosité</strong></td><td>Régularité des publications, soin dans la rédaction, profil complet vs bâclé</td></tr>
<tr><td><strong>Extraversion</strong></td><td>Volume d'interactions, nombre d'amis/followers, fréquence de publication</td></tr>
<tr><td><strong>Agréabilité</strong></td><td>Ton des commentaires, gestion des désaccords, empathie manifestée</td></tr>
<tr><td><strong>Neuroticisme</strong></td><td>Posts émotionnels, réactivité aux critiques, variations d'humeur dans le temps</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚠️ Limites de l'analyse</h3><p class="text-sm">Un profil en ligne est une <strong>performance sociale</strong>, pas un miroir fidèle de la personnalité. Les gens présentent une version curatée d'eux-mêmes. L'analyste doit toujours garder en tête que le persona numérique ≠ la personne réelle. Notez ces analyses comme <strong>"évaluation préliminaire"</strong>, jamais comme des certitudes.</p></div></div>
      `,
            quiz: [
                { id: "q2-5-1", question: "Pourquoi l'analyse temporelle des publications est-elle utile en OSINT ?", options: ["Pour savoir si la personne est en vacances", "Pour déterminer le fuseau horaire, la routine quotidienne et les habitudes professionnelles de la cible", "Pour calculer la vitesse de frappe de la personne", "Pour identifier les algorithmes de recommandation des réseaux sociaux"], correct: 1, explanation: "Les timestamps des publications sont un indicateur puissant : ils révèlent le fuseau horaire probable, les horaires de travail, les routines quotidiennes, et peuvent aider à localiser géographiquement la cible." }
            ]
        },
        {
            id: "l2-6",
            title: "Géolocalisation à partir d'images (GEOINT)",
            content: `
<h2>Chaque photo raconte un lieu</h2>
<p>La géolocalisation d'images (GEOINT basique) est l'une des capacités les plus impressionnantes de l'OSINT. À partir d'une simple photo, un analyste entraîné peut identifier le lieu exact avec une précision de quelques mètres.</p>

<h3>Étape 1 : Métadonnées EXIF</h3>
<p>Premier réflexe : vérifier si la photo contient des données GPS embarquées.</p>
<pre><code class="language-bash">exiftool -GPSLatitude -GPSLongitude photo.jpg

# Si les coordonnées sont présentes, les coller dans Google Maps
# pour identifier le lieu exact</code></pre>
<p><strong>Attention :</strong> La plupart des réseaux sociaux (Twitter, Facebook, Instagram) <em>suppriment</em> les données EXIF lors de l'upload. Mais les services de messagerie (WhatsApp, Telegram) ne le font pas toujours.</p>

<h3>Étape 2 : Analyse visuelle</h3>
<p>Si pas de métadonnées, on passe à l'analyse visuelle :</p>

<h4>Indices textuels</h4>
<ul>
<li>Panneaux de signalisation (langue, format, code couleur)</li>
<li>Enseignes commerciales (chaînes locales, noms propres)</li>
<li>Plaques d'immatriculation (format national)</li>
<li>Numéros de téléphone affichés (indicatif régional)</li>
</ul>

<h4>Indices architecturaux</h4>
<ul>
<li>Style architectural (colonial, haussmannien, soviétique)</li>
<li>Matériaux de construction (brique rouge = UK/Belgique, etc.)</li>
<li>Sens de circulation (droite vs gauche)</li>
<li>Lignes électriques (aériennes vs souterraines)</li>
</ul>

<h4>Indices naturels</h4>
<ul>
<li>Végétation (tropicale, tempérée, aride)</li>
<li>Position du soleil (hémisphère nord vs sud, heure approximative)</li>
<li>Ombres (longueur → latitude approximative, direction → heure)</li>
<li>Terrain (relief, type de sol, cours d'eau)</li>
</ul>

<h3>Étape 3 : Outils de vérification</h3>
<ul>
<li><strong>Google Maps / Street View :</strong> Vérifier visuellement un lieu candidat</li>
<li><strong>Google Lens :</strong> Identifier des enseignes, monuments, ou objets dans l'image</li>
<li><strong>SunCalc :</strong> Calculer la position du soleil à une date/heure/lieu donnés pour confirmer la cohérence temporelle</li>
<li><strong>Sentinel Hub :</strong> Imagerie satellite pour vérifier le terrain et la végétation</li>
</ul>

<h3>Exemple concret de workflow</h3>
<pre><code class="language-text">1. Photo reçue : paysage urbain avec une enseigne floue
2. EXIF : pas de GPS (supprimé par la plateforme)
3. Analyse visuelle :
   - Panneau en alphabet cyrillique → Europe de l'Est ou Russie
   - Plaque jaune → potentiellement Pays-Bas ? Non, format différent
   - Enseigne "Аптека" (pharmacie) → confirme zone russophone
   - Architecture soviétique → ex-URSS
   - Tram visible → ville disposant d'un réseau de tramway
4. Hypothèse : ville moyenne russophone avec tram
5. Recherche Google Maps des villes avec tramway en Russie/Ukraine
6. Comparaison Street View avec les bâtiments visibles
7. Confirmation : Iekaterinbourg, angle rue X et avenue Y</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎮 Entraînement</h3><p class="text-sm">Le jeu <strong>GeoGuessr</strong> (geoguessr.com) est le meilleur outil d'entraînement à la géolocalisation. Il vous place aléatoirement sur Google Street View et vous devez identifier votre position. Les joueurs experts atteignent une précision de quelques kilomètres en moins de 30 secondes.</p></div></div>
      `,
            quiz: [
                { id: "q2-6-1", question: "Quel réseau social conserve généralement les données EXIF/GPS des photos uploadées ?", options: ["Facebook", "Instagram", "Twitter/X", "Aucun des trois — ils les suppriment tous"], correct: 3, explanation: "Les grandes plateformes sociales (Facebook, Instagram, Twitter) suppriment systématiquement les métadonnées EXIF lors de l'upload pour protéger la vie privée. En revanche, les messageries (email, certaines configurations WhatsApp/Telegram) peuvent les conserver." },
                { id: "q2-6-2", question: "Comment les ombres dans une photo peuvent-elles aider à la géolocalisation ?", options: ["Elles n'ont aucune utilité en GEOINT", "Leur longueur indique la latitude approximative, et leur direction indique l'heure de la prise de vue", "Elles permettent d'identifier le modèle d'appareil photo", "Elles indiquent la vitesse du vent"], correct: 1, explanation: "La longueur des ombres est liée à l'angle du soleil (et donc à la latitude et la saison). La direction des ombres indique la position du soleil et donc l'heure approximative. Combinées avec SunCalc, ces données peuvent confirmer ou invalider un lieu et une date." }
            ]
        }
    ]
};
