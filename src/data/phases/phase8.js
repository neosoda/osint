// PHASE 8 — Lab & Mise en Situation
export const phase8 = {
    id: "m8",
    title: "Phase 8 — Labs & Mise en Situation",
    icon: "FlaskConical",
    lessons: [
        {
            id: "l8-1",
            title: "Étude de cas progressive (Débutant)",
            content: `
<h2>🔬 Mission : Identifier le propriétaire d'un domaine suspect</h2>
<p>Ce lab guide pas à pas un débutant à travers une investigation OSINT complète sur un domaine fictif.</p>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Contexte de la mission</h3><p class="text-sm">Votre entreprise a reçu un email de phishing provenant du domaine <code>acme-support-it.com</code>. Le RSSI vous demande d'identifier qui se cache derrière ce domaine et de cartographier l'infrastructure.</p></div></div>

<h3>Étape 1 : WHOIS</h3>
<pre><code class="language-bash"># Identifier le registrant du domaine
whois acme-support-it.com

# Informations à extraire :
# - Nom du registrant (si non masqué)
# - Date de création (récent = suspect)
# - Registrar utilisé
# - Nameservers</code></pre>

<h3>Étape 2 : DNS</h3>
<pre><code class="language-bash"># Enregistrements DNS complets
dig acme-support-it.com ANY

# Serveurs mail (le phishing passe-t-il par ce domaine ?)
dig acme-support-it.com MX

# Enregistrements TXT (SPF, DKIM — correctement configurés ?)
dig acme-support-it.com TXT</code></pre>

<h3>Étape 3 : Certificate Transparency</h3>
<pre><code class="language-bash"># Sous-domaines via crt.sh
curl -s "https://crt.sh/?q=%25.acme-support-it.com&output=json" | jq '.[].name_value' | sort -u</code></pre>

<h3>Étape 4 : Wayback Machine</h3>
<p>Vérifier si le domaine a eu une vie antérieure : <code>web.archive.org/web/*/acme-support-it.com</code></p>

<h3>Étape 5 : Headers de l'email</h3>
<pre><code class="language-text">Analyser les headers complets de l'email de phishing :
- Received: IP d'origine → Shodan
- Return-Path: adresse de rebond
- X-Mailer: outil d'envoi utilisé
- Message-ID: domaine dans le Message-ID</code></pre>

<h3>Étape 6 : Rapport</h3>
<p>Rédiger un rapport court au format BLUF :</p>
<pre><code class="language-text">RÉSUMÉ : Le domaine acme-support-it.com a été créé il y a [X] jours
via [registrar], utilisant les nameservers [Y]. L'infra pointe vers
[IP], hébergée chez [provider], dans [pays]. Le certificat SSL a été
émis il y a [Z] heures. Évaluation : domaine créé spécifiquement
pour cette campagne de phishing ciblant notre organisation.

RECOMMANDATION : Bloquer le domaine dans le proxy/firewall.
Signaler à l'hébergeur et au registrar pour abus.</code></pre>
      `,
            quiz: [
                { id: "q8-1-1", question: "Quel est le premier indicateur de suspicion quand on analyse le WHOIS d'un domaine de phishing ?", options: ["Le nom de domaine contient des tirets", "La date de création est très récente (quelques jours/semaines)", "Le domaine est enregistré chez un registrar connu", "Le domaine utilise des nameservers Cloudflare"], correct: 1, explanation: "Un domaine créé très récemment (quelques jours avant l'attaque) est un indicateur fort de phishing. Les domaines légitimes ont généralement plusieurs mois ou années d'ancienneté." }
            ]
        },
        {
            id: "l8-2",
            title: "Enquête sur persona fictive",
            content: `
<h2>🔬 Mission : Reconstituer le profil de "Marc Lefebvre"</h2>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Briefing</h3><p class="text-sm">Vous êtes mandaté pour un audit Red Team. La cible est un cadre de l'entreprise fictive TechVault SARL. Votre PIR : Identifier les vecteurs d'ingénierie sociale exploitables à partir de l'empreinte numérique de "Marc Lefebvre", Directeur Technique.</p></div></div>

<h3>Phase 1 : Collecte initiale</h3>
<p>À partir du nom et de l'entreprise, rechercher sur :</p>
<ul>
<li><strong>LinkedIn :</strong> <code>site:linkedin.com/in "Marc Lefebvre" "TechVault"</code></li>
<li><strong>Google :</strong> <code>"Marc Lefebvre" "TechVault"</code></li>
<li><strong>Registre du commerce :</strong> Pappers.fr → TechVault SARL → dirigeants</li>
</ul>

<h3>Phase 2 : Expansion des identifiants</h3>
<p>Depuis le profil LinkedIn, on extrait :</p>
<ul>
<li>Format email probable : <code>m.lefebvre@techvault.fr</code>, <code>marc.lefebvre@techvault.fr</code></li>
<li>Email perso probable : <code>marc.lefebvre@gmail.com</code> (à vérifier via Holehe)</li>
<li>Technologies mentionnées : AWS, Docker, Python</li>
</ul>

<h3>Phase 3 : Vérification croisée</h3>
<pre><code class="language-bash"># Holehe — vérifier les inscriptions de l'email
holehe marc.lefebvre@gmail.com

# Sherlock — chercher le pseudo "mlefebvre" ou "marclef"
python3 sherlock mlefebvre --print-all

# HIBP — vérifier les fuites
# haveibeenpwned.com → marc.lefebvre@gmail.com</code></pre>

<h3>Phase 4 : Analyse comportementale</h3>
<p>Si un compte X/Twitter est trouvé :</p>
<ul>
<li>Analyser les horaires de publication → fuseau horaire</li>
<li>Centres d'intérêt → prétextes exploitables</li>
<li>Interactions → cercle professionnel</li>
<li>Géolocalisation → ville, quartier</li>
</ul>

<h3>Phase 5 : Synthèse et recommandation</h3>
<p>Construire un profil structuré :</p>
<pre><code class="language-text">PROFIL CIBLE : Marc Lefebvre
─────────────────────────────
Poste     : CTO, TechVault SARL
Email pro : marc.lefebvre@techvault.fr (format confirmé par Hunter.io)
Email perso: marc.lefebvre@gmail.com (Holehe: inscrit sur Twitter, GitHub, Spotify)
Pseudo    : mlefebvre (GitHub, Reddit)
Fuites    : 2 breach (LinkedIn 2012, Adobe 2013)
Ville     : Lyon (déduit des posts et géolocalisation)
Stack     : AWS, Docker, Python, PostgreSQL
Intérêts  : Trail running, photographie, vins du Rhône
─────────────────────────────
VECTEURS D'ATTAQUE POSSIBLES :
1. Phishing ciblé via thème AWS (email pro)
2. Pretexting "photographe" via intérêts perso
3. Credentials stuffing depuis les fuites (mdp probablement réutilisé)</code></pre>
      `,
            quiz: [
                { id: "q8-2-1", question: "Pourquoi les anciennes fuites de données (ex: LinkedIn 2012) sont-elles toujours pertinentes en 2026 ?", options: ["Les données sont automatiquement supprimées après 5 ans", "Parce que beaucoup de personnes réutilisent le même mot de passe ou des variations prévisibles", "Les anciennes fuites ne sont plus disponibles en ligne", "Les mots de passe de 2012 sont trop courts pour être utiles"], correct: 1, explanation: "La réutilisation de mots de passe est le talon d'Achille de la sécurité personnelle. Un mot de passe compromis en 2012 a de fortes chances d'être encore utilisé (ou d'en être une variation proche) sur d'autres comptes en 2026." }
            ]
        },
        {
            id: "l8-3",
            title: "Cartographie complète d'une PME fictive",
            content: `
<h2>🔬 Mission : Audit de surface d'attaque de "NovaTech Solutions"</h2>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Périmètre contractuel</h3><p class="text-sm">Client : NovaTech Solutions SARL. Domaine principal : novatech-solutions.fr. Effectif déclaré : 85 employés. Secteur : ESN / Conseil IT. PIR : Cartographier la surface d'attaque visible et identifier les 5 risques les plus critiques.</p></div></div>

<h3>Étape 1 : Reconnaissance du domaine</h3>
<pre><code class="language-text">1. WHOIS → registrant, dates, nameservers
2. DNS (dig ANY) → IP, MX, TXT (SPF/DKIM), NS
3. crt.sh → tous les sous-domaines certifiés
4. subfinder → sous-domaines passifs
5. DNSDumpster → carte visuelle de l'infrastructure</code></pre>

<h3>Étape 2 : Analyse d'infrastructure</h3>
<pre><code class="language-text">6. Shodan → services exposés sur les IPs identifiées
7. Censys → certificats et Shadow IT cloud
8. Wappalyzer → stack technique du site principal
9. Headers HTTP → versions de serveur, frameworks</code></pre>

<h3>Étape 3 : OSINT organisationnel</h3>
<pre><code class="language-text">10. Pappers/Infogreffe → dirigeants, bilans, statuts
11. LinkedIn → organigramme, 15+ profils d'employés
12. Offres d'emploi → stack technique détaillée, projets en cours
13. Google Dorks → documents PDF/XLSX exposés
14. GitHub → repos d'employés mentionnant novatech</code></pre>

<h3>Étape 4 : Analyse des données</h3>
<pre><code class="language-text">15. Extraction de métadonnées (ExifTool sur les documents)
16. HIBP → emails corporate dans des fuites
17. Corrélation LinkedIn → emails → pseudos → fuites
18. Mapping stack technique consolidé</code></pre>

<h3>Étape 5 : Rapport de surface d'attaque</h3>
<pre><code class="language-text">TOP 5 RISQUES IDENTIFIÉS :
1. 🔴 Jenkins (8080) exposé sans auth → accès au code source
2. 🔴 3 emails corporate dans des fuites avec passwords MD5
3. 🟠 Sous-domaine staging avec version obsolète de l'app
4. 🟠 12 documents PDF avec métadonnées révélatrices
5. 🟡 DSI publie la stack technique sur LinkedIn et SlideShare</code></pre>
      `,
            quiz: [
                { id: "q8-3-1", question: "Dans un audit de surface d'attaque, quel risque est généralement considéré comme le plus critique ?", options: ["Des documents PDF avec métadonnées", "Un Jenkins exposé sans authentification sur Internet", "Un DSI qui publie sur LinkedIn", "Un sous-domaine staging obsolète"], correct: 1, explanation: "Un Jenkins sans authentification accessible sur Internet est critique : il peut donner accès au code source, aux pipelines CI/CD, aux secrets (clés API, mots de passe), et potentiellement permettre l'exécution de code sur les serveurs de build." }
            ]
        },
        {
            id: "l8-4",
            title: "Simulation d'attaque SE (contrôlée)",
            content: `
<h2>🔬 Mission : Campagne de phishing contrôlée pour NovaTech</h2>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Cadre légal strict</h3><p class="text-sm">Cette simulation ne peut être exécutée QUE dans le cadre d'une convention d'audit signée (RoE), avec l'accord écrit de la direction et du DPO. Les données collectées sont chiffrées et remises uniquement au commanditaire.</p></div></div>

<h3>Préparation OSINT-driven</h3>
<p>À partir de l'audit de surface (lab précédent), on sait :</p>
<ul>
<li>L'entreprise utilise Microsoft 365 (enregistrements MX)</li>
<li>Le CTO s'appelle Marc Lefebvre et est fan de trail running</li>
<li>3 employés ont des mots de passe dans des fuites</li>
<li>L'entreprise travaille avec le cabinet Arthur & Brown (appels d'offres publics)</li>
</ul>

<h3>Construction du prétexte</h3>
<pre><code class="language-text">Scénario choisi : Mise à jour Microsoft 365

De: support-microsoft365@novatech-it-support.com
Objet: [NovaTech] Mise à jour obligatoire M365 — Action requise

Bonjour [Prénom],

Suite à la récente mise à jour de sécurité Microsoft 365 validée
par M. Lefebvre (Direction Technique), tous les collaborateurs
doivent renouveler leur authentification avant le [J+2].

→ Accéder au portail de mise à jour : [lien GoPhish]

Important : En cas de non-action, votre accès sera suspendu
temporairement conformément à la politique de sécurité.

Cordialement,
Support IT - NovaTech Solutions</code></pre>

<h3>Analyse des résultats</h3>
<pre><code class="language-text">Résultats de la campagne (fictifs) :
──────────────────────────────────
Emails envoyés    : 85
Emails ouverts    : 62 (73%) — Élevé
Liens cliqués     : 28 (33%) — Alerte
Credentials saisis: 12 (14%) — Critique
Signalements      : 4  (5%)  — Très faible

ANALYSE :
- Le nom du CTO dans l'email a augmenté la crédibilité (autorité)
- L'urgence du délai a réduit l'esprit critique
- Le faible taux de signalement indique un déficit de culture sécuritaire
- Les 12 employés ayant soumis leurs credentials nécessitent une formation ciblée

RECOMMANDATIONS :
1. Formation immédiate pour les 12 employés ayant soumis leurs credentials
2. Programme de micro-formation anti-phishing mensuel
3. Création d'un bouton "Signaler phishing" dans Outlook
4. Seconde campagne de test dans 3 mois pour mesurer l'amélioration</code></pre>
      `,
            quiz: [
                { id: "q8-4-1", question: "Quel élément du prétexte de phishing exploite le principe d'autorité de Cialdini ?", options: ["Le lien vers le portail de mise à jour", "La mention du nom du CTO (M. Lefebvre) comme ayant validé la procédure", "L'adresse email de l'expéditeur", "La mention de Microsoft 365"], correct: 1, explanation: "Mentionner le nom réel du CTO exploite directement le principe d'autorité : les employés sont conditionnés à obéir aux directives validées par leur hiérarchie technique. Ce détail OSINT rend le prétexte beaucoup plus crédible." }
            ]
        },
        {
            id: "l8-5",
            title: "Rédaction d'un rapport exécutif",
            content: `
<h2>🔬 Lab : Rédiger un rapport OSINT professionnel</h2>
<p>Ce lab vous guide dans la rédaction d'un rapport complet à partir des résultats des labs précédents.</p>

<h3>Template de rapport exécutif</h3>
<pre><code class="language-text">═══════════════════════════════════════════
RAPPORT D'AUDIT DE SURFACE D'ATTAQUE
Client : NovaTech Solutions SARL
Réf    : OSINT-2026-042
Date   : [DATE]
Classification : CONFIDENTIEL
═══════════════════════════════════════════

1. RÉSUMÉ EXÉCUTIF
L'audit OSINT de NovaTech Solutions a identifié [X] vulnérabilités
dont [Y] critiques. La surface d'attaque est jugée [ÉLEVÉE].
Les recommandations prioritaires incluent la sécurisation du
Jenkins exposé et un programme de sensibilisation au phishing.

2. PÉRIMÈTRE ET MÉTHODOLOGIE
- Domaines : novatech-solutions.fr, *.novatech-solutions.fr
- Période : [dates]
- Méthodologie : Reconnaissance 100% passive (OSINT)
- Outils : crt.sh, Shodan, ExifTool, Holehe, HIBP
- Limitations : Aucun test intrusif. Données publiques uniquement.

3. RÉSULTATS DÉTAILLÉS
[Voir sections détaillées par catégorie de risque]

4. MATRICE DES RISQUES
  Impact ↑
  Critique │ Jenkins   │ Breach emails
  Élevé    │ Staging   │ Métadonnées docs
  Moyen    │           │ LinkedIn exposure
  Faible   │           │
           └───────────┴──────────────────
             Probable    Possible   → Probabilité

5. RECOMMANDATIONS (par priorité)
P1 (immédiat) : Fermer l'accès Jenkins public
P1 (immédiat) : Reset des 3 comptes dans les fuites
P2 (1 mois)   : Nettoyer les métadonnées des documents publics
P2 (1 mois)   : Lancer un programme de sensibilisation phishing
P3 (3 mois)   : Politique de publication LinkedIn/réseaux sociaux

6. ANNEXES
- Captures d'écran horodatées
- Graphe d'infrastructure (DNSDumpster)
- Liste complète des sous-domaines identifiés
- Détail des fuites de données par employé</code></pre>

<h3>Checklist de qualité du rapport</h3>
<pre><code class="language-text">□ Résumé exécutif lisible en 2 minutes
□ Chaque trouvaille sourcée (URL, timestamp, capture)
□ Faits séparés des jugements analytiques
□ Niveau de confiance indiqué pour chaque conclusion
□ Recommandations actionnables et priorisées
□ Matrice de risques claire
□ Annexes complètes mais organisées
□ Classification du document indiquée
□ Numéro de référence unique
□ Mentions légales et clause de destruction</code></pre>
      `,
            quiz: [
                { id: "q8-5-1", question: "Pourquoi est-il essentiel de séparer les faits des jugements analytiques dans un rapport OSINT ?", options: ["Pour augmenter le nombre de pages du rapport", "Pour que le lecteur puisse évaluer la solidité de chaque conclusion et former son propre jugement", "Parce que c'est une obligation légale du RGPD", "Pour faciliter le copier-coller"], correct: 1, explanation: "Séparer faits et jugements permet au lecteur d'évaluer la qualité des preuves et la solidité de l'analyse. Un rapport qui mélange les deux est invérifiable et perd sa crédibilité professionnelle." }
            ]
        },
        {
            id: "l8-6",
            title: "Soutenance orale type briefing",
            content: `
<h2>🔬 Lab : Préparer et délivrer un briefing décisionnel</h2>
<p>La dernière compétence : transformer votre rapport en une présentation orale percutante de 15 minutes.</p>

<h3>Structure du briefing (15 minutes)</h3>
<pre><code class="language-text">0-2 min   : BLUF — "Voici ce qu'on a trouvé et ce que ça implique"
2-5 min   : Les 3 trouvailles les plus critiques (avec visuels)
5-8 min   : Démonstration live ou replay d'une attaque simulée
8-12 min  : Recommandations concrètes avec estimation de coût/effort
12-15 min : Questions / Discussion</code></pre>

<h3>Les 5 slides essentielles</h3>
<ol>
<li><strong>Slide BLUF :</strong> 3 bullets max. La conclusion, pas l'introduction.</li>
<li><strong>Slide Surface d'attaque :</strong> Graphe visuel de l'infrastructure exposée</li>
<li><strong>Slide Top 3 Risques :</strong> Criticité, preuve visuelle, impact</li>
<li><strong>Slide Phishing :</strong> Résultats de la campagne (taux de clic, signalement)</li>
<li><strong>Slide Recommandations :</strong> Actions priorisées avec timeline</li>
</ol>

<h3>Règles de présentation</h3>
<ul>
<li><strong>Pas de jargon non expliqué :</strong> Votre audience COMEX ne sait pas ce qu'est "crt.sh"</li>
<li><strong>Visuels > texte :</strong> Un graphe vaut mieux que 10 paragraphes</li>
<li><strong>Raconter une histoire :</strong> "Voici comment un attaquant pourrait vous compromettre en 4 étapes..."</li>
<li><strong>Anticiper le 'So what?' :</strong> Pour chaque trouvaille, expliquer l'impact business concret</li>
<li><strong>Rester factuel :</strong> Ne pas dramatiser, ne pas minimiser. Les faits suffisent.</li>
</ul>

<h3>Gestion de la posture</h3>
<ul>
<li>Connaître son sujet à fond (le brief ne représente que 10% de vos connaissances)</li>
<li>Préparer les réponses aux questions probables</li>
<li>Avoir un slide "Annexe" pour les questions techniques pointues</li>
<li>Terminer par une action : "Voici ce que nous recommandons de faire dès demain"</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 L'objectif final</h3><p class="text-sm">Votre briefing a réussi si, 24 heures après, le décideur a lancé au moins une action corrective. Si le rapport finit dans un tiroir, c'est un échec de communication — pas d'analyse.</p></div></div>
      `,
            quiz: [
                { id: "q8-6-1", question: "Quel est le critère de succès réel d'un briefing OSINT ?", options: ["Les diapositives sont esthétiquement réussies", "Le public pose beaucoup de questions", "Le décideur lance au moins une action corrective dans les 24-48h suivantes", "La présentation dure exactement 15 minutes"], correct: 2, explanation: "Un briefing réussi déclenche une action. Si le rapport finit dans un tiroir sans conséquence, la communication a échoué — même si l'analyse était excellente. L'objectif est de catalyser la décision." }
            ]
        }
    ]
};
