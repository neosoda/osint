# Plan d’amélioration structuré — fichier par fichier

## A. Fichiers existants (application)

### 1) `src/data/phases/phase0.js` à `src/data/phases/phase9.js`
**Action**
- Conserver le contenu existant pour compatibilité.
- Ajouter une référence explicite aux nouveaux modules Markdown (source canonique).
- Ajouter un bloc `lab` systématique pour chaque leçon lors d’une phase 2 de migration.

**Risque actuel**
- Contenu pédagogique couplé au front; révision complexe.

### 2) `src/data/toolkitData.js`
**Action**
- Ajouter les entrées manquantes : TruffleHog, EyeWitness, dnscat2.
- Ajouter champs normalisés recommandés : `version_min`, `date_validation`, `niveau_risque`.

### 3) `README.md`
**Action**
- Ajouter une section “Référentiel pédagogique” pointant vers `docs/formation-reference/`.

---

## B. Fichiers créés (référentiel pédagogique)

### 1) `docs/formation-reference/00-etat-actuel.md`
- Audit complet du dépôt.
- État des labs, qualité technique, couverture outillage.

### 2) `docs/formation-reference/README.md`
- Structure cible et principes d’architecture pédagogique.

### 3) `docs/formation-reference/modules/M01-osint-fondamentaux.md`
- Méthodologie OSINT, cycle du renseignement, OPSEC, Hands-on de cadrage.

### 4) `docs/formation-reference/modules/M02-socmint-geoint-metadata-breach.md`
- SOCMINT avancé, GEOINT imagerie, métadonnées, recherche breaches.

### 5) `docs/formation-reference/modules/M03-osint-technique-infrastructure.md`
- Infra OSINT (DNS, certifs, ASM passif, Shodan/Censys) + TP.

### 6) `docs/formation-reference/modules/M04-ingenierie-sociale-psychologie-pretexting.md`
- Biais cognitifs, Cialdini, pretexting et design de scénario.

### 7) `docs/formation-reference/modules/M05-phishing-vishing-defense.md`
- Scénarios réalistes phishing/vishing + playbooks défensifs.

### 8) `docs/formation-reference/modules/M06-outils-modernes-trufflehog-eyewitness-dnscat2.md`
- Guides install/utilisation modernes avec OPSEC et labs.

### 9) `docs/formation-reference/guides/G01-modele-lab.md`
- Template standard de lab (objectif, scope, étapes, livrables, critères).

### 10) `docs/formation-reference/guides/G02-grille-evaluation.md`
- Grille d’évaluation formateur (technique, méthode, conformité, communication).
