# M01 — OSINT Fondamentaux (niveau opérationnel)

## Objectifs
- Distinguer donnée, information, renseignement.
- Construire un plan de collecte orienté besoin métier.
- Appliquer OPSEC minimale avant toute investigation.

## Méthode de référence
1. **PIR** (Priority Intelligence Requirements)
2. **Plan de collecte** (sources, limites, timing)
3. **Collecte passive**
4. **Validation croisée** (2 sources indépendantes min.)
5. **Analyse & hypothèses rivales**
6. **Livrable décisionnel**

## Commandes utiles (fondamentaux)
```bash
# DNS passif
dig +short A example.com
dig +short MX example.com

# Certificats publics
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq '.[0:5]'

# Snapshot historique
echo "https://web.archive.org/web/*/https://example.com" 
```

## Hands-on — Cadrage d’une investigation

### Contexte
Une PME veut connaître sa surface d’exposition publique en 48h.

### Tâches
1. Rédiger 5 PIR concrets.
2. Lister 10 sources passives autorisées.
3. Définir RoE (interdits explicites : scan actif, contact humain non autorisé, collecte de secrets).
4. Construire une matrice “source → fiabilité → coût → biais”.

### Livrables attendus
- `PIR.md`
- `plan_collecte.csv`
- `roe.md`

## Critères de réussite
- PIR exploitables par un décideur (pas de formulation vague).
- Conformité légale explicite.
- Trace des hypothèses et incertitudes.
