// PHASE 9 — Spécialisation & Examen Final
export const phase9 = {
    id: "m9",
    title: "Phase 9 — Spécialisation & Certification",
    icon: "GraduationCap",
    lessons: [
        {
            id: "l9-1",
            title: "Parcours de spécialisation OSINT",
            content: `
<h2>Choisir sa voie</h2>
<p>L'OSINT est un domaine vaste. Après avoir maîtrisé les fondamentaux, chaque analyste se spécialise dans un ou plusieurs domaines selon ses affinités et les besoins de son organisation.</p>

<h3>Spécialisations principales</h3>
<table>
<thead><tr><th>Spécialisation</th><th>Focus</th><th>Débouchés</th></tr></thead>
<tbody>
<tr><td><strong>CTI (Cyber Threat Intelligence)</strong></td><td>Suivi des groupes APT, analyse de malware, IOCs, dark web monitoring</td><td>SOC, CERT, éditeurs de sécurité</td></tr>
<tr><td><strong>GEOINT</strong></td><td>Imagerie satellite, géolocalisation, cartographie de conflits</td><td>Défense, journalisme d'investigation, ONG</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Réseaux sociaux, analyse de communautés, détection de propagande</td><td>Fact-checking, forces de l'ordre, renseignement</td></tr>
<tr><td><strong>FININT</strong></td><td>Flux financiers, blanchiment, crypto-traçage</td><td>Compliance, anti-fraude, régulateurs</td></tr>
<tr><td><strong>Red Team / SE</strong></td><td>Ingénierie sociale, pentest physique, phishing</td><td>Cabinets de cybersécurité, Red Teams internes</td></tr>
<tr><td><strong>Intelligence économique</strong></td><td>Veille concurrentielle, due diligence, M&A intelligence</td><td>Cabinets de conseil, direction stratégie</td></tr>
</tbody>
</table>

<h3>Certifications OSINT & adjacentes</h3>
<ul>
<li><strong>SEC497 / GOSI :</strong> SANS OSINT certification (la référence)</li>
<li><strong>OSCP :</strong> Offensive Security Certified Professional (pentest)</li>
<li><strong>GCTI :</strong> GIAC Cyber Threat Intelligence</li>
<li><strong>TCM OSINT :</strong> TCM Security OSINT course (niveau intermédiaire)</li>
<li><strong>Bellingcat workshops :</strong> Formation pratique par les experts du terrain</li>
</ul>

<h3>Communautés et ressources continues</h3>
<ul>
<li><strong>OSINT Framework :</strong> osintframework.com — annuaire d'outils catégorisé</li>
<li><strong>OSINT Curious :</strong> Podcast communautaire avec des praticiens</li>
<li><strong>Trace Labs :</strong> CTF OSINT humanitaire (recherche de personnes disparues)</li>
<li><strong>r/OSINT :</strong> Subreddit dédié à la communauté OSINT</li>
<li><strong>Bellingcat :</strong> Méthodologies d'investigation publiées en open source</li>
<li><strong>IntelTechniques (Michael Bazzell) :</strong> Ressource de référence sur l'OPSEC et l'OSINT</li>
</ul>
      `,
            quiz: [
                { id: "q9-1-1", question: "Quelle organisation propose des CTF OSINT humanitaires pour aider à retrouver des personnes disparues ?", options: ["SANS Institute", "Trace Labs", "Bellingcat", "Offensive Security"], correct: 1, explanation: "Trace Labs organise des CTF (Capture The Flag) OSINT humanitaires où les participants utilisent leurs compétences pour aider les forces de l'ordre à retrouver des personnes disparues. C'est une excellente façon de pratiquer l'OSINT en ayant un impact réel." }
            ]
        },
        {
            id: "l9-2",
            title: "Constitution d'un laboratoire OSINT",
            content: `
<h2>Construire votre station de travail d'analyste</h2>
<p>Un analyste OSINT professionnel a besoin d'un environnement de travail configuré pour la sécurité, l'efficacité, et la reproductibilité.</p>

<h3>Architecture recommandée</h3>
<pre><code class="language-text">┌─────────────────────────────────────────┐
│              Machine Hôte               │
│  OS : Windows / macOS / Linux           │
│  VPN toujours actif (CyberGhost, Mullvad)│
├─────────────────────────────────────────┤
│         VM OSINT (VirtualBox/VMware)    │
│  OS : Kali Linux ou Trace Labs VM       │
│  Navigateurs : Firefox + Tor Browser    │
│  Outils : Maltego, SpiderFoot, Holehe   │
│  Scripts : Python, Go, Bash             │
│  Comptes : Sock puppets dédiés          │
├─────────────────────────────────────────┤
│         VM Analyse (isolée)             │
│  OS : REMnux ou Flare-VM               │
│  Usage : Analyse de fichiers suspects   │
│  Réseau : NAT ou Host-only              │
├─────────────────────────────────────────┤
│         Tails / Whonix (USB)            │
│  Usage : Dark Web, navigation anonyme   │
│  Réseau : Tor uniquement                │
└─────────────────────────────────────────┘</code></pre>

<h3>Outils essentiels par catégorie</h3>
<table>
<thead><tr><th>Catégorie</th><th>Outils</th></tr></thead>
<tbody>
<tr><td><strong>Browser</strong></td><td>Firefox (compartimenté), Tor Browser, Brave</td></tr>
<tr><td><strong>Extensions</strong></td><td>Wappalyzer, Hunchly, uBlock Origin, NoScript</td></tr>
<tr><td><strong>Reconnaissance</strong></td><td>subfinder, amass, theHarvester, Maltego CE</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Sherlock, Maigret, Holehe, Instaloader, Twint</td></tr>
<tr><td><strong>Métadonnées</strong></td><td>ExifTool, FOCA, metagoofil</td></tr>
<tr><td><strong>Infra</strong></td><td>Shodan CLI, Censys, nmap (si autorisé), dig/nslookup</td></tr>
<tr><td><strong>Notes</strong></td><td>Obsidian (graphe de liens), CherryTree, Hunchly</td></tr>
<tr><td><strong>Capture</strong></td><td>Flameshot, OBS, archive.today</td></tr>
<tr><td><strong>Automatisation</strong></td><td>Python 3, SpiderFoot, n8n, théorie de pipeline</td></tr>
</tbody>
</table>

<h3>Gestion des comptes sock puppet</h3>
<ul>
<li>Créer des personas crédibles avec un historique (~2 semaines d'activité minimum)</li>
<li>Numéro de téléphone dédié (SIM prépayée ou VoIP comme MySudo)</li>
<li>Email dédié (ProtonMail ou service similaire)</li>
<li>VPN/Tor lors de la création et de l'utilisation</li>
<li>Ne JAMAIS croiser les comptes sock puppet avec vos comptes personnels</li>
<li>Documenter chaque sock puppet dans un registre sécurisé</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">💰 Budget minimum</h3><p class="text-sm">Un lab OSINT fonctionnel peut être monté pour moins de 100€/an : VirtualBox (gratuit), Kali/Tails (gratuit), VPN (~60€/an), SIM prépayée (~10€), clé USB (Tails). Les outils premium (Maltego, Shodan membership) sont des plus, pas des prérequis.</p></div></div>
      `,
            quiz: [
                { id: "q9-2-1", question: "Pourquoi est-il critique de ne jamais croiser les comptes sock puppet avec vos comptes personnels ?", options: ["Cela ferait consommer plus de données mobiles", "Les algorithmes des plateformes pourraient relier vos comptes réels et d'investigation, compromettant votre OPSEC et votre identité", "Cela prendrait trop de temps de gérer les deux", "Les sock puppets coûtent cher à maintenir"], correct: 1, explanation: "Les plateformes (Facebook, LinkedIn, Google) utilisent des signaux multiples (IP, navigateur, cookies, contacts) pour relier des comptes. Un croisement involontaire pourrait exposer votre identité réelle et compromettre l'investigation." }
            ]
        },
        {
            id: "l9-3",
            title: "Veille continue & monitoring",
            content: `
<h2>L'OSINT ne s'arrête jamais</h2>
<p>La valeur de l'OSINT décuple quand elle passe du ponctuel au continu. La veille permanente permet de détecter les changements, les menaces émergentes, et les nouvelles expositions.</p>

<h3>Architecture de veille OSINT</h3>
<pre><code class="language-text">Sources → Collecte automatisée → Filtrage/Tri → Alerte → Analyse
              (APIs, RSS, scripts)    (règles)    (email/Slack)  (humain)</code></pre>

<h3>Outils de veille</h3>
<table>
<thead><tr><th>Outil</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><strong>Google Alerts</strong></td><td>Surveillance de mentions (nom d'entreprise, dirigeants)</td></tr>
<tr><td><strong>Mention / Talkwalker</strong></td><td>Surveillance multi-plateforme avec analyse de sentiment</td></tr>
<tr><td><strong>SpiderFoot HX</strong></td><td>Scans OSINT automatisés récurrents</td></tr>
<tr><td><strong>Shodan Monitor</strong></td><td>Alertes sur changements d'infrastructure</td></tr>
<tr><td><strong>URLScan.io</strong></td><td>Surveillance de nouveaux domaines similaires (typosquatting)</td></tr>
<tr><td><strong>PhishTank</strong></td><td>Base communautaire de URLs de phishing</td></tr>
<tr><td><strong>Have I Been Pwned API</strong></td><td>Alertes en cas de nouvelle fuite touchant votre domaine</td></tr>
</tbody>
</table>

<h3>Veille par catégorie</h3>
<ul>
<li><strong>Veille de marque :</strong> Mentions de l'entreprise, domaines typosquattés, faux profils sociaux</li>
<li><strong>Veille technique :</strong> Nouveaux sous-domaines, changements de configuration, nouvelles CVE sur la stack</li>
<li><strong>Veille de fuite :</strong> Emails corporate dans de nouvelles breaches, documents confidentiels publiés</li>
<li><strong>Veille dark web :</strong> Mentions sur les forums, vente d'accès ou de données</li>
<li><strong>Veille concurrentielle :</strong> Recrutements, brevets, partenariats des concurrents</li>
</ul>
      `,
            quiz: [
                { id: "q9-3-1", question: "Quel outil permet de surveiller les changements d'infrastructure (nouveaux ports, services) sur vos IPs ?", options: ["Google Alerts", "Shodan Monitor", "PhishTank", "Have I Been Pwned"], correct: 1, explanation: "Shodan Monitor permet de surveiller en continu les IPs et domaines de votre organisation et d'envoyer des alertes quand de nouveaux services apparaissent, des ports s'ouvrent, ou des configurations changent." }
            ]
        },
        {
            id: "l9-4",
            title: "Éthique avancée & dilemmes",
            content: `
<h2>Les zones grises de l'OSINT</h2>
<p>Au-delà du cadre légal noir et blanc, l'analyste OSINT fait face à des dilemmes éthiques complexes où le "droit" et le "juste" ne coïncident pas toujours.</p>

<h3>Dilemme 1 : La donnée publique mais intime</h3>
<p>Un profil Facebook public révèle qu'un dirigeant souffre d'une maladie grave. L'information est techniquement publique et pourrait être pertinente pour une due diligence.</p>
<ul>
<li><strong>Pour :</strong> Pertinent pour évaluer le risque de leadership d'une entreprise</li>
<li><strong>Contre :</strong> Donnée de santé protégée par le RGPD (catégorie spéciale). Exploitation éthiquement discutable.</li>
<li><strong>Décision recommandée :</strong> Ne pas inclure dans le rapport. Signaler le risque de protection des données au client sans détailler.</li>
</ul>

<h3>Dilemme 2 : L'informateur involontaire</h3>
<p>Un employé publie involontairement des données techniques confidentielles sur un forum public. Vous les trouvez lors de votre audit.</p>
<ul>
<li><strong>Pour :</strong> Démontrer le risque d'exposition involontaire</li>
<li><strong>Contre :</strong> L'employé pourrait être sanctionné si vous le nommez</li>
<li><strong>Décision recommandée :</strong> Documenter la fuite sans identifier nommément l'employé. Recommander une formation de sensibilisation générale.</li>
</ul>

<h3>Dilemme 3 : La zone grise transfrontalière</h3>
<p>Une investigation légitime en France nécessite de collecter des données sur un individu basé dans un pays sans protection des données.</p>
<ul>
<li><strong>Règle :</strong> Appliquer toujours le standard le plus protecteur (RGPD) quelle que soit la localisation de la cible</li>
</ul>

<h3>Framework de décision éthique</h3>
<pre><code class="language-text">Pour chaque donnée sensible trouvée, poser ces 5 questions :

1. LÉGALITÉ : Ai-je le droit de collecter cette donnée ?
2. PROPORTIONNALITÉ : Cette donnée est-elle nécessaire pour répondre au PIR ?
3. MINIMISATION : Puis-je atteindre le même objectif avec moins de données ?
4. IMPACT : Quel tort potentiel si cette donnée est mal utilisée ?
5. TEST DU JOURNAL : Serais-je à l'aise si cette analyse était publiée dans la presse ?

Si la réponse à la question 5 est "non", reconsidérez votre approche.</code></pre>
      `,
            quiz: [
                { id: "q9-4-1", question: "Lors d'un audit, vous trouvez une publication Facebook publique révélant la maladie d'un dirigeant. Quelle est la bonne pratique ?", options: ["L'inclure dans le rapport car l'info est publique", "Ne pas l'inclure — les données de santé sont une catégorie spéciale RGPD, et l'exploitation est éthiquement discutable", "La vendre comme renseignement compétitif", "Contacter le dirigeant pour le prévenir"], correct: 1, explanation: "Les données de santé sont une catégorie spéciale sous le RGPD (Article 9), nécessitant un consentement explicite pour leur traitement. Même si l'information est publiquement accessible, l'inclure dans un rapport d'audit pourrait violer le RGPD et constitue une exploitation éthiquement contestable." }
            ]
        },
        {
            id: "l9-5",
            title: "Examen final théorique",
            content: `
<h2>📝 Évaluation finale — Partie théorique</h2>
<p>Cette évaluation couvre l'ensemble des 9 phases du cours. Chaque question teste votre compréhension et votre capacité d'analyse, pas simplement votre mémoire.</p>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Consignes</h3><p class="text-sm">Répondez à toutes les questions. En cas de doute, relisez les chapitres correspondants. Le score de passage est de <strong>80%</strong>.</p></div></div>

<h3>Domaines évalués</h3>
<table>
<thead><tr><th>Domaine</th><th>Poids</th></tr></thead>
<tbody>
<tr><td>Cadre légal & éthique</td><td>15%</td></tr>
<tr><td>Méthodologie (cycle du renseignement)</td><td>20%</td></tr>
<tr><td>Techniques de collecte OSINT</td><td>25%</td></tr>
<tr><td>Analyse & corrélation</td><td>20%</td></tr>
<tr><td>Ingénierie sociale</td><td>10%</td></tr>
<tr><td>Rédaction & communication</td><td>10%</td></tr>
</tbody>
</table>

<h3>Conseils de révision</h3>
<ul>
<li>Relisez les études de cas de la Phase 8 pour ancrer la théorie dans la pratique</li>
<li>Maîtrisez le vocabulaire analytique (évaluer, estimer, juger vs je pense)</li>
<li>Connaissez les limites légales par coeur (RGPD, Godfrain, Bluetouff)</li>
<li>Comprenez les outils non pas dans leur utilisation technique mais dans leur pertinence analytique</li>
<li>Soyez capable d'expliquer la différence entre corrélation et causalité avec des exemples</li>
</ul>
      `,
            quiz: [
                { id: "q9-5-1", question: "Un analyste OSINT découvre un document estampillé 'Confidentiel' indexé par Google sur le site web public de la cible. Quelle est la meilleure conduite à tenir ?", options: ["Le télécharger et l'analyser en détail car il est publiquement accessible", "Le documenter objectivement dans le rapport en recommandant sa suppression, mais ne pas exploiter le contenu au-delà de ce qui est nécessaire", "L'ignorer car il est marqué confidentiel", "Le publier sur les réseaux sociaux pour alerter"], correct: 1, explanation: "Le document est publiquement accessible (indexé par Google), donc sa consultation n'est pas illicite. Cependant, son exploitation doit rester proportionnée au PIR de la mission. Il faut le documenter comme trouvaille (preuve d'exposition involontaire) et recommander sa suppression, sans exploiter le contenu sensible au-delà du nécessaire." },
                { id: "q9-5-2", question: "Quel est l'ordre correct des phases du cycle du renseignement ?", options: ["Collecte → Direction → Analyse → Traitement → Diffusion", "Direction → Collecte → Traitement → Analyse → Diffusion", "Analyse → Collecte → Direction → Diffusion → Traitement", "Diffusion → Direction → Collecte → Analyse → Traitement"], correct: 1, explanation: "Le cycle du renseignement suit l'ordre : Direction (planification) → Collecte (données brutes) → Traitement (nettoyage, structuration) → Analyse (transformation en intelligence) → Diffusion (livraison au décideur). Le cycle est itératif." },
                { id: "q9-5-3", question: "Vous avez identifié 3 sous-domaines via crt.sh : staging.target.com, dev.target.com, et jenkins.target.com. Quel est le plus critique à signaler prioritairement ?", options: ["staging.target.com", "dev.target.com", "jenkins.target.com", "Les trois ont la même criticité"], correct: 2, explanation: "Jenkins est un serveur d'intégration continue qui, s'il est exposé sans authentification, peut donner accès au code source, aux pipelines de build, aux secrets (clés API, mots de passe), et potentiellement permettre l'exécution de code arbitraire." },
                { id: "q9-5-4", question: "Quel principe de Cialdini est le plus exploité dans les fraudes au président (BEC) ?", options: ["Réciprocité", "Preuve sociale", "Autorité", "Rareté"], correct: 2, explanation: "Les BEC exploitent principalement le principe d'autorité : l'attaquant usurpe l'identité du PDG ou d'un dirigeant pour ordonner un virement urgent. L'employé obéit car la demande vient d'une figure d'autorité hiérarchique." },
                { id: "q9-5-5", question: "En ACH, comment identifie-t-on l'hypothèse la plus probable ?", options: ["C'est celle qui a le plus de preuves 'cohérentes'", "C'est celle qui a le MOINS d'incohérences avec les preuves", "C'est la première formulée", "C'est celle soutenue par le plus d'analystes"], correct: 1, explanation: "L'ACH (Analysis of Competing Hypotheses) fonctionne par falsification, pas par confirmation. L'hypothèse retenue est celle qui résiste le mieux aux preuves — c'est-à-dire celle qui a le moins d'incohérences/contradictions avec l'ensemble des données disponibles." }
            ]
        },
        {
            id: "l9-6",
            title: "Projet final & synthèse",
            content: `
<h2>🎓 Projet de certification finale</h2>
<p>Félicitations — vous avez terminé les 9 phases du parcours OSINT & Ingénierie Sociale. Ce dernier chapitre synthétise les compétences acquises et propose un projet final intégrateur.</p>

<h3>Projet final : Audit OSINT complet</h3>
<p>Réalisez un audit OSINT complet sur un domaine que vous possédez ou un domaine de test autorisé. Le livrable attendu est un <strong>rapport professionnel</strong> couvrant :</p>
<ol>
<li><strong>Cartographie du domaine :</strong> Sous-domaines, DNS, infrastructure (crt.sh, subfinder, dig)</li>
<li><strong>Analyse d'infrastructure :</strong> Services exposés, versions, Shadow IT (Shodan, Censys)</li>
<li><strong>OSINT organisationnel :</strong> Organigramme, stack technique, documents exposés (LinkedIn, Google Dorks)</li>
<li><strong>Analyse des fuites :</strong> Emails dans les breaches, credentials exposés (HIBP)</li>
<li><strong>Métadonnées :</strong> Extraction et analyse des documents publics (ExifTool)</li>
<li><strong>Campagne de phishing simulée :</strong> Scénario basé sur l'OSINT (prétexte uniquement, pas d'exécution réelle)</li>
<li><strong>Rapport exécutif :</strong> Format professionnel avec résumé, matrice de risques, et recommandations priorisées</li>
</ol>

<h3>Grille d'évaluation</h3>
<table>
<thead><tr><th>Critère</th><th>Pondération</th></tr></thead>
<tbody>
<tr><td>Complétude de la collecte</td><td>20%</td></tr>
<tr><td>Qualité de l'analyse (hypothèses, corrélations)</td><td>25%</td></tr>
<tr><td>Pertinence des recommandations</td><td>15%</td></tr>
<tr><td>Qualité rédactionnelle du rapport</td><td>20%</td></tr>
<tr><td>Respect du cadre légal et éthique</td><td>10%</td></tr>
<tr><td>Originalité de l'approche et créativité</td><td>10%</td></tr>
</tbody>
</table>

<h3>Synthèse du parcours</h3>
<pre><code class="language-text">Phase 0 : Mentalité & cadre éthique/légal
Phase 1 : Fondamentaux de la recherche
Phase 2 : OSINT humain (personnes)
Phase 3 : OSINT organisationnel & technique
Phase 4 : SOCMINT (réseaux sociaux)
Phase 5 : Méthodologie d'enquête
Phase 6 : Ingénierie sociale
Phase 7 : OSINT avancé (GEOINT, IA, automation)
Phase 8 : Labs & mise en situation
Phase 9 : Spécialisation & certification</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🌟 Message final</h3><p class="text-sm">L'OSINT est un superpouvoir. Comme tout superpouvoir, il vient avec une responsabilité. Utilisez vos compétences pour protéger, pour informer, pour défendre. L'éthique n'est pas une contrainte — c'est ce qui fait de vous un professionnel respectable. Bonne continuation, analyste.</p></div></div>
      `,
            quiz: [
                { id: "q9-6-1", question: "Quel est le critère le plus important dans l'évaluation d'un rapport OSINT professionnel ?", options: ["La longueur du rapport", "La qualité de l'analyse (hypothèses bien formulées, corrélations vérifiées, niveau de confiance explicite)", "Le nombre d'outils utilisés", "La vitesse de réalisation"], correct: 1, explanation: "La qualité de l'analyse est le critère le plus important : des hypothèses bien formulées, des corrélations vérifiées par au moins 2 sources indépendantes, et un niveau de confiance explicite pour chaque conclusion. C'est ce qui différencie un analyste d'un simple collecteur de données." }
            ]
        }
    ]
};
