// PHASE 5 — Méthodologie d'Enquête
export const phase5 = {
    id: "m5",
    title: "Phase 5 — Méthodologie d'Enquête",
    icon: "BrainCog",
    lessons: [
        {
            id: "l5-1",
            title: "Cycle du renseignement",
            content: `
<h2>La structure qui sépare l'amateur de l'analyste</h2>
<p>Le <strong>cycle du renseignement</strong> est le cadre méthodologique universel utilisé par les services de renseignement, les forces armées, et les cabinets de conseil en intelligence économique. Sans ce cycle, vous ne faites pas de l'OSINT — vous surfez sur Internet.</p>

<h3>Les 5 phases du cycle</h3>

<h4>1. Direction (Planification)</h4>
<p>Définir <strong>ce qu'on cherche</strong> et <strong>pourquoi</strong>. C'est la phase la plus critique et la plus souvent bâclée.</p>
<ul>
<li><strong>PIR (Priority Intelligence Requirements) :</strong> Les questions auxquelles le renseignement doit répondre</li>
<li><strong>SIR (Specific Intelligence Requirements) :</strong> Les sous-questions opérationnelles</li>
<li><strong>Périmètre :</strong> Limites géographiques, temporelles, techniques</li>
<li><strong>Contraintes :</strong> Temps, budget, légalité, OPSEC</li>
</ul>

<h4>2. Collecte</h4>
<p>Rassembler les données brutes depuis les sources identifiées. Passif d'abord, semi-actif ensuite si autorisé.</p>
<ul>
<li>Sources ouvertes (web, réseaux sociaux, registres)</li>
<li>Sources techniques (DNS, Shodan, CT logs)</li>
<li>Sources humaines (HUMINT — dans un cadre Red Team uniquement)</li>
</ul>

<h4>3. Traitement</h4>
<p>Organiser, nettoyer et structurer les données collectées :</p>
<ul>
<li>Éliminer les doublons et les faux positifs</li>
<li>Normaliser les formats (dates, noms, identifiants)</li>
<li>Classer par pertinence et fiabilité (notation Admiralty)</li>
<li>Stocker dans une base structurée (tableur, Maltego, Obsidian)</li>
</ul>

<h4>4. Analyse</h4>
<p>Transformer les données en intelligence. C'est ici que la valeur ajoutée de l'analyste humain est irremplaçable :</p>
<ul>
<li>Identifier les patterns et les anomalies</li>
<li>Formuler et tester des hypothèses (ACH)</li>
<li>Évaluer les lacunes (que ne sait-on PAS ?)</li>
<li>Produire des jugements analytiques (assess, estimate, evaluate)</li>
</ul>

<h4>5. Diffusion</h4>
<p>Livrer l'intelligence au bon format, au bon destinataire, au bon moment :</p>
<ul>
<li>Rapport technique (pour l'équipe sécurité)</li>
<li>Rapport exécutif (pour la direction)</li>
<li>Briefing oral (pour les décideurs pressés)</li>
<li>Alerte en temps réel (pour les menaces imminentes)</li>
</ul>

<pre><code class="language-text">Direction → Collecte → Traitement → Analyse → Diffusion
    ↑                                              │
    └──────────── Feedback/Réévaluation ←──────────┘</code></pre>
<p>Le cycle est <strong>itératif</strong> : le feedback du destinataire déclenche un nouveau cycle.</p>
      `,
            quiz: [
                { id: "q5-1-1", question: "Quelle est la phase la plus critique du cycle du renseignement ?", options: ["La collecte, car il faut rassembler un maximum de données", "La diffusion, car elle détermine l'impact", "La direction (planification), car elle définit ce qu'on cherche et pourquoi", "L'analyse, car elle transforme les données en intelligence"], correct: 2, explanation: "La direction est la phase la plus critique : elle définit les PIR (Priority Intelligence Requirements). Sans une question bien formulée, toute la collecte et l'analyse qui suivent seront du bruit. Un bon PIR = un bon renseignement." }
            ]
        },
        {
            id: "l5-2",
            title: "Hypothèses & falsification",
            content: `
<h2>Penser comme un scientifique, pas comme un détective de fiction</h2>
<p>La méthode scientifique est le meilleur antidote contre les biais cognitifs en OSINT. Un analyste ne cherche pas à <em>prouver</em> qu'il a raison — il cherche à <em>falsifier</em> ses hypothèses.</p>

<h3>Formulation d'hypothèses</h3>
<p>Une hypothèse OSINT doit être :</p>
<ul>
<li><strong>Spécifique :</strong> "Le compte @jd42 sur X appartient à Jean Dupont, DSI d'AcmeCorp" (pas "quelqu'un de chez AcmeCorp")</li>
<li><strong>Falsifiable :</strong> Il doit exister un test qui pourrait la réfuter</li>
<li><strong>Basée sur des observables :</strong> Elle découle de données, pas d'intuitions</li>
</ul>

<h3>ACH — Analysis of Competing Hypotheses</h3>
<p>Développée par Richards Heuer (CIA), l'ACH est la technique analytique structurée la plus utilisée dans le renseignement :</p>
<ol>
<li>Formuler toutes les hypothèses plausibles (H1, H2, H3...)</li>
<li>Lister toutes les preuves collectées (E1, E2, E3...)</li>
<li>Construire une matrice hypothèses × preuves</li>
<li>Pour chaque case : la preuve est-elle <strong>cohérente (C)</strong>, <strong>incohérente (I)</strong>, ou <strong>neutre (N)</strong> avec l'hypothèse ?</li>
<li>L'hypothèse avec le <strong>moins d'incohérences</strong> est la plus probable</li>
</ol>

<h4>Exemple de matrice ACH</h4>
<pre><code class="language-text">                    H1: @jd42 = Dupont   H2: Homonyme   H3: Faux profil
E1: Même entreprise       C                   N              I
E2: Même ville            C                   C              N
E3: Même photo            C                   I              C
E4: Style différent       I                   C              C
E5: Email lié             C                   I              N
───────────────────────────────────────────────────────────
Incohérences:             1                   2              1</code></pre>

<h3>Le piège de la confirmation circulaire</h3>
<p>Danger fréquent : utiliser la même source pour formuler ET confirmer une hypothèse. Si le profil X de @jd42 mentionne "AcmeCorp" et que votre seule preuve que @jd42 = Dupont est "il travaille chez AcmeCorp", vous avez une boucle — pas une preuve.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🧠 Règle fondamentale</h3><p class="text-sm">Ne tombez jamais amoureux de votre hypothèse. Le rôle de l'analyste n'est pas d'avoir raison — c'est de réduire l'incertitude. Si les preuves contredisent votre hypothèse préférée, abandonnez-la sans regret.</p></div></div>
      `,
            quiz: [
                { id: "q5-2-1", question: "Dans la méthode ACH, comment identifie-t-on l'hypothèse la plus probable ?", options: ["C'est celle qui a le plus de preuves cohérentes", "C'est celle qui a le moins d'incohérences avec les preuves disponibles", "C'est celle qui semble la plus logique intuitivement", "C'est toujours la première formulée"], correct: 1, explanation: "La logique de l'ACH repose sur la falsification : on ne cherche pas l'hypothèse la mieux confirmée, mais celle la moins contredite. C'est un renversement de logique fondamental emprunté à la méthode scientifique." }
            ]
        },
        {
            id: "l5-3",
            title: "Corrélation vs causalité",
            content: `
<h2>Le piège logique le plus dangereux</h2>
<p>La confusion entre corrélation et causalité est la source d'erreurs analytiques les plus graves en OSINT. Deux événements peuvent être liés sans que l'un ne cause l'autre.</p>

<h3>Définitions</h3>
<ul>
<li><strong>Corrélation :</strong> Deux variables évoluent ensemble (A et B se produisent ensemble)</li>
<li><strong>Causalité :</strong> A provoque directement B</li>
<li><strong>Coïncidence :</strong> A et B se produisent ensemble par hasard</li>
<li><strong>Variable confondante :</strong> C provoque à la fois A et B, créant une fausse impression de lien A→B</li>
</ul>

<h3>Exemples en OSINT</h3>
<table>
<thead><tr><th>Observation</th><th>Conclusion hâtive</th><th>Réalité possible</th></tr></thead>
<tbody>
<tr><td>Deux comptes publient aux mêmes heures</td><td>"C'est la même personne"</td><td>Ils sont dans le même fuseau horaire et travaillent de nuit</td></tr>
<tr><td>Un employé consulte des forums de hacking</td><td>"Il prépare une attaque interne"</td><td>Il fait de la veille sécuritaire dans le cadre de son travail</td></tr>
<tr><td>Un suspect a voyagé dans le même pays qu'une cyberattaque</td><td>"Il est impliqué"</td><td>Des millions de personnes voyagent chaque jour dans ce pays</td></tr>
</tbody>
</table>

<h3>Tests de causalité</h3>
<p>Avant de conclure à un lien causal, vérifiez :</p>
<ol>
<li><strong>Temporalité :</strong> A se produit-il AVANT B ? (nécessaire mais pas suffisant)</li>
<li><strong>Mécanisme :</strong> Existe-t-il un mécanisme plausible reliant A à B ?</li>
<li><strong>Exclusion :</strong> A-t-on éliminé les variables confondantes ?</li>
<li><strong>Reproducibilité :</strong> Le lien se vérifie-t-il dans d'autres contextes ?</li>
<li><strong>Dose-réponse :</strong> Plus de A entraîne-t-il plus de B ?</li>
</ol>

<h3>Formulation dans les rapports</h3>
<p>Le langage analytique doit refléter le niveau de certitude :</p>
<pre><code class="language-text">Certitude élevée  : "Nous évaluons que..." / "Les preuves indiquent..."
Certitude moyenne : "Il est probable que..." / "Les indices suggèrent..."
Certitude faible  : "Il est possible que..." / "On ne peut pas exclure..."
Inconnu           : "Les données sont insuffisantes pour conclure"</code></pre>
      `,
            quiz: [
                { id: "q5-3-1", question: "Deux comptes Twitter publient systématiquement aux mêmes heures. Peut-on conclure qu'il s'agit de la même personne ?", options: ["Oui, c'est une preuve solide", "Non, c'est une corrélation qui peut s'expliquer par un fuseau horaire commun ou une simple coïncidence", "Oui, si les contenus sont similaires", "Seulement si les comptes ont moins de 100 followers"], correct: 1, explanation: "Des horaires similaires sont une corrélation, pas une preuve de causalité. Des milliers de personnes dans un même fuseau horaire peuvent avoir des patterns d'activité similaires. Il faut des preuves supplémentaires (email commun, même IP, même style d'écriture)." }
            ]
        },
        {
            id: "l5-4",
            title: "Détection de désinformation",
            content: `
<h2>Séparer le signal du bruit dans un monde de fake news</h2>
<p>L'analyste OSINT doit être capable de détecter la désinformation, la mésinformation et la manipulation — tant dans les sources qu'il utilise que dans les phénomènes qu'il observe.</p>

<h3>Taxonomie</h3>
<ul>
<li><strong>Mésinformation :</strong> Information fausse diffusée sans intention de nuire (erreur, rumeur)</li>
<li><strong>Désinformation :</strong> Information fausse diffusée intentionnellement pour tromper</li>
<li><strong>Malinformation :</strong> Information vraie diffusée pour nuire (fuite de vie privée, chantage)</li>
</ul>

<h3>Le framework SIFT</h3>
<p>Développé par Mike Caulfield, le framework <strong>SIFT</strong> est une méthode rapide de vérification :</p>
<ol>
<li><strong>S — Stop :</strong> Arrêtez-vous avant de partager ou de croire. Résistez à la réaction émotionnelle.</li>
<li><strong>I — Investigate the source :</strong> Qui publie ? Quelle expertise ? Quel agenda ?</li>
<li><strong>F — Find better coverage :</strong> D'autres sources crédibles rapportent-elles la même chose ?</li>
<li><strong>T — Trace claims :</strong> Remontez à la source originale. L'information a-t-elle été déformée en chaîne ?</li>
</ol>

<h3>Techniques de vérification d'images</h3>
<ul>
<li><strong>Reverse image search :</strong> L'image apparaît-elle dans un autre contexte, à une autre date ?</li>
<li><strong>Analyse EXIF :</strong> Les métadonnées sont-elles cohérentes avec le contexte revendiqué ?</li>
<li><strong>FotoForensics :</strong> Détection de manipulation (clonage, suppression) via Error Level Analysis (ELA)</li>
<li><strong>InVID/WeVerify :</strong> Plugin de fact-checking pour vérifier les vidéos et images</li>
</ul>

<h3>Indicateurs de comptes de propagande</h3>
<ul>
<li>Compte créé récemment avec activité immédiate et intense</li>
<li>Publication 24h/24 (suggère l'automatisation)</li>
<li>Contenu exclusivement partisan, sans nuance</li>
<li>Amplification mutuelle entre comptes similaires</li>
<li>Photos de profil générées par IA (vérification via AI-generated face detectors)</li>
<li>Bio vague ou contradictoire</li>
</ul>
      `,
            quiz: [
                { id: "q5-4-1", question: "Quelle est la première étape du framework SIFT pour vérifier une information ?", options: ["Investigate — chercher la source", "Stop — résister à la réaction émotionnelle avant d'agir", "Find — trouver d'autres sources", "Trace — remonter à l'origine"], correct: 1, explanation: "Le 'S' de SIFT signifie Stop : la première chose à faire face à une information est de résister à la réaction émotionnelle immédiate. Les fake news sont conçues pour provoquer des réactions viscérales qui court-circuitent l'esprit critique." }
            ]
        },
        {
            id: "l5-5",
            title: "Rédaction d'un rapport d'intelligence",
            content: `
<h2>L'art de transformer l'analyse en action</h2>
<p>Un rapport d'intelligence qui ne déclenche aucune action est un échec. La rédaction du rapport est une compétence à part entière — aussi importante que l'analyse elle-même.</p>

<h3>Structure standard d'un rapport OSINT</h3>

<h4>1. Résumé exécutif (Executive Summary)</h4>
<p>1 page maximum. Destiné aux décideurs pressés. Contient : le contexte en 2 phrases, les conclusions majeures, et les recommandations prioritaires. Si le lecteur ne lit que cette page, il doit comprendre l'essentiel.</p>

<h4>2. Contexte et périmètre</h4>
<ul>
<li>PIR d'origine / question posée par le commanditaire</li>
<li>Périmètre défini (domaines, personnes, période)</li>
<li>Méthodologie employée (outils, sources)</li>
<li>Limitations et réserves</li>
</ul>

<h4>3. Analyse détaillée</h4>
<p>Le corps du rapport. Organisé par thème ou par question :</p>
<ul>
<li>Présentation des faits (preuves sourcées, captures d'écran, URLs)</li>
<li>Analyse et interprétation (jugements analytiques avec niveau de confiance)</li>
<li>Hypothèses alternatives considérées</li>
<li>Lacunes identifiées (ce qu'on ne sait pas)</li>
</ul>

<h4>4. Conclusions et recommandations</h4>
<ul>
<li>Conclusions factuelles (ce qu'on a établi)</li>
<li>Évaluation des risques (matrice impact × probabilité)</li>
<li>Recommandations actionnables et priorisées</li>
</ul>

<h4>5. Annexes</h4>
<ul>
<li>Preuves brutes (captures d'écran horodatées)</li>
<li>Graphes et visualisations</li>
<li>IOCs (Indicators of Compromise) le cas échéant</li>
<li>Méthodologie détaillée et outils utilisés</li>
</ul>

<h3>Les 5 règles d'or de la rédaction</h3>
<ol>
<li><strong>Séparer faits et opinions :</strong> "Le compte a été créé le 15 mars" (fait) vs "Il est probable que ce compte soit un sock puppet" (jugement)</li>
<li><strong>Sourcer systématiquement :</strong> Chaque affirmation est liée à une preuve en annexe</li>
<li><strong>Utiliser le vocabulaire analytique :</strong> Évaluer, estimer, juger — jamais "je pense que"</li>
<li><strong>Être concis :</strong> Un rapport de 15 pages bien structuré vaut mieux qu'un dump de 200 pages</li>
<li><strong>Anticiper les questions :</strong> Si le lecteur va se demander "mais pourquoi ?", la réponse doit être dans le rapport</li>
</ol>
      `,
            quiz: [
                { id: "q5-5-1", question: "Quelle section d'un rapport OSINT est la plus importante pour un décideur pressé ?", options: ["Les annexes techniques", "L'analyse détaillée", "Le résumé exécutif (Executive Summary)", "La méthodologie"], correct: 2, explanation: "Le résumé exécutif est conçu pour les décideurs qui n'ont pas le temps de lire le rapport complet. Il doit contenir l'essentiel en une page : contexte, conclusions majeures, et recommandations prioritaires." }
            ]
        },
        {
            id: "l5-6",
            title: "Présentation décisionnelle",
            content: `
<h2>Le briefing : l'OSINT au service de la décision</h2>
<p>Savoir analyser ne suffit pas si vous ne savez pas <strong>communiquer efficacement</strong>. Le briefing oral est souvent le moment décisif où votre travail influence (ou non) une décision.</p>

<h3>Format BLUF (Bottom Line Up Front)</h3>
<p>Inspiré du format militaire, le BLUF consiste à commencer par la conclusion avant les détails :</p>
<pre><code class="language-text">❌ Mauvais : "Nous avons analysé 47 sources, croisé 12 bases de données,
   et après 3 semaines d'investigation, nous avons identifié que..."

✅ Bon (BLUF) : "L'entreprise AcmeCorp expose 4 services critiques
   non patchés sur Internet, dont un RDP accessible sans MFA.
   Risque d'intrusion élevé. Voici les détails et nos recommandations."</code></pre>

<h3>La règle du 10-20-30 (Kawasaki)</h3>
<ul>
<li><strong>10 slides maximum</strong></li>
<li><strong>20 minutes de présentation</strong></li>
<li><strong>30 points minimum pour le texte</strong></li>
</ul>

<h3>Adapter le message à l'audience</h3>
<table>
<thead><tr><th>Audience</th><th>Attentes</th><th>Format</th></tr></thead>
<tbody>
<tr><td><strong>COMEX / Direction</strong></td><td>Impact business, risques, coûts</td><td>Executive Summary, métriques, recommandations priorisées</td></tr>
<tr><td><strong>RSSI / SOC</strong></td><td>Détails techniques, IOCs, actions</td><td>Rapport technique complet, feeds, playbooks</td></tr>
<tr><td><strong>Juridique</strong></td><td>Conformité, preuves, chaîne de custody</td><td>Rapport sourcé, annexes certifiées, timeline</td></tr>
<tr><td><strong>RH</strong></td><td>Impact humain, sensibilisation</td><td>Scénarios concrets, recommandations formation</td></tr>
</tbody>
</table>

<h3>Gestion des questions difficiles</h3>
<ul>
<li><strong>"Êtes-vous sûr à 100% ?"</strong> → "Nos conclusions sont basées sur X sources indépendantes. Le niveau de confiance est [élevé/moyen/faible] pour les raisons suivantes..."</li>
<li><strong>"Pouvez-vous garantir que nous ne sommes pas compromis ?"</strong> → "L'OSINT identifie l'exposition visible. Pour une garantie d'absence de compromission, un audit intrusif (pentest) est nécessaire."</li>
<li><strong>"Combien ça coûte de corriger ?"</strong> → Préparez toujours une estimation grossière des coûts et relayez vers les équipes opérationnelles pour le chiffrage précis.</li>
</ul>
      `,
            quiz: [
                { id: "q5-6-1", question: "Que signifie le format BLUF (Bottom Line Up Front) ?", options: ["Mettre les graphiques en bas de page", "Commencer par la conclusion avant les détails", "Utiliser uniquement des bullet points", "Présenter les résultats dans l'ordre chronologique"], correct: 1, explanation: "BLUF (Bottom Line Up Front) est un format de communication issu du monde militaire : on commence par la conclusion/recommandation, puis on développe les détails. L'audience sait immédiatement l'essentiel." }
            ]
        }
    ]
};
