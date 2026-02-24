# M06 — Outils modernes : TruffleHog, EyeWitness, dnscat2

> Usage strictement autorisé et contractuel. Module orienté sécurité défensive et validation d’exposition.

## 1) TruffleHog (recherche de secrets)

### Installation
```bash
# Binaire (exemple Linux)
curl -sSfL https://raw.githubusercontent.com/trufflesecurity/trufflehog/main/scripts/install.sh | sudo sh

# Vérifier
trufflehog --version
```

### Usage
```bash
# Scan d'un repo local
trufflehog filesystem . --results=verified,unknown --json > trufflehog-findings.json

# Scan Git
trufflehog git file://. --json > trufflehog-git-findings.json
```

### Hands-on
- Scanner un dépôt d’exercice.
- Classer les findings (vrai secret / faux positif).
- Proposer rotation et révocation des secrets détectés.

---

## 2) EyeWitness (capture de surfaces web)

### Installation (Kali/Ubuntu)
```bash
sudo apt update
sudo apt install -y eyewitness
```

### Usage
```bash
# Liste d'URLs autorisées
cat > urls.txt <<'TXT'
https://example.com
https://example.org
TXT

# Capture + rapport
EyeWitness --web -f urls.txt --no-prompt --threads 4 -d eyewitness-report
```

### Hands-on
- Capturer 20 URLs d’un périmètre lab.
- Identifier pages d’admin exposées / défauts branding / certificats invalides.

---

## 3) dnscat2 (tunneling DNS)

### Installation
```bash
# Côté serveur (exemple)
git clone https://github.com/iagox86/dnscat2.git
cd dnscat2/server
bundle install
```

### Usage de démonstration (lab isolé)
```bash
# serveur
sudo ruby dnscat2.rb yourlabdomain.test
```

### Hands-on (défensif)
- Générer un trafic de test contrôlé.
- Détecter indicateurs : volume DNS anormal, entropie élevée, sous-domaines longs/fréquence.
- Rédiger règle de détection SIEM.

## Sorties attendues module
- `trufflehog-findings-reviewed.csv`
- `eyewitness-priority-pages.md`
- `dnscat2-detection-playbook.md`
