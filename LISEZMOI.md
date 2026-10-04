# Macros, installation sur iPhone

L'app tourne entièrement sur ton téléphone. Une fois installée, elle marche hors ligne et ne consomme rien sur ton abonnement Claude.
Le seul besoin : un hébergement gratuit pour que l'iPhone puisse la télécharger une première fois. GitHub Pages fait ça gratuitement.

## 1. Mettre l'app en ligne (une seule fois, 5 minutes, depuis ton PC)

1. Crée un compte sur github.com si tu n'en as pas.
2. Crée un nouveau dépôt (bouton « New »), nom : `macros`, visibilité **Public** (obligatoire pour Pages en gratuit), puis « Create repository ».
3. Dans le dépôt : « Add file » puis « Upload files ». Glisse **le contenu** du dossier `macros-app` (index.html, sw.js, manifest.webmanifest et les dossiers icons, fonts, vendor), pas le dossier lui-même. Valide avec « Commit changes ».
4. Va dans « Settings » puis « Pages ». Source : « Deploy from a branch ». Branche : `main`, dossier `/ (root)`. Enregistre.
5. Après une à deux minutes, l'adresse s'affiche en haut de la page Pages, du type `https://ton-pseudo.github.io/macros/`.

Le code est public, mais **tes données ne le sont pas** : elles restent dans le téléphone. Ta clé Gemini aussi.

## 2. Installer sur l'iPhone

1. Ouvre l'adresse dans **Safari** (pas Chrome).
2. Touche Partager, puis « Sur l'écran d'accueil », puis « Ajouter ».
3. Ouvre l'app depuis l'icône : elle s'affiche en plein écran, comme une vraie app, et marche hors ligne.

Ouvre-la une fois avec du réseau pour qu'elle se mette en cache.

## 3. Activer l'analyse photo (facultatif, gratuit)

1. Va sur aistudio.google.com avec ton compte Google, menu « Get API key », puis crée une clé.
2. Dans l'app : Réglages, colle la clé, touche « Tester la clé », choisis un modèle Flash, puis « Enregistrer ».

Le niveau gratuit de Google est limité en nombre de demandes par jour (le quota exact s'affiche dans AI Studio). Google indique que les données du niveau gratuit peuvent servir à améliorer ses produits : n'y envoie que des photos d'assiettes et d'étiquettes.

Sans clé, tout le reste marche : code-barres (Open Food Facts, gratuit), saisie de l'étiquette, « Décrire » hors ligne avec tes aliments, repas types.

## 4. Sauvegardes

Tes données n'existent que dans l'app. Si tu supprimes l'icône, iOS peut effacer ses données. Fais « Réglages > Exporter » de temps en temps (l'app te rappelle la date de la dernière sauvegarde) et range le fichier dans Fichiers ou iCloud Drive.

Pour récupérer les données de la V1 (celle dans Claude) : V1, Réglages, « Copier mes données », puis dans la nouvelle app, Réglages, « Coller des données ».

## 5. Mettre à jour

Quand une nouvelle version arrive : remplace les fichiers dans le dépôt GitHub (même méthode « Upload files »). L'app se met à jour à l'ouverture suivante (parfois il faut la fermer et la rouvrir deux fois). Tes données ne bougent pas.
