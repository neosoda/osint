# M02 — SOCMINT, GEOINT, Métadonnées, Breach Data

## Objectifs
- Appliquer une méthodologie SOCMINT multi-plateformes.
- Réaliser une géolocalisation probabiliste à partir d’images.
- Exploiter les métadonnées sans surinterprétation.
- Conduire une recherche breach avec chaîne de preuve.

## SOCMINT avancé

## Workflow
1. Identifier les alias principaux/secondaires.
2. Corréler `username`, email, photo de profil, bio, timezone.
3. Établir graphe d’identité (nœuds + liens + niveau de confiance).

```bash
# Pseudo hunting (usage éthique et autorisé uniquement)
python3 sherlock username --timeout 10
maigret username --html report.html
```

## GEOINT imagerie
- Vérifier ombres, météo, saison, signalétique, architecture.
- Croiser avec cartes/Street View/satellites.

```bash
# Extraction métadonnées image
exiftool image.jpg

# Si coordonnées GPS présentes
exiftool -n -gpslatitude -gpslongitude image.jpg
```

## Métadonnées documents
```bash
# Métadonnées PDF/Office
exiftool rapport.pdf
strings rapport.pdf | head
```

## Breach data (cadre défensif)
- Sources autorisées uniquement (HIBP, prestataires contractuels).
- Éviter toute conservation de secrets en clair.

```bash
# Exemple API HIBP (clé requise, usage défensif)
curl -s -H "hibp-api-key: $HIBP_API_KEY" \
  "https://haveibeenpwned.com/api/v3/breachedaccount/user@example.com"
```

## Hands-on — Persona fictive

### Tâches
1. Créer graphe d’identité d’une persona d’exercice.
2. Géolocaliser une image fournie en indiquant niveau de confiance.
3. Extraire métadonnées d’un PDF d’exercice.
4. Simuler rapport de risque breach (sans donnée sensible réelle).

### Livrables
- `identity_graph.md`
- `geoint_assessment.md`
- `metadata_findings.md`
- `breach_risk_report.md`

### Critères
- Chaque assertion cite sa source.
- Distinction claire **fait / hypothèse / incertitude**.
