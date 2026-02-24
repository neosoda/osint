# État actuel du dépôt — Audit pédagogique OSINT & Ingénierie Sociale

## 1) Cartographie rapide

- **Plateforme** : SPA React/Vite avec contenu pédagogique stocké dans `src/data/phases/phase0.js` à `phase9.js`.
- **Parcours** : 10 phases (fondamentaux, OSINT humain, OSINT technique, analyse, social engineering, avancé, labs, spécialisation).
- **Évaluation** : quiz bien présent sur la majorité des leçons.
- **Toolkit** : base riche d’outils dans `src/data/toolkitData.js`.

## 2) Constats qualité technique

### Points forts
- Couverture large des fondamentaux OSINT et de la méthodologie.
- Présence d’outils clés : **Sherlock, Maigret, Maltego CE, Censys, Shodan, HIBP**.
- Volet juridique/éthique déjà structuré.

### Gaps / risques détectés
1. **Labs structurés incomplets par section**
   - La propriété `lab` n’apparaît qu’une seule fois dans les phases; la pratique est surtout concentrée en phase 8.
   - Risque : progression inégale théorie → pratique.

2. **SOCMINT/GEOINT avancé à homogénéiser**
   - Présent mais pas standardisé avec une méthodologie reproductible (checklists, artefacts attendus, scoring).

3. **Breach data et métadonnées à industrialiser**
   - Bon niveau d’introduction, mais manque de runbooks opérationnels (chaîne de preuve, normalisation CSV/JSON, validation croisée systématique).

4. **Outillage moderne manquant dans la pédagogie centrale**
   - **TruffleHog**, **EyeWitness**, **dnscat2** non intégrés comme modules complets (installation + cas d’usage + OPSEC + TP).

5. **Architecture de contenu couplée au code applicatif**
   - Les cours sont des strings HTML/Markdown dans des fichiers JS; maintenance et revue pédagogique plus coûteuses.

## 3) Proposition de structure cible (référence)

```text
/docs/formation-reference/
  README.md
  00-etat-actuel.md
  01-plan-amelioration.md
  /modules/
    M01-osint-fondamentaux.md
    M02-socmint-geoint-metadata-breach.md
    M03-osint-technique-infrastructure.md
    M04-ingenierie-sociale-psychologie-pretexting.md
    M05-phishing-vishing-defense.md
    M06-outils-modernes-trufflehog-eyewitness-dnscat2.md
  /guides/
    G01-modele-lab.md
    G02-grille-evaluation.md
```

## 4) Stratégie de migration recommandée

1. **Découpler le contenu** vers des fichiers Markdown versionnés dans `docs/formation-reference`.
2. **Standardiser chaque module** avec le même squelette : objectifs, prérequis, théorie, procédures, TP, quiz, livrables.
3. **Ajouter au moins 1 lab par module** avec critères de réussite mesurables.
4. **Maintenir conformité légale/éthique** dans chaque exercice via encadré RoE + limitations explicites.
5. **Préparer ingestion front-end** ultérieure via parser Markdown (sans casser l’existant JS immédiatement).
