// PHASE 4 — SOCMINT (Réseaux sociaux)
export const phase4 = {
    id: "m4",
    title: "Phase 4 — SOCMINT",
    icon: "Users",
    lessons: [
        {
            id: "l4-1",
            title: "Architecture des réseaux sociaux",
            content: `
<h2>Comprendre les plateformes pour mieux les exploiter</h2>
<p>Chaque réseau social est une architecture de données avec ses propres règles de visibilité, ses APIs, et ses failles informationnelles. L'analyste SOCMINT doit comprendre ces mécanismes avant de chercher quoi que ce soit.</p>

<h3>Modèles de visibilité par plateforme</h3>
<table>
<thead><tr><th>Plateforme</th><th>Modèle par défaut</th><th>Données accessibles sans compte</th></tr></thead>
<tbody>
<tr><td><strong>LinkedIn</strong></td><td>Semi-public</td><td>Nom, titre, entreprise, résumé (profils publics)</td></tr>
<tr><td><strong>X / Twitter</strong></td><td>Public</td><td>Tweets, bio, followers, suivis, likes (si compte public)</td></tr>
<tr><td><strong>Instagram</strong></td><td>Semi-public</td><td>Bio, nombre de posts/followers (profils publics)</td></tr>
<tr><td><strong>Facebook</strong></td><td>Semi-privé</td><td>Nom, photo de profil, parfois amis publics</td></tr>
<tr><td><strong>Telegram</strong></td><td>Semi-public</td><td>Canaux publics entièrement accessibles</td></tr>
<tr><td><strong>Reddit</strong></td><td>Pseudo-anonyme</td><td>Historique complet des posts et commentaires</td></tr>
<tr><td><strong>Discord</strong></td><td>Serveurs privés</td><td>Très peu sans invitation ; serveurs publics listés</td></tr>
<tr><td><strong>TikTok</strong></td><td>Public</td><td>Vidéos, bio, followers (si compte public)</td></tr>
</tbody>
</table>

<h3>APIs et quotas</h3>
<p>Les APIs officielles sont la voie légale et stable pour la collecte de données SOCMINT :</p>
<ul>
<li><strong>X API v2 :</strong> Accès aux tweets, users, tendances. Quotas stricts, plans payants.</li>
<li><strong>LinkedIn API :</strong> Très restreinte. Uniquement via partenariats approuvés.</li>
<li><strong>Telegram API (MTProto) :</strong> Accès programmatique complet via Telethon.</li>
<li><strong>Reddit API :</strong> Relativement ouverte. Historique complet accessible.</li>
</ul>

<h3>Le problème du scraping</h3>
<p>Le scraping (collecte automatisée sans API) est juridiquement risqué en Europe :</p>
<ul>
<li>Violation potentielle des Conditions d'Utilisation (ToS)</li>
<li>Risque de blocage de compte / IP</li>
<li>Implications RGPD si les données concernent des personnes identifiables</li>
<li>En revanche, toujours acceptable pour la consultation manuelle de profils publics</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">💡 Règle d'or SOCMINT</h3><p class="text-sm">Privilégiez toujours l'API officielle quand elle existe. Si l'API est trop restrictive, la consultation manuelle avec archivage (Hunchly) reste 100% légale pour les contenus publics. Le scraping automatisé est le dernier recours, uniquement dans un cadre contractuel.</p></div></div>
      `,
            quiz: [
                { id: "q4-1-1", question: "Quel réseau social offre l'accès le plus complet à l'historique d'un utilisateur sans authentification ?", options: ["Facebook", "LinkedIn", "Reddit", "Instagram"], correct: 2, explanation: "Reddit est pseudo-anonyme mais très transparent : l'historique complet des posts et commentaires d'un utilisateur est accessible publiquement, révélant centres d'intérêt, opinions, localisation, et horaires d'activité." }
            ]
        },
        {
            id: "l4-2",
            title: "LinkedIn : organigrammes & hiérarchies",
            content: `
<h2>LinkedIn : la plus grande base RH du monde</h2>
<p>Pour un analyste OSINT, LinkedIn est une mine d'or inépuisable. C'est un annuaire mondial de professionnels où les gens publient <em>volontairement</em> leur parcours, leurs compétences, et leur réseau.</p>

<h3>Intelligence extractible de LinkedIn</h3>
<ul>
<li><strong>Organigramme :</strong> Identifier la hiérarchie (CEO → VP → Directors → Managers)</li>
<li><strong>Stack technique :</strong> Les compétences listées par les développeurs révèlent les technologies</li>
<li><strong>Cibles de spear-phishing :</strong> Identifier les personnes clés (RH, finance, IT)</li>
<li><strong>Historique de carrière :</strong> Mouvements de personnel (arrivées, départs, restructurations)</li>
<li><strong>Veille concurrentielle :</strong> Qui recrute dans quel domaine ?</li>
</ul>

<h3>Google Dorks pour LinkedIn</h3>
<pre><code class="language-text"># Tous les profils d'une entreprise
site:linkedin.com/in "AcmeCorp"

# Identifier le DSI / CISO
site:linkedin.com/in "AcmeCorp" ("CISO" OR "DSI" OR "Chief Information")

# Personnel IT (pour identifier la stack)
site:linkedin.com/in "AcmeCorp" ("DevOps" OR "SRE" OR "Administrateur Système")

# Anciens employés (peuvent parler plus librement)
site:linkedin.com/in "ex-AcmeCorp" OR "ancien" "AcmeCorp"</code></pre>

<h3>linkedin2username</h3>
<p>Outil qui génère des listes de noms d'utilisateurs à partir des profils LinkedIn d'une entreprise :</p>
<pre><code class="language-bash"># Génère des formats d'email probables
# prenom.nom@acmecorp.com
# p.nom@acmecorp.com
# pnom@acmecorp.com
python3 linkedin2username.py -c "AcmeCorp" -d acmecorp.com</code></pre>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ LinkedIn et la légalité</h3><p class="text-sm">Le scraping massif de LinkedIn viole leurs ToS et peut entraîner des poursuites. En Europe, le RGPD s'applique même aux données publiques LinkedIn. Utilisez-le de manière proportionnée dans un cadre Red Team contractuel, avec un compte sandbox dédié. Ne jamais utiliser votre compte personnel.</p></div></div>
      `,
            quiz: [
                { id: "q4-2-1", question: "Pourquoi les compétences listées par les employés sur LinkedIn sont-elles utiles en OSINT technique ?", options: ["Elles donnent le mot de passe des systèmes", "Elles révèlent la stack technique de l'entreprise (langages, outils, frameworks)", "Elles indiquent le salaire de l'employé", "Elles n'ont aucune utilité en OSINT"], correct: 1, explanation: "Si 15 développeurs d'AcmeCorp listent 'Kubernetes', 'AWS', et 'PostgreSQL' dans leurs compétences, on peut déduire la stack technique de l'entreprise avec un haut degré de confiance." }
            ]
        },
        {
            id: "l4-3",
            title: "Instagram & Facebook : analyse visuelle",
            content: `
<h2>Les images parlent plus que les mots</h2>
<p>Instagram et Facebook sont des plateformes visuelles où les utilisateurs partagent leur quotidien en images. Pour l'analyste OSINT, ces images sont des sources d'intelligence extraordinaires.</p>

<h3>Intelligence extractible d'Instagram</h3>
<ul>
<li><strong>Localisation :</strong> Posts géotaggés, stories avec lieu, géolocalisation visuelle</li>
<li><strong>Cercle social :</strong> Photos taguées, commentaires, followers mutuels</li>
<li><strong>Mode de vie :</strong> Voyages, restaurants, véhicules, animaux</li>
<li><strong>Routine :</strong> Horaires de publication, lieux récurrents</li>
<li><strong>Employeur :</strong> Photos de bureau, badge, uniforme, logo visible</li>
</ul>

<h3>Outils d'extraction Instagram</h3>

<h4>Instaloader</h4>
<pre><code class="language-bash"># Télécharger tous les posts publics d'un profil
instaloader profile target_username

# Télécharger avec métadonnées
instaloader --metadata-json profile target_username

# Télécharger les stories (nécessite un login)
instaloader --login=sock_puppet_account --stories target_username</code></pre>

<h4>Analyse visuelle systématique</h4>
<p>Pour chaque image, l'analyste doit se poser les questions suivantes :</p>
<ol>
<li><strong>OÙ ?</strong> Indices de localisation (panneaux, paysage, architecture)</li>
<li><strong>QUAND ?</strong> Ombres, lumière, végétation saisonnière, timestamp</li>
<li><strong>QUI ?</strong> Personnes présentes, tags, mentions</li>
<li><strong>QUOI ?</strong> Objets révélateurs (badge, uniforme, document visible)</li>
<li><strong>POURQUOI ?</strong> Contexte de la publication (événement, vacances, travail)</li>
</ol>

<h3>Facebook — la mémoire sociale</h3>
<ul>
<li><strong>Graph Search (limité mais utile) :</strong> Recherche d'amis, de likes, de groupes</li>
<li><strong>Pages d'entreprise :</strong> Événements, avis, photos taguées</li>
<li><strong>Marketplace :</strong> Localisation approximative du vendeur</li>
<li><strong>Groupes :</strong> Appartenance à des communautés révélatrices</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🔍 Focus : le badge d'entreprise</h3><p class="text-sm">Une selfie avec un badge d'entreprise visible peut révéler : le format du badge (code-barres, QR, puce RFID), le logo, le format du nom d'employé, et parfois le numéro de matricule. Toutes ces informations sont exploitables pour du pretexting ou de la création de faux badges.</p></div></div>
      `,
            quiz: [
                { id: "q4-3-1", question: "Quels sont les 5 axes d'analyse systématique d'une image en SOCMINT ?", options: ["Résolution, Taille, Format, Couleur, Compression", "Où, Quand, Qui, Quoi, Pourquoi", "Auteur, Source, Date, Licence, Plateforme", "Luminosité, Contraste, Saturation, Netteté, Bruit"], correct: 1, explanation: "Les 5W (Where, When, Who, What, Why) sont le cadre d'analyse standard pour extraire le maximum d'intelligence d'une image : localisation, temporalité, identités, objets, et contexte." }
            ]
        },
        {
            id: "l4-4",
            title: "X / Twitter : cartographie de communautés",
            content: `
<h2>X/Twitter : le graphe social en temps réel</h2>
<p>X (anciennement Twitter) est unique en OSINT grâce à son modèle majoritairement public et sa dimension conversationnelle en temps réel.</p>

<h3>Données OSINT exploitables sur X</h3>
<ul>
<li><strong>Bio :</strong> Lieu déclaré, liens, description, employeur</li>
<li><strong>Tweets :</strong> Opinions, centres d'intérêt, connexions, habitudes</li>
<li><strong>Followers/Suivis :</strong> Cartographie du réseau d'influence</li>
<li><strong>Likes :</strong> Affinités invisibles (les likes étaient publics jusqu'en 2024)</li>
<li><strong>Listes :</strong> Appartenance à des listes thématiques</li>
<li><strong>Réponses et mentions :</strong> Interactions révèlent le cercle proche</li>
</ul>

<h3>Opérateurs de recherche avancée X</h3>
<pre><code class="language-text"># Tweets d'un utilisateur contenant un mot spécifique
from:target_user "confidentiel"

# Tweets mentionnant un utilisateur
to:target_user OR @target_user

# Tweets géolocalisés dans un rayon
geocode:48.8566,2.3522,10km

# Tweets avec médias (photos/vidéos)
from:target_user filter:media

# Tweets contenant des liens
from:target_user filter:links

# Tweets dans une période
from:target_user since:2024-01-01 until:2024-06-30

# Combinaison puissante
(from:target_user) ("mot de passe" OR "credential" OR "oops") since:2024-01-01</code></pre>

<h3>Analyse de communautés</h3>
<p>La cartographie de communautés consiste à identifier les clusters d'utilisateurs qui interagissent entre eux. Cela révèle :</p>
<ul>
<li>Les <strong>influenceurs</strong> d'un domaine (qui est le plus retweeté ?)</li>
<li>Les <strong>chambres d'écho</strong> (groupes qui ne dialoguent qu'entre eux)</li>
<li>Les <strong>ponts</strong> entre communautés (utilisateurs qui relient deux mondes)</li>
<li>Les <strong>comptes de propagande</strong> (comportement anormal, création récente, activité intense)</li>
</ul>
      `,
            quiz: [
                { id: "q4-4-1", question: "Quel opérateur de recherche X permet de trouver les tweets géolocalisés dans un rayon autour d'un point ?", options: ["location:lat,long,radius", "geocode:lat,long,radius", "near:city within:10km", "geo:lat,long,radius"], correct: 1, explanation: "L'opérateur geocode: de X/Twitter accepte le format geocode:latitude,longitude,rayon (ex: geocode:48.8566,2.3522,10km pour Paris) et retourne les tweets géolocalisés dans cette zone." }
            ]
        },
        {
            id: "l4-5",
            title: "Telegram & communautés fermées",
            content: `
<h2>Telegram : le réseau des communautés alternatives</h2>
<p>Telegram est devenu un acteur central de l'écosystème OSINT en raison de son modèle hybride : des canaux publics accessibles à tous, et des groupes privés nécessitant une invitation. C'est un lieu de choix pour la CTI (Cyber Threat Intelligence).</p>

<h3>Structure de Telegram</h3>
<ul>
<li><strong>Canaux publics :</strong> Diffusion one-to-many. Tout le monde peut lire. Indexables.</li>
<li><strong>Groupes publics :</strong> Conversations ouvertes. Jusqu'à 200 000 membres.</li>
<li><strong>Groupes privés :</strong> Accessibles uniquement sur invitation. Non indexés.</li>
<li><strong>Bots :</strong> Programmes automatisés interactifs (recherche, notifications, etc.).</li>
</ul>

<h3>Outils OSINT pour Telegram</h3>

<h4>Telethon (Python MTProto)</h4>
<pre><code class="language-python"># Exemple de collecte de messages d'un canal public
from telethon import TelegramClient

api_id = 'VOTRE_API_ID'
api_hash = 'VOTRE_API_HASH'

client = TelegramClient('session', api_id, api_hash)

async def main():
    await client.start()
    channel = await client.get_entity('nom_du_canal')
    async for message in client.iter_messages(channel, limit=100):
        print(f"{message.date}: {message.text}")

import asyncio
asyncio.run(main())</code></pre>

<h4>Telerecon</h4>
<p>Framework complet de surveillance et cartographie des relations entre utilisateurs Telegram. Peut synchroniser les contacts via un sock puppet pour démasquer des numéros de téléphone.</p>

<h3>Intérêt CTI de Telegram</h3>
<ul>
<li><strong>Canaux de groupes APT :</strong> Certains groupes hacktivistes communiquent publiquement sur Telegram</li>
<li><strong>Marketplaces :</strong> Vente de données volées, accès compromis, exploit kits</li>
<li><strong>Propagande :</strong> Canaux de désinformation géopolitique</li>
<li><strong>Veille :</strong> Alertes en temps réel sur des incidents de sécurité</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🛡️ OPSEC critique Telegram</h3><p class="text-sm">Votre numéro de téléphone est votre identifiant Telegram. Ne jamais utiliser votre numéro personnel. Utilisez un numéro jetable (SIM prépayée) dédié à l'investigation, sur un appareil séparé ou une VM.</p></div></div>
      `,
            quiz: [
                { id: "q4-5-1", question: "Pourquoi est-il critique de ne pas utiliser son numéro personnel sur Telegram lors d'une investigation ?", options: ["Telegram est trop lent avec un numéro personnel", "Le numéro de téléphone est l'identifiant principal sur Telegram et peut être exposé aux cibles", "Telegram ne fonctionne qu'avec des numéros professionnels", "Il n'y a aucun risque à utiliser son numéro personnel"], correct: 1, explanation: "Sur Telegram, le numéro de téléphone est l'identifiant de base. Si vous rejoignez un groupe surveillé, d'autres membres pourraient potentiellement voir votre numéro ou l'obtenir via des techniques de synchronisation de contacts." }
            ]
        },
        {
            id: "l4-6",
            title: "Graphes sociaux & analyse d'interactions",
            content: `
<h2>Visualiser les réseaux invisibles</h2>
<p>L'analyse de graphes sociaux transforme des listes de connexions en visualisations exploitables. C'est la différence entre "connaître les amis de quelqu'un" et "comprendre la structure de pouvoir d'un groupe".</p>

<h3>Concepts fondamentaux des graphes</h3>
<ul>
<li><strong>Noeud :</strong> Une entité (personne, compte, page, groupe)</li>
<li><strong>Arête :</strong> Une relation (suit, aime, mentionne, répond à)</li>
<li><strong>Degré :</strong> Nombre de connexions d'un noeud (influence brute)</li>
<li><strong>Centralité d'intermédiarité (betweenness) :</strong> Mesure à quel point un noeud sert de "pont" entre des groupes — les noeuds à haute betweenness sont des cibles de choix pour l'ingénierie sociale</li>
<li><strong>Cluster :</strong> Groupe de noeuds fortement interconnectés</li>
</ul>

<h3>Maltego — l'outil de graphe OSINT</h3>
<p>Maltego Community Edition permet de :</p>
<ul>
<li>Créer des graphes de relations à partir de données OSINT</li>
<li>Exécuter des "transforms" automatisées (email → domaine → IP → ASN)</li>
<li>Pivoter entre différents types d'entités (personnes, domaines, IPs, emails)</li>
<li>Visualiser les clusters et identifier les noeuds centraux</li>
</ul>

<h3>Types d'analyse de graphe</h3>
<table>
<thead><tr><th>Analyse</th><th>Question</th><th>Application</th></tr></thead>
<tbody>
<tr><td><strong>Centralité</strong></td><td>Qui est le plus connecté/influent ?</td><td>Identifier le leader d'un groupe militant</td></tr>
<tr><td><strong>Clusters</strong></td><td>Quels sous-groupes existent ?</td><td>Cartographier les factions d'une communauté</td></tr>
<tr><td><strong>Ponts</strong></td><td>Qui relie deux groupes séparés ?</td><td>Identifier les informateurs ou agents doubles</td></tr>
<tr><td><strong>Périphérie</strong></td><td>Qui est isolé ?</td><td>Identifier les comptes fantômes ou bots</td></tr>
<tr><td><strong>Temporelle</strong></td><td>Comment le réseau évolue ?</td><td>Détecter des campagnes coordonnées</td></tr>
</tbody>
</table>

<h3>Détection de comportement inauthentique</h3>
<p>Les réseaux de bots et les opérations d'influence présentent des patterns reconnaissables :</p>
<ul>
<li><strong>Création simultanée :</strong> Centaines de comptes créés le même jour</li>
<li><strong>Activité coordonnée :</strong> Mêmes contenus partagés à quelques secondes d'intervalle</li>
<li><strong>Ratio followers/following anormal</strong></li>
<li><strong>Noms aléatoires ou patterns générés</strong></li>
<li><strong>Absence d'interactions organiques</strong></li>
</ul>
      `,
            quiz: [
                { id: "q4-6-1", question: "En analyse de graphe social, qu'identifie la 'centralité d'intermédiarité' (betweenness centrality) ?", options: ["Les comptes les plus anciens du réseau", "Les noeuds qui servent de pont entre des groupes distincts", "Les comptes avec le plus de followers", "Les messages les plus partagés"], correct: 1, explanation: "La betweenness centrality mesure la fréquence à laquelle un noeud se trouve sur le plus court chemin entre deux autres noeuds. Les noeuds à haute betweenness sont des 'ponts' critiques — les supprimer fragmente le réseau." }
            ]
        }
    ]
};
