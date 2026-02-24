# M03 — OSINT technique & infrastructure

## Objectifs
- Cartographier une surface d’attaque externe de manière passive.
- Corréler domaine, DNS, certificats, ASN, services exposés.
- Prioriser les risques exploitables par un adversaire.

## Procédure standard
1. Inventaire domaine/sous-domaines.
2. Résolution DNS + enregistrements critiques.
3. Certificats (CN/SAN) et historique.
4. Visibilité Shodan/Censys.
5. Classement risques (impact x probabilité).

```bash
# Sous-domaines passifs (exemple)
subfinder -d example.com -silent | tee subdomains.txt

# DNS records
for r in A AAAA MX NS TXT; do dig +short $r example.com; done

# Censys CLI (si configurée)
censys search "services.tls.certificates.leaf_data.subject.common_name: *.example.com"
```

## Hands-on — ASM passif d’une organisation fictive

### Tâches
1. Produire un inventaire de 20 actifs max.
2. Identifier 5 expositions à traiter en priorité.
3. Fournir un plan de remédiation en 30 jours.

### Livrables
- `asset_inventory.csv`
- `exposure_matrix.csv`
- `remediation_plan.md`

### Bonnes pratiques
- Zéro interaction active non autorisée.
- Journal de collecte horodaté.
- Capture d’écran ou export JSON pour chaque finding critique.
