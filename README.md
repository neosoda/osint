# OSINT & SOCENG - Plateforme E-Learning

🚀 **OSINT & SOCENG** est une plateforme d'apprentissage éducative interactive dédiée à l'Open Source Intelligence (OSINT) et à l'Ingénierie Sociale (SE). 

Migrée d'un prototype de tableau de bord d'outils vers une **Single Page Application (SPA)** fonctionnelle avec React 18 et Tailwind CSS, cette plateforme permet aux étudiants de suivre un curriculum structuré et répertorie une boîte à outils de plus de 60 ressources d'investigation spécialisées.

![OSINT & SOCENG E-Learning Dashboard](https://github.com/neosoda/osint/raw/main/public/preview.png) *(ajoutez une image d'aperçu ici si disponible)*

---

## 🎯 Fonctionnalités Clés

- **📚 Lecteur de Cours Modulaire :** Leçons affichées via du Markdown riche. Supporte l'intégration de code avec un utilitaire "Copier" fonctionnel. L'avancement est divisé en sections (Cours, Quiz, Lab).
- **📝 Moteur de Quiz Intégré :** Système interactif de type QCM à la fin de chaque leçon avec feedback instantané de réussite ou d'échec pour tester les acquis.
- **🔧 Boîte à Outils OSINT Universelle :** Base de données complète et filtrable (par catégorie, difficulté) contenant plus de 60 outils d'investigation réels avec consignes et règles OPSEC strictes, provenant du référentiel pédagogique.
- **📈 Suivi de Progression (Persistent) :** Jauge de progression globale, marqueurs "leçon terminée", le tout enregistré localement dans le navigateur de l'utilisateur (`localStorage`).
- **🎨 Thème "Cyber" Dynamique :** Mode Sombre (Dark) et Clair (Light) au design moderne et épuré avec des composants stylisés en Glassmorphism (translucide).
- **📱 Responsive Design :** Navigation fluide via une barre latérale rétractable (Sidebar) optimisée pour bureau, tablette et appareils mobiles.

---

## 🛠️ Stack Technique

Le projet a été pensé pour être minimaliste, rapide et robuste :

- **Cœur & Framework :** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routage :** [React Router v6](https://reactrouter.com/) (Navigation SPA sans rafraîchissement)
- **State Management :** [Zustand](https://github.com/pmndrs/zustand) (Magasin d'état global avec persistance)
- **Styling :** [Tailwind CSS v3](https://tailwindcss.com/) (Classes utilitaires et variables CSS sur mesure `index.css`)
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Assistance UI :** `clsx` & `tailwind-merge` pour concaténer conditionnellement les classes.

---

## 📦 Installation & Déploiement Local

Pour lancer l'environnement de développement en local :

1. **Cloner le dépôt et entrer dans le répertoire :**
   ```bash
   git clone https://github.com/neosoda/osint.git
   cd osint/osint-elearning
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur sur [http://localhost:5173](http://localhost:5173).

---

## 📂 Structure du Projet

L'architecture `src/` sépare logiquement la donnée, la présentation et la gestion d'état :

```text
osint-elearning/
├── index.html              # Point d'entrée DOM
├── vite.config.js          # Configuration (inclut le plugin @tailwindcss/vite)
├── package.json            # Dépendances du projet
└── src/
    ├── App.jsx             # Configuration des Routes principales (Layout vs. Outils)
    ├── main.jsx            # Point de montage React (createRoot)
    ├── index.css           # Cœur du style : variables `--color` Cyber et Tailwind
    │
    ├── components/         # Répertoire des composants React
    │   ├── course/         # Rendu du cours : CoursePlayer, CourseTabs, QuizEngine, MarkdownViewer
    │   ├── layout/         # Structure visuelle globale : Layout, Sidebar, Header
    │   └── toolkit/        # Composant de traitement du Grid des outils OSINT extrait
    │
    ├── data/               # "Base de données" statique JavaScript
    │   ├── courseData.js   # Tout le curriculum, textes Markdown, et questions de Quizz
    │   └── toolkitData.js  # Plus de 60 outils extraits du fichier Excel via Python
    │
    ├── lib/                # Code utilitaire
    │   └── utils.js        # Fonction 'cn' de merge de classes CSS Tailwind
    │
    └── store/              # Configuration du store global
        └── useCourseStore.js # Logique métier avec Zustand (thème, leçons complétées)
```

---

## 💡 Remarques sur les Données du Contenu

Toutes les données sont gérées par des fichiers `.js` dans `src/data/` qui servent de "Mock API" :
* **`courseData.js` :** L'arbre des chapitres. Chaque module inclut des ID, un icone, et des leçons, elles-mêmes dotées d'un `content` (chaîne texte Markdown incluant des templates HTML comme des listes ul/li et des `<pre>` codes) ainsi que des objets `quiz`. 
* **`toolkitData.js` :** Importé et généré via du parsing (Python + Pandas) depuis le classeur master Excel original du référentiel.

Pour étendre l'application ou l'alimenter, il suffirait de transformer ces appels locaux en un module d'API distant `fetch()` (par exemple vers Firebase, Pocketbase, ou une API REST) et d'y brancher un panel Administrateur pour un CMS complet. Autrement, un éditeur de structure JSON / MDX serait pleinement suffisant.

---

## 📝 Licence & Auteurs

Dépôt créé et maintenu pour le projet d'E-Learning d'introduction OSINT (Intelligence en Sources Ouvertes) et Sécurité Réseau Offensive. Usage pédagogique exclusif. 


## 📘 Référentiel pédagogique (nouveau)

Un référentiel de transformation du contenu en formation de référence est disponible dans :

- [`docs/formation-reference/`](docs/formation-reference/README.md)
- Audit actuel : [`docs/formation-reference/00-etat-actuel.md`](docs/formation-reference/00-etat-actuel.md)
- Plan d’amélioration : [`docs/formation-reference/01-plan-amelioration.md`](docs/formation-reference/01-plan-amelioration.md)
