# M05 — Phishing, Vishing, Smishing & défense

## Objectifs
- Concevoir des simulations réalistes en environnement contrôlé.
- Mesurer la vulnérabilité humaine sans exposer de données réelles.
- Construire un plan défensif mesurable.

## Cadre d’exercice
- Autorisation écrite obligatoire (RoE).
- Cibles explicitement listées.
- Interdits : collecte de credentials réels, chantage, menaces.

## Scénarios réalistes
1. **Phishing M365** : faux avis de sécurité interne.
2. **Vishing support IT** : validation de procédure MFA.
3. **Smishing RH** : message de mise à jour portail paie.

## Exemples techniques (lab isolé)
```bash
# Vérification SPF/DKIM/DMARC (domaine d'exercice)
dig +short TXT _dmarc.example.com
dig +short TXT example.com

# Journalisation métriques campagne (exemple)
cat campaign_events.csv | awk -F, '{print $3}' | sort | uniq -c
```

## Hands-on — Campagne de sensibilisation

### Tâches
1. Préparer 2 emails de simulation + 1 script vishing.
2. Définir KPI : taux clic, taux signalement, délai moyen de signalement.
3. Construire plan correctif (30/60/90 jours).

### Livrables
- `campaign_design.md`
- `kpi_dashboard.csv`
- `roadmap_30_60_90.md`

### Défense prioritaire
- MFA phishing-resistant.
- Formation continue basée sur scénarios.
- Bouton de signalement natif + SOC playbook.
