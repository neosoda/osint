// PHASE 6 — Ingénierie Sociale (Simulation & Défense)
export const phase6 = {
    id: "m6",
    title: "Phase 6 — Ingénierie Sociale",
    icon: "Drama",
    lessons: [
        {
            id: "l6-1",
            title: "Psychologie de l'influence (Cialdini)",
            content: `
<h2>Les leviers de la manipulation humaine</h2>
<p>L'ingénierie sociale exploite les automatismes psychologiques humains. Comprendre ces mécanismes est la première étape — que vous soyez en attaque (Red Team) ou en défense (sensibilisation).</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Contexte pédagogique</h3><p class="text-sm">Ce chapitre aborde les techniques de manipulation dans un cadre strict de Red Teaming, de sensibilisation à la sécurité, et de cyber-défense. L'objectif est de <strong>comprendre pour prévenir</strong>.</p></div></div>

<h3>Les 7 principes de Cialdini</h3>

<h4>1. Réciprocité</h4>
<p>Un service rendu crée une obligation de retour. L'humain déteste être "en dette".</p>
<p><strong>Exploitation SE :</strong> "Je vous ai aidé la semaine dernière avec votre problème d'imprimante. Pourriez-vous juste me donner accès temporairement à...?"</p>

<h4>2. Engagement et cohérence</h4>
<p>Une fois engagée dans une direction, une personne tend à rester cohérente avec ses choix précédents.</p>
<p><strong>Exploitation SE :</strong> "Vous avez dit que la sécurité est votre priorité. C'est exactement pourquoi j'ai besoin de vérifier vos identifiants — c'est la procédure de sécurité."</p>

<h4>3. Preuve sociale</h4>
<p>Les gens imitent le comportement du groupe, surtout en situation d'incertitude.</p>
<p><strong>Exploitation SE :</strong> "Tous vos collègues du département ont déjà mis à jour leurs mots de passe. Il ne reste plus que vous."</p>

<h4>4. Autorité</h4>
<p>On obéit aux figures d'autorité — même perçues artificiellement (titre, uniforme, assurance).</p>
<p><strong>Exploitation SE :</strong> "Bonjour, c'est M. Laurent du cabinet d'audit mandaté par votre direction. Nous procédons à une vérification urgente..."</p>

<h4>5. Sympathie</h4>
<p>On dit oui plus facilement aux personnes qu'on apprécie ou qui nous ressemblent.</p>
<p><strong>Exploitation SE :</strong> Construire un rapport (points communs, humour, compliments) avant de formuler la demande.</p>

<h4>6. Rareté</h4>
<p>Ce qui est rare ou limité dans le temps est perçu comme plus précieux.</p>
<p><strong>Exploitation SE :</strong> "Cette offre de mise à jour gratuite expire dans 2 heures. Cliquez ici pour ne pas perdre votre accès."</p>

<h4>7. Unité</h4>
<p>L'appartenance à un groupe commun (famille, entreprise, communauté) augmente la confiance.</p>
<p><strong>Exploitation SE :</strong> "En tant que collègue du même service, je me permets de vous demander..."</p>

<h3>Biais cognitifs exploités en SE</h3>
<table>
<thead><tr><th>Biais</th><th>Mécanisme</th><th>Exemple d'exploitation</th></tr></thead>
<tbody>
<tr><td><strong>Urgence</strong></td><td>Pression temporelle réduit l'esprit critique</td><td>"Votre compte sera supprimé dans 1h" → clic impulsif</td></tr>
<tr><td><strong>Normalité</strong></td><td>Situation présentée comme routinière</td><td>"C'est juste une vérification de routine" → baisse de garde</td></tr>
<tr><td><strong>Curiosité</strong></td><td>Désir irrésistible de savoir</td><td>"Regardez qui a consulté votre profil" → clic sur lien piégé</td></tr>
<tr><td><strong>Peur</strong></td><td>Réaction émotionnelle court-circuite la logique</td><td>"Activité suspecte sur votre compte" → panique et obéissance</td></tr>
</tbody>
</table>
      `,
            quiz: [
                { id: "q6-1-1", question: "Quel principe de Cialdini est exploité quand un phishing affirme 'Tous vos collègues ont déjà mis à jour leurs mots de passe' ?", options: ["Réciprocité", "Autorité", "Preuve sociale", "Rareté"], correct: 2, explanation: "La preuve sociale pousse les gens à imiter le comportement du groupe. En affirmant que 'tout le monde l'a déjà fait', l'attaquant normalise l'action et réduit les résistances." },
                { id: "q6-1-2", question: "Pourquoi l'urgence est-elle un levier si puissant en ingénierie sociale ?", options: ["Parce que les gens sont naturellement pressés", "Parce que la pression temporelle court-circuite la réflexion critique et pousse à l'action impulsive", "Parce que les emails urgents sont mieux référencés", "Parce que les systèmes de sécurité ne détectent pas les emails urgents"], correct: 1, explanation: "L'urgence active le système 1 (pensée rapide et émotionnelle) au détriment du système 2 (pensée lente et analytique), réduisant drastiquement la capacité de la victime à évaluer la légitimité de la demande." }
            ]
        },
        {
            id: "l6-2",
            title: "Pretexting : construire un scénario",
            content: `
<h2>L'art de la couverture crédible</h2>
<p>Le <strong>pretexting</strong> consiste à créer un scénario fictif mais crédible pour justifier une interaction avec la cible. C'est la fondation de toute attaque d'ingénierie sociale sophistiquée.</p>

<h3>Anatomie d'un bon prétexte</h3>
<p>Un prétexte efficace repose sur 5 piliers :</p>
<ol>
<li><strong>Plausibilité :</strong> Le scénario doit être réaliste dans le contexte de la cible</li>
<li><strong>Cohérence :</strong> Chaque détail du scénario doit s'imbriquer logiquement</li>
<li><strong>Urgence contrôlée :</strong> Assez d'urgence pour réduire la réflexion, pas assez pour éveiller les soupçons</li>
<li><strong>Connaissance du contexte :</strong> Utiliser des détails réels collectés en OSINT (noms, projets, jargon)</li>
<li><strong>Voie de sortie :</strong> Pouvoir se retirer proprement si le prétexte est questionné</li>
</ol>

<h3>Construction OSINT-driven d'un prétexte</h3>
<pre><code class="language-text">Phase 1 : OSINT (collecte d'informations)
├── LinkedIn → Organigramme, noms, projets en cours
├── Site web → Fournisseurs, partenaires mentionnés
├── Offres d'emploi → Technologies utilisées, challenges
├── Réseaux sociaux → Événements récents, voyages
└── Presse → Actualités de l'entreprise

Phase 2 : Construction du persona
├── Identité : Nom, titre, entreprise (fournisseur réel)
├── Email : Domaine semblable (acme-support.com vs acmecorp.com)
├── Background : LinkedIn du sock puppet cohérent
└── Détails : Numéro de ticket, référence de projet réelle

Phase 3 : Scénario
├── Hook : "Suite à votre migration Microsoft 365..."
├── Contexte : Détails réels qui établissent la crédibilité
├── Demande : Action spécifique et proportionnée
└── Sortie : "Je vous envoie un email de confirmation"</code></pre>

<h3>Prétextes classiques en Red Team</h3>
<table>
<thead><tr><th>Prétexte</th><th>Cible</th><th>Objectif</th></tr></thead>
<tbody>
<tr><td>Support IT interne</td><td>Employés non-tech</td><td>Obtenir des credentials ou installer un outil</td></tr>
<tr><td>Auditeur externe</td><td>Direction, comptabilité</td><td>Obtenir des documents ou accès</td></tr>
<tr><td>Fournisseur / Prestataire</td><td>Service achats, IT</td><td>Installer un équipement piégé</td></tr>
<tr><td>Nouveau collègue</td><td>Accueil, RH</td><td>Obtenir un badge, un poste de travail</td></tr>
<tr><td>Livreur / Coursier</td><td>Accueil physique</td><td>Accès physique au bâtiment</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ Encadrement strict</h3><p class="text-sm">Tout exercice de pretexting doit être <strong>explicitement autorisé</strong> dans les RoE (Rules of Engagement) de la mission. Les noms des employés ciblés, les scénarios autorisés, et les limites (jamais d'intimidation, de menace, ou d'exploitation de vulnérabilités personnelles) doivent être définis contractuellement.</p></div></div>
      `,
            quiz: [
                { id: "q6-2-1", question: "Quel est le rôle de l'OSINT dans la construction d'un prétexte ?", options: ["L'OSINT sert à trouver des vulnérabilités techniques", "L'OSINT fournit les détails réels (noms, projets, jargon) qui rendent le prétexte crédible", "L'OSINT n'a aucun lien avec le pretexting", "L'OSINT sert uniquement à trouver l'email de la cible"], correct: 1, explanation: "L'OSINT est la fondation du pretexting : les informations collectées (organigramme, fournisseurs, projets en cours, jargon métier) permettent de construire un scénario ultra-réaliste que la cible ne questionnera pas." }
            ]
        },
        {
            id: "l6-3",
            title: "Phishing pédagogique",
            content: `
<h2>Anatomie d'une campagne de phishing contrôlée</h2>
<p>Le phishing reste le vecteur d'attaque n°1 dans le monde. Simuler des campagnes de phishing contrôlées est essentiel pour mesurer et améliorer la résilience d'une organisation.</p>

<h3>GoPhish — Plateforme de simulation</h3>
<p>GoPhish est un framework open-source de campagne de phishing pédagogique :</p>
<pre><code class="language-bash"># Installation
go install github.com/gophish/gophish@latest

# Ou via Docker
docker run -d --name gophish -p 3333:3333 -p 8080:8080 gophish/gophish</code></pre>

<h4>Workflow d'une campagne</h4>
<ol>
<li><strong>Création du template :</strong> Email de phishing réaliste (clone d'un email légitime)</li>
<li><strong>Landing page :</strong> Page de login factice capturant les credentials (données non stockées en production)</li>
<li><strong>Liste de cibles :</strong> Employés autorisés par les RoE</li>
<li><strong>Envoi :</strong> Distribution contrôlée avec tracking (ouvertures, clics, soumissions)</li>
<li><strong>Rapport :</strong> Statistiques détaillées pour le RSSI</li>
</ol>

<h3>Anatomie d'un email de phishing efficace</h3>
<pre><code class="language-text">De: support-it@acme-corp.net (domaine similaire au vrai)
Objet: [ACTION REQUISE] Mise à jour de sécurité — Expiration dans 24h

Bonjour [Prénom],

Suite à la dernière politique de sécurité validée par M. [Nom du RSSI réel],
tous les collaborateurs doivent renouveler leur authentification Microsoft 365.

→ Cliquez ici pour mettre à jour vos accès : [lien piégé]

Cette action est obligatoire avant le [date J+1].
En cas de non-conformité, votre accès sera temporairement suspendu.

Cordialement,
L'équipe IT
AcmeCorp | Service Support Informatique</code></pre>

<h3>Indicateurs de succès d'une campagne</h3>
<table>
<thead><tr><th>Métrique</th><th>Bon résultat</th><th>Alerte</th></tr></thead>
<tbody>
<tr><td>Taux d'ouverture</td><td>< 30%</td><td>> 60%</td></tr>
<tr><td>Taux de clic</td><td>< 10%</td><td>> 30%</td></tr>
<tr><td>Taux de soumission credentials</td><td>< 5%</td><td>> 15%</td></tr>
<tr><td>Taux de signalement (report)</td><td>> 50%</td><td>< 10%</td></tr>
</tbody>
</table>

<h3>Evilginx — Phishing AitM (Niveau Expert)</h3>
<p>Evilginx est un framework de phishing avancé fonctionnant en mode <strong>Adversary-in-the-Middle</strong>. Il intercepte les tokens de session, contournant ainsi le MFA :</p>
<ul>
<li>La victime interagit avec le vrai site via le proxy Evilginx</li>
<li>Le MFA fonctionne normalement (la victime entre son code)</li>
<li>Evilginx capture le cookie de session final</li>
<li>L'attaquant utilise le cookie pour accéder au compte sans MFA</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🔴 OPSEC & destruction</h3><p class="text-sm">Evilginx est extrêmement puissant et sensible. Les RoE doivent spécifier son usage explicitement. L'infrastructure VPS doit être détruite immédiatement après l'exercice. Les données capturées sont chiffrées et remises uniquement au commanditaire.</p></div></div>
      `,
            quiz: [
                { id: "q6-3-1", question: "Quel est l'indicateur le plus important de la maturité sécuritaire d'une organisation lors d'une campagne de phishing simulée ?", options: ["Le taux d'ouverture des emails", "Le taux de clic sur les liens", "Le taux de signalement (report) des emails suspects par les employés", "Le nombre d'emails envoyés"], correct: 2, explanation: "Le taux de signalement est l'indicateur le plus révélateur : il mesure la capacité des employés à détecter ET à réagir correctement face à une tentative de phishing. Un taux > 50% indique une bonne culture de sécurité." }
            ]
        },
        {
            id: "l6-4",
            title: "Vishing & Smishing",
            content: `
<h2>L'ingénierie sociale par la voix et le SMS</h2>
<p>Le <strong>vishing</strong> (voice phishing) et le <strong>smishing</strong> (SMS phishing) exploitent des canaux de communication où les défenses techniques sont quasi inexistantes — pas de filtrage anti-phishing, pas de détection comportementale.</p>

<h3>Vishing — l'art de la persuasion orale</h3>

<h4>Pourquoi le vishing est si efficace</h4>
<ul>
<li><strong>Pression en temps réel :</strong> La victime n'a pas le temps de vérifier ou demander conseil</li>
<li><strong>Communication émotionnelle :</strong> La voix transmet urgence, autorité, empathie</li>
<li><strong>Absence de traces :</strong> Pas de lien cliquable à analyser, pas d'email à signaler</li>
<li><strong>Difficulté de vérification :</strong> Vérifier l'identité d'un appelant est presque impossible sur le moment</li>
</ul>

<h4>Scénarios de vishing courants en Red Team</h4>
<ul>
<li><strong>Support technique :</strong> "Bonjour, service IT. Nous voyons une activité anormale sur votre poste. Avez-vous 5 minutes pour un diagnostic ?"</li>
<li><strong>Banque :</strong> "Un virement suspect de 2 500€ est en cours. Pour le bloquer, j'ai besoin de votre code d'authentification."</li>
<li><strong>Direction :</strong> "C'est le bureau de M. le Directeur Général. Il a besoin d'un virement immédiat pour une acquisition confidentielle."</li>
</ul>

<h3>Smishing — SMS de phishing</h3>
<p>Le SMS bénéficie d'un taux d'ouverture de <strong>98%</strong> (vs 20% pour l'email), ce qui en fait un vecteur redoutable :</p>
<pre><code class="language-text">Exemples de smishing :

"[AcmeCorp] Votre session VPN expire dans 30min.
Renouvelez ici : https://acme-vpn.support/renew"

"[Colis] Votre livraison est en attente. Frais de
douane : 2.99€. Payez ici : https://..."

"[Impots] Remboursement de 487€ en attente.
Confirmez vos coordonnées : https://..."</code></pre>

<h3>Défenses contre vishing et smishing</h3>
<ul>
<li><strong>Formation récurrente :</strong> Sensibiliser les employés aux scénarios courants</li>
<li><strong>Procédure de vérification :</strong> Jamais partager d'information sensible par téléphone sans rappeler via le numéro officiel</li>
<li><strong>Mot d'authentification interne :</strong> Phrase secrète pour confirmer l'identité des vrais employés IT</li>
<li><strong>Signalement :</strong> Créer un canal de signalement simple et accessible</li>
</ul>
      `,
            quiz: [
                { id: "q6-4-1", question: "Quel est le taux d'ouverture moyen des SMS par rapport aux emails ?", options: ["SMS : 30%, Email : 20%", "SMS : 98%, Email : 20%", "SMS : 50%, Email : 80%", "SMS et Email ont le même taux"], correct: 1, explanation: "Les SMS ont un taux d'ouverture de ~98% contre ~20% pour les emails, ce qui rend le smishing extrêmement efficace. La quasi-totalité des SMS reçus sont lus dans les minutes qui suivent." }
            ]
        },
        {
            id: "l6-5",
            title: "Exploitation de la confiance organisationnelle",
            content: `
<h2>Les failles systémiques de la confiance</h2>
<p>Au-delà des individus, les <strong>organisations elles-mêmes</strong> créent des structures de confiance exploitables. Ce chapitre analyse comment les processus, la culture et la hiérarchie deviennent des vecteurs d'attaque.</p>

<h3>La confiance implicite dans les organisations</h3>
<ul>
<li><strong>Confiance hiérarchique :</strong> "Le DG a demandé" → obéissance sans vérification</li>
<li><strong>Confiance au badge :</strong> Un badge ou un uniforme suffit à accéder aux zones restreintes</li>
<li><strong>Confiance au fournisseur :</strong> "Je suis le technicien Cisco" → accès au datacenter</li>
<li><strong>Confiance au processus :</strong> "C'est la procédure standard" → action automatique</li>
<li><strong>Confiance numérique :</strong> Un email depuis un domaine similaire = légitime</li>
</ul>

<h3>Attaques exploitant la confiance organisationnelle</h3>

<h4>Business Email Compromise (BEC)</h4>
<p>L'arnaque au président / fraude au virement : un attaquant usurpe l'identité du PDG par email et ordonne un virement urgent au département comptabilité.</p>
<ul>
<li>Pertes mondiales : <strong>$26 milliards</strong> entre 2016 et 2023 (FBI)</li>
<li>L'OSINT fournit : nom du PDG, email format, prestataire bancaire, contexte (voyage, acquisition)</li>
<li>Le levier principal : autorité hiérarchique + urgence</li>
</ul>

<h4>Supply Chain Attack (ingénierie sociale)</h4>
<p>Compromettre un fournisseur de confiance pour atteindre la cible :</p>
<ul>
<li>L'attaquant se fait passer pour un sous-traitant existant</li>
<li>Il utilise des informations OSINT (contrats publics, appels d'offres) pour crédibiliser son approche</li>
<li>La cible accorde sa confiance car le "fournisseur" connaît les détails du projet</li>
</ul>

<h4>Tailgating / Piggybacking</h4>
<p>Suivre un employé légitime à travers une porte sécurisée sans badge :</p>
<ul>
<li>Exploitation de la politesse ("tenez la porte, je charge des cartons")</li>
<li>Exploitation du badge visible (faux badge imprimé à partir d'une photo Instagram)</li>
<li>Exploitation de la routine (aux heures d'affluence, personne ne vérifie)</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Contre-mesures systémiques</h3><p class="text-sm">La meilleure défense n'est pas technique — c'est <strong>culturelle</strong>. Créer une culture où il est normal de vérifier, de poser des questions, et de refuser poliment même les demandes des supérieurs. Les entreprises les plus résilientes sont celles où un employé junior peut dire "Non, je vérifie d'abord" à un directeur.</p></div></div>
      `,
            quiz: [
                { id: "q6-5-1", question: "Quel montant total de pertes les arnaques BEC (Business Email Compromise) ont-elles causé entre 2016 et 2023 selon le FBI ?", options: ["$1 milliard", "$5 milliards", "$26 milliards", "$100 milliards"], correct: 2, explanation: "Le FBI estime que les BEC ont causé plus de $26 milliards de pertes entre 2016 et 2023, en faisant l'une des cybermenaces les plus coûteuses au monde — bien devant les ransomwares en pertes financières directes." }
            ]
        },
        {
            id: "l6-6",
            title: "Défense & Sensibilisation",
            content: `
<h2>Construire la résilience humaine</h2>
<p>Toutes les connaissances offensives de ce module ont un objectif final : <strong>protéger les organisations et les individus</strong>. La sensibilisation est le dernier maillon de la chaîne de défense — et le plus négligé.</p>

<h3>Principes d'un programme de sensibilisation efficace</h3>
<ol>
<li><strong>Continu, pas ponctuel :</strong> Une formation annuelle de 2h ne suffit pas. Micro-formations régulières (5-10 min/semaine)</li>
<li><strong>Basé sur des scénarios réels :</strong> Pas de théorie abstraite. Des exemples concrets du secteur d'activité</li>
<li><strong>Gamifié :</strong> CTF d'ingénierie sociale, leaderboards, récompenses</li>
<li><strong>Non punitif :</strong> Les employés qui tombent dans un phishing simulé doivent être formés, pas sanctionnés</li>
<li><strong>Mesuré :</strong> KPIs clairs (taux de signalement, taux de clic, temps de réaction)</li>
</ol>

<h3>Checklist de défense personnelle</h3>
<pre><code class="language-text">□ Vérifier l'expéditeur réel (pas seulement le nom affiché)
□ Survoler les liens avant de cliquer (vérifier le domaine)
□ Ne jamais partager credentials par email/téléphone
□ Appeler le vrai numéro pour vérifier les demandes urgentes
□ Signaler tout email/appel/SMS suspect au SOC
□ Utiliser un gestionnaire de mots de passe
□ Activer le MFA sur TOUS les comptes
□ Ne JAMAIS réutiliser un mot de passe
□ Mettre à jour régulièrement ses logiciels
□ Vérifier ses propres fuites sur haveibeenpwned.com</code></pre>

<h3>Métriques de maturité</h3>
<table>
<thead><tr><th>Niveau</th><th>Description</th><th>Indicateurs</th></tr></thead>
<tbody>
<tr><td>1 - Inconscient</td><td>Aucune sensibilisation</td><td>Taux de clic phishing > 50%, aucun signalement</td></tr>
<tr><td>2 - Conscient</td><td>Formation initiale faite</td><td>Taux de clic 20-50%, signalements rares</td></tr>
<tr><td>3 - Engagé</td><td>Formations régulières + exercices</td><td>Taux de clic 10-20%, signalements fréquents</td></tr>
<tr><td>4 - Résilient</td><td>Culture de sécurité intégrée</td><td>Taux de clic < 10%, signalement > 50%</td></tr>
<tr><td>5 - Champion</td><td>Agents multiplicateurs internes</td><td>Taux de clic < 3%, peer training actif</td></tr>
</tbody>
</table>
      `,
            quiz: [
                { id: "q6-6-1", question: "Quelle approche est la plus efficace pour un programme de sensibilisation à l'ingénierie sociale ?", options: ["Une grande formation annuelle de 8 heures", "Des micro-formations continues et non punitives basées sur des scénarios réels", "Sanctionner les employés qui échouent aux tests de phishing", "Interdire l'usage de l'email dans l'entreprise"], correct: 1, explanation: "Les micro-formations continues (5-10 min/semaine), basées sur des scénarios réels du secteur et non punitives sont bien plus efficaces qu'une formation annuelle. La clé est la répétition, la pertinence, et l'absence de peur de signaler." }
            ]
        }
    ]
};
