// PHASE 3 — OSINT Organisationnel & Technique
export const phase3 = {
    id: "m3",
    title: "Phase 3 — OSINT Organisationnel & Technique",
    icon: "Building2",
    lessons: [
        {
            id: "l3-1",
            title: "Cartographie d'un domaine",
            content: `
<h2>Dessiner la carte d'un domaine cible</h2>
<p>La première étape de tout audit de surface d'attaque est la cartographie du domaine : identifier tous les sous-domaines, serveurs, et services exposés. C'est le socle sur lequel repose toute l'investigation organisationnelle.</p>

<h3>Énumération de sous-domaines</h3>

<h4>Technique 1 : Certificate Transparency (passif)</h4>
<pre><code class="language-bash"># crt.sh — Requête JSON tous les certificats émis pour un domaine
curl -s "https://crt.sh/?q=%25.example.com&output=json" \\
  | jq -r '.[].name_value' | sort -u

# Résultat typique :
# mail.example.com
# vpn.example.com
# staging.example.com
# jenkins.example.com
# api-dev.example.com</code></pre>

<h4>Technique 2 : subfinder (passif)</h4>
<pre><code class="language-bash"># Énumération passive multi-sources
subfinder -d example.com -silent | sort -u

# Avec fichier de sortie
subfinder -d example.com -o subdomains.txt</code></pre>

<h4>Technique 3 : OWASP Amass (passif + actif)</h4>
<pre><code class="language-bash"># Mode passif uniquement (recommandé en contexte OSINT)
amass enum -passive -d example.com -o amass_results.txt

# Mode actif (nécessite autorisation contractuelle !)
amass enum -active -d example.com -brute</code></pre>

<h3>Analyse DNS approfondie</h3>
<pre><code class="language-bash"># Tous les enregistrements DNS
dig example.com ANY +noall +answer

# Zone transfer (souvent bloqué, mais à tenter)
dig @ns1.example.com example.com AXFR

# Enregistrements TXT (SPF, DKIM, services tiers)
dig example.com TXT
# "v=spf1 include:_spf.google.com ~all" → Google Workspace
# "MS=ms12345678" → Microsoft 365 vérifié</code></pre>

<h3>WHOIS et historique</h3>
<ul>
<li><strong>whois.domaintools.com :</strong> Historique des changements de registrant</li>
<li><strong>Reverse WHOIS :</strong> Trouver tous les domaines enregistrés par le même propriétaire</li>
<li><strong>Dates d'expiration :</strong> Un domaine expirant bientôt est vulnérable au domain hijacking</li>
</ul>

<h3>Cartographie visuelle</h3>
<p>L'outil <strong>DNSDumpster</strong> (dnsdumpster.com) génère automatiquement une carte graphique de l'infrastructure DNS, incluant les liens entre sous-domaines, serveurs mail, et nameservers. C'est un excellent point de départ pour toute investigation.</p>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Sous-domaines critiques à chercher</h3><p class="text-sm">Les sous-domaines les plus intéressants pour un auditeur : <code>admin</code>, <code>staging</code>, <code>dev</code>, <code>test</code>, <code>jenkins</code>, <code>gitlab</code>, <code>vpn</code>, <code>api</code>, <code>internal</code>, <code>legacy</code>. Ils sont souvent mal protégés et exposent des services internes.</p></div></div>
      `,
            quiz: [
                { id: "q3-1-1", question: "Quelle technique d'énumération de sous-domaines est 100% passive et ne contacte jamais la cible ?", options: ["OWASP Amass en mode actif", "Recherche dans les Certificate Transparency logs (crt.sh)", "Zone transfer DNS", "Brute-force DNS"], correct: 1, explanation: "Les CT logs sont des registres publics tenus par les autorités de certification. Les consulter (via crt.sh par exemple) ne génère aucune requête vers le domaine cible — c'est totalement passif." }
            ]
        },
        {
            id: "l3-2",
            title: "Infrastructure exposée : Shodan & Censys",
            content: `
<h2>Voir ce que l'administrateur ne voit plus</h2>
<p>Shodan et Censys sont les "yeux" de l'OSINT infrastructure. Ils scannent en permanence l'intégralité d'Internet et indexent les services exposés. Si un serveur est connecté à Internet, il est probablement dans Shodan.</p>

<h3>Shodan — Le Google de l'IoT</h3>
<p>Shodan indexe les <strong>bannières de services</strong> : la réponse qu'un serveur envoie lorsqu'on se connecte à un port ouvert. Ces bannières révèlent le type de service, sa version, et parfois des informations de configuration.</p>

<pre><code class="language-text"># Recherches Shodan essentielles

# Tous les serveurs d'une organisation
org:"AcmeCorp"

# Tous les services sur une plage IP
net:192.168.0.0/16

# Serveurs Apache vulnérables (version spécifique)
apache 2.4.49

# Webcams accessibles
has_screenshot:true port:554

# Bases de données exposées sans auth
port:27017 "MongoDB" -authentication

# Serveurs RDP exposés (vecteur de ransomware)
port:3389 "Remote Desktop"

# Systèmes SCADA industriels
port:502 "Modbus"</code></pre>

<h3>Censys — Expert en certificats</h3>
<p>Censys excelle dans la corrélation <strong>IP ↔ Certificat ↔ Domaine ↔ Service</strong>. Son point fort : identifier le <strong>Shadow IT cloud</strong> (services déployés hors du contrôle de la DSI).</p>
<pre><code class="language-text"># Trouver tous les services avec un certificat émis pour une organisation
parsed.subject.organization:"AcmeCorp"

# Services avec un certificat auto-signé (souvent du Shadow IT)
parsed.issuer.organization:"AcmeCorp" AND tags.raw:"self-signed"</code></pre>

<h3>Interprétation des résultats</h3>
<p>L'analyste OSINT ne se contente pas de lister les ports ouverts. Il interprète :</p>
<table>
<thead><tr><th>Découverte</th><th>Risque</th><th>Recommandation</th></tr></thead>
<tbody>
<tr><td>RDP (3389) exposé</td><td>🔴 Critique</td><td>Vecteur de ransomware n°1. Isoler derrière VPN immédiatement.</td></tr>
<tr><td>MongoDB sans auth</td><td>🔴 Critique</td><td>Base de données en accès libre. Données potentiellement exposées.</td></tr>
<tr><td>Jenkins (8080) public</td><td>🟠 Élevé</td><td>Pipeline CI/CD exposé. Accès potentiel au code source et aux secrets.</td></tr>
<tr><td>Apache 2.4.49</td><td>🟠 Élevé</td><td>CVE-2021-41773 (Path Traversal). Mettre à jour immédiatement.</td></tr>
<tr><td>Certificat auto-signé</td><td>🟡 Moyen</td><td>Potentiellement du Shadow IT non géré par la DSI.</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ Rappel critique</h3><p class="text-sm">Shodan et Censys sont des outils <strong>passifs</strong> — vous interrogez leur base de données, pas les serveurs cibles directement. Cependant, veillez à ne jamais tenter de vous connecter aux services exposés trouvés (RDP, MongoDB, etc.) sans autorisation contractuelle écrite.</p></div></div>
      `,
            quiz: [
                { id: "q3-2-1", question: "Pourquoi un port RDP (3389) exposé sur Internet est considéré comme critique ?", options: ["Parce que RDP est un protocole obsolète", "Parce que c'est le vecteur d'attaque numéro 1 pour les ransomwares et il permet un accès distant au poste", "Parce qu'il consomme trop de bande passante", "Parce que RDP n'est pas chiffré"], correct: 1, explanation: "RDP exposé sur Internet est le vecteur n°1 des attaques par ransomware. Les attaquants utilisent du brute-force ou des credentials volés pour se connecter, puis déploient leur payload. Il doit toujours être derrière un VPN." }
            ]
        },
        {
            id: "l3-3",
            title: "OSINT sur entreprises",
            content: `
<h2>Comprendre comment une organisation respire</h2>
<p>L'OSINT organisationnel va au-delà de la technique. Il s'agit de comprendre la structure, les dirigeants, les partenariats, et les vulnérabilités humaines d'une organisation.</p>

<h3>Sources de données légales</h3>
<table>
<thead><tr><th>Source</th><th>Données disponibles</th><th>URL</th></tr></thead>
<tbody>
<tr><td><strong>Infogreffe</strong></td><td>KBIS, statuts, comptes annuels (FR)</td><td>infogreffe.fr</td></tr>
<tr><td><strong>societe.com</strong></td><td>Dirigeants, bilans, liens capitalistiques</td><td>societe.com</td></tr>
<tr><td><strong>Pappers</strong></td><td>Données INSEE, BODACC, actes</td><td>pappers.fr</td></tr>
<tr><td><strong>OpenCorporates</strong></td><td>Registre mondial d'entreprises</td><td>opencorporates.com</td></tr>
<tr><td><strong>SEC EDGAR</strong></td><td>Rapports financiers des sociétés US cotées</td><td>sec.gov/edgar</td></tr>
<tr><td><strong>BODACC</strong></td><td>Annonces légales (créations, fusions, liquidations)</td><td>bodacc.fr</td></tr>
</tbody>
</table>

<h3>Cartographie des dirigeants</h3>
<p>Les dirigeants sont souvent le maillon OSINT le plus riche :</p>
<ul>
<li><strong>LinkedIn :</strong> Parcours professionnel, connexions, publications</li>
<li><strong>Registre du commerce :</strong> Mandats sociaux actuels et passés</li>
<li><strong>Presse :</strong> Interviews, citations, apparitions publiques</li>
<li><strong>Brevets :</strong> Dépôts de brevets révélant les axes R&D</li>
<li><strong>Conférences :</strong> Slides partagés (SlideShare, SpeakerDeck) → stack technique, projets</li>
</ul>

<h3>Liens capitalistiques et partenariats</h3>
<p>Comprendre qui possède quoi et qui travaille avec qui :</p>
<ul>
<li><strong>Organigramme capitalistique :</strong> Filiales, sociétés mères, participations croisées</li>
<li><strong>Sous-traitants :</strong> Appels d'offres publics (BOAMP, TED) révèlent les prestataires</li>
<li><strong>Partenaires technologiques :</strong> Les logos "Powered by" ou "Partner" sur les sites web</li>
<li><strong>Fournisseurs DNS/Cloud :</strong> Les enregistrements NS et les certificats révèlent l'hébergeur</li>
</ul>

<h3>Indicateurs de santé financière</h3>
<ul>
<li>Chiffre d'affaires et résultat net (comptes annuels obligatoires)</li>
<li>Évolution des effectifs (hausse = croissance, baisse = restructuration)</li>
<li>Annonces BODACC (liquidation, sauvegarde, fusion)</li>
<li>Litiges en cours (décisions de justice publiques)</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🧩 Exercice mental</h3><p class="text-sm">Pour chaque entreprise cible, posez-vous ces 5 questions :<br/>1. Qui la dirige ? 2. Qui la finance ? 3. Qui sont ses clients/fournisseurs ? 4. Quelle stack technique utilise-t-elle ? 5. Quelles données expose-t-elle involontairement ?</p></div></div>
      `,
            quiz: [
                { id: "q3-3-1", question: "Quel registre français permet d'accéder gratuitement aux comptes annuels, dirigeants et statuts d'une entreprise ?", options: ["LinkedIn", "Infogreffe / Pappers", "Google Finance", "Bloomberg Terminal"], correct: 1, explanation: "Infogreffe et Pappers donnent accès aux données publiques du Registre du Commerce et des Sociétés (RCS) : KBIS, comptes annuels, noms des dirigeants, statuts constitutifs." }
            ]
        },
        {
            id: "l3-4",
            title: "Exposition technologique",
            content: `
<h2>Lire la stack technique d'une entreprise</h2>
<p>Chaque site web, chaque application, laisse des traces de son architecture technique. Identifier la stack technologique d'une cible est essentiel pour évaluer sa surface d'attaque.</p>

<h3>Outils de fingerprinting technologique</h3>

<h4>Wappalyzer</h4>
<p>Extension navigateur qui identifie en un clic : CMS (WordPress, Drupal), frameworks JS (React, Angular), serveurs (Nginx, Apache), CDN (Cloudflare), analytics (Google Analytics, Matomo), et libraries.</p>

<h4>BuiltWith</h4>
<p>Service web qui donne un historique complet de l'évolution technologique d'un site. Permet de voir quand une technologie a été ajoutée ou retirée.</p>

<h4>Headers HTTP</h4>
<pre><code class="language-bash"># Examiner les headers HTTP d'un site
curl -I https://example.com

# Headers révélateurs typiques :
# Server: nginx/1.19.0        → Version du serveur web
# X-Powered-By: PHP/7.4.3     → Langage backend et version
# X-Generator: WordPress 6.4  → CMS utilisé
# Set-Cookie: JSESSIONID=...  → Application Java (Tomcat)
# X-AspNet-Version: 4.0.30319 → .NET Framework</code></pre>

<h4>Offres d'emploi comme source OSINT</h4>
<pre><code class="language-text"># Google Dorks pour les offres d'emploi
site:indeed.fr "AcmeCorp" "Kubernetes" OR "Docker" OR "AWS"
site:welcometothejungle.com "AcmeCorp"
site:linkedin.com/jobs "AcmeCorp" "DevOps" OR "SRE"

# Éléments révélés par les offres :
# - Stack technique : AWS, Kubernetes, Terraform, PostgreSQL
# - Outils internes : Jira, Confluence, GitLab
# - Niveaux de sécurité : "Habilitation Secret" = secteur défense
# - Taille de l'équipe : "Rejoignez une équipe de 5 DevOps"</code></pre>

<h3>Que faire de ces informations ?</h3>
<p>L'exposition technologique permet de :</p>
<ul>
<li>Identifier les CVE applicables aux versions détectées</li>
<li>Comprendre la maturité technique de l'organisation</li>
<li>Préparer des scénarios de pretexting crédibles ("Je suis du support Salesforce...")</li>
<li>Anticiper les défenses en place (WAF, CDN, SIEM)</li>
</ul>
      `,
            quiz: [
                { id: "q3-4-1", question: "Quel header HTTP est le plus révélateur de la technologie backend d'un site ?", options: ["Content-Type", "X-Powered-By", "Content-Length", "Accept-Language"], correct: 1, explanation: "Le header X-Powered-By révèle souvent le langage et la version du backend (PHP/7.4, Express, ASP.NET). C'est une information sensible que les administrateurs avertis désactivent." }
            ]
        },
        {
            id: "l3-5",
            title: "Shadow IT & Surface d'attaque visible",
            content: `
<h2>L'iceberg organisationnel</h2>
<p>Le <strong>Shadow IT</strong> désigne tous les systèmes, services et applications utilisés par les employés sans autorisation ni supervision de la DSI. C'est souvent la partie la plus vulnérable de l'infrastructure d'une organisation.</p>

<h3>Exemples courants de Shadow IT</h3>
<ul>
<li>Un développeur qui déploie un serveur de test sur AWS avec son compte personnel</li>
<li>Un service marketing qui utilise un outil SaaS non approuvé (Canva, Notion, Airtable)</li>
<li>Un sous-domaine <code>staging.example.com</code> oublié avec une vieille version de l'application</li>
<li>Un bucket S3 public créé pour un projet ponctuel et jamais supprimé</li>
<li>Un serveur Jenkins accessible sans authentification</li>
</ul>

<h3>Détection du Shadow IT via OSINT</h3>

<h4>Certificate Transparency</h4>
<p>Les certificats émis pour des sous-domaines non documentés révèlent du Shadow IT :</p>
<pre><code class="language-bash"># Chercher des certificats non standard
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq -r '.[].name_value' \\
  | sort -u | grep -v "www\\|mail\\|autodiscover"

# Résultats suspects :
# test-api.example.com
# demo-2023.example.com
# jira-old.example.com</code></pre>

<h4>Censys — Services non documentés</h4>
<pre><code class="language-text"># Certificats auto-signés émis par l'organisation
parsed.issuer.organization:"AcmeCorp" AND tags.raw:"self-signed"

# Services sur des ports non standard
ip:203.0.113.0/24 AND NOT (port:80 OR port:443)</code></pre>

<h4>GitHub — Secrets exposés</h4>
<pre><code class="language-text"># Dorks GitHub pour trouver des secrets
org:acmecorp "password" OR "api_key" OR "secret" OR "token"
"acmecorp.com" filename:.env
"acmecorp" filename:credentials</code></pre>

<h3>Surface d'attaque : le modèle ASM</h3>
<p>L'<strong>Attack Surface Management (ASM)</strong> consiste à cartographier en continu tous les points d'exposition d'une organisation :</p>
<ol>
<li><strong>Inventaire :</strong> Lister tous les domaines, IPs, services, applications</li>
<li><strong>Enrichissement :</strong> Identifier les technologies, versions, configurations</li>
<li><strong>Vulnérabilités :</strong> Corréler avec les bases de CVE</li>
<li><strong>Priorisation :</strong> Classer par criticité et exploitabilité</li>
<li><strong>Monitoring :</strong> Surveillance continue des changements</li>
</ol>
      `,
            quiz: [
                { id: "q3-5-1", question: "Qu'est-ce que le 'Shadow IT' ?", options: ["Un type de malware qui se cache dans le système", "Des systèmes et services utilisés sans autorisation de la DSI", "Un réseau local non documenté", "Le Dark Web utilisé par les employés"], correct: 1, explanation: "Le Shadow IT désigne tout système, service ou application utilisé par les employés en dehors du contrôle de la DSI — instances cloud personnelles, outils SaaS non approuvés, serveurs de test oubliés." }
            ]
        },
        {
            id: "l3-6",
            title: "Analyse des documents publics",
            content: `
<h2>Les documents publics : une mine d'or négligée</h2>
<p>Les organisations publient une quantité considérable de documents accessibles au public. Chacun de ces documents est une source potentielle de renseignement.</p>

<h3>Types de documents exploitables</h3>
<table>
<thead><tr><th>Type</th><th>Source</th><th>Intelligence extractible</th></tr></thead>
<tbody>
<tr><td>Rapports annuels</td><td>Site corporate, AMF</td><td>Stratégie, chiffres clés, risques identifiés</td></tr>
<tr><td>Appels d'offres</td><td>BOAMP, TED, marchés publics</td><td>Budget, besoins techniques, sous-traitants</td></tr>
<tr><td>Brevets</td><td>INPI, Google Patents</td><td>Axes R&D, inventeurs, technologies propriétaires</td></tr>
<tr><td>Présentations</td><td>SlideShare, SpeakerDeck</td><td>Architecture technique, projets internes, organigrammes</td></tr>
<tr><td>CVs de employés</td><td>LinkedIn, Cadremploi</td><td>Technologies maîtrisées, projets passés, certifications</td></tr>
<tr><td>Articles de blog</td><td>Blog technique de l'entreprise</td><td>Stack technique, challenges rencontrés, culture interne</td></tr>
</tbody>
</table>

<h3>Extraction automatisée avec Google Dorks</h3>
<pre><code class="language-text"># Tous les PDF publics d'un domaine
site:example.com filetype:pdf

# Documents marqués comme confidentiels (mais publiés)
site:example.com filetype:pdf "confidentiel" OR "usage interne" OR "ne pas diffuser"

# Présentations PowerPoint exposées
site:example.com filetype:pptx OR filetype:ppt

# Tableurs contenant potentiellement des données sensibles
site:example.com filetype:xlsx "budget" OR "salaires" OR "effectifs"</code></pre>

<h3>Extraction de métadonnées en masse</h3>
<pre><code class="language-bash"># Télécharger tous les PDF d'un domaine
wget -r -l 1 -A pdf https://example.com/

# Extraire les métadonnées de tous les fichiers téléchargés
exiftool -r -csv -ext pdf -ext docx -ext xlsx ./downloaded/ > metadata_report.csv

# Identifier les auteurs uniques
exiftool -r -Author ./downloaded/ | sort -u</code></pre>

<h3>Ce que révèle l'analyse massive de documents</h3>
<ul>
<li><strong>Noms d'employés :</strong> Le champ "Auteur" des métadonnées</li>
<li><strong>Structure réseau :</strong> Chemins de fichiers dans les métadonnées (<code>\\\\serveur\\partage\\...</code>)</li>
<li><strong>Logiciels et versions :</strong> "Créateur : Microsoft Word 2019"</li>
<li><strong>Imprimantes réseau :</strong> Noms et IPs des imprimantes</li>
<li><strong>Structure organisationnelle :</strong> Qui produit quel type de document</li>
<li><strong>Informations supprimées... mais pas vraiment :</strong> PDF avec des zones caviardées parfois récupérables par copier-coller</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🔥 Cas réel célèbre</h3><p class="text-sm">En 2005, un rapport du gouvernement italien sur l'affaire Calipari contenait des passages "noircis" qui étaient en réalité de simples rectangles noirs superposés sur le texte. Un simple copier-coller a révélé l'intégralité du contenu censuré. Morale : la sanitisation de documents PDF est un art que beaucoup ne maîtrisent pas.</p></div></div>
      `,
            quiz: [
                { id: "q3-6-1", question: "Pourquoi les appels d'offres publics sont-ils une source OSINT précieuse ?", options: ["Ils contiennent les mots de passe des systèmes de l'entreprise", "Ils révèlent les budgets, besoins techniques et sous-traitants de l'organisation", "Ils sont toujours classifiés et donc contiennent des données secrètes", "Ils ne sont jamais utiles en OSINT"], correct: 1, explanation: "Les appels d'offres publics révèlent les besoins techniques détaillés d'une organisation, ses budgets, ses délais, et souvent les technologies ciblées — autant d'informations précieuses pour un analyste." }
            ]
        }
    ]
};
